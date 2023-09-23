# 📜 GObject Reference Manual

for GObject 2.78.0;
The latest version of this documentation can be found on-line at
https://developer.gnome.org/gobject/unstable/
https://docs.gtk.org/gobject/index.html

🍀 Introduction

Most modern programming languages come with their own native object
systems and additional fundamental algorithmic language constructs.
Just as GLib serves as an implementation of such fundamental
types and algorithms (linked lists, hash tables and so forth), the
GLib Object System provides the required implementations of a
flexible, extensible, and intentionally easy to map (into other
languages) object-oriented framework for C.

The substantial elements that are provided can be summarized as:

0.  A generic type system to register arbitrary single-inherited
    flat and deep derived types as well as interfaces for
    structured types.
    It takes care of creation, initialization and memory management
    of the assorted object and class structures, maintains
    parent/child relationships and deals with dynamic implementations
    of such types. That is, their type specific implementations are
    relocatable/unloadable during runtime.
0.  A collection of fundamental type implementations, such as integers,
    doubles, enums and structured types, to name a few.
0.  A sample fundamental type implementation to base object hierarchies
    upon - the GObject fundamental type.
0.  A signal system that allows very flexible user customization of
    virtual/overridable object methods and can serve as a powerful
    notification mechanism.
0.  An extensible parameter/value system, supporting all the provided
    fundamental types that can be used to generically handle object
    properties or otherwise parameterized types.

🍀 Concepts

1. GObject Introduction            docs/reference/tut_intro.xml
2. The GLib Dynamic Type System   docs/reference/tut_gtype.xml
3. The GObject base class         docs/reference/tut_gobject.xml
4. The GObject messaging system    docs/reference/tut_gsignal.xml

🍀 Tools Reference

1. glib-mkenums User Commands    docs/reference/glib-mkenums.xml
2. glib-genmarshal User Commands   docs/reference/glib-genmarshal.xml
3. gobject-query User Commands    docs/reference/gobject-query.xml
4. GObject Tutorial              docs/reference/tut_howto.xml
5. Related Tools                docs/reference/tut_tools.xml

🍀 Symbols References

1. Classes Hierarchy
2. GObject Sections


# 📜 GObject Introduction


## 🍀 Type System Concepts

GObject, and its lower-level type system, GType, are used by GTK and most GNOME libraries to
provide:

0. object-oriented C-based APIs and
0. automatic transparent API bindings to other compiled or interpreted languages.

A lot of programmers are used to working with compiled-only or dynamically interpreted-only
languages and do not understand the challenges associated with cross-language interoperability.
This introduction tries to provide an insight into these challenges and briefly describes
the solution chosen by GLib.

The following chapters go into greater detail into how GType and GObject work and
how you can use them as a C programmer. It is useful to keep in mind that
allowing access to C objects from other interpreted languages was one of the major design
goals: this can often explain the sometimes rather convoluted APIs and features present
in this library.

## 🍀 Data types and programming

One could say
that a programming language is merely a way to create data types and manipulate them. Most languages
provide a number of language-native types and a few primitives to create more complex types based
on these primitive types.

In C, the language provides types such as *char*, *long*, 
*pointer*. During compilation of C code, the compiler maps these
language types to the compiler's target architecture machine types. If you are using a C interpreter
(assuming one exists), the interpreter (the program which interprets 
the source code and executes it) maps the language types to the machine types of the target machine at 
runtime, during the program execution (or just before execution if it uses a Just In Time compiler engine).

Perl and Python are interpreted languages which do not really provide type definitions similar
to those used by C. Perl and Python programmers manipulate variables and the type of the variables
is decided only upon the first assignment or upon the first use which forces a type on the variable.
The interpreter also often provides a lot of automatic conversions from one type to the other. For example,
in Perl, a variable which holds an integer can be automatically converted to a string given the
required context:

```cpp
my $tmp = 10;
print "this is an integer converted to a string:" . $tmp . "\n";
```

Of course, it is also often possible to explicitly specify conversions when the default conversions provided
by the language are not intuitive.


## 🍀 Exporting a C API

C APIs are defined by a set of functions and global variables which are usually exported from a 
binary. C functions have an arbitrary number of arguments and one return value. Each function is thus
uniquely identified by the function name and the set of C types which describe the function arguments
and return value. The global variables exported by the API are similarly identified by their name and 
their type.

A C API is thus merely defined by a set of names to which a set of types are associated. If you know the
function calling convention and the mapping of the C types to the machine types used by the platform you 
are on, you can resolve the name of each function to find where the code associated to this function 
is located in memory, and then construct a valid argument list for the function. Finally, all you have to 
do is trigger a call to the target C function with the argument list.

For the sake of discussion, here is a sample C function and the associated 32 bit x86 
assembly code generated by GCC on a Linux computer:

```cpp
static void
function_foo (int foo) { }

int
main (int   argc,
      char *argv[])
{
  function_foo (10);

  return 0;
}

push   $0xa
call   0x80482f4 &lt;function_foo>
```

The assembly code shown above is pretty straightforward: the first instruction pushes
the hexadecimal value 0xa (decimal value 10) as a 32-bit integer on the stack and calls 
`function_foo`. As you can see, C function calls are implemented by
GCC as native function calls (this is probably the fastest implementation possible).

Now, let's say we want to call the C function `function_foo` from 
a Python program. To do this, the Python interpreter needs to:

0. Find where the function is located. This probably means finding the binary generated by 
the C compiler which exports this function.
0. Load the code of the function in executable memory.
0. Convert the Python parameters to C-compatible parameters before calling 
the function.
0. Call the function with the right calling convention.
0. Convert the return values of the C function to Python-compatible
variables to return them to the Python code.


The process described above is pretty complex and there are a lot of ways to make it entirely automatic
and transparent to C and Python programmers:

0. The first solution is to write by hand a lot of glue code, once for each function exported or imported,
which does the Python-to-C parameter conversion and the C-to-Python return value conversion. This glue code is then 
linked with the interpreter which allows Python programs to call Python functions which delegate work to
C functions.
0. Another, nicer solution is to automatically generate the glue code, once for each function exported or
imported, with a special compiler which
reads the original function signature.

The solution used by GLib is to use the GType library which holds at runtime a description of
all the objects manipulated by the programmer. This so-called *dynamic type*
library is then used by special generic glue code to automatically convert function parameters and
function calling conventions between different runtime domains.

    There are numerous different implementations of dynamic type systems: all C++ 
    compilers have one, Java and .NET have one too. A dynamic type system allows you
    to get information about every instantiated object at runtime. It can be implemented
    by a process-specific database: every new object created registers the characteristics 
    of its associated type in the type system. It can also be implemented by introspection
    interfaces. The common point between all these different type systems and implementations
    is that they all allow you to query for object metadata at runtime.


The greatest advantage of the solution implemented by GType is that the glue code sitting at the runtime domain 
boundaries is written once: the figure below states this more clearly.

https://docs.gtk.org/gobject/glue.png

Currently, there exist at least Python and Perl generic glue code which makes it possible to use
C objects written with GType directly in Python or Perl, with a minimum amount of work: there
is no need to generate huge amounts of glue code either automatically or by hand.

Although that goal was arguably laudable, its pursuit has had a major influence on
the whole GType/GObject library. C programmers are likely to be puzzled at the complexity 
of the features exposed in the following chapters if they forget that the GType/GObject library
was not only designed to offer OO-like features to C programmers but also transparent 
cross-language interoperability.

# 📜 The GLib Dynamic Type System

A type, as manipulated by the GLib type system, is much more generic than what
is usually understood as an Object type. It is best explained by looking at the 
structure and the functions used to register new types in the type system.

```cpp
typedef struct _GTypeInfo               GTypeInfo;
struct _GTypeInfo
{
  /* interface types, classed types, instantiated types */
  guint16                class_size;
  
  GBaseInitFunc          base_init;
  GBaseFinalizeFunc      base_finalize;
  
  /* classed types, instantiated types */
  GClassInitFunc         class_init;
  GClassFinalizeFunc     class_finalize;
  gconstpointer          class_data;
  
  /* instantiated types */
  guint16                instance_size;
  guint16                n_preallocs;
  GInstanceInitFunc      instance_init;
  
  /* value handling */
  const GTypeValueTable *value_table;
};
GType g_type_register_static (GType             parent_type,
                              const gchar      *type_name,
                              const GTypeInfo  *info,
                              GTypeFlags        flags);
GType g_type_register_fundamental (GType                  type_id,
                              const gchar                *type_name,
                              const GTypeInfo            *info,
                              const GTypeFundamentalInfo *finfo,
                              GTypeFlags                  flags);
```
      

`g_type_register_static`,
`g_type_register_dynamic` and 
`g_type_register_fundamental`
are the C functions, defined in
`gtype.h` and implemented in `gtype.c`
which you should use to register a new `GType` in the program's type system.
It is not likely you will ever need to use 
`g_type_register_fundamental`
but in case you want to, the last chapter explains how to create
new fundamental types.


Fundamental types are top-level types which do not derive from any other type 
while other non-fundamental types derive from other types.
Upon initialization, the type system not only initializes its
internal data structures but it also registers a number of core
types: some of these are fundamental types. Others are types derived from these 
fundamental types.


Fundamental and non-fundamental types are defined by:
<itemizedlist>
    class size: the class_size field in `GTypeInfo`. 
    class initialization functions (C++ constructor): the `base_init` and `class_init` fields in `GTypeInfo`.
  
    class destruction functions (C++ destructor): the base_finalize and class_finalize fields in `GTypeInfo`.
  
    instance size (C++ parameter to new): the instance_size field in `GTypeInfo`.
  
    instantiation policy (C++ type of new operator): the n_preallocs field in `GTypeInfo`.
  
    copy functions (C++ copy operators): the value_table field in `GTypeInfo`.
  
    type characteristic flags: `GTypeFlags`. 
</itemizedlist>

Fundamental types are also defined by a set of `GTypeFundamentalFlags` 
which are stored in a `GTypeFundamentalInfo`.
Non-fundamental types are furthermore defined by the type of their parent which is
passed as the parent_type parameter to `g_type_register_static`
and `g_type_register_dynamic`.


## 🍀 Copy functions
                                                       *gtype-copy*

The major common point between *all* GLib types (fundamental and 
non-fundamental, classed and non-classed, instantiatable and non-instantiatable) is that
they can all be manipulated through a single API to copy/assign them.


The `GValue` structure is used as an abstract container for all of these 
types. Its simplistic API (defined in `gobject/gvalue.h`) can be 
used to invoke the value_table functions registered
during type registration: for example `g_value_copy` copies the 
content of a `GValue` to another `GValue`. This is similar
to a C++ assignment which invokes the C++ copy operator to modify the default
bit-by-bit copy semantics of C++/C structures/classes.


The following code shows how you can copy around a 64 bit integer, as well as a `GObject`
instance pointer:

```cpp
static void test_int (void)
{
  GValue a_value = G_VALUE_INIT;
  GValue b_value = G_VALUE_INIT;
  guint64 a, b;

  a = 0xdeadbeef;

  g_value_init (&a_value, G_TYPE_UINT64);
  g_value_set_uint64 (&a_value, a);

  g_value_init (&b_value, G_TYPE_UINT64);
  g_value_copy (&a_value, &b_value);

  b = g_value_get_uint64 (&b_value);

  if (a == b) {
    g_print ("Yay !! 10 lines of code to copy around a uint64.\n");
  } else {
    g_print ("Are you sure this is not a Z80 ?\n");
  }
}

static void test_object (void)
{
  GObject *obj;
  GValue obj_vala = G_VALUE_INIT;
  GValue obj_valb = G_VALUE_INIT;
  obj = g_object_new (VIEWER_TYPE_FILE, NULL);

  g_value_init (&obj_vala, VIEWER_TYPE_FILE);
  g_value_set_object (&obj_vala, obj);

  g_value_init (&obj_valb, G_TYPE_OBJECT);

  /* g_value_copy's semantics for G_TYPE_OBJECT types is to copy the reference.
   * This function thus calls g_object_ref.
   * It is interesting to note that the assignment works here because
   * VIEWER_TYPE_FILE is a G_TYPE_OBJECT.
   */
  g_value_copy (&obj_vala, &obj_valb);

  g_object_unref (G_OBJECT (obj));
  g_object_unref (G_OBJECT (obj));
}
```

The important point about the above code is that the exact semantics of the copy calls
is undefined since they depend on the implementation of the copy function. Certain 
copy functions might decide to allocate a new chunk of memory and then to copy the 
data from the source to the destination. Others might want to simply increment
the reference count of the instance and copy the reference to the new GValue.


The value table used to specify these assignment functions is
documented in `GTypeValueTable`.

Interestingly, it is also very unlikely
you will ever need to specify a value_table during type registration
because these value_tables are inherited from the parent types for
non-fundamental types.


## 🍀 Conventions
                                                *gtype-conventions*


There are a number of conventions users are expected to follow when creating new types
which are to be exported in a header file:

0.  Type names (including object names) must be at least three
    characters long and start with ‘a–z’, ‘A–Z’ or `_`.
  
0.  Use the `object_method` pattern for function names: to invoke
    the method named `save` on an instance of object type `file`, call 
    `file_save`.
  
0.  If your library (or application) is named *Viewer*,
    prefix all your function names with *viewer_*.
    For example: `viewer_object_method`.
  
0.  returns the GType for the associated object type. For an object of type 
    *File* in the *Viewer* namespace,
    use: `VIEWER_TYPE_FILE`.
    This macro is implemented using a function named
    `prefix_object_get_type`; for example, `viewer_file_get_type`.
  
0.  Use `G_DECLARE_FINAL_TYPE` or `G_DECLARE_DERIVABLE_TYPE`
    to define various other conventional macros for your object:

    0.  `PREFIX_OBJECT (obj)` , which 
    returns a pointer of type `PrefixObject`. This macro is used to enforce
    static type safety by doing explicit casts wherever needed. It also enforces
    dynamic type safety by doing runtime checks. It is possible to disable the dynamic
    type checks in production builds (see `building GLib`).
    For example, we would create 
    `VIEWER_FILE (obj)` to keep the previous example.
  
    0.  `PREFIX_OBJECT_CLASS (klass)`, which is strictly equivalent to the previous casting macro: it does static casting with
    dynamic type checking of class structures. It is expected to return a pointer
    to a class structure of type `PrefixObjectClass`. An example is:
    `VIEWER_FILE_CLASS`.
  
    0.  `PREFIX_IS_OBJECT (obj)`, which 
    returns a `gboolean` which indicates whether the input
    object instance pointer is non-`NULL` and of type `OBJECT`.
    For example, `VIEWER_IS_FILE`.
  
    0.  `PREFIX_IS_OBJECT_CLASS (klass)`, which 
    returns a boolean if the input class pointer is a pointer to a class of type OBJECT.
    For example, `VIEWER_IS_FILE_CLASS`.
  
    0.  `PREFIX_OBJECT_GET_CLASS (obj)`, which 
    returns the class pointer associated to an instance of a given type. This macro
    is used for static and dynamic type safety purposes (just like the previous casting
    macros).
    For example, `VIEWER_FILE_GET_CLASS`.
      

The implementation of these macros is pretty straightforward: a number of simple-to-use 
macros are provided in `gtype.h`. For the example we used above, we would 
write the following trivial code to declare the macros:

```cpp
#define VIEWER_TYPE_FILE viewer_file_get_type ()
G_DECLARE_FINAL_TYPE (ViewerFile, viewer_file, VIEWER, FILE, GObject)
```


Unless your code has special requirements, you can use the
`G_DEFINE_TYPE`
macro to define a class:

```cpp
G_DEFINE_TYPE (ViewerFile, viewer_file, G_TYPE_OBJECT)
```
      

Otherwise, the `viewer_file_get_type` function must be
implemented manually:

```cpp
GType viewer_file_get_type (void)
{
  static GType type = 0;
  if (type == 0) {
    const GTypeInfo info = {
      /* You fill this structure. */
    };
    type = g_type_register_static (G_TYPE_OBJECT,
                                   "ViewerFile",
                                   &info, 0);
  }
  return type;
}
```


## 🍀 Non-instantiatable non-classed fundamental types
                                         *gtype-non-instantiatable*

A lot of types are not instantiatable by the type system and do not have
a class. Most of these types are fundamental trivial types such as *gchar*, 
and are already registered by GLib.


In the rare case of needing to register such a type in the type
system, fill a
`GTypeInfo` structure with zeros since these types are also most of the time
fundamental:

```cpp
  GTypeInfo info = {
    0,                                /* class_size */
    NULL,                        /* base_init */
    NULL,                        /* base_destroy */
    NULL,                        /* class_init */
    NULL,                        /* class_destroy */
    NULL,                        /* class_data */
    0,                                /* instance_size */
    0,                                /* n_preallocs */
    NULL,                        /* instance_init */
    NULL,                        /* value_table */
  };
  static const GTypeValueTable value_table = {
    value_init_long0,                /* value_init */
    NULL,                        /* value_free */
    value_copy_long0,                /* value_copy */
    NULL,                        /* value_peek_pointer */
    "i",                        /* collect_format */
    value_collect_int,        /* collect_value */
    "p",                        /* lcopy_format */
    value_lcopy_char,                /* lcopy_value */
  };
  info.value_table = &value_table;
  type = g_type_register_fundamental (G_TYPE_CHAR, "gchar", &info, &finfo, 0);
```



Having non-instantiatable types might seem a bit useless: what good is a type
if you cannot instantiate an instance of that type ? Most of these types
are used in conjunction with `GValue`s: a GValue is initialized
with an integer or a string and it is passed around by using the registered 
type's value_table. `GValue`s (and by extension these trivial fundamental
types) are most useful when used in conjunction with object properties and signals.



## 🍀 Instantiatable classed types: objects
                                     *gtype-instantiatable-classed*

This section covers the theory behind objects. See
for the recommended way to define a GObject.


Types which are registered with a class and are declared instantiatable are
what most closely resembles an *object*. 
Although `GObject`s (detailed in ) 
are the most well known type of instantiatable
classed types, other kinds of similar objects used as the base of an inheritance 
hierarchy have been externally developed and they are all built on the fundamental
features described below.


For example, the code below shows how you could register 
such a fundamental object type in the type system (using none of the
GObject convenience API):

```cpp
typedef struct {
  GObject parent;

  /* instance members */
  gchar *filename;
} ViewerFile;

typedef struct {
  GObjectClass parent;

  /* class members */
  /* the first is public, pure and virtual */
  void (*open)  (ViewerFile  *self,
                 GError     **error);

  /* the second is public and virtual */
  void (*close) (ViewerFile  *self,
                 GError     **error);
} ViewerFileClass;

#define VIEWER_TYPE_FILE (viewer_file_get_type ())

GType 
viewer_file_get_type (void)
{
  static GType type = 0;
  if (type == 0) {
    const GTypeInfo info = {
      sizeof (ViewerFileClass),
      NULL,           /* base_init */
      NULL,           /* base_finalize */
      (GClassInitFunc) viewer_file_class_init,
      NULL,           /* class_finalize */
      NULL,           /* class_data */
      sizeof (ViewerFile),
      0,              /* n_preallocs */
      (GInstanceInitFunc) NULL /* instance_init */
    };
    type = g_type_register_static (G_TYPE_OBJECT,
                                   "ViewerFile",
                                   &info, 0);
  }
  return type;
}
```

Upon the first call to `viewer_file_get_type`, the type named
*ViewerFile* will be registered in the type system as inheriting
from the type *G_TYPE_OBJECT*.


Every object must define two structures: its class structure and its 
instance structure. All class structures must contain as first member
a `GTypeClass` structure. All instance structures must contain as first
member a `GTypeInstance` structure. The declaration of these C types,
coming from `gtype.h` is shown below:

```cpp
struct _GTypeClass
{
  GType g_type;
};
struct _GTypeInstance
{
  GTypeClass *g_class;
};
```

These constraints allow the type system to make sure that every object instance
(identified by a pointer to the object's instance structure) contains in its
first bytes a pointer to the object's class structure.

This relationship is best explained by an example: let's take object B which
inherits from object A:

```cpp
/* A definitions */
typedef struct {
  GTypeInstance parent;
  int field_a;
  int field_b;
} A;
typedef struct {
  GTypeClass parent_class;
  void (*method_a) (void);
  void (*method_b) (void);
} AClass;

/* B definitions. */
typedef struct {
  A parent;
  int field_c;
  int field_d;
} B;
typedef struct {
  AClass parent_class;
  void (*method_c) (void);
  void (*method_d) (void);
} BClass;
```
The C standard mandates that the first field of a C structure is stored starting
in the first byte of the buffer used to hold the structure's fields in memory.
This means that the first field of an instance of an object B is A's first field
which in turn is `GTypeInstance`'s first field which in
turn is `g_class`, a pointer
to B's class structure.


Thanks to these simple conditions, it is possible to detect the type of every
object instance by doing: 

```cpp
B *b;
b->parent.parent.g_class->g_type
```
or, more quickly:

```cpp
B *b;
((GTypeInstance *) b)->g_class->g_type
```

### 🐣 Initialization and Destruction

instantiation of these types can be done with 
`g_type_create_instance`,
which will look up the type information
structure associated with the type requested. Then, the instance size and instantiation
policy (if the `n_preallocs` field is set
to a non-zero value, the type system allocates
the object's instance structures in chunks rather than mallocing for every instance)
declared by the user are used to get a buffer to hold the object's instance
structure.


If this is the first instance of the object ever created, the type system must create a class structure.
It allocates a buffer to hold the object's class structure and initializes it. The first part of the
class structure (ie: the embedded parent class structure) is initialized by copying the contents from
the class structure of the parent class. The rest of class structure is initialized to zero.  If there
is no parent, the entire class structure is initialized to zero. The type system then invokes the
`base_class_initialization` functions
(`GBaseInitFunc`) from topmost 
fundamental object to bottom-most most derived object. The object's `class_init`
(`GClassInitFunc`) function is invoked afterwards to complete
initialization of the class structure.
Finally, the object's interfaces are initialized (we will discuss interface initialization
in more detail later).


Once the type system has a pointer to an initialized class structure, it sets the object's
instance class pointer to the object's class structure and invokes the object's
`instance_init` (`GInstanceInitFunc`)
functions, from top-most fundamental 
type to bottom-most most-derived type.


Object instance destruction through `g_type_free_instance` is very simple:
the instance structure is returned to the instance pool if there is one and if this was the
last living instance of the object, the class is destroyed.



Class destruction (the concept of destruction is sometimes partly 
referred to as finalization in GType) is the symmetric process of 
the initialization: interfaces are destroyed first. 
Then, the most derived 
class_finalize (`GClassFinalizeFunc`) function is invoked. Finally, the
base_class_finalize (`GBaseFinalizeFunc`) functions are 
invoked from bottom-most most-derived type to top-most fundamental type and
the class structure is freed.


The base initialization/finalization process is
very similar to the C++ constructor/destructor paradigm. The practical details are different
though and it is important not to get confused by superficial similarities. 
GTypes have no instance destruction mechanism. It is
the user's responsibility to implement correct destruction semantics on top
of the existing GType code. (This is what GObject does: see gobject.)
Furthermore, C++ code equivalent to the `base_init`
and `class_init` callbacks of GType is usually not needed because C++ cannot really create object 
types at runtime.
          

The instantiation/finalization process can be summarized as follows:

<table id="gtype-init-fini-table">
  <title>GType Instantiation/Finalization</title>
  <tgroup cols="3">
    <colspec colwidth="*" colnum="1" align="left"/>
    <colspec colwidth="*" colnum="2" align="left"/>
    <colspec colwidth="8*" colnum="3" align="left"/>
    <thead>
      <row>
        <entry>Invocation time</entry>
        <entry>Function invoked</entry>
        <entry>Function's parameters</entry>
      </row>
    </thead>
    <tbody>
      <row>
        <entry morerows="2">First call to `g_type_create_instance` for target type</entry>
        <entry>type's `base_init` function</entry>
        <entry>On the inheritance tree of classes from fundamental type to target type. 
          `base_init` is invoked once for each class structure.</entry>
      </row>
      <row>
        <!--entry>First call to `g_type_create_instance` for target type</entry-->
        <entry>target type's `class_init` function</entry>
        <entry>On target type's class structure</entry>
      </row>
      <row>
        <!--entry>First call to `g_type_create_instance` for target type</entry-->
        <entry>interface initialization, see  Non-instantiatable classed types: interfaces. </entry>
        <entry></entry>
      </row>
      <row>
        <entry>Each call to `g_type_create_instance` for target type</entry>
        <entry>target type's `instance_init` function</entry>
        <entry>On object's instance</entry>
      </row>
      <row>
        <entry morerows="2">Last call to `g_type_free_instance` for target type</entry>
        <entry>interface destruction, see Non-instantiatable non-classed fundamental types.</entry>
        <entry></entry>
      </row>
      <row>
        <!--entry>Last call to `g_type_free_instance` for target type</entry-->
        <entry>target type's `class_finalize` function</entry>
        <entry>On target type's class structure</entry>
      </row>
      <row>
        <!--entry>Last call to `g_type_free_instance` for target type</entry-->
        <entry>type's `base_finalize` function</entry>
        <entry>On the inheritance tree of classes from fundamental type to target type. 
          `base_finalize` is invoked once for each class structure.</entry>
      </row>
    </tbody>
  </tgroup>
</table>


## 🍀 Non-instantiatable non-classed types: interfaces
                             *gtype-non-instantiatable-non-classed*

This section covers the theory behind interfaces. See
for the recommended way to define an
interface.


GType's interfaces are very similar to Java's interfaces. They allow
to describe a common API that several classes will adhere to.
Imagine the play, pause and stop buttons on hi-fi equipment — those can
be seen as a playback interface. Once you know what they do, you can
control your CD player, MP3 player or anything that uses these symbols.
To declare an interface you have to register a non-instantiatable
non-classed type which derives from
`GTypeInterface`. The following piece of code declares such an interface.

```cpp
#define VIEWER_TYPE_EDITABLE viewer_editable_get_type ()
G_DECLARE_INTERFACE (ViewerEditable, viewer_editable, VIEWER, EDITABLE, GObject)

struct _ViewerEditableInterface {
  GTypeInterface parent;

  void (*save) (ViewerEditable  *self,
                GError         **error);
};

void viewer_editable_save (ViewerEditable  *self,
                           GError         **error);
```
The interface function, `viewer_editable_save` is implemented
in a pretty simple way:

```cpp
void
viewer_editable_save (ViewerEditable  *self,
                      GError         **error)
{
  ViewerEditableinterface *iface;

  g_return_if_fail (VIEWER_IS_EDITABLE (self));
  g_return_if_fail (error == NULL || *error == NULL);

  iface = VIEWER_EDITABLE_GET_IFACE (self);
  g_return_if_fail (iface->save != NULL);
  iface->save (self);
}
```

`viewer_editable_get_type` registers a type named *ViewerEditable*
which inherits from `G_TYPE_INTERFACE`. All interfaces must
be children of `G_TYPE_INTERFACE` in the  inheritance tree.


An interface is defined by only one structure which must contain as first member
a `GTypeInterface` structure. The interface structure is expected to
contain the function pointers of the interface methods. It is good style to 
define helper functions for each of the interface methods which simply call
the interface's method directly: `viewer_editable_save`
is one of these.


If you have no special requirements you can use the
`G_IMPLEMENT_INTERFACE` macro
to implement an interface:

```cpp
static void
viewer_file_save (ViewerEditable *self)
{
  g_print ("File implementation of editable interface save method.\n");
}

static void
viewer_file_editable_interface_init (ViewerEditableInterface *iface)
{
  iface->save = viewer_file_save;
}

G_DEFINE_TYPE_WITH_CODE (ViewerFile, viewer_file, VIEWER_TYPE_FILE,
                         G_IMPLEMENT_INTERFACE (VIEWER_TYPE_EDITABLE,
                                                viewer_file_editable_interface_init))
```
        

If your code does have special requirements, you must write a custom
`get_type` function to register your GType which
inherits from some `GObject`
and which implements the interface `ViewerEditable`. For
example, this code registers a new `ViewerFile` class which
implements `ViewerEditable`:

```cpp
static void
viewer_file_save (ViewerEditable *editable)
{
  g_print ("File implementation of editable interface save method.\n");
}

static void
viewer_file_editable_interface_init (gpointer g_iface,
                                     gpointer iface_data)
{
  ViewerEditableInterface *iface = g_iface;

  iface->save = viewer_file_save;
}

GType 
viewer_file_get_type (void)
{
  static GType type = 0;
  if (type == 0) {
    const GTypeInfo info = {
      sizeof (ViewerFileClass),
      NULL,   /* base_init */
      NULL,   /* base_finalize */
      NULL,   /* class_init */
      NULL,   /* class_finalize */
      NULL,   /* class_data */
      sizeof (ViewerFile),
      0,      /* n_preallocs */
      NULL    /* instance_init */
    };
    const GInterfaceInfo editable_info = {
      (GInterfaceInitFunc) viewer_file_editable_interface_init,  /* interface_init */
      NULL,   /* interface_finalize */
      NULL    /* interface_data */
    };
    type = g_type_register_static (VIEWER_TYPE_FILE,
                                   "ViewerFile",
                                   &info, 0);
    g_type_add_interface_static (type,
                                 VIEWER_TYPE_EDITABLE,
                                 &editable_info);
  }
  return type;
}
```
        

`g_type_add_interface_static` records in the type system that
a given type implements also `FooInterface` 
(`foo_interface_get_type` returns the type of `FooInterface`).
The `GInterfaceInfo` structure holds
information about the implementation of the interface:

```cpp
struct _GInterfaceInfo
{
  GInterfaceInitFunc     interface_init;
  GInterfaceFinalizeFunc interface_finalize;
  gpointer               interface_data;
};
```
        
### 🐣 Interface Initialization

When an instantiatable classed type which implements an interface
(either directly or by inheriting an implementation from a superclass)
is created for the first time, its class structure is initialized
      following the process described in .
After that, the interface implementations associated with
the type are initialized.


First a memory buffer is allocated to hold the interface structure. The parent's
interface structure is then copied over to the new interface structure (the parent
interface is already initialized at that point). If there is no parent interface,
the interface structure is initialized with zeros. The
`g_type` and the
`g_instance_type` fields are then
initialized: `g_type` is set to the type of
the most-derived interface and
`g_instance_type` is set to the type of the
most derived type which implements  this interface.


The interface's `base_init` function is called,
and then the interface's `default_init` is invoked.
Finally if the type has registered an implementation of the interface,
the implementation's `interface_init`
function is invoked. If there are multiple implementations of an
interface the `base_init` and
`interface_init` functions will be invoked once
for each implementation initialized.


It is thus recommended to use a `default_init` function to
initialize an interface. This function is called only once for the interface no
matter how many implementations there are. The
`default_init` function is declared by `G_DEFINE_INTERFACE`
which can be used to define the interface:

```cpp
G_DEFINE_INTERFACE (ViewerEditable, viewer_editable, G_TYPE_OBJECT)

static void
viewer_editable_default_init (ViewerEditableInterface *iface)
{
  /* add properties and signals here, will only be called once */
}
```

Or you can do that yourself in a GType function for your interface:

```cpp
GType
viewer_editable_get_type (void)
{
  static gsize type_id = 0;
  if (g_once_init_enter (&type_id)) {
    const GTypeInfo info = {
      sizeof (ViewerEditableInterface),
      NULL,   /* base_init */
      NULL,   /* base_finalize */
      viewer_editable_default_init, /* class_init */
      NULL,   /* class_finalize */
      NULL,   /* class_data */
      0,      /* instance_size */
      0,      /* n_preallocs */
      NULL    /* instance_init */
    };
    GType type = g_type_register_static (G_TYPE_INTERFACE,
                                         "ViewerEditable",
                                         &info, 0);
    g_once_init_leave (&type_id, type);
  }
  return type_id;
}

static void
viewer_editable_default_init (ViewerEditableInterface *iface)
{
  /* add properties and signals here, will only called once */
}
```
          

In summary, interface initialization uses the following functions:


  <table id="ginterface-init-table">
    <title>Interface Initialization</title>
    <tgroup cols="3">
      <colspec colwidth="*" colnum="1" align="left"/>
      <colspec colwidth="*" colnum="2" align="left"/>
      <colspec colwidth="8*" colnum="3" align="left"/>
      <thead>
        <row>
          <entry>Invocation time</entry>
          <entry>Function Invoked</entry>
          <entry>Function's parameters</entry>
          <entry>Remark</entry>
        </row>
      </thead>
      <tbody>
        <row>
          <entry>First call to `g_type_create_instance`
            for *any* type implementing interface
           </entry>
          <entry>interface's `base_init` function</entry>
          <entry>On interface's vtable</entry>
          <entry>Rarely necessary to use this. Called once per instantiated classed type implementing the interface.</entry>
        </row>
        <row>
          <entry>First call to `g_type_create_instance`
            for *each* type implementing interface
           </entry>
          <entry>interface's `default_init` function</entry>
          <entry>On interface's vtable</entry>
          <entry>Register interface's signals, properties, etc. here. Will be called once.</entry>
        </row>
        <row>
          <entry>First call to `g_type_create_instance`
            for *any* type implementing interface
           </entry>
          <entry>implementation's `interface_init` function</entry>
          <entry>On interface's vtable</entry>
          <entry>
            Initialize interface implementation. Called for each class that that
            implements the interface. Initialize the interface method pointers
            in the interface structure to the implementing class's implementation.
          </entry>
        </row>
      </tbody>
    </tgroup>
  </table>
        

### 🐣 Interface Destruction

When the last instance of an instantiatable type which registered
an interface implementation is destroyed, the interface's 
implementations associated to the type are destroyed.


To destroy an interface implementation, GType first calls the 
implementation's `interface_finalize` function 
and then the interface's most-derived 
`base_finalize` function.


Again, it is important to understand, as in 
,
  that both `interface_finalize` and `base_finalize`
  are invoked exactly once for the destruction of each implementation of an interface. Thus,
  if you were to use one of these functions, you would need to use a static integer variable
  which would hold the number of instances of implementations of an interface such that
  the interface's class is destroyed only once (when the integer variable reaches zero).


The above process can be summarized as follows:

Interface Finalization

| Invocation time | Function Invoked | Function's parameters 
| Last call to `g_type_free_instance` for type implementing interface | interface's `interface_finalize` function | On interface's vtable
| Last call to `g_type_free_instance`for type implementing interface | interface's `base_finalize` function | On interface's vtable

# 📜 The GObject base class

The previous chapter discussed the details of GLib's Dynamic Type System.
The GObject library also contains an implementation for a base fundamental
type named `GObject`.

`GObject` is a fundamental classed instantiatable type. It implements:

0. Memory management with reference counting
0. Construction/Destruction of instances
0. Generic per-object properties with set/get function pairs
0. Easy use of signals

All the GNOME libraries which use the GLib type system (like GTK and GStreamer)
inherit from `GObject` which is why it is important to understand
the details of how it works.

## 🍀 Object instantiation

The `g_object_new`
family of functions can be used to instantiate any GType which inherits
from the GObject base type. All these functions make sure the class and
instance structures have been correctly initialized by GLib's type system
and then invoke at one point or another the constructor class method
which is used to:

0. Allocate and clear memory through `g_type_create_instance`,
0. Initialize the object's instance with the construction properties.

Although one can expect all class and instance members (except the fields
pointing to the parents) to be set to zero, some consider it good practice
to explicitly set them.

Once all construction operations have been completed and constructor
properties set, the constructed class method is called.

Objects which inherit from GObject are allowed to override this
constructed class method.

The example below shows how `ViewerFile` overrides the parent's construction process:

```cpp
#define VIEWER_TYPE_FILE viewer_file_get_type ()
G_DECLARE_FINAL_TYPE (ViewerFile, viewer_file, VIEWER, FILE, GObject)

struct _ViewerFile
{
  GObject parent_instance;

  /* instance members */
  gchar *filename;
  guint zoom_level;
};

/* will create viewer_file_get_type and set viewer_file_parent_class */
G_DEFINE_TYPE (ViewerFile, viewer_file, G_TYPE_OBJECT)

static void
viewer_file_constructed (GObject *obj)
{
  /* update the object state depending on constructor properties */

  /* Always chain up to the parent constructed function to complete object
   * initialisation. */
  G_OBJECT_CLASS (viewer_file_parent_class)-&gt;constructed (obj);
}

static void
viewer_file_finalize (GObject *obj)
{
  ViewerFile *self = VIEWER_FILE (obj);

  g_free (self->filename);

  /* Always chain up to the parent finalize function to complete object
   * destruction. */
  G_OBJECT_CLASS (viewer_file_parent_class)-&gt;finalize (obj);
}

static void
viewer_file_class_init (ViewerFileClass *klass)
{
  GObjectClass *object_class = G_OBJECT_CLASS (klass);

  object_class-&gt;constructed = viewer_file_constructed;
  object_class-&gt;finalize = viewer_file_finalize;
}

static void
viewer_file_init (ViewerFile *self)
{
  /* initialize the object */
}

```

If the user instantiates an object `ViewerFile` with:

```cpp
ViewerFile *file = g_object_new (VIEWER_TYPE_FILE, NULL);
```

If this is the first instantiation of such an object, the
`viewer_file_class_init` function will be invoked
after any `viewer_file_base_class_init` function.
This will make sure the class structure of this new object is
correctly initialized. Here, `viewer_file_class_init`
is expected to override the object's class methods and setup the
class' own methods. In the example above, the `constructed`
method is the only overridden method: it is set to
`viewer_file_constructed`.

Once `g_object_new` has obtained a reference to an initialized
class structure, it invokes its constructor method to create an instance of the new 
object, if the constructor has been overridden in `viewer_file_class_init`.
Overridden constructors must chain up to their parent’s constructor. In
order to find the parent class and chain up to the parent class
constructor, we can use the `viewer_file_parent_class`
pointer that has been set up for us by the `G_DEFINE_TYPE` macro.

Finally, at one point or another, `g_object_constructor` is invoked
by the last constructor in the chain. This function allocates the object's instance buffer
through `g_type_create_instance`
which means that the `instance_init` function is invoked at this point if one
was registered. After `instance_init` returns, the object is fully initialized and should be 
ready to have its methods called by the user. When `g_type_create_instance`
returns, `g_object_constructor` sets the construction properties
(i.e. the properties which were given to `g_object_new`) and returns
to the user's constructor.

The process described above might seem a bit complicated, but it can be
summarized easily by the table below which lists the functions invoked
by `g_object_new`
and their order of invocation:

<table id="gobject-construction-table">
  <title>`g_object_new`</title>
  <tgroup cols="3">
    <colspec colwidth="*" colnum="1" align="left"/>
    <colspec colwidth="*" colnum="2" align="left"/>
    <colspec colwidth="8*" colnum="3" align="left"/>
    <thead>
      <row>
        <entry>Invocation time</entry>
        <entry>Function invoked</entry>
        <entry>Function's parameters</entry>
        <entry>Remark</entry>
      </row>
    </thead>
    <tbody>
      <row>
        <entry morerows="3">First call to `<link linkend="g-object-new">g_object_new` for target type</entry>
        <entry>target type's `base_init` function</entry>
        <entry>On the inheritance tree of classes from fundamental type to target type. 
          `base_init` is invoked once for each class structure.</entry>
        <entry>Never used in practice. Unlikely you will need it.</entry>
      </row>
      <row>
        <!--entry>First call to `<link linkend="g-object-new">g_object_new` for target type</entry-->
        <entry>target type's `class_init` function</entry>
        <entry>On target type's class structure</entry>
        <entry>
          Here, you should make sure to initialize or override class methods (that is,
          assign to each class' method its function pointer) and create the signals and
          the properties associated to your object.
        </entry>
      </row>
      <row>
        <!--entry>First call to `<link linkend="g-object-new">g_object_new` for target type</entry-->
        <entry>interface's `base_init` function</entry>
        <entry>On interface's vtable</entry>
        <entry></entry>
      </row>
      <row>
        <!--entry>First call to `<link linkend="g-object-new">g_object_new` for target type</entry-->
        <entry>interface's `interface_init` function</entry>
        <entry>On interface's vtable</entry>
        <entry></entry>
      </row>
      <row>
        <entry morerows="2">Each call to `<link linkend="g-object-new">g_object_new` for target type</entry>
        <entry>target type's class `constructor` method: `GObjectClass->constructor`</entry>
        <entry>On object's instance</entry>
        <entry>
          If you need to handle construct properties in a custom way, or implement a singleton class, override the constructor
          method and make sure to chain up to the object's
          parent class before doing your own initialization.
          In doubt, do not override the constructor method.
        </entry>
      </row>
      <row>
        <!--entry>Each call to `<link linkend="g-object-new">g_object_new` for target type</entry-->
        <entry>type's `instance_init` function</entry>
        <entry>On the inheritance tree of classes from fundamental type to target type. 
        the `instance_init` provided for each type is invoked once for each instance 
        structure.</entry>
        <entry>
          Provide an `instance_init` function to initialize your object before its construction
          properties are set. This is the preferred way to initialize a GObject instance.
          This function is equivalent to C++ constructors.
        </entry>
      </row>
      <row>
        <!--entry>Each call to `<link linkend="g-object-new">g_object_new` for target type</entry-->
        <entry>target type's class `constructed` method: `GObjectClass->constructed`</entry>
        <entry>On object's instance</entry>
        <entry>
          If you need to perform object initialization steps after all construct properties have been set.
          This is the final step in the object initialization process, and is only called if the `constructor`
          method returned a new object instance (rather than, for example, an existing singleton).
        </entry>
      </row>
    </tbody>
  </tgroup>
</table>

Readers should feel concerned about one little twist in the order in
which functions are invoked: while, technically, the class' constructor
method is called *before* the GType's `instance_init`
function (since `g_type_create_instance` which calls `instance_init` is called by
`g_object_constructor` which is the top-level class 
constructor method and to which users are expected to chain to), the
user's code which runs in a user-provided constructor will always
run *after* GType's `instance_init` function since the
user-provided constructor *must* (you've been warned)
chain up *before* doing anything useful.


## 🍀 Object memory management

The memory-management API for GObjects is a bit complicated but the idea behind it
is pretty simple: the goal is to provide a flexible model based on reference counting
which can be integrated in applications which use or require different memory management
models (such as garbage collection). The methods which are used to
manipulate this reference count are described below.

### 🐣 Reference count

The functions `g_object_ref`/`g_object_unref` respectively 
increase and decrease the reference count. These functions are
thread-safe.
`g_clear_object` is a convenience wrapper around `g_object_unref`
which also clears the pointer passed to it.
The reference count is initialized to one by `g_object_new` which means that the caller
is currently the sole owner of the newly-created reference. (If the object is derived from `GInitiallyUnowned`, this reference count is floating.)
When the reference count reaches zero, that is, 
when `g_object_unref` is called by the last client holding
a reference to the object, the *dispose* and the 
*finalize* class methods are invoked.
Finally, after *finalize* is invoked, 
`g_type_free_instance` is called to free the object instance.
Depending on the memory allocation policy decided when the type was registered (through
one of the `g_type_register_*` functions), the object's instance 
memory will be freed or returned to the object pool for this type.
Once the object has been freed, if it was the last instance of the type, the type's class
will be destroyed as described in gtype-instantiatable-classed and
gtype-non-instantiatable-non-classed.

The table below summarizes the destruction process of a GObject:

<table id="gobject-destruction-table">
  <title>`<link linkend="g-object-unref">g_object_unref`</title>
  <tgroup cols="3">
    <colspec colwidth="*" colnum="1" align="left"/>
    <colspec colwidth="*" colnum="2" align="left"/>
    <colspec colwidth="8*" colnum="3" align="left"/>
    <thead>
      <row>
        <entry>Invocation time</entry>
        <entry>Function invoked</entry>
        <entry>Function's parameters</entry>
        <entry>Remark</entry>
      </row>
    </thead>
    <tbody>
      <row>
        <entry morerows="1">Last call to `g_object_unref` for an instance
          of target type
         </entry>
        <entry>target type's dispose class function</entry>
        <entry>GObject instance</entry>
        <entry>
          When dispose ends, the object should not hold any reference to any other
          member object. The object is also expected to be able to answer client
          method invocations (with possibly an error code but no memory violation)
          until finalize is executed. dispose can be executed more than once.
        dispose should chain up to its parent implementation just before returning
        to the caller.
        </entry>
      </row>
      <row>
        <!--entry>Last call to `<link linkend="g-object-unref">g_object_unref` for an instance
          of target type
        </entry-->
        <entry>target type's finalize class function</entry>
        <entry>GObject instance</entry>
        <entry>
          Finalize is expected to complete the destruction process initiated by
          dispose. It should complete the object's destruction. finalize will be
          executed only once.
        finalize should chain up to its parent implementation just before returning
        to the caller.
          The reason why the destruction process is split is two different phases is
          explained in gobject-memory-cycles.
        </entry>
      </row>
      <row>
        <entry morerows="3">Last call to `g_object_unref` for the last
          instance of target type
         </entry>
        <entry>interface's `interface_finalize` function</entry>
        <entry>On interface's vtable</entry>
        <entry>Never used in practice. Unlikely you will need it.</entry>
      </row>
      <row>
        <!--entry>Last call to `<link linkend="g-object-unref">g_object_unref`for the last
          instance of target type
         </entry-->
        <entry>interface's `base_finalize` function</entry>
        <entry>On interface's vtable</entry>
        <entry>Never used in practice. Unlikely you will need it.</entry>
      </row>
      <row>
        <!--entry>Last call to `<link linkend="g-object-unref">g_object_unref` for the last
          instance of target type
         </entry-->
        <entry>target type's `class_finalize` function</entry>
        <entry>On target type's class structure</entry>
        <entry>Never used in practice. Unlikely you will need it.</entry>
      </row>
      <row>
        <!--entry>Last call to `<link linkend="g-object-unref">g_object_unref` for the last
          instance of target type
         </entry-->
        <entry>type's `base_finalize` function</entry>
        <entry>On the inheritance tree of classes from fundamental type to target type.
          `base_init` is invoked once for each class structure.</entry>
        <entry>Never used in practice. Unlikely you will need it.</entry>
      </row>
    </tbody>
  </tgroup>
</table>          


### 🐣 Weak References

Weak references are used to monitor object finalization:
`g_object_weak_ref` adds a monitoring callback which does
not hold a reference to the object but which is invoked when the object runs 
its dispose method. As such, each weak ref can be invoked more than once upon
object finalization (since dispose can run more than once during object 
finalization).

`g_object_weak_unref` can be used to remove a monitoring
callback from the object. 

Weak references are also used to implement `g_object_add_weak_pointer`
and `g_object_remove_weak_pointer`. These functions add a weak reference
to the object they are applied to which makes sure to nullify the pointer given by the user
when object is finalized.

Similarly, `GWeakRef` can be
used to implement weak references if thread safety is required.

### 🐣 Reference counts and cycles

GObject's memory management model was designed to be easily integrated in existing code
using garbage collection. This is why the destruction process is split in two phases:
the first phase, executed in the dispose handler is supposed to release all references
to other member objects. The second phase, executed by the finalize handler is supposed
to complete the object's destruction process. Object methods should be able to run
without program error in-between the two phases.

This two-step destruction process is very useful to break reference counting cycles.
While the detection of the cycles is up to the external code, once the cycles have been
detected, the external code can invoke `g_object_run_dispose` which 
will indeed break any existing cycles since it will run the dispose handler associated
to the object and thus release all references to other objects.

This explains one of the rules about the dispose handler stated earlier:
the dispose handler can be invoked multiple times. Let's say we
have a reference count cycle: object A references B which itself references object A.
Let's say we have detected the cycle and we want to destroy the two objects. One way to 
do this would be to invoke `g_object_run_dispose` on one of the 
objects.

If object A releases all its references to all objects, this means it releases its
reference to object B. If object B was not owned by anyone else, this is its last
reference count which means this last unref runs B's dispose handler which, in turn,
releases B's reference on object A. If this is A's last reference count, this last 
unref runs A's dispose handler which is running for the second time before
A's finalize handler is invoked !

The above example, which might seem a bit contrived, can really happen if
GObjects are being handled by language bindings — hence the rules for
object destruction should be closely followed.


## 🍀 Object properties

One of GObject's nice features is its generic get/set mechanism for object
properties. When an object
is instantiated, the object's `class_init` handler should be used to register
the object's properties with `g_object_class_install_properties`.

The best way to understand how object properties work is by looking at a real example

of how it is used:

```cpp
/************************************************/
/* Implementation                               */
/************************************************/

typedef enum
{
  PROP_FILENAME = 1,
  PROP_ZOOM_LEVEL,
  N_PROPERTIES
} ViewerFileProperty;

static GParamSpec *obj_properties[N_PROPERTIES] = { NULL, };

static void
viewer_file_set_property (GObject      *object,
                          guint         property_id,
                          const GValue *value,
                          GParamSpec   *pspec)
{
  ViewerFile *self = VIEWER_FILE (object);

  switch ((ViewerFileProperty) property_id)
    {
    case PROP_FILENAME:
      g_free (self-&gt;filename);
      self-&gt;filename = g_value_dup_string (value);
      g_print ("filename: %s\n", self-&gt;filename);
      break;

    case PROP_ZOOM_LEVEL:
      self-&gt;zoom_level = g_value_get_uint (value);
      g_print ("zoom level: &percnt;u\n", self-&gt;zoom_level);
      break;

    default:
      /* We don't have any other property... */
      G_OBJECT_WARN_INVALID_PROPERTY_ID (object, property_id, pspec);
      break;
    }
}

static void
viewer_file_get_property (GObject    *object,
                          guint       property_id,
                          GValue     *value,
                          GParamSpec *pspec)
{
  ViewerFile *self = VIEWER_FILE (object);

  switch ((ViewerFileProperty) property_id)
    {
    case PROP_FILENAME:
      g_value_set_string (value, self-&gt;filename);
      break;

    case PROP_ZOOM_LEVEL:
      g_value_set_uint (value, self-&gt;zoom_level);
      break;

    default:
      /* We don't have any other property... */
      G_OBJECT_WARN_INVALID_PROPERTY_ID (object, property_id, pspec);
      break;
    }
}

static void
viewer_file_class_init (ViewerFileClass *klass)
{
  GObjectClass *object_class = G_OBJECT_CLASS (klass);

  object_class-&gt;set_property = viewer_file_set_property;
  object_class-&gt;get_property = viewer_file_get_property;

  obj_properties[PROP_FILENAME] =
    g_param_spec_string ("filename",
                         "Filename",
                         "Name of the file to load and display from.",
                         NULL  /* default value */,
                         G_PARAM_CONSTRUCT_ONLY | G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);

  obj_properties[PROP_ZOOM_LEVEL] =
    g_param_spec_uint ("zoom-level",
                       "Zoom level",
                       "Zoom level to view the file at.",
                       0  /* minimum value */,
                       10 /* maximum value */,
                       2  /* default value */,
                       G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);

  g_object_class_install_properties (object_class,
                                     N_PROPERTIES,
                                     obj_properties);
}

/************************************************/
/* Use                                          */
/************************************************/

ViewerFile *file;
GValue val = G_VALUE_INIT;

file = g_object_new (VIEWER_TYPE_FILE, NULL);

g_value_init (&amp;val, G_TYPE_UINT);
g_value_set_char (&amp;val, 11);

g_object_set_property (G_OBJECT (file), "zoom-level", &amp;val);

g_value_unset (&amp;val);
```

The client code above looks simple but a lot of things happen under the hood:

`g_object_set_property` first ensures a property
with this name was registered in *file*'s `class_init` handler. If so it walks the class hierarchy,
from bottom-most most-derived type, to top-most fundamental type to find the class
which registered that property. It then tries to convert the user-provided `GValue`
into a `GValue` whose type is that of the associated property.

If the user provides a `signed char` `GValue`, as is shown
here, and if the object's property was registered as an `unsigned int`,
`g_value_transform` will try to transform the input signed char into
an unsigned int. Of course, the success of the transformation depends on the availability
of the required transform function. In practice, there will almost always be a transformation

Its behaviour might not be what you expect but it is up to you to actually avoid
relying on these transformations.

which matches and conversion will be carried out if needed.

After transformation, the `GValue` is validated by 
`g_param_value_validate` which makes sure the user's
data stored in the `GValue` matches the characteristics specified by the property's `GParamSpec`.
Here, the `GParamSpec` we 
provided in `class_init` has a validation function which makes sure that the GValue
contains a value which respects the minimum and maximum bounds of the 
`GParamSpec`. In the example above, the client's GValue does not
respect these constraints (it is set to 11, while the maximum is 10). As such, the
`g_object_set_property` function will return with an error.

If the user's GValue had been set to a valid value, `g_object_set_property`
would have proceeded with calling the object's
`set_property` class method. Here, since our
implementation of `ViewerFile` did override this method, execution would jump to
`viewer_file_set_property` after having retrieved from the 
`GParamSpec` the *param_id*
which had been stored by `g_object_class_install_property`.

It should be noted that the param_id used here need only to uniquely identify each 
`GParamSpec` within the `ViewerFileClass` such that the switch
used in the set and get methods actually works. Of course, this locally-unique 
integer is purely an optimization: it would have been possible to use a set of 
*if (strcmp (a, b) == 0) {} else if (strcmp (a, b) == 0) {}* statements.

Once the property has been set by the object's
`set_property` class method, execution
returns to `g_object_set_property` which makes sure that
the "notify" signal is emitted on the object's instance with the changed property as
parameter unless notifications were frozen by `g_object_freeze_notify`.

`g_object_thaw_notify` can be used to re-enable notification of 
property modifications through the
`“notify”` signal. It is important to remember that
even if properties are changed while property change notification is frozen, the "notify"
signal will be emitted once for each of these changed properties as soon as the property
change notification is thawed: no property change is lost for the "notify"
signal, although multiple notifications for a single property are
compressed. Signals can only be delayed by the notification freezing
mechanism.

It sounds like a tedious task to set up GValues every time when one wants to modify a property.
In practice one will rarely do this. The functions `g_object_set_property`
and `g_object_get_property`
are meant to be used by language bindings. For application there is an easier way and
that is described next.

### 🐣 Accessing multiple properties at once

It is interesting to note that the `g_object_set` and 
`g_object_set_valist` (variadic version) functions can be used to set
multiple properties at once. The client code shown above can then be re-written as:

```cpp
ViewerFile *file;
file = /* */;
g_object_set (G_OBJECT (file),
              "zoom-level", 6, 
              "filename", "~/some-file.txt", 
              NULL);
```

This saves us from managing the GValues that we were needing to handle when using
`g_object_set_property`.
The code above will trigger one notify signal emission for each property modified.

Equivalent `_get` versions are also available:
`g_object_get`
and `g_object_get_valist` (variadic version) can be used to get numerous
properties at once.

These high level functions have one drawback — they don't provide a return value.
One should pay attention to the argument types and ranges when using them.
A known source of errors is to pass a different type from what the
property expects; for instance, passing an integer when the property
expects a floating point value and thus shifting all subsequent parameters
by some number of bytes. Also forgetting the terminating
`NULL` will lead to undefined behaviour.

This explains how `g_object_new`, `g_object_newv` and `g_object_new_valist`
work: they parse the user-provided variable number of parameters and invoke
`g_object_set` on the parameters only after the object has been successfully constructed.
The "notify" signal will be emitted for each property set.


<!-- @todo tell here about how to pass use handle properties in derived classes -->


# 📜 The GObject messaging system

## 🍀 Closures

Closures are central to the concept of asynchronous signal delivery
which is widely used throughout GTK and GNOME applications. A closure is an 
abstraction, a generic representation of a callback. It is a small structure
which contains three objects:

A function pointer (the callback itself) whose prototype looks like:

```cpp
return_type function_callback (… , gpointer user_data);
```
The `user_data` pointer which is passed to the callback upon invocation of the closure.

A function pointer which represents the destructor of the closure: whenever the
closure's refcount reaches zero, this function will be called before the closure
structure is freed.


The `GClosure` structure represents the common functionality of all
closure implementations: there exists a different closure implementation for
each separate runtime which wants to use the GObject type system.

In practice, closures sit at the boundary of language runtimes: if you are
writing Python code and one of your Python callbacks receives a signal from
a GTK widget, the C code in GTK needs to execute your Python
code. The closure invoked by the GTK object invokes the Python callback:
it behaves as a normal C object for GTK and as a normal Python object for
Python code.

The GObject library provides a simple `GCClosure` type which
is a specific implementation of closures to be used with C/C++ callbacks.

A `GClosure` provides simple services:

0.  Invocation (`g_closure_invoke`): this is what closures 
    were created for: they hide the details of callback invocation from the
    callback invoker.

0.  Notification: the closure notifies listeners of certain events such as
    closure invocation, closure invalidation and closure finalization. Listeners
    can be registered with `g_closure_add_finalize_notifier`
    (finalization notification), `g_closure_add_invalidate_notifier` 
    (invalidation notification) and 
    `g_closure_add_marshal_guards` (invocation notification).
    There exist symmetric deregistration functions for finalization and invalidation
    events (`g_closure_remove_finalize_notifier` and
    `g_closure_remove_invalidate_notifier`) but not for the invocation 
    process.

Closures are reference counted and notify listeners of their destruction in a two-stage
process: the invalidation notifiers are invoked before the finalization notifiers.


### 🐣 C Closures

If you are using C or C++
to connect a callback to a given event, you will either use simple `GCClosure`s
which have a pretty minimal API or the even simpler `g_signal_connect` 
functions (which will be presented a bit later).


`g_cclosure_new` will create a new closure which can invoke the
user-provided callback_func with the user-provided
`user_data` as its last parameter. When the closure
is finalized (second stage of the destruction process), it will invoke
the `destroy_data` function if the user has
supplied one.


`g_cclosure_new_swap` will create a new closure which can invoke the
user-provided `callback_func` with the
user-provided `user_data` as its first parameter
(instead of being the 
last parameter as with `g_cclosure_new`). When the closure
is finalized (second stage of the destruction process), it will invoke
the `destroy_data` function if the user has
supplied one.


### 🐣 Non-C closures (for the fearless)

As was explained above, closures hide the details of callback invocation. In C,
callback invocation is just like function invocation: it is a matter of creating
the correct stack frame for the called function and executing a *call*
assembly instruction.


C closure marshallers transform the array of GValues which represent 
the parameters to the target function into a C-style function parameter list, invoke
the user-supplied C function with this new parameter list, get the return value of the
function, transform it into a GValue and return this GValue to the marshaller caller.


A generic C closure marshaller is available as
`g_cclosure_marshal_generic`
which implements marshalling for all function types using libffi. Custom
marshallers for different types are not needed apart from performance
critical code where the libffi-based marshaller may be too slow.


An example of a custom marshaller is given below, illustrating how
`GValue`s can be converted to a C function call. The
marshaller is for a C function which takes an integer as its first
parameter and returns void.

```cpp
g_cclosure_marshal_VOID__INT (GClosure     *closure,
                              GValue       *return_value,
                              guint         n_param_values,
                              const GValue *param_values,
                              gpointer      invocation_hint,
                              gpointer      marshal_data)
{
  typedef void (*GMarshalFunc_VOID__INT) (gpointer     data1,
                                          gint         arg_1,
                                          gpointer     data2);
  register GMarshalFunc_VOID__INT callback;
  register GCClosure *cc = (GCClosure*) closure;
  register gpointer data1, data2;

  g_return_if_fail (n_param_values == 2);

  data1 = g_value_peek_pointer (param_values + 0);
  data2 = closure->data;

  callback = (GMarshalFunc_VOID__INT) (marshal_data ? marshal_data : cc->callback);

  callback (data1,
            g_marshal_value_peek_int (param_values + 1),
            data2);
}
```


There exist other kinds of marshallers, for example there is a generic
Python marshaller which is used by all Python closures (a Python closure
is used to invoke a callback written in Python). This Python marshaller
transforms the input GValue list representing the function parameters
into a Python tuple which is the equivalent structure in Python.


## 🍀 Signals

GObject's signals have nothing to do with standard UNIX signals: they connect 
arbitrary application-specific events with any number of listeners.
For example, in GTK, every user event (keystroke or mouse move) is received
from the windowing system and generates a GTK event in the form of a signal emission
on the widget object instance.


Each signal is registered in the type system together with the type on which
it can be emitted: users of the type are said to *connect*
to the signal on a given type instance when they register a closure to be  
invoked upon the signal emission. The closure will be called synchronously on emission.
Users can also emit the signal by themselves or stop the emission of the signal from
within one of the closures connected to the signal.


When a signal is emitted on a given type instance, all the closures
connected to this signal on this type instance will be invoked. All the closures
connected to such a signal represent callbacks whose signature looks like:

```cpp
return_type function_callback (gpointer instance, …, gpointer user_data);
```

### 🐣 Signal registration

To register a new signal on an existing type, we can use any of `g_signal_newv`,
`g_signal_new_valist` or `g_signal_new` functions:

```cpp
guint g_signal_newv (const gchar        *signal_name,
                     GType               itype,
                     GSignalFlags        signal_flags,
                     GClosure           *class_closure,
                     GSignalAccumulator  accumulator,
                     gpointer            accu_data,
                     GSignalCMarshaller  c_marshaller,
                     GType               return_type,
                     guint               n_params,
                     GType              *param_types);
```
The number of parameters to these functions is a bit intimidating but they are relatively
simple:

0.  `signal_name`: is a string which can be used to uniquely identify a given signal.
0.  `itype`: is the instance type on which this signal can be emitted.
0.  `signal_flags`: partly defines the order in which closures which were connected to the
    signal are invoked.
0.  `class_closure`: this is the default closure for the signal: if it is not NULL upon
    the signal emission, it will be invoked upon this emission of the signal. The 
    moment where this closure is invoked compared to other closures connected to that 
    signal depends partly on the signal_flags.
0.  `accumulator`: this is a function pointer which is invoked after each closure
    has been invoked. If it returns FALSE, signal emission is stopped. If it returns
    TRUE, signal emission proceeds normally. It is also used to compute the return
    value of the signal based on the return value of all the invoked closures.
    For example, an accumulator could ignore
    NULL returns from closures; or it
    could build a list of the values returned by the
    closures.
0.  `accu_data`: this pointer will be passed down to each invocation of the
    accumulator during emission.
0.  `c_marshaller`: this is the default C marshaller for any closure which is connected to
    this signal.
0.  `return_type`: this is the type of the return value of the signal.
0.  `n_params`: this is the number of parameters this signal takes.
0.  `param_types`: this is an array of GTypes which indicate the type of each parameter
    of the signal. The length of this array is indicated by n_params.

As you can see from the above definition, a signal is basically a description
of the closures which can be connected to this signal and a description of the
order in which the closures connected to this signal will be invoked.


### 🐣 Signal connection

If you want to connect to a signal with a closure, you have three possibilities:

0.  You can register a class closure at signal registration: this is a
    system-wide operation. i.e.: the class closure will be invoked during each emission
    of a given signal on *any* of the instances of the type which supports that signal.
0.  You can use `g_signal_override_class_closure` which
    overrides the class closure of a given type. It is possible to call this function
    only on a derived type of the type on which the signal was registered.
    This function is of use only to language bindings.
0.  You can register a closure with the `g_signal_connect`
    family of functions. This is an instance-specific operation: the closure
    will be invoked only during emission of a given signal on a given instance.

It is also possible to connect a different kind of callback on a given signal: 
emission hooks are invoked whenever a given signal is emitted whatever the instance on 
which it is emitted. Emission hooks are used for example to get all mouse_clicked
emissions in an application to be able to emit the small mouse click sound.
Emission hooks are connected with `g_signal_add_emission_hook`
and removed with `g_signal_remove_emission_hook`.


### 🐣 Signal emission

Signal emission is done through the use of the `g_signal_emit` family 
of functions.

```cpp
void g_signal_emitv (const GValue *instance_and_params,
                     guint         signal_id,
                     GQuark        detail,
                     GValue       *return_value);
```

0.  The `instance_and_params` array of GValues contains the list of input
    parameters to the signal. The first element of the array is the 
    instance pointer on which to invoke the signal. The following elements of
    the array contain the list of parameters to the signal.
0.  `signal_id` identifies the signal to invoke.
0.  `detail` identifies the specific detail of the signal to invoke. A detail is a kind of 
    magic token/argument which is passed around during signal emission and which is used
    by closures connected to the signal to filter out unwanted signal emissions. In most 
    cases, you can safely set this value to zero. See signal-detail for
    more details about this parameter.
0.  `return_value` holds the return value of the last closure invoked during emission if
    no accumulator was specified. If an accumulator was specified during signal creation,
    this accumulator is used to calculate the return value as a function of the return
    values of all the closures invoked during emission. 
    If no closure is invoked during
    emission, the `return_value` is nonetheless initialized to zero/null.



Signal emission is done synchronously and can be decomposed in 5 steps:

0.  `RUN_FIRST`: if the `G_SIGNAL_RUN_FIRST` flag was used
    during signal registration and if there exists a class closure for this signal,
    the class closure is invoked.
0.  `EMISSION_HOOK`: if any emission hook was added to
    the signal, they are invoked from first to last added. Accumulate return values.
0.  `HANDLER_RUN_FIRST`: if any closure were connected
    with the `g_signal_connect` family of 
    functions, and if they are not blocked (with the `g_signal_handler_block`
    family of functions) they are run here, from first to last connected.
0.  `RUN_LAST`: if the `G_SIGNAL_RUN_LAST`
    flag was set during registration and if a class closure
    was set, it is invoked here.
0.  `HANDLER_RUN_LAST`: if any closure were connected
    with the `g_signal_connect_after` family of 
    functions, if they were not invoked during `HANDLER_RUN_FIRST` and if they 
    are not blocked, they are run here, from first to last connected.
0.  `RUN_CLEANUP`: if the `G_SIGNAL_RUN_CLEANUP` flag
    was set during registration and if a class closure was set,
    it is invoked here. Signal emission is completed here.

If, at any point during emission (except in `RUN_CLEANUP` or
`EMISSION_HOOK` state), one of the closures stops the signal emission with
`g_signal_stop_emission`, emission jumps to `RUN_CLEANUP` state.


If, at any point during emission, one of the closures or emission hook 
emits the same signal on the same instance, emission is restarted from
the `RUN_FIRST` state.


The accumulator function is invoked in all states, after invocation
of each closure (except in `RUN_EMISSION_HOOK` and
`RUN_CLEANUP`). It accumulates
the closure return value into the signal return value and returns TRUE or
FALSE. If, at any point, it does not return TRUE, emission jumps
to `RUN_CLEANUP` state.


If no accumulator function was provided, the value returned by the last handler
run will be returned by `g_signal_emit`.


## 🍀 The *detail* argument
All the functions related to signal emission or signal connection have a parameter
named the *detail*. Sometimes, this parameter is hidden by the API
but it is always there, in one form or another. 


Of the three main connection functions,
only one has an explicit detail parameter as a `GQuark`:
`g_signal_connect_closure_by_id`.

A GQuark is an integer which uniquely represents a string. It is possible to transform
back and forth between the integer and string representations with the functions 
`g_quark_from_string` and `g_quark_to_string`.

The two other functions, `g_signal_connect_closure` and `g_signal_connect_data`
hide the detail parameter in the signal name identification.
Their `detailed_signal` parameter is a
string which identifies the name of the signal to connect to.
The format of this string should match *signal_name::detail_name*. For example,
connecting to the signal named *notify::cursor_position* will actually
connect to the signal named *notify* with the *cursor_position* detail.
Internally, the detail string is transformed to a GQuark if it is present.


Of the four main signal emission functions, one hides it in its
signal name parameter: `g_signal_connect`.
The other three have an explicit detail parameter as a
`GQuark` again: `g_signal_emit`, `g_signal_emitv` and `g_signal_emit_valist`.


If a detail is provided by the user to the emission function, it is used during emission to match
against the closures which also provide a detail.
If a closure's detail does not match the detail provided by the user, it
will not be invoked (even though it is connected to a signal which is
being emitted).


This completely optional filtering mechanism is mainly used as an optimization for signals
which are often emitted for many different reasons: the clients can filter out which events they are
interested in before the closure's marshalling code runs. For example, this is used extensively
by the `notify` signal of GObject: whenever a property is modified on a GObject,
instead of just emitting the *notify* signal, GObject associates as a detail to this
signal emission the name of the property modified. This allows clients who wish to be notified of changes
to only one property to filter most events before receiving them.


As a simple rule, users can and should set the detail parameter to zero: this will disable completely
this optional filtering for that signal.



# 📜 GObject Howto Tutorial


This chapter tries to answer the real-life questions of users and presents
the most common use cases in order from most likely to least likely.

## 🍀 How to define and implement a new GObject

This chapter focuses on the implementation of a subtype of GObject, for
example to create a custom class hierarchy, or to subclass a GTK widget.

Throughout the chapter, a running example of a file viewer program is used,
which has a `ViewerFile` class to represent a single file being
viewed, and various derived classes for different types of files with
special functionality, such as audio files. The example application also
supports editing files (for example, to tweak a photo being viewed), using
a `ViewerEditable` interface.

### 🐣 Boilerplate header code

The first step before writing the code for your GObject is to write the
type's header which contains the needed type, function and macro
definitions. Each of these elements is nothing but a convention which
is followed by almost all users of GObject, and has been refined over
multiple years of experience developing GObject-based code. If you are
writing a library, it is particularly important for you to adhere closely
to these conventions; users of your library will assume that you have.
Even if not writing a library, it will help other people who want to work
on your project.
Pick a name convention for your headers and source code and stick to it:

0.  use a dash to separate the prefix from the typename:
    viewer-file.h and viewer-file.c
    (this is the convention used by Nautilus and most GNOME libraries).
0.  use an underscore to separate the prefix from the
    typename: viewer_file.h and
    viewer_file.c.
0.  Do not separate the prefix from the typename:
    viewerfile.h and viewerfile.c.
    (this is the convention used by GTK)

Some people like the first two solutions better: it makes reading file
names easier for those with poor eyesight.
The basic conventions for any header which exposes a GType are described
in gtype-conventions.
If you want to declare a type named ‘file’ in namespace ‘viewer’, name the
type instance `ViewerFile` and its class
`ViewerFileClass` (names are case sensitive). The
recommended method of declaring a type differs based on whether the type
is final or derivable.
Final types cannot be subclassed further, and should be the default choice
for new types — changing a final type to be derivable is always a change
that will be compatible with existing uses of the code, but the converse
will often cause problems. Final types are declared using `G_DECLARE_FINAL_TYPE`,
and require a structure to hold the instance data to be declared in the
source code (not the header file).


```cpp
/*
 * Copyright/Licensing information.
 */

/* inclusion guard */
#ifndef __VIEWER_FILE_H__
#define __VIEWER_FILE_H__

#include &lt;glib-object.h&gt;
/*
 * Potentially, include other headers on which this header depends.
 */

G_BEGIN_DECLS

/*
 * Type declaration.
 */
#define VIEWER_TYPE_FILE viewer_file_get_type ()
G_DECLARE_FINAL_TYPE (ViewerFile, viewer_file, VIEWER, FILE, GObject)

/*
 * Method definitions.
 */
ViewerFile *viewer_file_new (void);

G_END_DECLS

#endif /* __VIEWER_FILE_H__ */
```

Derivable types *can* be subclassed further, and their class and
instance structures form part of the public API which must not be changed
if API stability is cared about. They are declared using
`G_DECLARE_DERIVABLE_TYPE`:

```cpp
/*
 * Copyright/Licensing information.
 */

/* inclusion guard */
#ifndef __VIEWER_FILE_H__
#define __VIEWER_FILE_H__

#include &lt;glib-object.h&gt;
/*
 * Potentially, include other headers on which this header depends.
 */

G_BEGIN_DECLS

/*
 * Type declaration.
 */
#define VIEWER_TYPE_FILE viewer_file_get_type ()
G_DECLARE_DERIVABLE_TYPE (ViewerFile, viewer_file, VIEWER, FILE, GObject)

struct _ViewerFileClass
{
  GObjectClass parent_class;

  /* Class virtual function fields. */
  void (* open) (ViewerFile  *file,
                 GError     **error);

  /* Padding to allow adding up to 12 new virtual functions without
   * breaking ABI. */
  gpointer padding[12];
};

/*
 * Method definitions.
 */
ViewerFile *viewer_file_new (void);

G_END_DECLS

#endif /* __VIEWER_FILE_H__ */
```

The convention for header includes is to add the minimum number of
`#include` directives to the top of your headers needed
to compile that header. This
allows client code to simply `#include "viewer-file.h"`,
without needing to know the prerequisites for
viewer-file.h.


### 🐣 Boilerplate code

In your code, the first step is to `#include` the needed headers:


```cpp
/*
 * Copyright information
 */

#include "viewer-file.h"

/* Private structure definition. */
typedef struct {
  gchar *filename;
  /* stuff */
} ViewerFilePrivate;

/* 
 * forward definitions
 */
```

If the class is being declared as final using
`G_DECLARE_FINAL_TYPE`, its instance structure should
be defined in the C file:


```cpp
struct _ViewerFile
{
  GObject parent_instance;

  /* Other members, including private data. */
};
```

Call the `G_DEFINE_TYPE` macro (or
`G_DEFINE_TYPE_WITH_PRIVATE` if your class needs
private data — final types do *not* need private data)
using the name
of the type, the prefix of the functions and the parent GType to
reduce the amount of boilerplate needed. This macro will:


0.  implement the `viewer_file_get_type` function
0.  define a parent class pointer accessible from the whole .c file
0.  add private instance data to the type (if using `G_DEFINE_TYPE_WITH_PRIVATE`)

If the class has been declared as final using
`G_DECLARE_FINAL_TYPE` (see howto-gobject-header), private data should be placed in
the instance structure, `ViewerFile`, and `G_DEFINE_TYPE` should be used instead of
`G_DEFINE_TYPE_WITH_PRIVATE`. The instance structure
for a final class is not exposed publicly, and is not embedded in the
instance structures of any derived classes (because the class is final);
so its size can vary without causing incompatibilities for code which uses
the class. Conversely, private data for derivable classes
*must* be included in a private structure, and
`G_DEFINE_TYPE_WITH_PRIVATE` must be used.


```cpp
G_DEFINE_TYPE (ViewerFile, viewer_file, G_TYPE_OBJECT)
```

or

```cpp
G_DEFINE_TYPE_WITH_PRIVATE (ViewerFile, viewer_file, G_TYPE_OBJECT)
```

It is also possible to use the
`G_DEFINE_TYPE_WITH_CODE` macro to control the
`get_type` function implementation — for instance, to
add a call to the `G_IMPLEMENT_INTERFACE` macro to
implement an interface.


### 🐣 Object construction

People often get confused when trying to construct their GObjects because of the
sheer number of different ways to hook into the objects's construction process: it is
difficult to figure which is the *correct*, recommended way.
gobject-construction-table shows what user-provided functions
are invoked during object instantiation and in which order they are invoked.
A user looking for the equivalent of the simple C++ constructor function should use
the `instance_init` method. It will be invoked after
all the parents’ `instance_init`
functions have been invoked. It cannot take arbitrary construction parameters 
(as in C++) but if your object needs arbitrary parameters to complete initialization,
you can use construction properties.
Construction properties will be set only after all
`instance_init` functions have run.
No object reference will be returned to the client of `g_object_new`
until all the construction properties have been set.
It is important to note that object construction cannot *ever*
fail. If you require a fallible GObject construction, you can use the
`GInitable` and `GAsyncInitable` interfaces provided by the GIO library.
You should write the following code first:

```cpp
G_DEFINE_TYPE_WITH_PRIVATE (ViewerFile, viewer_file, G_TYPE_OBJECT)

static void
viewer_file_class_init (ViewerFileClass *klass) { }

static void
viewer_file_init (ViewerFile *self)
{
  ViewerFilePrivate *priv = viewer_file_get_instance_private (self);

  /* initialize all public and private members to reasonable default values.
   * They are all automatically initialized to 0 to begin with. */
}
```

If you need special construction properties (with
`G_PARAM_CONSTRUCT_ONLY`
set), install the properties in
the `class_init()` function, override the `set_property()`
and `get_property()` methods of the `GObject` class,
and implement them as described by gobject-properties.
Property IDs must start from 1, as 0 is reserved for internal use by `GObject`.

```cpp
enum
{
  PROP_FILENAME = 1,
  PROP_ZOOM_LEVEL,
  N_PROPERTIES
};

static GParamSpec *obj_properties[N_PROPERTIES] = { NULL, };

static void
viewer_file_class_init (ViewerFileClass *klass)
{
  GObjectClass *object_class = G_OBJECT_CLASS (klass);

  object_class->set_property = viewer_file_set_property;
  object_class->get_property = viewer_file_get_property;

  obj_properties[PROP_FILENAME] =
    g_param_spec_string ("filename",
                         "Filename",
                         "Name of the file to load and display from.",
                         NULL  /* default value */,
                         G_PARAM_CONSTRUCT_ONLY | G_PARAM_READWRITE);

  obj_properties[PROP_ZOOM_LEVEL] =
    g_param_spec_uint ("zoom-level",
                       "Zoom level",
                       "Zoom level to view the file at.",
                       0  /* minimum value */,
                       10 /* maximum value */,
                       2  /* default value */,
                       G_PARAM_READWRITE);

  g_object_class_install_properties (object_class,
                                     N_PROPERTIES,
                                     obj_properties);
}
```

If you need this, make sure you can build and run code similar to the
code shown above. Also, make sure your construct properties can be set
without side effects during construction.
Some people sometimes need to complete the initialization of an instance
of a type only after the properties passed to the constructors have been
set. This is possible through the use of the `constructor()`
class method as described in gobject-instantiation or,
more simply, using the `constructed()` class method.
Note that the `constructed()`
virtual function will only be invoked after the properties marked as
`G_PARAM_CONSTRUCT_ONLY` or
`G_PARAM_CONSTRUCT` have been consumed, but
before the regular properties passed to `g_object_new()`
have been set.


### 🐣 Object destruction

Again, it is often difficult to figure out which mechanism to use to
hook into the object's destruction process: when the last `g_object_unref`
function call is made, a lot of things happen as described in
gobject-destruction-table.
The destruction process of your object is in two phases: dispose and
finalize. This split is necessary to handle
potential cycles due to the nature of the reference counting mechanism
used by GObject, as well as dealing with temporary revival of
instances in case of signal emission during the destruction sequence.
See gobject-memory-cycles for more information.

```cpp
struct _ViewerFilePrivate
{
  gchar *filename;
  guint zoom_level;

  GInputStream *input_stream;
};

G_DEFINE_TYPE_WITH_PRIVATE (ViewerFile, viewer_file, G_TYPE_OBJECT)

static void
viewer_file_dispose (GObject *gobject)
{
  ViewerFilePrivate *priv = viewer_file_get_instance_private (VIEWER_FILE (gobject));

  /* In dispose(), you are supposed to free all types referenced from this
   * object which might themselves hold a reference to self. Generally,
   * the most simple solution is to unref all members on which you own a 
   * reference.
   */

  /* dispose() might be called multiple times, so we must guard against
   * calling g_object_unref() on an invalid GObject by setting the member
   * NULL; g_clear_object() does this for us.
   */
  g_clear_object (&amp;priv->input_stream);

  /* Always chain up to the parent class; there is no need to check if
   * the parent class implements the dispose() virtual function: it is
   * always guaranteed to do so
   */
  G_OBJECT_CLASS (viewer_file_parent_class)->dispose (gobject);
}

static void
viewer_file_finalize (GObject *gobject)
{
  ViewerFilePrivate *priv = viewer_file_get_instance_private (VIEWER_FILE (gobject));

  g_free (priv->filename);

  /* Always chain up to the parent class; as with dispose(), finalize()
   * is guaranteed to exist on the parent's class virtual function table
   */
  G_OBJECT_CLASS (viewer_file_parent_class)->finalize (gobject);
}

static void
viewer_file_class_init (ViewerFileClass *klass)
{
  GObjectClass *object_class = G_OBJECT_CLASS (klass);

  object_class->dispose = viewer_file_dispose;
  object_class->finalize = viewer_file_finalize;
}

static void
viewer_file_init (ViewerFile *self);
{
  ViewerFilePrivate *priv = viewer_file_get_instance_private (self);

  priv->input_stream = g_object_new (VIEWER_TYPE_INPUT_STREAM, NULL);
  priv->filename = /* would be set as a property */;
}
```

It is possible that object methods might be invoked after dispose is
run and before finalize runs. GObject does not consider this to be a
program error: you must gracefully detect this and neither crash nor
warn the user, by having a disposed instance revert to an inert state.


### 🐣 Object methods

Just as with C++, there are many different ways to define object
methods and extend them: the following list and sections draw on
C++ vocabulary. (Readers are expected to know basic C++ concepts.
Those who have not had to write C++ code recently can refer to e.g.
<ulink url="http://www.cplusplus.com/doc/tutorial/"/> to refresh
their memories.)

0. non-virtual public methods,
0. virtual public methods and
0. virtual private methods


### 🐣 Non-virtual public methods

These are the simplest, providing a simple method which
acts on the object. Provide a function
prototype in the header and an implementation of that prototype
in the source file.

```cpp
/* declaration in the header. */
void viewer_file_open (ViewerFile  *self,
                       GError     **error);

/* implementation in the source file */
void
viewer_file_open (ViewerFile  *self,
                  GError     **error)
{
  g_return_if_fail (VIEWER_IS_FILE (self));
  g_return_if_fail (error == NULL || *error == NULL);

  /* do stuff here. */
}
```


### 🐣 Virtual public methods

This is the preferred way to create GObjects with overridable methods:

0.  Define the common method and its virtual function in the
    class structure in the public header

0.  Define the common method in the header file and implement it in the
    source file

0.  Implement a base version of the virtual function in the source
    file and initialize the virtual function pointer to this
    implementation in the object’s `class_init`
    function; or leave it as `NULL` for a ‘pure
    virtual’ method which must be overridden by derived classes

0.  Re-implement the virtual function in each derived class which needs
    to override it

Note that virtual functions can only be defined if the class is
derivable, declared using `G_DECLARE_DERIVABLE_TYPE`
so the class structure can be defined.

```cpp
/* declaration in viewer-file.h. */
#define VIEWER_TYPE_FILE viewer_file_get_type ()
G_DECLARE_DERIVABLE_TYPE (ViewerFile, viewer_file, VIEWER, FILE, GObject)

struct _ViewerFileClass
{
  GObjectClass parent_class;

  /* stuff */
  void (*open) (ViewerFile  *self,
                GError     **error);

  /* Padding to allow adding up to 12 new virtual functions without
   * breaking ABI. */
  gpointer padding[12];
};

void viewer_file_open (ViewerFile  *self,
                       GError     **error);

/* implementation in viewer-file.c */
void
viewer_file_open (ViewerFile  *self,
                  GError     **error)
{
  ViewerFileClass *klass;

  g_return_if_fail (VIEWER_IS_FILE (self));
  g_return_if_fail (error == NULL || *error == NULL);

  klass = VIEWER_FILE_GET_CLASS (self);
  g_return_if_fail (klass->open != NULL);

  klass->open (self, error);
}
```

The code above simply redirects the `open` call
to the relevant virtual function.

It is possible to provide a default
implementation for this class method in the object's
`class_init` function: initialize the
`klass-&gt;open` field to a pointer to the
actual implementation.
By default, class methods that are not inherited are initialized to
`NULL`, and thus are to be considered "pure virtual".

```cpp
static void
viewer_file_real_close (ViewerFile  *self,
                        GError     **error)
{
  /* Default implementation for the virtual method. */
}

static void
viewer_file_class_init (ViewerFileClass *klass)
{
  /* this is not necessary, except for demonstration purposes.
   *
   * pure virtual method: mandates implementation in children.
   */
  klass->open = NULL;

  /* merely virtual method. */
  klass->close = viewer_file_real_close;
}

void
viewer_file_open (ViewerFile  *self,
                  GError     **error)
{
  ViewerFileClass *klass;

  g_return_if_fail (VIEWER_IS_FILE (self));
  g_return_if_fail (error == NULL || *error == NULL);

  klass = VIEWER_FILE_GET_CLASS (self);

  /* if the method is purely virtual, then it is a good idea to
   * check that it has been overridden before calling it, and,
   * depending on the intent of the class, either ignore it silently
   * or warn the user.
   */
  g_return_if_fail (klass->open != NULL);
  klass->open (self, error);
}

void
viewer_file_close (ViewerFile  *self,
                   GError     **error)
{
  ViewerFileClass *klass;

  g_return_if_fail (VIEWER_IS_FILE (self));
  g_return_if_fail (error == NULL || *error == NULL);

  klass = VIEWER_FILE_GET_CLASS (self);
  if (klass->close != NULL)
    klass->close (self, error);
}
```

### 🐣 Virtual private Methods

These are very similar to virtual public methods. They just don't
have a public function to call directly. The header
file contains only a declaration of the virtual function:

```cpp
/* declaration in viewer-file.h. */
struct _ViewerFileClass
{
  GObjectClass parent;

  /* Public virtual method as before. */
  void     (*open)           (ViewerFile  *self,
                              GError     **error);

  /* Private helper function to work out whether the file can be loaded via
   * memory mapped I/O, or whether it has to be read as a stream. */
  gboolean (*can_memory_map) (ViewerFile *self);

  /* Padding to allow adding up to 12 new virtual functions without
   * breaking ABI. */
  gpointer padding[12];
};

void viewer_file_open (ViewerFile *self, GError **error);
```

These virtual functions are often used to delegate part of the job
to child classes:

```cpp
/* this accessor function is static: it is not exported outside of this file. */
static gboolean 
viewer_file_can_memory_map (ViewerFile *self)
{
  return VIEWER_FILE_GET_CLASS (self)->can_memory_map (self);
}

void
viewer_file_open (ViewerFile  *self,
                  GError     **error)
{
  g_return_if_fail (VIEWER_IS_FILE (self));
  g_return_if_fail (error == NULL || *error == NULL);

  /*
   * Try to load the file using memory mapped I/O, if the implementation of the
   * class determines that is possible using its private virtual method.
   */
  if (viewer_file_can_memory_map (self))
    {
      /* Load the file using memory mapped I/O. */
    }
  else
    {
      /* Fall back to trying to load the file using streaming I/O… */
    }
}
```


Again, it is possible to provide a default implementation for this
private virtual function:

```cpp
static gboolean
viewer_file_real_can_memory_map (ViewerFile *self)
{
  /* As an example, always return false. Or, potentially return true if the
   * file is local. */
  return FALSE;
}

static void
viewer_file_class_init (ViewerFileClass *klass)
{
  /* non-pure virtual method; does not have to be implemented in children. */
  klass->can_memory_map = viewer_file_real_can_memory_map;
}
```

Derived classes can then override the method with code such as:

```cpp
static void
viewer_audio_file_class_init (ViewerAudioFileClass *klass)
{
  ViewerFileClass *file_class = VIEWER_FILE_CLASS (klass);

  /* implement pure virtual function. */
  file_class->can_memory_map = viewer_audio_file_can_memory_map;
}
```


### 🐣 Chaining up


Chaining up is often loosely defined by the following set of conditions:

0.  Parent class A defines a public virtual method named `foo` and 
    provides a default implementation.
0.  Child class B re-implements method `foo`.
0.  B’s implementation of `foo` calls (‘chains up to’) its parent class A’s implementation of `foo`.
There are various uses of this idiom:
<itemizedlist>
0.  You need to extend the behaviour of a class without modifying its code. You create
a subclass to inherit its implementation, re-implement a public virtual method to modify the behaviour
and chain up to ensure that the previous behaviour is not really modified, just extended.

0.  You need to implement the
<ulink url="http://en.wikipedia.org/wiki/Chain-of-responsibility_pattern">Chain
Of Responsibility pattern</ulink>: each object of the inheritance
tree chains up to its parent (typically, at the beginning or the end of the method) to ensure that
each handler is run in turn.
To explicitly chain up to the implementation of the virtual method in the parent class, 
you first need a handle to the original parent class structure. This pointer can then be used to 
access the original virtual function pointer and invoke it directly.
<footnote>
  The *original* adjective used in this sentence is not innocuous. To fully 
understand its meaning, recall how class structures are initialized: for each object type,
the class structure associated with this object is created by first copying the class structure of its
parent type (a simple `memcpy`) and then by invoking the `class_init` callback on
the resulting class structure. Since the `class_init` callback is responsible for overwriting the class structure
with the user re-implementations of the class methods, the modified copy of the parent class
structure stored in the derived instance cannot be used. A copy of the class structure of an instance of the parent
class is needed.
</footnote>
Use the `parent_class` pointer created and initialized
by the
`G_DEFINE_TYPE`
family of macros, for instance:

```cpp
static void
b_method_to_call (B *obj, gint some_param)
{
  /* do stuff before chain up */

  /* call the method_to_call() virtual function on the
   * parent of BClass, AClass.
   *
   * remember the explicit cast to AClass*
   */
  A_CLASS (b_parent_class)->method_to_call (obj, some_param);

  /* do stuff after chain up */
}
```

  </para>

  

</chapter>
<!-- End Howto GObject -->

## 🍀 How to define and implement interfaces

### 🐣 Defining interfaces


The theory behind how GObject interfaces work is given in
gtype-non-instantiatable-non-classed; this section covers how to
define and implement an interface.

The first step is to get the header right. This interface
defines three methods:

```cpp
/*
 * Copyright/Licensing information.
 */

#ifndef __VIEWER_EDITABLE_H__
#define __VIEWER_EDITABLE_H__

#include &lt;glib-object.h&gt;

G_BEGIN_DECLS

#define VIEWER_TYPE_EDITABLE viewer_editable_get_type ()
G_DECLARE_INTERFACE (ViewerEditable, viewer_editable, VIEWER, EDITABLE, GObject)

struct _ViewerEditableInterface
{
  GTypeInterface parent_iface;

  void (*save) (ViewerEditable  *self,
                GError         **error);
  void (*undo) (ViewerEditable  *self,
                guint            n_steps);
  void (*redo) (ViewerEditable  *self,
                guint            n_steps);
};

void viewer_editable_save (ViewerEditable  *self,
                           GError         **error);
void viewer_editable_undo (ViewerEditable  *self,
                           guint            n_steps);
void viewer_editable_redo (ViewerEditable  *self,
                           guint            n_steps);

G_END_DECLS

#endif /* __VIEWER_EDITABLE_H__ */
```

This code is the same as the code for a normal `GType`
which derives from a `GObject` except for a few details:

0.  The `_GET_CLASS` function is called
    `_GET_IFACE` (and is defined by
    `G_DECLARE_INTERFACE`).

0.  The instance type, `ViewerEditable`, is not fully defined: it is
    used merely as an abstract type which represents an instance of
    whatever object which implements the interface.

0.  The parent of the `ViewerEditableInterface` is
    `GTypeInterface`, not `GObjectClass`.


The implementation of the `ViewerEditable` type itself is trivial:

0.  `G_DEFINE_INTERFACE`
    creates a `viewer_editable_get_type` function which registers the
    type in the type system. The third argument is used to define a
    prerequisite interface
    (which we'll talk about more later). Just pass `0` for this
    argument when an interface has no prerequisite.

0.  `viewer_editable_default_init` is expected
    to register the interface's signals if there are any (we will see a bit
    later how to use them).
0.  The interface methods `viewer_editable_save`,
    `viewer_editable_undo` and `viewer_editable_redo` dereference the interface
    structure to access its associated interface function and call it.


```cpp
G_DEFINE_INTERFACE (ViewerEditable, viewer_editable, G_TYPE_OBJECT)

static void
viewer_editable_default_init (ViewerEditableInterface *iface)
{
    /* add properties and signals to the interface here */
}

void
viewer_editable_save (ViewerEditable  *self,
                      GError         **error)
{
  ViewerEditableInterface *iface;

  g_return_if_fail (VIEWER_IS_EDITABLE (self));
  g_return_if_fail (error == NULL || *error == NULL);

  iface = VIEWER_EDITABLE_GET_IFACE (self);
  g_return_if_fail (iface->save != NULL);
  iface->save (self, error);
}

void
viewer_editable_undo (ViewerEditable *self,
                      guint           n_steps)
{
  ViewerEditableInterface *iface;

  g_return_if_fail (VIEWER_IS_EDITABLE (self));

  iface = VIEWER_EDITABLE_GET_IFACE (self);
  g_return_if_fail (iface->undo != NULL);
  iface->undo (self, n_steps);
}

void
viewer_editable_redo (ViewerEditable *self,
                      guint           n_steps)
{
  ViewerEditableInterface *iface;

  g_return_if_fail (VIEWER_IS_EDITABLE (self));

  iface = VIEWER_EDITABLE_GET_IFACE (self);
  g_return_if_fail (iface->redo != NULL);
  iface->redo (self, n_steps);
}
```

  

### 🐣 Implementing interfaces

Once the interface is defined, implementing it is rather trivial.
The first step is to define a normal final GObject class exactly as in
howto-gobject-header.
The second step is to implement `ViewerFile` by defining
it using `G_DEFINE_TYPE_WITH_CODE` and
`G_IMPLEMENT_INTERFACE` instead of `G_DEFINE_TYPE`:

```cpp
static void viewer_file_editable_interface_init (ViewerEditableInterface *iface);

G_DEFINE_TYPE_WITH_CODE (ViewerFile, viewer_file, G_TYPE_OBJECT,
                         G_IMPLEMENT_INTERFACE (VIEWER_TYPE_EDITABLE,
                                                viewer_file_editable_interface_init))
```

This definition is very much like all the similar functions seen
previously. The only interface-specific code present here is the use of
`G_IMPLEMENT_INTERFACE`.

Classes can implement multiple interfaces by using multiple calls to
`G_IMPLEMENT_INTERFACE` inside the call to `G_DEFINE_TYPE_WITH_CODE`.

`viewer_file_editable_interface_init`, the interface
initialization function: inside it every virtual method of the interface
must be assigned to its implementation:

```cpp
static void
viewer_file_editable_save (ViewerFile  *self,
                           GError     **error)
{
  g_print ("File implementation of editable interface save method: %s.\n",
           self->filename);
}

static void
viewer_file_editable_undo (ViewerFile *self,
                           guint       n_steps)
{
  g_print ("File implementation of editable interface undo method: %s.\n",
           self->filename);
}

static void
viewer_file_editable_redo (ViewerFile *self,
                           guint       n_steps)
{
  g_print ("File implementation of editable interface redo method: %s.\n",
           self->filename);
}

static void
viewer_file_editable_interface_init (ViewerEditableInterface *iface)
{
  iface->save = viewer_file_editable_save;
  iface->undo = viewer_file_editable_undo;
  iface->redo = viewer_file_editable_redo;
}

static void
viewer_file_init (ViewerFile *self)
{
  /* Instance variable initialisation code. */
}
```

If the object is not of final type, e.g. was declared using
`G_DECLARE_DERIVABLE_TYPE` then `G_ADD_PRIVATE`
macro should be added. The private structure should be declared exactly
as for a normal derivable object, see howto-gobject-code.

```cpp
G_DEFINE_TYPE_WITH_CODE (ViewerFile, viewer_file, G_TYPE_OBJECT,
                         G_ADD_PRIVATE (ViewerFile)
                         G_IMPLEMENT_INTERFACE (VIEWER_TYPE_EDITABLE,
                                                viewer_file_editable_interface_init))
```

  

### 🐣 Interface definition prerequisites

To specify that an interface requires the presence of other interfaces
when implemented, GObject introduces the concept of
*prerequisites*: it is possible to associate
a list of prerequisite types to an interface. For example, if
object A wishes to implement interface I1, and if interface I1 has a
prerequisite on interface I2, A has to implement both I1 and I2.
The mechanism described above is, in practice, very similar to
Java's interface I1 extends interface I2. The example below shows
the GObject equivalent:

```cpp
/* Make the ViewerEditableLossy interface require ViewerEditable interface. */
G_DEFINE_INTERFACE (ViewerEditableLossy, viewer_editable_lossy, VIEWER_TYPE_EDITABLE)
```

In the `G_DEFINE_INTERFACE`
call above, the third parameter defines the prerequisite type. This
is the GType of either an interface or a class. In this case
the `ViewerEditable` interface is a prerequisite of
`ViewerEditableLossy`. The code
below shows how an implementation can implement both interfaces and
register their implementations:

```cpp
static void
viewer_file_editable_lossy_compress (ViewerEditableLossy *editable)
{
  ViewerFile *self = VIEWER_FILE (editable);

  g_print ("File implementation of lossy editable interface compress method: %s.\n",
           self->filename);
}

static void
viewer_file_editable_lossy_interface_init (ViewerEditableLossyInterface *iface)
{
  iface->compress = viewer_file_editable_lossy_compress;
}

static void
viewer_file_editable_save (ViewerEditable  *editable,
                           GError         **error)
{
  ViewerFile *self = VIEWER_FILE (editable);

  g_print ("File implementation of editable interface save method: %s.\n",
           self->filename);
}

static void
viewer_file_editable_undo (ViewerEditable *editable,
                           guint           n_steps)
{
  ViewerFile *self = VIEWER_FILE (editable);

  g_print ("File implementation of editable interface undo method: %s.\n",
           self->filename);
}

static void
viewer_file_editable_redo (ViewerEditable *editable,
                           guint           n_steps)
{
  ViewerFile *self = VIEWER_FILE (editable);

  g_print ("File implementation of editable interface redo method: %s.\n",
           self->filename);
}

static void
viewer_file_editable_interface_init (ViewerEditableInterface *iface)
{
  iface->save = viewer_file_editable_save;
  iface->undo = viewer_file_editable_undo;
  iface->redo = viewer_file_editable_redo;
}

static void
viewer_file_class_init (ViewerFileClass *klass)
{
  /* Nothing here. */
}

static void
viewer_file_init (ViewerFile *self)
{
  /* Instance variable initialisation code. */
}

G_DEFINE_TYPE_WITH_CODE (ViewerFile, viewer_file, G_TYPE_OBJECT,
                         G_IMPLEMENT_INTERFACE (VIEWER_TYPE_EDITABLE,
                                                viewer_file_editable_interface_init)
                         G_IMPLEMENT_INTERFACE (VIEWER_TYPE_EDITABLE_LOSSY,
                                                viewer_file_editable_lossy_interface_init))
```

It is very important to notice that the order in which interface
implementations are added to the main object is not random:
`g_type_add_interface_static`,
which is called by `G_IMPLEMENT_INTERFACE`,
must be invoked first on the interfaces which have no prerequisites and then on
the others.


### 🐣 Interface properties

GObject interfaces can also have
properties. Declaration of the interface properties is similar to
declaring the properties of ordinary GObject types as explained in
gobject-properties, except that `g_object_interface_install_property`
is used to declare the properties instead of `g_object_class_install_property`.
To include a property named 'autosave-frequency' of type `gdouble` in the 
`ViewerEditable` interface example code above, we only need to
add one call in `viewer_editable_default_init` as shown below:

```cpp
static void
viewer_editable_default_init (ViewerEditableInterface *iface)
{
  g_object_interface_install_property (iface,
         g_param_spec_double ("autosave-frequency",
          "Autosave frequency",
          "Frequency (in per-seconds) to autosave backups of the editable content at. "
          "Or zero to disable autosaves.",
          0.0,  /* minimum */
          G_MAXDOUBLE,  /* maximum */
          0.0,  /* default */
          G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS));
  }
```

One point worth noting is that the declared property wasn't assigned an 
integer ID. The reason being that integer IDs of properties are used
only inside the `get_property` and
`set_property` virtual methods. Since interfaces
declare but do not *implement* properties, there is no
need to assign integer IDs to them.
An implementation declares and defines its properties in the usual
way as explained in gobject-properties, except for one
small change: it can declare the properties of the interface it
implements using `g_object_class_override_property`
instead of `g_object_class_install_property`.
The following code snippet shows the modifications needed in the
`ViewerFile` declaration and implementation above:

```cpp
struct _ViewerFile
{
  GObject parent_instance;

  gdouble autosave_frequency;
};

enum
{
  PROP_AUTOSAVE_FREQUENCY = 1,
  N_PROPERTIES
};

static void
viewer_file_set_property (GObject      *object,
                          guint         prop_id,
                          const GValue *value,
                          GParamSpec   *pspec)
{
  ViewerFile *file = VIEWER_FILE (object);

  switch (prop_id)
    {
    case PROP_AUTOSAVE_FREQUENCY:
      file->autosave_frequency = g_value_get_double (value);
      break;

    default:
      G_OBJECT_WARN_INVALID_PROPERTY_ID (object, prop_id, pspec);
      break;
    }
}

static void
viewer_file_get_property (GObject    *object,
                          guint       prop_id,
                          GValue     *value,
                          GParamSpec *pspec)
{
  ViewerFile *file = VIEWER_FILE (object);

  switch (prop_id)
    {
    case PROP_AUTOSAVE_FREQUENCY:
      g_value_set_double (value, file->autosave_frequency);
      break;

    default:
      G_OBJECT_WARN_INVALID_PROPERTY_ID (object, prop_id, pspec);
      break;
    }
}

static void
viewer_file_class_init (ViewerFileClass *klass)
{
  GObjectClass *object_class = G_OBJECT_CLASS (klass);

  object_class->set_property = viewer_file_set_property;
  object_class->get_property = viewer_file_get_property;

  g_object_class_override_property (object_class, PROP_AUTOSAVE_FREQUENCY, "autosave-frequency");
}
```


### 🐣 Overriding interface methods

If a base class already implements an interface and a derived
class needs to implement the same interface but needs to override certain
methods, you must reimplement the interface and set only the interface
methods which need overriding.
In this example, `ViewerAudioFile` is derived from
`ViewerFile`. Both implement the `ViewerEditable`
interface. `ViewerAudioFile` only implements one method of the
`ViewerEditable` interface and uses the base class implementation of the other.

```cpp
static void
viewer_audio_file_editable_save (ViewerEditable  *editable,
                                 GError         **error)
{
  ViewerAudioFile *self = VIEWER_AUDIO_FILE (editable);

  g_print ("Audio file implementation of editable interface save method.\n");
}

static void
viewer_audio_file_editable_interface_init (ViewerEditableInterface *iface)
{
  /* Override the implementation of save(). */
  iface->save = viewer_audio_file_editable_save;

  /*
   * Leave iface->undo and ->redo alone, they are already set to the
   * base class implementation.
   */
}

G_DEFINE_TYPE_WITH_CODE (ViewerAudioFile, viewer_audio_file, VIEWER_TYPE_FILE,
                         G_IMPLEMENT_INTERFACE (VIEWER_TYPE_EDITABLE,
                                                viewer_audio_file_editable_interface_init))

static void
viewer_audio_file_class_init (ViewerAudioFileClass *klass)
{
  /* Nothing here. */
}

static void
viewer_audio_file_init (ViewerAudioFile *self)
{
  /* Nothing here. */
}
```

To access the base class interface implementation use `g_type_interface_peek_parent`
from within an interface's `default_init` function.
To call the base class implementation of an interface
method from a derived class where than interface method has been
overridden, stash away the pointer returned from `g_type_interface_peek_parent`
in a global variable.
In this example `ViewerAudioFile` overrides the
`save` interface method. In its overridden method
it calls the base class implementation of the same interface method.

```cpp
static ViewerEditableInterface *viewer_editable_parent_interface = NULL;

static void
viewer_audio_file_editable_save (ViewerEditable  *editable,
                                 GError         **error)
{
  ViewerAudioFile *self = VIEWER_AUDIO_FILE (editable);

  g_print ("Audio file implementation of editable interface save method.\n");

  /* Now call the base implementation */
  viewer_editable_parent_interface->save (editable, error);
}

static void
viewer_audio_file_editable_interface_init (ViewerEditableInterface *iface)
{
  viewer_editable_parent_interface = g_type_interface_peek_parent (iface);

  iface->save = viewer_audio_file_editable_save;
}

G_DEFINE_TYPE_WITH_CODE (ViewerAudioFile, viewer_audio_file, VIEWER_TYPE_FILE,
                         G_IMPLEMENT_INTERFACE (VIEWER_TYPE_EDITABLE,
                                                viewer_audio_file_editable_interface_init))

static void
viewer_audio_file_class_init (ViewerAudioFileClass *klass)
{
  /* Nothing here. */
}

static void
viewer_audio_file_init (ViewerAudioFile *self)
{
  /* Nothing here. */
}
```

<!-- End Howto Interfaces -->

## 🍀 How to create and use signals

The signal system in GType is pretty complex and
flexible: it is possible for its users to connect at runtime any
number of callbacks (implemented in any language for which a binding
exists)
to any signal and to stop the emission of any signal at any 
state of the signal emission process. This flexibility makes it
possible to use GSignal for much more than just emitting signals to
multiple clients.

A Python callback can be connected to any signal on any
C-based GObject, and vice versa, assuming that the Python object
inherits from GObject.

### 🐣 Simple use of signals

The most basic use of signals is to implement event
notification. For example, given a `ViewerFile` object with
a `write` method, a signal could be emitted whenever
the file is changed using that method.
The code below shows how the user can connect a callback to the
"changed" signal.

```cpp
file = g_object_new (VIEWER_FILE_TYPE, NULL);

g_signal_connect (file, "changed", (GCallback) changed_event, NULL);

viewer_file_write (file, buffer, strlen (buffer));
```

The `ViewerFile` signal is registered in the
`class_init` function:

```cpp
file_signals[CHANGED] = 
  g_signal_newv ("changed",
                 G_TYPE_FROM_CLASS (object_class),
                 G_SIGNAL_RUN_LAST | G_SIGNAL_NO_RECURSE | G_SIGNAL_NO_HOOKS,
                 NULL /* closure */,
                 NULL /* accumulator */,
                 NULL /* accumulator data */,
                 NULL /* C marshaller */,
                 G_TYPE_NONE /* return_type */,
                 0     /* n_params */,
                 NULL  /* param_types */);
```

and the signal is emitted in `viewer_file_write`:

```cpp
void
viewer_file_write (ViewerFile   *self,
                   const guint8 *buffer,
                   gsize         size)
{
  g_return_if_fail (VIEWER_IS_FILE (self));
  g_return_if_fail (buffer != NULL || size == 0);

  /* First write data. */

  /* Then, notify user of data written. */
  g_signal_emit (self, file_signals[CHANGED], 0 /* details */);
}
```

As shown above, the details parameter can safely be set to zero if no
detail needs to be conveyed. For a discussion of what it can be used for,
see signal-detail
The C signal marshaller should always be `NULL`, in which
case the best marshaller for the given closure type will be chosen by
GLib. This may be an internal marshaller specific to the closure type, or
`g_cclosure_marshal_generic`, which implements generic
conversion of arrays of parameters to C callback invocations. GLib used to
require the user to write or generate a type-specific marshaller and pass
that, but that has been deprecated in favour of automatic selection of
marshallers.
Note that `g_cclosure_marshal_generic` is slower than
non-generic marshallers, so should be avoided for performance critical
code. However, performance critical code should rarely be using signals
anyway, as emitting a signal blocks on emitting it to all listeners, which
has potentially unbounded cost.


# 📜 Floating references

Note: Floating references are a C convenience API and should not be used in modern `GObject` code. Language bindings in particular find the concept highly problematic, as floating references are not identifiable through annotations, and neither are deviations from the floating reference behavior, like types that inherit from `GInitiallyUnowned` and still return a full reference from `g_object_new()`.

`GInitiallyUnowned` is derived from `GObject`. The only difference between the two is that the initial reference of a `GInitiallyUnowned` is flagged as a “floating” reference. This means that it is not specifically claimed to be “owned” by any code portion. The main motivation for providing floating references is C convenience. In particular, it allows code to be written as:

```cpp
container = create_container ();
container_add_child (container, create_child());
```

If `container_add_child()` calls `g_object_ref_sink()` on the passed-in child, no reference of the newly created child is leaked. Without floating references, `container_add_child()` can only acquire a reference the new child, so to implement this code without reference leaks, it would have to be written as:

```cpp
Child *child;
container = create_container ();
child = create_child ();
container_add_child (container, child);
g_object_unref (child);
```
The floating reference can be converted into an ordinary reference by calling `g_object_ref_sink()`. For already sunken objects (objects that don’t have a floating reference anymore), `g_object_ref_sink()` is equivalent to `g_object_ref()` and returns a new reference.

Since floating references are useful almost exclusively for C convenience, language bindings that provide automated reference and memory ownership maintenance (such as smart pointers or garbage collection) should not expose floating references in their API. The best practice for handling types that have initially floating references is to immediately sink those references after `g_object_new()` returns, by checking if the GType inherits from `GInitiallyUnowned`. For instance:

```cpp
GObject *res = g_object_new_with_properties (gtype,
                                             n_props,
                                             prop_names,
                                             prop_values);

// or: if (g_type_is_a (gtype, G_TYPE_INITIALLY_UNOWNED))
if (G_IS_INITIALLY_UNOWNED (res))
  g_object_ref_sink (res);

return res;
```
Some object implementations may need to save an object’s floating state across certain code portions (an example is GtkMenu in GTK3), to achieve this, the following sequence can be used:

```cpp
// save floating state
gboolean was_floating = g_object_is_floating (object);
g_object_ref_sink (object);
// protected code portion

...

// restore floating state
if (was_floating)
  g_object_force_floating (object);
else
  g_object_unref (object); // release previously acquired reference
```

## 🍀 Replacing floating references with annotations
You should avoid basing your object hierarchy on floating references, as they are hard to understand even in C, and introduce additional limitations when consuming a GObject-based API in other languages.

One way to express the ownership transfer between “container” and “child” instances is to use ownership transfer annotations in your documentation and introspection data. For instance, you can implement this pattern:

```cpp
container_add_child (container, create_child ());
```

without leaking by having container_add_child() defined as:

```cpp
/**
 * container_add_child:
 * @self: a container
 * @child: (transfer full): the child to add to the container
 *
 * ...
 */
void
container_add_child (Container *container,
                     Child *child)
{
  container->children = g_list_append (container->children, child);
}
```
The container does not explicitly acquire a reference on the child; instead, the ownership of the child is transferred to the container. The transfer annotation will be used by language bindings to ensure that there are no leaks; and documentation tools will explicitly note that the callee now owns the value passed by the caller.

## 🍀 Replacing floating references with weak references

Another option for replacing floating references is to use weak references in place of strong ones. A “container” can acquire a weak reference on the “child” instance by using `g_object_weak_ref()`; once the child instance loses its last strong reference, the container holding a weak reference is notified, and it can either remove the child from its internal list, or turn a weak reference into a strong one.



# 📜 Boxed types

A “boxed type” is a generic wrapper mechanism for arbitrary C structures. The only thing the type system needs to know about the structures is how to copy them (a `GBoxedCopyFunc`) and how to free them (a `GBoxedFreeFunc`)—beyond that they are treated as opaque chunks of memory.

Boxed types are useful for simple value-holder structures like rectangles or points. They can also be used for wrapping structures defined in non-`GObject` based libraries. They allow arbitrary structures to be handled in a uniform way, allowing uniform copying (or referencing) and freeing (or unreferencing) of them, and uniform representation of the type of the contained structure. In turn, this allows any type which can be boxed to be set as the data in a `GValue`, which allows for polymorphic handling of a much wider range of data types, and hence usage of such types as `GObject` property values.

All boxed types inherit from the `G_TYPE_BOXED` fundamental type.

It is very important to note that boxed types are not deeply inheritable: you cannot register a boxed type that inherits from another boxed type. This means you cannot create your own custom, parallel type hierarchy and map it to `GType` using boxed types. If you want to have deeply inheritable types without using `GObject`, you will need to use `GTypeInstance`.

## 🍀 Registering a new boxed type
The recommended way to register a new boxed type is to use the `G_DEFINE_BOXED_TYPE` macro:

```cpp
// In the header

#define EXAMPLE_TYPE_RECTANGLE (example_rectangle_get_type())

typedef struct {
  double x, y;
  double width, height;
} ExampleRectangle;

GType
example_rectangle_get_type (void);

ExampleRectangle *
example_rectangle_copy (ExampleRectangle *r);

void
example_rectangle_free (ExampleRectangle *r);

// In the source
G_DEFINE_BOXED_TYPE (ExampleRectangle, example_rectangle,
                     example_rectangle_copy,
                     example_rectangle_free)
obj_props[PROP_BOUNDS] =
  g_param_spec_boxed ("bounds", NULL, NULL,
                      EXAMPLE_TYPE_RECTANGLE,
                      G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
switch (prop_id)
  {
  // ...
  case PROP_BOUNDS:
    example_object_set_bounds (self, g_value_get_boxed (value));
    break;
  // ...
  }
switch (prop_id)
  {
  // ...
  case PROP_BOUNDS:
    g_value_set_boxed (self, &self->bounds);
    break;
  // ...
  }
```

Just like G_`DEFINE_TYPE` and `G_DEFINE_INTERFACE_TYPE`, the `G_DEFINE_BOXED_TYPE` macro will provide the definition of the `get_type()` function, which will call `g_boxed_type_register_static()` with the given type name as well as the `GBoxedCopyFunc` and `GBoxedFreeFunc` functions.

## 🍀 Using boxed types

Object properties
In order to use a boxed type with GObject properties you will need to register the property using `g_param_spec_boxed()`, e.g.

```cpp
// In the header

#define EXAMPLE_TYPE_RECTANGLE (example_rectangle_get_type())

typedef struct {
  double x, y;
  double width, height;
} ExampleRectangle;

GType
example_rectangle_get_type (void);

ExampleRectangle *
example_rectangle_copy (ExampleRectangle *r);

void
example_rectangle_free (ExampleRectangle *r);

// In the source
G_DEFINE_BOXED_TYPE (ExampleRectangle, example_rectangle,
                     example_rectangle_copy,
                     example_rectangle_free)
obj_props[PROP_BOUNDS] =
  g_param_spec_boxed ("bounds", NULL, NULL,
                      EXAMPLE_TYPE_RECTANGLE,
                      G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
switch (prop_id)
  {
  // ...
  case PROP_BOUNDS:
    example_object_set_bounds (self, g_value_get_boxed (value));
    break;
  // ...
  }
switch (prop_id)
  {
  // ...
  case PROP_BOUNDS:
    g_value_set_boxed (self, &self->bounds);
    break;
  // ...
  }
```

In the set_property implementation you can use g_value_get_boxed() to retrieve a pointer to the boxed type:

```cpp
// In the header

#define EXAMPLE_TYPE_RECTANGLE (example_rectangle_get_type())

typedef struct {
  double x, y;
  double width, height;
} ExampleRectangle;

GType
example_rectangle_get_type (void);

ExampleRectangle *
example_rectangle_copy (ExampleRectangle *r);

void
example_rectangle_free (ExampleRectangle *r);

// In the source
G_DEFINE_BOXED_TYPE (ExampleRectangle, example_rectangle,
                     example_rectangle_copy,
                     example_rectangle_free)
obj_props[PROP_BOUNDS] =
  g_param_spec_boxed ("bounds", NULL, NULL,
                      EXAMPLE_TYPE_RECTANGLE,
                      G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
switch (prop_id)
  {
  // ...
  case PROP_BOUNDS:
    example_object_set_bounds (self, g_value_get_boxed (value));
    break;
  // ...
  }
switch (prop_id)
  {
  // ...
  case PROP_BOUNDS:
    g_value_set_boxed (self, &self->bounds);
    break;
  // ...
  }
```

Similarly, you can use g_value_set_boxed() in the implementation of the get_property virtual function:

```cpp
// In the header

#define EXAMPLE_TYPE_RECTANGLE (example_rectangle_get_type())

typedef struct {
  double x, y;
  double width, height;
} ExampleRectangle;

GType
example_rectangle_get_type (void);

ExampleRectangle *
example_rectangle_copy (ExampleRectangle *r);

void
example_rectangle_free (ExampleRectangle *r);

// In the source
G_DEFINE_BOXED_TYPE (ExampleRectangle, example_rectangle,
                     example_rectangle_copy,
                     example_rectangle_free)
obj_props[PROP_BOUNDS] =
  g_param_spec_boxed ("bounds", NULL, NULL,
                      EXAMPLE_TYPE_RECTANGLE,
                      G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
switch (prop_id)
  {
  // ...
  case PROP_BOUNDS:
    example_object_set_bounds (self, g_value_get_boxed (value));
    break;
  // ...
  }
switch (prop_id)
  {
  // ...
  case PROP_BOUNDS:
    g_value_set_boxed (self, &self->bounds);
    break;
  // ...
  }
```

## 🍀 Reference counting

Boxed types are designed so that reference counted types can be boxed. Use the type’s ‘ref’ function as the `GBoxedCopyFunc`, and its ‘unref’ function as the `GBoxedFreeFunc`. For example, for GBytes, the `GBoxedCopyFunc` is `g_bytes_ref()`, and the `GBoxedFreeFunc` is `g_bytes_unref()`.


# 📜 Enumeration types

The GLib type system provides fundamental types for enumeration and flags types. Enumerations types are collection of identifiers associated with a numeric value; flags types are like enumerations, but allow their values to be combined by bitwise or.

A registered enumeration or flags type associates a name and a nickname with each allowed value, and the methods `g_enum_get_value_by_name()`, `g_enum_get_value_by_nick()`, `g_flags_get_value_by_name()` and `g_flags_get_value_by_nick()` can look up values by their name or nickname.

When an enumeration or flags type is registered with the GLib type system, it can be used as value type for object properties, using `g_param_spec_enum()` or `g_param_spec_flags()`.

GObject ships with a utility called glib-mkenums, that can construct suitable type registration functions from C enumeration definitions.

Example of how to get a string representation of an enum value:

```cpp
GEnumClass *enum_class;
GEnumValue *enum_value;

enum_class = g_type_class_ref (EXAMPLE_TYPE_ENUM);
enum_value = g_enum_get_value (enum_class, EXAMPLE_ENUM_FOO);

g_print ("Name: %s\n", enum_value->value_name);

g_type_class_unref (enum_class);
Copy
Alternatively, you can use g_enum_to_string().
```


# 📜 Generic value container

The `GValue` structure is basically a variable container that consists of a type identifier and a specific value of that type. The type identifier within a `GValue` structure always determines the type of the associated value.

To create an undefined `GValue` structure, simply create a zero-filled `GValue` structure. To initialize the `GValue`, use the `g_value_init()` function. A `GValue` cannot be used until it is initialized.

Once you have finished using a `GValue`, you must call `g_value_unset()` to ensure that all the resources associated with the `GValue` are freed.

The basic type operations (such as freeing and copying) are determined by the GTypeValueTable associated with the type ID stored in the `GValue`. Other `GValue` operations (such as converting values between types) are provided by this interface.

The code in the example program below demonstrates `GValue`‘s features:

```cpp
#include <glib-object.h>

static void
int2string (const GValue *src_value,
            GValue       *dest_value)
{
  if (g_value_get_int (src_value) == 42)
    g_value_set_static_string (dest_value, "An important number");
  else
    g_value_set_static_string (dest_value, "What's that?");
}

int
main (int   argc,
      char *argv[])
{
  // GValues must be initialized
  GValue a = G_VALUE_INIT;
  GValue b = G_VALUE_INIT;
  const char *message;

  // The GValue starts empty
  g_assert (!G_VALUE_HOLDS_STRING (&a));

  // Put a string in it
  g_value_init (&a, G_TYPE_STRING);
  g_assert (G_VALUE_HOLDS_STRING (&a));
  g_value_set_static_string (&a, "Hello, world!");
  g_printf ("%s\n", g_value_get_string (&a));

  // Reset it to its pristine state
  g_value_unset (&a);

  // It can then be reused for another type
  g_value_init (&a, G_TYPE_INT);
  g_value_set_int (&a, 42);

  // Attempt to transform it into a GValue of type STRING
  g_value_init (&b, G_TYPE_STRING);

  // An INT is transformable to a STRING
  g_assert (g_value_type_transformable (G_TYPE_INT, G_TYPE_STRING));

  g_value_transform (&a, &b);
  g_printf ("%s\n", g_value_get_string (&b));

  // Attempt to transform it again using a custom transform function
  g_value_register_transform_func (G_TYPE_INT, G_TYPE_STRING, int2string);
  g_value_transform (&a, &b);
  g_printf ("%s\n", g_value_get_string (&b));

  g_value_unset (&b);
  g_value_unset (&a);

  return 0;
}
```



# 📜 glib-mkenums User Commands

glib-mkenums - C language enum description generation utility

    glib-mkenums OPTION FILE

Description

`glib-mkenums` is a small utility that parses C code to
extract enum definitions and produces enum descriptions based on text templates
specified by the user. Typically, you can use this tool to generate enumeration
types for the GType type system, for GObject properties and signal marshalling;
additionally, you can use it to generate enumeration values of GSettings schemas.

`glib-mkenums` takes a list of valid C code files as
input. The options specified control the text that generated, substituting various
keywords enclosed in `@` characters in the templates.

Since version 2.74, GLib provides the `G_DEFINE_ENUM_TYPE`
and `G_DEFINE_FLAGS_TYPE` C pre-processor macros. These macros
can be used to define a GType for projects that have few, small enumeration
types without going through the complexities of generating code at build
time.


## 🍀 Production text substitutions

Certain keywords enclosed in `@` characters will be substituted in the
emitted text. For the substitution examples of the keywords below,
the following example enum definition is assumed:

```cpp
typedef enum
{
  PREFIX_THE_XVALUE    = 1 << 3,
  PREFIX_ANOTHER_VALUE = 1 << 4
} PrefixTheXEnum;
```

0. `@EnumName@`
    The name of the enum currently being processed, enum names are assumed to be
    properly namespaced and to use mixed capitalization to separate
    words (e.g. `PrefixTheXEnum`).
0. `@enum_name@`
    The enum name with words lowercase and word-separated by underscores
    (e.g. `prefix_the_xenum`).
0. `@ENUMNAME@`
    The enum name with words uppercase and word-separated by underscores
    (e.g. `PREFIX_THE_XENUM`).
0. `@ENUMSHORT@`
    The enum name with words uppercase and word-separated by underscores,
    prefix stripped (e.g. `THE_XENUM`).
0. `@ENUMPREFIX@`
    The prefix of the enum name (e.g. `PREFIX`).
0. `@VALUENAME@`
    The enum value name currently being processed with words uppercase and
    word-separated by underscores,
    this is the assumed literal notation of enum values in the C sources
    (e.g. `PREFIX_THE_XVALUE`).
0. `@valuenick@`
    A nick name for the enum value currently being processed, this is usually
    generated by stripping common prefix words of all the enum values of the
    current enum, the words are lowercase and underscores are substituted by a
    minus (e.g. `the-xvalue`).
0. `@valuenum@`
    The integer value for the enum value currently being processed. If the
    evaluation fails then `glib-mkenums` will exit with an
    error status, but this only happens if `@valuenum@`
    appears in your value production template. (Since: 2.26)
0. `@type@`
    This is substituted either by "enum" or "flags", depending on whether the
    enum value definitions contained bit-shift operators or not (e.g. `flags`).
0. `@Type@`
    The same as `@type@` with the first letter capitalized (e.g. `Flags`).
0. `@TYPE@`
    The same as `@type@` with all letters uppercased (e.g. `FLAGS`).
0. `@filename@`
    The full path of the input file currently being processed (e.g. `/build/environment/project/src/foo.h`).
0. `@basename@`
    The base name of the input file currently being processed (e.g. `foo.h`).
    Typically you want to use `@basename@` in place of `@filename@`
    in your templates, to improve the reproducibility of the build. (Since: 2.22)

## 🍀 Trigraph extensions

Some C comments are treated specially in the parsed enum definitions,
such comments start out with the trigraph sequence `/*<`
and end with the trigraph sequence `>*/`.

The following options can be specified per enum definition:

0. `skip`
    Indicates this enum definition should  be skipped.
0. `flags`
    Indicates this enum should be treated as a flags definition.
0. `underscore_name`
    Specifies the word separation used in the `*_get_type()`
    function. For instance, `/*< underscore_name=gnome_vfs_uri_hide_options >*/`.
0. `since`
    Specifies the version tag that will be used to substitute the `@enumsince@`
    keyword in the template, useful when documenting methods generated from the enums
    (e.g. `Since: @enumsince@`). (Since: 2.66)

The following options can be specified per value definition:

0. `skip`
    Indicates the value should be skipped.
0. `nick`
    Specifies the otherwise auto-generated nickname.

Examples:

```cpp
typedef enum /*< skip >*/
{
  PREFIX_FOO
} PrefixThisEnumWillBeSkipped;
typedef enum /*< flags,prefix=PREFIX,since=1.0 >*/
{
  PREFIX_THE_ZEROTH_VALUE,  /*< skip >*/
  PREFIX_THE_FIRST_VALUE,
  PREFIX_THE_SECOND_VALUE,
  PREFIX_THE_THIRD_VALUE, /*< nick=the-last-value >*/
} PrefixTheFlagsEnum;
```

## 🍀 Options

0. --fhead TEXT
    Emits TEXT prior to processing input files.

    You can specify this option multiple times, and the TEXT
    will be concatenated.

    When used along with a template file, TEXT
    will be prepended to the template's `file-header` section.

0. --fprod TEXT
    Emits TEXT every time a new input file
    is being processed.

    You can specify this option multiple times, and the TEXT
    will be concatenated.

    When used along with a template file, TEXT
    will be appended to the template's `file-production` section.

0. --ftail TEXT
    Emits TEXT after all input files have been
    processed.

    You can specify this option multiple times, and the TEXT
    will be concatenated.

    When used along with a template file, TEXT
    will be appended to the template's `file-tail` section.

0. --eprod TEXT
    Emits TEXT every time an enum is encountered
    in the input files.

0. --vhead TEXT
    Emits TEXT before iterating over the set of
    values of an enum.

    You can specify this option multiple times, and the TEXT
    will be concatenated.

    When used along with a template file, TEXT
    will be prepended to the template's `value-header` section.

0. --vprod TEXT
    Emits TEXT for every value of an enum.

    You can specify this option multiple times, and the TEXT
    will be concatenated.

    When used along with a template file, TEXT
    will be appended to the template's `value-production` section.

0. --vtail TEXT
    Emits TEXT after iterating over all values
    of an enum.

    You can specify this option multiple times, and the TEXT
    will be concatenated.

    When used along with a template file, TEXT
    will be appended to the template's `value-tail` section.

0. --comments TEXT
    Template for auto-generated comments, the default (for C code generations) is
    `"/* @comment@ */"`.

0. --template FILE
    Read templates from the given file. The templates are enclosed in
    specially-formatted C comments:

    ```cpp
    /*** BEGIN section ***/
    /*** END section ***/
    ```

    section may be `file-header`,
    `file-production`, `file-tail`,
    `enumeration-production`, `value-header`,
    `value-production`, `value-tail` or
    `comment`.

0. --identifier-prefix PREFIX
    Indicates what portion of the enum name should be interpreted as the
    prefix (eg, the "`Gtk`" in
    "`GtkDirectionType`"). Normally this will be figured
    out automatically, but you may need to override the default if your
    namespace is capitalized oddly.

0. --symbol-prefix PREFIX
    Indicates what prefix should be used to correspond to the identifier
    prefix in related C function names (eg, the "`gtk`"
    in "`gtk_direction_type_get_type`". Equivalently,
    this is the lowercase version of the prefix component of the enum
    value names (eg, the "`GTK`" in
    "`GTK_DIR_UP`". The default value is the identifier
    prefix, converted to lowercase.

0. --help
    Print brief help and exit.

0. --version
    Print version and exit.

0. --output=FILE
    Write output to FILE instead of stdout.

0. @RSPFILE
    When passed as the sole argument, read and parse the actual arguments from
    `RSPFILE`. Useful on systems with a low command-line length
    limit. For example, Windows has a limit of 8191 characters.

## 🍀 Using templates

Instead of passing the various sections of the generated file to the command
line of `glib-mkenums`, it's strongly recommended to use a
template file, especially for generating C sources.


A C header template file will typically look like this:

```cpp
/*** BEGIN file-header ***/
#pragma once

/* Include the main project header */
#include "project.h"

G_BEGIN_DECLS
/*** END file-header ***/

/*** BEGIN file-production ***/

/* enumerations from "@basename@" */
/*** END file-production ***/

/*** BEGIN value-header ***/
GType @enum_name@_get_type (void) G_GNUC_CONST;
#define @ENUMPREFIX@_TYPE_@ENUMSHORT@ (@enum_name@_get_type ())
/*** END value-header ***/

/*** BEGIN file-tail ***/
G_END_DECLS
/*** END file-tail ***/
```


A C source template file will typically look like this:

```cpp
/*** BEGIN file-header ***/
#include "config.h"
#include "enum-types.h"

/*** END file-header ***/

/*** BEGIN file-production ***/
/* enumerations from "@basename@" */
/*** END file-production ***/

/*** BEGIN value-header ***/
GType
@enum_name@_get_type (void)
{
  static gsize static_g_@type@_type_id;

  if (g_once_init_enter (&amp;static_g_@type@_type_id))
    {
      static const G@Type@Value values[] = {
/*** END value-header ***/

/*** BEGIN value-production ***/
            { @VALUENAME@, "@VALUENAME@", "@valuenick@" },
/*** END value-production ***/

/*** BEGIN value-tail ***/
            { 0, NULL, NULL }
      };

      GType g_@type@_type_id =
        g_@type@_register_static (g_intern_static_string ("@EnumName@"), values);

      g_once_init_leave (&amp;static_g_@type@_type_id, g_@type@_type_id);
    }
  return static_g_@type@_type_id;
}

/*** END value-tail ***/
```


Template files are easier to modify and update, and can be used
to generate various types of outputs using the same command line
or tools during the build.


## 🍀 Using glib-mkenums with Meson

Meson supports generating enumeration types using `glib-mkenums`
out of the box in its "gnome" module.


In your `meson.build` file you will typically call the
`gnome.mkenums_simple()` method to generate idiomatic enumeration
types from a list of headers to inspect:

```py
project_headers = [
  'project-foo.h',
  'project-bar.h',
  'project-baz.h',
]

gnome = import('gnome')
enum_files = gnome.mkenums_simple('enum-types',
  sources: project_headers,
)
```


The `enum_files` variable will contain an array of two elements
in the following order:

0. a build target for the source file
0. a build target for the header file

You should use the returned objects to provide a dependency on every other
build target that references the source or header file; for instance, if you
are using the source to build a library:

```py
mainlib = library('project',
  sources: project_sources + enum_files,
  ...
)
```

Additionally, if you are including the generated header file inside a build
target that depends on the library you just built, you must ensure that the
internal dependency includes the generated header as a required source file:

```py
mainlib_dep = declare_dependency(sources: enum_files[1], link_with: mainlib)
```

You should not include the generated source file as well, otherwise it will
be built separately for every target that depends on it, causing build
failures. To know more about why all this is required, please refer to the
<ulink url="https://mesonbuild.com/FAQ.html#how-do-i-tell-meson-that-my-sources-use-generated-headers">
corresponding Meson FAQ entry</ulink>.


If you are generating C header and source files that require special
templates, you can use `gnome.mkenums()` to provide those
headers, for instance:

```py
enum_files = gnome.mkenums('enum-types',
  sources: project_headers,
  h_template: 'enum-types.h.in',
  c_template: 'enum-types.c.in',
  install_header: true,
)
```

For more information, see the <ulink url="https://mesonbuild.com/Gnome-module.html#gnomegenmarshal">Meson
documentation for `gnome.mkenums()`</ulink>.


## 🍀 Using glib-mkenums with Autotools

In order to use `glib-mkenums` in your project when using
Autotools as the build system, you will first need to modify your
`configure.ac` file to ensure you find the appropriate
command using `pkg-config`, similarly as to how you discover
the compiler and linker flags for GLib.

```py
PKG_PROG_PKG_CONFIG([0.28])

PKG_CHECK_VAR([GLIB_MKENUMS], [glib-2.0], [glib_mkenums])
```

In your `Makefile.am` file you will typically use rules
like these:

```makefile
# A list of headers to inspect
project_headers = \
        project-foo.h \
        project-bar.h \
        project-baz.h

enum-types.h: $(project_headers) enum-types.h.in
        $(AM_V_GEN)$(GLIB_MKENUMS) \
                --template=enum-types.h.in \
                --output=$@ \
                $(project_headers)

enum-types.c: $(project_headers) enum-types.c.in enum-types.h
        $(AM_V_GEN)$(GLIB_MKENUMS) \
                --template=enum-types.c.in \
                --output=$@ \
                $(project_headers)

# Build the enum types files before every other target
BUILT_SOURCES += enum-types.h enum-types.c
CLEANFILES += enum-types.h enum-types.c
EXTRA_DIST += enum-types.h.in enum-types.c.in
```

In the example above, we have a variable called `project_headers`
where we reference all header files we want to inspect for generating enumeration
GTypes. In the `enum-types.h` rule we use `glib-mkenums`
with a template called `enum-types.h.in` in order to generate the
header file; similarly, in the `enum-types.c` rule we use a
template called `enum-types.c.in`.


## 🍀 glib-mkenums CLI

    usage: glib-mkenums [-h] [--identifier-prefix IDPREFIX]
                        [--symbol-prefix SYMPREFIX] [--fhead FHEAD]
                        [--ftail FTAIL] [--fprod FPROD] [--eprod EPROD]
                        [--vhead VHEAD] [--vprod VPROD] [--vtail VTAIL]
                        [--comments COMMENT_TMPL] [--template TEMPLATE]
                        [--output OUTPUT] [--version]
                        [args ...]

    positional arguments:
      args                  One or more input files, or a single argument
                            @rspfile_path pointing to a file that contains the
                            actual arguments

    options:
      -h, --help            show this help message and exit
      --identifier-prefix IDPREFIX
                            Identifier prefix
      --symbol-prefix SYMPREFIX
                            Symbol prefix
      --fhead FHEAD         Output file header
      --ftail FTAIL         Output file footer
      --fprod FPROD         Put out TEXT every time a new input file is being
                            processed.
      --eprod EPROD         Per enum text, produced prior to value iterations
      --vhead VHEAD         Value header, produced before iterating over enum
                            values
      --vprod VPROD         Value text, produced for each enum value.
      --vtail VTAIL         Value tail, produced after iterating over enum values
      --comments COMMENT_TMPL
                            Comment structure
      --template TEMPLATE   Template file
      --output OUTPUT
      --version, -v         Print version information

    Production text substitutions:
      @EnumName@            PrefixTheXEnum
      @enum_name@           prefix_the_xenum
      @ENUMNAME@            PREFIX_THE_XENUM
      @ENUMSHORT@           THE_XENUM
      @ENUMPREFIX@          PREFIX
      @enumsince@           the user-provided since value given
      @VALUENAME@           PREFIX_THE_XVALUE
      @valuenick@           the-xvalue
      @valuenum@            the integer value (limited support, Since: 2.26)
      @type@                either enum or flags
      @Type@                either Enum or Flags
      @TYPE@                either ENUM or FLAGS
      @filename@            name of current input file
      @basename@            base name of the current input file (Since: 2.22)

# 📜 glib-genmarshal User Commands

glib-genmarshal - C code marshaller generation utility for GLib closures

    glib-genmarshal OPTION FILE


## 🍀 Description

`glib-genmarshal` is a small utility that generates C code
marshallers for callback functions of the GClosure mechanism in the GObject
sublibrary of GLib. The marshaller functions have a standard signature,
they get passed in the invoking closure, an array of value structures holding
the callback function parameters and a value structure for the return value
of the callback. The marshaller is then responsible to call the respective C
code function of the closure with all the parameters on the stack and to
collect its return value.

`glib-genmarshal` takes a list of marshallers to generate as
input. The marshaller list is either read from files passed as additional arguments
on the command line; or from standard input, by using `-` as the
input file.

## 🍀 Marshaller list format
The marshaller lists are processed line by line, a line can contain a
comment in the form of

```py
# this is a comment
```

or a marshaller specification of the form

```sh
RTYPE:PTYPE
RTYPE:PTYPE,PTYPE
RTYPE:PTYPE,PTYPE,PTYPE
```
The RTYPE part specifies the callback's return
type and the PTYPEs right to the colon specify
the callback's parameter list, except for the first and the last arguments
which are always pointers.

## 🍀 Parameter types

Currently, the following types are supported:

0. VOID
    indicates no return type, or no extra parameters.
    If VOID is used as the parameter list, no
    additional parameters may be present.

0. BOOLEAN
    for boolean types (gboolean)

0. CHAR
    for signed char types (gchar)

0. UCHAR
    for unsigned char types (guchar)

0. INT
    for signed integer types (gint)

0. UINT
    for unsigned integer types (guint)

0. LONG
    for signed long integer types (glong)

0. ULONG
    for unsigned long integer types (gulong)

0. INT64
    for signed 64bit integer types (gint64)

0. UINT64
    for unsigned 64bit integer types (guint64)

0. ENUM
    for enumeration types (gint)

0. FLAGS
    for flag enumeration types (guint)

0. FLOAT
    for single-precision float types (gfloat)

0. DOUBLE
    for double-precision float types (gdouble)

0. STRING
    for string types (gchar*)

0. BOXED
    for boxed (anonymous but reference counted) types (GBoxed*)

0. PARAM
    for GParamSpec or derived types (GParamSpec*)

0. POINTER
    for anonymous pointer types (gpointer)

0. OBJECT
    for GObject or derived types (GObject*)

0. VARIANT
    for GVariant types (GVariant*)

0. NONE
    deprecated alias for VOID

0. BOOL
    deprecated alias for BOOLEAN



## 🍀 Options

0. `--header`
    Generate header file contents of the marshallers. This option is mutually
    exclusive with the `--body` option.

0. `--body`
    Generate C code file contents of the marshallers. This option is mutually
    exclusive with the `--header` option.

0. `--prefix=PREFIX`
    Specify marshaller prefix. The default prefix is `g_cclosure_user_marshal`.

0. `--skip-source`
    Skip source location remarks in generated comments.

0. `--stdinc`
    Use the standard marshallers of the GObject library, and include
    `glib-object.h` in generated header files. This
    option is mutually exclusive with the `--nostdinc`
    option.

0. `--nostdinc`
    Do not use the standard marshallers of the GObject library, and skip
    `glib-object.h` include directive in generated header files.
    This option is mutually exclusive with the `--stdinc` option.

0. `--internal`
    Mark generated functions as internal, using `G_GNUC_INTERNAL`.

0. `--valist-marshallers`
    Generate valist marshallers, for use with `g_signal_set_va_marshaller()`.

0. `-v`, `--version`
    Print version information.

0. `--g-fatal-warnings`
    Make warnings fatal, that is, exit immediately once a warning occurs.

0. `-h`, `--help`
    Print brief help and exit.

0. `-v`, `--version`
    Print version and exit.

0. `--output=FILE`
    Write output to FILE instead of the standard output.

0. `--prototypes`
    Generate function prototypes before the function definition in the C source
    file, in order to avoid a `missing-prototypes` compiler
    warning. This option is only useful when using the `--body`
    option.

0. `--pragma-once`
    Use the `once` pragma instead of an old style header guard
    when generating the C header file. This option is only useful when using the
    `--header` option.

0. `--include-header=HEADER`
    Adds a `#include` directive for the given file in the C
    source file. This option is only useful when using the `--body`
    option.

0. `-D SYMBOL[=VALUE]`
    Adds a `#define` C pre-processor directive for
    SYMBOL and its given VALUE,
    or "1" if the value is unset. You can use this option multiple times; if you do,
    all the symbols will be defined in the same order given on the command line, before
    the symbols undefined using the `-U` option. This option is only
    useful when using the `--body` option.

0. `-U SYMBOL`
    Adds a `#undef` C pre-processor directive to undefine the
    given SYMBOL. You can use this option multiple times;
    if you do, all the symbols will be undefined in the same order given on the
    command line, after the symbols defined using the `-D` option.
    This option is only useful when using the `--body` option.

0. `--quiet`
    Minimizes the output of `glib-genmarshal`, by printing only
    warnings and errors. This option is mutually exclusive with the
    `--verbose` option.

0. `--verbose`
    Increases the verbosity of `glib-genmarshal`, by printing
    debugging information. This option is mutually exclusive with the
    `--quiet` option.



## 🍀 Using `glib-genmarshal` with Meson
Meson supports generating closure marshallers using `glib-genmarshal`
out of the box in its "gnome" module.

In your `meson.build` file you will typically call the
`gnome.genmarshal()` method with the source list of marshallers
to generate:

```py
gnome = import('gnome')
marshal_files = gnome.genmarshal('marshal',
  sources: 'marshal.list',
  internal: true,
)
```

The `marshal_files` variable will contain an array of two elements
in the following order:

0. a build target for the source file
0. a build target for the header file

You should use the returned objects to provide a dependency on every other
build target that references the source or header file; for instance, if you
are using the source to build a library:

```py
mainlib = library('project',
  sources: project_sources + marshal_files,
  ...
)
```

Additionally, if you are including the generated header file inside a build
target that depends on the library you just built, you must ensure that the
internal dependency includes the generated header as a required source file:

```py
mainlib_dep = declare_dependency(sources: marshal_files[1], link_with: mainlib)
```

You should not include the generated source file as well, otherwise it will
be built separately for every target that depends on it, causing build
failures. To know more about why all this is required, please refer to the
<ulink url="https://mesonbuild.com/FAQ.html#how-do-i-tell-meson-that-my-sources-use-generated-headers">
corresponding Meson FAQ entry</ulink>.
For more information on how to use the method, see the
<ulink url="https://mesonbuild.com/Gnome-module.html#gnomegenmarshal">Meson
documentation for `gnome.genmarshal()`</ulink>.



## 🍀 Using `glib-genmarshal` with Autotools

In order to use `glib-genmarshal` in your project when using
Autotools as the build system, you will first need to modify your
`configure.ac` file to ensure you find the appropriate
command using `pkg-config`, similarly as to how you discover
the compiler and linker flags for GLib.

```py
PKG_PROG_PKG_CONFIG([0.28])

PKG_CHECK_VAR([GLIB_GENMARSHAL], [glib-2.0], [glib_genmarshal])
```

In your `Makefile.am` file you will typically need very
simple rules to generate the C files needed for the build.

```makefile
marshal.h: marshal.list
        $(AM_V_GEN)$(GLIB_GENMARSHAL) \
                --header \
                --output=$@ \
                $<

marshal.c: marshal.list marshal.h
        $(AM_V_GEN)$(GLIB_GENMARSHAL) \
                --include-header=marshal.h \
                --body \
                --output=$@ \
                $<

BUILT_SOURCES += marshal.h marshal.c
CLEANFILES += marshal.h marshal.c
EXTRA_DIST += marshal.list
```

In the example above, the first rule generates the header file and depends on
a `marshal.list` file in order to regenerate the result in
case the marshallers list is updated. The second rule generates the source file
for the same `marshal.list`, and includes the file generated
by the header rule.



## 🍀 Example
To generate marshallers for the following callback functions:

```cpp
void   foo (gpointer data1,
            gpointer data2);
void   bar (gpointer data1,
            gint     param1,
            gpointer data2);
gfloat baz (gpointer data1,
            gboolean param1,
            guchar   param2,
            gpointer data2);
```

The `marshaller.list` file has to look like this:

```sh
VOID:VOID
VOID:INT
FLOAT:BOOLEAN,UCHAR
```

and you call glib-genmarshal like this:

```sh
glib-genmarshal --header marshaller.list > marshaller.h
glib-genmarshal --body marshaller.list > marshaller.c
```

The generated marshallers have the arguments encoded in their function name.
For this particular list, they are

```sh
g_cclosure_user_marshal_VOID__VOID(...),
g_cclosure_user_marshal_VOID__INT(...),
g_cclosure_user_marshal_FLOAT__BOOLEAN_UCHAR(...).
```
They can be used directly for GClosures or be passed in as the
GSignalCMarshaller c_marshaller; argument upon creation of signals:

```py
GClosure *cc_foo, *cc_bar, *cc_baz;

cc_foo = g_cclosure_new (NULL, foo, NULL);
g_closure_set_marshal (cc_foo, g_cclosure_user_marshal_VOID__VOID);
cc_bar = g_cclosure_new (NULL, bar, NULL);
g_closure_set_marshal (cc_bar, g_cclosure_user_marshal_VOID__INT);
cc_baz = g_cclosure_new (NULL, baz, NULL);
g_closure_set_marshal (cc_baz, g_cclosure_user_marshal_FLOAT__BOOLEAN_UCHAR);
```

# 📜 gobject-query User Commands


gobject-query display a tree of types

```sh
gobject-query froots OPTION
gobject-query tree OPTION
```

gobject-query is a small utility that draws a tree of types.

gobject-query takes a mandatory argument that specifies
whether it should iterate over the fundamental types or print a type tree.

Commands

`froots`  ➡ iterate over fundamental roots
`tree`  ➡ print type tree

Options

`-r`  TYPE ➡ specify the root type
`-n`  ➡ don't descend type tree
`-b`  STRING ➡ specify indent string
`-i`  STRING ➡ specify incremental indent string

`-s`  NUMBER ➡ specify line spacing
`-h` , --help ➡ Print brief help and exit.
`-v` , --version ➡ Print version and exit.

    usage: gobject-query <qualifier> [-r <type>] [-{i|b} ""] [-s #] [-{h|x|y}]
           -r       specify root type
           -n       don't descend type tree
           -h       show help
           -b       specify indent string
           -i       specify incremental indent string
           -s       specify line spacing
    qualifiers:
           froots   iterate over fundamental roots
           tree     print type tree


# 📜 Related Tools

Several useful developer tools have been build around GObject
technology.  The next sections briefly introduce them and link to
the respective project pages.

For example, writing GObjects is often seen as a tedious task. It
requires a lot of typing and just doing a copy/paste requires a
great deal of care. A lot of projects and scripts have been
written to generate GObject skeleton form boilerplate code, or
even translating higher-level language into plain C.

## 🍀 Vala

From the <ulink url="https://wiki.gnome.org/Projects/Vala">Vala
homepage</ulink> itself: <quote>Vala is a new programming language
that aims to bring modern programming language features to GNOME
developers without imposing any additional runtime requirements
and without using a different ABI compared to applications and
libraries written in C.</quote>

The syntax of Vala is similar to C#. The available compiler
translates Vala into GObject C code. It can also compile
non-GObject C, using plain C API.

## 🍀 GObject builder

In order to help a GObject class developer, one obvious idea is
to use some sort of templates for the skeletons and then run
them through a special tool to generate the real C files.  <ulink
url="http://www.5z.com/jirka/gob.html">GOB</ulink> (or GOB2) is
such a tool. It is a preprocessor which can be used to build
GObjects with inline C code so that there is no need to edit the
generated C code.  The syntax is inspired by Java and Yacc or
Lex. The implementation is intentionally kept simple: the inline C
code provided by the user is not parsed.

## 🍀 Graphical inspection of GObjects

Yet another tool that you may find helpful when working with
GObjects is <ulink
url="http://sourceforge.net/projects/g-inspector">G-Inspector</ulink>. It
is able to display GLib/GTK objects and their properties.

## 🍀 Debugging reference count problems

The reference counting scheme used by GObject does solve quite 
a few memory management problems but also introduces new sources of bugs.
In large applications, finding the exact spot where the reference count
of an Object is not properly handled can be very difficult.
A useful tool in debugging reference counting problems is to
set breakpoints in gdb on g_object_ref() and g_object_unref().
Once you know the address of the object you are interested in,
you can make the breakpoints conditional:

```cpp
break g_object_ref if _object == 0xcafebabe
break g_object_unref if _object == 0xcafebabe
```

## 🍀 Writing API docs

The API documentation for most of the GLib, GObject, GTK and GNOME
libraries is built with a combination of complex tools. Typically, the part of 
the documentation which describes the behavior of each function is extracted
from the specially-formatted source code comments by a tool named gtk-doc which
generates DocBook XML and merges this DocBook XML with a set of template XML
DocBook files. These XML DocBook files are finally processed with xsltproc
(a small program part of the libxslt library) to generate the final HTML
output. Other tools can be used to generate PDF output from the source XML.
The following code excerpt shows what these comments look like.

```cpp
/**
 * gtk_widget_freeze_child_notify:
 * @widget: a #GtkWidget
 * 
 * Stops emission of "child-notify" signals on @widget. The signals are
 * queued until gtk_widget_thaw_child_notify() is called on @widget. 
 *
 * This is the analogue of g_object_freeze_notify() for child properties.
 **/
void
gtk_widget_freeze_child_notify (GtkWidget *widget)
{
...
```

Thorough
<ulink url="https://developer.gnome.org/gtk-doc-manual/stable/">documentation</ulink>
on how to set up and use gtk-doc in your project is provided on the
<ulink url="https://developer.gnome.org/">GNOME developer website</ulink>.


# 📜 Classes Hierarchy
https://docs.gtk.org/gobject/classes_hierarchy.html


    `GObject.TypeInstance`
    +-- `Object`
    |   +--- `Binding`  
    |   +--- `BindingGroup` 
    |   +--- `InitiallyUnowned` 
    |   +--- `SignalGroup`  
    |   +--- `TypeModule`   
    +-- `ParamSpec`
        +--- `ParamSpecBoolean` 
        +--- `ParamSpecBoxed`   
        +--- `ParamSpecChar`
        +--- `ParamSpecDouble`  
        +--- `ParamSpecEnum`
        +--- `ParamSpecFlags`   
        +--- `ParamSpecFloat`   
        +--- `ParamSpecGType`   
        +--- `ParamSpecInt` 
        +--- `ParamSpecInt64`   
        +--- `ParamSpecLong`
        +--- `ParamSpecObject`  
        +--- `ParamSpecOverride`
        +--- `ParamSpecParam`   
        +--- `ParamSpecPointer` 
        +--- `ParamSpecString`  
        +--- `ParamSpecUChar`   
        +--- `ParamSpecUInt`
        +--- `ParamSpecUInt64`  
        +--- `ParamSpecULong`   
        +--- `ParamSpecUnichar` 
        +--- `ParamSpecValueArray`  
        +--- `ParamSpecVariant` 


# 📜 GObject Sections
glib-2.78.0\docs\reference\gobject\gobject-sections.txt

## 💻FILE: gtype

### 🍀 Type Information

```cpp
    GType;
    G_TYPE_FUNDAMENTAL;
    G_TYPE_FUNDAMENTAL_MAX;
    G_TYPE_MAKE_FUNDAMENTAL;
    G_TYPE_IS_ABSTRACT;
    G_TYPE_IS_DERIVED;
    G_TYPE_IS_FUNDAMENTAL;
    G_TYPE_IS_VALUE_TYPE;
    G_TYPE_HAS_VALUE_TABLE;
    G_TYPE_IS_CLASSED;
    G_TYPE_IS_INSTANTIATABLE;
    G_TYPE_IS_DERIVABLE;
    G_TYPE_IS_DEEP_DERIVABLE;
    G_TYPE_IS_INTERFACE;
    G_TYPE_IS_FINAL;
    G_TYPE_IS_DEPRECATED;
    GTypeInterface;
    GTypeInstance;
    GTypeClass;
    GTypeInfo;
    GTypeFundamentalInfo;
    GInterfaceInfo;
    GTypeValueInitFunc;
    GTypeValueFreeFunc;
    GTypeValueCopyFunc;
    GTypeValuePeekPointerFunc;
    GTypeValueCollectFunc;
    GTypeValueLCopyFunc;
    GTypeValueTable;
    G_TYPE_FROM_INSTANCE;
    G_TYPE_FROM_CLASS;
    G_TYPE_FROM_INTERFACE;
    G_TYPE_INSTANCE_GET_CLASS;
    G_TYPE_INSTANCE_GET_INTERFACE;
    G_TYPE_INSTANCE_GET_PRIVATE;
    G_TYPE_CLASS_GET_PRIVATE;
    G_TYPE_CHECK_INSTANCE;
    G_TYPE_CHECK_INSTANCE_CAST;
    G_TYPE_CHECK_INSTANCE_TYPE;
    G_TYPE_CHECK_INSTANCE_FUNDAMENTAL_TYPE;
    G_TYPE_CHECK_CLASS_CAST;
    G_TYPE_CHECK_CLASS_TYPE;
    G_TYPE_CHECK_VALUE;
    G_TYPE_CHECK_VALUE_TYPE;
    G_TYPE_FLAG_RESERVED_ID_BIT;
    g_type_init;
    GTypeDebugFlags;
    g_type_init_with_debug_flags;
    g_type_name;
    g_type_qname;
    g_type_from_name;
    g_type_parent;
    g_type_depth;
    g_type_next_base;
    g_type_is_a;
    g_type_class_ref;
    g_type_class_peek;
    g_type_class_peek_static;
    g_type_class_unref;
    g_type_class_peek_parent;
    g_type_class_add_private;
    g_type_add_class_private;
    g_type_interface_peek;
    g_type_interface_peek_parent;
    g_type_default_interface_ref;
    g_type_default_interface_peek;
    g_type_default_interface_unref;
    g_type_children;
    g_type_interfaces;
    g_type_interface_prerequisites;
    g_type_interface_instantiatable_prerequisite;
    g_type_set_qdata;
    g_type_get_qdata;
    g_type_query;
    GTypeQuery;
    GBaseInitFunc;
    GBaseFinalizeFunc;
    GClassInitFunc;
    GClassFinalizeFunc;
    GInstanceInitFunc;
    GInterfaceInitFunc;
    GInterfaceFinalizeFunc;
    GTypeClassCacheFunc;
    GTypeFlags;
    GTypeFundamentalFlags;
    g_type_register_static;
    g_type_register_static_simple;
    g_type_register_dynamic;
    g_type_register_fundamental;
    g_type_add_interface_static;
    g_type_add_interface_dynamic;
    g_type_interface_add_prerequisite;
    g_type_get_plugin;
    g_type_interface_get_plugin;
    g_type_fundamental_next;
    g_type_fundamental;
    g_type_create_instance;
    g_type_free_instance;
    g_type_add_class_cache_func;
    g_type_remove_class_cache_func;
    g_type_class_unref_uncached;
    g_type_add_interface_check;
    g_type_remove_interface_check;
    GTypeInterfaceCheckFunc;
    g_type_value_table_peek;
    g_type_ensure;
    g_type_get_type_registration_serial;
    g_type_get_instance_count;

    G_DECLARE_FINAL_TYPE;
    G_DECLARE_DERIVABLE_TYPE;
    G_DECLARE_INTERFACE;
    G_DEFINE_TYPE;
    G_DEFINE_TYPE_WITH_PRIVATE;
    G_DEFINE_TYPE_WITH_CODE;
    G_DEFINE_ABSTRACT_TYPE;
    G_DEFINE_ABSTRACT_TYPE_WITH_PRIVATE;
    G_DEFINE_ABSTRACT_TYPE_WITH_CODE;
    G_DEFINE_FINAL_TYPE;
    G_DEFINE_FINAL_TYPE_WITH_PRIVATE;
    G_DEFINE_FINAL_TYPE_WITH_CODE;
    G_ADD_PRIVATE;
    G_PRIVATE_OFFSET;
    G_PRIVATE_FIELD;
    G_PRIVATE_FIELD_P;
    G_DEFINE_INTERFACE;
    G_DEFINE_INTERFACE_WITH_CODE;
    G_IMPLEMENT_INTERFACE;
    G_DEFINE_TYPE_EXTENDED;
    G_DEFINE_BOXED_TYPE;
    G_DEFINE_BOXED_TYPE_WITH_CODE;
    G_DEFINE_POINTER_TYPE;
    G_DEFINE_POINTER_TYPE_WITH_CODE;
    G_DEFINE_ENUM_VALUE;
    G_DEFINE_ENUM_TYPE;
    G_DEFINE_FLAGS_TYPE;
```

### Subsection Private

```cpp
    G_TYPE_FUNDAMENTAL_SHIFT;
    g_type_check_instance;
    g_type_check_instance_cast;
    g_type_check_instance_is_a;
    g_type_check_instance_is_fundamentally_a;
    g_type_check_class_cast;
    g_type_check_class_is_a;
    g_type_check_is_value_type;
    g_type_check_value;
    g_type_check_value_holds;
    g_type_class_adjust_private_offset;
    g_type_add_instance_private;
    g_type_instance_get_private;
    g_type_class_get_instance_private_offset;
    g_type_class_get_private;
    g_type_test_flags;
    g_type_name_from_instance;
    g_type_name_from_class;
```

### Subsection

```cpp
    G_TYPE_INVALID;
    G_TYPE_NONE;
    G_TYPE_INTERFACE;
    G_TYPE_CHAR;
    G_TYPE_UCHAR;
    G_TYPE_BOOLEAN;
    G_TYPE_INT;
    G_TYPE_UINT;
    G_TYPE_LONG;
    G_TYPE_ULONG;
    G_TYPE_INT64;
    G_TYPE_UINT64;
    G_TYPE_ENUM;
    G_TYPE_FLAGS;
    G_TYPE_FLOAT;
    G_TYPE_DOUBLE;
    G_TYPE_STRING;
    G_TYPE_POINTER;
    G_TYPE_BOXED;
    G_TYPE_PARAM;
    G_TYPE_OBJECT;
    G_TYPE_GTYPE;
    G_TYPE_VARIANT;
    G_TYPE_CHECKSUM;
```

### Subsection

```cpp
    G_TYPE_RESERVED_GLIB_FIRST;
    G_TYPE_RESERVED_GLIB_LAST;
    G_TYPE_RESERVED_BSE_FIRST;
    G_TYPE_RESERVED_BSE_LAST;
    G_TYPE_RESERVED_USER_FIRST;
```

## 💻FILE: gtypeplugin

### 🍀 GTypePlugin

```cpp
    GTypePlugin;
    GTypePluginClass;
    GTypePluginUse;
    GTypePluginUnuse;
    GTypePluginCompleteTypeInfo;
    GTypePluginCompleteInterfaceInfo;
    g_type_plugin_use;
    g_type_plugin_unuse;
    g_type_plugin_complete_type_info;
    g_type_plugin_complete_interface_info;
```

### Subsection Standard

```cpp
    G_TYPE_PLUGIN;
    G_IS_TYPE_PLUGIN;
    G_TYPE_TYPE_PLUGIN;
    g_type_plugin_get_type;
    G_TYPE_PLUGIN_CLASS;
    G_IS_TYPE_PLUGIN_CLASS;
    G_TYPE_PLUGIN_GET_CLASS;
```

## 💻FILE: gtypemodule

### 🍀 GTypeModule

```cpp
    GTypeModule;
    GTypeModuleClass;
    g_type_module_use;
    g_type_module_unuse;
    g_type_module_set_name;
    g_type_module_register_type;
    g_type_module_add_interface;
    g_type_module_register_enum;
    g_type_module_register_flags;
    G_DEFINE_DYNAMIC_TYPE;
    G_DEFINE_DYNAMIC_TYPE_EXTENDED;
    G_IMPLEMENT_INTERFACE_DYNAMIC;
    G_ADD_PRIVATE_DYNAMIC;
```

### Subsection Standard

```cpp
    G_TYPE_MODULE;
    G_IS_TYPE_MODULE;
    G_TYPE_TYPE_MODULE;
    g_type_module_get_type;
    G_TYPE_MODULE_CLASS;
    G_IS_TYPE_MODULE_CLASS;
    G_TYPE_MODULE_GET_CLASS;
```

### 🍀 The Base Object Type

## 💻FILE: objects

```cpp
    GObject;
    GObjectClass;
    GObjectConstructParam;
    GObjectGetPropertyFunc;
    GObjectSetPropertyFunc;
    GObjectFinalizeFunc;
    G_TYPE_IS_OBJECT;
    G_OBJECT;
    G_IS_OBJECT;
    G_OBJECT_CLASS;
    G_IS_OBJECT_CLASS;
    G_OBJECT_GET_CLASS;
    G_OBJECT_TYPE;
    G_OBJECT_TYPE_NAME;
    G_OBJECT_CLASS_TYPE;
    G_OBJECT_CLASS_NAME;
    g_object_class_install_property;
    g_object_class_install_properties;
    g_object_class_find_property;
    g_object_class_list_properties;
    g_object_class_override_property;
    g_object_interface_install_property;
    g_object_interface_find_property;
    g_object_interface_list_properties;
    g_object_new;
    g_object_new_with_properties;
    g_object_newv;
    GParameter;
    g_object_ref;
    g_object_unref;
    g_object_ref_sink;
    g_object_take_ref;
    g_set_object;
    g_clear_object;
    GInitiallyUnowned;
    GInitiallyUnownedClass;
    G_TYPE_INITIALLY_UNOWNED;
    g_object_is_floating;
    g_object_force_floating;
    GWeakNotify;
    g_object_weak_ref;
    g_object_weak_unref;
    g_object_add_weak_pointer;
    g_object_remove_weak_pointer;
    g_set_weak_pointer;
    g_clear_weak_pointer;
    GToggleNotify;
    g_object_add_toggle_ref;
    g_object_remove_toggle_ref;
    g_object_connect;
    g_object_disconnect;
    g_object_set;
    g_object_setv;
    g_object_get;
    g_object_getv;
    g_object_notify;
    g_object_notify_by_pspec;
    g_object_freeze_notify;
    g_object_thaw_notify;
    g_object_get_data;
    g_object_set_data;
    g_object_set_data_full;
    g_object_steal_data;
    g_object_dup_data;
    g_object_replace_data;
    g_object_get_qdata;
    g_object_set_qdata;
    g_object_set_qdata_full;
    g_object_steal_qdata;
    g_object_dup_qdata;
    g_object_replace_qdata;
    g_object_set_property;
    g_object_get_property;
    g_object_new_valist;
    g_object_set_valist;
    g_object_get_valist;
    g_object_watch_closure;
    g_object_run_dispose;
    G_OBJECT_WARN_INVALID_PROPERTY_ID;
```

### Subsection Weak references

```cpp
    GWeakRef;
    g_weak_ref_init;
    g_weak_ref_clear;
    g_weak_ref_get;
    g_weak_ref_set;
```

### Subsection Testing

```cpp
    g_assert_finalize_object;
```

### Subsection Standard

```cpp
    G_INITIALLY_UNOWNED;
    G_INITIALLY_UNOWNED_CLASS;
    G_INITIALLY_UNOWNED_GET_CLASS;
    G_IS_INITIALLY_UNOWNED;
    G_IS_INITIALLY_UNOWNED_CLASS;
```

### Subsection Private

```cpp
    G_OBJECT_WARN_INVALID_PSPEC;
    g_initially_unowned_get_type;
    g_object_compat_control;
    g_object_get_type;
```

### 🍀 Enumeration and Flag Types

## 💻FILE: enumerations_flags

```cpp
    GEnumClass;
    GFlagsClass;
    G_ENUM_CLASS_TYPE;
    G_ENUM_CLASS_TYPE_NAME;
    G_TYPE_IS_ENUM;
    G_ENUM_CLASS;
    G_IS_ENUM_CLASS;
    G_TYPE_IS_FLAGS;
    G_FLAGS_CLASS;
    G_IS_FLAGS_CLASS;
    G_FLAGS_CLASS_TYPE;
    G_FLAGS_CLASS_TYPE_NAME;
    GEnumValue;
    GFlagsValue;
    g_enum_get_value;
    g_enum_get_value_by_name;
    g_enum_get_value_by_nick;
    g_enum_to_string;
    g_flags_get_first_value;
    g_flags_get_value_by_name;
    g_flags_get_value_by_nick;
    g_flags_to_string;
    g_enum_register_static;
    g_flags_register_static;
    g_enum_complete_type_info;
    g_flags_complete_type_info;
```

## 💻FILE: gboxed

### 🍀 Boxed Types

```cpp
    GBoxedCopyFunc;
    GBoxedFreeFunc;
    g_boxed_copy;
    g_boxed_free;
    g_boxed_type_register_static;
    g_pointer_type_register_static;
```

### Subsection

```cpp
    G_TYPE_HASH_TABLE;
    G_TYPE_DATE;
    G_TYPE_GSTRING;
    G_TYPE_STRV;
    G_TYPE_REGEX;
    G_TYPE_MATCH_INFO;
    G_TYPE_ARRAY;
    G_TYPE_BYTE_ARRAY;
    G_TYPE_PTR_ARRAY;
    G_TYPE_BYTES;
    G_TYPE_VARIANT_TYPE;
    G_TYPE_ERROR;
    G_TYPE_DATE_TIME;
    G_TYPE_TIME_ZONE;
    G_TYPE_IO_CHANNEL;
    G_TYPE_IO_CONDITION;
    G_TYPE_VARIANT_BUILDER;
    G_TYPE_VARIANT_DICT;
    G_TYPE_KEY_FILE;
    G_TYPE_MAIN_CONTEXT;
    G_TYPE_MAIN_LOOP;
    G_TYPE_MAPPED_FILE;
    G_TYPE_MARKUP_PARSE_CONTEXT;
    G_TYPE_SOURCE;
    G_TYPE_POLLFD;
    G_TYPE_THREAD;
    G_TYPE_OPTION_GROUP;
    G_TYPE_URI;
    G_TYPE_TREE;
    G_TYPE_PATTERN_SPEC;
    G_TYPE_BOOKMARK_FILE;
```

### Subsection Standard

```cpp
    G_TYPE_IS_BOXED;
```

### Subsection Private

```cpp
    g_gstring_get_type;
    g_strv_get_type;
    g_date_get_type;
    g_hash_table_get_type;
    g_regex_get_type;
    g_match_info_get_type;
    g_array_get_type;
    g_byte_array_get_type;
    g_ptr_array_get_type;
    g_error_get_type;
    g_date_time_get_type;
    g_time_zone_get_type;
    g_variant_get_gtype;
    g_variant_type_get_gtype;
    g_variant_builder_get_type;
    g_variant_dict_get_type;
    g_gtype_get_type;
    g_main_context_get_type;
    g_main_loop_get_type;
    g_source_get_type;
    g_pollfd_get_type;
    g_bytes_get_type;
    g_key_file_get_type;
    g_checksum_get_type;
    g_mapped_file_get_type;
    g_markup_parse_context_get_type;
    g_thread_get_type;
    g_option_group_get_type;
    g_uri_get_type;
    g_tree_get_type;
    g_pattern_spec_get_type;
    g_bookmark_file_get_type;
```

### 🍀 Generic values

## 💻FILE: generic_values

```cpp
    G_VALUE_INIT;
    G_VALUE_HOLDS;
    G_VALUE_TYPE;
    G_VALUE_TYPE_NAME;
    G_TYPE_IS_VALUE;
    G_TYPE_IS_VALUE_ABSTRACT;
    G_IS_VALUE;
    GValue;
    G_TYPE_VALUE;
    G_TYPE_VALUE_ARRAY;
    g_value_init;
    g_value_copy;
    g_value_reset;
    g_value_unset;
    g_value_init_from_instance;
    g_value_set_instance;
    g_value_fits_pointer;
    g_value_peek_pointer;
    g_value_type_compatible;
    g_value_type_transformable;
    g_value_transform;
    GValueTransform;
    g_value_register_transform_func;
    g_strdup_value_contents;
```

### Subsection Private

```cpp
    G_VALUE_NOCOPY_CONTENTS;
    g_value_get_type;
    g_value_array_get_type;
```

### 🍀 Value arrays

## 💻FILE: value_arrays

```cpp
    GValueArray;
    g_value_array_get_nth;
    g_value_array_new;
    g_value_array_copy;
    g_value_array_free;
    g_value_array_append;
    g_value_array_prepend;
    g_value_array_insert;
    g_value_array_remove;
    g_value_array_sort;
    g_value_array_sort_with_data;
```

### 🍀 GParamSpec

## 💻FILE: gparamspec

```cpp
    G_TYPE_IS_PARAM;
    G_PARAM_SPEC;
    G_IS_PARAM_SPEC;
    G_PARAM_SPEC_CLASS;
    G_IS_PARAM_SPEC_CLASS;
    G_PARAM_SPEC_GET_CLASS;
    G_PARAM_SPEC_TYPE;
    G_PARAM_SPEC_TYPE_NAME;
    G_PARAM_SPEC_VALUE_TYPE;
    GParamSpec;
    GParamSpecClass;
    GParamFlags;
    G_PARAM_STATIC_STRINGS;
    G_PARAM_MASK;
    G_PARAM_USER_SHIFT;
    g_param_spec_ref;
    g_param_spec_unref;
    g_param_spec_sink;
    g_param_spec_ref_sink;
    g_param_spec_get_default_value;
    g_param_value_set_default;
    g_param_value_defaults;
    g_param_value_validate;
    g_param_value_is_valid;
    g_param_value_convert;
    g_param_values_cmp;
    g_param_spec_is_valid_name;
    g_param_spec_get_name;
    g_param_spec_get_name_quark;
    g_param_spec_get_nick;
    g_param_spec_get_blurb;
    g_param_spec_get_qdata;
    g_param_spec_set_qdata;
    g_param_spec_set_qdata_full;
    g_param_spec_steal_qdata;
    g_param_spec_get_redirect_target;
    g_param_spec_internal;
    GParamSpecTypeInfo;
    g_param_type_register_static;
    GParamSpecPool;
    g_param_spec_pool_new;
    g_param_spec_pool_insert;
    g_param_spec_pool_remove;
    g_param_spec_pool_lookup;
    g_param_spec_pool_list;
    g_param_spec_pool_list_owned;
```

### 🍀 Standard Parameter and Value Types

## 💻FILE: param_value_types

### Subsection gboolean

```cpp
    G_IS_PARAM_SPEC_BOOLEAN;
    G_PARAM_SPEC_BOOLEAN;
    G_VALUE_HOLDS_BOOLEAN;
    G_TYPE_PARAM_BOOLEAN;
    GParamSpecBoolean;
    g_param_spec_boolean;
    g_value_set_boolean;
    g_value_get_boolean;
```

### Subsection gchar

```cpp
    G_IS_PARAM_SPEC_CHAR;
    G_PARAM_SPEC_CHAR;
    G_VALUE_HOLDS_CHAR;
    G_TYPE_PARAM_CHAR;
    GParamSpecChar;
    g_param_spec_char;
    g_value_set_char;
    g_value_get_char;
    g_value_get_schar;
    g_value_set_schar;
```

### Subsection guchar

```cpp
    G_IS_PARAM_SPEC_UCHAR;
    G_PARAM_SPEC_UCHAR;
    G_VALUE_HOLDS_UCHAR;
    G_TYPE_PARAM_UCHAR;
    GParamSpecUChar;
    g_param_spec_uchar;
    g_value_set_uchar;
    g_value_get_uchar;
```

### Subsection gint

```cpp
    G_IS_PARAM_SPEC_INT;
    G_PARAM_SPEC_INT;
    G_VALUE_HOLDS_INT  ;
    G_TYPE_PARAM_INT;
    GParamSpecInt;
    g_param_spec_int;
    g_value_set_int;
    g_value_get_int;
```

### Subsection guint

```cpp
    G_IS_PARAM_SPEC_UINT;
    G_PARAM_SPEC_UINT;
    G_VALUE_HOLDS_UINT  ;
    G_TYPE_PARAM_UINT;
    GParamSpecUInt;
    g_param_spec_uint;
    g_value_set_uint;
    g_value_get_uint;
```

### Subsection glong

```cpp
    G_IS_PARAM_SPEC_LONG;
    G_PARAM_SPEC_LONG;
    G_VALUE_HOLDS_LONG ;
    G_TYPE_PARAM_LONG;
    GParamSpecLong;
    g_param_spec_long;
    g_value_set_long;
    g_value_get_long;
```

### Subsection gulong

```cpp
    G_IS_PARAM_SPEC_ULONG;
    G_PARAM_SPEC_ULONG;
    G_VALUE_HOLDS_ULONG ;
    G_TYPE_PARAM_ULONG;
    GParamSpecULong;
    g_param_spec_ulong;
    g_value_set_ulong;
    g_value_get_ulong;
```

### Subsection gint64

```cpp
    G_IS_PARAM_SPEC_INT64;
    G_PARAM_SPEC_INT64;
    G_VALUE_HOLDS_INT64;
    G_TYPE_PARAM_INT64;
    GParamSpecInt64;
    g_param_spec_int64;
    g_value_set_int64;
    g_value_get_int64;
```

### Subsection guint64

```cpp
    G_IS_PARAM_SPEC_UINT64;
    G_PARAM_SPEC_UINT64;
    G_VALUE_HOLDS_UINT64;
    G_TYPE_PARAM_UINT64;
    GParamSpecUInt64;
    g_param_spec_uint64;
    g_value_set_uint64;
    g_value_get_uint64;
```

### Subsection gfloat

```cpp
    G_IS_PARAM_SPEC_FLOAT;
    G_PARAM_SPEC_FLOAT;
    G_VALUE_HOLDS_FLOAT;
    G_TYPE_PARAM_FLOAT;
    GParamSpecFloat;
    g_param_spec_float;
    g_value_set_float;
    g_value_get_float;
```

### Subsection gdouble

```cpp
    G_IS_PARAM_SPEC_DOUBLE;
    G_PARAM_SPEC_DOUBLE;
    G_VALUE_HOLDS_DOUBLE;
    G_TYPE_PARAM_DOUBLE;
    GParamSpecDouble;
    g_param_spec_double;
    g_value_set_double;
    g_value_get_double;
```

### Subsection GEnum

```cpp
    G_IS_PARAM_SPEC_ENUM;
    G_PARAM_SPEC_ENUM;
    G_VALUE_HOLDS_ENUM;
    G_TYPE_PARAM_ENUM;
    GParamSpecEnum;
    g_param_spec_enum;
    g_value_set_enum;
    g_value_get_enum;
```

### Subsection GFLags

```cpp
    G_IS_PARAM_SPEC_FLAGS;
    G_PARAM_SPEC_FLAGS;
    G_VALUE_HOLDS_FLAGS;
    G_TYPE_PARAM_FLAGS;
    GParamSpecFlags;
    g_param_spec_flags;
    g_value_set_flags;
    g_value_get_flags;
```

### Subsection gchararray

```cpp
    G_IS_PARAM_SPEC_STRING;
    G_PARAM_SPEC_STRING;
    G_VALUE_HOLDS_STRING;
    G_TYPE_PARAM_STRING;
    G_VALUE_IS_INTERNED_STRING;
    G_VALUE_INTERNED_STRING;
    GParamSpecString;
    gchararray;
    g_param_spec_string;
    g_value_set_string;
    g_value_set_static_string;
    g_value_take_string;
    g_value_set_string_take_ownership;
    g_value_get_string;
    g_value_dup_string;
    g_value_set_interned_string;
```

### Subsection GParamSpec

```cpp
    G_IS_PARAM_SPEC_PARAM;
    G_PARAM_SPEC_PARAM;
    G_VALUE_HOLDS_PARAM;
    G_TYPE_PARAM_PARAM;
    GParamSpecParam;
    g_param_spec_param;
    g_value_set_param;
    g_value_take_param;
    g_value_set_param_take_ownership;
    g_value_get_param;
    g_value_dup_param;
```

### Subsection GBoxed

```cpp
    G_IS_PARAM_SPEC_BOXED;
    G_PARAM_SPEC_BOXED;
    G_VALUE_HOLDS_BOXED;
    G_TYPE_PARAM_BOXED;
    GParamSpecBoxed;
    g_param_spec_boxed;
    g_value_set_boxed;
    g_value_set_static_boxed;
    g_value_take_boxed;
    g_value_set_boxed_take_ownership;
    g_value_get_boxed;
    g_value_dup_boxed;
```

### Subsection gpointer

```cpp
    G_IS_PARAM_SPEC_POINTER;
    G_PARAM_SPEC_POINTER;
    G_VALUE_HOLDS_POINTER;
    G_TYPE_PARAM_POINTER;
    GParamSpecPointer;
    g_param_spec_pointer;
    g_value_set_pointer;
    g_value_get_pointer;
```

### Subsection GObject

```cpp
    G_IS_PARAM_SPEC_OBJECT;
    G_PARAM_SPEC_OBJECT;
    G_VALUE_HOLDS_OBJECT;
    G_TYPE_PARAM_OBJECT;
    GParamSpecObject;
    g_param_spec_object;
    g_value_set_object;
    g_value_take_object;
    g_value_set_object_take_ownership;
    g_value_get_object;
    g_value_dup_object;
```

### Subsection gunichar

```cpp
    G_IS_PARAM_SPEC_UNICHAR;
    G_PARAM_SPEC_UNICHAR;
    G_TYPE_PARAM_UNICHAR;
    GParamSpecUnichar;
    g_param_spec_unichar;
```

### Subsection GValueArray

```cpp
    G_IS_PARAM_SPEC_VALUE_ARRAY;
    G_PARAM_SPEC_VALUE_ARRAY;
    G_TYPE_PARAM_VALUE_ARRAY;
    GParamSpecValueArray;
    g_param_spec_value_array;
```

### Subsection Override

```cpp
    G_IS_PARAM_SPEC_OVERRIDE;
    G_PARAM_SPEC_OVERRIDE;
    G_TYPE_PARAM_OVERRIDE;
    GParamSpecOverride;
    g_param_spec_override;
```

### Subsection GType

```cpp
    G_IS_PARAM_SPEC_GTYPE;
    G_PARAM_SPEC_GTYPE;
    G_VALUE_HOLDS_GTYPE;
    G_TYPE_PARAM_GTYPE;
    GParamSpecGType;
    g_param_spec_gtype;
    g_value_get_gtype;
    g_value_set_gtype;
```

### Subsection GVariant

```cpp
    G_IS_PARAM_SPEC_VARIANT;
    G_PARAM_SPEC_VARIANT;
    G_VALUE_HOLDS_VARIANT;
    G_TYPE_PARAM_VARIANT;
    GParamSpecVariant;
    g_param_spec_variant;
    g_value_get_variant;
    g_value_dup_variant;
    g_value_set_variant;
    g_value_take_variant;
```

### Subsection Private

```cpp
    g_value_set_instance;
    g_param_spec_types;
```

### 🍀 Varargs Value Collection

## 💻FILE: value_collection

    <INCLUDE>glib-object.h,gobject/gvaluecollector.h</INCLUDE>;

```cpp
    GTypeCValue;
    G_VALUE_COLLECT_INIT;
    G_VALUE_COLLECT_INIT2;
    G_VALUE_COLLECT;
    G_VALUE_COLLECT_SKIP;
    G_VALUE_LCOPY;
    G_VALUE_COLLECT_FORMAT_MAX_LENGTH;
```

### 🍀 Signals

## 💻FILE: signals

```cpp
    GSignalInvocationHint;
    GSignalAccumulator;
    GSignalCMarshaller;
    GSignalCVaMarshaller;
    GSignalEmissionHook;
    GSignalFlags;
    GSignalMatchType;
    GSignalQuery;
    G_SIGNAL_TYPE_STATIC_SCOPE;
    G_SIGNAL_MATCH_MASK;
    G_SIGNAL_FLAGS_MASK;
    g_signal_new;
    g_signal_newv;
    g_signal_new_valist;
    g_signal_set_va_marshaller;
    g_signal_query;
    g_signal_lookup;
    g_signal_name;
    g_signal_list_ids;
    g_signal_emit;
    g_signal_emit_by_name;
    g_signal_emitv;
    g_signal_emit_valist;
    g_signal_connect;
    g_signal_connect_after;
    g_signal_connect_swapped;
    g_signal_connect_object;
    GConnectFlags;
    g_signal_connect_data;
    g_signal_connect_closure;
    g_signal_connect_closure_by_id;
    g_signal_handler_block;
    g_signal_handler_unblock;
    g_signal_handler_disconnect;
    g_signal_handler_find;
    g_signal_handlers_block_matched;
    g_signal_handlers_unblock_matched;
    g_signal_handlers_disconnect_matched;
    g_signal_handler_is_connected;
    g_signal_handlers_block_by_func;
    g_signal_handlers_unblock_by_func;
    g_signal_handlers_disconnect_by_func;
    g_signal_handlers_disconnect_by_data;
    g_signal_has_handler_pending;
    g_signal_stop_emission;
    g_signal_stop_emission_by_name;
    g_signal_override_class_closure;
    g_signal_chain_from_overridden;
    g_signal_new_class_handler;
    g_signal_override_class_handler;
    g_signal_chain_from_overridden_handler;
    g_signal_add_emission_hook;
    g_signal_remove_emission_hook;
    g_signal_is_valid_name;
    g_signal_parse_name;
    g_signal_get_invocation_hint;
    g_signal_type_cclosure_new;
    g_signal_accumulator_first_wins;
    g_signal_accumulator_true_handled;
    g_clear_signal_handler;
```

### Subsection Private

```cpp
    g_signal_handlers_destroy;
```

## 💻FILE: gclosure

### 🍀 Closures

```cpp
    G_CLOSURE_NEEDS_MARSHAL;
    G_CLOSURE_N_NOTIFIERS;
    G_CCLOSURE_SWAP_DATA;
    G_CALLBACK;
    GCallback;
    GClosure;
    G_TYPE_CLOSURE;
    GCClosure;
    GClosureMarshal;
    GVaClosureMarshal;
    GClosureNotify;
    g_cclosure_new;
    g_cclosure_new_swap;
    g_cclosure_new_object;
    g_cclosure_new_object_swap;
    g_cclosure_marshal_generic;
    g_closure_new_object;
    g_closure_ref;
    g_closure_sink;
    g_closure_unref;
    g_closure_invoke;
    g_closure_invalidate;
    g_closure_add_finalize_notifier;
    g_closure_add_invalidate_notifier;
    g_closure_remove_finalize_notifier;
    g_closure_remove_invalidate_notifier;
    g_closure_new_simple;
    g_closure_set_marshal;
    g_closure_add_marshal_guards;
    g_closure_set_meta_marshal;
    g_source_set_closure;
    g_source_set_dummy_callback;
```

### Subsection

```cpp
    g_cclosure_marshal_VOID__VOID;
    g_cclosure_marshal_VOID__BOOLEAN;
    g_cclosure_marshal_VOID__CHAR;
    g_cclosure_marshal_VOID__UCHAR;
    g_cclosure_marshal_VOID__INT;
    g_cclosure_marshal_VOID__UINT;
    g_cclosure_marshal_VOID__LONG;
    g_cclosure_marshal_VOID__ULONG;
    g_cclosure_marshal_VOID__ENUM;
    g_cclosure_marshal_VOID__FLAGS;
    g_cclosure_marshal_VOID__FLOAT;
    g_cclosure_marshal_VOID__DOUBLE;
    g_cclosure_marshal_VOID__STRING;
    g_cclosure_marshal_VOID__PARAM;
    g_cclosure_marshal_VOID__BOXED;
    g_cclosure_marshal_VOID__POINTER;
    g_cclosure_marshal_VOID__OBJECT;
    g_cclosure_marshal_VOID__VARIANT;
    g_cclosure_marshal_STRING__OBJECT_POINTER;
    g_cclosure_marshal_VOID__UINT_POINTER;
    g_cclosure_marshal_BOOLEAN__FLAGS;
    g_cclosure_marshal_BOOL__FLAGS;
    g_cclosure_marshal_BOOLEAN__BOXED_BOXED;
    g_cclosure_marshal_BOOL__BOXED_BOXED;
```

### Subsection

```cpp
    g_cclosure_marshal_generic_va;
    g_cclosure_marshal_VOID__VOIDv;
    g_cclosure_marshal_VOID__BOOLEANv;
    g_cclosure_marshal_VOID__CHARv;
    g_cclosure_marshal_VOID__UCHARv;
    g_cclosure_marshal_VOID__INTv;
    g_cclosure_marshal_VOID__UINTv;
    g_cclosure_marshal_VOID__LONGv;
    g_cclosure_marshal_VOID__ULONGv;
    g_cclosure_marshal_VOID__ENUMv;
    g_cclosure_marshal_VOID__FLAGSv;
    g_cclosure_marshal_VOID__FLOATv;
    g_cclosure_marshal_VOID__DOUBLEv;
    g_cclosure_marshal_VOID__STRINGv;
    g_cclosure_marshal_VOID__PARAMv;
    g_cclosure_marshal_VOID__BOXEDv;
    g_cclosure_marshal_VOID__POINTERv;
    g_cclosure_marshal_VOID__OBJECTv;
    g_cclosure_marshal_VOID__VARIANTv;
    g_cclosure_marshal_STRING__OBJECT_POINTERv;
    g_cclosure_marshal_VOID__UINT_POINTERv;
    g_cclosure_marshal_BOOLEAN__FLAGSv;
    g_cclosure_marshal_BOOLEAN__BOXED_BOXEDv;
```

### Subsection Private

```cpp
    GClosureNotifyData;
    g_closure_get_type;
    g_io_channel_get_type;
    g_io_condition_get_type;
```

## 💻FILE: gbinding

```cpp
    GBinding;
    GBindingFlags;
    g_binding_get_source;
    g_binding_dup_source;
    g_binding_get_source_property;
    g_binding_get_target;
    g_binding_dup_target;
    g_binding_get_target_property;
    g_binding_get_flags;
    g_binding_unbind;
```

### Subsection

```cpp
    g_object_bind_property;
    GBindingTransformFunc;
    g_object_bind_property_full;
    g_object_bind_property_with_closures;
```

### Subsection Standard

```cpp
    G_TYPE_BINDING;
    G_TYPE_BINDING_FLAGS;
    G_BINDING;
    G_IS_BINDING;
```

### Subsection Private

```cpp
    g_binding_flags_get_type;
    g_binding_get_type;
```

## 💻FILE: gbindinggroup

```cpp
    GBindingGroup;
    g_binding_group_new;
    g_binding_group_dup_source;
    g_binding_group_set_source;
    g_binding_group_bind;
    g_binding_group_bind_full;
    g_binding_group_bind_with_closures;
```

### Subsection Standard

```cpp
    G_TYPE_BINDING_GROUP;
    G_TYPE_BINDING_GROUP_CLASS;
    G_BINDING_GROUP;
    G_IS_BINDING_GROUP;
```

### Subsection Private

```cpp
    g_binding_group_get_type;
```

## 💻FILE: gsignalgroup

```cpp
    GSignalGroup;
    g_signal_group_block;
    g_signal_group_connect;
    g_signal_group_connect_after;
    g_signal_group_connect_data;
    g_signal_group_connect_object;
    g_signal_group_connect_swapped;
    g_signal_group_connect_closure;
    g_signal_group_dup_target;
    g_signal_group_get_type;
    g_signal_group_new;
    g_signal_group_set_target;
    g_signal_group_unblock;
```

### Subsection Standard

```cpp
    G_IS_SIGNAL_GROUP;
    G_SIGNAL_GROUP;
    G_TYPE_SIGNAL_GROUP;
```

### Subsection Private

```cpp
    g_signal_group_get_type;
```
