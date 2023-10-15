

# 📜 18. Arrays
At the end of the Initialization & Cleanup chapter, you learned how to
define and initialize an array.

The simple view of arrays is that you create and populate them, you select elements from
them using int indexes, and they don't change their size. Most of the time that's all 
you need to know, but sometimes you need to perform more sophisticated operations on arrays, 
and you may also need to evaluate the use of an array vs. a more flexible container. This 
chapter will show you how to think about arrays in more depth.

## 🍀 Why arrays are special

There are a number of other ways to hold objects, so what makes an array special?
There are three issues that distinguish arrays from other types of containers: efficiency, type,
and the ability to hold primitives. The array is Java's most efficient way to store and
randomly access a sequence of object references. The array is a simple linear sequence, which
makes element access fast. The cost of this speed is that the size of an array object is fixed
and cannot be changed for the lifetime of that array. You might suggest an ArrayList (from
Holding Your Objects), which will automatically allocate more space, creating a new one and
moving all the references from the old one to the new one. Although you should generally
prefer an ArrayList to an array, this flexibility has overhead, so an ArrayList is measurably
less efficient than an array.

Both arrays and containers guarantee that you can't abuse them. Whether you're using an
array or a container, you'll get a RuntimeException if you exceed the bounds, indicating a
programmer error.

Before generics, the other container classes dealt with objects as if they had no specific type.
That is, they treated them as type Object, the root class of all classes in Java. Arrays are
superior to pre-generic containers because you create an array to hold a specific type. This
means that you get compile-time type checking to prevent you from inserting the wrong type
or mistaking the type that you're extracting. Of course, Java will prevent you from sending an
inappropriate message to an object at either compile time or run time. So it's not riskier one
way or the other; it's just nicer if the compiler points it out to you, and there's less likelihood
that the end user will get surprised by an exception.

An array can hold primitives, whereas a pre-generic container could not. With generics,
however, containers can specify and check the type of objects they hold, and with autoboxing
containers can act as if they are able to hold primitives, since the conversion is automatic.
Here's an example that compares arrays with generic containers:

```java
//: arrays/ContainerComparison.java
import java.util.*;
import static net.mindview.util.Print.*;

class BerylliumSphere {
    private static long counter;
    private final long id = counter++;
    public String toString() { return "Sphere " + id; }
}

public class ContainerComparison {

    public static void main(String[] args) {
        BerylliumSphere[] spheres = new BerylliumSphere[10];
        for (int i = 0; i < 5; i++)
            spheres[i] = new BerylliumSphere();
        print(Arrays.toString(spheres));
        print(spheres[4]);

        List < BerylliumSphere > sphereList =
            new ArrayList < BerylliumSphere > ();
        for (int i = 0; i < 5; i++)
            sphereList.add(new BerylliumSphere());
        print(sphereList);
        print(sphereList.get(4));

        int[] integers = { 0, 1, 2, 3, 4, 5 };
        print(Arrays.toString(integers));
        print(integers[4]);

        List < Integer > intList = new ArrayList < Integer > (
            Arrays.asList(0, 1, 2, 3, 4, 5));
        intList.add(97);
        print(intList);
        print(intList.get(4));
    }
} /* Output:
[Sphere 0, Sphere 1, Sphere 2, Sphere 3, Sphere 4, null, null, null,
null, null]
Sphere 4
[Sphere 5, Sphere 6, Sphere 7, Sphere 8, Sphere 9]
Sphere 9
[0, 1, 2, 3, 4, 5]
4
[0, 1, 2, 3, 4, 5, 97]
4
*///:~
```
Both ways of holding objects are type-checked, and the only apparent difference is that arrays
use [ ] for accessing elements, and a List uses methods such as add( ) and get( ). The
similarity between arrays and the ArrayList is intentional, so that it's conceptually easy to
switch between the two. But as you saw in the Holding Your Objects chapter, containers have
significantly more functionality than arrays.

With the advent of autoboxing, containers are nearly as easy to use for primitives as arrays.
The only remaining advantage to arrays is efficiency. However, when you're solving a more
general problem, arrays can be too restrictive, and in those cases you use a container class.
Arrays are first-class objects

Regardless of what type of array you're working with, the array identifier is actually a
reference to a true object that's created on the heap. This is the object that holds the
references to the other objects, and it can be created either implicitly, as part of the array
initialization syntax, or explicitly with a new expression. Part of the array object (in fact, the
only field or method you can access) is the read-only length member that tells you how
many elements can be stored in that array object. The '[ ]' syntax is the only other access that
you have to the array object.

The following example summarizes the various ways that an array can be initialized, and how
the array references can be assigned to different array objects. It also shows that arrays of

objects and arrays of primitives are almost identical in their use. The only difference is that
arrays of objects hold references, but arrays of primitives hold the primitive values directly.

```java
//: arrays/ArrayOptions.java
// Initialization & re-assignment of arrays.
import java.util.*;
import static net.mindview.util.Print.*;

public class ArrayOptions {
    public static void main(String[] args) {
        // Arrays of objects:
        BerylliumSphere[] a; // Local uninitialized variable
        BerylliumSphere[] b = new BerylliumSphere[5];
        // The references inside the array are
        // automatically initialized to null:
        print("b: " + Arrays.toString(b));
        BerylliumSphere[] c = new BerylliumSphere[4];
        for (int i = 0; i < c.length; i++)
            if (c[i] == null) // Can test for null reference
                c[i] = new BerylliumSphere();
        // Aggregate initialization:
        BerylliumSphere[] d = {
            new BerylliumSphere(),
            new BerylliumSphere(),
            new BerylliumSphere()
        };
        // Dynamic aggregate initialization:
        a = new BerylliumSphere[] {
            new BerylliumSphere(), new BerylliumSphere(),
        };
        // (Trailing comma is optional in both cases)
        print("a.length = " + a.length);
        print("b.length = " + b.length);
        print("c.length = " + c.length);
        print("d.length = " + d.length);
        a = d;
        print("a.length = " + a.length);

        // Arrays of primitives:
        int[] e; // Null reference
        int[] f = new int[5];
        // The primitives inside the array are
        // automatically initialized to zero:
        print("f: " + Arrays.toString(f));
        int[] g = new int[4];
        for (int i = 0; i < g.length; i++)
            g[i] = i * i;
        int[] h = { 11, 47, 93 };
        // Compile error: variable e not initialized:
        //!print("e.length = " + e.length);
        print("f.length = " + f.length);
        print("g.length = " + g.length);
        print("h.length = " + h.length);
        e = h;
        print("e.length = " + e.length);
        e = new int[] { 1, 2 };
        print("e.length = " + e.length);
    }
} /* Output:
b: [null, null, null, null, null]
a.length = 2
b.length = 5
c.length = 4
d.length = 3
a.length = 3
Arrays 537 

f: [0, 0, 0, 0, 0]
f.length = 5
g.length = 4
h.length = 3
e.length = 3
e.length = 2
*///:~
```
The array a is an uninitialized local variable, and the compiler prevents you from doing
anything with this reference until you've properly initialized it. The array b is initialized to
point to an array of BerylliumSphere references, but no actual BerylliumSphere objects
are ever placed in that array. However, you can still ask what the size of the array is, since b
is pointing to a legitimate object. This brings up a slight drawback: You can't find out how
many elements are actually in the array, since length tells you only how many elements can
be placed in the array; that is, the size of the array object, not the number of elements it
actually holds. However, when an array object is created, its references are automatically
initialized to null, so you can see whether a particular array slot has an object in it by
checking to see whether it's null. Similarly, an array of primitives is automatically initialized
to zero for numeric types, (char)o for char, and false for boolean.

Array c shows the creation of the array object followed by the assignment of
BerylliumSphere objects to all the slots in the array. Array d shows the "aggregate
initialization" syntax that causes the array object to be created (implicitly with new on the
heap, just like for array c) and initialized with BerylliumSphere objects, all in one
statement.

The next array initialization can be thought of as a "dynamic aggregate initialization." The
aggregate initialization used by d must be used at the point of d's definition, but with the
second syntax you can create and initialize an array object anywhere. For example, suppose
hide( ) is a method that takes an array of BerylliumSphere objects. You could call it by
saying:

    hide(d);

but you can also dynamically create the array you want to pass as the argument:

    hide(new BerylliumSphere[]{ new BerylliumSphere(),
    new BerylliumSphere() });

In many situations this syntax provides a more convenient way to write code.

    The expression:
    a = d;

shows how you can take a reference that's attached to one array object and assign it to
another array object, just as you can do with any other type of object reference. Now both a
and d are pointing to the same array object on the heap.

The second part of ArrayOptions.java shows that primitive arrays work just like object
arrays except that primitive arrays hold the primitive values directly.

Exercise 1: (2) Create a method that takes an array of BerylliumSphere as an
argument. Call the method, creating the argument dynamically. Demonstrate that ordinary
aggregate array initialization doesn't work in this case. Discover the only situations where
ordinary aggregate array initialization works, and where dynamic aggregate initialization is
redundant.

## 🍀 Returning an array
Suppose you're writing a method and you don't want to return just one thing, but a whole
bunch of things. Languages like C and C++ make this difficult because you can't just return
an array, only a pointer to an array. This introduces problems because it becomes messy to
control the lifetime of the array, which leads to memory leaks.

In Java, you just return the array. You never worry about responsibility for that array—it will
be around as long as you need it, and the garbage collector will clean it up when you're done.
As an example, consider returning an array of String:

```java
//: arrays/IceCream.java
// Returning arrays from methods.
import java.util.*;

public class IceCream {
    private static Random rand = new Random(47);
    static final String[] FLAVORS = {
        "Chocolate",
        "Strawberry",
        "Vanilla Fudge Swirl",
        "Mint Chip",
        "Mocha Almond Fudge",
        "Rum Raisin",
        "Praline Cream",
        "Mud Pie"
    };
    public static String[] flavorSet(int n) {
        if (n > FLAVORS.length)
            throw new IllegalArgumentException("Set too big");
        String[] results = new String[n];
        boolean[] picked = new boolean[FLAVORS.length];
        for (int i = 0; i < n; i++) {
            int t;
            do
                t = rand.nextInt(FLAVORS.length);
            while (picked[t]);
            results[i] = FLAVORS[t];
            picked[t] = true;
        }
        return results;
    }
    public static void main(String[] args) {
        for (int i = 0; i < 7; i++)
            System.out.println(Arrays.toString(flavorSet(3)));
    }
} /* Output:
[Rum Raisin, Mint Chip, Mocha Almond Fudge]
[Chocolate, Strawberry, Mocha Almond Fudge]
[Strawberry, Mint Chip, Mocha Almond Fudge]
[Rum Raisin, Vanilla Fudge Swirl, Mud Pie]
[Vanilla Fudge Swirl, Chocolate, Mocha Almond Fudge]
[Praline Cream, Strawberry, Mocha Almond Fudge]
[Mocha Almond Fudge, Strawberry, Mint Chip]
*///:~
```
The method flavorSet( ) creates an array of String called results. The size of this array is
n, determined by the argument that you pass into the method. Then it proceeds to choose
flavors randomly from the array FLAVORS and place them into results, which it returns.
Returning an array is just like returning any other object—it's a reference. It's not important
that the array was created within flavorSet( ), or that the array was created anyplace else, for
that matter. The garbage collector takes care of cleaning up the array when you're done with
it, and the array will persist for as long as you need it.
Arrays 539 

As an aside, notice that when flavorSet( ) chooses flavors randomly, it ensures that a
particular choice hasn't already been selected. This is performed in a do loop that keeps
making random choices until it finds one not already in the picked array. (Of course, a
String comparison also could have been performed to see if the random choice was already
in the results array.) If it's successful, it adds the entry and finds the next one (i gets
incremented).

You can see from the output that flavorSet( ) chooses the flavors in a random order each
time.

Exercise 2: (1) Write a method that takes an int argument and returns an array of that
size, filled with BerylliumSphere objects.

## 🍀 Multidimensional arrays
You can easily create multidimensional arrays. For a multidimensional array of primitives,
you delimit each vector in the array by using curly braces:

```java
//: arrays/MultidimensionalPrimitiveArray.java
// Creating multidimensional arrays.
import java.util.*;

public class MultidimensionalPrimitiveArray {
    public static void main(String[] args) {
        int[][] a = { { 1, 2, 3, },
            { 4, 5, 6, },
        };
        System.out.println(Arrays.deepToString(a));
    }
} /* Output:
[[1, 2, 3], [4, 5, 6]]
*///:~
```
Each nested set of curly braces moves you into the next level of the array.
This example uses the Java SE5 Arrays.deepToString( ) method, which turns
multidimensional arrays into Strings, as you can see from the output.

You can also allocate an array using new. Here's a three-dimensional array allocated in a
new expression:

```java
//: arrays/ThreeDWithNew.java
import java.util.*;

public class ThreeDWithNew {
    public static void main(String[] args) {
        // 3-D array with fixed length:
        int[][][] a = new int[2][2][4];
        System.out.println(Arrays.deepToString(a));
    }
} /* Output:
[[[0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 0, 0, 0]]]
*///:~
```

You can see that primitive array values are automatically initialized if you don't give them an
explicit initialization value. Arrays of objects are initialized to null.

Each vector in the arrays that make up the matrix can be of any length (this is called a ragged
array):

```java
//: arrays/RaggedArray.java
import java.util.*;

public class RaggedArray {
    public static void main(String[] args) {
        Random rand = new Random(47);
        // 3-D array with varied-length vectors:
        int[][][] a = new int[rand.nextInt(7)][][];
        for (int i = 0; i < a.length; i++) {
            a[i] = new int[rand.nextInt(5)][];
            for (int j = 0; j < a[i].length; j++)
                a[i][j] = new int[rand.nextInt(5)];
        }
        System.out.println(Arrays.deepToString(a));
    }
} /* Output:
[[], [[0], [0], [0, 0, 0, 0]], [[], [0, 0], [0, 0]], [[0, 0, 0], [0],
[0, 0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0], []], [[0], [], [0]]]
*///:~
```
The first new creates an array with a random-length first element and the rest
undetermined. The second new inside the for loop fills out the elements but leaves the third
index undetermined until you hit the third new.

You can deal with arrays of non-primitive objects in a similar fashion. Here, you can see how
to collect many new expressions with curly braces:

```java
//: arrays/MultidimensionalObjectArrays.java
import java.util.*;

public class MultidimensionalObjectArrays {
    public static void main(String[] args) {
        BerylliumSphere[][] spheres = { { new BerylliumSphere(), new BerylliumSphere() },
            {
                new BerylliumSphere(),
                new BerylliumSphere(),
                new BerylliumSphere(),
                new BerylliumSphere()
            },
            {
                new BerylliumSphere(),
                new BerylliumSphere(),
                new BerylliumSphere(),
                new BerylliumSphere(),
                new BerylliumSphere(),
                new BerylliumSphere(),
                new BerylliumSphere(),
                new BerylliumSphere()
            },
        };
        System.out.println(Arrays.deepToString(spheres));
    }
} /* Output:
[[Sphere 0, Sphere 1], [Sphere 2, Sphere 3, Sphere 4, Sphere 5], [Sphere
6, Sphere 7, Sphere 8, Sphere 9, Sphere 10, Sphere 11, Sphere 12, Sphere
13]]
*///:~
```
You can see that spheres is another ragged array, where the length of each list of objects is
different.

Arrays 541 

Autoboxing also works with array initializers:

```java
//: arrays/AutoboxingArrays.java
import java.util.*;

public class AutoboxingArrays {
public static void main(String[] args) {
Integer[][] a = { // Autoboxing:
{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 },
{ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 },
{ 51, 52, 53, 54, 55, 56, 57, 58, 59, 60 },
{ 71, 72, 73, 74, 75, 76, 77, 78, 79, 80 },
};
System.out.println(Arrays.deepToString(a));
}
} /* Output:
[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [21, 22, 23, 24, 25, 26, 27, 28, 29,
30], [51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [71, 72, 73, 74, 75, 76,
77, 78, 79, 80]]
*///:~
```
Here's how an array of non-primitive objects can be built up piece-by-piece:

```java
//: arrays/AssemblingMultidimensionalArrays.java
// Creating multidimensional arrays.
import java.util.*;

public class AssemblingMultidimensionalArrays {
public static void main(String[] args) {
Integer[][] a;
a = new Integer[3][];
for(int i = 0; i < a.length; i++) {
a[i] = new Integer[3];
for(int j = 0; j < a[i].length; j++)
a[i][j] = i * j; // Autoboxing
}
System.out.println(Arrays.deepToString(a));
}
} /* Output:
[[0, 0, 0], [0, 1, 2], [0, 2, 4]]
*///:~
```
The i*j is only there to put an interesting value into the Integer.
The Arrays.deepToString( ) method works with both primitive arrays and object arrays:

```java
//: arrays/MultiDimWrapperArray.java
// Multidimensional arrays of "wrapper" objects.
import java.util.*;

public class MultiDimWrapperArray {
public static void main(String[] args) {
Integer[][] a1 = { // Autoboxing
{ 1, 2, 3, },
{ 4, 5, 6, },
};
Double[][][] a2 = { // Autoboxing
{ { 1.1, 2.2 }, { 3.3, 4.4 } },
{ { 5.5, 6.6 }, { 7.7, 8.8 } },
{ { 9.9, 1.2 }, { 2.3, 3.4 } },
};

String[][] a3 = {
{ "The", "Quick", "Sly", "Fox" },
{ "Jumped", "Over" },
{ "The", "Lazy", "Brown", "Dog", "and", "friend" },
};
System.out.println("a1: " + Arrays.deepToString(a1));
System.out.println("a2: " + Arrays.deepToString(a2));
System.out.println("a3: " + Arrays.deepToString(a3));
}
} /* Output:
a1: [[1, 2, 3], [4, 5, 6]]
a2: [[[1.1, 2.2], [3.3, 4.4]], [[5.5, 6.6], [7.7, 8.8]], [[9.9, 1.2],
[2.3, 3.4]]]
a3: [[The, Quick, Sly, Fox], [Jumped, Over], [The, Lazy, Brown, Dog,
and, friend]]
*///:~
```
Again, in the Integer and Double arrays, Java SE5 autoboxing creates the wrapper objects
for you.

Exercise 3: (4) Write a method that creates and initializes a twodimensional array of
double. The size of the array is determined by the arguments of the method, and the
initialization values are a range determined by beginning and ending values that are also
arguments of the method. Create a second method that will print the array generated by the
first method. In main( ) test the methods by creating and printing several different sizes of
arrays.

Exercise 4: (2) Repeat the previous exercise for a three-dimensional array.

Exercise 5: (1) Demonstrate that multidimensional arrays of nonprimitive types are
automatically initialized to null.

Exercise 6: (1) Write a method that takes two int arguments, indicating the two sizes of
a 2-D array. The method should create and fill a 2-D array of BerylliumSphere according
to the size arguments.

Exercise 7: (1) Repeat the previous exercise for a 3-D array.

Arrays and generics
In general, arrays and generics do not mix well. You cannot instantiate arrays of
parameterized types:
Peel<Banana>[] peels = new Peel<Banana> [10]; // Illegal
Erasure removes the parameter type information, and arrays must know the exact type that
they hold, in order to enforce type safety.
However, you can parameterize the type of the array itself:

```java
//: arrays/ParameterizedArrayType.java

class ClassParameter<T> {
public T[] f(T[] arg) { return arg; }
Arrays 543 

}

class MethodParameter {
public static <T> T[] f(T[] arg) { return arg; }
}

public class ParameterizedArrayType {
public static void main(String[] args) {
Integer[] ints = { 1, 2, 3, 4, 5 };
Double[] doubles = { 1.1, 2.2, 3.3, 4.4, 5.5 };
Integer[] ints2 =
new ClassParameter<Integer>().f(ints);
Double[] doubles2 =
new ClassParameter<Double>().f(doubles);
ints2 = MethodParameter.f(ints);
doubles2 = MethodParameter.f(doubles);
}
} ///:~
```
Note the convenience of using a parameterized method instead of a parameterized class: You
don't have to instantiate a class with a parameter for each different type you need to apply it
to, and you can make it static. Of course, you can't always choose to use a parameterized
method instead of a parameterized class, but it can be preferable.
As it turns out, it's not precisely correct to say that you cannot create arrays of generic types.
True, the compiler won't let you instantiate an array of a generic type. However, it will let
you create a reference to such an array. For example:
List<String>[] ls;
This passes through the compiler without complaint. And although you cannot create an
actual array object that holds generics, you can create an array of the non-generified type and
cast it:

```java
//: arrays/ArrayOfGenerics.java
// It is possible to create arrays of generics.
import java.util.*;

public class ArrayOfGenerics {
@SuppressWarnings("unchecked")
public static void main(String[] args) {
List<String>[] ls;
List[] la = new List[10];
ls = (List<String>[])la; // "Unchecked" warning
ls[0] = new ArrayList<String>();
// Compile-time checking produces an error:
//! ls[1] = new ArrayList<Integer>();

// The problem: List<String> is a subtype of Object
Object[] objects = ls; // So assignment is OK
// Compiles and runs without complaint:
objects[1] = new ArrayList<Integer>();

// However, if your needs are straightforward it is
// possible to create an array of generics, albeit
// with an "unchecked" warning:
List<BerylliumSphere>[] spheres =
(List<BerylliumSphere>[])new List[10];
for(int i = 0; i < spheres.length; i++)
spheres[i] = new ArrayList<BerylliumSphere>();
}

} ///:~
```
Once you have a reference to a List<String>[], you can see that you get some compile-time
checking. The problem is that arrays are covariant, so a List<String>[] is also an Object[],
and you can use this to assign an ArrayList<Integer> into your array, with no error at
either compile time or run time.
If you know you're not going to upcast and your needs are relatively simple, however, it is
possible to create an array of generics, which will provide basic compile-time type checking.
However, a generic container will virtually always be a better choice than an array of
generics.
In general you'll find that generics are effective at the boundaries of a class or method. In the
interiors, erasure usually makes generics unusable. So you cannot, for example, create an
array of a generic type:

```java
//: arrays/ArrayOfGenericType.java
// Arrays of generic types won't compile.

public class ArrayOfGenericType<T> {
T[] array; // OK
@SuppressWarnings("unchecked")
public ArrayOfGenericType(int size) {
//! array = new T[size]; // Illegal
array = (T[])new Object[size]; // "unchecked" Warning
}
// Illegal:
//! public <U> U[] makeArray() { return new U[10]; }
} ///:~
```
Erasure gets in the way again—this example attempts to create arrays of types that have been
erased, and are thus unknown types. Notice that you can create an array of Object, and cast
it, but without the @SuppressWarnings annotation you get an "unchecked" warning at
compile time because the array doesn't really hold or dynamically check for type T. That is, if
I create a String[], Java will enforce at both compile time and run time that I can only place
String objects in that array. However, if I create an Object[], I can put anything into that
array except primitive types.

Exercise 8: (1) Demonstrate the assertions in the previous paragraph.

Exercise 9: (3) Create the classes necessary for the Peel<Banana> example and show
that the compiler doesn't accept it. Fix the problem using an ArrayList.

Exercise 10: (2) Modify ArrayOfGenerics .Java to use containers instead of arrays.
Show that you can eliminate the compile-time warnings.




Arrays 545 

Creating test data
When experimenting with arrays, and with programs in general, it's helpful to be able to
easily generate arrays filled with test data. The tools in this section will fill an array with
values or objects.
Arrays.fill()
The Java standard library Arrays class has a rather trivial fill( ) method: It only duplicates
a single value into each location, or in the case of objects, copies the same reference into each
location. Here's an example:

```java
//: arrays/FillingArrays.java
// Using Arrays.fill()
import java.util.*;
import static net.mindview.util.Print.*;

public class FillingArrays {
public static void main(String[] args) {
int size = 6;
boolean[] a1 = new boolean[size];
byte[] a2 = new byte[size];
char[] a3 = new char[size];
short[] a4 = new short[size];
int[] a5 = new int[size];
long[] a6 = new long[size];
float[] a7 = new float[size];
double[] a8 = new double[size];
String[] a9 = new String[size];
Arrays.fill(a1, true);
print("a1 = " + Arrays.toString(a1));
Arrays.fill(a2, (byte)11);
print("a2 = " + Arrays.toString(a2));
Arrays.fill(a3, 'x');
print("a3 = " + Arrays.toString(a3));
Arrays.fill(a4, (short)17);
print("a4 = " + Arrays.toString(a4));
Arrays.fill(a5, 19);
print("a5 = " + Arrays.toString(a5));
Arrays.fill(a6, 23);
print("a6 = " + Arrays.toString(a6));
Arrays.fill(a7, 29);
print("a7 = " + Arrays.toString(a7));
Arrays.fill(a8, 47);
print("a8 = " + Arrays.toString(a8));
Arrays.fill(a9, "Hello");
print("a9 = " + Arrays.toString(a9));
// Manipulating ranges:
Arrays.fill(a9, 3, 5, "World");
print("a9 = " + Arrays.toString(a9));
}
} /* Output:
a1 = [true, true, true, true, true, true]
a2 = [11, 11, 11, 11, 11, 11]
a3 = [x, x, x, x, x, x]
a4 = [17, 17, 17, 17, 17, 17]
a5 = [19, 19, 19, 19, 19, 19]
a6 = [23, 23, 23, 23, 23, 23]
a7 = [29.0, 29.0, 29.0, 29.0, 29.0, 29.0]

Arrays 547 
a8 = [47.0, 47.0, 47.0, 47.0, 47.0, 47.0]
a9 = [Hello, Hello, Hello, Hello, Hello, Hello]
a9 = [Hello, Hello, Hello, World, World, Hello]
*///:~
```
You can either fill the entire array or, as the last two statements show, fill a range of
elements. But since you can only call Arrays.fill( ) with a single data value, the results are
not especially useful.
Data Generators
To create more interesting arrays of data, but in a flexible fashion, we'll use the Generator
concept that was introduced in the Generics chapter. If a tool uses a Generator, you can
produce any kind of data via your choice of Generator (this is an example of the Strategy
design pattern—each different Generator represents a different strategy 1 ).
This section will supply some Generators, and as you've seen before, you can easily define
your own.
First, here's a basic set of counting generators for all primitive wrapper types, and for
Strings. The generator classes are nested within the CountingGenerator class so that
they may use the same name as the object types they are generating; for example, a generator
that creates Integer objects would be created with the expression new
CountingGenerator.Integer( ):

```java
//: net/mindview/util/CountingGenerator.java
// Simple generator implementations.
package net.mindview.util;

public class CountingGenerator {
public static class
Boolean implements Generator<java.lang.Boolean> {
private boolean value = false;
public java.lang.Boolean next() {
value = !value; // Just flips back and forth
return value;
}
}
public static class
Byte implements Generator<java.lang.Byte> {
private byte value = 0;
public java.lang.Byte next() { return value++; }
}
static char[] chars = ("abcdefghijklmnopqrstuvwxyz" +
"ABCDEFGHIJKLMNOPQRSTUVWXYZ").toCharArray();
public static class
Character implements Generator<java.lang.Character> {
int index = -1;
public java.lang.Character next() {
index = (index + 1) % chars.length;
return chars[index];
}
}
public static class
String implements Generator<java.lang.String> {
private int length = 7;

1 Although this is a place where things are a bit fuzzy. You could also make an argument that a Generator represents the
Command pattern. However, I think that the task is to fill an array, and the Generator fulfills part of that task, so it's
more strategy-like than command-like.

Generator<java.lang.Character> cg = new Character();
public String() {}
public String(int length) { this.length = length; }
public java.lang.String next() {
char[] buf = new char[length];
for(int i = 0; i < length; i++)
buf[i] = cg.next();
return new java.lang.String(buf);
}
}
public static class
Short implements Generator<java.lang.Short> {
private short value = 0;
public java.lang.Short next() { return value++; }
}
public static class
Integer implements Generator<java.lang.Integer> {
private int value = 0;
public java.lang.Integer next() { return value++; }
}
public static class
Long implements Generator<java.lang.Long> {
private long value = 0;
public java.lang.Long next() { return value++; }
}
public static class
Float implements Generator<java.lang.Float> {
private float value = 0;
public java.lang.Float next() {
float result = value;
value += 1.0;
return result;
}
}
public static class
Double implements Generator<java.lang.Double> {
private double value = 0.0;
public java.lang.Double next() {
double result = value;
value += 1.0;
return result;
}
}
} ///:~
```
Each class implements some meaning of "counting." In the case of
CountingGenerator.Character, this is just the upper and lowercase letters repeated over
and over. The CountingGenerator.String class uses CountingGenerator.Character
to fill an array of characters, which is then turned into a String. The size of the array is
determined by the constructor argument. Notice that CountingGenerator.String uses a
basic Generator <java.lang. Character > instead of a specific reference to
CountingGenerator.Character. Later, this generator can be replaced to produce
RandomGenerator.String in RandomGenerator.java.
Here's a test tool that uses reflection with the nested Generator idiom, so that it can be
used to test any set of Generators that follow this form:

```java
//: arrays/GeneratorsTest.java
import net.mindview.util.*;

public class GeneratorsTest {
public static int size = 10;

public static void test(Class<?> surroundingClass) {
for(Class<?> type : surroundingClass.getClasses()) {
System.out.print(type.getSimpleName() + ": ");
try {
Generator<?> g = (Generator<?>)type.newInstance();
for(int i = 0; i < size; i++)
System.out.printf(g.next() + " ");
System.out.println();
} catch(Exception e) {
throw new RuntimeException(e);
}
}
}
public static void main(String[] args) {
test(CountingGenerator.class);
}
} /* Output:
Double: 0.0 1.0 2.0 3.0 4.0 5.0 6.0 7.0 8.0 9.0
Float: 0.0 1.0 2.0 3.0 4.0 5.0 6.0 7.0 8.0 9.0
Long: 0 1 2 3 4 5 6 7 8 9
Integer: 0 1 2 3 4 5 6 7 8 9
Short: 0 1 2 3 4 5 6 7 8 9
String: abcdefg hijklmn opqrstu vwxyzAB CDEFGHI JKLMNOP QRSTUVW XYZabcd
efghijk lmnopqr
Character: a b c d e f g h i j
Byte: 0 1 2 3 4 5 6 7 8 9
Boolean: true false true false true false true false true false
*///:~
```
This assumes that the class under test contains a set of nested Generator objects, each of
which has a default constructor (one without arguments). The reflection method
getClasses( ) produces all the nested classes. The test( ) method then creates an instance
of each of these generators, and prints the result produced by calling next( ) ten times.
Here is a set of Generators that use the random number generator. Because the Random
constructor is initialized with a constant value, the output is repeatable each time you run a
program using one of these Generators:

```java
//: net/mindview/util/RandomGenerator.java
// Generators that produce random values.
package net.mindview.util;
import java.util.*;

public class RandomGenerator {
private static Random r = new Random(47);
public static class
Boolean implements Generator<java.lang.Boolean> {
public java.lang.Boolean next() {
return r.nextBoolean();
}
}
public static class
Byte implements Generator<java.lang.Byte> {
public java.lang.Byte next() {
return (byte)r.nextInt();
}
}
public static class
Character implements Generator<java.lang.Character> {
public java.lang.Character next() {
return CountingGenerator.chars[
r.nextInt(CountingGenerator.chars.length)];
Arrays 549 

}
}
public static class
String extends CountingGenerator.String {
// Plug in the random Character generator:
{ cg = new Character(); } // Instance initializer
public String() {}
public String(int length) { super(length); }
}
public static class
Short implements Generator<java.lang.Short> {
public java.lang.Short next() {
return (short)r.nextInt();
}
}
public static class
Integer implements Generator<java.lang.Integer> {
private int mod = 10000;
public Integer() {}
public Integer(int modulo) { mod = modulo; }
public java.lang.Integer next() {
return r.nextInt(mod);
}
}
public static class
Long implements Generator<java.lang.Long> {
private int mod = 10000;
public Long() {}
public Long(int modulo) { mod = modulo; }
public java.lang.Long next() {
return new java.lang.Long(r.nextInt(mod));
}
}
public static class
Float implements Generator<java.lang.Float> {
public java.lang.Float next() {
// Trim all but the first two decimal places:
int trimmed = Math.round(r.nextFloat() * 100);
return ((float)trimmed) / 100;
}
}
public static class
Double implements Generator<java.lang.Double> {
public java.lang.Double next() {
long trimmed = Math.round(r.nextDouble() * 100);
return ((double)trimmed) / 100;
}
}
} ///:~
```
You can see that RandomGenerator.String inherits from CountingGenerator.String
and simply plugs in the new Character generator.
To generate numbers that aren't too large, RandomGenerator.Integer defaults to a
modulus of 10,000, but the overloaded constructor allows you to choose a smaller value. The
same approach is used for RandomGenerator.Long. For the Float and Double
Generators, the values after the decimal point are trimmed.
We can reuse GeneratorsTest to test RandomGenerator:

```java
//: arrays/RandomGeneratorsTest.java
import net.mindview.util.*;


public class RandomGeneratorsTest {
public static void main(String[] args) {
GeneratorsTest.test(RandomGenerator.class);
}
} /* Output:
Double: 0.73 0.53 0.16 0.19 0.52 0.27 0.26 0.05 0.8 0.76
Float: 0.53 0.16 0.53 0.4 0.49 0.25 0.8 0.11 0.02 0.8
Long: 7674 8804 8950 7826 4322 896 8033 2984 2344 5810
Integer: 8303 3141 7138 6012 9966 8689 7185 6992 5746 3976
Short: 3358 20592 284 26791 12834 -8092 13656 29324 -1423 5327
String: bkInaMe sbtWHkj UrUkZPg wsqPzDy CyRFJQA HxxHvHq XumcXZJ oogoYWM
NvqeuTp nXsgqia
Character: x x E A J J m z M s
Byte: -60 -17 55 -14 -5 115 39 -37 79 115
Boolean: false true false false true true true true true true
*///:~
```
You can change the number of values produced by changing the GeneratorsTest.size
value, which is public.
Creating arrays from Generators
In order to take a Generator and produce an array, we need two conversion tools. The first
one uses any Generator to produce an array of Object subtypes. To cope with the problem
of primitives, the second tool takes any array of primitive wrapper types and produces the
associated array of primitives.
The first tool has two options, represented by an overloaded static method, array( ). The
first version of the method takes an existing array and fills it using a Generator, and the
second version takes a Class object, a Generator, and the desired number of elements, and
creates a new array, again filling it using the Generator. Notice that this tool only produces
arrays of Object subtypes and cannot create primitive arrays:

```java
//: net/mindview/util/Generated.java
package net.mindview.util;
import java.util.*;

public class Generated {
// Fill an existing array:
public static <T> T[] array(T[] a, Generator<T> gen) {
return new CollectionData<T>(gen, a.length).toArray(a);
}
// Create a new array:
@SuppressWarnings("unchecked")
public static <T> T[] array(Class<T> type,
Generator<T> gen, int size) {
T[] a =
(T[])java.lang.reflect.Array.newInstance(type, size);
return new CollectionData<T>(gen, size).toArray(a);
}
} ///:~
```
The CollectionData class will be defined in the Containers in Depth chapter. It creates a
Collection object filled with elements produced by the Generator gen. The number of
elements is determined by the second constructor argument. All Collection subtypes have a
toArray( ) method that will fill the argument array with the elements from the Collection.
Arrays 551 

The second method uses reflection to dynamically create a new array of the appropriate type
and size. This is then filled using the same technique as the first method.
We can test Generated using one of the CountingGenerator classes defined in the
previous section:

```java
//: arrays/TestGenerated.java
import java.util.*;
import net.mindview.util.*;

public class TestGenerated {
public static void main(String[] args) {
Integer[] a = { 9, 8, 7, 6 };
System.out.println(Arrays.toString(a));
a = Generated.array(a,new CountingGenerator.Integer());
System.out.println(Arrays.toString(a));
Integer[] b = Generated.array(Integer.class,
new CountingGenerator.Integer(), 15);
System.out.println(Arrays.toString(b));
}
} /* Output:
[9, 8, 7, 6]
[0, 1, 2, 3]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
*///:~
```
Even though the array a is initialized, those values are overwritten by passing it through
Generated.array( ), which replaces the values (but leaves the original array in place). The
initialization of b shows how you can create a filled array from scratch.
Generics don't work with primitives, and we want to use the generators to fill primitive
arrays. To solve the problem, we create a converter that takes any array of wrapper objects
and converts it to an array of the associated primitive types. Without this tool, we would have
to create special case generators for all the primitives.

```java
//: net/mindview/util/ConvertTo.java
package net.mindview.util;

public class ConvertTo {
public static boolean[] primitive(Boolean[] in) {
boolean[] result = new boolean[in.length];
for(int i = 0; i < in.length; i++)
result[i] = in[i]; // Autounboxing
return result;
}
public static char[] primitive(Character[] in) {
char[] result = new char[in.length];
for(int i = 0; i < in.length; i++)
result[i] = in[i];
return result;
}
public static byte[] primitive(Byte[] in) {
byte[] result = new byte[in.length];
for(int i = 0; i < in.length; i++)
result[i] = in[i];
return result;
}
public static short[] primitive(Short[] in) {
short[] result = new short[in.length];
for(int i = 0; i < in.length; i++)
result[i] = in[i];

return result;
}
public static int[] primitive(Integer[] in) {
int[] result = new int[in.length];
for(int i = 0; i < in.length; i++)
result[i] = in[i];
return result;
}
public static long[] primitive(Long[] in) {
long[] result = new long[in.length];
for(int i = 0; i < in.length; i++)
result[i] = in[i];
return result;
}
public static float[] primitive(Float[] in) {
float[] result = new float[in.length];
for(int i = 0; i < in.length; i++)
result[i] = in[i];
return result;
}
public static double[] primitive(Double[] in) {
double[] result = new double[in.length];
for(int i = 0; i < in.length; i++)
result[i] = in[i];
return result;
}
} ///:~
```
Each version of primitive( ) creates an appropriate primitive array of the correct length,
then copies the elements from the in array of wrapper types. Notice that autounboxing takes
place in the expression:
result[i] = in [1];
Here's an example that shows how you can use ConvertTo with both versions of
Generated.array( ):

```java
//: arrays/PrimitiveConversionDemonstration.java
import java.util.*;
import net.mindview.util.*;

public class PrimitiveConversionDemonstration {
public static void main(String[] args) {
Integer[] a = Generated.array(Integer.class,
new CountingGenerator.Integer(), 15);
int[] b = ConvertTo.primitive(a);
System.out.println(Arrays.toString(b));
boolean[] c = ConvertTo.primitive(
Generated.array(Boolean.class,
new CountingGenerator.Boolean(), 7));
System.out.println(Arrays.toString(c));
}
} /* Output:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
[true, false, true, false, true, false, true]
*///:~
```
Finally, here's a program that tests the array generation tools using RandomGenerator
classes:

```java
//: arrays/TestArrayGeneration.java
Arrays 553 

// Test the tools that use generators to fill arrays.
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class TestArrayGeneration {
public static void main(String[] args) {
int size = 6;
boolean[] a1 = ConvertTo.primitive(Generated.array(
Boolean.class, new RandomGenerator.Boolean(), size));
print("a1 = " + Arrays.toString(a1));
byte[] a2 = ConvertTo.primitive(Generated.array(
Byte.class, new RandomGenerator.Byte(), size));
print("a2 = " + Arrays.toString(a2));
char[] a3 = ConvertTo.primitive(Generated.array(
Character.class,
new RandomGenerator.Character(), size));
print("a3 = " + Arrays.toString(a3));
short[] a4 = ConvertTo.primitive(Generated.array(
Short.class, new RandomGenerator.Short(), size));
print("a4 = " + Arrays.toString(a4));
int[] a5 = ConvertTo.primitive(Generated.array(
Integer.class, new RandomGenerator.Integer(), size));
print("a5 = " + Arrays.toString(a5));
long[] a6 = ConvertTo.primitive(Generated.array(
Long.class, new RandomGenerator.Long(), size));
print("a6 = " + Arrays.toString(a6));
float[] a7 = ConvertTo.primitive(Generated.array(
Float.class, new RandomGenerator.Float(), size));
print("a7 = " + Arrays.toString(a7));
double[] a8 = ConvertTo.primitive(Generated.array(
Double.class, new RandomGenerator.Double(), size));
print("a8 = " + Arrays.toString(a8));
}
} /* Output:
a1 = [true, false, true, false, false, true]
a2 = [104, -79, -76, 126, 33, -64]
a3 = [Z, n, T, c, Q, r]
a4 = [-13408, 22612, 15401, 15161, -28466, -12603]
a5 = [7704, 7383, 7706, 575, 8410, 6342]
a6 = [7674, 8804, 8950, 7826, 4322, 896]
a7 = [0.01, 0.2, 0.4, 0.79, 0.27, 0.45]
a8 = [0.16, 0.87, 0.7, 0.66, 0.87, 0.59]
*///:~
```
This also ensures that each version of ConvertTo.primitive( ) works correctly.

Exercise 11: (2) Show that autoboxing doesn't work with arrays.

Exercise 12: (1) Create an initialized array of double using CountingGenerator. Print
the results.

Exercise 13: (2) Fill a String using CountingGenerator.Character.

Exercise 14: (6) Create an array of each primitive type, then fill each array by using
CountingGenerator. Print each array.

Exercise 15: (2) Modify ContainerComparison.java by creating a Generator for
BerylliumSphere, and change main( ) to use that Generator with Generated.array().


Exercise 16: (3) Starting with CountingGenerator.java, create a SkipGenerator
class that produces new values by incrementing according to a constructor argument. Modify
TestArrayGeneration.java to show that your new class works correctly.

Exercise 17: (5) Create and test a Generator for BigDecimal, and ensure that it works
with the Generated methods.

Arrays utilities
In java.util, you'll find the Arrays class, which holds a set of static utility methods for
arrays. There are six basic methods: equals( ), to compare two arrays for equality (and a
deepEquals( ) for multidimensional arrays); fill( ), which you've seen earlier in this
chapter; sort( ), to sort an array; binarySearch( ), to find an element in a sorted array;
toString( ), to produce a String representation for an array; and hashCode( ), to produce
the hash value of an array (you'll learn what this means in the Containers in Depth chapter).
All of these methods are overloaded for all the primitive types and Objects. In addition,
Arrays.asList( ) takes any sequence or array and turns it into a List container—this
method was covered in the Holding Your Objects chapter.
Before discussing the Arrays methods, there's one other useful method that isn't part of
Arrays.
Copying an array
The Java standard library provides a static method, System.arraycopy( ), which can copy
arrays far more quickly than if you use a for loop to perform the copy by hand.
System.arraycopyC ) is overloaded to handle all types. Here's an example that
manipulates arrays of int:

```java
//: arrays/CopyingArrays.java
// Using System.arraycopy()
import java.util.*;
import static net.mindview.util.Print.*;

public class CopyingArrays {
public static void main(String[] args) {
int[] i = new int[7];
int[] j = new int[10];
Arrays.fill(i, 47);
Arrays.fill(j, 99);
print("i = " + Arrays.toString(i));
print("j = " + Arrays.toString(j));
System.arraycopy(i, 0, j, 0, i.length);
print("j = " + Arrays.toString(j));
int[] k = new int[5];
Arrays.fill(k, 103);
System.arraycopy(i, 0, k, 0, k.length);
print("k = " + Arrays.toString(k));
Arrays.fill(k, 103);
System.arraycopy(k, 0, i, 0, k.length);
print("i = " + Arrays.toString(i));
// Objects:
Integer[] u = new Integer[10];
Integer[] v = new Integer[5];
Arrays.fill(u, new Integer(47));
Arrays 555 

Arrays.fill(v, new Integer(99));
print("u = " + Arrays.toString(u));
print("v = " + Arrays.toString(v));
System.arraycopy(v, 0, u, u.length/2, v.length);
print("u = " + Arrays.toString(u));
}
} /* Output:
i = [47, 47, 47, 47, 47, 47, 47]
j = [99, 99, 99, 99, 99, 99, 99, 99, 99, 99]
j = [47, 47, 47, 47, 47, 47, 47, 99, 99, 99]
k = [47, 47, 47, 47, 47]
i = [103, 103, 103, 103, 103, 47, 47]
u = [47, 47, 47, 47, 47, 47, 47, 47, 47, 47]
v = [99, 99, 99, 99, 99]
u = [47, 47, 47, 47, 47, 99, 99, 99, 99, 99]
*///:~
```
The arguments to arraycopy( ) are the source array, the offset into the source array from
whence to start copying, the destination array, the offset into the destination array where the
copying begins, and the number of elements to copy. Naturally, any violation of the array
boundaries will cause an exception.
The example shows that both primitive arrays and object arrays can be copied. However, if
you copy arrays of objects, then only the references get copied—there's no duplication of the
objects themselves. This is called a shallow copy (see the online supplements for this book
for more details).
System.arraycopy( ) will not perform autoboxing or autounboxing—the two arrays must
be of exactly the same type.

Exercise 18: (3) Create and fill an array of BerylliumSphere. Copy this array to a new
array and show that it's a shallow copy.

Comparing arrays
Arrays provides the equals( ) method to compare entire arrays for equality, which is
overloaded for all the primitives and for Object. To be equal, the arrays must have the same
number of elements, and each element must be equivalent to each corresponding element in
the other array, using the equals( ) for each element. (For primitives, that primitive's
wrapper class equals( ) is used; for example, Integer.equals( ) for int.) For example:

```java
//: arrays/ComparingArrays.java
// Using Arrays.equals()
import java.util.*;
import static net.mindview.util.Print.*;

public class ComparingArrays {
public static void main(String[] args) {
int[] a1 = new int[10];
int[] a2 = new int[10];
Arrays.fill(a1, 47);
Arrays.fill(a2, 47);
print(Arrays.equals(a1, a2));
a2[3] = 11;
print(Arrays.equals(a1, a2));
String[] s1 = new String[4];
Arrays.fill(s1, "Hi");

Arrays 557 
String[] s2 = { new String("Hi"), new String("Hi"),
new String("Hi"), new String("Hi") };
print(Arrays.equals(s1, s2));
}
} /* Output:
true
false
true
*///:~
```
Originally, a1 and a2 are exactly equal, so the output is "true," but then one of the elements
is changed, which makes the result "false." In the last case, all the elements of s1 point to the
same object, but s2 has five unique objects. However, array equality is based on contents (via
Object.equals( )), so the result is "true."

Exercise 19: (2) Create a class with an int field that's initialized from a constructor
argument. Create two arrays of these objects, using identical initialization values for each
array, and show that Arrays.equals( ) says that they are unequal. Add an equals( )
method to your class to fix the problem.

Exercise 20: (4) Demonstrate deepEquals( ) for multidimensional arrays.

Array element comparisons
Sorting must perform comparisons based on the actual type of the object. Of course, one
approach is to write a different sorting method for every different type, but such code is not
reusable for new types.
A primary goal of programming design is to "separate things that change from things that
stay the same," and here, the code that stays the same is the general sort algorithm, but the
thing that changes from one use to the next is the way objects are compared. So instead of
placing the comparison code into many different sort routines, the Strategy design pattern is
used. 2 With a Strategy, the part of the code that varies is encapsulated inside a separate class
(the Strategy object). You hand a Strategy object to the code that's always the same, which
uses the Strategy to fulfill its algorithm. That way, you can make different objects to express
different ways of comparison and feed them to the same sorting code.
Java has two ways to provide comparison functionality. The first is with the "natural"
comparison method that is imparted to a class by implementing the
java.lang.Comparable interface. This is a very simple interface with a single method,
compareTo( ). This method takes another object of the same type as an argument and
produces a negative value if the current object is less than the argument, zero if the argument is
equal, and a positive value if the current object is greater than the argument.
Here's a class that implements Comparable and demonstrates the comparability by using the
Java standard library method Arrays.sort( ):

```java
//: arrays/CompType.java
// Implementing Comparable in a class.
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

2 Design Patterns, Erich Gamma et al. (Addison-Wesley, 1995). See Thinking in Patterns (with Java) at
www.MindView.net.


public class CompType implements Comparable<CompType> {
int i;
int j;
private static int count = 1;
public CompType(int n1, int n2) {
i = n1;
j = n2;
}
public String toString() {
String result = "[i = " + i + ", j = " + j + "]";
if(count++ % 3 == 0)
result += "\n";
return result;
}
public int compareTo(CompType rv) {
return (i < rv.i ? -1 : (i == rv.i ? 0 : 1));
}
private static Random r = new Random(47);
public static Generator<CompType> generator() {
return new Generator<CompType>() {
public CompType next() {
return new CompType(r.nextInt(100),r.nextInt(100));
}
};
}
public static void main(String[] args) {
CompType[] a =
Generated.array(new CompType[12], generator());
print("before sorting:");
print(Arrays.toString(a));
Arrays.sort(a);
print("after sorting:");
print(Arrays.toString(a));
}
} /* Output:
before sorting:
[[i = 58, j = 55], [i = 93, j = 61], [i = 61, j = 29]
, [i = 68, j = 0], [i = 22, j = 7], [i = 88, j = 28]
, [i = 51, j = 89], [i = 9, j = 78], [i = 98, j = 61]
, [i = 20, j = 58], [i = 16, j = 40], [i = 11, j = 22]
]
after sorting:
[[i = 9, j = 78], [i = 11, j = 22], [i = 16, j = 40]
, [i = 20, j = 58], [i = 22, j = 7], [i = 51, j = 89]
, [i = 58, j = 55], [i = 61, j = 29], [i = 68, j = 0]
, [i = 88, j = 28], [i = 93, j = 61], [i = 98, j = 61]
]
*///:~
```
When you define the comparison method, you are responsible for deciding what it means to
compare one of your objects to another. Here, only the i values are used in the comparison,
and the j values are ignored.
The generator( ) method produces an object that implements the Generator interface by
creating an anonymous inner class. This builds CompType objects by initializing them with
random values. In main( ), the generator is used to fill an array of CompType, which is
then sorted. If Comparable hadn't been implemented, then you'd get a
ClassCastException at run time when you tried to call sort( ). This is because sort( )
casts its argument to Comparable.

Now suppose someone hands you a class that doesn't implement Comparable, or hands
you this class that does implement Comparable, but you decide you don't like the way it
works and would rather have a different comparison method for the type. To solve the
problem, you create a separate class that implements an interface called Comparator
(briefly introduced in the Holding Your Objects chapter). This is an example of the Strategy
design pattern. It has two methods, compare( ) and equals( ). However, you don't have to
implement equals( ) except for special performance needs, because anytime you create a
class, it is implicitly inherited from Object, which has an equals( ). So you can just use the
default Object equals( ) and satisfy the contract imposed by the interface.
The Collections class (which we'll look at more in the next chapter) contains a method
reverseOrder( ) that produces a Comparator to reverse the natural sorting order. This can be
applied to CompType:

```java
//: arrays/Reverse.java
// The Collections.reverseOrder() Comparator
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class Reverse {
public static void main(String[] args) {
CompType[] a = Generated.array(
new CompType[12], CompType.generator());
print("before sorting:");
print(Arrays.toString(a));
Arrays.sort(a, Collections.reverseOrder());
print("after sorting:");
print(Arrays.toString(a));
}
} /* Output:
before sorting:
[[i = 58, j = 55], [i = 93, j = 61], [i = 61, j = 29]
, [i = 68, j = 0], [i = 22, j = 7], [i = 88, j = 28]
, [i = 51, j = 89], [i = 9, j = 78], [i = 98, j = 61]
, [i = 20, j = 58], [i = 16, j = 40], [i = 11, j = 22]
]
after sorting:
[[i = 98, j = 61], [i = 93, j = 61], [i = 88, j = 28]
, [i = 68, j = 0], [i = 61, j = 29], [i = 58, j = 55]
, [i = 51, j = 89], [i = 22, j = 7], [i = 20, j = 58]
, [i = 16, j = 40], [i = 11, j = 22], [i = 9, j = 78]
]
*///:~
```
You can also write your own Comparator. This one compares CompType objects based on
their j values rather than their i values:

```java
//: arrays/ComparatorTest.java
// Implementing a Comparator for a class.
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

class CompTypeComparator implements Comparator<CompType> {
public int compare(CompType o1, CompType o2) {
return (o1.j < o2.j ? -1 : (o1.j == o2.j ? 0 : 1));
}
}

public class ComparatorTest {
Arrays 559 

public static void main(String[] args) {
CompType[] a = Generated.array(
new CompType[12], CompType.generator());
print("before sorting:");
print(Arrays.toString(a));
Arrays.sort(a, new CompTypeComparator());
print("after sorting:");
print(Arrays.toString(a));
}
} /* Output:
before sorting:
[[i = 58, j = 55], [i = 93, j = 61], [i = 61, j = 29]
, [i = 68, j = 0], [i = 22, j = 7], [i = 88, j = 28]
, [i = 51, j = 89], [i = 9, j = 78], [i = 98, j = 61]
, [i = 20, j = 58], [i = 16, j = 40], [i = 11, j = 22]
]
after sorting:
[[i = 68, j = 0], [i = 22, j = 7], [i = 11, j = 22]
, [i = 88, j = 28], [i = 61, j = 29], [i = 16, j = 40]
, [i = 58, j = 55], [i = 20, j = 58], [i = 93, j = 61]
, [i = 98, j = 61], [i = 9, j = 78], [i = 51, j = 89]
]
*///:~
```

Exercise 21: (3) Try to sort an array of the objects in Exercise 18. Implement
Comparable to fix the problem. Now create a Comparator to sort the objects into reverse
order.

Sorting an array
With the built-in sorting methods, you can sort any array of primitives, or any array of
objects that either implements Comparable or has an associated Comparator. 3 Here's an
example that generates random String objects and sorts them:

```java
//: arrays/StringSorting.java
// Sorting an array of Strings.
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class StringSorting {
public static void main(String[] args) {
String[] sa = Generated.array(new String[20],
new RandomGenerator.String(5));
print("Before sort: " + Arrays.toString(sa));
Arrays.sort(sa);
print("After sort: " + Arrays.toString(sa));
Arrays.sort(sa, Collections.reverseOrder());
print("Reverse sort: " + Arrays.toString(sa));
Arrays.sort(sa, String.CASE_INSENSITIVE_ORDER);
print("Case-insensitive sort: " + Arrays.toString(sa));
}
} /* Output:
Before sort: [YNzbr, nyGcF, OWZnT, cQrGs, eGZMm, JMRoE, suEcU, OneOE,
dLsmw, HLGEa, hKcxr, EqUCB, bkIna, Mesbt, WHkjU, rUkZP, gwsqP, zDyCy,
RFJQA, HxxHv]

3 Surprisingly, there was no support in Java 1.0 or 1.1 for sorting Strings.

After sort: [EqUCB, HLGEa, HxxHv, JMRoE, Mesbt, OWZnT, OneOE, RFJQA,
WHkjU, YNzbr, bkIna, cQrGs, dLsmw, eGZMm, gwsqP, hKcxr, nyGcF, rUkZP,
suEcU, zDyCy]
Reverse sort: [zDyCy, suEcU, rUkZP, nyGcF, hKcxr, gwsqP, eGZMm, dLsmw,
cQrGs, bkIna, YNzbr, WHkjU, RFJQA, OneOE, OWZnT, Mesbt, JMRoE, HxxHv,
HLGEa, EqUCB]
Case-insensitive sort: [bkIna, cQrGs, dLsmw, eGZMm, EqUCB, gwsqP, hKcxr,
HLGEa, HxxHv, JMRoE, Mesbt, nyGcF, OneOE, OWZnT, RFJQA, rUkZP, suEcU,
WHkjU, YNzbr, zDyCy]
*///:~
```
One thing you'll notice about the output in the String sorting algorithm is that it's
lexicographic, so it puts all the words starting with uppercase letters first, followed by all the
words starting with lowercase letters. (Telephone books are typically sorted this way.) If you
want to group the words together regardless of case, use
String.CASE_INSENSITIVE_ORDER as shown in the last call to sort( ) in the above
example.
The sorting algorithm that's used in the Java standard library is designed to be optimal for
the particular type you're sorting—a Quicksort for primitives, and a stable merge sort for
objects. You don't need to worry about performance unless your profiler points you to the
sorting process as a bottleneck.

Searching a sorted array
Once an array is sorted, you can perform a fast search for a particular item by using
Arrays.binarySearch( ). However, if you try to use binarySearchC ) on an unsorted
array the results will be unpredictable. The following example uses a
RandomGenerator.Integer to fill an array, and then uses the same generator to produce
search values:

```java
//: arrays/ArraySearching.java
// Using Arrays.binarySearch().
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class ArraySearching {
public static void main(String[] args) {
Generator<Integer> gen =
new RandomGenerator.Integer(1000);
int[] a = ConvertTo.primitive(
Generated.array(new Integer[25], gen));
Arrays.sort(a);
print("Sorted array: " + Arrays.toString(a));
while(true) {
int r = gen.next();
int location = Arrays.binarySearch(a, r);
if(location >= 0) {
print("Location of " + r + " is " + location +
", a[" + location + "] = " + a[location]);
break; // Out of while loop
}
}
}
} /* Output:
Sorted array: [128, 140, 200, 207, 258, 258, 278, 288, 322, 429, 511,
520, 522, 551, 555, 589, 693, 704, 809, 861, 861, 868, 916, 961, 998]
Arrays 561 

Location of 322 is 8, a[8] = 322
*///:~
```
In the while loop, random values are generated as search items until one of them is found.
Arrays.binarySearch( ) produces a value greater than or equal to zero if the search item is
found. Otherwise, it produces a negative value representing the place that the element should
be inserted if you are maintaining the sorted array by hand. The value produced is
-(insertion point) - 1
The insertion point is the index of the first element greater than the key, or a.size( ), if all
elements in the array are less than the specified key.
If an array contains duplicate elements, there is no guarantee which of those duplicates will
be found. The search algorithm is not designed to support duplicate elements, but rather to
tolerate them. If you need a sorted list of non-duplicated elements, use a TreeSet (to
maintain sorted order) or LinkedHashSet (to maintain insertion order). These classes take
care of all the details for you automatically. Only in cases of performance bottlenecks should
you replace one of these classes with a hand-maintained array.
If you sort an object array using a Comparator (primitive arrays do not allow sorting with a
Comparator), you must include that same Comparator when you perform a
binarySearch( ) (using the overloaded version of binarySearch( )). For example, the
StringSorting.java program can be modified to perform a search:

```java
//: arrays/AlphabeticSearch.java
// Searching with a Comparator.
import java.util.*;
import net.mindview.util.*;

public class AlphabeticSearch {
public static void main(String[] args) {
String[] sa = Generated.array(new String[30],
new RandomGenerator.String(5));
Arrays.sort(sa, String.CASE_INSENSITIVE_ORDER);
System.out.println(Arrays.toString(sa));
int index = Arrays.binarySearch(sa, sa[10],
String.CASE_INSENSITIVE_ORDER);
System.out.println("Index: "+ index + "\n"+ sa[index]);
}
} /* Output:
[bkIna, cQrGs, cXZJo, dLsmw, eGZMm, EqUCB, gwsqP, hKcxr, HLGEa, HqXum,
HxxHv, JMRoE, JmzMs, Mesbt, MNvqe, nyGcF, ogoYW, OneOE, OWZnT, RFJQA,
rUkZP, sgqia, slJrL, suEcU, uTpnX, vpfFv, WHkjU, xxEAJ, YNzbr, zDyCy]
Index: 10
HxxHv
*///:~
```
The Comparator must be passed to the overloaded binarySearch( ) as the third argument. In
this example, success is guaranteed because the search item is selected from the array itself.

Exercise 22: (2) Show that the results of performing a binarySearch( ) on an unsorted
array are unpredictable.

Exercise 23: (2) Create an array of Integer, fill it with random int values (using
autoboxing), and sort it into reverse order using a Comparator.


Exercise 24: (3) Show that the class from Exercise 19 can be searched.

Arrays 563 


## 🍀 Summary
In this chapter, you've seen that Java provides reasonable support for fixedsized, low-level
arrays. This sort of array emphasizes performance over flexibility, just like the C and C++
array model. In the initial version of Java, fixed-sized, low-level arrays were absolutely
necessary, not only because the Java designers chose to include primitive types (also for
performance), but because the support for containers in that version was very minimal. Thus,
in early versions of Java, it was always reasonable to choose arrays.
In subsequent versions of Java, container support improved significantly, and now
containers tend to outshine arrays in all ways except for performance, and even then, the
performance of containers has been significantly improved. As stated in other places in this
book, performance problems are usually never where you imagine them to be, anyway.
With the addition of autoboxing and generics, holding primitives in containers has become
effortless, which further encourages you to replace low-level arrays with containers. Because
generics produce type-safe containers, arrays no long have an advantage on that front, either.
As noted in this chapter and as you'll see when you try to use them, generics are fairly hostile
towards arrays. Often, even when you can get generics and arrays to work together in some
form (as you'll see in the next chapter), you'll still end up with "unchecked" warnings during
compilation.
On several occasions I have been told directly by Java language designers that I should be
using containers instead of arrays, when we were discussing particular examples (I was using
arrays to demonstrate specific techniques and so I did not have that option).
All of these issues indicate that you should "prefer containers to arrays" when programming
in recent versions of Java. Only when it's proven that performance is an issue (and that
switching to an array will make a difference) should you refactor to arrays.
This is a rather bold statement, but some languages have no fixed-sized, lowlevel arrays at all.
They only have resizable containers with significantly more functionality than C/C++/Java-
style arrays. Python, 4 for example, has a list type that uses basic array syntax, but has much
greater functionality—you can even inherit from it:
```py
#: arrays/PythonLists.py

aList = [1, 2, 3, 4, 5]
print type(aList) # <type 'list'>
print aList # [1, 2, 3, 4, 5]
print aList[4] # 5 Basic list indexing
aList.append(6) # lists can be resized
aList += [7, 8] # Add a list to a list
print aList # [1, 2, 3, 4, 5, 6, 7, 8]
aSlice = aList[2:4]
print aSlice # [3, 4]

class MyList(list): # Inherit from list
    # Define a method, 'this' pointer is explicit:
    def getReversed(self):
        reversed = self[:] # Copy list using slices
        reversed.reverse() # Built-in list method
        return reversed
list2 = MyList(aList) # No 'new' needed for object creation
print type(list2) # <class '__main__.MyList'>
print list2.getReversed() # [8, 7, 6, 5, 4, 3, 2, 1]
#:~
```

4 See www.Python.org.

Arrays 565 

Basic Python syntax was introduced in the previous chapter. Here, a list is created by simply
surrounding a comma-separated sequence of objects with square brackets. The result is an
object with a runtime type of list (the output of the print statements is shown as comments
on the same line). The result of printing a list is the same as that of using
Arrays.toString() in Java.
Creating a sub-sequence of a list is accomplished with "slicing," by placing the':' operator
inside the index operation. The list type has many more builtin operations.
MyList is a class definition; the base classes are placed within the parentheses. Inside the
class, def statements produce methods, and the first argument to the method is
automatically the equivalent of this in Java, except that in Python it's explicit and the
identifier self is used by convention (it's not a keyword). Notice how the constructor is
automatically inherited.
Although everything in Python really is an object (including integral and floating point
types), you still have an escape hatch in that you can optimize performance-critical portions
of your code by writing extensions in C, C++ or a special tool called Pyrex, which is designed
to easily speed up your code. This way you can have object purity without being prevented
from performance improvements.
The PHP language 5 goes even further by having only a single array type, which acts as both
an int-indexed array and an associative array (a Map).
It's interesting to speculate, after this many years of Java evolution, whether the designers
would put primitives and low-level arrays in the language if they were to start over again. If
these were left out, it would be possible to make a truly pure object-oriented language
(despite claims, Java is not a pure 0 0 language, precisely because of the low-level detritus).
The initial argument for efficiency always seems compelling, but over time we have seen an
evolution away from this idea and towards the use of higher-level components like
containers. Add to this the fact that if containers can be built into the core language as they
are in some languages, then the compiler has a much better opportunity to optimize.
Green-fields speculation aside, we are certainly stuck with arrays, and you will see them
when reading code. Containers, however, are almost always a better choice.

Exercise 25: (3) Rewrite PythonLists.py in Java.
Solutions to selected exercises can be found in the electronic document The Thinking in Java Annotated Solution Guide,
available for sale from www.MindView.net.

5 See www.php.net.


# 📜 19. Containers in Depth
The Holding Your Objects chapter introduced the ideas and basic
functionality of the Java containers library, and is enough to get you
started using containers. This chapter explores this important library
more deeply.
In order to get full use of the containers library, you need to know more than what was
introduced in Holding Your Objects, but this chapter relies on advanced material (like
generics) so it was delayed until later in the book.
After a more complete overview of containers, you'll learn how hashing works, and how to
write hashCode( ) and equals( ) to work with hashed containers. You'll learn why there
are different versions of some containers and how to choose between them. The chapter
finishes with an exploration of general-purpose utilities and special classes.
Full container taxonomy
The "Summary" section of the Holding Your Objects chapter showed a simplified diagram of
the Java containers library. Here is a more complete diagram of the collections library,
including abstract classes and legacy components (with the exception of Queue
implementations):

Full Container Taxonomy


Java SE5 adds:
• The Queue interface (which LinkedList has been modified to implement, as you
saw in Holding Your Objects) and its implementations PriorityQueue and various
flavors of BlockingQueue that will be shown in the Concurrency chapter.

• A ConcurrentMap interface and its implementation ConcurrentHashMap, also
for use in threading and shown in the Concurrency chapter.

• CopyOnWriteArrayList and CopyOnWriteArraySet, also for concurrency.

• EnumSet and EnumMap, special implementations of Set and Map for use with
enums, and shown in the Enumerated Types chapter.

• Several utilities in the Collections class.

The long-dashed boxes represent abstract classes, and you can see a number of classes
whose names begin with "Abstract." These can seem a bit confusing at first, but they are
simply tools that partially implement a particular interface. If you were making your own
Set, for example, you wouldn't start with the Set interface and implement all the methods;
instead, you'd inherit from AbstractSet and do the minimal necessary work to make your
new class. However, the containers library contains enough functionality to satisfy your
needs virtually all the time, so you can usually ignore any class that begins with "Abstract."
Filling containers
Although the problem of printing containers is solved, filling containers suffers from the
same deficiency as java.utiLArrays. Just as with Arrays, there is a companion class called
Collections containing static utility methods, including one called fill( ). Like the Arrays
version, this fill( ) just duplicates a single object reference throughout the container. In
addition, it only works for List objects, but the resulting list can be passed to a constructor or
to an addAll( ) method:

```java
//: containers/FillingLists.java
// The Collections.fill() & Collections.nCopies() methods.
import java.util.*;

class StringAddress {
private String s;
public StringAddress(String s) { this.s = s; }
public String toString() {
return super.toString() + " " + s;
}
}

public class FillingLists {
public static void main(String[] args) {
List<StringAddress> list= new ArrayList<StringAddress>(
Collections.nCopies(4, new StringAddress("Hello")));
System.out.println(list);
Collections.fill(list, new StringAddress("World!"));
System.out.println(list);
}
} /* Output: (Sample)
[StringAddress@82ba41 Hello, StringAddress@82ba41 Hello,
StringAddress@82ba41 Hello, StringAddress@82ba41 Hello]
[StringAddress@923e30 World!, StringAddress@923e30 World!,
StringAddress@923e30 World!, StringAddress@923e30 World!]
*///:~
```

Containers in Depth 569 
This example shows two ways to fill a Collection with references to a single object. The first,
Collections.nCopies( ), creates a List which is passed to the constructor; this fills the
ArrayList.
The toString( ) method in StringAddress calls Object.toString( ), which produces the
class name followed by the unsigned hexadecimal representation of the hash code of the
object (generated by the hashCode( ) method). You can see from the output that all the
references are set to the same object, and this is also true after the second method,
Collections.fill( ), is called. The fill( ) method is made even less useful by the fact that it
can only replace elements that are already in the List and will not add new elements.
A Generator solution
Virtually all Collection subtypes have a constructor that takes another Collection object,
from which it can fill the new container. In order to easily create test data, then, all we need
to do is build a class that takes constructor arguments of a Generator (defined in the
Generics chapter and further explored in the Arrays chapter) and a quantity value:

```java
//: net/mindview/util/CollectionData.java
// A Collection filled with data using a generator object.
package net.mindview.util;
import java.util.*;

public class CollectionData<T> extends ArrayList<T> {
public CollectionData(Generator<T> gen, int quantity) {
for(int i = 0; i < quantity; i++)
add(gen.next());
}
// A generic convenience method:
public static <T> CollectionData<T>
list(Generator<T> gen, int quantity) {
return new CollectionData<T>(gen, quantity);
}
} ///:~
```
This uses the Generator to put as many objects into the container as you need. The
resulting container can then be passed to the constructor for any Collection, and that
constructor will copy the data into itself. The addAll( ) method that's part of every
Collection subtype can also be used to populate an existing Collection.
The generic convenience method reduces the amount of typing necessary when using the
class.
CollectionData is an example of the Adapter design pattern; 1 it adapts a Generator to the
constructor for a Collection.
Here's an example that initializes a LinkedHashSet:

```java
//: containers/CollectionDataTest.java
import java.util.*;
import net.mindview.util.*;

class Government implements Generator<String> {
String[] foundation = ("strange women lying in ponds " +
"distributing swords is no basis for a system of " +

1 This may not be a strict definition of adapter as defined in the Design Patterns book, but I think it meets the spirit of the
idea.

"government").split(" ");
private int index;
public String next() { return foundation[index++]; }
}

public class CollectionDataTest {
public static void main(String[] args) {
Set<String> set = new LinkedHashSet<String>(
new CollectionData<String>(new Government(), 15));
// Using the convenience method:
set.addAll(CollectionData.list(new Government(), 15));
System.out.println(set);
}
} /* Output:
[strange, women, lying, in, ponds, distributing, swords, is, no, basis,
for, a, system, of, government]
*///:~
```
The elements are in the same order in which they are inserted because a LinkedHashSet
maintains a linked list holding the insertion order.
All the generators defined in the Arrays chapter are now available via the CollectionData
adapter. Here's an example that uses two of them:

```java
//: containers/CollectionDataGeneration.java
// Using the Generators defined in the Arrays chapter.
import java.util.*;
import net.mindview.util.*;

public class CollectionDataGeneration {
public static void main(String[] args) {
System.out.println(new ArrayList<String>(
CollectionData.list( // Convenience method
new RandomGenerator.String(9), 10)));
System.out.println(new HashSet<Integer>(
new CollectionData<Integer>(
new RandomGenerator.Integer(), 10)));
}
} /* Output:
[YNzbrnyGc, FOWZnTcQr, GseGZMmJM, RoEsuEcUO, neOEdLsmw, HLGEahKcx,
rEqUCBbkI, naMesbtWH, kjUrUkZPg, wsqPzDyCy]
[573, 4779, 871, 4367, 6090, 7882, 2017, 8037, 3455, 299]
*///:~
```
The String length produced by RandomGenerator.String is controlled by the
constructor argument.
Map generators
We can take the same approach for a Map, but that requires a Pair class since a pair of
objects (one key and one value) must be produced by each call to a Generator's next( ) in
order to populate a Map:

```java
//: net/mindview/util/Pair.java
package net.mindview.util;

public class Pair<K,V> {
public final K key;
public final V value;
public Pair(K k, V v) {

key = k;
value = v;
}
} ///:~
```
The key and value fields are made public and final so that Pair becomes a read-only Data
Transfer Object (or Messenger).
The Map adapter can now use various combinations of Generators, Iterables, and
constant values to fill Map initialization objects:

```java
//: net/mindview/util/MapData.java
// A Map filled with data using a generator object.
package net.mindview.util;
import java.util.*;

public class MapData<K,V> extends LinkedHashMap<K,V> {
// A single Pair Generator:
public MapData(Generator<Pair<K,V>> gen, int quantity) {
for(int i = 0; i < quantity; i++) {
Pair<K,V> p = gen.next();
put(p.key, p.value);
}
}
// Two separate Generators:
public MapData(Generator<K> genK, Generator<V> genV,
int quantity) {
for(int i = 0; i < quantity; i++) {
put(genK.next(), genV.next());
}
}
// A key Generator and a single value:
public MapData(Generator<K> genK, V value, int quantity){
for(int i = 0; i < quantity; i++) {
put(genK.next(), value);
}
}
// An Iterable and a value Generator:
public MapData(Iterable<K> genK, Generator<V> genV) {
for(K key : genK) {
put(key, genV.next());
}
}
// An Iterable and a single value:
public MapData(Iterable<K> genK, V value) {
for(K key : genK) {
put(key, value);
}
}
// Generic convenience methods:
public static <K,V> MapData<K,V>
map(Generator<Pair<K,V>> gen, int quantity) {
return new MapData<K,V>(gen, quantity);
}
public static <K,V> MapData<K,V>
map(Generator<K> genK, Generator<V> genV, int quantity) {
return new MapData<K,V>(genK, genV, quantity);
}
public static <K,V> MapData<K,V>
map(Generator<K> genK, V value, int quantity) {
return new MapData<K,V>(genK, value, quantity);
}
Containers in Depth 571 

public static <K,V> MapData<K,V>
map(Iterable<K> genK, Generator<V> genV) {
return new MapData<K,V>(genK, genV);
}
public static <K,V> MapData<K,V>
map(Iterable<K> genK, V value) {
return new MapData<K,V>(genK, value);
}
} ///:~
```
This gives you a choice of using a single Generator<Pair<K,V> >, two separate
Generators, one Generator and a constant value, an Iterable (which includes any
Collection) and a Generator, or an Iterable and a single value. The generic convenience
methods reduce the amount of typing necessary when creating a MapData object.
Here's an example using MapData. The Letters Generator also implements Iterable by
producing an Iterator; this way, it can be used to test the MapData.map( ) methods that
work with an Iterable:

```java
//: containers/MapDataTest.java
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

class Letters implements Generator<Pair<Integer,String>>,
Iterable<Integer> {
private int size = 9;
private int number = 1;
private char letter = 'A';
public Pair<Integer,String> next() {
return new Pair<Integer,String>(
number++, "" + letter++);
}
public Iterator<Integer> iterator() {
return new Iterator<Integer>() {
public Integer next() { return number++; }
public boolean hasNext() { return number < size; }
public void remove() {
throw new UnsupportedOperationException();
}
};
}
}

public class MapDataTest {
public static void main(String[] args) {
// Pair Generator:
print(MapData.map(new Letters(), 11));
// Two separate generators:
print(MapData.map(new CountingGenerator.Character(),
new RandomGenerator.String(3), 8));
// A key Generator and a single value:
print(MapData.map(new CountingGenerator.Character(),
"Value", 6));
// An Iterable and a value Generator:
print(MapData.map(new Letters(),
new RandomGenerator.String(3)));
// An Iterable and a single value:
print(MapData.map(new Letters(), "Pop"));
}
} /* Output:
{1=A, 2=B, 3=C, 4=D, 5=E, 6=F, 7=G, 8=H, 9=I, 10=J, 11=K}

Containers in Depth 573 
{a=YNz, b=brn, c=yGc, d=FOW, e=ZnT, f=cQr, g=Gse, h=GZM}
{a=Value, b=Value, c=Value, d=Value, e=Value, f=Value}
{1=mJM, 2=RoE, 3=suE, 4=cUO, 5=neO, 6=EdL, 7=smw, 8=HLG}
{1=Pop, 2=Pop, 3=Pop, 4=Pop, 5=Pop, 6=Pop, 7=Pop, 8=Pop}
*///:~
```
This example also uses the generators from the Arrays chapter.
You can create any generated data set for Maps or Collections using these tools, and then
initialize a Map or Collection using the constructor or the Map.putAll( ) or
Collection.addAll( ) methods.
Using Abstract classes
An alternative approach to the problem of producing test data for containers is to create
custom Collection and Map implementations. Each java.util container has its own
Abstract class that provides a partial implementation of that container, so all you must do is
implement the necessary methods in order to produce the desired container. If the resulting
container is read-only, as it typically is for test data, the number of methods you need to
provide is minimized.
Although it isn't particularly necessary in this case, the following solution also provides the
opportunity to demonstrate another design pattern: the Flyweight. You use a flyweight when
the ordinary solution requires too many objects, or when producing normal objects takes up
too much space. The Flyweight pattern externalizes part of the object so that, instead of
everything in the object being contained within the object, some or all of the object is looked
up in a more efficient external table (or produced through some other calculation that saves
space).
An important point of this example is to demonstrate how relatively simple it is to create a
custom Map and Collection by inheriting from the java.util.Abstract classes. In order to
create a read-only Map, you inherit from AbstractMap and implement entrySet( ). In
order to create a readonly Set, you inherit from AbstractSet and implement iterator( )
and size( ).
The data set in this example is a Map of the countries of the world and their capitals. 2 The
capitals( ) method produces a Map of countries and capitals. The names( ) method
produces a List of the country names. In both cases you can get a partial listing by providing
an int argument indicating the desired size:

```java
//: net/mindview/util/Countries.java
// "Flyweight" Maps and Lists of sample data.
package net.mindview.util;
import java.util.*;
import static net.mindview.util.Print.*;

public class Countries {
public static final String[][] DATA = {
// Africa
{"ALGERIA","Algiers"}, {"ANGOLA","Luanda"},
{"BENIN","Porto-Novo"}, {"BOTSWANA","Gaberone"},
{"BURKINA FASO","Ouagadougou"},
{"BURUNDI","Bujumbura"},
{"CAMEROON","Yaounde"}, {"CAPE VERDE","Praia"},
{"CENTRAL AFRICAN REPUBLIC","Bangui"},
{"CHAD","N'djamena"}, {"COMOROS","Moroni"},

2 This data was found on the Internet. Various corrections have been submitted by readers over time.

{"CONGO","Brazzaville"}, {"DJIBOUTI","Dijibouti"},
{"EGYPT","Cairo"}, {"EQUATORIAL GUINEA","Malabo"},
{"ERITREA","Asmara"}, {"ETHIOPIA","Addis Ababa"},
{"GABON","Libreville"}, {"THE GAMBIA","Banjul"},
{"GHANA","Accra"}, {"GUINEA","Conakry"},
{"BISSAU","Bissau"},
{"COTE D'IVOIR (IVORY COAST)","Yamoussoukro"},
{"KENYA","Nairobi"}, {"LESOTHO","Maseru"},
{"LIBERIA","Monrovia"}, {"LIBYA","Tripoli"},
{"MADAGASCAR","Antananarivo"}, {"MALAWI","Lilongwe"},
{"MALI","Bamako"}, {"MAURITANIA","Nouakchott"},
{"MAURITIUS","Port Louis"}, {"MOROCCO","Rabat"},
{"MOZAMBIQUE","Maputo"}, {"NAMIBIA","Windhoek"},
{"NIGER","Niamey"}, {"NIGERIA","Abuja"},
{"RWANDA","Kigali"},
{"SAO TOME E PRINCIPE","Sao Tome"},
{"SENEGAL","Dakar"}, {"SEYCHELLES","Victoria"},
{"SIERRA LEONE","Freetown"}, {"SOMALIA","Mogadishu"},
{"SOUTH AFRICA","Pretoria/Cape Town"},
{"SUDAN","Khartoum"},
{"SWAZILAND","Mbabane"}, {"TANZANIA","Dodoma"},
{"TOGO","Lome"}, {"TUNISIA","Tunis"},
{"UGANDA","Kampala"},
{"DEMOCRATIC REPUBLIC OF THE CONGO (ZAIRE)",
"Kinshasa"},
{"ZAMBIA","Lusaka"}, {"ZIMBABWE","Harare"},
// Asia
{"AFGHANISTAN","Kabul"}, {"BAHRAIN","Manama"},
{"BANGLADESH","Dhaka"}, {"BHUTAN","Thimphu"},
{"BRUNEI","Bandar Seri Begawan"},
{"CAMBODIA","Phnom Penh"},
{"CHINA","Beijing"}, {"CYPRUS","Nicosia"},
{"INDIA","New Delhi"}, {"INDONESIA","Jakarta"},
{"IRAN","Tehran"}, {"IRAQ","Baghdad"},
{"ISRAEL","Jerusalem"}, {"JAPAN","Tokyo"},
{"JORDAN","Amman"}, {"KUWAIT","Kuwait City"},
{"LAOS","Vientiane"}, {"LEBANON","Beirut"},
{"MALAYSIA","Kuala Lumpur"}, {"THE MALDIVES","Male"},
{"MONGOLIA","Ulan Bator"},
{"MYANMAR (BURMA)","Rangoon"},
{"NEPAL","Katmandu"}, {"NORTH KOREA","P'yongyang"},
{"OMAN","Muscat"}, {"PAKISTAN","Islamabad"},
{"PHILIPPINES","Manila"}, {"QATAR","Doha"},
{"SAUDI ARABIA","Riyadh"}, {"SINGAPORE","Singapore"},
{"SOUTH KOREA","Seoul"}, {"SRI LANKA","Colombo"},
{"SYRIA","Damascus"},
{"TAIWAN (REPUBLIC OF CHINA)","Taipei"},
{"THAILAND","Bangkok"}, {"TURKEY","Ankara"},
{"UNITED ARAB EMIRATES","Abu Dhabi"},
{"VIETNAM","Hanoi"}, {"YEMEN","Sana'a"},
// Australia and Oceania
{"AUSTRALIA","Canberra"}, {"FIJI","Suva"},
{"KIRIBATI","Bairiki"},
{"MARSHALL ISLANDS","Dalap-Uliga-Darrit"},
{"MICRONESIA","Palikir"}, {"NAURU","Yaren"},
{"NEW ZEALAND","Wellington"}, {"PALAU","Koror"},
{"PAPUA NEW GUINEA","Port Moresby"},
{"SOLOMON ISLANDS","Honaira"}, {"TONGA","Nuku'alofa"},
{"TUVALU","Fongafale"}, {"VANUATU","< Port-Vila"},
{"WESTERN SAMOA","Apia"},
// Eastern Europe and former USSR
{"ARMENIA","Yerevan"}, {"AZERBAIJAN","Baku"},
{"BELARUS (BYELORUSSIA)","Minsk"},

{"BULGARIA","Sofia"}, {"GEORGIA","Tbilisi"},
{"KAZAKSTAN","Almaty"}, {"KYRGYZSTAN","Alma-Ata"},
{"MOLDOVA","Chisinau"}, {"RUSSIA","Moscow"},
{"TAJIKISTAN","Dushanbe"}, {"TURKMENISTAN","Ashkabad"},
{"UKRAINE","Kyiv"}, {"UZBEKISTAN","Tashkent"},
// Europe
{"ALBANIA","Tirana"}, {"ANDORRA","Andorra la Vella"},
{"AUSTRIA","Vienna"}, {"BELGIUM","Brussels"},
{"BOSNIA","-"}, {"HERZEGOVINA","Sarajevo"},
{"CROATIA","Zagreb"}, {"CZECH REPUBLIC","Prague"},
{"DENMARK","Copenhagen"}, {"ESTONIA","Tallinn"},
{"FINLAND","Helsinki"}, {"FRANCE","Paris"},
{"GERMANY","Berlin"}, {"GREECE","Athens"},
{"HUNGARY","Budapest"}, {"ICELAND","Reykjavik"},
{"IRELAND","Dublin"}, {"ITALY","Rome"},
{"LATVIA","Riga"}, {"LIECHTENSTEIN","Vaduz"},
{"LITHUANIA","Vilnius"}, {"LUXEMBOURG","Luxembourg"},
{"MACEDONIA","Skopje"}, {"MALTA","Valletta"},
{"MONACO","Monaco"}, {"MONTENEGRO","Podgorica"},
{"THE NETHERLANDS","Amsterdam"}, {"NORWAY","Oslo"},
{"POLAND","Warsaw"}, {"PORTUGAL","Lisbon"},
{"ROMANIA","Bucharest"}, {"SAN MARINO","San Marino"},
{"SERBIA","Belgrade"}, {"SLOVAKIA","Bratislava"},
{"SLOVENIA","Ljuijana"}, {"SPAIN","Madrid"},
{"SWEDEN","Stockholm"}, {"SWITZERLAND","Berne"},
{"UNITED KINGDOM","London"}, {"VATICAN CITY","---"},
// North and Central America
{"ANTIGUA AND BARBUDA","Saint John's"},
{"BAHAMAS","Nassau"},
{"BARBADOS","Bridgetown"}, {"BELIZE","Belmopan"},
{"CANADA","Ottawa"}, {"COSTA RICA","San Jose"},
{"CUBA","Havana"}, {"DOMINICA","Roseau"},
{"DOMINICAN REPUBLIC","Santo Domingo"},
{"EL SALVADOR","San Salvador"},
{"GRENADA","Saint George's"},
{"GUATEMALA","Guatemala City"},
{"HAITI","Port-au-Prince"},
{"HONDURAS","Tegucigalpa"}, {"JAMAICA","Kingston"},
{"MEXICO","Mexico City"}, {"NICARAGUA","Managua"},
{"PANAMA","Panama City"}, {"ST. KITTS","-"},
{"NEVIS","Basseterre"}, {"ST. LUCIA","Castries"},
{"ST. VINCENT AND THE GRENADINES","Kingstown"},
{"UNITED STATES OF AMERICA","Washington, D.C."},
// South America
{"ARGENTINA","Buenos Aires"},
{"BOLIVIA","Sucre (legal)/La Paz(administrative)"},
{"BRAZIL","Brasilia"}, {"CHILE","Santiago"},
{"COLOMBIA","Bogota"}, {"ECUADOR","Quito"},
{"GUYANA","Georgetown"}, {"PARAGUAY","Asuncion"},
{"PERU","Lima"}, {"SURINAME","Paramaribo"},
{"TRINIDAD AND TOBAGO","Port of Spain"},
{"URUGUAY","Montevideo"}, {"VENEZUELA","Caracas"},
};
// Use AbstractMap by implementing entrySet()
private static class FlyweightMap
extends AbstractMap<String,String> {
private static class Entry
implements Map.Entry<String,String> {
int index;
Entry(int index) { this.index = index; }
public boolean equals(Object o) {
return DATA[index][0].equals(o);
}
Containers in Depth 575 

public String getKey() { return DATA[index][0]; }
public String getValue() { return DATA[index][1]; }
public String setValue(String value) {
throw new UnsupportedOperationException();
}
public int hashCode() {
return DATA[index][0].hashCode();
}
}
// Use AbstractSet by implementing size() & iterator()
static class EntrySet
extends AbstractSet<Map.Entry<String,String>> {
private int size;
EntrySet(int size) {
if(size < 0)
this.size = 0;
// Can't be any bigger than the array:
else if(size > DATA.length)
this.size = DATA.length;
else
this.size = size;
}
public int size() { return size; }
private class Iter
implements Iterator<Map.Entry<String,String>> {
// Only one Entry object per Iterator:
private Entry entry = new Entry(-1);
public boolean hasNext() {
return entry.index < size - 1;
}
public Map.Entry<String,String> next() {
entry.index++;
return entry;
}
public void remove() {
throw new UnsupportedOperationException();
}
}
public
Iterator<Map.Entry<String,String>> iterator() {
return new Iter();
}
}
private static Set<Map.Entry<String,String>> entries =
new EntrySet(DATA.length);
public Set<Map.Entry<String,String>> entrySet() {
return entries;
}
}
// Create a partial map of 'size' countries:
static Map<String,String> select(final int size) {
return new FlyweightMap() {
public Set<Map.Entry<String,String>> entrySet() {
return new EntrySet(size);
}
};
}
static Map<String,String> map = new FlyweightMap();
public static Map<String,String> capitals() {
return map; // The entire map
}
public static Map<String,String> capitals(int size) {
return select(size); // A partial map

Containers in Depth 577 
}
static List<String> names =
new ArrayList<String>(map.keySet());
// All the names:
public static List<String> names() { return names; }
// A partial list:
public static List<String> names(int size) {
return new ArrayList<String>(select(size).keySet());
}
public static void main(String[] args) {
print(capitals(10));
print(names(10));
print(new HashMap<String,String>(capitals(3)));
print(new LinkedHashMap<String,String>(capitals(3)));
print(new TreeMap<String,String>(capitals(3)));
print(new Hashtable<String,String>(capitals(3)));
print(new HashSet<String>(names(6)));
print(new LinkedHashSet<String>(names(6)));
print(new TreeSet<String>(names(6)));
print(new ArrayList<String>(names(6)));
print(new LinkedList<String>(names(6)));
print(capitals().get("BRAZIL"));
}
} /* Output:
{ALGERIA=Algiers, ANGOLA=Luanda, BENIN=Porto-Novo, BOTSWANA=Gaberone,
BULGARIA=Sofia, BURKINA FASO=Ouagadougou, BURUNDI=Bujumbura,
CAMEROON=Yaounde, CAPE VERDE=Praia, CENTRAL AFRICAN REPUBLIC=Bangui}
[ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO, BURUNDI,
CAMEROON, CAPE VERDE, CENTRAL AFRICAN REPUBLIC]
{BENIN=Porto-Novo, ANGOLA=Luanda, ALGERIA=Algiers}
{ALGERIA=Algiers, ANGOLA=Luanda, BENIN=Porto-Novo}
{ALGERIA=Algiers, ANGOLA=Luanda, BENIN=Porto-Novo}
{ALGERIA=Algiers, ANGOLA=Luanda, BENIN=Porto-Novo}
[BULGARIA, BURKINA FASO, BOTSWANA, BENIN, ANGOLA, ALGERIA]
[ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
[ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
[ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
[ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
Brasilia
*///:~
```
The two-dimensional array of String DATA is public so it can be used elsewhere.
FlyweightMap must implement the entrySet( ) method, which requires both a custom
Set implementation and a custom Map.Entry class. Here's part of the flyweight: each
Map.Entry object simply stores its index, rather than the actual key and value. When you
call getKey( ) or getValue( ), it uses the index to return the appropriate DATA element.
The EntrySet ensures that its size is no bigger than DATA.
You can see the other part of the flyweight implemented in EntrySet.Iterator. Instead of
creating a Map.Entry object for each data pair in DATA, there's only one Map.Entry
object per iterator. The Entry object is used as a window into the data; it only contains an
index into the static array of strings. Every time you call next( ) for the iterator, the index
in the Entry is incremented so that it points to the next element pair, and then that
Iterator's single Entry object is returned from next( ). 3
The select( ) method produces a FlyweightMap containing an EntrySet of the desired
size, and this is used in the overloaded capitals( ) and names( ) methods that you see
demonstrated in main( ).

3 The Maps in java.util perform bulk copies using getKey( ) and getValue( ) for Maps, so this works. If a custom Map
were to simply copy the entire Map.Entry then this approach would cause a problem.

For some tests, the limited size of Countries is a problem. We can take the same approach
to produce initialized custom containers that have a data set of any size. This class is a List
that can be any size, and is (effectively) preinitialized with Integer data:

```java
//: net/mindview/util/CountingIntegerList.java
// List of any length, containing sample data.
package net.mindview.util;
import java.util.*;

public class CountingIntegerList
extends AbstractList<Integer> {
private int size;
public CountingIntegerList(int size) {
this.size = size < 0 ? 0 : size;
}
public Integer get(int index) {
return Integer.valueOf(index);
}
public int size() { return size; }
public static void main(String[] args) {
System.out.println(new CountingIntegerList(30));
}
} /* Output:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
*///:~
```
To create a read-only List from an AbstractList, you must implement get( ) and size( ).
Again, a flyweight solution is used: get( ) produces the value when you ask for it, so the List
doesn't actually have to be populated.
Here is a Map containing pre-initialized unique Integers and Strings; it can also be any size:

```java
//: net/mindview/util/CountingMapData.java
// Unlimited-length Map containing sample data.
package net.mindview.util;
import java.util.*;

public class CountingMapData
extends AbstractMap<Integer,String> {
private int size;
private static String[] chars =
"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
.split(" ");
public CountingMapData(int size) {
if(size < 0) this.size = 0;
this.size = size;
}
private static class Entry
implements Map.Entry<Integer,String> {
int index;
Entry(int index) { this.index = index; }
public boolean equals(Object o) {
return Integer.valueOf(index).equals(o);
}
public Integer getKey() { return index; }
public String getValue() {
return
chars[index % chars.length] +
Integer.toString(index / chars.length);
}
public String setValue(String value) {

throw new UnsupportedOperationException();
}
public int hashCode() {
return Integer.valueOf(index).hashCode();
}
}
public Set<Map.Entry<Integer,String>> entrySet() {
// LinkedHashSet retains initialization order:
Set<Map.Entry<Integer,String>> entries =
new LinkedHashSet<Map.Entry<Integer,String>>();
for(int i = 0; i < size; i++)
entries.add(new Entry(i));
return entries;
}
public static void main(String[] args) {
System.out.println(new CountingMapData(60));
}
} /* Output:
{0=A0, 1=B0, 2=C0, 3=D0, 4=E0, 5=F0, 6=G0, 7=H0, 8=I0, 9=J0, 10=K0,
11=L0, 12=M0, 13=N0, 14=O0, 15=P0, 16=Q0, 17=R0, 18=S0, 19=T0, 20=U0,
21=V0, 22=W0, 23=X0, 24=Y0, 25=Z0, 26=A1, 27=B1, 28=C1, 29=D1, 30=E1,
31=F1, 32=G1, 33=H1, 34=I1, 35=J1, 36=K1, 37=L1, 38=M1, 39=N1, 40=O1,
41=P1, 42=Q1, 43=R1, 44=S1, 45=T1, 46=U1, 47=V1, 48=W1, 49=X1, 50=Y1,
51=Z1, 52=A2, 53=B2, 54=C2, 55=D2, 56=E2, 57=F2, 58=G2, 59=H2}
*///:~
```
Here, a LinkedHashSet is used instead of creating a custom Set class, so the flyweight is
not fully implemented.

Exercise 1: (1) Create a List (try both ArrayList and LinkedList) and fill it using
Countries. Sort the list and print it, then apply Collections.shuffle( ) to the list
repeatedly, printing it each time so that you can see how the shuffle( ) method randomizes
the list differently each time.

Exercise 2: (2) Produce a Map and a Set containing all the countries that begin with 'A'.

Exercise 3: (1) Using Countries, fill a Set multiple times with the same data and verify
that the Set ends up with only one of each instance. Try this with HashSet,
LinkedHashSet, and TreeSet.

Exercise 4: (2) Create a Collection initializer that opens a file and breaks it into words
using TextFile, and then uses the words as the source of data for the resulting Collection.
Demonstrate that it works.

Exercise 5: (3) Modify CountingMapData.java to fully implement the flyweight by
adding a custom EntrySet class like the one in Countries.java.

Containers in Depth 579 

Collection functionality
The following table shows everything you can do with a Collection (not including the
methods that automatically come through with Object), and thus, everything you can do
with a Set or a List. (List also has additional functionality.) Maps are not inherited from
Collection and will be treated separately.
boolean add(T) Ensures that the container holds the
argument which is of generic type T.
Returns false if it doesn't add the
argument. (This is an "optional" method,
described in the next section.)
boolean addAll(
Collection<? extends T>)
Adds all the elements in the argument.
Returns true if any elements were
added. ("Optional.")
void clear( ) Removes all the elements in the
container. ("Optional.")
boolean contains (T) true if the container holds the argument
which is of generic type T.
Boolean containsAll(
Collection<?>)
true if the container holds all the
elements in the argument.
boolean isEmpty( ) true if the container has no elements.
Iterator<T> iterator( ) Returns an Iterator<T> that you can
use to move through the elements in the
container.
Boolean
remove(Object)
If the argument is in the container, one
instance of that element is removed.
Returns true if a removal occurred.
("Optional")
boolean removeAll(
Collection<?>)
Removes all the elements that are
contained in the argument. Returns true
if any removals occurred. ("Optional.")
Boolean retainAll(
Collection<?>)
Retains only elements that are contained
in the argument (an "intersection," from
set theory). Returns true if any changes
occurred. ("Optional.")
int size( ) Returns the number of elements in the
container.
Object[] toArray( ) Returns an array containing all the
elements in the container.
<T>T[] toArray(T[] a) Returns an array containing all the
elements in the container. The runtime
type of the result is that of the argument
array a rather than plain Object.
Notice that there's no get( ) method for random-access element selection. That's because
Collection also includes Set, which maintains its own internal ordering (and thus makes
random-access lookup meaningless). Thus, if you want to examine the elements of a
Collection, you must use an iterator.

The following example demonstrates all of these methods. Although these methods work
with anything that implements Collection, an ArrayList is used as a "least-common
denominator":

```java
//: containers/CollectionMethods.java
// Things you can do with all Collections.
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class CollectionMethods {
public static void main(String[] args) {
Collection<String> c = new ArrayList<String>();
c.addAll(Countries.names(6));
c.add("ten");
c.add("eleven");
print(c);
// Make an array from the List:
Object[] array = c.toArray();
// Make a String array from the List:
String[] str = c.toArray(new String[0]);
// Find max and min elements; this means
// different things depending on the way
// the Comparable interface is implemented:
print("Collections.max(c) = " + Collections.max(c));
print("Collections.min(c) = " + Collections.min(c));
// Add a Collection to another Collection
Collection<String> c2 = new ArrayList<String>();
c2.addAll(Countries.names(6));
c.addAll(c2);
print(c);
c.remove(Countries.DATA[0][0]);
print(c);
c.remove(Countries.DATA[1][0]);
print(c);
// Remove all components that are
// in the argument collection:
c.removeAll(c2);
print(c);
c.addAll(c2);
print(c);
// Is an element in this Collection?
String val = Countries.DATA[3][0];
print("c.contains(" + val + ") = " + c.contains(val));
// Is a Collection in this Collection?
print("c.containsAll(c2) = " + c.containsAll(c2));
Collection<String> c3 =
((List<String>)c).subList(3, 5);
// Keep all the elements that are in both
// c2 and c3 (an intersection of sets):
c2.retainAll(c3);
print(c2);
// Throw away all the elements
// in c2 that also appear in c3:
c2.removeAll(c3);
print("c2.isEmpty() = " + c2.isEmpty());
c = new ArrayList<String>();
c.addAll(Countries.names(6));
print(c);
c.clear(); // Remove all elements
print("after c.clear():" + c);
}
} /* Output:
Containers in Depth 581 

[ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO, ten, eleven]
Collections.max(c) = ten
Collections.min(c) = ALGERIA
[ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO, ten, eleven,
ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
[ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO, ten, eleven, ALGERIA,
ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
[BENIN, BOTSWANA, BULGARIA, BURKINA FASO, ten, eleven, ALGERIA, ANGOLA,
BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
[ten, eleven]
[ten, eleven, ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
c.contains(BOTSWANA) = true
c.containsAll(c2) = true
[ANGOLA, BENIN]
c2.isEmpty() = true
[ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
after c.clear():[]
*///:~
```
ArrayLists are created containing different sets of data and upcast to Collection objects,
so it's clear that nothing other than the Collection interface is being used. main( ) uses
simple exercises to show all of the methods in Collection.
Subsequent sections in this chapter describe the various implementations of List, Set, and
Map and indicate in each case (with an asterisk) which one should be your default choice.
Descriptions of the legacy classes Vector, Stack, and Hashtable are delayed to the end of
the chapter—although you shouldn't use these classes, you will see them in old code.
Optional operations
The methods that perform various kinds of addition and removal are optional operations in
the Collection interface. This means that the implementing class is not required to provide
functioning definitions for these methods.
This is a very unusual way to define an interface. As you've seen, an interface is a contract in
object-oriented design. It says, "No matter how you choose to implement this interface, I
guarantee that you can send these messages to this object." 4 But an "optional" operation
violates this very fundamental principle; it says that calling some methods will nor perform
meaningful behavior. Instead, they will throw exceptions! It appears that compile-time type
safety is discarded.
It's not quite that bad. If an operation is optional, the compiler still restricts you to calling
only the methods in that interface. It's not like a dynamic language, in which you can call any
method for any object, and find out at run time whether a particular call will work. 5 In
addition, most methods that take a Collection as an argument only read from that
Collection, and all the "read" methods of Collection are not optional.
Why would you define methods as "optional"? Doing so prevents an explosion of interfaces in
the design. Other designs for container libraries always seem to end up with a confusing
plethora of interfaces to describe each of the variations on the main theme. It's not even
possible to capture all of the special cases in interfaces, because someone can always invent a
new interface. The "unsupported operation" approach achieves an important goal of the Java

4 I am using the term "interface" here to describe both the formal interface keyword and the more general meaning of
"the methods supported by any class or subclass."
5 Although this sounds odd and possibly useless when I describe it this way, you've seen, especially in the Type
Information chapter, that this kind of dynamic behavior can be very powerful.

containers library: The containers are simple to learn and use. Unsupported operations are a
special case that can be delayed until necessary. For this approach to work, however:
1. The UnsupportedOperationException must be a rare event. That is, for most
classes, all operations should work, and only in special cases should an operation be
unsupported. This is true in the Java containers library, since the classes you'll use 99
percent of the time—ArrayList, LinkedList, HashSet, and HashMap, as well as
the other concrete implementations—support all of the operations. The design does
provide a "back door" if you want to create a new Collection without providing
meaningful definitions for all the methods in the Collection interface, and yet still fit
it into the existing library.

2. When an operation is unsupported, there should be reasonable likelihood that an
UnsupportedOperationException will appear at implementation time, rather
than after you've shipped the product to the customer. After all, it indicates a
programming error: You've used an implementation incorrectly.

It's worth noting that unsupported operations are only detectable at run time, and therefore
represent dynamic type checking. If you're coming from a statically typed language like C++,
Java might appear to be just another statically typed language. Java certainly has static type
checking, but it also has a significant amount of dynamic typing, so it's hard to say that it's
exactly one type of language or another. Once you begin to notice this, you'll start to see other
examples of dynamic type checking in Java.
Unsupported operations
A common source of unsupported operations involves a container backed by a fixed-sized
data structure. You get such a container when you turn an array into a List with the
Arrays.asList( ) method. You can also choose to make any container (including a Map)
throw UnsupportedOperationExceptions by using the "unmodifiable" methods in the
Collections class. This example shows both cases:

```java
//: containers/Unsupported.java
// Unsupported operations in Java containers.
import java.util.*;

public class Unsupported {
static void test(String msg, List<String> list) {
System.out.println("--- " + msg + " ---");
Collection<String> c = list;
Collection<String> subList = list.subList(1,8);
// Copy of the sublist:
Collection<String> c2 = new ArrayList<String>(subList);
try { c.retainAll(c2); } catch(Exception e) {
System.out.println("retainAll(): " + e);
}
try { c.removeAll(c2); } catch(Exception e) {
System.out.println("removeAll(): " + e);
}
try { c.clear(); } catch(Exception e) {
System.out.println("clear(): " + e);
}
try { c.add("X"); } catch(Exception e) {
System.out.println("add(): " + e);
}
try { c.addAll(c2); } catch(Exception e) {
System.out.println("addAll(): " + e);
}
try { c.remove("C"); } catch(Exception e) {
Containers in Depth 583 

System.out.println("remove(): " + e);
}
// The List.set() method modifies the value but
// doesn't change the size of the data structure:
try {
list.set(0, "X");
} catch(Exception e) {
System.out.println("List.set(): " + e);
}
}
public static void main(String[] args) {
List<String> list =
Arrays.asList("A B C D E F G H I J K L".split(" "));
test("Modifiable Copy", new ArrayList<String>(list));
test("Arrays.asList()", list);
test("unmodifiableList()",
Collections.unmodifiableList(
new ArrayList<String>(list)));
}
} /* Output:
--- Modifiable Copy ---
--- Arrays.asList() ---
retainAll(): java.lang.UnsupportedOperationException
removeAll(): java.lang.UnsupportedOperationException
clear(): java.lang.UnsupportedOperationException
add(): java.lang.UnsupportedOperationException
addAll(): java.lang.UnsupportedOperationException
remove(): java.lang.UnsupportedOperationException
--- unmodifiableList() ---
retainAll(): java.lang.UnsupportedOperationException
removeAll(): java.lang.UnsupportedOperationException
clear(): java.lang.UnsupportedOperationException
add(): java.lang.UnsupportedOperationException
addAll(): java.lang.UnsupportedOperationException
remove(): java.lang.UnsupportedOperationException
List.set(): java.lang.UnsupportedOperationException
*///:~
```
Because Arrays.asList( ) produces a List that is backed by a fixed-size array, it makes
sense that the only supported operations are the ones that don't change the size of the array.
Any method that would cause a change to the size of the underlying data structure produces
an UnsupportedOperationException, to indicate a call to an unsupported method (a
programming error).
Note that you can always pass the result of Arrays.asList( ) as a constructor argument to
any Collection (or use the addAll( ) method, or the Collections.addAll( ) static
method) in order to create a regular container that allows the use of all the methods—this is
shown in the first call to test( ) in main( ). Such a call produces a new resizable underlying
data structure.
The "unmodifiable" methods in the Collections class wrap the container in a proxy that
produces an UnsupportedOperationException if you perform any operation that
modifies the container in any way. The goal of using these methods is to produce a "constant"
container object. The full list of "unmodifiable" Collections methods is described later.
The last try block in test( ) examines the set( ) method that's part of List. This is
interesting, because you can see how the granularity of the "unsupported operation"
technique comes in handy—the resulting "interface" can vary by one method between the
object returned by Arrays.asList( ) and that returned by
Collections.unmodifiableList( ). Arrays.asList( ) returns a fixed-sized List, whereas
Collections.unmodifiableList( ) produces a list that cannot be changed. As you can see

from the output, it's OK to modify the elements in the List returned by Arrays.asList( ),
because this would not violate the "fixed-sized" nature of that List. But clearly, the result of
unmodifiableList( ) should not be modifiable in any way. If interfaces were used, this
would have required two additional interfaces, one with a working set( ) method and one
without. Additional interfaces would be required for various unmodifiable subtypes of
Collection.
The documentation for a method that takes a container as an argument should specify which
of the optional methods must be implemented.

Exercise 6: (2) Note that List has additional "optional" operations that are not included
in Collection. Write a version of Unsupported.java that tests these additional optional
operations.

Containers in Depth 585 

List functionality
As you've seen, the basic List is quite simple to use: Most of the time you just call add( ) to
insert objects, use get( ) to get them out one at a time, and call iterator( ) to get an
Iterator for the sequence.
The methods in the following example each cover a different group of activities: things that
every List can do (basicTest( )), moving around with an Iterator (iterMotion( )) versus
changing things with an Iterator (iterManipulation( )), seeing the effects of List
manipulation (testVisual( )), and operations available only to LinkedLists:

```java
//: containers/Lists.java
// Things you can do with Lists.
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class Lists {
private static boolean b;
private static String s;
private static int i;
private static Iterator<String> it;
private static ListIterator<String> lit;
public static void basicTest(List<String> a) {
a.add(1, "x"); // Add at location 1
a.add("x"); // Add at end
// Add a collection:
a.addAll(Countries.names(25));
// Add a collection starting at location 3:
a.addAll(3, Countries.names(25));
b = a.contains("1"); // Is it in there?
// Is the entire collection in there?
b = a.containsAll(Countries.names(25));
// Lists allow random access, which is cheap
// for ArrayList, expensive for LinkedList:
s = a.get(1); // Get (typed) object at location 1
i = a.indexOf("1"); // Tell index of object
b = a.isEmpty(); // Any elements inside?
it = a.iterator(); // Ordinary Iterator
lit = a.listIterator(); // ListIterator
lit = a.listIterator(3); // Start at loc 3
i = a.lastIndexOf("1"); // Last match
a.remove(1); // Remove location 1
a.remove("3"); // Remove this object
a.set(1, "y"); // Set location 1 to "y"
// Keep everything that's in the argument
// (the intersection of the two sets):
a.retainAll(Countries.names(25));
// Remove everything that's in the argument:
a.removeAll(Countries.names(25));
i = a.size(); // How big is it?
a.clear(); // Remove all elements
}
public static void iterMotion(List<String> a) {
ListIterator<String> it = a.listIterator();
b = it.hasNext();
b = it.hasPrevious();
s = it.next();
i = it.nextIndex();
s = it.previous();

i = it.previousIndex();
}
public static void iterManipulation(List<String> a) {
ListIterator<String> it = a.listIterator();
it.add("47");
// Must move to an element after add():
it.next();
// Remove the element after the newly produced one:
it.remove();
// Must move to an element after remove():
it.next();
// Change the element after the deleted one:
it.set("47");
}
public static void testVisual(List<String> a) {
print(a);
List<String> b = Countries.names(25);
print("b = " + b);
a.addAll(b);
a.addAll(b);
print(a);
// Insert, remove, and replace elements
// using a ListIterator:
ListIterator<String> x = a.listIterator(a.size()/2);
x.add("one");
print(a);
print(x.next());
x.remove();
print(x.next());
x.set("47");
print(a);
// Traverse the list backwards:
x = a.listIterator(a.size());
while(x.hasPrevious())
printnb(x.previous() + " ");
print();
print("testVisual finished");
}
// There are some things that only LinkedLists can do:
public static void testLinkedList() {
LinkedList<String> ll = new LinkedList<String>();
ll.addAll(Countries.names(25));
print(ll);
// Treat it like a stack, pushing:
ll.addFirst("one");
ll.addFirst("two");
print(ll);
// Like "peeking" at the top of a stack:
print(ll.getFirst());
// Like popping a stack:
print(ll.removeFirst());
print(ll.removeFirst());
// Treat it like a queue, pulling elements
// off the tail end:
print(ll.removeLast());
print(ll);
}
public static void main(String[] args) {
// Make and fill a new list each time:
basicTest(
new LinkedList<String>(Countries.names(25)));
basicTest(
new ArrayList<String>(Countries.names(25)));
Containers in Depth 587 

iterMotion(
new LinkedList<String>(Countries.names(25)));
iterMotion(
new ArrayList<String>(Countries.names(25)));
iterManipulation(
new LinkedList<String>(Countries.names(25)));
iterManipulation(
new ArrayList<String>(Countries.names(25)));
testVisual(
new LinkedList<String>(Countries.names(25)));
testLinkedList();
}
} /* (Execute to see output) *///:~
```
In basicTest( ) and iterMotion( ) the calls are made in order to show the proper syntax,
and although the return value is captured, it is not used. In some cases, the return value isn't
captured at all. You should look up the full usage of each of these methods in the JDK
documentation before you use them.

Exercise 7: (4) Create both an ArrayList and a LinkedList, and fill each using the
Countries.names( ) generator. Print each list using an ordinary Iterator, then insert one
list into the other by using a Listlterator, inserting at every other location. Now perform the
insertion starting at the end of the first list and moving backward.

Exercise 8: (7) Create a generic, singly linked list class called SList, which, to keep
things simple, does not implement the List interface. Each Link object in the list should
contain a reference to the next element in the list, but not the previous one (LinkedList, in
contrast, is a doubly linked list, which means it maintains links in both directions). Create
your own SListIterator which, again for simplicity, does not implement ListIterator. The
only method in SList other than toString( ) should be iterator( ), which produces an
SListIterator. The only way to insert and remove elements from an SList is through
SListIterator. Write code to demonstrate SList.


Sets and storage order
The Set examples in the Holding Your Objects chapter provide a good introduction to the
operations that can be performed with basic Sets. However, those examples conveniently use
predefined Java types such as Integer and String, which were designed to be usable inside
containers. When creating your own types, be aware that a Set needs a way to maintain
storage order. How the storage order is maintained varies from one implementation of Set to
another. Thus, different Set implementations not only have different behaviors, they have
different requirements for the type of object that you can put into a particular Set:
Set (interface) Each element that you add to the Set must be
unique; otherwise, the Set doesn't add the
duplicate element. Elements added to a Set must
at least define equals( ) to establish object
uniqueness. Set has exactly the same interface as
Collection. The Set interface does not guarantee
that it will maintain its elements in any particular
order.
HashSet* For Sets where fast lookup time is important.
Elements must also define hashCode( ).
TreeSet An ordered Set backed by a tree. This way, you
can extract an ordered sequence from a Set.
Elements must also implement the Comparable
interface.
LinkedHashSet Has the lookup speed of a HashSet, but internally
maintains the order in which you add the elements
(the insertion order) using a linked list. Thus,
when you iterate through the Set, the results
appear in insertion order. Elements must also
define hashCode( ).
The asterisk on HashSet indicates that, in the absence of other constraints, this should be
your default choice because it is optimized for speed.
Defining hashCode( ) will be described later in this chapter. You must create an equals( )
for both hashed and tree storage, but the hashCode( ) is necessary only if the class will be
placed in a HashSet (which is likely, since that should generally be your first choice as a Set
implementation) or LinkedHashSet. However, for good programming style, you should
always override hashCode( ) when you override equals( ).
This example demonstrates the methods that must be defined in order to successfully use a
type with a particular Set implementation:

```java
//: containers/TypesForSets.java
// Methods necessary to put your own type in a Set.
import java.util.*;

class SetType {
int i;
public SetType(int n) { i = n; }
public boolean equals(Object o) {
return o instanceof SetType && (i == ((SetType)o).i);
}
public String toString() { return Integer.toString(i); }
}
Containers in Depth 589 


class HashType extends SetType {
public HashType(int n) { super(n); }
public int hashCode() { return i; }
}

class TreeType extends SetType
implements Comparable<TreeType> {
public TreeType(int n) { super(n); }
public int compareTo(TreeType arg) {
return (arg.i < i ? -1 : (arg.i == i ? 0 : 1));
}
}

public class TypesForSets {
static <T> Set<T> fill(Set<T> set, Class<T> type) {
try {
for(int i = 0; i < 10; i++)
set.add(
type.getConstructor(int.class).newInstance(i));
} catch(Exception e) {
throw new RuntimeException(e);
}
return set;
}
static <T> void test(Set<T> set, Class<T> type) {
fill(set, type);
fill(set, type); // Try to add duplicates
fill(set, type);
System.out.println(set);
}
public static void main(String[] args) {
test(new HashSet<HashType>(), HashType.class);
test(new LinkedHashSet<HashType>(), HashType.class);
test(new TreeSet<TreeType>(), TreeType.class);
// Things that don't work:
test(new HashSet<SetType>(), SetType.class);
test(new HashSet<TreeType>(), TreeType.class);
test(new LinkedHashSet<SetType>(), SetType.class);
test(new LinkedHashSet<TreeType>(), TreeType.class);
try {
test(new TreeSet<SetType>(), SetType.class);
} catch(Exception e) {
System.out.println(e.getMessage());
}
try {
test(new TreeSet<HashType>(), HashType.class);
} catch(Exception e) {
System.out.println(e.getMessage());
}
}
} /* Output: (Sample)
[2, 4, 9, 8, 6, 1, 3, 7, 5, 0]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
[9, 9, 7, 5, 1, 2, 6, 3, 0, 7, 2, 4, 4, 7, 9, 1, 3, 6, 2, 4, 3, 0, 5, 0,
8, 8, 8, 6, 5, 1]
[0, 5, 5, 6, 5, 0, 3, 1, 9, 8, 4, 2, 3, 9, 7, 3, 4, 4, 0, 7, 1, 9, 6, 2,
1, 8, 2, 8, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3,
4, 5, 6, 7, 8, 9]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3,
4, 5, 6, 7, 8, 9]

java.lang.ClassCastException: SetType cannot be cast to
java.lang.Comparable
java.lang.ClassCastException: HashType cannot be cast to
java.lang.Comparable
*///:~
```
In order to prove which methods are necessary for a particular Set and at the same time to
avoid code duplication, three classes are created. The base class, SetType, simply stores an
int, and produces it via toString( ). Since all classes stored in Sets must have an equals( ),
that method is also placed in the base class. Equality is based on the value of the int i.
HashType inherits from SetType and adds the hashCode( ) method necessary for an
object to be placed in a hashed implementation of a Set.
The Comparable interface, implemented by TreeType, is necessary if an object is to be
used in any kind of sorted container, such as a SortedSet (of which TreeSet is the only
implementation). In compareTo( ), note that I did not use the "simple and obvious" form
return i-i2. Although this is a common programming error, it would only work properly if i
and i2 were "unsigned" ints (if Java had an "unsigned" keyword, which it does not). It breaks
for Java's signed int, which is not big enough to represent the difference of two signed ints.
If i is a large positive integer and j is a large negative integer, i-j will overflow and return a
negative value, which will not work.
You'll usually want the compareTo( ) method to produce a natural ordering that is
consistent with the equals( ) method. If equals( ) produces true for a particular
comparison, then compareTo( ) should produce a zero result for that comparison, and if
equals ( ) produces false for a comparison then compareTo( ) should produce a nonzero
result for that comparison.
In TypesForSets, both fill( ) and test( ) are defined using generics, in order to prevent
code duplication. To verify the behavior of a Set, test( ) calls fill( ) on the test set three
times, attempting to introduce duplicate objects. The fill( ) method takes a Set of any type,
and a Class object of the same type. It uses the Class object to discover the constructor that
takes an int argument, and calls that constructor to add elements to the Set.
From the output, you can see that the HashSet keeps the elements in some mysterious
order (which will be made clear later in the chapter), the LinkedHashSet keeps the
elements in the order in which they were inserted, and the TreeSet maintains the elements
in sorted order (because of the way that compareTo( ) is implemented, this happens to be
descending order).
If we try to use types that don't properly support the necessary operations with Sets that
require those operations, things go very wrong. Placing a SetType or TreeType object,
which doesn't include a redefined hashCode( ) method, into any hashed implementations
results in duplicate values, so the primary contract of the Set is violated. This is rather
disturbing because there's not even a runtime error. However, the default hashCode( ) is
legitimate and so this is legal behavior, even if it's incorrect. The only reliable way to ensure
the correctness of such a program is to incorporate unit tests into your build system (see the
supplement at http://MindView.net/Books/BetterJava for more information).
If you try to use a type that doesn't implement Comparable in a TreeSet, you get a more
definitive result: An exception is thrown when the TreeSet attempts to use the object as a
Comparable.
SortedSet
Containers in Depth 591 

The elements in a SortedSet are guaranteed to be in sorted order, which allows additional
functionality to be provided with the following methods that are in the SortedSet interface:
Comparator comparator( ): Produces the Comparator used for this Set, or null for
natural ordering.

Object first( ): Produces the lowest element.

Object last( ): Produces the highest element.

SortedSet subSet(fromElement, toElement): Produces a view of this Set with
elements from fromElement, inclusive, to toElement, exclusive.

SortedSet headSet(toElement): Produces a view of this Set with elements less than
toElement.

SortedSet tailSet(fromElement): Produces a view of this Set with elements greater than
or equal to fromElement.

Here's a simple demonstration:

```java
//: containers/SortedSetDemo.java
// What you can do with a TreeSet.
import java.util.*;
import static net.mindview.util.Print.*;

public class SortedSetDemo {
public static void main(String[] args) {
SortedSet<String> sortedSet = new TreeSet<String>();
Collections.addAll(sortedSet,
"one two three four five six seven eight"
.split(" "));
print(sortedSet);
String low = sortedSet.first();
String high = sortedSet.last();
print(low);
print(high);
Iterator<String> it = sortedSet.iterator();
for(int i = 0; i <= 6; i++) {
if(i == 3) low = it.next();
if(i == 6) high = it.next();
else it.next();
}
print(low);
print(high);
print(sortedSet.subSet(low, high));
print(sortedSet.headSet(high));
print(sortedSet.tailSet(low));
}
} /* Output:
[eight, five, four, one, seven, six, three, two]
eight
two
one
two
[one, seven, six, three]
[eight, five, four, one, seven, six, three]
[one, seven, six, three, two]
*///:~
```
Note that SortedSet means "sorted according to the comparison function of the object," not
"insertion order." Insertion order can be preserved using a LinkedHashSet.


Exercise 9: (2) Use RandomGenerator.String to fill a TreeSet, but use alphabetic
ordering. Print the TreeSet to verify the sort order.

Exercise 10: (7) Using a LinkedList as your underlying implementation, define your
own SortedSet.

Containers in Depth 593 

Queues
Other than concurrency applications, the only two Java SE5 implementations of Queue are
LinkedList and PriorityQueue, which are differentiated by ordering behavior rather than
performance. Here's a basic example that involves most of the Queue implementations (not
all of them will work in this example), including the concurrency-based Queues. You place
elements in one end and extract them from the other:

```java
//: containers/QueueBehavior.java
// Compares the behavior of some of the queues
import java.util.concurrent.*;
import java.util.*;
import net.mindview.util.*;

public class QueueBehavior {
private static int count = 10;
static <T> void test(Queue<T> queue, Generator<T> gen) {
for(int i = 0; i < count; i++)
queue.offer(gen.next());
while(queue.peek() != null)
System.out.print(queue.remove() + " ");
System.out.println();
}
static class Gen implements Generator<String> {
String[] s = ("one two three four five six seven " +
"eight nine ten").split(" ");
int i;
public String next() { return s[i++]; }
}
public static void main(String[] args) {
test(new LinkedList<String>(), new Gen());
test(new PriorityQueue<String>(), new Gen());
test(new ArrayBlockingQueue<String>(count), new Gen());
test(new ConcurrentLinkedQueue<String>(), new Gen());
test(new LinkedBlockingQueue<String>(), new Gen());
test(new PriorityBlockingQueue<String>(), new Gen());
}
} /* Output:
one two three four five six seven eight nine ten
eight five four nine one seven six ten three two
one two three four five six seven eight nine ten
one two three four five six seven eight nine ten
one two three four five six seven eight nine ten
eight five four nine one seven six ten three two
*///:~
```
You can see that, with the exception of the priority queues, a Queue will produce elements in
exactly the same order as they are placed in the Queue.
Priority queues
Priority queues were given a simple introduction in the Holding Your Objects chapter. A
more interesting problem is a to-do list, where each object contains a string and a primary
and secondary priority value. The ordering of this list is again controlled by implementing
Comparable:

```java
//: containers/ToDoList.java
// A more complex use of PriorityQueue.
import java.util.*;


class ToDoList extends PriorityQueue<ToDoList.ToDoItem> {
static class ToDoItem implements Comparable<ToDoItem> {
private char primary;
private int secondary;
private String item;
public ToDoItem(String td, char pri, int sec) {
primary = pri;
secondary = sec;
item = td;
}
public int compareTo(ToDoItem arg) {
if(primary > arg.primary)
return +1;
if(primary == arg.primary)
if(secondary > arg.secondary)
return +1;
else if(secondary == arg.secondary)
return 0;
return -1;
}
public String toString() {
return Character.toString(primary) +
secondary + ": " + item;
}
}
public void add(String td, char pri, int sec) {
super.add(new ToDoItem(td, pri, sec));
}
public static void main(String[] args) {
ToDoList toDoList = new ToDoList();
toDoList.add("Empty trash", 'C', 4);
toDoList.add("Feed dog", 'A', 2);
toDoList.add("Feed bird", 'B', 7);
toDoList.add("Mow lawn", 'C', 3);
toDoList.add("Water lawn", 'A', 1);
toDoList.add("Feed cat", 'B', 1);
while(!toDoList.isEmpty())
System.out.println(toDoList.remove());
}
} /* Output:
A1: Water lawn
A2: Feed dog
B1: Feed cat
B7: Feed bird
C3: Mow lawn
C4: Empty trash
*///:~
```
You can see how the ordering of the items happens automatically because of the priority
queue.

Exercise 11: (2) Create a class that contains an Integer that is initialized to a value
between o and 100 using java.util.Random. Implement Comparable using this Integer
field. Fill a PriorityQueue with objects of your class, and extract the values using poll( ) to
show that it produces the expected order.
Deques
Containers in Depth 595 

A deque (double-ended queue) is like a queue, but you can add and remove elements from
either end. There are methods in LinkedList that support deque operations, but there is no
explicit interface for a deque in the Java standard libraries. Thus, LinkedList cannot
implement this interface and you cannot upcast to a Deque interface as you can to a Queue in
the previous example. However, you can create a Deque class using composition, and simply
expose the relevant methods from LinkedList:

```java
//: net/mindview/util/Deque.java
// Creating a Deque from a LinkedList.
package net.mindview.util;
import java.util.*;

public class Deque<T> {
private LinkedList<T> deque = new LinkedList<T>();
public void addFirst(T e) { deque.addFirst(e); }
public void addLast(T e) { deque.addLast(e); }
public T getFirst() { return deque.getFirst(); }
public T getLast() { return deque.getLast(); }
public T removeFirst() { return deque.removeFirst(); }
public T removeLast() { return deque.removeLast(); }
public int size() { return deque.size(); }
public String toString() { return deque.toString(); }
// And other methods as necessary...
} ///:~
```
If you put this Deque to use in your own programs, you may discover that you need to add
other methods in order to make it practical.
Here's a simple test of the Deque class:

```java
//: containers/DequeTest.java
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class DequeTest {
static void fillTest(Deque<Integer> deque) {
for(int i = 20; i < 27; i++)
deque.addFirst(i);
for(int i = 50; i < 55; i++)
deque.addLast(i);
}
public static void main(String[] args) {
Deque<Integer> di = new Deque<Integer>();
fillTest(di);
print(di);
while(di.size() != 0)
printnb(di.removeFirst() + " ");
print();
fillTest(di);
while(di.size() != 0)
printnb(di.removeLast() + " ");
}
} /* Output:
[26, 25, 24, 23, 22, 21, 20, 50, 51, 52, 53, 54]
26 25 24 23 22 21 20 50 51 52 53 54
54 53 52 51 50 20 21 22 23 24 25 26
*///:~
```
It's less likely that you'll put elements in and take them out at both ends, so Deque is not as
commonly used as Queue.


Containers in Depth 597 

Understanding Maps
As you learned in the Holding Your Objects chapter, the basic idea of a map (also called an
associative array) is that it maintains key-value associations (pairs) so you can look up a
value using a key. The standard Java library contains different basic implementations of
Maps: HashMap, TreeMap, LinkedHashMap, WeakHashMap,
ConcurrentHashMap, and IdentityHashMap. They all have the same basic Map
interface, but they differ in behaviors including efficiency, the order in which the pairs are
held and presented, how long the objects are held by the map, how the map works in
multithreaded programs, and how key equality is determined. The number of
implementations of the Map interface should tell you something about the importance of
this tool.
So you can gain a deeper understanding of Maps, it is helpful to look at how an associative
array is constructed. Here is an extremely simple implementation:

```java
//: containers/AssociativeArray.java
// Associates keys with values.
import static net.mindview.util.Print.*;

public class AssociativeArray<K,V> {
private Object[][] pairs;
private int index;
public AssociativeArray(int length) {
pairs = new Object[length][2];
}
public void put(K key, V value) {
if(index >= pairs.length)
throw new ArrayIndexOutOfBoundsException();
pairs[index++] = new Object[]{ key, value };
}
@SuppressWarnings("unchecked")
public V get(K key) {
for(int i = 0; i < index; i++)
if(key.equals(pairs[i][0]))
return (V)pairs[i][1];
return null; // Did not find key
}
public String toString() {
StringBuilder result = new StringBuilder();
for(int i = 0; i < index; i++) {
result.append(pairs[i][0].toString());
result.append(" : ");
result.append(pairs[i][1].toString());
if(i < index - 1)
result.append("\n");
}
return result.toString();
}
public static void main(String[] args) {
AssociativeArray<String,String> map =
new AssociativeArray<String,String>(6);
map.put("sky", "blue");
map.put("grass", "green");
map.put("ocean", "dancing");
map.put("tree", "tall");
map.put("earth", "brown");
map.put("sun", "warm");
try {
map.put("extra", "object"); // Past the end

Containers in Depth 599 
} catch(ArrayIndexOutOfBoundsException e) {
print("Too many objects!");
}
print(map);
print(map.get("ocean"));
}
} /* Output:
Too many objects!
sky : blue
grass : green
ocean : dancing
tree : tall
earth : brown
sun : warm
dancing
*///:~
```
The essential methods in an associative array are put( ) and get( ), but for easy display,
toString( ) has been overridden to print the key-value pairs. To show that it works, main( )
loads an AssociativeArray with pairs of strings and prints the resulting map, followed by a
get( ) of one of the values.
To use the get( ) method, you pass in the key that you want it to look up, and it produces the
associated value as the result or returns null if it can't be found. The get( ) method is using
what is possibly the least efficient approach imaginable to locate the value: starting at the top
of the array and using equals( ) to compare keys. But the point here is simplicity, not
efficiency.
So the above version is instructive, but it isn't very efficient and it has a fixed size, which is
inflexible. Fortunately, the Maps in java.util do not have these problems and can be
substituted into the above example.

Exercise 12: (1) Substitute a HashMap, a TreeMap and a LinkedHashMap in
AssociativeArray .Java's main( ).

Exercise 13: (4) Use AssociativeArray Java to create a wordoccurrence counter,
mapping String to Integer. Using the net.mindview.util.TextFile utility in this book,
open a text file and break up the words in that file using whitespace and punctuation, and
count the occurrence of the words in that file.
Performance
Performance is a fundamental issue for maps, and it's very slow to use a linear search in
get( ) when hunting for a key. This is where HashMap speeds things up. Instead of a slow
search for the key, it uses a special value called a hash code. The hash code is a way to take
some information in the object in question and turn it into a "relatively unique" int for that
object. hashCode( ) is a method in the root class Object, so all Java objects can produce a
hash code. A HashMap takes the hashCode( ) of the object and uses it to quickly hunt for
the key. This results in a dramatic performance improvement. 6
Here are the basic Map implementations. The asterisk on HashMap indicates that, in the
absence of other constraints, this should be your default choice because it is optimized for

6 If these speedups still don't meet your performance needs, you can further accelerate table lookup by writing your own
Map and customizing it to your particular types to avoid delays due to casting to and from Objects. To reach even higher
levels of performance, speed enthusiasts can use Donald Knuth's The Art of Computer Programming, Volume 3: Sorting
and Searching, Second Edition, to replace overflow bucket lists with arrays that have two additional benefits: they can be
optimized for disk storage characteristics and they can save most of the time of creating and garbage collecting individual
records.

speed. The other implementations emphasize other characteristics, and are thus not as fast
as HashMap.
HashMap* Implementation based on a hash table.
(Use this class instead of Hashtable.)
Provides constant-time performance for
inserting and locating pairs. Performance
can be adjusted via constructors that
allow you to set the capacity and load
factor of the hash table.
LinkedHashMap Like a HashMap, but when you iterate
through it, you get the pairs in insertion
order, or in least-recently-used (LRU)
order. Only slightly slower than a
HashMap, except when iterating, where
it is faster due to the linked list used to
maintain the internal ordering.
TreeMap Implementation based on a red-black
tree. When you view the keys or the pairs,
they will be in sorted order (determined
by Comparable or Comparator). The
point of a TreeMap is that you get the
results in sorted order. TreeMap is the
only Map with the subMap( ) method,
which allows you to return a portion of
the tree.
WeakHashMap A map of weak keys that allow objects
referred to by the map to be released;
designed to solve certain types of
problems. If no references to a particular
key are held outside the map, that key
may be garbage collected.
ConcurrentHashMap A thread-safe Map which does not
involve synchronization locking. This is
discussed in the Concurrency chapter.
IdentityHashMap A hash map that uses == instead of
equals( ) to compare keys. Only for
solving special types of problems; not for
general use.
Hashing is the most commonly used way to store elements in a map. Later, you'll learn how
hashing works.
The requirements for the keys used in a Map are the same as for the elements in a Set. You
saw these demonstrated in TypesForSets.java. Any key must have an equals( ) method. If
the key is used in a hashed Map, it must also have a proper hashCode( ). If the key is used
in a TreeMap, it must implement Comparable.
The following example shows the operations available through the Map interface, using the
previously defined CountingMapData test data set:

```java
//: containers/Maps.java
// Things you can do with Maps.
import java.util.concurrent.*;
import java.util.*;

import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class Maps {
public static void printKeys(Map<Integer,String> map) {
printnb("Size = " + map.size() + ", ");
printnb("Keys: ");
print(map.keySet()); // Produce a Set of the keys
}
public static void test(Map<Integer,String> map) {
print(map.getClass().getSimpleName());
map.putAll(new CountingMapData(25));
// Map has 'Set' behavior for keys:
map.putAll(new CountingMapData(25));
printKeys(map);
// Producing a Collection of the values:
printnb("Values: ");
print(map.values());
print(map);
print("map.containsKey(11): " + map.containsKey(11));
print("map.get(11): " + map.get(11));
print("map.containsValue(\"F0\"): "
+ map.containsValue("F0"));
Integer key = map.keySet().iterator().next();
print("First key in map: " + key);
map.remove(key);
printKeys(map);
map.clear();
print("map.isEmpty(): " + map.isEmpty());
map.putAll(new CountingMapData(25));
// Operations on the Set change the Map:
map.keySet().removeAll(map.keySet());
print("map.isEmpty(): " + map.isEmpty());
}
public static void main(String[] args) {
test(new HashMap<Integer,String>());
test(new TreeMap<Integer,String>());
test(new LinkedHashMap<Integer,String>());
test(new IdentityHashMap<Integer,String>());
test(new ConcurrentHashMap<Integer,String>());
test(new WeakHashMap<Integer,String>());
}
} /* Output:
HashMap
Size = 25, Keys: [15, 8, 23, 16, 7, 22, 9, 21, 6, 1, 14, 24, 4, 19, 11,
18, 3, 12, 17, 2, 13, 20, 10, 5, 0]
Values: [P0, I0, X0, Q0, H0, W0, J0, V0, G0, B0, O0, Y0, E0, T0, L0, S0,
D0, M0, R0, C0, N0, U0, K0, F0, A0]
{15=P0, 8=I0, 23=X0, 16=Q0, 7=H0, 22=W0, 9=J0, 21=V0, 6=G0, 1=B0, 14=O0,
24=Y0, 4=E0, 19=T0, 11=L0, 18=S0, 3=D0, 12=M0, 17=R0, 2=C0, 13=N0,
20=U0, 10=K0, 5=F0, 0=A0}
map.containsKey(11): true
map.get(11): L0
map.containsValue("F0"): true
First key in map: 15
Size = 24, Keys: [8, 23, 16, 7, 22, 9, 21, 6, 1, 14, 24, 4, 19, 11, 18,
3, 12, 17, 2, 13, 20, 10, 5, 0]
map.isEmpty(): true
map.isEmpty(): true
...
*///:~
```
Containers in Depth 601 

The printKeys( ) method demonstrates how to produce a Collection view of a Map. The
keySet( ) method produces a Set backed by the keys in the Map. Because of improved
printing support in Java SE5, you can simply print the result of the values( ) method, which
produces a Collection containing all the values in the Map. (Note that keys must be unique,
but values may contain duplicates.) Since these Collections are backed by the Map, any
changes in a Collection will be reflected in the associated Map.
The rest of the program provides simple examples of each Map operation and tests each
basic type of Map.

Exercise 14: (3) Show that java.util.Properties works in the above program.


SortedMap
If you have a SortedMap (of which TreeMap is the only one available), the keys are
guaranteed to be in sorted order, which allows additional functionality to be provided with
these methods in the SortedMap interface:

Comparator comparator( ): Produces the comparator used for this Map, or null for
natural ordering.

T firstKey( ): Produces the lowest key.

T lastKey( ): Produces the highest key.

SortedMap subMap(fromKey, toKey): Produces a view of this Map with keys from
fromKey, inclusive, to toKey, exclusive.

SortedMap headMap(toKey): Produces a view of this Map with keys less than
toKey.

SortedMap tailMap(fromKey): Produces a view of this Map with keys greater than or
equal to fromKey.

Here's an example that's similar to SortedSetDemo.java and shows this additional
behavior of TreeMaps:

```java
//: containers/SortedMapDemo.java
// What you can do with a TreeMap.
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class SortedMapDemo {
public static void main(String[] args) {
TreeMap<Integer,String> sortedMap =
new TreeMap<Integer,String>(new CountingMapData(10));
print(sortedMap);
Integer low = sortedMap.firstKey();
Integer high = sortedMap.lastKey();
print(low);
print(high);
Iterator<Integer> it = sortedMap.keySet().iterator();
for(int i = 0; i <= 6; i++) {

if(i == 3) low = it.next();
if(i == 6) high = it.next();
else it.next();
}
print(low);
print(high);
print(sortedMap.subMap(low, high));
print(sortedMap.headMap(high));
print(sortedMap.tailMap(low));
}
} /* Output:
{0=A0, 1=B0, 2=C0, 3=D0, 4=E0, 5=F0, 6=G0, 7=H0, 8=I0, 9=J0}
0
9
3
7
{3=D0, 4=E0, 5=F0, 6=G0}
{0=A0, 1=B0, 2=C0, 3=D0, 4=E0, 5=F0, 6=G0}
{3=D0, 4=E0, 5=F0, 6=G0, 7=H0, 8=I0, 9=J0}
*///:~
```
Here, the pairs are stored by key-sorted order. Because there is a sense of order in the
TreeMap, the concept of "location" makes sense, so you can have first and last elements and
submaps.
LinkedHashMap
The LinkedHashMap hashes everything for speed, but also produces the pairs in insertion
order during a traversal (System.out.println( ) iterates through the map, so you see the
results of traversal). In addition, a LinkedHashMap can be configured in the constructor to
use a leastrecently- used (LRU) algorithm based on accesses, so elements that haven't been
accessed (and thus are candidates for removal) appear at the front of the list. This allows easy
creation of programs that do periodic cleanup in order to save space. Here's a simple example
showing both features:

```java
//: containers/LinkedHashMapDemo.java
// What you can do with a LinkedHashMap.
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class LinkedHashMapDemo {
public static void main(String[] args) {
LinkedHashMap<Integer,String> linkedMap =
new LinkedHashMap<Integer,String>(
new CountingMapData(9));
print(linkedMap);
// Least-recently-used order:
linkedMap =
new LinkedHashMap<Integer,String>(16, 0.75f, true);
linkedMap.putAll(new CountingMapData(9));
print(linkedMap);
for(int i = 0; i < 6; i++) // Cause accesses:
linkedMap.get(i);
print(linkedMap);
linkedMap.get(0);
print(linkedMap);
}
} /* Output:
{0=A0, 1=B0, 2=C0, 3=D0, 4=E0, 5=F0, 6=G0, 7=H0, 8=I0}
Containers in Depth 603 

{0=A0, 1=B0, 2=C0, 3=D0, 4=E0, 5=F0, 6=G0, 7=H0, 8=I0}
{6=G0, 7=H0, 8=I0, 0=A0, 1=B0, 2=C0, 3=D0, 4=E0, 5=F0}
{6=G0, 7=H0, 8=I0, 1=B0, 2=C0, 3=D0, 4=E0, 5=F0, 0=A0}
*///:~
```
You can see from the output that the pairs are indeed traversed in insertion order, even for
the LRU version. However, after the first six items (only) are accessed in the LRU version,
the last three items move to the front of the list. Then, when "o" is accessed again, it moves to
the back of the list.


Hashing and hash codes
The examples in the Holding Your Objects chapter used predefined classes as HashMap
keys. These examples worked because the predefined classes had all the necessary wiring to
make them behave correctly as keys. A common pitfall occurs when you create your own classes
to be used as keys for HashMaps, and forget to put in the necessary wiring. For example,
consider a weather predicting system that matches Groundhog objects to Prediction
objects. This seems fairly straightforward—you create the two classes, and use Groundhog
as the key and Prediction as the value:

```java
//: containers/Groundhog.java
// Looks plausible, but doesn't work as a HashMap key.

public class Groundhog {
protected int number;
public Groundhog(int n) { number = n; }
public String toString() {
return "Groundhog #" + number;
}
} ///:~
```


```java
//: containers/Prediction.java
// Predicting the weather with groundhogs.
import java.util.*;

public class Prediction {
private static Random rand = new Random(47);
private boolean shadow = rand.nextDouble() > 0.5;
public String toString() {
if(shadow)
return "Six more weeks of Winter!";
else
return "Early Spring!";
}
} ///:~
```


```java
//: containers/SpringDetector.java
// What will the weather be?
import java.lang.reflect.*;
import java.util.*;
import static net.mindview.util.Print.*;

public class SpringDetector {
// Uses a Groundhog or class derived from Groundhog:
public static <T extends Groundhog>
void detectSpring(Class<T> type) throws Exception {
Constructor<T> ghog = type.getConstructor(int.class);
Map<Groundhog,Prediction> map =
new HashMap<Groundhog,Prediction>();
for(int i = 0; i < 10; i++)
map.put(ghog.newInstance(i), new Prediction());
print("map = " + map);
Groundhog gh = ghog.newInstance(3);
print("Looking up prediction for " + gh);
if(map.containsKey(gh))
print(map.get(gh));
else
print("Key not found: " + gh);
}
public static void main(String[] args) throws Exception {
detectSpring(Groundhog.class);
Containers in Depth 605 

}
} /* Output:
map = {Groundhog #3=Early Spring!, Groundhog #7=Early Spring!, Groundhog
#5=Early Spring!, Groundhog #9=Six more weeks of Winter!, Groundhog
#8=Six more weeks of Winter!, Groundhog #0=Six more weeks of Winter!,
Groundhog #6=Early Spring!, Groundhog #4=Six more weeks of Winter!,
Groundhog #1=Six more weeks of Winter!, Groundhog #2=Early Spring!}
Looking up prediction for Groundhog #3
Key not found: Groundhog #3
*///:~
```
Each Groundhog is given an identity number, so you can look up a Prediction in the
HashMap by saying, "Give me the Prediction associated with Groundhog #3." The
Prediction class contains a boolean that is initialized using java.util.random( ) and a
toString( ) that interprets the result for you. The detectSpring( ) method is created using
reflection to instantiate and use the class Groundhog or any class derived from
Groundhog. This will come in handy later, when we inherit a new type of Groundhog to
solve the problem demonstrated here.
A HashMap is filled with Groundhogs and their associated Predictions. The HashMap
is printed so that you can see it has been filled. Then a Groundhog with an identity number
of 3 is used as a key to look up the prediction for Groundhog #3 (which you can see must be
in the Map).
It seems simple enough, but it doesn't work—it can't find the key for #3. The problem is that
Groundhog is automatically inherited from the common root class Object, and it is
Object's hashCode( ) method that is used to generate the hash code for each object. By
default this just uses the address of its object. Thus, the first instance of Groundhog(3)
does not produce a hash code equal to the hash code for the second instance of
Groundhog(3) that we tried to use as a lookup.
You might think that all you need to do is write an appropriate override for hashCode( ).
But it still won't work until you've done one more thing: override the equals( ) that is also
part of Object.equals( ) is used by the HashMap when trying to determine if your key is
equal to any of the keys in the table.
A proper equals( ) must satisfy the following five conditions:
1. Reflexive: For any x, x.equals(x) should return true.

2. Symmetric: For any x and y, x.equals(y) should return true if and only if
y.equals(x) returns true.

3. Transitive: For any x, y, and z, if x.equals(y) returns true and y.equals(z) returns
true, then x.equals(z) should return true.

4. Consistent: For any x and y, multiple invocations of x.equals(y) consistently return
true or consistently return false, provided no information used in equals
comparisons on the object is modified.

5. For any non-null x, x.equals(null) should return false.

Again, the default Object.equals( ) simply compares object addresses, so one
Groundhog(3) is not equal to another Groundhog(3). Thus, to use your own classes as
keys in a HashMap, you must override both hashCode( ) and equals( ), as shown in the
following solution to the groundhog problem:

```java
//: containers/Groundhog2.java

// A class that's used as a key in a HashMap
// must override hashCode() and equals().

public class Groundhog2 extends Groundhog {
public Groundhog2(int n) { super(n); }
public int hashCode() { return number; }
public boolean equals(Object o) {
return o instanceof Groundhog2 &&
(number == ((Groundhog2)o).number);
}
} ///:~
```


```java
//: containers/SpringDetector2.java
// A working key.

public class SpringDetector2 {
public static void main(String[] args) throws Exception {
SpringDetector.detectSpring(Groundhog2.class);
}
} /* Output:
map = {Groundhog #2=Early Spring!, Groundhog #4=Six more weeks of
Winter!, Groundhog #9=Six more weeks of Winter!, Groundhog #8=Six more
weeks of Winter!, Groundhog #6=Early Spring!, Groundhog #1=Six more
weeks of Winter!, Groundhog #3=Early Spring!, Groundhog #7=Early
Spring!, Groundhog #5=Early Spring!, Groundhog #0=Six more weeks of
Winter!}
Looking up prediction for Groundhog #3
Early Spring!
*///:~
```
Groundhog2.hashCode( ) returns the groundhog number as a hash value. In this
example, the programmer is responsible for ensuring that no two groundhogs exist with the
same ID number. The hashCode( ) is not required to return a unique identifier (something
you'll understand better later in this chapter), but the equals( ) method must strictly
determine whether two objects are equivalent. Here, equals( ) is based on the groundhog
number, so if two Groundhog2 objects exist as keys in the HashMap with the same
groundhog number, it will fail.
Even though it appears that the equals( ) method is only checking to see whether the
argument is an instance of Groundhog2 (using the instanceof keyword, which was
explained in the Type Information chapter), the instanceof actually quietly does a second
sanity check to see if the object is null, since instanceof produces false if the left-hand
argument is null. Assuming it's the correct type and not null, the comparison is based on
the actual number values in each object. You can see from the output that the behavior is
now correct.
When creating your own class to use in a HashSet, you must pay attention to the same
issues as when it is used as a key in a HashMap.
Understanding hashCodeQ
The preceding example is only a start toward solving the problem correctly. It shows that if
you do not override hashCode( ) and equals( ) for your key, the hashed data structure
(HashSet, HashMap, LinkedHashSet, or LinkedHashMap) probably won't deal with
your key properly. For a good solution to the problem, however, you need to understand
what's going on inside the hashed data structure.
First, consider the motivation behind hashing: You want to look up an object using another
object. But you can also accomplish this with a TreeMap, or you can even implement your
Containers in Depth 607 

own Map. In contrast to a hashed implementation, the following example implements a
Map using a pair of ArrayLists. Unlike AssociativeArray.java, this includes a full
implementation of the Map interface, which accounts for the entrySet( ) method:

```java
//: containers/SlowMap.java
// A Map implemented with ArrayLists.
import java.util.*;
import net.mindview.util.*;

public class SlowMap<K,V> extends AbstractMap<K,V> {
private List<K> keys = new ArrayList<K>();
private List<V> values = new ArrayList<V>();
public V put(K key, V value) {
V oldValue = get(key); // The old value or null
if(!keys.contains(key)) {
keys.add(key);
values.add(value);
} else
values.set(keys.indexOf(key), value);
return oldValue;
}
public V get(Object key) { // key is type Object, not K
if(!keys.contains(key))
return null;
return values.get(keys.indexOf(key));
}
public Set<Map.Entry<K,V>> entrySet() {
Set<Map.Entry<K,V>> set= new HashSet<Map.Entry<K,V>>();
Iterator<K> ki = keys.iterator();
Iterator<V> vi = values.iterator();
while(ki.hasNext())
set.add(new MapEntry<K,V>(ki.next(), vi.next()));
return set;
}
public static void main(String[] args) {
SlowMap<String,String> m= new SlowMap<String,String>();
m.putAll(Countries.capitals(15));
System.out.println(m);
System.out.println(m.get("BULGARIA"));
System.out.println(m.entrySet());
}
} /* Output:
{CAMEROON=Yaounde, CHAD=N'djamena, CONGO=Brazzaville, CAPE VERDE=Praia,
ALGERIA=Algiers, COMOROS=Moroni, CENTRAL AFRICAN REPUBLIC=Bangui,
BOTSWANA=Gaberone, BURUNDI=Bujumbura, BENIN=Porto-Novo, BULGARIA=Sofia,
EGYPT=Cairo, ANGOLA=Luanda, BURKINA FASO=Ouagadougou,
DJIBOUTI=Dijibouti}
Sofia
[CAMEROON=Yaounde, CHAD=N'djamena, CONGO=Brazzaville, CAPE VERDE=Praia,
ALGERIA=Algiers, COMOROS=Moroni, CENTRAL AFRICAN REPUBLIC=Bangui,
BOTSWANA=Gaberone, BURUNDI=Bujumbura, BENIN=Porto-Novo, BULGARIA=Sofia,
EGYPT=Cairo, ANGOLA=Luanda, BURKINA FASO=Ouagadougou,
DJIBOUTI=Dijibouti]
*///:~
```
The put( ) method simply places the keys and values in corresponding ArrayLists. In
accordance with the Map interface, it must return the old key or null if there was no old key.
Also following the specifications for Map, get( ) produces null if the key is not in the
SlowMap. If the key exists, it is used to look up the numerical index indicating its location
in the keys List, and this number is used as an index to produce the associated value from
the values List. Notice that the type of key is Object in get( ), rather than the

parameterized type K as you might expect (and which was indeed used in
AssociativeArray.java). This is a result of the injection of generics into the Java language
at such a late date—if generics had been an original feature in the language, get( ) could have
specified the type of its parameter.
The Map.entrySet( ) method must produce a set of Map.Entry objects. However,
Map.Entry is an interface describing an implementationdependent structure, so if you want
to make your own type of Map, you must also define an implementation of Map.Entry:

```java
//: containers/MapEntry.java
// A simple Map.Entry for sample Map implementations.
import java.util.*;

public class MapEntry<K,V> implements Map.Entry<K,V> {
private K key;
private V value;
public MapEntry(K key, V value) {
this.key = key;
this.value = value;
}
public K getKey() { return key; }
public V getValue() { return value; }
public V setValue(V v) {
V result = value;
value = v;
return result;
}
public int hashCode() {
return (key==null ? 0 : key.hashCode()) ^
(value==null ? 0 : value.hashCode());
}
public boolean equals(Object o) {
if(!(o instanceof MapEntry)) return false;
MapEntry me = (MapEntry)o;
return
(key == null ?
me.getKey() == null : key.equals(me.getKey())) &&
(value == null ?
me.getValue()== null : value.equals(me.getValue()));
}
public String toString() { return key + "=" + value; }
} ///:~
```
Here, a very simple class called MapEntry holds and retrieves the keys and values. This is
used in entrySet( ) to produce a Set of key-value pairs. Notice that entrySet( ) uses a
HashSet to hold the pairs, and MapEntry takes the simple approach of just using key's
hashCode( ). Although this solution is very simple, and appears to work in the trivial test in
SlowMap.main( ), it is not a correct implementation because a copy of the keys and values
is made. A correct implementation of entrySet( ) will provide a view into the Map, rather
than a copy, and this view will allow modification of the original map (which a copy doesn't).

Exercise 16 provides the opportunity to repair the problem.
Note that the equals( ) method in MapEntry must check both keys and values. The
meaning of the hashCode( ) method will be described shortly. The String representation of
the contents of the SlowMap is automatically produced by the toString( ) method defined
in AbstractMap.
In SlowMap.main( ), a SlowMap is loaded and then the contents are displayed. A call to
get( ) shows that it works.
Containers in Depth 609 


Exercise 15: (1) Repeat Exercise 13 using a SlowMap.

Exercise 16: (7) Apply the tests in Maps.java to SlowMap to verify that it works. Fix
anything in SlowMap that doesn't work correctly.

Exercise 17: (2) Implement the rest of the Map interface for SlowMap.

Exercise 18: (3) Using SlowMap.java for inspiration, create a SlowSet.
Hashing for speed
SlowMap.java shows that it's not that hard to produce a new type of Map. But as the name
suggests, a SlowMap isn't very fast, so you probably wouldn't use it if you had an alternative
available. The problem is in the lookup of the key; the keys are not kept in any particular
order, so a simple linear search is used. A linear search is the slowest way to find something.
The whole point of hashing is speed: Hashing allows the lookup to happen quickly. Since the
bottleneck is in the speed of the key lookup, one of the solutions to the problem is to keep the
keys sorted and then use Collections.binarySearch( ) to perform the lookup (an exercise
will walk you through this process).
Hashing goes further by saying that all you want to do is to store the key somewhere in a way
that it can be found quickly. The fastest structure in which to store a group of elements is an
array, so that will be used for representing the key information (note that I said "key
information," and not the key itself). But because an array cannot be resized, we have a
problem: We want to store an indeterminate number of values in the Map, but if the number
of keys is fixed by the array size, how can this be?
The answer is that the array will not hold the keys. From the key object, a number will be
derived that will index into the array. This number is the hash code, produced by the
hashCode( ) method (in computer science parlance, this is the hash function) defined in
Object and presumably overridden by your class.
To solve the problem of the fixed-size array, more than one key may produce the same index.
That is, there may be collisions. Because of this, it doesn't matter how big the array is; any
key object's hash code will land somewhere in that array.
So the process of looking up a value starts by computing the hash code and using it to index
into the array. If you could guarantee that there were no collisions (which is possible if you
have a fixed number of values), then you'd have a perfect hashing junction, but that's a
special case 7 In all other cases, collisions are handled by external chaining: The array doesn't
point directly to a value, but instead to a list of values. These values are searched in a linear
fashion using the equals( ) method. Of course, this aspect of the search is much slower, but
if the hash function is good, there will only be a few values in each slot. So instead of
searching through the entire list, you quickly jump to a slot where you only have to compare
a few entries to find the value. This is much faster, which is why the HashMap is so quick.
Knowing the basics of hashing, you can implement a simple hashed Map:

```java
//: containers/SimpleHashMap.java
// A demonstration hashed Map.
import java.util.*;
import net.mindview.util.*;

7 The case of a perfect hashing function is implemented in the Java SE5 EnumMap and EnumSet, because an enum
defines a fixed number of instances. See the Enumerated Types chapter.


public class SimpleHashMap<K,V> extends AbstractMap<K,V> {
// Choose a prime number for the hash table
// size, to achieve a uniform distribution:
static final int SIZE = 997;
// You can't have a physical array of generics,
// but you can upcast to one:
@SuppressWarnings("unchecked")
LinkedList<MapEntry<K,V>>[] buckets =
new LinkedList[SIZE];
public V put(K key, V value) {
V oldValue = null;
int index = Math.abs(key.hashCode()) % SIZE;
if(buckets[index] == null)
buckets[index] = new LinkedList<MapEntry<K,V>>();
LinkedList<MapEntry<K,V>> bucket = buckets[index];
MapEntry<K,V> pair = new MapEntry<K,V>(key, value);
boolean found = false;
ListIterator<MapEntry<K,V>> it = bucket.listIterator();
while(it.hasNext()) {
MapEntry<K,V> iPair = it.next();
if(iPair.getKey().equals(key)) {
oldValue = iPair.getValue();
it.set(pair); // Replace old with new
found = true;
break;
}
}
if(!found)
buckets[index].add(pair);
return oldValue;
}
public V get(Object key) {
int index = Math.abs(key.hashCode()) % SIZE;
if(buckets[index] == null) return null;
for(MapEntry<K,V> iPair : buckets[index])
if(iPair.getKey().equals(key))
return iPair.getValue();
return null;
}
public Set<Map.Entry<K,V>> entrySet() {
Set<Map.Entry<K,V>> set= new HashSet<Map.Entry<K,V>>();
for(LinkedList<MapEntry<K,V>> bucket : buckets) {
if(bucket == null) continue;
for(MapEntry<K,V> mpair : bucket)
set.add(mpair);
}
return set;
}
public static void main(String[] args) {
SimpleHashMap<String,String> m =
new SimpleHashMap<String,String>();
m.putAll(Countries.capitals(25));
System.out.println(m);
System.out.println(m.get("ERITREA"));
System.out.println(m.entrySet());
}
} /* Output:
{CAMEROON=Yaounde, CONGO=Brazzaville, CHAD=N'djamena, COTE D'IVOIR
(IVORY COAST)=Yamoussoukro, CENTRAL AFRICAN REPUBLIC=Bangui,
GUINEA=Conakry, BOTSWANA=Gaberone, BISSAU=Bissau, EGYPT=Cairo,
ANGOLA=Luanda, BURKINA FASO=Ouagadougou, ERITREA=Asmara, THE
GAMBIA=Banjul, KENYA=Nairobi, GABON=Libreville, CAPE VERDE=Praia,
Containers in Depth 611 

ALGERIA=Algiers, COMOROS=Moroni, EQUATORIAL GUINEA=Malabo,
BURUNDI=Bujumbura, BENIN=Porto-Novo, BULGARIA=Sofia, GHANA=Accra,
DJIBOUTI=Dijibouti, ETHIOPIA=Addis Ababa}
Asmara
[CAMEROON=Yaounde, CONGO=Brazzaville, CHAD=N'djamena, COTE D'IVOIR
(IVORY COAST)=Yamoussoukro, CENTRAL AFRICAN REPUBLIC=Bangui,
GUINEA=Conakry, BOTSWANA=Gaberone, BISSAU=Bissau, EGYPT=Cairo,
ANGOLA=Luanda, BURKINA FASO=Ouagadougou, ERITREA=Asmara, THE
GAMBIA=Banjul, KENYA=Nairobi, GABON=Libreville, CAPE VERDE=Praia,
ALGERIA=Algiers, COMOROS=Moroni, EQUATORIAL GUINEA=Malabo,
BURUNDI=Bujumbura, BENIN=Porto-Novo, BULGARIA=Sofia, GHANA=Accra,
DJIBOUTI=Dijibouti, ETHIOPIA=Addis Ababa]
*///:~
```
Because the "slots" in a hash table are often referred to as buckets, the array that represents
the actual table is called buckets. To promote even distribution, the number of buckets is
typically a prime number. 8 Notice that it is an array of LinkedList, which automatically
provides for collisions: Each new item is simply added to the end of the list in a particular
bucket. Even though Java will not let you create an array of generics, it is possible to make a
reference to such an array. Here, it is convenient to upcast to such an array, to prevent extra
casting later in the code.
For a put( ), the hashCode( ) is called for the key and the result is forced to a positive
number. To fit the resulting number into the buckets array, the modulus operator is used
with the size of that array. If that location is null, it means there are no elements that hash to
that location, so a new LinkedList is created to hold the object that just did hash to that
location. However, the normal process is to look through the list to see if there are duplicates,
and if there are, the old value is put into oldValue and the new value replaces the old. The
found flag keeps track of whether an old key-value pair was found and, if not, the new pair is
appended to the end of the list.
The get( ) calculates the index into the buckets array in the same fashion as put( ) (this is
important in order to guarantee that you end up in the same spot). If a LinkedList exists, it
is searched for a match.
Note that this implementation is not meant to be tuned for performance; it is only intended
to show the operations performed by a hash map. If you look at the source code for
java.util.HashMap, you'll see a tuned implementation. Also, for simplicity
SimpleHashMap uses the same approach to entrySet( ) as did SlowMap, which is
oversimplified and will not work for a general-purpose Map.

Exercise 19: (1) Repeat Exercise 13 using a SimpleHashMap.

Exercise 20: (3) Modify SimpleHashMap so that it reports collisions, and test this by
adding the same data set twice so that you see collisions.

Exercise 21: (2) Modify SimpleHashMap so that it reports the number of "probes"
necessary when collisions occur. That is, how many calls to next( ) must be made on the
Iterators that walk the LinkedLists looking for matches?

Exercise 22: (4) Implement the clear( ) and remove( ) methods for
SimpleHashMap.

8 As it turns out, a prime number is not actually the ideal size for hash buckets, and recent hashed implementations in
Java use a power-of-two size (after extensive testing). Division or remainder is the slowest operation on a modern
processor. With a power-of-two hash table length, masking can be used instead of division. Since get( ) is by far the most
common operation, the % is a large part of the cost, and the power-of-two approach eliminates this (but may also affect
some hashCode( ) methods).


Exercise 23: (3) Implement the rest of the Map interface for SimpleHashMap.

Exercise 24: (5) Following the example in SimpleHashMap.java, create and test a
SimpleHashSet.

Exercise 25: (6) Instead of using a Listlterator for each bucket, modify MapEntry so
that it is a self-contained singly linked list (each MapEntry should have a forward link to the
next MapEntry). Modify the rest of the code in SimpleHashMap.java so that this new
approach works correctly.
Overriding hashCode()
Now that you understand how hashing works, writing your own hashCode( ) method will
make more sense.
First of all, you don't control the creation of the actual value that's used to index into the
array of buckets. That is dependent on the capacity of the particular HashMap object, and
that capacity changes depending on how full the container is, and what the load factor is
(this term will be described later). Thus, the value produced by your hashCode( ) will be
further processed in order to create the bucket index (in SimpleHashMap, the calculation
is just a modulo by the size of the bucket array).
The most important factor in creating a hashCode( ) is that, regardless of when
hashCode( ) is called, it produces the same value for a particular object every time it is
called. If you end up with an object that produces one hashCode( ) value when it is put( )
into a HashMap and another during a get( ), you won't be able to retrieve the objects. So if
your hashCode( ) depends on mutable data in the object, the user must be made aware that
changing the data will produce a different key because it generates a different hashCode( ).
In addition, you will probably nor want to generate a hashCode( ) that is based on unique
object information—in particular, the value of this makes a bad hashCode( ) because then
you can't generate a new key identical to the one used to put( ) the original key-value pair.
This was the problem that occurred in SpringDetector.java, because the default
implementation of hashCode( ) does use the object address. So you'll want to use
information in the object that identifies the object in a meaningful way.
One example can be seen in the String class. Strings have the special characteristic that if a
program has several String objects that contain identical character sequences, then those
String objects all map to the same memory. So it makes sense that the hashCode( )
produced by two separate instances of the String "hello" should be identical. You can see
this in the following program:

```java
//: containers/StringHashCode.java

public class StringHashCode {
public static void main(String[] args) {
String[] hellos = "Hello Hello".split(" ");
System.out.println(hellos[0].hashCode());
System.out.println(hellos[1].hashCode());
}
} /* Output: (Sample)
69609650
69609650
*///:~
```
The hashCode( ) for String is clearly based on the contents of the String.
Containers in Depth 613 

So, for a hashCode( ) to be effective, it must be fast and it must be meaningful; that is, it
must generate a value based on the contents of the object. Remember that this value doesn't
have to be unique—you should lean toward speed rather than uniqueness—but between
hashCode( ) and equals( ), the identity of the object must be completely resolved.
Because the hashCode( ) is further processed before the bucket index is produced, the
range of values is not important; it just needs to generate an int.
There's one other factor: A good hashCode( ) should result in an even distribution of
values. If the values tend to cluster, then the HashMap or HashSet will be more heavily
loaded in some areas and will not be as fast as it can be with an evenly distributed hashing
function.
In Effective Java™ Programming Language Guide (Addison-Wesley, 2001), Joshua Bloch
gives a basic recipe for generating a decent hashCode( ):
1. Store some constant nonzero value, say 17, in an int variable called result.

2. For each significant field fin your object (that is, each field taken into account by the
equals( ) method), calculate an int hash code c for the field:
Field type Calculation
boolean c = ( f ? 0 : 1)
byte, char, short, or
int
c = (int)f
long c = (int)(f ^ (f>>>32))
float c = Float.floatToIntBits(f);
double long l = Double.doubleToLongBits(f);
c = (int)(1 ^ (l>>>32))
Object, where
equals( ) calls
equals( ) for this
field
c = f.hashCode( )
Array Apply above rules to each element
3. Combine the hash code(s) computed above: result = 37 * result + c;

4. Return result.

5. Look at the resulting hashCode( ) and make sure that equal instances have equal
hash codes.

Here's an example that follows these guidelines:

```java
//: containers/CountedString.java
// Creating a good hashCode().
import java.util.*;
import static net.mindview.util.Print.*;

public class CountedString {
private static List<String> created =
new ArrayList<String>();

private String s;
private int id = 0;
public CountedString(String str) {
s = str;
created.add(s);
// id is the total number of instances
// of this string in use by CountedString:
for(String s2 : created)
if(s2.equals(s))
id++;
}
public String toString() {
return "String: " + s + " id: " + id +
" hashCode(): " + hashCode();
}
public int hashCode() {
// The very simple approach:
// return s.hashCode() * id;
// Using Joshua Bloch's recipe:
int result = 17;
result = 37 * result + s.hashCode();
result = 37 * result + id;
return result;
}
public boolean equals(Object o) {
return o instanceof CountedString &&
s.equals(((CountedString)o).s) &&
id == ((CountedString)o).id;
}
public static void main(String[] args) {
Map<CountedString,Integer> map =
new HashMap<CountedString,Integer>();
CountedString[] cs = new CountedString[5];
for(int i = 0; i < cs.length; i++) {
cs[i] = new CountedString("hi");
map.put(cs[i], i); // Autobox int -> Integer
}
print(map);
for(CountedString cstring : cs) {
print("Looking up " + cstring);
print(map.get(cstring));
}
}
} /* Output: (Sample)
{String: hi id: 4 hashCode(): 146450=3, String: hi id: 1 hashCode():
146447=0, String: hi id: 3 hashCode(): 146449=2, String: hi id: 5
hashCode(): 146451=4, String: hi id: 2 hashCode(): 146448=1}
Looking up String: hi id: 1 hashCode(): 146447
0
Looking up String: hi id: 2 hashCode(): 146448
1
Looking up String: hi id: 3 hashCode(): 146449
2
Looking up String: hi id: 4 hashCode(): 146450
3
Looking up String: hi id: 5 hashCode(): 146451
4
*///:~
```
CountedString includes a String and an id that represents the number of
CountedString objects that contain an identical String. The counting is accomplished in
the constructor by iterating through the static ArrayList where all the Strings are stored.
Containers in Depth 615 

Both hashCode( ) and equals( ) produce results based on both fields; if they were just
based on the String alone or the id alone, there would be duplicate matches for distinct
values.
In main( ), several CountedString objects are created using the same String, to show that
the duplicates create unique values because of the count id. The HashMap is displayed so
that you can see how it is stored internally (no discernible orders), and then each key is
looked up individually to demonstrate that the lookup mechanism is working properly.
As a second example, consider the Individual class that was used as the base class for the
typeinfo.pet library defined in the Type Information chapter. The Individual class was
used in that chapter but the definition has been delayed until this chapter so you could
properly understand the implementation:

```java
//: typeinfo/pets/Individual.java
package typeinfo.pets;

public class Individual implements Comparable<Individual> {
private static long counter = 0;
private final long id = counter++;
private String name;
public Individual(String name) { this.name = name; }
// 'name' is optional:
public Individual() {}
public String toString() {
return getClass().getSimpleName() +
(name == null ? "" : " " + name);
}
public long id() { return id; }
public boolean equals(Object o) {
return o instanceof Individual &&
id == ((Individual)o).id;
}
public int hashCode() {
int result = 17;
if(name != null)
result = 37 * result + name.hashCode();
result = 37 * result + (int)id;
return result;
}
public int compareTo(Individual arg) {
// Compare by class name first:
String first = getClass().getSimpleName();
String argFirst = arg.getClass().getSimpleName();
int firstCompare = first.compareTo(argFirst);
if(firstCompare != 0)
return firstCompare;
if(name != null && arg.name != null) {
int secondCompare = name.compareTo(arg.name);
if(secondCompare != 0)
return secondCompare;
}
return (arg.id < id ? -1 : (arg.id == id ? 0 : 1));
}
} ///:~
```
The compareTo( ) method has a hierarchy of comparisons, so that it will produce a
sequence that is sorted first by actual type, then by name if there is one, and finally falls
back to creation order. Here's an example that shows how it works:

```java
//: containers/IndividualTest.java

import holding.MapOfList;
import typeinfo.pets.*;
import java.util.*;

public class IndividualTest {
public static void main(String[] args) {
Set<Individual> pets = new TreeSet<Individual>();
for(List<? extends Pet> lp :
MapOfList.petPeople.values())
for(Pet p : lp)
pets.add(p);
System.out.println(pets);
}
} /* Output:
[Cat Elsie May, Cat Pinkola, Cat Shackleton, Cat Stanford aka Stinky el
Negro, Cymric Molly, Dog Margrett, Mutt Spot, Pug Louie aka Louis
Snorkelstein Dupree, Rat Fizzy, Rat Freckly, Rat Fuzzy]
*///:~
```
Since all of these pets have names, they are sorted first by type, then by name within their type.
Writing a proper hashCode( ) and equals( ) for a new class can be tricky. You can find
tools to help you do this in Apache's "Jakarta Commons" project
atjakarta.apache.org/commons, under "lang" (this project also has many other potentially
useful libraries, and appears to be the Java community's answer to the C++ community's
www.boost.org).

Exercise 26: (2) Add a char field to CountedString that is also initialized in the
constructor, and modify the hashCode( ) and equals( ) methods to include the value of
this char.

Exercise 27: (3) Modify the hashCode( ) in CountedString.java by removing the
combination with id, and demonstrate that CountedString still works as a key. What is the
problem with this approach?

Exercise 28: (4) Modify net/mindview/util/Tuple.java to make it a general-purpose
class by adding hashCode( ), equals( ), and implementing Comparable for each type of
Tuple.
Choosing an implementation
By now you should understand that although there are only four fundamental container
types—Map, List, Set, and Queue—there is more than one implementation of each
interface. If you need to use the functionality offered by a particular interface, how do you
decide which implementation to use?
Each different implementation has its own features, strengths, and weaknesses. For example,
you can see in the figure at the beginning of this chapter that the "feature" of Hashtable,
Vector, and Stack is that they are legacy classes, so that old code doesn't break (it's best if
you don't use those for new code).
The different types of Queues in the Java library are differentiated only by the way they
accept and produce values (you'll see the importance of these in the Concurrency chapter).
The distinction between containers often comes down to what they are "backed by"—that is,
the data structures that physically implement the desired interface. For example, because
ArrayList and LinkedList implement the List interface, the basic List operations are the
Containers in Depth 617 

same regardless of which one you use. However, ArrayList is backed by an array, and
LinkedList is implemented in the usual way for a doubly linked list, as individual objects
each containing data along with references to the previous and next elements in the list.
Because of this, if you want to do many insertions and removals in the middle of a list, a
LinkedList is the appropriate choice. (LinkedList also has additional functionality that is
established in AbstractSequentialList.) If not, an ArrayList is typically faster.
As another example, a Set can be implemented as either a TreeSet, a HashSet, or a
LinkedHashSet. 9 Each one has different behaviors: HashSet is for typical use and
provides raw speed on lookup, LinkedHashSet keeps pairs in insertion order, and TreeSet
is backed by TreeMap and is designed to produce a constantly sorted set. You choose the
implementation based on the behavior you need.
Sometimes different implementations of a particular container will have operations in
common, but the performance of those operations will be different. In this case, you'll choose
between implementations based on how often you use a particular operation, and how fast
you need it to be. For cases like this, one way to look at the differences between container
implementations is with a performance test.
A performance test framework
To prevent code duplication and to provide consistency among tests, I've put the basic
functionality of the test process into a framework. The following code establishes a base class
from which you create a list of anonymous inner classes, one for each different test. Each of
these inner classes is called as part of the testing process. This approach allows you to easily
add and remove new kinds of tests.
This is another example of the Template Method design pattern. Although you follow the
typical Template Method approach of overriding the method Test.test( ) for each particular
test, in this case the core code (that doesn't change) is in a separate Tester class. 10 The type
of container under test is the generic parameter C:

```java
//: containers/Test.java
// Framework for performing timed tests of containers.

public abstract class Test<C> {
String name;
public Test(String name) { this.name = name; }
// Override this method for different tests.
// Returns actual number of repetitions of test.
abstract int test(C container, TestParam tp);
} ///:~
```
Each Test object stores the name of that test. When you call the test( ) method, it must be
given the container to be tested along with a "messenger" or "data transfer object" that holds
the various parameters for that particular test. The parameters include size, indicating the
number of elements in the container, and loops, which controls the number of iterations for
that test. These parameters may or may not be used in every test.
Each container will undergo a sequence of calls to test( ), each with a different TestParam,
so TestParam also contains static array( ) methods that make it easy to create arrays of
TestParam objects. The first version of array( ) takes a variable argument list containing
alternating size and loops values, and the second version takes the same kind of list except

9 Or as an EnumSet or CopyOnWriteArraySet, which are special cases. While acknowledging that there maybe
additional specialized implementations of various container interfaces, this section attempts to look at the more general
cases.
10 Krzysztof Sobolewski assisted me in figuring out the generics for this example.

that the values are inside Strings—this way, it can be used to parse commandline
arguments:

```java
//: containers/TestParam.java
// A "data transfer object."

public class TestParam {
public final int size;
public final int loops;
public TestParam(int size, int loops) {
this.size = size;
this.loops = loops;
}
// Create an array of TestParam from a varargs sequence:
public static TestParam[] array(int... values) {
int size = values.length/2;
TestParam[] result = new TestParam[size];
int n = 0;
for(int i = 0; i < size; i++)
result[i] = new TestParam(values[n++], values[n++]);
return result;
}
// Convert a String array to a TestParam array:
public static TestParam[] array(String[] values) {
int[] vals = new int[values.length];
for(int i = 0; i < vals.length; i++)
vals[i] = Integer.decode(values[i]);
return array(vals);
}
} ///:~
```
To use the framework, you pass the container to be tested along with a List of Test objects to
a Tester.run( ) method (these are overloaded generic convenience methods which reduce
the amount of typing necessary to use them). Tester.run( ) calls the appropriate overloaded
constructor, then calls timedTest( ), which executes each test in the list for that container.
timedTest( ) repeats each test for each of the TestParam objects in paramList. Because
paramList is initialized from the static defaultParams array, you can change the
paramList for all tests by reassigning defaultParams, or you can change the paramList
for one test by passing in a custom paramList for that test:

```java
//: containers/Tester.java
// Applies Test objects to lists of different containers.
import java.util.*;

public class Tester<C> {
public static int fieldWidth = 8;
public static TestParam[] defaultParams= TestParam.array(
10, 5000, 100, 5000, 1000, 5000, 10000, 500);
// Override this to modify pre-test initialization:
protected C initialize(int size) { return container; }
protected C container;
private String headline = "";
private List<Test<C>> tests;
private static String stringField() {
return "%" + fieldWidth + "s";
}
private static String numberField() {
return "%" + fieldWidth + "d";
}
private static int sizeWidth = 5;
private static String sizeField = "%" + sizeWidth + "s";
private TestParam[] paramList = defaultParams;
Containers in Depth 619 

public Tester(C container, List<Test<C>> tests) {
this.container = container;
this.tests = tests;
if(container != null)
headline = container.getClass().getSimpleName();
}
public Tester(C container, List<Test<C>> tests,
TestParam[] paramList) {
this(container, tests);
this.paramList = paramList;
}
public void setHeadline(String newHeadline) {
headline = newHeadline;
}
// Generic methods for convenience :
public static <C> void run(C cntnr, List<Test<C>> tests){
new Tester<C>(cntnr, tests).timedTest();
}
public static <C> void run(C cntnr,
List<Test<C>> tests, TestParam[] paramList) {
new Tester<C>(cntnr, tests, paramList).timedTest();
}
private void displayHeader() {
// Calculate width and pad with '-':
int width = fieldWidth * tests.size() + sizeWidth;
int dashLength = width - headline.length() - 1;
StringBuilder head = new StringBuilder(width);
for(int i = 0; i < dashLength/2; i++)
head.append('-');
head.append(' ');
head.append(headline);
head.append(' ');
for(int i = 0; i < dashLength/2; i++)
head.append('-');
System.out.println(head);
// Print column headers:
System.out.format(sizeField, "size");
for(Test test : tests)
System.out.format(stringField(), test.name);
System.out.println();
}
// Run the tests for this container:
public void timedTest() {
displayHeader();
for(TestParam param : paramList) {
System.out.format(sizeField, param.size);
for(Test<C> test : tests) {
C kontainer = initialize(param.size);
long start = System.nanoTime();
// Call the overriden method:
int reps = test.test(kontainer, param);
long duration = System.nanoTime() - start;
long timePerRep = duration / reps; // Nanoseconds
System.out.format(numberField(), timePerRep);
}
System.out.println();
}
}
} ///:~
```
The stringField( ) and numberField( ) methods produce formatting strings for
outputting the results. The standard width for formatting can be changed by modifying the

static fieldWidth value. The displayHeader( ) method formats and prints the header
information for each test.
If you need to perform special initialization, override the initialize( ) method. This
produces an initialized container object of the appropriate size—you can either modify the
existing container object or create a new one. You can see in test( ) that the result is
captured in a local reference called kontainer, which allows you to replace the stored
member container with a completely different initialized container.
The return value of each Test.test( ) method must be the number of operations performed
by that test, which is used to calculate the number of nanoseconds required for each
operation. You should be aware that System.nanoTime( ) typically produces values with a
granularity that is greater than one (and this granularity will vary with machines and
operating systems), and this will produce a certain amount of rattle in the results.
The results may vary from machine to machine; these tests are only intended to compare the
performance of the different containers.
Choosing between Lists
Here is a performance test for the most essential of the List operations. For comparison, it
also shows the most important Queue operations. Two separate lists of tests are created for
testing each class of container. In this case, Queue operations only apply to LinkedLists.

```java
//: containers/ListPerformance.java
// Demonstrates performance differences in Lists.
// {Args: 100 500} Small to keep build testing short
import java.util.*;
import net.mindview.util.*;

public class ListPerformance {
static Random rand = new Random();
static int reps = 1000;
static List<Test<List<Integer>>> tests =
new ArrayList<Test<List<Integer>>>();
static List<Test<LinkedList<Integer>>> qTests =
new ArrayList<Test<LinkedList<Integer>>>();
static {
tests.add(new Test<List<Integer>>("add") {
int test(List<Integer> list, TestParam tp) {
int loops = tp.loops;
int listSize = tp.size;
for(int i = 0; i < loops; i++) {
list.clear();
for(int j = 0; j < listSize; j++)
list.add(j);
}
return loops * listSize;
}
});
tests.add(new Test<List<Integer>>("get") {
int test(List<Integer> list, TestParam tp) {
int loops = tp.loops * reps;
int listSize = list.size();
for(int i = 0; i < loops; i++)
list.get(rand.nextInt(listSize));
return loops;
}
});
tests.add(new Test<List<Integer>>("set") {
Containers in Depth 621 

int test(List<Integer> list, TestParam tp) {
int loops = tp.loops * reps;
int listSize = list.size();
for(int i = 0; i < loops; i++)
list.set(rand.nextInt(listSize), 47);
return loops;
}
});
tests.add(new Test<List<Integer>>("iteradd") {
int test(List<Integer> list, TestParam tp) {
final int LOOPS = 1000000;
int half = list.size() / 2;
ListIterator<Integer> it = list.listIterator(half);
for(int i = 0; i < LOOPS; i++)
it.add(47);
return LOOPS;
}
});
tests.add(new Test<List<Integer>>("insert") {
int test(List<Integer> list, TestParam tp) {
int loops = tp.loops;
for(int i = 0; i < loops; i++)
list.add(5, 47); // Minimize random-access cost
return loops;
}
});
tests.add(new Test<List<Integer>>("remove") {
int test(List<Integer> list, TestParam tp) {
int loops = tp.loops;
int size = tp.size;
for(int i = 0; i < loops; i++) {
list.clear();
list.addAll(new CountingIntegerList(size));
while(list.size() > 5)
list.remove(5); // Minimize random-access cost
}
return loops * size;
}
});
// Tests for queue behavior:
qTests.add(new Test<LinkedList<Integer>>("addFirst") {
int test(LinkedList<Integer> list, TestParam tp) {
int loops = tp.loops;
int size = tp.size;
for(int i = 0; i < loops; i++) {
list.clear();
for(int j = 0; j < size; j++)
list.addFirst(47);
}
return loops * size;
}
});
qTests.add(new Test<LinkedList<Integer>>("addLast") {
int test(LinkedList<Integer> list, TestParam tp) {
int loops = tp.loops;
int size = tp.size;
for(int i = 0; i < loops; i++) {
list.clear();
for(int j = 0; j < size; j++)
list.addLast(47);
}
return loops * size;
}

});
qTests.add(
new Test<LinkedList<Integer>>("rmFirst") {
int test(LinkedList<Integer> list, TestParam tp) {
int loops = tp.loops;
int size = tp.size;
for(int i = 0; i < loops; i++) {
list.clear();
list.addAll(new CountingIntegerList(size));
while(list.size() > 0)
list.removeFirst();
}
return loops * size;
}
});
qTests.add(new Test<LinkedList<Integer>>("rmLast") {
int test(LinkedList<Integer> list, TestParam tp) {
int loops = tp.loops;
int size = tp.size;
for(int i = 0; i < loops; i++) {
list.clear();
list.addAll(new CountingIntegerList(size));
while(list.size() > 0)
list.removeLast();
}
return loops * size;
}
});
}
static class ListTester extends Tester<List<Integer>> {
public ListTester(List<Integer> container,
List<Test<List<Integer>>> tests) {
super(container, tests);
}
// Fill to the appropriate size before each test:
@Override protected List<Integer> initialize(int size){
container.clear();
container.addAll(new CountingIntegerList(size));
return container;
}
// Convenience method:
public static void run(List<Integer> list,
List<Test<List<Integer>>> tests) {
new ListTester(list, tests).timedTest();
}
}
public static void main(String[] args) {
if(args.length > 0)
Tester.defaultParams = TestParam.array(args);
// Can only do these two tests on an array:
Tester<List<Integer>> arrayTest =
new Tester<List<Integer>>(null, tests.subList(1, 3)){
// This will be called before each test. It
// produces a non-resizeable array-backed list:
@Override protected
List<Integer> initialize(int size) {
Integer[] ia = Generated.array(Integer.class,
new CountingGenerator.Integer(), size);
return Arrays.asList(ia);
}
};
arrayTest.setHeadline("Array as List");
arrayTest.timedTest();
Containers in Depth 623 

Tester.defaultParams= TestParam.array(
10, 5000, 100, 5000, 1000, 1000, 10000, 200);
if(args.length > 0)
Tester.defaultParams = TestParam.array(args);
ListTester.run(new ArrayList<Integer>(), tests);
ListTester.run(new LinkedList<Integer>(), tests);
ListTester.run(new Vector<Integer>(), tests);
Tester.fieldWidth = 12;
Tester<LinkedList<Integer>> qTest =
new Tester<LinkedList<Integer>>(
new LinkedList<Integer>(), qTests);
qTest.setHeadline("Queue tests");
qTest.timedTest();
}
} /* Output: (Sample)
--- Array as List ---
size get set
10 130 183
100 130 164
1000 129 165
10000 129 165
--------------------- ArrayList ---------------------
size add get set iteradd insert remove
10 121 139 191 435 3952 446
100 72 141 191 247 3934 296
1000 98 141 194 839 2202 923
10000 122 144 190 6880 14042 7333
--------------------- LinkedList ---------------------
size add get set iteradd insert remove
10 182 164 198 658 366 262
100 106 202 230 457 108 201
1000 133 1289 1353 430 136 239
10000 172 13648 13187 435 255 239
----------------------- Vector -----------------------
size add get set iteradd insert remove
10 129 145 187 290 3635 253
100 72 144 190 263 3691 292
1000 99 145 193 846 2162 927
10000 108 145 186 6871 14730 7135
-------------------- Queue tests --------------------
size addFirst addLast rmFirst rmLast
10 199 163 251 253
100 98 92 180 179
1000 99 93 216 212
10000 111 109 262 384
*///:~
```
Each test requires careful thought to ensure that you are producing meaningful results. For
example, the "add" test clears the List and then refills it to the specified list size. The call to
clear( ) is thus part of the test, and may have an impact on the time, especially for small
tests. Although the results here seem fairly reasonable, you could imagine rewriting the test
framework so that there is a call to a preparation method (which would, in this case, include
the clear( ) call) outside of the timing loop.
Note that for each test, you must accurately calculate the number of operations that occur
and return that value from test( ), so the timing is correct.
The "get" and "set" tests both use the random number generator to perform random
accesses to the List. In the output, you can see that, for a List backed by an array and for an
ArrayList, these accesses are fast and very consistent regardless of the list size, whereas for

a LinkedList, the access times grow very significantly for larger lists. Clearly, linked lists are
not a good choice if you will be performing many random accesses.
The "iteradd" test uses an iterator in the middle of the list to insert new elements. For an
ArrayList this gets expensive as the list gets bigger, but for a LinkedList it is relatively
cheap, and constant regardless of size. This makes sense because an ArrayList must create
space and copy all its references forward during an insertion. This becomes expensive as the
ArrayList gets bigger. A LinkedList only needs to link in a new element, and doesn't have
to modify the rest of the list, so you expect the cost to be roughly the same regardless of the
list size.
The "insert" and "remove" tests both use location number 5 as the point of insertion or
removal, rather than either end of the List. A LinkedList treats the endpoints of the List
specially—this improves the speed when using a LinkedList as a Queue. However, if you
add or remove elements in the middle of the list, you include the cost of random access,
which we've already seen varies with the different List implementations. By performing the
insertions and removals at location 5, the cost of the random access should be negligible and
we should see only the cost of insertion and removal, but we will not see any specialized
optimization for the end of a LinkedList. You can see from the output that the cost of
insertion and removal in a LinkedList is quite cheap and doesn't vary with the list size, but
with an ArrayList, insertions especially are very expensive, and the cost increases with list
size.
From the Queue tests, you can see how quickly a LinkedList can insert and remove
elements from the endpoints of the list, which is optimal for Queue behavior.
Normally, you can just call Tester.run( ), passing the container and the tests list. Here,
however, we must override the initialize( ) method so that the List is cleared and refilled
before each test—otherwise the List control over the size of the List would be lost during the
various tests. ListTester inherits from Tester and performs this initialization using
CountingIntegerList. The run( ) convenience method is also overridden. We'd also like to
compare array access to container access (primarily against ArrayList). In the first test in
main( ), a special Test object is created using an anonymous inner class. The initialize( )
method is overridden to create a new object each time it is called (ignoring the stored
container object, so null is the container argument for this Tester constructor). The new
object is created using Generated.array( ) (which was defined in the Arrays chapter) and
Arrays.asList( ). Only two of the tests can be performed in this case, because you cannot
insert or remove elements when using a List backed by an array, so the List.subList( )
method is used to select the desired tests from the tests list.
For random-access get( ) and set( ) operations, a List backed by an array is slightly faster
than an ArrayList, but the same operations are dramatically more expensive for a
LinkedList because it is not designed for randomaccess operations.
Vector should be avoided; it's only in the library for legacy code support (the only reason it
works in this program is because it was adapted to be a List for forward compatibility).
The best approach is probably to choose an ArrayList as your default and to change to a
LinkedList if you need its extra functionality or you discover performance problems due to
many insertions and removals from the middle of the list. If you are working with a fixed-
sized group of elements, either use a List backed by an array (as produced by
Arrays.asList( )), or if necessary, an actual array.
CopyOnWriteArrayList is a special implementation of List used in concurrent
programming, and will be discussed in the Concurrency chapter.

Exercise 29: (2) Modify ListPerformance.java so that the Lists hold String objects
instead of Integers. Use a Generator from the Arrays chapter to create test values.
Containers in Depth 625 


Exercise 30: (3) Compare the performance of Collections.sort( ) between an
ArrayList and a LinkedList.

Exercise 31: (5) Create a container that encapsulates an array of String, and that only
allows adding Strings and getting Strings, so that there are no casting issues during use. If
the internal array isn't big enough for the next add, your container should automatically
resize it. In main( ), compare the performance of your container with an
ArrayList<String>.

Exercise 32: (2) Repeat the previous exercise for a container of int, and compare the
performance to an ArrayList<Integer>. In your performance comparison, include the
process of incrementing each object in the container.

Exercise 33: (5) Create a FastTraversalLinkedList that internally uses a LinkedList
for rapid insertions and removals, and an ArrayList for rapid traversals and get( )
operations. Test it by modifying ListPerformance.java.
Microbenchmarking dangers
When writing so-called microbenchmarks, you must be careful not to assume too much, and
to narrow your tests so that as much as possible they are only timing the items of interest.
You must also be careful to ensure that your tests run long enough to produce interesting
data, and take into account that some of the Java HotSpot technologies will only kick in when
a program runs for a certain time (this is important to consider for short-running programs,
as well).
Results will be different according to the computer and JVM you are using, so you should run
these tests yourself to verify that the results are similar to those shown in this book. You
should not be so concerned with absolute numbers as with the performance comparisons
between one type of container and another.
Also, a profiler may do a better job of performance analysis than you can. Java comes with a
profiler (see the supplement at http://MindView.net/Books/BetterJava) and there are third-
party profilers available, both free/open-source and commercial.
A related example concerns Math.random( ). Does it produce a value from zero to one,
inclusive or exclusive of the value "1"? In math lingo, is it (0,1), or [0,1], or (0,1] or [0,1)? (The
square bracket means "includes," whereas the parenthesis means "doesn't include.") A test
program might provide the answer:

```java
//: containers/RandomBounds.java
// Does Math.random() produce 0.0 and 1.0?
// {RunByHand}
import static net.mindview.util.Print.*;

public class RandomBounds {
static void usage() {
print("Usage:");
print("\tRandomBounds lower");
print("\tRandomBounds upper");
System.exit(1);
}
public static void main(String[] args) {
if(args.length != 1) usage();
if(args[0].equals("lower")) {
while(Math.random() != 0.0)
; // Keep trying

print("Produced 0.0!");
}
else if(args[0].equals("upper")) {
while(Math.random() != 1.0)
; // Keep trying
print("Produced 1.0!");
}
else
usage();
}
} ///:~
```

To run the program, you type a command line of either:
java RandomBounds lower
or
java RandomBounds upper
In both cases, you are forced to break out of the program manually, so it would appear that
Math.random( ) never produces either o.o or l.o. But this is where such an experiment can
be deceiving. If you consider that there are about 262 different double fractions between o
and 1, the likelihood of reaching any one value experimentally might exceed the lifetime of
one computer, or even one experimenter. It turns out that 0.0 is included in the output of
Math.random( ). Or, in math lingo, it is [0,1). Thus, you must be careful to analyze your
experiments and to understand their limitations.
Choosing between Sets
Depending on the behavior you desire, you can choose a TreeSet, a HashSet, or a
LinkedHashSet. The following test program gives an indication of the performance trade-
off between these implementations:

```java
//: containers/SetPerformance.java
// Demonstrates performance differences in Sets.
// {Args: 100 5000} Small to keep build testing short
import java.util.*;

public class SetPerformance {
static List<Test<Set<Integer>>> tests =
new ArrayList<Test<Set<Integer>>>();
static {
tests.add(new Test<Set<Integer>>("add") {
int test(Set<Integer> set, TestParam tp) {
int loops = tp.loops;
int size = tp.size;
for(int i = 0; i < loops; i++) {
set.clear();
for(int j = 0; j < size; j++)
set.add(j);
}
return loops * size;
}
});
tests.add(new Test<Set<Integer>>("contains") {
int test(Set<Integer> set, TestParam tp) {
int loops = tp.loops;
Containers in Depth 627 

int span = tp.size * 2;
for(int i = 0; i < loops; i++)
for(int j = 0; j < span; j++)
set.contains(j);
return loops * span;
}
});
tests.add(new Test<Set<Integer>>("iterate") {
int test(Set<Integer> set, TestParam tp) {
int loops = tp.loops * 10;
for(int i = 0; i < loops; i++) {
Iterator<Integer> it = set.iterator();
while(it.hasNext())
it.next();
}
return loops * set.size();
}
});
}
public static void main(String[] args) {
if(args.length > 0)
Tester.defaultParams = TestParam.array(args);
Tester.fieldWidth = 10;
Tester.run(new TreeSet<Integer>(), tests);
Tester.run(new HashSet<Integer>(), tests);
Tester.run(new LinkedHashSet<Integer>(), tests);
}
} /* Output: (Sample)
------------- TreeSet -------------
size add contains iterate
10 746 173 89
100 501 264 68
1000 714 410 69
10000 1975 552 69
------------- HashSet -------------
size add contains iterate
10 308 91 94
100 178 75 73
1000 216 110 72
10000 711 215 100
---------- LinkedHashSet ----------
size add contains iterate
10 350 65 83
100 270 74 55
1000 303 111 54
10000 1615 256 58
*///:~
```
The performance of HashSet is generally superior to TreeSet, but especially when adding
elements and looking them up, which are the two most important operations. TreeSet exists
because it maintains its elements in sorted order, so you use it only when you need a sorted
Set. Because of the internal structure necessary to support sorting and because iteration is
something you're more likely to do, iteration is usually faster with a TreeSet than a
HashSet.
Note that LinkedHashSet is more expensive for insertions than HashSet; this is because
of the extra cost of maintaining the linked list along with the hashed container.

Exercise 34: (1) Modify SetPerformance.java so that the Sets hold String objects
instead of Integers. Use a Generator from the Arrays chapter to create test values.

Choosing between Maps
This program gives an indication of the trade-off between Map implementations:

```java
//: containers/MapPerformance.java
// Demonstrates performance differences in Maps.
// {Args: 100 5000} Small to keep build testing short
import java.util.*;

public class MapPerformance {
static List<Test<Map<Integer,Integer>>> tests =
new ArrayList<Test<Map<Integer,Integer>>>();
static {
tests.add(new Test<Map<Integer,Integer>>("put") {
int test(Map<Integer,Integer> map, TestParam tp) {
int loops = tp.loops;
int size = tp.size;
for(int i = 0; i < loops; i++) {
map.clear();
for(int j = 0; j < size; j++)
map.put(j, j);
}
return loops * size;
}
});
tests.add(new Test<Map<Integer,Integer>>("get") {
int test(Map<Integer,Integer> map, TestParam tp) {
int loops = tp.loops;
int span = tp.size * 2;
for(int i = 0; i < loops; i++)
for(int j = 0; j < span; j++)
map.get(j);
return loops * span;
}
});
tests.add(new Test<Map<Integer,Integer>>("iterate") {
int test(Map<Integer,Integer> map, TestParam tp) {
int loops = tp.loops * 10;
for(int i = 0; i < loops; i ++) {
Iterator it = map.entrySet().iterator();
while(it.hasNext())
it.next();
}
return loops * map.size();
}
});
}
public static void main(String[] args) {
if(args.length > 0)
Tester.defaultParams = TestParam.array(args);
Tester.run(new TreeMap<Integer,Integer>(), tests);
Tester.run(new HashMap<Integer,Integer>(), tests);
Tester.run(new LinkedHashMap<Integer,Integer>(),tests);
Tester.run(
new IdentityHashMap<Integer,Integer>(), tests);
Tester.run(new WeakHashMap<Integer,Integer>(), tests);
Tester.run(new Hashtable<Integer,Integer>(), tests);
}
} /* Output: (Sample)
---------- TreeMap ----------
size put get iterate
Containers in Depth 629 

10 748 168 100
100 506 264 76
1000 771 450 78
10000 2962 561 83
---------- HashMap ----------
size put get iterate
10 281 76 93
100 179 70 73
1000 267 102 72
10000 1305 265 97
------- LinkedHashMap -------
size put get iterate
10 354 100 72
100 273 89 50
1000 385 222 56
10000 2787 341 56
------ IdentityHashMap ------
size put get iterate
10 290 144 101
100 204 287 132
1000 508 336 77
10000 767 266 56
-------- WeakHashMap --------
size put get iterate
10 484 146 151
100 292 126 117
1000 411 136 152
10000 2165 138 555
--------- Hashtable ---------
size put get iterate
10 264 113 113
100 181 105 76
1000 260 201 80
10000 1245 134 77
*///:~
```
Insertions for all the Map implementations except for IdentityHashMap get significantly
slower as the size of the Map gets large. In general, however, lookup is much cheaper than
insertion, which is good because you'll typically be looking items up much more often than
you insert them.
Hashtable performance is roughly the same as HashMap. Since HashMap is intended to
replace Hashtable, and thus uses the same underlying storage and lookup mechanism
(which you will learn about later), this is not too surprising.
A TreeMap is generally slower than a HashMap. As with TreeSet, a TreeMap is a way to
create an ordered list. The behavior of a tree is such that it's always in order and doesn't have
to be specially sorted. Once you fill a TreeMap, you can call keySet( ) to get a Set view of
the keys, then toArray( ) to produce an array of those keys. You can then use the static
method Arrays.binarySearch( ) to rapidly find objects in your sorted array. Of course,
this only makes sense if the behavior of a HashMap is unacceptable, since HashMap is
designed to rapidly find keys. Also, you can easily create a HashMap from a TreeMap with
a single object creation or call to putAll( ). In the end, when you're using a Map, your first
choice should be HashMap, and only if you need a constantly sorted Map will you need
TreeMap.
LinkedHashMap tends to be slower than HashMap for insertions because it maintains
the linked list (to preserve insertion order) in addition to the hashed data structure. Because
of this list, iteration is faster.

Containers in Depth 631 
IdentityHashMap has different performance because it uses == rather than equals( ) for
comparisons. WeakHashMap is described later in this chapter.

Exercise 35: (1) Modify MapPerformance.java to include tests of SlowMap.

Exercise 36: (5) Modify SlowMap so that instead of two ArrayLists, it holds a single
ArrayList of MapEntry objects. Verify that the modified version works correctly. Using
MapPerformance.java, test the speed of your new Map. Now change the put( ) method
so that it performs a sort( ) after each pair is entered, and modify get( ) to use
Collections.binarySearch( ) to look up the key. Compare the performance of the new
version with the old ones.

Exercise 37: (2) Modify SimpleHashMap to use ArrayLists instead of LinkedLists.
Modify MapPerformance.java to compare the performance of the two implementations.
HashMap performance factors
It's possible to hand-tune a HashMap to increase its performance for your particular
application. So that you can understand performance issues when tuning a HashMap, some
terminology is necessary:

Capacity: The number of buckets in the table.

Initial capacity: The number of buckets when the table is created. HashMap and
HashSet have constructors that allow you to specify the initial capacity.

Size: The number of entries currently in the table.

Load factor: Size/capacity. A load factor of o is an empty table, 0.5 is a half-full table,
etc. A lightly loaded table will have few collisions and so is optimal for insertions and
lookups (but will slow down the process of traversing with an iterator). HashMap and
HashSet have constructors that allow you to specify the load factor, which means that
when this load factor is reached, the container will automatically increase the capacity
(the number of buckets) by roughly doubling it and will redistribute the existing objects
into the new set of buckets (this is called rehashing).

The default load factor used by HashMap is 0.75 (it doesn't rehash until the table is three-
fourths full). This seems to be a good trade-off between time and space costs. A higher load
factor decreases the space required by the table but increases the lookup cost, which is
important because lookup is what you do most of the time (including both get( ) and put(
)).
If you know that you'll be storing many entries in a HashMap, creating it with an
appropriately large initial capacity will prevent the overhead of automatic rehashing. 11

Exercise 38: (3) Look up the HashMap class in the JDK documentation. Create a
HashMap, fill it with elements, and determine the load factor. Test the lookup speed with
this map, then attempt to increase the speed by making a new HashMap with a larger initial
capacity and copying the old map into the new one, then run your lookup speed test again on
the new map.

11 In a private message, Joshua Bloch wrote: "... I believe that we erred by allowing implementation details (such as hash
table size and load factor) into our APIs. The client should perhaps tell us the maximum expected size of a collection, and
we should take it from there. Clients can easily do more harm than good by choosing values for these parameters. As an
extreme example, consider Vector's capacitylncrement. No one should ever set this, and we shouldn't have provided
it. If you set it to any nonzero value, the asymptotic cost of a sequence of appends goes from linear to quadratic. In other
words, it destroys your performance. Over time, we're beginning to wise up about this sort of thing. If you look at
IdentityHashMap, you'll see that it has no low-level tuning parameters."


Exercise 39: (6) Add a private rehash( ) method to SimpleHashMap that is
invoked when the load factor exceeds 0.75. During rehashing, double the number of buckets,
then search for the first prime number greater than that to determine the new number of
buckets.
Utilities
There are a number of standalone utilities for containers, expressed as static methods inside
the java.util.Collections class. You've already seen some of these, such as addAll( ),
reverseOrder( ) and binarySearch( ). Here are the others (the synchronized and
unmodifiable utilities will be covered in sections that follow). In this table, generics are
used when they are relevant:
checkedCollection(
Collection<T>, Class<T> type)
checkedList(
List<T>, Class<T> type)
checkedMap(Map<K,V>,
Class <K> keyType,
Class <V> valueType)
checkedSet(Set<T>,
Class<T> type)
checkedSortedMap(
SortedMap<K,V>,
Class<K> keyType,
Class <V> valueType)
checkedSortedSet(
SortedSet<T>,
Class<T> type)
Produces a dynamically type-safe
view of a Collection, or a specific
subtype of Collection. Use this
when it's not possible to use the
statically checked version.
These were shown in the Generics
chapter under the heading
"Dynamic type safety."
max(Collection)
min(Collection)
Produces the maximum or
minimum element in the argument
using the natural comparison
method of the objects in the
Collection.
max(Collection, Comparator)
min(Collection, Comparator)
Produces the maximum or
minimum element in the
Collection using the
Comparator.
indexOfSubList(List source,
List target)
Produces starting index of the first
place where target appears inside
source, or -1 if none occurs.
lastIndexOfSubList(List
source, List target)
Produces starting index of the last
place where target appears inside
source, or -1 if none occurs.
replaceAll(List<T>,
T oldVal, T newVal)
Replaces all oldVal with newVal.
reverse(List) Reverses all the elements in place.
reverseOrder( )
reverseOrder(
Comparator<T>)
Returns a Comparator that
reverses the natural ordering of a
collection of objects that implement
Comparable<T>. The second
version reverses the order of the
supplied Comparator.

rotate(List, int distance) Moves all elements forward by
distance, taking the ones off the
end and placing them at the
beginning.
shuffle(List)
shuffle(List, Random)
Randomly permutes the specified
list. The first form provides its own
randomization source, or you may
provide your own with the second
form.
sort(List<T>)
sort(List<T>,
Comparator<? super T> c)
Sorts the List<T> using its natural
ordering. The second form allows
you to provide a Comparator for
sorting.
copy(List<? super T> dest,
List<? extends T> src)
Copies elements from src to dest.
swap(List, int i, int j) Swaps elements at locations i and j
in the List. Probably faster than
what you'd write by hand.
fill(List<? super T>, T x) Replaces all the elements of list
with x.
nCopies(int n, T x) Returns an immutable List<T> of
size n whose references all point to
x.
disjoint(Collection, Collection) Returns true if the two collections
have no elements in common.
frequency(Collection, Object x) Returns the number of elements in
the Collection equal to x.
emptyList( )
emptyMap( )
emptySet( )
Returns an immutable empty List,
Map, or Set. These are generic, so
the resulting Collection will be
parameterized to the desired type.
singleton(T x)
singletonList(T x)
singletonMap(K key, V value)
Produces an immutable Set<T>,
List<T>, or Map<K,V>
containing a single entry based on
the given argument(s).
list(Enumeration<T> e) Produces an ArrayList<T>
containing the elements in the
order in which they are returned by
the (old-style) Enumeration
(predecessor to the Iterator). For
converting from legacy code.
enumeration(Collection<T>) Produces an old-style
Enumeration<T> for the
argument.
Note that min( ) and max( ) work with Collection objects, not with Lists, so you don't
need to worry about whether the Collection should be sorted or not. (As mentioned earlier,
you do need to sort( ) a List or an array before performing a binarySearch( ).)
Here's an example showing the basic use of most of the utilities in the above table:
Containers in Depth 633 


```java
//: containers/Utilities.java
// Simple demonstrations of the Collections utilities.
import java.util.*;
import static net.mindview.util.Print.*;

public class Utilities {
static List<String> list = Arrays.asList(
"one Two three Four five six one".split(" "));
public static void main(String[] args) {
print(list);
print("'list' disjoint (Four)?: " +
Collections.disjoint(list,
Collections.singletonList("Four")));
print("max: " + Collections.max(list));
print("min: " + Collections.min(list));
print("max w/ comparator: " + Collections.max(list,
String.CASE_INSENSITIVE_ORDER));
print("min w/ comparator: " + Collections.min(list,
String.CASE_INSENSITIVE_ORDER));
List<String> sublist =
Arrays.asList("Four five six".split(" "));
print("indexOfSubList: " +
Collections.indexOfSubList(list, sublist));
print("lastIndexOfSubList: " +
Collections.lastIndexOfSubList(list, sublist));
Collections.replaceAll(list, "one", "Yo");
print("replaceAll: " + list);
Collections.reverse(list);
print("reverse: " + list);
Collections.rotate(list, 3);
print("rotate: " + list);
List<String> source =
Arrays.asList("in the matrix".split(" "));
Collections.copy(list, source);
print("copy: " + list);
Collections.swap(list, 0, list.size() - 1);
print("swap: " + list);
Collections.shuffle(list, new Random(47));
print("shuffled: " + list);
Collections.fill(list, "pop");
print("fill: " + list);
print("frequency of 'pop': " +
Collections.frequency(list, "pop"));
List<String> dups = Collections.nCopies(3, "snap");
print("dups: " + dups);
print("'list' disjoint 'dups'?: " +
Collections.disjoint(list, dups));
// Getting an old-style Enumeration:
Enumeration<String> e = Collections.enumeration(dups);
Vector<String> v = new Vector<String>();
while(e.hasMoreElements())
v.addElement(e.nextElement());
// Converting an old-style Vector
// to a List via an Enumeration:
ArrayList<String> arrayList =
Collections.list(v.elements());
print("arrayList: " + arrayList);
}
} /* Output:
[one, Two, three, Four, five, six, one]
'list' disjoint (Four)?: false
max: three
min: Four

max w/ comparator: Two
min w/ comparator: five
indexOfSubList: 3
lastIndexOfSubList: 3
replaceAll: [Yo, Two, three, Four, five, six, Yo]
reverse: [Yo, six, five, Four, three, Two, Yo]
rotate: [three, Two, Yo, Yo, six, five, Four]
copy: [in, the, matrix, Yo, six, five, Four]
swap: [Four, the, matrix, Yo, six, five, in]
shuffled: [six, matrix, the, Four, Yo, five, in]
fill: [pop, pop, pop, pop, pop, pop, pop]
frequency of 'pop': 7
dups: [snap, snap, snap]
'list' disjoint 'dups'?: true
arrayList: [snap, snap, snap]
*///:~
```
The output explains the behavior of each utility method. Note the difference in min( ) and
max( ) with the String.CASE_INSENSITIVE_ORDER Comparator because of
capitalization.
Sorting and searching Lists
Utilities to perform sorting and searching for Lists have the same names and signatures as
those for sorting arrays of objects, but are static methods of Collections instead of Arrays.
Here's an example that uses the list data from Utilities.java:

```java
//: containers/ListSortSearch.java
// Sorting and searching Lists with Collections utilities.
import java.util.*;
import static net.mindview.util.Print.*;

public class ListSortSearch {
public static void main(String[] args) {
List<String> list =
new ArrayList<String>(Utilities.list);
list.addAll(Utilities.list);
print(list);
Collections.shuffle(list, new Random(47));
print("Shuffled: " + list);
// Use a ListIterator to trim off the last elements:
ListIterator<String> it = list.listIterator(10);
while(it.hasNext()) {
it.next();
it.remove();
}
print("Trimmed: " + list);
Collections.sort(list);
print("Sorted: " + list);
String key = list.get(7);
int index = Collections.binarySearch(list, key);
print("Location of " + key + " is " + index +
", list.get(" + index + ") = " + list.get(index));
Collections.sort(list, String.CASE_INSENSITIVE_ORDER);
print("Case-insensitive sorted: " + list);
key = list.get(7);
index = Collections.binarySearch(list, key,
String.CASE_INSENSITIVE_ORDER);
print("Location of " + key + " is " + index +
", list.get(" + index + ") = " + list.get(index));
}
Containers in Depth 635 

} /* Output:
[one, Two, three, Four, five, six, one, one, Two, three, Four, five,
six, one]
Shuffled: [Four, five, one, one, Two, six, six, three, three, five,
Four, Two, one, one]
Trimmed: [Four, five, one, one, Two, six, six, three, three, five]
Sorted: [Four, Two, five, five, one, one, six, six, three, three]
Location of six is 7, list.get(7) = six
Case-insensitive sorted: [five, five, Four, one, one, six, six, three,
three, Two]
Location of three is 7, list.get(7) = three
*///:~
```
Just as when searching and sorting with arrays, if you sort using a Comparator, you must
binarySearch( ) using the same Comparator.
This program also demonstrates the shuffle( ) method in Collections, which randomizes
the order of a List. A ListIterator is created at a particular location in the shuffled list, and
used to remove the elements from that location until the end of the list.

Exercise 40: (5) Create a class containing two String objects and make it Comparable
so that the comparison only cares about the first String. Fill an array and an ArrayList with
objects of your class, using the RandomGenerator generator. Demonstrate that sorting
works properly. Now make a Comparator that only cares about the second String, and
demonstrate that sorting works properly. Also perform a binary search using your
Comparator.

Exercise 41: (3) Modify the class in the previous exercise so that it will work with
HashSets and as a key in HashMaps.

Exercise 42: (2) Modify Exercise 40 so that an alphabetic sort is used.
Making a Collection or Map
unmodifiable
Often it is convenient to create a read-only version of a Collection or Map. The
Collections class allows you to do this by passing the original container into a method that
hands back a read-only version. There are a number of variations on this method, for
Collections (if you can't treat a Collection as a more specific type), Lists, Sets, and Maps.
This example shows the proper way to build read-only versions of each:

```java
//: containers/ReadOnly.java
// Using the Collections.unmodifiable methods.
import java.util.*;
import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class ReadOnly {
static Collection<String> data =
new ArrayList<String>(Countries.names(6));
public static void main(String[] args) {
Collection<String> c =
Collections.unmodifiableCollection(
new ArrayList<String>(data));
print(c); // Reading is OK
//! c.add("one"); // Can't change it

List<String> a = Collections.unmodifiableList(

new ArrayList<String>(data));
ListIterator<String> lit = a.listIterator();
print(lit.next()); // Reading is OK
//! lit.add("one"); // Can't change it

Set<String> s = Collections.unmodifiableSet(
new HashSet<String>(data));
print(s); // Reading is OK
//! s.add("one"); // Can't change it

// For a SortedSet:
Set<String> ss = Collections.unmodifiableSortedSet(
new TreeSet<String>(data));

Map<String,String> m = Collections.unmodifiableMap(
new HashMap<String,String>(Countries.capitals(6)));
print(m); // Reading is OK
//! m.put("Ralph", "Howdy!");

// For a SortedMap:
Map<String,String> sm =
Collections.unmodifiableSortedMap(
new TreeMap<String,String>(Countries.capitals(6)));
}
} /* Output:
[ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO]
ALGERIA
[BULGARIA, BURKINA FASO, BOTSWANA, BENIN, ANGOLA, ALGERIA]
{BULGARIA=Sofia, BURKINA FASO=Ouagadougou, BOTSWANA=Gaberone,
BENIN=Porto-Novo, ANGOLA=Luanda, ALGERIA=Algiers}
*///:~
```
Calling the "unmodifiable" method for a particular type does not cause compile-time
checking, but once the transformation has occurred, any calls to methods that modify the
contents of a particular container will produce an UnsupportedOperationException.
In each case, you must fill the container with meaningful data before you make it read-only.
Once it is loaded, the best approach is to replace the existing reference with the reference that
is produced by the "unmodifiable" call. That way, you don't run the risk of accidentally trying
to change the contents once you've made it unmodifiable. On the other hand, this tool also
allows you to keep a modifiable container as private within a class and to return a read-only
reference to that container from a method call. So, you can change it from within the class,
but everyone else can only read it.
Synchronizing a Collection or Map
The synchronized keyword is an important part of the subject of multithreading, a more
complicated topic that will not be introduced until the Concurrency chapter. Here, I shall
note only that the Collections class contains a way to automatically synchronize an entire
container. The syntax is similar to the "unmodifiable" methods:

```java
//: containers/Synchronization.java
// Using the Collections.synchronized methods.
import java.util.*;

public class Synchronization {
public static void main(String[] args) {
Collection<String> c =
Collections.synchronizedCollection(
new ArrayList<String>());
Containers in Depth 637 

List<String> list = Collections.synchronizedList(
new ArrayList<String>());
Set<String> s = Collections.synchronizedSet(
new HashSet<String>());
Set<String> ss = Collections.synchronizedSortedSet(
new TreeSet<String>());
Map<String,String> m = Collections.synchronizedMap(
new HashMap<String,String>());
Map<String,String> sm =
Collections.synchronizedSortedMap(
new TreeMap<String,String>());
}
} ///:~
```
It is best to immediately pass the new container through the appropriate "synchronized"
method, as shown above. That way, there's no chance of accidentally exposing the
unsynchronized version.
Fail fast
The Java containers also have a mechanism to prevent more than one process from
modifying the contents of a container. The problem occurs if you're in the middle of iterating
through a container, and then some other process steps in and inserts, removes, or changes
an object in that container. Maybe you've already passed that element in the container,
maybe it's ahead of you, maybe the size of the container shrinks after you call size( )—there
are many scenarios for disaster. The Java containers library uses a fail-fast mechanism that
looks for any changes to the container other than the ones your process is personally
responsible for. If it detects that someone else is modifying the container, it immediately
produces a ConcurrentModification- Exception. This is the "fail-fast" aspect—it doesn't
try to detect a problem later on using a more complex algorithm.
It's quite easy to see the fail-fast mechanism in operation—all you must do is create an
iterator and then add something to the collection that the iterator is pointing to, like this:

```java
//: containers/FailFast.java
// Demonstrates the "fail-fast" behavior.
import java.util.*;

public class FailFast {
public static void main(String[] args) {
Collection<String> c = new ArrayList<String>();
Iterator<String> it = c.iterator();
c.add("An object");
try {
String s = it.next();
} catch(ConcurrentModificationException e) {
System.out.println(e);
}
}
} /* Output:
java.util.ConcurrentModificationException
*///:~
```
The exception happens because something is placed in the container after the iterator is
acquired from the container. The possibility that two parts of the program might modify the
same container produces an uncertain state, so the exception notifies you that you should
change your code—in this case, acquire the iterator after you have added all the elements to
the container.

The ConcurrentHashMap, CopyOnWriteArrayList, and CopyOnWriteArraySet use
techniques that avoid ConcurrentModificationExceptions.
Holding references
The java.lang.ref library contains a set of classes that allow greater flexibility in garbage
collection. These classes are especially useful when you have large objects that may cause
memory exhaustion. There are three classes inherited from the abstract class Reference:
SoftReference, WeakReference, and PhantomReference. Each of these provides a
different level of indirection for the garbage collector if the object in question is only
reachable through one of these Reference objects.
If an object is reachable, it means that somewhere in your program the object can be found.
This could mean that you have an ordinary reference on the stack that goes right to the
object, but you might also have a reference to an object that has a reference to the object in
question; there can be many intermediate links. If an object is reachable, the garbage
collector cannot release it because it's still in use by your program. If an object isn't
reachable, there's no way for your program to use it, so it's safe to garbage collect that object.
You use Reference objects when you want to continue to hold on to a reference to that
object—you want to reach that object—but you also want to allow the garbage collector to
release that object. Thus, you have a way to use the object, but if memory exhaustion is
imminent, you allow that object to be released.
You accomplish this by using a Reference object as an intermediary (a proxy) between you
and the ordinary reference. In addition, there must be no ordinary references to the object
(ones that are not wrapped inside Reference objects). If the garbage collector discovers that
an object is reachable through an ordinary reference, it will not release that object.
In the order of SoftReference, WeakReference, and PhantomReference, each one is
"weaker" than the last and corresponds to a different level of reachability. Soft references are
for implementing memory-sensitive caches. Weak references are for implementing
"canonicalizing mappings"—where instances of objects can be simultaneously used in
multiple places in a program, to save storage—that do not prevent their keys (or values) from
being reclaimed. Phantom references are for scheduling pre-mortem cleanup actions in a
more flexible way than is possible with the Java finalization mechanism.
With SoftReferences and WeakReferences, you have a choice about whether to place
them on a ReferenceQueue (the device used for premortem cleanup actions), but a
PhantomReference can only be built on a ReferenceQueue. Here's a simple
demonstration:

```java
//: containers/References.java
// Demonstrates Reference objects
import java.lang.ref.*;
import java.util.*;

class VeryBig {
private static final int SIZE = 10000;
private long[] la = new long[SIZE];
private String ident;
public VeryBig(String id) { ident = id; }
public String toString() { return ident; }
protected void finalize() {
System.out.println("Finalizing " + ident);
}
}

Containers in Depth 639 

public class References {
private static ReferenceQueue<VeryBig> rq =
new ReferenceQueue<VeryBig>();
public static void checkQueue() {
Reference<? extends VeryBig> inq = rq.poll();
if(inq != null)
System.out.println("In queue: " + inq.get());
}
public static void main(String[] args) {
int size = 10;
// Or, choose size via the command line:
if(args.length > 0)
size = new Integer(args[0]);
LinkedList<SoftReference<VeryBig>> sa =
new LinkedList<SoftReference<VeryBig>>();
for(int i = 0; i < size; i++) {
sa.add(new SoftReference<VeryBig>(
new VeryBig("Soft " + i), rq));
System.out.println("Just created: " + sa.getLast());
checkQueue();
}
LinkedList<WeakReference<VeryBig>> wa =
new LinkedList<WeakReference<VeryBig>>();
for(int i = 0; i < size; i++) {
wa.add(new WeakReference<VeryBig>(
new VeryBig("Weak " + i), rq));
System.out.println("Just created: " + wa.getLast());
checkQueue();
}
SoftReference<VeryBig> s =
new SoftReference<VeryBig>(new VeryBig("Soft"));
WeakReference<VeryBig> w =
new WeakReference<VeryBig>(new VeryBig("Weak"));
System.gc();
LinkedList<PhantomReference<VeryBig>> pa =
new LinkedList<PhantomReference<VeryBig>>();
for(int i = 0; i < size; i++) {
pa.add(new PhantomReference<VeryBig>(
new VeryBig("Phantom " + i), rq));
System.out.println("Just created: " + pa.getLast());
checkQueue();
}
}
} /* (Execute to see output) *///:~
```
When you run this program (you'll want to redirect the output into a text file so that you can
view the output in pages), you'll see that the objects are garbage collected, even though you
still have access to them through the Reference object (to get the actual object reference,
you use get( )). You'll also see that the ReferenceQueue always produces a Reference
containing a null object. To use this, inherit from a particular Reference class and add
more useful methods to the new class.
The WeakHashMap
The containers library has a special Map to hold weak references: the WeakHashMap.
This class is designed to make the creation of canonicalized mappings easier. In such a
mapping, you are saving storage by creating only one instance of a particular value. When the
program needs that value, it looks up the existing object in the mapping and uses that (rather
than creating one from scratch). The mapping may make the values as part of its
initialization, but it's more likely that the values are made on demand.

Since this is a storage-saving technique, it's very convenient that the WeakHashMap allows
the garbage collector to automatically clean up the keys and values. You don't have to do
anything special to the keys and values you want to place in the WeakHashMap; these are
automatically wrapped in WeakReferences by the map. The trigger to allow cleanup is that
the key is no longer in use, as demonstrated here:

```java
//: containers/CanonicalMapping.java
// Demonstrates WeakHashMap.
import java.util.*;

class Element {
private String ident;
public Element(String id) { ident = id; }
public String toString() { return ident; }
public int hashCode() { return ident.hashCode(); }
public boolean equals(Object r) {
return r instanceof Element &&
ident.equals(((Element)r).ident);
}
protected void finalize() {
System.out.println("Finalizing " +
getClass().getSimpleName() + " " + ident);
}
}

class Key extends Element {
public Key(String id) { super(id); }
}

class Value extends Element {
public Value(String id) { super(id); }
}

public class CanonicalMapping {
public static void main(String[] args) {
int size = 1000;
// Or, choose size via the command line:
if(args.length > 0)
size = new Integer(args[0]);
Key[] keys = new Key[size];
WeakHashMap<Key,Value> map =
new WeakHashMap<Key,Value>();
for(int i = 0; i < size; i++) {
Key k = new Key(Integer.toString(i));
Value v = new Value(Integer.toString(i));
if(i % 3 == 0)
keys[i] = k; // Save as "real" references
map.put(k, v);
}
System.gc();
}
} /* (Execute to see output) *///:~
```
The Key class must have a hashCode( ) and an equals( ) since it is being used as a key in a
hashed data structure. The subject of hashCode( ) was described earlier in this chapter.
When you run the program, you'll see that the garbage collector will skip every third key,
because an ordinary reference to that key has also been placed in the keys array, and thus
those objects cannot be garbage collected.

Containers in Depth 641 

Java 1.0/1.1 containers
Unfortunately, a lot of code was written using the Java 1.0/1.1 containers, and even new code
is sometimes written using these classes. So although you should never use the old containers
when writing new code, you'll still need to be aware of them. However, the old containers
were quite limited, so there's not that much to say about them, and since they are
anachronistic, I will try to refrain from overemphasizing some of their hideous design
decisions.
Vector & Enumeration
The only self-expanding sequence in Java 1.0/1.1 was the Vector, so it saw a lot of use. Its
flaws are too numerous to describe here (see the 1 st edition of this book, available as a free
download from www.MindView.net). Basically, you can think of it as an ArrayList with
long, awkward method names. In the revised Java container library, Vector was adapted so
that it could work as a Collection and a List. This turns out to be a bit perverse, as it may
confuse some people into thinking that Vector has gotten better, when it is actually included
only to support older Java code.
The Java 1.0/1.1 version of the iterator chose to invent a new name, "enumeration," instead
of using a term that everyone was already familiar with ("iterator"). The Enumeration
interface is smaller than Iterator, with only two methods, and it uses longer method names:
boolean hasMoreElements( ) produces true if this enumeration contains more
elements, and Object nextElement( ) returns the next element of this enumeration if there
are any more (otherwise it throws an exception).
Enumeration is only an interface, not an implementation, and even new libraries
sometimes still use the old Enumeration, which is unfortunate but generally harmless.
Even though you should always use Iterator when you can in your own code, you must be
prepared for libraries that want to hand you an Enumeration.
In addition, you can produce an Enumeration for any Collection by using the
Collections.enumeration( ) method, as seen in this example:

```java
//: containers/Enumerations.java
// Java 1.0/1.1 Vector and Enumeration.
import java.util.*;
import net.mindview.util.*;

public class Enumerations {
public static void main(String[] args) {
Vector<String> v =
new Vector<String>(Countries.names(10));
Enumeration<String> e = v.elements();
while(e.hasMoreElements())
System.out.print(e.nextElement() + ", ");
// Produce an Enumeration from a Collection:
e = Collections.enumeration(new ArrayList<String>());
}
} /* Output:
ALGERIA, ANGOLA, BENIN, BOTSWANA, BULGARIA, BURKINA FASO, BURUNDI,
CAMEROON, CAPE VERDE, CENTRAL AFRICAN REPUBLIC,
*///:~
```
To produce an Enumeration, you call elements( ), then you can use it to perform a
forward iteration.

The last line creates an ArrayList and uses enumeration( ) to adapt an Enumeration
from the ArrayList Iterator. Thus, if you have old code that wants an Enumeration, you
can still use the new containers.
Hashtable
As you've seen in the performance comparison in this chapter, the basic Hashtable is very
similar to the HashMap, even down to the method names. There's no reason to use
Hashtable instead of HashMap in new code.
Stack
The concept of the stack was introduced earlier, with the LinkedList. What's rather odd
about the Java 1.0/1.1 Stack is that instead of using a Vector with composition, Stack is
inherited from Vector. So it has all of the characteristics and behaviors of a Vector plus
some extra Stack behaviors. It's difficult to know whether the designers consciously thought
that this was an especially useful way of doing things, or whether it was just a naive design; in
any event it was clearly not reviewed before it was rushed into distribution, so this bad design
is still hanging around (but you shouldn't use it).
Here's a simple demonstration of Stack that pushes each String representation of an
enum. It also shows how you can just as easily use a LinkedList as a stack, or the Stack
class created in the Holding Your Objects chapter:

```java
//: containers/Stacks.java
// Demonstration of Stack Class.
import java.util.*;
import static net.mindview.util.Print.*;

enum Month { JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE,
JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER }

public class Stacks {
public static void main(String[] args) {
Stack<String> stack = new Stack<String>();
for(Month m : Month.values())
stack.push(m.toString());
print("stack = " + stack);
// Treating a stack as a Vector:
stack.addElement("The last line");
print("element 5 = " + stack.elementAt(5));
print("popping elements:");
while(!stack.empty())
printnb(stack.pop() + " ");

// Using a LinkedList as a Stack:
LinkedList<String> lstack = new LinkedList<String>();
for(Month m : Month.values())
lstack.addFirst(m.toString());
print("lstack = " + lstack);
while(!lstack.isEmpty())
printnb(lstack.removeFirst() + " ");

// Using the Stack class from
// the Holding Your Objects Chapter:
net.mindview.util.Stack<String> stack2 =
new net.mindview.util.Stack<String>();
for(Month m : Month.values())
stack2.push(m.toString());
Containers in Depth 643 

print("stack2 = " + stack2);
while(!stack2.empty())
printnb(stack2.pop() + " ");

}
} /* Output:
stack = [JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST,
SEPTEMBER, OCTOBER, NOVEMBER]
element 5 = JUNE
popping elements:
The last line NOVEMBER OCTOBER SEPTEMBER AUGUST JULY JUNE MAY APRIL
MARCH FEBRUARY JANUARY lstack = [NOVEMBER, OCTOBER, SEPTEMBER, AUGUST,
JULY, JUNE, MAY, APRIL, MARCH, FEBRUARY, JANUARY]
NOVEMBER OCTOBER SEPTEMBER AUGUST JULY JUNE MAY APRIL MARCH FEBRUARY
JANUARY stack2 = [NOVEMBER, OCTOBER, SEPTEMBER, AUGUST, JULY, JUNE, MAY,
APRIL, MARCH, FEBRUARY, JANUARY]
NOVEMBER OCTOBER SEPTEMBER AUGUST JULY JUNE MAY APRIL MARCH FEBRUARY
JANUARY
*///:~
```
A String representation is generated from the Month enum constants, inserted into the
Stack with push( ), and later fetched from the top of the stack with a pop( ). To make a
point, Vector operations are also performed on the Stack object. This is possible because,
by virtue of inheritance, a Stack is a Vector. Thus, all operations that can be performed on a
Vector can also be performed on a Stack, such as elementAt( ).
As mentioned earlier, you should use a LinkedList when you want stack behavior, or the
net.mindview.util.Stack class created from the LinkedList class.
BitSet
A BitSet is used if you want to efficiently store a lot of on-off information. It's efficient only
from the standpoint of size; if you're looking for efficient access, it is slightly slower than
using a native array.
In addition, the minimum size of the BitSet is that of a long: 64 bits. This implies that if
you're storing anything smaller, like 8 bits, a BitSet will be wasteful; you're better off
creating your own class, or just an array, to hold your flags if size is an issue. (This will only
be the case if you're creating a lot of objects containing lists of on-off information, and should
only be decided based on profiling and other metrics. If you make this decision because you
just think something is too big, you will end up creating needless complexity and wasting a
lot of time.)
A normal container expands as you add more elements, and the BitSet does this as well. The
following example shows how the BitSet works:

```java
//: containers/Bits.java
// Demonstration of BitSet.
import java.util.*;
import static net.mindview.util.Print.*;

public class Bits {
public static void printBitSet(BitSet b) {
print("bits: " + b);
StringBuilder bbits = new StringBuilder();
for(int j = 0; j < b.size() ; j++)
bbits.append(b.get(j) ? "1" : "0");
print("bit pattern: " + bbits);
}

public static void main(String[] args) {
Random rand = new Random(47);
// Take the LSB of nextInt():
byte bt = (byte)rand.nextInt();
BitSet bb = new BitSet();
for(int i = 7; i >= 0; i--)
if(((1 << i) & bt) != 0)
bb.set(i);
else
bb.clear(i);
print("byte value: " + bt);
printBitSet(bb);

short st = (short)rand.nextInt();
BitSet bs = new BitSet();
for(int i = 15; i >= 0; i--)
if(((1 << i) & st) != 0)
bs.set(i);
else
bs.clear(i);
print("short value: " + st);
printBitSet(bs);

int it = rand.nextInt();
BitSet bi = new BitSet();
for(int i = 31; i >= 0; i--)
if(((1 << i) & it) != 0)
bi.set(i);
else
bi.clear(i);
print("int value: " + it);
printBitSet(bi);

// Test bitsets >= 64 bits:
BitSet b127 = new BitSet();
b127.set(127);
print("set bit 127: " + b127);
BitSet b255 = new BitSet(65);
b255.set(255);
print("set bit 255: " + b255);
BitSet b1023 = new BitSet(512);
b1023.set(1023);
b1023.set(1024);
print("set bit 1023: " + b1023);
}
} /* Output:
byte value: -107
bits: {0, 2, 4, 7}
bit pattern:
1010100100000000000000000000000000000000000000000000000000000000
short value: 1302
bits: {1, 2, 4, 8, 10}
bit pattern:
0110100010100000000000000000000000000000000000000000000000000000
int value: -2014573909
bits: {0, 1, 3, 5, 7, 9, 11, 18, 19, 21, 22, 23, 24, 25, 26, 31}
bit pattern:
1101010101010000001101111110000100000000000000000000000000000000
set bit 127: {127}
set bit 255: {255}
set bit 1023: {1023, 1024}
*///:~
```
Containers in Depth 645 

The random number generator is used to create a random byte, short, and int, and each
one is transformed into a corresponding bit pattern in a BitSet. This works fine because a
BitSet is 64 bits, so none of these cause it to increase in size. Then larger BitSets are
created. You can see that the BitSet is expanded as necessary.
An EnumSet (see the Enumerated Types chapter) is usually a better choice than a BitSet if
you have a fixed set of flags that you can name, because the EnumSet allows you to
manipulate the names rather than numerical bit locations, and thus reduces errors.
EnumSet also prevents you from accidentally adding new flag locations, which could cause
some serious, difficult-to-find bugs. The only reasons you should use BitSet instead of
EnumSet is if you don't know how many flags you will need until run time, or if it is
unreasonable to assign names to the flags, or you need one of the special operations in
BitSet (see the JDK documentation for BitSet and EnumSet).

## 🍀 Summary
The containers library is arguably the most important library for an objectoriented language.
Most programming will use containers more than any other library components. Some
languages (Python, for example) even include the fundamental container components (lists,
maps and sets) as built-ins.
As you saw in the Holding Your Objects chapter, it's possible to do a number of very
interesting things using containers, without much effort. However, at some point you're
forced to know more about containers in order to use them properly—in particular, you must
know enough about hashing operations to write your own hashCode( ) method (and you
must know when it is necessary), and you must know enough about the various container
implementations that you can choose the appropriate one for your needs. This chapter
covered these concepts and discussed additional useful details about the container library. At
this point you should be reasonably well prepared to use the Java containers in your everyday
programming tasks.
The design of a containers library is difficult (this is true of most library design problems). In
C++, the container classes covered the bases with many different classes. This was better
than what was available prior to the C++ container classes (nothing), but it didn't translate
well into Java. At the other extreme, I've seen a containers library that consists of a single
class, "container," which acts like both a linear sequence and an associative array at the same
time. The Java container library strikes a balance: the full functionality that you expect from
a mature container library, but easier to learn and use than the C++ container classes and
other similar container libraries. The result can seem a bit odd in places. Unlike some of the
decisions made in the early Java libraries, these oddities were not accidents, but carefully
considered decisions based on trade-offs in complexity.
Solutions to selected exercises can be found in the electronic document The Thinking in Java Annotated Solution Guide,
available for sale from www.MindView.net.


# 📜 20. I/O
Creating a good input/output (I/O) system is one of the more difficult
tasks for a language designer. This is evidenced by the number of
different approaches.
The challenge seems to be in covering all possibilities. Not only are there different sources
and sinks of I/O that you want to communicate with (files, the console, network connections,
etc.), but you need to talk to them in a wide variety of ways (sequential, random-access,
buffered, binary, character, by lines, by words, etc.). The Java library designers attacked this
problem by creating lots of classes. In fact, there are so many classes for Java's I/O system
that it can be intimidating at first (ironically, the Java I/O design actually prevents an
explosion of classes). There was also a significant change in the I/O library after Java i.o,
when the original byte-oriented library was supplemented with char-oriented, Unicode-
based I/O classes. The nio classes (for "new I/O," a name we'll still be using years from now
even though they were introduced in JDK 1.4 and so are already "old") were added for
improved performance and functionality. As a result, there are a fair number of classes to
learn before you understand enough of Java's I/O picture that you can use it properly. In
addition, it's rather important to understand the evolution of the I/O library, even if your
first reaction is "Don't bother me with history, just show me how to use it!" The problem is
that without the historical perspective, you will rapidly become confused with some of the
classes and when you should and shouldn't use them. This chapter will give you an
introduction to the variety of I/O classes in the standard Java library and how to use them.
The File class
Before getting into the classes that actually read and write data to streams, we'll look at a
library utility that assists you with file directory issues. The File class has a deceiving name;
you might think it refers to a file, but it doesn't. In fact, "FilePath" would have been a better
name for the class. It can represent either the name of a particular file or the names of a set
of files in a directory. If it's a set of files, you can ask for that set using the list( ) method,
which returns an array of String. It makes sense to return an array rather than one of the
flexible container classes, because the number of elements is fixed, and if you want a
different directory listing, you just create a different File object. This section shows an
example of the use of this class, including the associated FilenameFilter interface.
A directory lister
Suppose you'd like to see a directory listing. The File object can be used in two ways. If you
call list( ) with no arguments, you'll get the full list that the File object contains. However, if
you want a restricted list—for example, if you want all of the files with an extension of .Java—
then you use a "directory filter," which is a class that tells how to select the File objects for
display. Here's the example. Note that the result has been effortlessly sorted (alphabetically)
using the java.util.Arrays.sort( ) method and the
String.CASE_INSENSITIVE_ORDER Comparator:

```java
//: io/DirList.java
// Display a directory listing using regular expressions.
// {Args: "D.*\.java"}
import java.util.regex.*;
import java.io.*;


import java.util.*;

public class DirList {
public static void main(String[] args) {
File path = new File(".");
String[] list;
if(args.length == 0)
list = path.list();
else
list = path.list(new DirFilter(args[0]));
Arrays.sort(list, String.CASE_INSENSITIVE_ORDER);
for(String dirItem : list)
System.out.println(dirItem);
}
}

class DirFilter implements FilenameFilter {
private Pattern pattern;
public DirFilter(String regex) {
pattern = Pattern.compile(regex);
}
public boolean accept(File dir, String name) {
return pattern.matcher(name).matches();
}
} /* Output:
DirectoryDemo.java
DirList.java
DirList2.java
DirList3.java
*///:~
```
The DirFilter class implements the interface FilenameFilter. Notice how simple the
FilenameFilter interface is:
public interface FilenameFilter {
boolean accept(File dir, String name);
}
DirFilter's sole reason for existence is to provide the accept( ) method to the list( )
method so that list( ) can "call back" accept( ) to determine which file names should be
included in the list. Thus, this structure is often referred to as a callback. More specifically,
this is an example of the Strategy design pattern, because list( ) implements basic
functionality, and you provide the Strategy in the form of a FilenameFilter in order to
complete the algorithm necessary for list( ) to provide its service. Because list( ) takes a
FilenameFilter object as its argument, it means that you can pass an object of any class
that implements FilenameFilter to choose (even at run time) how the list( ) method will
behave. The purpose of a Strategy is to provide flexibility in the behavior of code.
The accept( ) method must accept a File object representing the directory that a particular
file is found in, and a String containing the name of that file. Remember that the list( )
method is calling accept( ) for each of the file names in the directory object to see which one
should be included; this is indicated by the boolean result returned by accept( ).
accept( ) uses a regular expression matcher object to see if the regular expression regex
matches the name of the file. Using accept( ), the list( ) method returns an array.



Anonymous inner classes
This example is ideal for rewriting using an anonymous inner class (described in Inner
Classes). As a first cut, a method filter( ) is created that returns a reference to a
FilenameFilter:

```java
//: io/DirList2.java
// Uses anonymous inner classes.
// {Args: "D.*\.java"}
import java.util.regex.*;
import java.io.*;
import java.util.*;

public class DirList2 {
public static FilenameFilter filter(final String regex) {
// Creation of anonymous inner class:
return new FilenameFilter() {
private Pattern pattern = Pattern.compile(regex);
public boolean accept(File dir, String name) {
return pattern.matcher(name).matches();
}
}; // End of anonymous inner class
}
public static void main(String[] args) {
File path = new File(".");
String[] list;
if(args.length == 0)
list = path.list();
else
list = path.list(filter(args[0]));
Arrays.sort(list, String.CASE_INSENSITIVE_ORDER);
for(String dirItem : list)
System.out.println(dirItem);
}
} /* Output:
DirectoryDemo.java
DirList.java
DirList2.java
DirList3.java
*///:~
```
Note that the argument to filter( ) must be final. This is required by the anonymous inner
class so that it can use an object from outside its scope. This design is an improvement
because the FilenameFilter class is now tightly bound to DirList2. However, you can take
this approach one step further and define the anonymous inner class as an argument to
list(), in which case it's even smaller:

```java
//: io/DirList3.java
// Building the anonymous inner class "in-place."
// {Args: "D.*\.java"}
import java.util.regex.*;
import java.io.*;
import java.util.*;

public class DirList3 {
public static void main(final String[] args) {
File path = new File(".");
String[] list;
if(args.length == 0)
list = path.list();
else
I/O 649 

list = path.list(new FilenameFilter() {
private Pattern pattern = Pattern.compile(args[0]);
public boolean accept(File dir, String name) {
return pattern.matcher(name).matches();
}
});
Arrays.sort(list, String.CASE_INSENSITIVE_ORDER);
for(String dirItem : list)
System.out.println(dirItem);
}
} /* Output:
DirectoryDemo.java
DirList.java
DirList2.java
DirList3.java
*///:~
```
The argument to main( ) is now final, since the anonymous inner class uses args[0]
directly.
This shows you how anonymous inner classes allow the creation of specific, one-off classes to
solve problems. One benefit of this approach is that it keeps the code that solves a particular
problem isolated in one spot. On the other hand, it is not always as easy to read, so you must
use it judiciously.

Exercise 1: (3) Modify DirList.java (or one of its variants) so that the FilenameFilter
opens and reads each file (using the net.mindview.util.TextFile utility) and accepts the
file based on whether any of the trailing arguments on the command line exist in that file.

Exercise 2: (2) Create a class called SortedDirList with a constructor that takes a File
object and builds a sorted directory list from the files at that File. Add to this class two
overloaded list( ) methods: the first produces the whole list, and the second produces the
subset of the list that matches its argument (which is a regular expression).

Exercise 3: (3) Modify DirList.java (or one of its variants) so that it sums up the file
sizes of the selected files.
Directory utilities
A common task in programming is to perform operations on sets of files, either in the local
directory or by walking the entire directory tree. It is useful to have a tool that will produce
the set of files for you. The following utility class produces either an array of File objects in
the local directory using the local( ) method, or a List<File> of the entire directory tree
starting at the given directory using walk( ) (File objects are more useful than file names
because File objects contain more information). The files are chosen based on the regular
expression that you provide:

```java
//: net/mindview/util/Directory.java
// Produce a sequence of File objects that match a
// regular expression in either a local directory,
// or by walking a directory tree.
package net.mindview.util;
import java.util.regex.*;
import java.io.*;
import java.util.*;

public final class Directory {
public static File[]

local(File dir, final String regex) {
return dir.listFiles(new FilenameFilter() {
private Pattern pattern = Pattern.compile(regex);
public boolean accept(File dir, String name) {
return pattern.matcher(
new File(name).getName()).matches();
}
});
}
public static File[]
local(String path, final String regex) { // Overloaded
return local(new File(path), regex);
}
// A two-tuple for returning a pair of objects:
public static class TreeInfo implements Iterable<File> {
public List<File> files = new ArrayList<File>();
public List<File> dirs = new ArrayList<File>();
// The default iterable element is the file list:
public Iterator<File> iterator() {
return files.iterator();
}
void addAll(TreeInfo other) {
files.addAll(other.files);
dirs.addAll(other.dirs);
}
public String toString() {
return "dirs: " + PPrint.pformat(dirs) +
"\n\nfiles: " + PPrint.pformat(files);
}
}
public static TreeInfo
walk(String start, String regex) { // Begin recursion
return recurseDirs(new File(start), regex);
}
public static TreeInfo
walk(File start, String regex) { // Overloaded
return recurseDirs(start, regex);
}
public static TreeInfo walk(File start) { // Everything
return recurseDirs(start, ".*");
}
public static TreeInfo walk(String start) {
return recurseDirs(new File(start), ".*");
}
static TreeInfo recurseDirs(File startDir, String regex){
TreeInfo result = new TreeInfo();
for(File item : startDir.listFiles()) {
if(item.isDirectory()) {
result.dirs.add(item);
result.addAll(recurseDirs(item, regex));
} else // Regular file
if(item.getName().matches(regex))
result.files.add(item);
}
return result;
}
// Simple validation test:
public static void main(String[] args) {
if(args.length == 0)
System.out.println(walk("."));
else
for(String arg : args)
System.out.println(walk(arg));
I/O 651 

}
} ///:~
```
The local( ) method uses a variant of File.list( ) called listFiles( ) that produces an array
of File. You can see that it also uses a FilenameFilter. If you need a List instead of an
array, you can convert the result yourself using Arrays.asList( ).
The walk( ) method converts the name of the starting directory into a File object and calls
recurseDirs( ), which performs a recursive directory walk, collecting more information
with each recursion. To distinguish ordinary files from directories, the return value is
effectively a "tuple" of objects—a List holding ordinary files, and another holding directories.
The fields are intentionally made public here, because the point of Treelnfo is simply to
collect the objects together—if you were just returning a List, you wouldn't make it private,
so just because you are returning a pair of objects, it doesn't mean you need to make them
private. Note that Treelnfo implements Iterable<File>, which produces the files, so that
you have a "default iteration" over the file list, whereas you can specify directories by saying
".dirs".
The Treelnfo.toString( ) method uses a "pretty printer" class so that the output is easer to
view. The default toString( ) methods for containers print all the elements for a container
on a single line. For large collections this can become difficult to read, so you may want to use
an alternate formatting. Here's a tool that adds newlines and indents each element:

```java
//: net/mindview/util/PPrint.java
// Pretty-printer for collections
package net.mindview.util;
import java.util.*;

public class PPrint {
public static String pformat(Collection<?> c) {
if(c.size() == 0) return "[]";
StringBuilder result = new StringBuilder("[");
for(Object elem : c) {
if(c.size() != 1)
result.append("\n ");
result.append(elem);
}
if(c.size() != 1)
result.append("\n");
result.append("]");
return result.toString();
}
public static void pprint(Collection<?> c) {
System.out.println(pformat(c));
}
public static void pprint(Object[] c) {
System.out.println(pformat(Arrays.asList(c)));
}
} ///:~
```
The pformat( ) method produces a formatted String from a Collection, and the pprint( )
method uses pformat( ) to do its job. Note that the special cases of no elements and a single
element are handled differently. There's also a version of pprint( ) for arrays.
The Directory utility is placed in the net.mindview.util package so that it is easily
available. Here's a sample of how you can use it:

```java
//: io/DirectoryDemo.java
// Sample use of Directory utilities.
import java.io.*;

import net.mindview.util.*;
import static net.mindview.util.Print.*;

public class DirectoryDemo {
public static void main(String[] args) {
// All directories:
PPrint.pprint(Directory.walk(".").dirs);
// All files beginning with 'T'
for(File file : Directory.local(".", "T.*"))
print(file);
print("----------------------");
// All Java files beginning with 'T':
for(File file : Directory.walk(".", "T.*\\.java"))
print(file);
print("======================");
// Class files containing "Z" or "z":
for(File file : Directory.walk(".",".*[Zz].*\\.class"))
print(file);
}
} /* Output: (Sample)
[.\xfiles]
.\TestEOF.class
.\TestEOF.java
.\TransferTo.class
.\TransferTo.java
----------------------
.\TestEOF.java
.\TransferTo.java
.\xfiles\ThawAlien.java
======================
.\FreezeAlien.class
.\GZIPcompress.class
.\ZipCompress.class
*///:~
```
You may need to refresh your knowledge of regular expressions from the Strings chapter in
order to understand the second arguments in local( ) and walk( ).
We can take this a step further and create a tool that will walk directories and process the
files within them according to a Strategy object (this is another example of the Strategy
design pattern):

```java
//: net/mindview/util/ProcessFiles.java
package net.mindview.util;
import java.io.*;

public class ProcessFiles {
public interface Strategy {
void process(File file);
}
private Strategy strategy;
private String ext;
public ProcessFiles(Strategy strategy, String ext) {
this.strategy = strategy;
this.ext = ext;
}
public void start(String[] args) {
try {
if(args.length == 0)
processDirectoryTree(new File("."));
else
for(String arg : args) {
I/O 653 

File fileArg = new File(arg);
if(fileArg.isDirectory())
processDirectoryTree(fileArg);
else {
// Allow user to leave off extension:
if(!arg.endsWith("." + ext))
arg += "." + ext;
strategy.process(
new File(arg).getCanonicalFile());
}
}
} catch(IOException e) {
throw new RuntimeException(e);
}
}
public void
processDirectoryTree(File root) throws IOException {
for(File file : Directory.walk(
root.getAbsolutePath(), ".*\\." + ext))
strategy.process(file.getCanonicalFile());
}
// Demonstration of how to use it:
public static void main(String[] args) {
new ProcessFiles(new ProcessFiles.Strategy() {
public void process(File file) {
System.out.println(file);
}
}, "java").start(args);
}
} /* (Execute to see output) *///:~
```
The Strategy interface is nested within ProcessFiles, so that if you want to implement it
you must implement ProcessFiles.Strategy, which provides more context for the reader.
ProcessFiles does all the work of finding the files that have a particular extension (the ext
argument to the constructor), and when it finds a matching file, it simply hands it to the
Strategy object (which is also an argument to the constructor).
If you don't give it any arguments, ProcessFiles assumes that you want to traverse all the
directories off of the current directory. You can also specify a particular file, with or without
the extension (it will add the extension if necessary), or one or more directories.
In main( ) you see a basic example of how to use the tool; it prints the names of all the Java
source files according to the command line that you provide.

Exercise 4: (2) Use Directory.walk( ) to sum the sizes of all files in a directory tree
whose names match a particular regular expression.

Exercise 5: (1) Modify ProcessFiles.java so that it matches a regular expression rather
than a fixed extension.
Checking for and creating directories
The File class is more than just a representation for an existing file or directory. You can also
use a File object to create a new directory or an entire directory path if it doesn't exist. You
can also look at the characteristics of files (size, last modification date, read/write), see
whether a File object represents a file or a directory, and delete a file. The following example
shows some of the other methods available with the File class (see the JDK documentation
from http://java.sun.com for the full set):


```java
//: io/MakeDirectories.java
// Demonstrates the use of the File class to
// create directories and manipulate files.
// {Args: MakeDirectoriesTest}
import java.io.*;

public class MakeDirectories {
private static void usage() {
System.err.println(
"Usage:MakeDirectories path1 ...\n" +
"Creates each path\n" +
"Usage:MakeDirectories -d path1 ...\n" +
"Deletes each path\n" +
"Usage:MakeDirectories -r path1 path2\n" +
"Renames from path1 to path2");
System.exit(1);
}
private static void fileData(File f) {
System.out.println(
"Absolute path: " + f.getAbsolutePath() +
"\n Can read: " + f.canRead() +
"\n Can write: " + f.canWrite() +
"\n getName: " + f.getName() +
"\n getParent: " + f.getParent() +
"\n getPath: " + f.getPath() +
"\n length: " + f.length() +
"\n lastModified: " + f.lastModified());
if(f.isFile())
System.out.println("It's a file");
else if(f.isDirectory())
System.out.println("It's a directory");
}
public static void main(String[] args) {
if(args.length < 1) usage();
if(args[0].equals("-r")) {
if(args.length != 3) usage();
File
old = new File(args[1]),
rname = new File(args[2]);
old.renameTo(rname);
fileData(old);
fileData(rname);
return; // Exit main
}
int count = 0;
boolean del = false;
if(args[0].equals("-d")) {
count++;
del = true;
}
count--;
while(++count < args.length) {
File f = new File(args[count]);
if(f.exists()) {
System.out.println(f + " exists");
if(del) {
System.out.println("deleting..." + f);
f.delete();
}
}
else { // Doesn't exist
if(!del) {
f.mkdirs();
I/O 655 

System.out.println("created " + f);
}
}
fileData(f);
}
}
} /* Output: (80% match)
created MakeDirectoriesTest
Absolute path: d:\aaa-TIJ4\code\io\MakeDirectoriesTest
Can read: true
Can write: true
getName: MakeDirectoriesTest
getParent: null
getPath: MakeDirectoriesTest
length: 0
lastModified: 1101690308831
It's a directory
*///:~
```
In fileData( ) you can see various file investigation methods used to display information
about the file or directory path.
The first method that's exercised by main( ) is renameTo( ), which allows you to rename
(or move) a file to an entirely new path represented by the argument, which is another File
object. This also works with directories of any length.
If you experiment with the preceding program, you'll find that you can make a directory path
of any complexity, because mkdirs( ) will do all the work for you.

Exercise 6: (5) Use ProcessFiles to find all the Java source-code files in a particular
directory subtree that have been modified after a particular date.
Input and output
Programming language I/O libraries often use the abstraction of a stream, which represents
any data source or sink as an object capable of producing or receiving pieces of data. The
stream hides the details of what happens to the data inside the actual I/O device.
The Java library classes for I/O are divided by input and output, as you can see by looking at
the class hierarchy in the JDK documentation. Through inheritance, everything derived from
the InputStream or Reader classes has basic methods called read( ) for reading a single
byte or an array of bytes. Likewise, everything derived from OutputStream or Writer
classes has basic methods called write( ) for writing a single byte or an array of bytes.
However, you won't generally use these methods; they exist so that other classes can use
them—these other classes provide a more useful interface. Thus, you'll rarely create your
stream object by using a single class, but instead will layer multiple objects together to
provide your desired functionality (this is the Decorator design pattern, as you shall see in
this section). The fact that you create more than one object to produce a single stream is the
primary reason that Java's I/O library is confusing.
It's helpful to categorize the classes by their functionality. In Java l.o, the library designers
started by deciding that all classes that had anything to do with input would be inherited
from InputStream, and all classes that were associated with output would be inherited
from OutputStream.

As is the practice in this book, I will attempt to provide an overview of the classes, but
assume that you will use the JDK documentation to determine all the details, such as the
exhaustive list of methods of a particular class.
Types of InputStream
InputStream's job is to represent classes that produce input from different sources. These
sources can be:
1. An array of bytes.

2. A String obj ect.

3. A file.

4. A "pipe," which works like a physical pipe: You put things in at one end and they come
out the other.

5. A sequence of other streams, so you can collect them together into a single stream.

6. Other sources, such as an Internet connection. (This is covered in Thinking in
Enterprise Java, available at www.MindView.net.)

Each of these has an associated subclass of InputStream. In addition, the
FilterInputStream is also a type of InputStream, to provide a base class for "decorator"
classes that attach attributes or useful interfaces to input streams. This is discussed later.
Table I/O-1. Types of InputStream
Class Function Constructor arguments

How to use it
ByteArray-
InputStream
Allows a buffer in
memory to be used
as an
InputStream.
The buffer from which to
extract the bytes.
As a source of data: Connect
it to a FilterlnputStream
object to provide a useful
interface.
StringBuffer-
InputStream
Converts a String
into an
InputStream.
A String. The underlying
implementation actually
uses a StringBuffer.
As a source of data: Connect
it to a FilterlnputStream
object to provide a useful
interface.
File-
InputStream
For reading
information from a
file.
A String representing the
file name, or a File or
FileDescriptor object.
As a source of data: Connect
it to a FilterlnputStream
object to provide a useful
interface.
I/O 657 

Class Function Constructor arguments

How to use it
Piped-
InputStream
Produces the data
that's being written
to the associated
PipedOutput-
Stream.
Implements the
"piping" concept.
PipedOutputStream
As a source of data in
multithreading: Connect it
to a FilterlnputStream
object to provide a useful
interface.
Sequence-
InputStream
Converts two or
more
InputStream
objects into a single
InputStream.
Two InputStream objects
or an Enumeration for a
container of InputStream
objects.
As a source of data: Connect
it to a FilterlnputStream
object to provide a useful
interface.
Filter-
InputStream
Abstract class that is
an interface for
decorators that
provide useful
functionality to the
other
InputStream
classes. See Table
I/O-3.
See Table I/O-3.
See Table I/O-3.
Types of OutputStream
This category includes the classes that decide where your output will go: an array of bytes
(but not a String—presumably, you can create one using the array of bytes), a file, or a
"pipe."
In addition, the FilterOutputStream provides a base class for "decorator" classes that
attach attributes or useful interfaces to output streams. This is discussed later.
Table I/O-2. Types of OutputStream
Class Function Constructor arguments

How to use it
ByteArray-
OutputStream
Creates a buffer in
memory. All the data
that you send to the
stream is placed in
this buffer.
Optional initial size of the
buffer.

To designate the destination
of your data: Connect it to a
FilterOutputStream
object to provide a useful
interface.
File-
OutputStream
For sending
information to a file.
A String representing the
file name, or a File or
FileDescriptor object.

I/O 659 
Class Function Constructor arguments

How to use it
To designate the destination
of your data: Connect it to a
FilterOutputStream
object to provide a useful
interface.
Piped-
OutputStream
Any information you
write to this
automatically ends
up as input for the
associated
Pipedlnput-
Stream. Implements
the "piping" concept.
PipedlnputStream


To designate the destination
of your data for
multithreading: Connect it to
a FilterOutputStream
object to provide a useful
interface.
Filter-
OutputStream
Abstract class that is
an interface for
decorators that
provide useful
functionality to the
other
OutputStream
classes. See Table
1/O-4-
See Table I/O-4.
See Table I/O-4.
Adding attributes
and useful interfaces
Decorators were introduced in the Generics chapter, on page 717. The Java I/O library
requires many different combinations of features, and this is the justification for using the
Decorator design pattern. 1 The reason for the existence of the "filter" classes in the Java I/O
library is that the abstract "filter" class is the base class for all the decorators. A decorator
must have the same interface as the object it decorates, but the decorator can also extend the
interface, which occurs in several of the "filter" classes.
There is a drawback to Decorator, however. Decorators give you much more flexibility while
you're writing a program (since you can easily mix and match attributes), but they add
complexity to your code. The reason that the Java I/O library is awkward to use is that you
must create many classes—the "core" I/O type plus all the decorators—in order to get the
single I/O object that you want.
The classes that provide the decorator interface to control a particular InputStream or
OutputStream are the FilterlnputStream and FilterOutputStream, which don't have
very intuitive names. FilterlnputStream and FilterOutputStream are derived from the
base classes of the I/O library, InputStream and OutputStream, which is a key
requirement of the decorator (so that it provides the common interface to all the objects that
are being decorated).

1 It's not clear that this was a good design decision, especially compared to the simplicity of I/O libraries in other
languages. But it's the justification for the decision.

Reading from an InputStream with
FilterlnputStream
The FilterlnputStream classes accomplish two significantly different things.
DatalnputStream allows you to read different types of primitive data as well as String
objects. (All the methods start with "read," such as readByte( ), readFloat( ), etc.) This,
along with its companion DataOutputStream, allows you to move primitive data from one
place to another via a stream. These "places" are determined by the classes in Table I/O-1.
The remaining FilterlnputStream classes modify the way an InputStream behaves
internally: whether it's buffered or unbuffered, whether it keeps track of the lines it's reading
(allowing you to ask for line numbers or set the line number), and whether you can push back
a single character. The last two classes look a lot like support for building a compiler (they
were probably added to support the experiment of "building a Java compiler in Java"), so you
probably won't use them in general programming.
You'll need to buffer your input almost every time, regardless of the I/O device you're
connecting to, so it would have made more sense for the I/O library to have a special case (or
simply a method call) for unbuffered input rather than buffered input.
Table I/O-3. Types of FilterlnputStream
Class Function Constructor
arguments

How to use it
Data-
InputStream
Used in concert with
DataOutputStream, so
you can read primitives
(int, char, long, etc.)
from a stream in a
portable fashion.

InputStream


Contains a full interface
to allow you to read
primitive types.
Buffered-
InputStream
Use this to prevent a
physical read every time
you want more data.
You're saying, "Use a
buffer."
InputStream, with
optional buffer size.
This doesn't provide an
interface per se. It just
adds buffering to the
process. Attach an
interface object.
LineNumber-
InputStream
Keeps track of line
numbers in the input
stream; you can call
getLineNumber( ) and
setLineNumber (int).
InputStream


This just adds line
numbering, so you'll
probably attach an
interface object.
Pushback-
InputStream
Has a one-byte pushback
buffer so that you can
push back the last
character read.
InputStream


Generally used in the

I/O 661 
Class Function Constructor
arguments

How to use it
scanner for a compiler.
You probably won't use
this.
Writing to an OutputStream
with FilterOutputStream
The complement to DatalnputStream is DataOutputStream, which formats each of the
primitive types and String objects onto a stream in such a way that any DatalnputStream,
on any machine, can read them. All the methods start with "write," such as writeByte( ),
writeFloat( ), etc.
The original intent of PrintStream was to print all of the primitive data types and String
objects in a viewable format. This is different from DataOutputStream, whose goal is to
put data elements on a stream in a way that DatalnputStream can portably reconstruct
them.
The two important methods in PrintStream are print( ) and println( ), which are
overloaded to print all the various types. The difference between print( ) and println( ) is
that the latter adds a newline when it's done.
PrintStream can be problematic because it traps all IOExceptions (you must explicitly test
the error status with checkError( ), which returns true if an error has occurred). Also,
PrintStream doesn't internationalize properly and doesn't handle line breaks in a platform-
independent way. These problems are solved with PrintWriter, described later.
BufferedOutputStream is a modifier and tells the stream to use buffering so you don't get
a physical write every time you write to the stream. You'll probably always want to use this
when doing output.
Table I/O-4. Types of FilterOutputStream
Class Function Constructor
arguments

How to use it
Data-
OutputStream
Used in concert with
DataInputStream so
you can write primitives
(int, char, long, etc.) to
a stream in a portable
fashion.
OutputStream


Contains a full
interface to allow you
to write primitive
types.
PrintStream For producing formatted
output. While
DataOutputStream
handles the storage of
data, PrintStream
handles display.
OutputStream, with
optional boolean
indicating that the
buffer is flushed with
every newline.
Should be the "final"

Class Function Constructor
arguments

How to use it
wrapping for your
OutputStream
object. You'll probably
use this a lot.
Buffered-
OutputStream
Use this to prevent a
physical write every time
you send a piece of data.
You're saying, "Use a
buffer." You can call
flush( ) to flush the
buffer.
OutputStream, with
optional buffer size.

This doesn't provide an
interface per se. It just
adds buffering to the
process. Attach an
interface object.
Readers & Writers
Java 1.1 made significant modifications to the fundamental I/O stream library. When you see
the Reader and Writer classes, your first thought (like mine) might be that these were
meant to replace the InputStream and OutputStream classes. But that's not the case.
Although some aspects of the original streams library are deprecated (if you use them you
will receive a warning from the compiler), the InputStream and OutputStream classes
still provide valuable functionality in the form of byte-oriented I/O, whereas the Reader and
Writer classes provide Unicode-compliant, character-based I/O. In addition:
1. Java 1.1 added new classes into the InputStream and OutputStream hierarchy, so
it's obvious those hierarchies weren't being replaced.

2. There are times when you must use classes from the "byte" hierarchy in combination
with classes in the "character" hierarchy. To accomplish this, there are "adapter"
classes: InputStreamReader converts an InputStream to a Reader, and
OutputStreamWriter converts an OutputStream to a Writer.

The most important reason for the Reader and Writer hierarchies is for
internationalization. The old I/O stream hierarchy supports only 8-bit byte streams and
doesn't handle the 16-bit Unicode characters well. Since Unicode is used for
internationalization (and Java's native char is 16-bit Unicode), the Reader and Writer
hierarchies were added to support Unicode in all I/O operations. In addition, the new
libraries are designed for faster operations than the old.
Sources and sinks of data
Almost all of the original Java I/O stream classes have corresponding Reader and Writer
classes to provide native Unicode manipulation. However, there are some places where the
byte-oriented InputStreams and OutputStreams are the correct solution; in particular,
thejava.util.zip libraries are byte-oriented rather than char-oriented. So the most sensible
approach to take is to try to use the Reader and Writer classes whenever you can. You'll
discover the situations when you have to use the byte-oriented libraries because your code
won't compile.
Here is a table that shows the correspondence between the sources and sinks of information
(that is, where the data physically comes from or goes to) in the two hierarchies.

Sources & sinks:
Java 1.0 class
Corresponding Java 1.1 class
InputStream Reader
adapter:
InputStreamReader
OutputStream Writer
adapter:
OutputStreamWriter
FilelnputStream FileReader
FileOutputStream FileWriter
StringBufferlnputStream
(deprecated)
StringReader
(no corresponding class) StringWriter
ByteArrayInputStream CharArrayReader
ByteArrayOutputStream CharArrayWriter
PipedInputStream PipedReader
PipedOutputStream PipedWriter
In general, you'll find that the interfaces for the two different hierarchies are similar, if not
identical.
Modifying stream behavior
For InputStreams and OutputStreams, streams were adapted for particular needs using
"decorator" subclasses of FilterInputStream and FilterOutputStream. The Reader
and Writer class hierarchies continue the use of this idea—but not exactly.
In the following table, the correspondence is a rougher approximation than in the previous
table. The difference is because of the class organization; although
BufferedOutputStream is a subclass of FilterOutputStream, BufferedWriter is not a
subclass of FilterWriter (which, even though it is abstract, has no subclasses and so
appears to have been put in either as a placeholder or simply so you don't wonder where it
is). However, the interfaces to the classes are quite a close match.
Filters:
Java 1.0 class
Corresponding Java 1.1 class
FilterInputStream FilterReader
FilterOutputStream FilterWriter (abstract class with no
subclasses)
BufferedInputStream BufferedReader
(also has readLine( ))
BufferedOutputStream BufferedWriter
DataInputStream Use DataInputStream
(except when you need to use
readLine( ), when you should use a
I/O 663 

Filters:
Java 1.0 class
Corresponding Java 1.1 class
BufferedReader)
PrintStream PrintWriter
LineNumberInputStream
(deprecated)
LineNumberReader
StreamTokenizer StreamTokenizer
(Use the constructor that takes a
Reader instead)
PushbacklnputStream PushbackReader

There's one direction that's quite clear: Whenever you want to use readLine( ), you
shouldn't do it with a DataInputStream (this is met with a deprecation message at compile
time), but instead use a BufferedReader. Other than this, DataInputStream is still a
"preferred" member of the I/O library.
To make the transition to using a PrintWriter easier, it has constructors that take any
OutputStream object as well as Writer objects. PrintWriter's formatting interface is
virtually the same as PrintStream.
In Java SE5, PrintWriter constructors were added to simplify the creation of files when
writing output, as you shall see shortly.
One PrintWriter constructor also has an option to perform automatic flushing, which
happens after every println( ) if the constructor flag is set.
Unchanged classes
Some classes were left unchanged between Java 1.0 and Java 1.1:
Java 1.0 classes without
corresponding Java 1.1
classes
DataOutputStream
File
RandomAccessFile
SequenceInputStream
DataOutputStream, in particular, is used without change, so for storing and retrieving
data in a transportable format, you use the InputStream and OutputStream hierarchies.

Off by itself:
RandomAccessFile
RandomAccessFile is used for files containing records of known size so that you can move
from one record to another using seek( ), then read or change the records. The records don't
have to be the same size; you just have to determine how big they are and where they are
placed in the file.
At first it's a little bit hard to believe that RandomAccessFile is not part of the
InputStream or OutputStream hierarchy. However, it has no association with those
hierarchies other than that it happens to implement the DataInput and DataOutput
interfaces (which are also implemented by DataInputStream and DataOutputStream).
It doesn't even use any of the functionality of the existing InputStream or OutputStream
classes; it's a completely separate class, written from scratch, with all of its own (mostly
native) methods. The reason for this may be that RandomAccessFile has essentially
different behavior than the other I/O types, since you can move forward and backward within
a file. In any event, it stands alone, as a direct descendant of Object.
Essentially, a RandomAccessFile works like a DataInputStream pasted together with a
DataOutputStream, along with the methods getFilePointer( ) to find out where you are
in the file, seek( ) to move to a new point in the file, and length( ) to determine the
maximum size of the file. In addition, the constructors require a second argument (identical
to fopen( ) in C) indicating whether you are just randomly reading ("r") or reading and
writing ("rw"). There's no support for write-only files, which could suggest that
RandomAccessFile might have worked well if it were inherited from DataInputStream.
The seeking methods are available only in RandomAccessFile, which works for files only.
BufferedInputStream does allow you to mark( ) a position (whose value is held in a
single internal variable) and reset( ) to that position, but this is limited and not very useful.
Most, if not all, of the RandomAccessFile functionality is superseded as of JDK 1.4 with
the nio memory-mapped files, which will be described later in this chapter.
Typical uses of I/O streams
Although you can combine the I/O stream classes in many different ways, you'll probably just
use a few combinations. The following examples can be used as a basic reference for typical
I/O usage.
In these examples, exception handing will be simplified by passing exceptions out to the
console, but this is appropriate only in small examples and utilities. In your code you'll want
to consider more sophisticated error-handling approaches.
Buffered input file
To open a file for character input, you use a FileInputReader with a String or a File
object as the file name. For speed, you'll want that file to be buffered so you give the resulting
reference to the constructor for a BufferedReader. Since BufferedReader also provides
the readLine( ) method, this is your final object and the interface you read from. When
readLine( ) returns null, you're at the end of the file.

```java
//: io/BufferedInputFile.java
import java.io.*;
I/O 665 


public class BufferedInputFile {
// Throw exceptions to console:
public static String
read(String filename) throws IOException {
// Reading input by lines:
BufferedReader in = new BufferedReader(
new FileReader(filename));
String s;
StringBuilder sb = new StringBuilder();
while((s = in.readLine())!= null)
sb.append(s + "\n");
in.close();
return sb.toString();
}
public static void main(String[] args)
throws IOException {
System.out.print(read("BufferedInputFile.java"));
}
} /* (Execute to see output) *///:~
```
The StringBuilder sb is used to accumulate the entire contents of the file (including
newlines that must be added since readLine( ) strips them off). Finally, close( ) is called to
close the file. 2

Exercise 7: (2) Open a text file so that you can read the file one line at a time. Read each
line as a String and place that String object into a LinkedList. Print all of the lines in the
LinkedList in reverse order.

Exercise 8: (1) Modify Exercise 7 so that the name of the file you read is provided as a
command-line argument.

Exercise 9: (1) Modify Exercise 8 to force all the lines in the LinkedList to uppercase
and send the results to System.out.

Exercise 10: (2) Modify Exercise 8 to take additional command-line arguments of words
to find in the file. Print all lines in which any of the words match.

Exercise 11: (2) In the innerclasses/GreenhouseController.java example,
GreenhouseController contains a hard-coded set of events. Change the program so that it
reads the events and their relative times from a text file, ((difficulty level 8): Use a Factory
Method design pattern to build the events—see Thinking in Patterns (with Java) at
www.MindView.net.)
Input from memory
Here, the String result from BufferedInputFile.read( ) is used to create a
StringReader. Then read( ) is used to read each character one at a time and send it out to
the console:

```java
//: io/MemoryInput.java
import java.io.*;


2 In the original design, close( ) was supposed to be called when finalize( ) ran, and you will see finalize( ) defined this
way for I/O classes. However, as is discussed elsewhere in this book, the finalize( ) feature didn't work out the way the
Java designers originally envisioned it (that is to say, it's irreparably broken), so the only safe approach is to explicitly call
close( ) for files.

public class MemoryInput {
public static void main(String[] args)
throws IOException {
StringReader in = new StringReader(
BufferedInputFile.read("MemoryInput.java"));
int c;
while((c = in.read()) != -1)
System.out.print((char)c);
}
} /* (Execute to see output) *///:~
```
Note that read( ) returns the next character as an int and thus it must be cast to a char to
print properly.
Formatted memory input
To read "formatted" data, you use a DataInputStream, which is a byteoriented I/O class
(rather than char-oriented). Thus you must use all InputStream classes rather than
Reader classes. Of course, you can read anything (such as a file) as bytes using
InputStream classes, but here a String is used:

```java
//: io/FormattedMemoryInput.java
import java.io.*;

public class FormattedMemoryInput {
public static void main(String[] args)
throws IOException {
try {
DataInputStream in = new DataInputStream(
new ByteArrayInputStream(
BufferedInputFile.read(
"FormattedMemoryInput.java").getBytes()));
while(true)
System.out.print((char)in.readByte());
} catch(EOFException e) {
System.err.println("End of stream");
}
}
} /* (Execute to see output) *///:~
```
A ByteArrayInputStream must be given an array of bytes. To produce this, String has a
getBytes( ) method. The resulting ByteArrayInputStream is an appropriate
InputStream to hand to DataInputStream.
If you read the characters from a DataInputStream one byte at a time using readByte( ),
any byte value is a legitimate result, so the return value cannot be used to detect the end of
input. Instead, you can use the available( ) method to find out how many more characters
are available. Here's an example that shows how to read a file one byte at a time:

```java
//: io/TestEOF.java
// Testing for end of file while reading a byte at a time.
import java.io.*;

public class TestEOF {
public static void main(String[] args)
throws IOException {
DataInputStream in = new DataInputStream(
new BufferedInputStream(
new FileInputStream("TestEOF.java")));
while(in.available() != 0)
I/O 667 

System.out.print((char)in.readByte());
}
} /* (Execute to see output) *///:~
```
Note that available( ) works differently depending on what sort of medium you're reading
from; it's literally "the number of bytes that can be read without blocking." With a file, this
means the whole file, but with a different kind of stream this might not be true, so use it
thoughtfully.
You could also detect the end of input in cases like these by catching an exception. However,
the use of exceptions for control flow is considered a misuse of that feature.
Basic file output
A FileWriter object writes data to a file. You'll virtually always want to buffer the output by
wrapping it in a BufferedWriter (try removing this wrapping to see the impact on the
performance—buffering tends to dramatically increase performance of I/O operations). In
this example, it's decorated as a PrintWriter to provide formatting. The data file created
this way is readable as an ordinary text file:

```java
//: io/BasicFileOutput.java
import java.io.*;

public class BasicFileOutput {
static String file = "BasicFileOutput.out";
public static void main(String[] args)
throws IOException {
BufferedReader in = new BufferedReader(
new StringReader(
BufferedInputFile.read("BasicFileOutput.java")));
PrintWriter out = new PrintWriter(
new BufferedWriter(new FileWriter(file)));
int lineCount = 1;
String s;
while((s = in.readLine()) != null )
out.println(lineCount++ + ": " + s);
out.close();
// Show the stored file:
System.out.println(BufferedInputFile.read(file));
}
} /* (Execute to see output) *///:~
```
As the lines are written to the file, line numbers are added. Note that LineNumberReader
is not used, because it's a silly class and you don't need it. You can see from this example that
it's trivial to keep track of your own line numbers.
When the input stream is exhausted, readLine( ) returns null. You'll see an explicit
close( ) for out, because if you don't call close( ) for all your output files, you might
discover that the buffers don't get flushed, so the file will be incomplete.
Text file output shortcut
Java SE5 added a helper constructor to PrintWriter so that you don't have to do all the
decoration by hand every time you want to create a text file and write to it. Here's
BasicFileOutput.java rewritten to use this shortcut:

```java
//: io/FileOutputShortcut.java
import java.io.*;


public class FileOutputShortcut {
static String file = "FileOutputShortcut.out";
public static void main(String[] args)
throws IOException {
BufferedReader in = new BufferedReader(
new StringReader(
BufferedInputFile.read("FileOutputShortcut.java")));
// Here's the shortcut:
PrintWriter out = new PrintWriter(file);
int lineCount = 1;
String s;
while((s = in.readLine()) != null )
out.println(lineCount++ + ": " + s);
out.close();
// Show the stored file:
System.out.println(BufferedInputFile.read(file));
}
} /* (Execute to see output) *///:~
```
You still get buffering, you just don't have to do it yourself. Unfortunately, other commonly
written tasks were not given shortcuts, so typical I/O will still involve a lot of redundant text.
However, the TextFile utility that is used in this book, and which will be defined a little later
in this chapter, does simplify these common tasks.

Exercise 12: (3) Modify Exercise 8 to also open a text file so you can write text into it.
Write the lines in the LinkedList, along with line numbers (do not attempt to use the
"LineNumber" classes), out to the file.

Exercise 13: (3) Modify BasicFileOutput.java so that it uses LineNumberReader
to keep track of the line count. Note that it's much easier to just keep track programmatically.

Exercise 14: (2) Starting with BasicFileOutput.java, write a program that compares
the performance of writing to a file when using buffered and unbuffered I/O.
Storing and recovering data
A PrintWriter formats data so that it's readable by a human. However, to output data for
recovery by another stream, you use a DataOutputStream to write the data and a
DataInputStream to recover the data. Of course, these streams can be anything, but the
following example uses a file, buffered for both reading and writing. DataOutputStream
and DataInputStream are byte-oriented and thus require InputStreams and
OutputStreams:

```java
//: io/StoringAndRecoveringData.java
import java.io.*;

public class StoringAndRecoveringData {
public static void main(String[] args)
throws IOException {
DataOutputStream out = new DataOutputStream(
new BufferedOutputStream(
new FileOutputStream("Data.txt")));
out.writeDouble(3.14159);
out.writeUTF("That was pi");
out.writeDouble(1.41413);
out.writeUTF("Square root of 2");
out.close();
DataInputStream in = new DataInputStream(
I/O 669 

new BufferedInputStream(
new FileInputStream("Data.txt")));
System.out.println(in.readDouble());
// Only readUTF() will recover the
// Java-UTF String properly:
System.out.println(in.readUTF());
System.out.println(in.readDouble());
System.out.println(in.readUTF());
}
} /* Output:
3.14159
That was pi
1.41413
Square root of 2
*///:~
```
If you use a DataOutputStream to write the data, then Java guarantees that you can
accurately recover the data using a DataInputStream— regardless of what different
platforms write and read the data. This is incredibly valuable, as anyone knows who has
spent time worrying about platform-specific data issues. That problem vanishes if you have
Java on both platforms. 3
When you are using a DataOutputStream, the only reliable way to write a String so that it
can be recovered by a DataInputStream is to use UTF-8 encoding, accomplished in this
example using writeUTF( ) and readUTF( ). UTF-8 is a multi-byte format, and the length
of encoding varies according to the actual character set in use. If you're working with ASCII
or mostly ASCII characters (which occupy only seven bits), Unicode is a tremendous waste of
space and/or bandwidth, so UTF-8 encodes ASCII characters in a single byte, and non-ASCII
characters in two or three bytes. In addition, the length of the string is stored in the first two
bytes of the UTF-8 string. However, writeUTF( ) and readUTF( ) use a special variation of
UTF-8 for Java (which is completely described in the JDK documentation for those
methods), so if you read a string written with writeUTF( ) using a non-Java program, you
must write special code in order to read the string properly.
With writeUTF( ) and readUTF( ), you can intermingle Strings and other types of data
using a DataOutputStream, with the knowledge that the Strings will be properly stored
as Unicode and will be easily recoverable with a DataInputStream.
The writeDouble( ) method stores the double number to the stream, and the
complementary readDouble( ) method recovers it (there are similar methods for reading
and writing the other types). But for any of the reading methods to work correctly, you must
know the exact placement of the data item in the stream, since it would be equally possible to
read the stored double as a simple sequence of bytes, or as a char, etc. So you must either
have a fixed format for the data in the file, or extra information must be stored in the file that
you parse to determine where the data is located. Note that object serialization or XML (both
described later in this chapter) may be easier ways to store and retrieve complex data
structures.

Exercise 15: (4) Look up DataOutputStream and DataInputStream in the JDK
documentation. Starting with StoringAndRecoveringData.java, create a program that
stores and then retrieves all the different possible types provided by the
DataOutputStream and DataInputStream classes. Verify that the values are stored and
retrieved accurately.
Reading and writing

3 XML is another way to solve the problem of moving data across different computing platforms, and does not depend on
having Java on all platforms. XML is introduced later in this chapter.

random-access files
Using a RandomAccessFile is like using a combined DataInputStream and
DataOutputStream (because it implements the same interfaces: DataInput and
DataOutput). In addition, you can use seek( ) to move about in the file and change the
values.
When using RandomAccessFile, you must know the layout of the file so that you can
manipulate it properly. RandomAccessFile has specific methods to read and write primitives
and UTF-8 strings. Here's an example:

```java
//: io/UsingRandomAccessFile.java
import java.io.*;

public class UsingRandomAccessFile {
static String file = "rtest.dat";
static void display() throws IOException {
RandomAccessFile rf = new RandomAccessFile(file, "r");
for(int i = 0; i < 7; i++)
System.out.println(
"Value " + i + ": " + rf.readDouble());
System.out.println(rf.readUTF());
rf.close();
}
public static void main(String[] args)
throws IOException {
RandomAccessFile rf = new RandomAccessFile(file, "rw");
for(int i = 0; i < 7; i++)
rf.writeDouble(i*1.414);
rf.writeUTF("The end of the file");
rf.close();
display();
rf = new RandomAccessFile(file, "rw");
rf.seek(5*8);
rf.writeDouble(47.0001);
rf.close();
display();
}
} /* Output:
Value 0: 0.0
Value 1: 1.414
Value 2: 2.828
Value 3: 4.242
Value 4: 5.656
Value 5: 7.069999999999999
Value 6: 8.484
The end of the file
Value 0: 0.0
Value 1: 1.414
Value 2: 2.828
Value 3: 4.242
Value 4: 5.656
Value 5: 47.0001
Value 6: 8.484
The end of the file
*///:~
```
The display( ) method opens a file and displays seven elements within as double values. In
main( ), the file is created, then opened and modified. Since a double is always eight bytes
long, to seek( ) to double number 5 you just multiply 5*8 to produce the seek value.
I/O 671 

As previously noted, RandomAccessFile is effectively separate from the rest of the I/O
hierarchy, save for the fact that it implements the DataInput and DataOutput interfaces.
It doesn't support decoration, so you cannot combine it with any of the aspects of the
InputStream and OutputStream subclasses. You must assume that a
RandomAccessFile is properly buffered since you cannot add that.
The one option you have is in the second constructor argument: You can open a
RandomAccessFile to read ("r") or read and write ("rw").
You may want to consider using nio memory-mapped files instead of RandomAccessFile.

Exercise 16: (2) Look up RandomAccessFile in the JDK documentation. Starting with
UsingRandomAccessFile.java, create a program that stores and then retrieves all the
different possible types provided by the RandomAccessFile class. Verify that the values
are stored and retrieved accurately.
Piped streams
The PipedInputStream, PipedOutputStream, PipedReader and PipedWriter have
been mentioned only briefly in this chapter. This is not to suggest that they aren't useful, but
their value is not apparent until you begin to understand concurrency, since the piped
streams are used to communicate between tasks. This is covered along with an example in
the Concurrency chapter.
File reading & writing utilities
A very common programming task is to read a file into memory, modify it, and then write it
out again. One of the problems with the Java I/O library is that it requires you to write quite
a bit of code in order to perform these common operations—there are no basic helper
functions to do them for you. What's worse, the decorators make it rather hard to remember
how to open files. Thus, it makes sense to add helper classes to your library that will easily
perform these basic tasks for you. Java SE5 has added a convenience constructor to
PrintWriter so you can easily open a text file for writing. However, there are many other
common tasks that you will want to do over and over, and it makes sense to eliminate the
redundant code associated with those tasks.
Here's the TextFile class that has been used in previous examples in this book to simplify
reading and writing files. It contains static methods to read and write text files as a single
string, and you can create a TextFile object that holds the lines of the file in an ArrayList
(so you have all the ArrayList functionality while manipulating the file contents):

```java
//: net/mindview/util/TextFile.java
// Static functions for reading and writing text files as
// a single string, and treating a file as an ArrayList.
package net.mindview.util;
import java.io.*;
import java.util.*;

public class TextFile extends ArrayList<String> {
// Read a file as a single string:
public static String read(String fileName) {
StringBuilder sb = new StringBuilder();
try {
BufferedReader in= new BufferedReader(new FileReader(
new File(fileName).getAbsoluteFile()));
try {
String s;

while((s = in.readLine()) != null) {
sb.append(s);
sb.append("\n");
}
} finally {
in.close();
}
} catch(IOException e) {
throw new RuntimeException(e);
}
return sb.toString();
}
// Write a single file in one method call:
public static void write(String fileName, String text) {
try {
PrintWriter out = new PrintWriter(
new File(fileName).getAbsoluteFile());
try {
out.print(text);
} finally {
out.close();
}
} catch(IOException e) {
throw new RuntimeException(e);
}
}
// Read a file, split by any regular expression:
public TextFile(String fileName, String splitter) {
super(Arrays.asList(read(fileName).split(splitter)));
// Regular expression split() often leaves an empty
// String at the first position:
if(get(0).equals("")) remove(0);
}
// Normally read by lines:
public TextFile(String fileName) {
this(fileName, "\n");
}
public void write(String fileName) {
try {
PrintWriter out = new PrintWriter(
new File(fileName).getAbsoluteFile());
try {
for(String item : this)
out.println(item);
} finally {
out.close();
}
} catch(IOException e) {
throw new RuntimeException(e);
}
}
// Simple test:
public static void main(String[] args) {
String file = read("TextFile.java");
write("test.txt", file);
TextFile text = new TextFile("test.txt");
text.write("test2.txt");
// Break into unique sorted list of words:
TreeSet<String> words = new TreeSet<String>(
new TextFile("TextFile.java", "\\W+"));
// Display the capitalized words:
System.out.println(words.headSet("a"));
}
I/O 673 

} /* Output:
[0, ArrayList, Arrays, Break, BufferedReader, BufferedWriter, Clean,
Display, File, FileReader, FileWriter, IOException, Normally, Output,
PrintWriter, Read, Regular, RuntimeException, Simple, Static, String,
StringBuilder, System, TextFile, Tools, TreeSet, W, Write]
*///:~
```
read( ) appends each line to a StringBuilder, followed by a newline, because that is
stripped out during reading. Then it returns a String containing the whole file. write( )
opens and writes the text String to the file.
Notice that any code that opens a file guards the file's close( ) call in a finally clause to
guarantee that the file will be properly closed.
The constructor uses the read( ) method to turn the file into a String, then uses
String.split( ) to divide the result into lines along newline boundaries (if you use this class
a lot, you may want to rewrite this constructor to improve efficiency). Alas, there is no
corresponding "join" method, so the non-static write( ) method must write the lines out by
hand.
Because this class is intended to trivialize the process of reading and writing files, all
IOExceptions are converted to RuntimeExceptions, so the user doesn't have to use try-
catch blocks. However, you may need to create another version that passes IOExceptions
out to the caller.
In main( ), a basic test is performed to ensure that the methods work.
Although this utility did not require much code to create, using it can save a lot of time and
make your life easier, as you'll see in some of the examples later in this chapter.
Another way to solve the problem of reading text files is to use the java.util.Scanner class
introduced in Java SE5. However, this is only for reading files, not writing them, and that
tool (which you'll notice is nor in java.io) is primarily designed for creating programming-
language scanners or "little languages."

Exercise 17: (4) Using TextFile and a Map<Character,Integer>, create a program
that counts the occurrence of all the different characters in a file. (So if there are 12
occurrences of the letter 'a' in the file, the Integer associated with the Character
containing 'a' in the Map contains '12').

Exercise 18: (1) Modify TextFile.java so that it passes IOExceptions out to the caller.
Reading binary files
This utility is similar to TextFile.java in that it simplifies the process of reading binary files:

```java
//: net/mindview/util/BinaryFile.java
// Utility for reading files in binary form.
package net.mindview.util;
import java.io.*;

public class BinaryFile {
public static byte[] read(File bFile) throws IOException{
BufferedInputStream bf = new BufferedInputStream(
new FileInputStream(bFile));
try {
byte[] data = new byte[bf.available()];

bf.read(data);
return data;
} finally {
bf.close();
}
}
public static byte[]
read(String bFile) throws IOException {
return read(new File(bFile).getAbsoluteFile());
}
} ///:~
```
One overloaded method takes a File argument; the second takes a String argument, which
is the file name. Both return the resulting byte array.
The available( ) method is used to produce the appropriate array size, and this particular
version of the overloaded read( ) method fills the array.

Exercise 19: (2) Using BinaryFile and a Map<Byte,Integer>, create a program that
counts the occurrence of all the different bytes in a file.

Exercise 20: (4) Using Directory.walk( ) and BinaryFile, verify that all .class files
in a directory tree begin with the hex characters 'CAFEBABE'.
Standard I/O
The term standard I/O refers to the Unix concept of a single stream of information that is
used by a program (this idea is reproduced in some form in Windows and many other
operating systems). All of the program's input can come from standard input, all of its
output can go to standard output, and all of its error messages can be sent to standard error.
The value of standard I/O is that programs can easily be chained together, and one program's
standard output can become the standard input for another program. This is a powerful tool.
Reading from standard input
Following the standard I/O model, Java has System.in, System.out, and System.err.
Throughout this book, you've seen how to write to standard output using System.out, which
is already pre-wrapped as a PrintStream object. System.err is likewise a PrintStream,
but System.in is a raw InputStream with no wrapping. This means that although you can
use System.out and System.err right away, System.in must be wrapped before you can
read from it.
You'll typically read input a line at a time using readLine( ). To do this, wrap System.in in
a BufferedReader, which requires you to convert System.in to a Reader using
InputStreamReader. Here's an example that simply echoes each line that you type in:

```java
//: io/Echo.java
// How to read from standard input.
// {RunByHand}
import java.io.*;

public class Echo {
public static void main(String[] args)
throws IOException {
BufferedReader stdin = new BufferedReader(
new InputStreamReader(System.in));
String s;
I/O 675 

while((s = stdin.readLine()) != null && s.length()!= 0)
System.out.println(s);
// An empty line or Ctrl-Z terminates the program
}
} ///:~
```
The reason for the exception specification is that readLine( ) can throw an IOException.
Note that System.in should usually be buffered, as with most streams.

Exercise 21: (1) Write a program that takes standard input and capitalizes all characters,
then puts the results on standard output. Redirect the contents of a file into this program
(the process of redirection will vary depending on your operating system).
Changing System.out to a
PrintWriter
System.out is a PrintStream, which is an OutputStream. PrintWriter has a
constructor that takes an OutputStream as an argument. Thus, if you want, you can
convert System.out into a PrintWriter using that constructor:

```java
//: io/ChangeSystemOut.java
// Turn System.out into a PrintWriter.
import java.io.*;

public class ChangeSystemOut {
public static void main(String[] args) {
PrintWriter out = new PrintWriter(System.out, true);
out.println("Hello, world");
}
} /* Output:
Hello, world
*///:~
```
It's important to use the two-argument version of the PrintWriter constructor and to set
the second argument to true in order to enable automatic flushing; otherwise, you may not
see the output.
Redirecting standard I/O
The Java System class allows you to redirect the standard input, output, and error I/O
streams using simple static method calls:
setIn(InputStream)
setOut(PrintStream)
setErr(PrintStream)

Redirecting output is especially useful if you suddenly start creating a large amount of output
on your screen, and it's scrolling past faster than you can read it. 4 Redirecting input is
valuable for a command-line program in which you want to test a particular user-input
sequence repeatedly. Here's a simple example that shows the use of these methods:

```java
//: io/Redirecting.java
// Demonstrates standard I/O redirection.

4 The Graphical User Interfaces chapter shows an even more convenient solution for this: a GUI program with a scrolling
text area.

import java.io.*;

public class Redirecting {
public static void main(String[] args)
throws IOException {
PrintStream console = System.out;
BufferedInputStream in = new BufferedInputStream(
new FileInputStream("Redirecting.java"));
PrintStream out = new PrintStream(
new BufferedOutputStream(
new FileOutputStream("test.out")));
System.setIn(in);
System.setOut(out);
System.setErr(out);
BufferedReader br = new BufferedReader(
new InputStreamReader(System.in));
String s;
while((s = br.readLine()) != null)
System.out.println(s);
out.close(); // Remember this!
System.setOut(console);
}
} ///:~
```
This program attaches standard input to a file and redirects standard output and standard
error to another file. Notice that it stores a reference to the original System.out object at the
beginning of the program, and restores the system output to that object at the end.
I/O redirection manipulates streams of bytes, not streams of characters; thus,
InputStreams and OutputStreams are used rather than Readers and Writers.
Process control
You will often need to execute other operating system programs from inside Java, and to
control the input and output from such programs. The Java library provides classes to
perform such operations.
A common task is to run a program and send the resulting output to the console. This section
contains a utility to simplify this task.
Two types of errors can occur with this utility: the normal errors that result in exceptions—
for these we will just rethrow a runtime exception—and errors from the execution of the
process itself. We want to report these errors with a separate exception:

```java
//: net/mindview/util/OSExecuteException.java
package net.mindview.util;

public class OSExecuteException extends RuntimeException {
public OSExecuteException(String why) { super(why); }
} ///:~
```
To run a program, you pass OSExecute.command( ) a command string, which is the
same command that you would type to run the program on the console. This command is
passed to the java.lang.ProcessBuilder constructor (which requires it as a sequence of
String objects), and the resulting ProcessBuilder object is started:

```java
//: net/mindview/util/OSExecute.java
// Run an operating system command
I/O 677 

// and send the output to the console.
package net.mindview.util;
import java.io.*;

public class OSExecute {
public static void command(String command) {
boolean err = false;
try {
Process process =
new ProcessBuilder(command.split(" ")).start();
BufferedReader results = new BufferedReader(
new InputStreamReader(process.getInputStream()));
String s;
while((s = results.readLine())!= null)
System.out.println(s);
BufferedReader errors = new BufferedReader(
new InputStreamReader(process.getErrorStream()));
// Report errors and return nonzero value
// to calling process if there are problems:
while((s = errors.readLine())!= null) {
System.err.println(s);
err = true;
}
} catch(Exception e) {
// Compensate for Windows 2000, which throws an
// exception for the default command line:
if(!command.startsWith("CMD /C"))
command("CMD /C " + command);
else
throw new RuntimeException(e);
}
if(err)
throw new OSExecuteException("Errors executing " +
command);
}
} ///:~
```
To capture the standard output stream from the program as it executes, you call
getInputStream( ). This is because an InputStream is something we can read from.
The results from the program arrive a line at a time, so they are read using readLine( ).
Here the lines are simply printed, but you may also want to capture and return them from
command( ).
The program's errors are sent to the standard error stream, and are captured by calling
getErrorStream( ). If there are any errors, they are printed and an
OSExecuteException is thrown so the calling program will handle the problem.
Here's an example that shows how to use OSExecute:

```java
//: io/OSExecuteDemo.java
// Demonstrates standard I/O redirection.
import net.mindview.util.*;

public class OSExecuteDemo {
public static void main(String[] args) {
OSExecute.command("javap OSExecuteDemo");
}
} /* Output:
Compiled from "OSExecuteDemo.java"
public class OSExecuteDemo extends java.lang.Object{

public OSExecuteDemo();
public static void main(java.lang.String[]);
}
*///:~
```
This uses the javap decompiler (that comes with the JDK) to decompile the program.

Exercise 22: (5) Modify OSExecute.java so that, instead of printing the standard
output stream, it returns the results of executing the program as a List of Strings.
Demonstrate the use of this new version of the utility.
New I/O
The Java "new" I/O library, introduced in JDK 1.4 in the java.nio.* packages, has one goal:
speed. In fact, the "old" I/O packages have been reimplemented using nio in order to take
advantage of this speed increase, so you will benefit even if you don't explicitly write code
with nio. The speed increase occurs both in file I/O, which is explored here, and in network
I/O, which is covered in Thinking in Enterprise Java.
The speed comes from using structures that are closer to the operating system's way of
performing I/O: channels and buffers. You could think of it as a coal mine; the channel is the
mine containing the seam of coal (the data), and the buffer is the cart that you send into the
mine. The cart comes back full of coal, and you get the coal from the cart. That is, you don't
interact directly with the channel; you interact with the buffer and send the buffer into the
channel. The channel either pulls data from the buffer, or puts data into the buffer.
The only kind of buffer that communicates directly with a channel is a ByteBuffer—that is,
a buffer that holds raw bytes. If you look at the JDK documentation for
java.nio.ByteBuffer, you'll see that it's fairly basic: You create one by telling it how much
storage to allocate, and there are methods to put and get data, in either raw byte form or as
primitive data types. But there's no way to put or get an object, or even a String. It's fairly
low-level, precisely because this makes a more efficient mapping with most operating
systems.
Three of the classes in the "old" I/O have been modified so that they produce a
FileChannel: FileInputStream, FileOutputStream, and, for both reading and writing,
RandomAccessFile. Notice that these are the byte manipulation streams, in keeping with
the low-level nature of nio. The Reader and Writer character-mode classes do not produce
channels, but the java.nio.channels.Channels class has utility methods to produce
Readers and Writers from channels.
Here's a simple example that exercises all three types of stream to produce channels that are
writeable, read/writeable, and readable:

```java
//: io/GetChannel.java
// Getting channels from streams
import java.nio.*;
import java.nio.channels.*;
import java.io.*;

public class GetChannel {
private static final int BSIZE = 1024;
public static void main(String[] args) throws Exception {
// Write a file:
FileChannel fc =
new FileOutputStream("data.txt").getChannel();
fc.write(ByteBuffer.wrap("Some text ".getBytes()));
I/O 679 

fc.close();
// Add to the end of the file:
fc =
new RandomAccessFile("data.txt", "rw").getChannel();
fc.position(fc.size()); // Move to the end
fc.write(ByteBuffer.wrap("Some more".getBytes()));
fc.close();
// Read the file:
fc = new FileInputStream("data.txt").getChannel();
ByteBuffer buff = ByteBuffer.allocate(BSIZE);
fc.read(buff);
buff.flip();
while(buff.hasRemaining())
System.out.print((char)buff.get());
}
} /* Output:
Some text Some more
*///:~
```
For any of the stream classes shown here, getChannel( ) will produce a FileChannel. A
channel is fairly basic: You can hand it a ByteBuffer for reading or writing, and you can lock
regions of the file for exclusive access (this will be described later).
One way to put bytes into a ByteBuffer is to stuff them in directly using one of the "put"
methods, to put one or more bytes, or values of primitive types. However, as seen here, you
can also "wrap" an existing byte array in a ByteBuffer using the wrap( ) method. When
you do this, the underlying array is not copied, but instead is used as the storage for the
generated ByteBuffer. We say that the ByteBuffer is "backed by" the array.
The data.txt file is reopened using a RandomAccessFile. Notice that you can move the
FileChannel around in the file; here, it is moved to the end so that additional writes will be
appended.
For read-only access, you must explicitly allocate a ByteBuffer using the static allocate( )
method. The goal of nio is to rapidly move large amounts of data, so the size of the
ByteBuffer should be significant—in fact, the lK used here is probably quite a bit smaller
than you'd normally want to use (you'll have to experiment with your working application to
find the best size).
It's also possible to go for even more speed by using allocateDirect( ) instead of
allocate( ) to produce a "direct" buffer that may have an even higher coupling with the
operating system. However, the overhead in such an allocation is greater, and the actual
implementation varies from one operating system to another, so again, you must experiment
with your working application to discover whether direct buffers will buy you any advantage
in speed.
Once you call read( ) to tell the FileChannel to store bytes into the ByteBuffer, you must
call flip( ) on the buffer to tell it to get ready to have its bytes extracted (yes, this seems a bit
crude, but remember that it's very low-level and is done for maximum speed). And if we were
to use the buffer for further read( ) operations, we'd also have to call clear( ) to prepare it
for each read( ). You can see this in a simple file-copying program:

```java
//: io/ChannelCopy.java
// Copying a file using channels and buffers
// {Args: ChannelCopy.java test.txt}
import java.nio.*;
import java.nio.channels.*;
import java.io.*;

public class ChannelCopy {

private static final int BSIZE = 1024;
public static void main(String[] args) throws Exception {
if(args.length != 2) {
System.out.println("arguments: sourcefile destfile");
System.exit(1);
}
FileChannel
in = new FileInputStream(args[0]).getChannel(),
out = new FileOutputStream(args[1]).getChannel();
ByteBuffer buffer = ByteBuffer.allocate(BSIZE);
while(in.read(buffer) != -1) {
buffer.flip(); // Prepare for writing
out.write(buffer);
buffer.clear(); // Prepare for reading
}
}
} ///:~
```
You can see that one FileChannel is opened for reading, and one for writing. A ByteBuffer
is allocated, and when FileChannel.read( ) returns -1 (a holdover, no doubt, from Unix
and C), it means that you've reached the end of the input. After each read( ), which puts
data into the buffer, flip( ) prepares the buffer so that its information can be extracted by the
write( ). After the write( ), the information is still in the buffer, and clear( ) resets all the
internal pointers so that it's ready to accept data during another read( ).
The preceding program is not the ideal way to handle this kind of operation, however. Special
methods transferTo( ) and transferFrom( ) allow you to connect one channel directly to
another:

```java
//: io/TransferTo.java
// Using transferTo() between channels
// {Args: TransferTo.java TransferTo.txt}
import java.nio.channels.*;
import java.io.*;

public class TransferTo {
public static void main(String[] args) throws Exception {
if(args.length != 2) {
System.out.println("arguments: sourcefile destfile");
System.exit(1);
}
FileChannel
in = new FileInputStream(args[0]).getChannel(),
out = new FileOutputStream(args[1]).getChannel();
in.transferTo(0, in.size(), out);
// Or:
// out.transferFrom(in, 0, in.size());
}
} ///:~
```
You won't do this kind of thing very often, but it's good to know about.
Converting data
If you look back at GetChannel.java, you'll notice that, to print the information in the file,
we are pulling the data out one byte at a time and casting each byte to a char. This seems a
bit primitive—if you look at the java.nio.CharBuffer class, you'll see that it has a
toString( ) method that says, "Returns a string containing the characters in this buffer."
Since a ByteBuffer can be viewed as a CharBuffer with the asCharBuffer( ) method,
I/O 681 

why not use that? As you can see from the first line in the output statement below, this
doesn't work out:

```java
//: io/BufferToText.java
// Converting text to and from ByteBuffers
import java.nio.*;
import java.nio.channels.*;
import java.nio.charset.*;
import java.io.*;

public class BufferToText {
private static final int BSIZE = 1024;
public static void main(String[] args) throws Exception {
FileChannel fc =
new FileOutputStream("data2.txt").getChannel();
fc.write(ByteBuffer.wrap("Some text".getBytes()));
fc.close();
fc = new FileInputStream("data2.txt").getChannel();
ByteBuffer buff = ByteBuffer.allocate(BSIZE);
fc.read(buff);
buff.flip();
// Doesn't work:
System.out.println(buff.asCharBuffer());
// Decode using this system's default Charset:
buff.rewind();
String encoding = System.getProperty("file.encoding");
System.out.println("Decoded using " + encoding + ": "
+ Charset.forName(encoding).decode(buff));
// Or, we could encode with something that will print:
fc = new FileOutputStream("data2.txt").getChannel();
fc.write(ByteBuffer.wrap(
"Some text".getBytes("UTF-16BE")));
fc.close();
// Now try reading again:
fc = new FileInputStream("data2.txt").getChannel();
buff.clear();
fc.read(buff);
buff.flip();
System.out.println(buff.asCharBuffer());
// Use a CharBuffer to write through:
fc = new FileOutputStream("data2.txt").getChannel();
buff = ByteBuffer.allocate(24); // More than needed
buff.asCharBuffer().put("Some text");
fc.write(buff);
fc.close();
// Read and display:
fc = new FileInputStream("data2.txt").getChannel();
buff.clear();
fc.read(buff);
buff.flip();
System.out.println(buff.asCharBuffer());
}
} /* Output:
????
Decoded using Cp1252: Some text
Some text
Some text
*///:~
```
The buffer contains plain bytes, and to turn these into characters, we must either encode
them as we put them in (so that they will be meaningful when they come out) or decode them
as they come out of the buffer. This can be accomplished using the

java.nio.charset.Charset class, which provides tools for encoding into many different
types of character sets:

```java
//: io/AvailableCharSets.java
// Displays Charsets and aliases
import java.nio.charset.*;
import java.util.*;
import static net.mindview.util.Print.*;

public class AvailableCharSets {
public static void main(String[] args) {
SortedMap<String,Charset> charSets =
Charset.availableCharsets();
Iterator<String> it = charSets.keySet().iterator();
while(it.hasNext()) {
String csName = it.next();
printnb(csName);
Iterator aliases =
charSets.get(csName).aliases().iterator();
if(aliases.hasNext())
printnb(": ");
while(aliases.hasNext()) {
printnb(aliases.next());
if(aliases.hasNext())
printnb(", ");
}
print();
}
}
} /* Output:
Big5: csBig5
Big5-HKSCS: big5-hkscs, big5hk, big5-hkscs:unicode3.0, big5hkscs,
Big5_HKSCS
EUC-JP: eucjis, x-eucjp, csEUCPkdFmtjapanese, eucjp,
Extended_UNIX_Code_Packed_Format_for_Japanese, x-euc-jp, euc_jp
EUC-KR: ksc5601, 5601, ksc5601_1987, ksc_5601, ksc5601-1987, euc_kr,
ks_c_5601-1987, euckr, csEUCKR
GB18030: gb18030-2000
GB2312: gb2312-1980, gb2312, EUC_CN, gb2312-80, euc-cn, euccn, x-EUC-CN
GBK: windows-936, CP936
...
*///:~
```
So, returning to BufferToText.java, if you rewind( ) the buffer (to go back to the
beginning of the data) and then use that platform's default character set to decode( ) the
data, the resulting CharBuffer will print to the console just fine. To discover the default
character set, use System.getProperty(“file.encoding"), which produces the string that
names the character set. Passing this to Charset.forName( ) produces the Charset object
that can be used to decode the string.
Another alternative is to encode( ) using a character set that will result in something
printable when the file is read, as you see in the third part of BufferToText.java. Here,
UTF-16BE is used to write the text into the file, and when it is read, all you must do is convert
it to a CharBuffer, and it produces the expected text.
Finally, you see what happens if you write to the ByteBuffer through a CharBuffer (you'll
learn more about this later). Note that 24 bytes are allocated for the ByteBuffer. Since each
char requires two bytes, this is enough for 12 chars, but "Some text" only has 9. The
remaining zero bytes still appear in the representation of the CharBuffer produced by its
toString( ), as you can see in the output.
I/O 683 


Exercise 23: (6) Create and test a utility method to print the contents of a CharBuffer
up to the point where the characters are no longer printable.
Fetching primitives
Although a ByteBuffer only holds bytes, it contains methods to produce each of the
different types of primitive values from the bytes it contains. This example shows the
insertion and extraction of various values using these methods:

```java
//: io/GetData.java
// Getting different representations from a ByteBuffer
import java.nio.*;
import static net.mindview.util.Print.*;

public class GetData {
private static final int BSIZE = 1024;
public static void main(String[] args) {
ByteBuffer bb = ByteBuffer.allocate(BSIZE);
// Allocation automatically zeroes the ByteBuffer:
int i = 0;
while(i++ < bb.limit())
if(bb.get() != 0)
print("nonzero");
print("i = " + i);
bb.rewind();
// Store and read a char array:
bb.asCharBuffer().put("Howdy!");
char c;
while((c = bb.getChar()) != 0)
printnb(c + " ");
print();
bb.rewind();
// Store and read a short:
bb.asShortBuffer().put((short)471142);
print(bb.getShort());
bb.rewind();
// Store and read an int:
bb.asIntBuffer().put(99471142);
print(bb.getInt());
bb.rewind();
// Store and read a long:
bb.asLongBuffer().put(99471142);
print(bb.getLong());
bb.rewind();
// Store and read a float:
bb.asFloatBuffer().put(99471142);
print(bb.getFloat());
bb.rewind();
// Store and read a double:
bb.asDoubleBuffer().put(99471142);
print(bb.getDouble());
bb.rewind();
}
} /* Output:
i = 1025
H o w d y !
12390
99471142
99471142
9.9471144E7
9.9471142E7

*///:~
```
After a ByteBuffer is allocated, its values are checked to see whether buffer allocation
automatically zeroes the contents—and it does. All 1.024 values are checked (up to the
limit( ) of the buffer), and all are zero.
The easiest way to insert primitive values into a ByteBuffer is to get the appropriate "view"
on that buffer using asCharBuffer( ), asShortBuffer( ), etc., and then to use that view's
put( ) method. You can see this is the process used for each of the primitive data types. The
only one of these that is a little odd is the put( ) for the ShortBuffer, which requires a cast
(note that the cast truncates and changes the resulting value). All the other view buffers do
not require casting in their put( ) methods.
View buffers
A "view buffer" allows you to look at an underlying ByteBuffer through the window of a
particular primitive type. The ByteBuffer is still the actual storage that's "backing" the view,
so any changes you make to the view are reflected in modifications to the data in the
ByteBuffer. As seen in the previous example, this allows you to conveniently insert
primitive types into a ByteBuffer. A view also allows you to read primitive values from a
ByteBuffer, either one at a time (as ByteBuffer allows) or in batches (into arrays). Here's
an example that manipulates ints in a ByteBuffer via an IntBuffer:

```java
//: io/IntBufferDemo.java
// Manipulating ints in a ByteBuffer with an IntBuffer
import java.nio.*;

public class IntBufferDemo {
private static final int BSIZE = 1024;
public static void main(String[] args) {
ByteBuffer bb = ByteBuffer.allocate(BSIZE);
IntBuffer ib = bb.asIntBuffer();
// Store an array of int:
ib.put(new int[]{ 11, 42, 47, 99, 143, 811, 1016 });
// Absolute location read and write:
System.out.println(ib.get(3));
ib.put(3, 1811);
// Setting a new limit before rewinding the buffer.
ib.flip();
while(ib.hasRemaining()) {
int i = ib.get();
System.out.println(i);
}
}
} /* Output:
99
11
42
47
1811
143
811
1016
*///:~
```
The overloaded put( ) method is first used to store an array of int. The following get( ) and
put( ) method calls directly access an int location in the underlying ByteBuffer. Note that
these absolute location accesses are available for primitive types by talking directly to a
ByteBuffer, as well.
I/O 685 

Once the underlying ByteBuffer is filled with ints or some other primitive type via a view
buffer, then that ByteBuffer can be written directly to a channel. You can just as easily read
from a channel and use a view buffer to convert everything to a particular type of primitive.
Here's an example that interprets the same sequence of bytes as short, int, float, long, and
double by producing different view buffers on the same ByteBuffer:

```java
//: io/ViewBuffers.java
import java.nio.*;
import static net.mindview.util.Print.*;

public class ViewBuffers {
public static void main(String[] args) {
ByteBuffer bb = ByteBuffer.wrap(
new byte[]{ 0, 0, 0, 0, 0, 0, 0, 'a' });
bb.rewind();
printnb("Byte Buffer ");
while(bb.hasRemaining())
printnb(bb.position()+ " -> " + bb.get() + ", ");
print();
CharBuffer cb =
((ByteBuffer)bb.rewind()).asCharBuffer();
printnb("Char Buffer ");
while(cb.hasRemaining())
printnb(cb.position() + " -> " + cb.get() + ", ");
print();
FloatBuffer fb =
((ByteBuffer)bb.rewind()).asFloatBuffer();
printnb("Float Buffer ");
while(fb.hasRemaining())
printnb(fb.position()+ " -> " + fb.get() + ", ");
print();
IntBuffer ib =
((ByteBuffer)bb.rewind()).asIntBuffer();
printnb("Int Buffer ");
while(ib.hasRemaining())
printnb(ib.position()+ " -> " + ib.get() + ", ");
print();
LongBuffer lb =
((ByteBuffer)bb.rewind()).asLongBuffer();
printnb("Long Buffer ");
while(lb.hasRemaining())
printnb(lb.position()+ " -> " + lb.get() + ", ");
print();
ShortBuffer sb =
((ByteBuffer)bb.rewind()).asShortBuffer();
printnb("Short Buffer ");
while(sb.hasRemaining())
printnb(sb.position()+ " -> " + sb.get() + ", ");
print();
DoubleBuffer db =
((ByteBuffer)bb.rewind()).asDoubleBuffer();
printnb("Double Buffer ");
while(db.hasRemaining())
printnb(db.position()+ " -> " + db.get() + ", ");
}
} /* Output:
Byte Buffer 0 -> 0, 1 -> 0, 2 -> 0, 3 -> 0, 4 -> 0, 5 -> 0, 6 -> 0, 7 ->
97,
Char Buffer 0 -> , 1 -> , 2 -> , 3 -> a,
Float Buffer 0 -> 0.0, 1 -> 1.36E-43,
Int Buffer 0 -> 0, 1 -> 97,
Long Buffer 0 -> 97,

Short Buffer 0 -> 0, 1 -> 0, 2 -> 0, 3 -> 97,
Double Buffer 0 -> 4.8E-322,
*///:~
```
The ByteBuffer is produced by "wrapping" an eight-byte array, which is then displayed via
view buffers of all the different primitive types. You can see in the following diagram the way
the data appears differently when read from the different types of buffers:

This corresponds to the output from the program.

Exercise 24: (1) Modify IntBufferDemo.java to use doubles.
Endians
Different machines may use different byte-ordering approaches to store data. "Big endian"
places the most significant byte in the lowest memory address, and "little endian" places the
most significant byte in the highest memory address. When storing a quantity that is greater
than one byte, like int, float, etc., you may need to consider the byte ordering. A
ByteBuffer stores data in big endian form, and data sent over a network always uses big
endian order. You can change the endian-ness of a ByteBuffer using order( ) with an
argument of ByteOrder.BIG_ENDIAN or ByteOrder.LITTLE_ENDIAN.
Consider a ByteBuffer containing the following two bytes:

If you read the data as a short (ByteBuffer.asShortBuffer( )), you will get the number 97
(00000000 01100001), but if you change to little endian, you will get the number 24832
(01100001 00000000).
Here's an example that shows how byte ordering is changed in characters depending on the
endian setting:
I/O 687 


```java
//: io/Endians.java
// Endian differences and data storage.
import java.nio.*;
import java.util.*;
import static net.mindview.util.Print.*;

public class Endians {
public static void main(String[] args) {
ByteBuffer bb = ByteBuffer.wrap(new byte[12]);
bb.asCharBuffer().put("abcdef");
print(Arrays.toString(bb.array()));
bb.rewind();
bb.order(ByteOrder.BIG_ENDIAN);
bb.asCharBuffer().put("abcdef");
print(Arrays.toString(bb.array()));
bb.rewind();
bb.order(ByteOrder.LITTLE_ENDIAN);
bb.asCharBuffer().put("abcdef");
print(Arrays.toString(bb.array()));
}
} /* Output:
[0, 97, 0, 98, 0, 99, 0, 100, 0, 101, 0, 102]
[0, 97, 0, 98, 0, 99, 0, 100, 0, 101, 0, 102]
[97, 0, 98, 0, 99, 0, 100, 0, 101, 0, 102, 0]
*///:~
```
The ByteBuffer is given enough space to hold all the bytes in charArray as an external
buffer so that the array( ) method can be called to display the underlying bytes. The
array( ) method is "optional," and you can only call it on a buffer that is backed by an array;
otherwise, you'll get an UnsupportedOperationException.
charArray is inserted into the ByteBuffer via a CharBuffer view. When the underlying
bytes are displayed, you can see that the default ordering is the same as the subsequent big
endian order, whereas the little endian order swaps the bytes.
Data manipulation with buffers
The following diagram illustrates the relationships between the nio classes, so that you can
see how to move and convert data. For example, if you wish to write a byte array to a file,
then you wrap the byte array using the ByteBuffer.wrap( ) method, open a channel on the
FileOutputStream using the getChannel( ) method, and then write data into
FileChannel from this ByteBuffer.


Note that ByteBuffer is the only way to move data into and out of channels, and that you
can only create a standalone primitive-typed buffer, or get one from a ByteBuffer using an
"as" method. That is, you cannot convert a primitive-typed buffer to a ByteBuffer. However,
since you are able to move primitive data into and out of a ByteBuffer via a view buffer, this
is not really a restriction.
Buffer details
I/O 689 

A Buffer consists of data and four indexes to access and manipulate this data efficiently:
mark, position, limit and capacity. There are methods to set and reset these indexes and to
query their value.
capacity( ) Returns the buffer's capacity.
clear( ) Clears the buffer, sets the position to zero, and limit
to capacity. You call this method to overwrite an
existing buffer.
flip( ) Sets limit to position and position to zero. This
method is used to prepare the buffer for a read after
data has been written into it.
limit( ) Returns the value of limit.
limit(int lim) Sets the value of limit.
mark( ) Sets mark at position.
position( ) Returns the value of position.
position(int pos) Sets the value of position.
remaining( ) Returns (limit - position).
hasRemaining( ) Returns true if there are any elements between
position and limit.
Methods that insert and extract data from the buffer update these indexes to reflect the
changes.
This example uses a very simple algorithm (swapping adjacent characters) to scramble and
unscramble characters in a CharBuffer:

```java
//: io/UsingBuffers.java
import java.nio.*;
import static net.mindview.util.Print.*;

public class UsingBuffers {
private static void symmetricScramble(CharBuffer buffer){
while(buffer.hasRemaining()) {
buffer.mark();
char c1 = buffer.get();
char c2 = buffer.get();
buffer.reset();
buffer.put(c2).put(c1);
}
}
public static void main(String[] args) {
char[] data = "UsingBuffers".toCharArray();
ByteBuffer bb = ByteBuffer.allocate(data.length * 2);
CharBuffer cb = bb.asCharBuffer();
cb.put(data);
print(cb.rewind());
symmetricScramble(cb);
print(cb.rewind());
symmetricScramble(cb);
print(cb.rewind());
}
} /* Output:
UsingBuffers
sUniBgfuefsr

UsingBuffers
*///:~
```
Although you could produce a CharBuffer directly by calling wrap( ) with a char array, an
underlying ByteBuffer is allocated instead, and a CharBuffer is produced as a view on the
ByteBuffer. This emphasizes that the goal is always to manipulate a ByteBuffer, since that
is what interacts with a channel.
Here's what the buffer looks like at the entrance of the symmetricScramble( ) method:

The position points to the first element in the buffer, and the capacity and limit point to the
last element.
In symmetricScramble( ), the while loop iterates until position is equivalent to limit. The
position of the buffer changes when a relative get( ) or put( ) function is called on it. You
can also call absolute get( ) and put( ) methods that include an index argument, which is
the location where the get( ) or put( ) takes place. These methods do not modify the value of
the buffer's position.
When the control enters the while loop, the value of mark is set using a mark( ) call. The
state of the buffer is then:

The two relative get( ) calls save the value of the first two characters in variables c1 and c2.
After these two calls, the buffer looks like this:

To perform the swap, we need to write c2 at position = 0 and c1 at position = 1. We can
either use the absolute put method to achieve this, or set the value of position to mark, which
is what reset( ) does:
I/O 691 


The two put( ) methods write c2 and then c1:

During the next iteration of the loop, mark is set to the current value of position:

The process continues until the entire buffer is traversed. At the end of the while loop,
position is at the end of the buffer. If you print the buffer, only the characters between the
position and limit are printed. Thus, if you want to show the entire contents of the buffer, you
must set position to the start of the buffer using rewind( ). Here is the state of buffer after
the rewind( ) call (the value of mark becomes undefined):

When the function symmetricScramble( ) is called again, the CharBuffer undergoes the
same process and is restored to its original state.
Memory-mapped files
Memory-mapped files allow you to create and modify files that are too big to bring into
memory. With a memory-mapped file, you can pretend that the entire file is in memory and
that you can access it by simply treating it as a very large array. This approach greatly
simplifies the code you write in order to modify the file. Here's a small example:

```java
//: io/LargeMappedFiles.java
// Creating a very large file using mapping.
// {RunByHand}
import java.nio.*;
import java.nio.channels.*;

import java.io.*;
import static net.mindview.util.Print.*;

public class LargeMappedFiles {
static int length = 0x8FFFFFF; // 128 MB
public static void main(String[] args) throws Exception {
MappedByteBuffer out =
new RandomAccessFile("test.dat", "rw").getChannel()
.map(FileChannel.MapMode.READ_WRITE, 0, length);
for(int i = 0; i < length; i++)
out.put((byte)'x');
print("Finished writing");
for(int i = length/2; i < length/2 + 6; i++)
printnb((char)out.get(i));
}
} ///:~
```
To do both writing and reading, we start with a RandomAccessFile, get a channel for that
file, and then call map( ) to produce a MappedByteBuffer, which is a particular kind of
direct buffer. Note that you must specify the starting point and the length of the region that
you want to map in the file; this means that you have the option to map smaller regions of a
large file.
MappedByteBuffer is inherited from ByteBuffer, so it has all of ByteBuffer's methods.
Only the very simple uses of put( ) and get( ) are shown here, but you can also use methods
like asCharBuffer( ), etc.
The file created with the preceding program is 128 MB long, which is probably larger than
your OS will allow in memory at one time. The file appears to be accessible all at once
because only portions of it are brought into memory, and other parts are swapped out. This
way a very large file (up to 2 GB) can easily be modified. Note that the file-mapping facilities
of the underlying operating system are used to maximize performance.
Performance
Although the performance of "old" stream I/O has been improved by implementing it with
nio, mapped file access tends to be dramatically faster. This program does a simple
performance comparison:

```java
//: io/MappedIO.java
import java.nio.*;
import java.nio.channels.*;
import java.io.*;

public class MappedIO {
private static int numOfInts = 4000000;
private static int numOfUbuffInts = 200000;
private abstract static class Tester {
private String name;
public Tester(String name) { this.name = name; }
public void runTest() {
System.out.print(name + ": ");
try {
long start = System.nanoTime();
test();
double duration = System.nanoTime() - start;
System.out.format("%.2f\n", duration/1.0e9);
} catch(IOException e) {
throw new RuntimeException(e);
}
I/O 693 

}
public abstract void test() throws IOException;
}
private static Tester[] tests = {
new Tester("Stream Write") {
public void test() throws IOException {
DataOutputStream dos = new DataOutputStream(
new BufferedOutputStream(
new FileOutputStream(new File("temp.tmp"))));
for(int i = 0; i < numOfInts; i++)
dos.writeInt(i);
dos.close();
}
},
new Tester("Mapped Write") {
public void test() throws IOException {
FileChannel fc =
new RandomAccessFile("temp.tmp", "rw")
.getChannel();
IntBuffer ib = fc.map(
FileChannel.MapMode.READ_WRITE, 0, fc.size())
.asIntBuffer();
for(int i = 0; i < numOfInts; i++)
ib.put(i);
fc.close();
}
},
new Tester("Stream Read") {
public void test() throws IOException {
DataInputStream dis = new DataInputStream(
new BufferedInputStream(
new FileInputStream("temp.tmp")));
for(int i = 0; i < numOfInts; i++)
dis.readInt();
dis.close();
}
},
new Tester("Mapped Read") {
public void test() throws IOException {
FileChannel fc = new FileInputStream(
new File("temp.tmp")).getChannel();
IntBuffer ib = fc.map(
FileChannel.MapMode.READ_ONLY, 0, fc.size())
.asIntBuffer();
while(ib.hasRemaining())
ib.get();
fc.close();
}
},
new Tester("Stream Read/Write") {
public void test() throws IOException {
RandomAccessFile raf = new RandomAccessFile(
new File("temp.tmp"), "rw");
raf.writeInt(1);
for(int i = 0; i < numOfUbuffInts; i++) {
raf.seek(raf.length() - 4);
raf.writeInt(raf.readInt());
}
raf.close();
}
},
new Tester("Mapped Read/Write") {
public void test() throws IOException {

FileChannel fc = new RandomAccessFile(
new File("temp.tmp"), "rw").getChannel();
IntBuffer ib = fc.map(
FileChannel.MapMode.READ_WRITE, 0, fc.size())
.asIntBuffer();
ib.put(0);
for(int i = 1; i < numOfUbuffInts; i++)
ib.put(ib.get(i - 1));
fc.close();
}
}
};
public static void main(String[] args) {
for(Tester test : tests)
test.runTest();
}
} /* Output: (90% match)
Stream Write: 0.56
Mapped Write: 0.12
Stream Read: 0.80
Mapped Read: 0.07
Stream Read/Write: 5.32
Mapped Read/Write: 0.02
*///:~
```
As seen in earlier examples in this book, runTest( ) is used by the Template Method to
create a testing framework for various implementations of test( ) defined in anonymous
inner subclasses. Each of these subclasses performs one kind of test, so the test( ) methods
also give you a prototype for performing the various I/O activities.
Although a mapped write would seem to use a FileOutputStream, all output in file
mapping must use a RandomAccessFile, just as read/write does in the preceding code.
Note that the test( ) methods include the time for initialization of the various I/O objects, so
even though the setup for mapped files can be expensive, the overall gain compared to
stream I/O is significant.

Exercise 25: (6) Experiment with changing the ByteBuffer.allocate( ) statements in
the examples in this chapter to ByteBuffer.allocateDirect( ). Demonstrate performance
differences, but also notice whether the startup time of the programs noticeably changes.

Exercise 26: (3) Modify strings/JGrep.java to use Java nio memorymapped files.
File locking
File locking allows you to synchronize access to a file as a shared resource. However, two
threads that contend for the same file may be in different JVMs, or one may be a Java thread
and the other some native thread in the operating system. The file locks are visible to other
operating system processes because Java file locking maps directly to the native operating
system locking facility.
Here is a simple example of file locking.

```java
//: io/FileLocking.java
import java.nio.channels.*;
import java.util.concurrent.*;
import java.io.*;

public class FileLocking {
I/O 695 

public static void main(String[] args) throws Exception {
FileOutputStream fos= new FileOutputStream("file.txt");
FileLock fl = fos.getChannel().tryLock();
if(fl != null) {
System.out.println("Locked File");
TimeUnit.MILLISECONDS.sleep(100);
fl.release();
System.out.println("Released Lock");
}
fos.close();
}
} /* Output:
Locked File
Released Lock
*///:~
```
You get a FileLock on the entire file by calling either tryLock( ) or lock( ) on a
FileChannel. (SocketChannel, DatagramChannel, and ServerSocketChannel do
not need locking since they are inherently singleprocess entities; you don't generally share a
network socket between two processes.) tryLock( ) is non-blocking. It tries to grab the lock,
but if it cannot (when some other process already holds the same lock and it is not shared), it
simply returns from the method call. lock( ) blocks until the lock is acquired, or the thread
that invoked lock( ) is interrupted, or the channel on which the lock( ) method is called is
closed. A lock is released using FileLock.release( ).
It is also possible to lock a part of the file by using
tryLock(long position, long size, boolean shared)
or
lock(long position, long size, boolean shared)
which locks the region (size - position). The third argument specifies whether this lock is
shared.
Although the zero-argument locking methods adapt to changes in the size of a file, locks with
a fixed size do not change if the file size changes. If a lock is acquired for a region from
position to position+size and the file increases beyond position+size, then the section
beyond position+size is not locked. The zero-argument locking methods lock the entire file,
even if it grows.
Support for exclusive or shared locks must be provided by the underlying operating system.
If the operating system does not support shared locks and a request is made for one, an
exclusive lock is used instead. The type of lock (shared or exclusive) can be queried using
FileLock.isShared( ).
Locking portions of a mapped file
As mentioned earlier, file mapping is typically used for very large files. You may need to lock
portions of such a large file so that other processes may modify unlocked parts of the file.
This is something that happens, for example, with a database, so that it can be available to
many users at once.
Here's an example that has two threads, each of which locks a distinct portion of a file:

```java
//: io/LockingMappedFiles.java
// Locking portions of a mapped file.

I/O 697 
// {RunByHand}
import java.nio.*;
import java.nio.channels.*;
import java.io.*;

public class LockingMappedFiles {
static final int LENGTH = 0x8FFFFFF; // 128 MB
static FileChannel fc;
public static void main(String[] args) throws Exception {
fc =
new RandomAccessFile("test.dat", "rw").getChannel();
MappedByteBuffer out =
fc.map(FileChannel.MapMode.READ_WRITE, 0, LENGTH);
for(int i = 0; i < LENGTH; i++)
out.put((byte)'x');
new LockAndModify(out, 0, 0 + LENGTH/3);
new LockAndModify(out, LENGTH/2, LENGTH/2 + LENGTH/4);
}
private static class LockAndModify extends Thread {
private ByteBuffer buff;
private int start, end;
LockAndModify(ByteBuffer mbb, int start, int end) {
this.start = start;
this.end = end;
mbb.limit(end);
mbb.position(start);
buff = mbb.slice();
start();
}
public void run() {
try {
// Exclusive lock with no overlap:
FileLock fl = fc.lock(start, end, false);
System.out.println("Locked: "+ start +" to "+ end);
// Perform modification:
while(buff.position() < buff.limit() - 1)
buff.put((byte)(buff.get() + 1));
fl.release();
System.out.println("Released: "+start+" to "+ end);
} catch(IOException e) {
throw new RuntimeException(e);
}
}
}
} ///:~
```
The LockAndModify thread class sets up the buffer region and creates a slice( ) to be
modified, and in run( ), the lock is acquired on the file channel (you can't acquire a lock on
the buffer—only the channel). The call to lock( ) is very similar to acquiring a threading lock
on an object—you now have a "critical section" with exclusive access to that portion of the
file. 5
The locks are automatically released when the JVM exits, or the channel on which it was
acquired is closed, but you can also explicitly call release( ) on the FileLock object, as
shown here.

5 More details about threads will be found in the Concurrency chapter.

Compression
The Java I/O library contains classes to support reading and writing streams in a compressed
format. You wrap these around other I/O classes to provide compression functionality.
These classes are not derived from the Reader and Writer classes, but instead are part of
the InputStream and OutputStream hierarchies. This is because the compression library
works with bytes, not characters. However, you might sometimes be forced to mix the two
types of streams. (Remember that you can use InputStreamReader and OutputStream
Writer to provide easy conversion between one type and another.)
Compression class Function
CheckedInputStream GetCheckSum( ) produces checksum
for any InputStream (not just
decompression).
CheckedOutputStream GetCheckSum( ) produces checksum
for any OutputStream (not just
compression).
DeflaterOutputStream Base class for compression classes.
ZipOutputStream A DeflaterOutputStream that
compresses data into the Zip file format.
GZIPOutputStream A DeflaterOutputStream that
compresses data into the GZIP file format.
InflaterInputStream Base class for decompression classes.
ZipInputStream An InflaterInputStream that
decompresses data that has been stored in
the Zip file format.
GZIPInputStream An InflaterInputStream that
decompresses data that has been stored in
the GZIP file format.
Although there are many compression algorithms, Zip and GZIP are possibly the most
commonly used. Thus you can easily manipulate your compressed data with the many tools
available for reading and writing these formats.
Simple compression with GZIP
The GZIP interface is simple and thus is probably more appropriate when you have a single
stream of data that you want to compress (rather than a container of dissimilar pieces of
data). Here's an example that compresses a single file:

```java
//: io/GZIPcompress.java
// {Args: GZIPcompress.java}
import java.util.zip.*;
import java.io.*;

public class GZIPcompress {
public static void main(String[] args)
throws IOException {
if(args.length == 0) {

System.out.println(
"Usage: \nGZIPcompress file\n" +
"\tUses GZIP compression to compress " +
"the file to test.gz");
System.exit(1);
}
BufferedReader in = new BufferedReader(
new FileReader(args[0]));
BufferedOutputStream out = new BufferedOutputStream(
new GZIPOutputStream(
new FileOutputStream("test.gz")));
System.out.println("Writing file");
int c;
while((c = in.read()) != -1)
out.write(c);
in.close();
out.close();
System.out.println("Reading file");
BufferedReader in2 = new BufferedReader(
new InputStreamReader(new GZIPInputStream(
new FileInputStream("test.gz"))));
String s;
while((s = in2.readLine()) != null)
System.out.println(s);
}
} /* (Execute to see output) *///:~
```
The use of the compression classes is straightforward; you simply wrap your output stream in
a GZIPOutputStream or ZipOutputStream, and your input stream in a
GZIPInputStream or ZipInputStream. All else is ordinary I/O reading and writing. This
is an example of mixing the char-oriented streams with the byte-oriented streams; in uses
the Reader classes, whereas GZIPOutputStream's constructor can accept only an
OutputStream object, not a Writer object. When the file is opened, the
GZIPInputStream is converted to a Reader.
Multifile storage with Zip
The library that supports the Zip format is more extensive. With it you can easily store
multiple files, and there's even a separate class to make the process of reading a Zip file easy.
The library uses the standard Zip format so that it works seamlessly with all the Zip tools
currently downloadable on the Internet. The following example has the same form as the
previous example, but it handles as many command-line arguments as you want. In addition,
it shows the use of the Checksum classes to calculate and verify the checksum for the file.
There are two Checksum types: Adler32 (which is faster) and CRC32 (which is slower but
slightly more accurate).

```java
//: io/ZipCompress.java
// Uses Zip compression to compress any
// number of files given on the command line.
// {Args: ZipCompress.java}
import java.util.zip.*;
import java.io.*;
import java.util.*;
import static net.mindview.util.Print.*;

public class ZipCompress {
public static void main(String[] args)
throws IOException {
FileOutputStream f = new FileOutputStream("test.zip");
CheckedOutputStream csum =
I/O 699 

new CheckedOutputStream(f, new Adler32());
ZipOutputStream zos = new ZipOutputStream(csum);
BufferedOutputStream out =
new BufferedOutputStream(zos);
zos.setComment("A test of Java Zipping");
// No corresponding getComment(), though.
for(String arg : args) {
print("Writing file " + arg);
BufferedReader in =
new BufferedReader(new FileReader(arg));
zos.putNextEntry(new ZipEntry(arg));
int c;
while((c = in.read()) != -1)
out.write(c);
in.close();
out.flush();
}
out.close();
// Checksum valid only after the file has been closed!
print("Checksum: " + csum.getChecksum().getValue());
// Now extract the files:
print("Reading file");
FileInputStream fi = new FileInputStream("test.zip");
CheckedInputStream csumi =
new CheckedInputStream(fi, new Adler32());
ZipInputStream in2 = new ZipInputStream(csumi);
BufferedInputStream bis = new BufferedInputStream(in2);
ZipEntry ze;
while((ze = in2.getNextEntry()) != null) {
print("Reading file " + ze);
int x;
while((x = bis.read()) != -1)
System.out.write(x);
}
if(args.length == 1)
print("Checksum: " + csumi.getChecksum().getValue());
bis.close();
// Alternative way to open and read Zip files:
ZipFile zf = new ZipFile("test.zip");
Enumeration e = zf.entries();
while(e.hasMoreElements()) {
ZipEntry ze2 = (ZipEntry)e.nextElement();
print("File: " + ze2);
// ... and extract the data as before
}
/* if(args.length == 1) */
}
} /* (Execute to see output) *///:~
```
For each file to add to the archive, you must call putNextEntry( ) and pass it a ZipEntry
object. The ZipEntry object contains an extensive interface that allows you to get and set all
the data available on that particular entry in your Zip file: name, compressed and
uncompressed sizes, date, CRC checksum, extra field data, comment, compression method,
and whether it's a directory entry. However, even though the Zip format has a way to set a
password, this is not supported in Java's Zip library. And although CheckedInputStream
and CheckedOutputStream support both Adler32 and CRC32 checksums, the
ZipEntry class supports only an interface for CRC. This is a restriction of the underlying Zip
format, but it might limit you from using the faster Adler32.
To extract files, ZipInputStream has a getNextEntry( ) method that returns the next
ZipEntry if there is one. As a more succinct alternative, you can read the file using a

ZipFile object, which has a method entries( ) to return an Enumeration to the
ZipEntries.
In order to read the checksum, you must somehow have access to the associated Checksum
object. Here, a reference to the CheckedOutputStream and CheckedInputStream
objects is retained, but you could also just hold on to a reference to the Checksum object.
A baffling method in Zip streams is setComment( ). As shown in ZipCompress.java, you
can set a comment when you're writing a file, but there's no way to recover the comment in
the ZipInputStream. Comments appear to be supported fully on an entry-by-entry basis
only via ZipEntry. Of course, you are not limited to files when using the GZIP or Zip
libraries— you can compress anything, including data to be sent through a network
connection.
Java ARchives (JARs)
The Zip format is also used in the JAR (Java ARchive) file format, which is a way to collect a
group of files into a single compressed file, just like Zip. However, like everything else in
Java, JAR files are cross-platform, so you don't need to worry about platform issues. You can
also include audio and image files as well as class files.
JAR files are particularly helpful when you deal with the Internet. Before JAR files, your Web
browser would have to make repeated requests of a Web server in order to download all the
files that made up an applet. In addition, each of these files was uncompressed. By combining
all of the files for a particular applet into a single JAR file, only one server request is
necessary and the transfer is faster because of compression. And each entry in a JAR file can
be digitally signed for security.
A JAR file consists of a single file containing a collection of zipped files along with a
"manifest" that describes them. (You can create your own manifest file; otherwise, the jar
program will do it for you.) You can find out more about JAR manifests in the JDK
documentation.
The jar utility that comes with Sun's JDK automatically compresses the files of your choice.
You invoke it on the command line:
jar [options] destination [manifest] inputfile(s)
The options are simply a collection of letters (no hyphen or any other indicator is necessary).
Unix/Linux users will note the similarity to the tar options. These are:
c Creates a new or empty archive.
t Lists the table of contents.
x Extracts all files.
x file Extracts the named file.
f Says, "I'm going to give you the name of the file." If you
don't use this, jar assumes that its input will come from
standard input, or, if it is creating a file, its output will go to
standard output.
m Says that the first argument will be the name of the user-
created manifest file.
v Generates verbose output describing what jar is doing.
I/O 701 

o Only stores the files; doesn't compress the files (use to
create a JAR file that you can put in your classpath).
M Doesn't automatically create a manifest file.

If a subdirectory is included in the files to be put into the JAR file, that subdirectory is
automatically added, including all of its subdirectories, etc. Path information is also
preserved.
Here are some typical ways to invoke jar. The following command creates a JAR file called
myJarFile.jar that contains all of the class files in the current directory, along with an
automatically generated manifest file:
jar cf myJarFile.jar *.class
The next command is like the previous example, but it adds a user-created manifest file
called myManifestFile.mf:
jar cmf myJarFile.jar myManifestFile.mf *.class
This produces a table of contents of the files in myJarFile.jar:
jar tf myJarFile.jar
This adds the "verbose" flag to give more detailed information about the files in
myJarFile.jar:
jar tvf myJarFile.jar
Assuming audio, classes, and image are subdirectories, this combines all of the
subdirectories into the file myApp.jar. The "verbose" flag is also included to give extra
feedback while the jar program is working:
jar cvf myApp.jar audio classes image
If you create a JAR file using the o (zero) option, that file can be placed in your CLASSPATH:
CLASSPATH="libl.jar;lib2.jar;"
Then Java can search lib1.jar and lib2.jar for class files.
The jar tool isn't as general-purpose as a Zip utility. For example, you can't add or update
files to an existing JAR file; you can create JAR files only from scratch. Also, you can't move
files into a JAR file, erasing them as they are moved. However, a JAR file created on one
platform will be transparently readable by the jar tool on any other platform (a problem that
sometimes plagues Zip utilities).
As you will see in the Graphical User Interfaces chapter, JAR files are also used to package
JavaBeans.

Object serialization
When you create an object, it exists for as long as you need it, but under no circumstances
does it exist when the program terminates. While this makes sense at first, there are
situations in which it would be incredibly useful if an object could exist and hold its
information even while the program wasn't running. Then, the next time you started the
program, the object would be there and it would have the same information it had the
previous time the program was running. Of course, you can get a similar effect by writing the
information to a file or to a database, but in the spirit of making everything an object, it
would be quite convenient to declare an object to be "persistent," and have all the details
taken care of for you.
Java's object serialization allows you to take any object that implements the Serializable
interface and turn it into a sequence of bytes that can later be fully restored to regenerate the
original object. This is even true across a network, which means that the serialization
mechanism automatically compensates for differences in operating systems. That is, you can
create an object on a Windows machine, serialize it, and send it across the network to a Unix
machine, where it will be correctly reconstructed. You don't have to worry about the data
representations on the different machines, the byte ordering, or any other details.
By itself, object serialization is interesting because it allows you to implement lightweight
persistence. Persistence means that an object's lifetime is not determined by whether a
program is executing; the object lives in between invocations of the program. By taking a
serializable object and writing it to disk, then restoring that object when the program is
reinvoked, you're able to produce the effect of persistence. The reason it's called "lightweight"
is that you can't simply define an object using some kind of "persistent" keyword and let the
system take care of the details (perhaps this will happen in the future). Instead, you must
explicitly serialize and deserialize the objects in your program. If you need a more serious
persistence mechanism, consider a tool like Hibernate (http://hibernate.sourceforge.net).
For details, see Thinking in Enterprise Java, downloadable from www.MindView.net.
Object serialization was added to the language to support two major features. Java's Remote
Method Invocation (RMI) allows objects that live on other machines to behave as if they live
on your machine. When messages are sent to remote objects, object serialization is necessary
to transport the arguments and return values. RMI is discussed in Thinking in Enterprise
Java. Object serialization is also necessary for JavaBeans, described in the Graphical User
Interfaces chapter. When a Bean is used, its state information is generally configured at
design time. This state information must be stored and later recovered when the program is
started; object serialization performs this task.
Serializing an object is quite simple as long as the object implements the Serializable
interface (this is a tagging interface and has no methods). When serialization was added to
the language, many standard library classes were changed to make them serializable,
including all of the wrappers for the primitive types, all of the container classes, and many
others. Even Class objects can be serialized.
To serialize an object, you create some sort of OutputStream object and then wrap it inside
an ObjectOutputStream object. At this point you need only call writeObject( ), and your
object is serialized and sent to the OutputStream (object serialization is byte-oriented, and
thus uses the InputStream and OutputStream hierarchies). To reverse the process, you
wrap an InputStream inside an ObjectlnputStream and call readObject( ). What
comes back is, as usual, a reference to an upcast Object, so you must downcast to set things
straight.
A particularly clever aspect of object serialization is that it not only saves an image of your
object, but it also follows all the references contained in your object and saves those objects,
and follows all the references in each of those objects, etc. This is sometimes referred to as
I/O 703 

the "web of objects" that a single object can be connected to, and it includes arrays of
references to objects as well as member objects. If you had to maintain your own object
serialization scheme, maintaining the code to follow all these links could be mindboggling.
However, Java object serialization seems to pull it off flawlessly, no doubt using an optimized
algorithm that traverses the web of objects. The following example tests the serialization
mechanism by making a "worm" of linked objects, each of which has a link to the next segment in
the worm as well as an array of references to objects of a different class, Data:

```java
//: io/Worm.java
// Demonstrates object serialization.
import java.io.*;
import java.util.*;
import static net.mindview.util.Print.*;

class Data implements Serializable {
private int n;
public Data(int n) { this.n = n; }
public String toString() { return Integer.toString(n); }
}

public class Worm implements Serializable {
private static Random rand = new Random(47);
private Data[] d = {
new Data(rand.nextInt(10)),
new Data(rand.nextInt(10)),
new Data(rand.nextInt(10))
};
private Worm next;
private char c;
// Value of i == number of segments
public Worm(int i, char x) {
print("Worm constructor: " + i);
c = x;
if(--i > 0)
next = new Worm(i, (char)(x + 1));
}
public Worm() {
print("Default constructor");
}
public String toString() {
StringBuilder result = new StringBuilder(":");
result.append(c);
result.append("(");
for(Data dat : d)
result.append(dat);
result.append(")");
if(next != null)
result.append(next);
return result.toString();
}
public static void main(String[] args)
throws ClassNotFoundException, IOException {
Worm w = new Worm(6, 'a');
print("w = " + w);
ObjectOutputStream out = new ObjectOutputStream(
new FileOutputStream("worm.out"));
out.writeObject("Worm storage\n");
out.writeObject(w);
out.close(); // Also flushes output
ObjectInputStream in = new ObjectInputStream(
new FileInputStream("worm.out"));
String s = (String)in.readObject();

Worm w2 = (Worm)in.readObject();
print(s + "w2 = " + w2);
ByteArrayOutputStream bout =
new ByteArrayOutputStream();
ObjectOutputStream out2 = new ObjectOutputStream(bout);
out2.writeObject("Worm storage\n");
out2.writeObject(w);
out2.flush();
ObjectInputStream in2 = new ObjectInputStream(
new ByteArrayInputStream(bout.toByteArray()));
s = (String)in2.readObject();
Worm w3 = (Worm)in2.readObject();
print(s + "w3 = " + w3);
}
} /* Output:
Worm constructor: 6
Worm constructor: 5
Worm constructor: 4
Worm constructor: 3
Worm constructor: 2
Worm constructor: 1
w = :a(853):b(119):c(802):d(788):e(199):f(881)
Worm storage
w2 = :a(853):b(119):c(802):d(788):e(199):f(881)
Worm storage
w3 = :a(853):b(119):c(802):d(788):e(199):f(881)
*///:~
```
To make things interesting, the array of Data objects inside Worm are initialized with
random numbers. (This way, you don't suspect the compiler of keeping some kind of meta-
information.) Each Worm segment is labeled with a char that's automatically generated in
the process of recursively generating the linked list of Worms. When you create a Worm,
you tell the constructor how long you want it to be. To make the next reference, it calls the
Worm constructor with a length of one less, etc. The final next reference is left as null,
indicating the end of the Worm.
The point of all this was to make something reasonably complex that couldn't easily be
serialized. The act of serializing, however, is quite simple. Once the ObjectOutputStream
is created from some other stream, writeObject( ) serializes the object. Notice the call to
writeObject( ) for a String, as well. You can also write all the primitive data types using
the same methods as DataOutputStream (they share the same interface).
There are two separate code sections that look similar. The first writes and reads a file, and
the second, for variety, writes and reads a ByteArray. You can read and write an object
using serialization to any DataInputStream or DataOutputStream, including, as you
can see in Thinking in Enterprise Java, a network.
You can see from the output that the deserialized object really does contain all of the links
that were in the original object.
Note that no constructor, not even the default constructor, is called in the process of
deserializing a Serializable object. The entire object is restored by recovering data from the
InputStream.

Exercise 27: (1) Create a Serializable class containing a reference to an object of a
second Serializable class. Create an instance of your class, serialize it to disk, then restore it
and verify that the process worked correctly.

I/O 705 

Finding the class
You might wonder what's necessary for an object to be recovered from its serialized state. For
example, suppose you serialize an object and send it as a file or through a network to another
machine. Could a program on the other machine reconstruct the object using only the
contents of the file?
The best way to answer this question is (as usual) by performing an experiment. The
following file goes in the subdirectory for this chapter:

```java
//: io/Alien.java
// A serializable class.
import java.io.*;
public class Alien implements Serializable {} ///:~
```
The file that creates and serializes an Alien object goes in the same directory:

```java
//: io/FreezeAlien.java
// Create a serialized output file.
import java.io.*;

public class FreezeAlien {
public static void main(String[] args) throws Exception {
ObjectOutput out = new ObjectOutputStream(
new FileOutputStream("X.file"));
Alien quellek = new Alien();
out.writeObject(quellek);
}
} ///:~
```
Rather than catching and handling exceptions, this program takes the quickand- dirty
approach of passing the exceptions out of main( ), so they'll be reported on the console.
Once the program is compiled and run, it produces a file called X.file in the io directory. The
following code is in a subdirectory called xfiles:

```java
//: io/xfiles/ThawAlien.java
// Try to recover a serialized file without the
// class of object that's stored in that file.
// {RunByHand}
import java.io.*;

public class ThawAlien {
public static void main(String[] args) throws Exception {
ObjectInputStream in = new ObjectInputStream(
new FileInputStream(new File("..", "X.file")));
Object mystery = in.readObject();
System.out.println(mystery.getClass());
}
} /* Output:
class Alien
*///:~
```
Even opening the file and reading in the object mystery requires the Class object for Alien;
the JVM cannot find Alien.class (unless it happens to be in the classpath, which it shouldn't
be in this example). You'll get a ClassNotFoundException. (Once again, all evidence of
alien life vanishes before proof of its existence can be verified!) The JVM must be able to find
the associated .class file.

Controlling serialization
As you can see, the default serialization mechanism is trivial to use. But what if you have
special needs? Perhaps you have special security issues and you don't want to serialize
portions of your object, or perhaps it just doesn't make sense for one subobject to be
serialized if that part needs to be created anew when the object is recovered.
You can control the process of serialization by implementing the Externalizable interface
instead of the Serializable interface. The Externalizable interface extends the
Serializable interface and adds two methods, writeExternal( ) and readExternal( ),
that are automatically called for your object during serialization and deserialization so that
you can perform your special operations.
The following example shows simple implementations of the Externalizable interface
methods. Note that Blip1 and Blip2 are nearly identical except for a subtle difference (see if
you can discover it by looking at the code):

```java
//: io/Blips.java
// Simple use of Externalizable & a pitfall.
import java.io.*;
import static net.mindview.util.Print.*;

class Blip1 implements Externalizable {
public Blip1() {
print("Blip1 Constructor");
}
public void writeExternal(ObjectOutput out)
throws IOException {
print("Blip1.writeExternal");
}
public void readExternal(ObjectInput in)
throws IOException, ClassNotFoundException {
print("Blip1.readExternal");
}
}

class Blip2 implements Externalizable {
Blip2() {
print("Blip2 Constructor");
}
public void writeExternal(ObjectOutput out)
throws IOException {
print("Blip2.writeExternal");
}
public void readExternal(ObjectInput in)
throws IOException, ClassNotFoundException {
print("Blip2.readExternal");
}
}

public class Blips {
public static void main(String[] args)
throws IOException, ClassNotFoundException {
print("Constructing objects:");
Blip1 b1 = new Blip1();
Blip2 b2 = new Blip2();
ObjectOutputStream o = new ObjectOutputStream(
new FileOutputStream("Blips.out"));
print("Saving objects:");
o.writeObject(b1);
I/O 707 

o.writeObject(b2);
o.close();
// Now get them back:
ObjectInputStream in = new ObjectInputStream(
new FileInputStream("Blips.out"));
print("Recovering b1:");
b1 = (Blip1)in.readObject();
// OOPS! Throws an exception:
//! print("Recovering b2:");
//! b2 = (Blip2)in.readObject();
}
} /* Output:
Constructing objects:
Blip1 Constructor
Blip2 Constructor
Saving objects:
Blip1.writeExternal
Blip2.writeExternal
Recovering b1:
Blip1 Constructor
Blip1.readExternal
*///:~
```
The reason that the Blip2 object is not recovered is that trying to do so causes an exception.
Can you see the difference between Blip1 and Blip2? The constructor for Blip1 is public,
while the constructor for Blip2 is not, and that causes the exception upon recovery. Try
making Blip2's constructor public and removing the //! comments to see the correct
results.
When b1 is recovered, the Blip1 default constructor is called. This is different from
recovering a Serializable object, in which the object is constructed entirely from its stored
bits, with no constructor calls. With an Externalizable object, all the normal default
construction behavior occurs (including the initializations at the point of field definition),
and then readExternal( ) is called. You need to be aware of this—in particular, the fact that
all the default construction always takes place—to produce the correct behavior in your
Externalizable objects.
Here's an example that shows what you must do to fully store and retrieve an
Externalizable object:

```java
//: io/Blip3.java
// Reconstructing an externalizable object.
import java.io.*;
import static net.mindview.util.Print.*;

public class Blip3 implements Externalizable {
private int i;
private String s; // No initialization
public Blip3() {
print("Blip3 Constructor");
// s, i not initialized
}
public Blip3(String x, int a) {
print("Blip3(String x, int a)");
s = x;
i = a;
// s & i initialized only in non-default constructor.
}
public String toString() { return s + i; }
public void writeExternal(ObjectOutput out)
throws IOException {

print("Blip3.writeExternal");
// You must do this:
out.writeObject(s);
out.writeInt(i);
}
public void readExternal(ObjectInput in)
throws IOException, ClassNotFoundException {
print("Blip3.readExternal");
// You must do this:
s = (String)in.readObject();
i = in.readInt();
}
public static void main(String[] args)
throws IOException, ClassNotFoundException {
print("Constructing objects:");
Blip3 b3 = new Blip3("A String ", 47);
print(b3);
ObjectOutputStream o = new ObjectOutputStream(
new FileOutputStream("Blip3.out"));
print("Saving object:");
o.writeObject(b3);
o.close();
// Now get it back:
ObjectInputStream in = new ObjectInputStream(
new FileInputStream("Blip3.out"));
print("Recovering b3:");
b3 = (Blip3)in.readObject();
print(b3);
}
} /* Output:
Constructing objects:
Blip3(String x, int a)
A String 47
Saving object:
Blip3.writeExternal
Recovering b3:
Blip3 Constructor
Blip3.readExternal
A String 47
*///:~
```
The fields s and i are initialized only in the second constructor, but not in the default
constructor. This means that if you don't initialize s and i in readExternal( ), s will be null
and i will be zero (since the storage for the object gets wiped to zero in the first step of object
creation). If you comment out the two lines of code following the phrases "You must do this:"
and run the program, you'll see that when the object is recovered, s is null and i is zero.
If you are inheriting from an Externalizable object, you'll typically call the base-class
versions of writeExternal( ) and readExternal( ) to provide proper storage and retrieval
of the base-class components.
So to make things work correctly, you must not only write the important data from the object
during the writeExternal( ) method (there is no default behavior that writes any of the
member objects for an Externalizable object), but you must also recover that data in the
readExternal( ) method. This can be a bit confusing at first because the default
construction behavior for an Externalizable object can make it seem like some kind of
storage and retrieval takes place automatically. It does not.

Exercise 28 : (2) In Blips.java, copy the file and rename it to BlipCheck.java and
rename the class Blip2 to BlipCheck (making it public and removing the public scope
from the class Blips in the process). Remove the //! marks in the file and execute the
I/O 709 

program, including the offending lines. Next, comment out the default constructor for
BlipCheck. Run it and explain why it works. Note that after compiling, you must execute the
program with "Java Blips" because the main( ) method is still in the class Blips.

Exercise 29: (2) In Blip3.java, comment out the two lines after the phrases "You must
do this:" and run the program. Explain the result and why it differs from when the two lines
are in the program.
The transient keyword
When you're controlling serialization, there might be a particular subobject that you don't
want Java's serialization mechanism to automatically save and restore. This is commonly the
case if that subobject represents sensitive information that you don't want to serialize, such
as a password. Even if that information is private in the object, once it has been serialized,
it's possible for someone to access it by reading a file or intercepting a network transmission.
One way to prevent sensitive parts of your object from being serialized is to implement your
class as Externalizable, as shown previously. Then nothing is automatically serialized, and
you can explicitly serialize only the necessary parts inside writeExternal( ).
If you're working with a Serializable object, however, all serialization happens
automatically. To control this, you can turn off serialization on a field-by-field basis using the
transient keyword, which says, "Don't bother saving or restoring this—I'll take care of it."
For example, consider a Logon object that keeps information about a particular login
session. Suppose that, once you verify the login, you want to store the data, but without the
password. The easiest way to do this is by implementing Serializable and marking the
password field as transient. Here's what it looks like:

```java
//: io/Logon.java
// Demonstrates the "transient" keyword.
import java.util.concurrent.*;
import java.io.*;
import java.util.*;
import static net.mindview.util.Print.*;

public class Logon implements Serializable {
private Date date = new Date();
private String username;
private transient String password;
public Logon(String name, String pwd) {
username = name;
password = pwd;
}
public String toString() {
return "logon info: \n username: " + username +
"\n date: " + date + "\n password: " + password;
}
public static void main(String[] args) throws Exception {
Logon a = new Logon("Hulk", "myLittlePony");
print("logon a = " + a);
ObjectOutputStream o = new ObjectOutputStream(
new FileOutputStream("Logon.out"));
o.writeObject(a);
o.close();
TimeUnit.SECONDS.sleep(1); // Delay
// Now get them back:
ObjectInputStream in = new ObjectInputStream(
new FileInputStream("Logon.out"));

print("Recovering object at " + new Date());
a = (Logon)in.readObject();
print("logon a = " + a);
}
} /* Output: (Sample)
logon a = logon info:
username: Hulk
date: Sat Nov 19 15:03:26 MST 2005
password: myLittlePony
Recovering object at Sat Nov 19 15:03:28 MST 2005
logon a = logon info:
username: Hulk
date: Sat Nov 19 15:03:26 MST 2005
password: null
*///:~
```
You can see that the date and username fields are ordinary (not transient), and thus are
automatically serialized. However, the password is transient, so it is not stored to disk;
also, the serialization mechanism makes no attempt to recover it. When the object is
recovered, the password field is null. Note that while toString( ) assembles a String
object using the overloaded'+' operator, a null reference is automatically converted to the
string "null."
You can also see that the date field is stored to and recovered from disk and not generated
anew.
Since Externalizable objects do not store any of their fields by default, the transient
keyword is for use with Serializable objects only.
An alternative to Externalizable
If you're not keen on implementing the Externalizable interface, there's another approach.
You can implement the Serializable interface and add (notice I say "add" and not
"override" or "implement") methods called writeObject( ) and readObject( ) that will
automatically be called when the object is serialized and deserialized, respectively. That is, if
you provide these two methods, they will be used instead of the default serialization.
The methods must have these exact signatures:
private void writeObject(ObjectOutputStream stream)
throws IOException;

private void readObject(ObjectlnputStream stream)
throws IOException, ClassNotFoundException
From a design standpoint, things get really weird here. First of all, you might think that
because these methods are not part of a base class or the Serializable interface, they ought
to be defined in their own interface(s). But notice that they are defined as private, which
means they are to be called only by other members of this class. However, you don't actually
call them from other members of this class, but instead the writeObject( ) and
readObject( ) methods of the ObjectOutputStream and ObjectInputStream objects
call your object's writeObject( ) and readObject( ) methods. (Notice my tremendous
restraint in not launching into a long diatribe about using the same method names here. In a
word: confusing.) You might wonder how the ObjectOutputStream and
I/O 711 

ObjectInputStream objects have access to private methods of your class. We can only
assume that this is part of the serialization magic. 6
Anything defined in an interface is automatically public, so if writeObject( ) and
readObject( ) must be private, then they can't be part of an interface. Since you must
follow the signatures exactly, the effect is the same as if you're implementing an interface.
It would appear that when you call ObjectOutputStream.writeObject( ), the
Serializable object that you pass it to is interrogated (using reflection, no doubt) to see if it
implements its own writeObject( ). If so, the normal serialization process is skipped and
the custom writeObject( ) is called. The same situation exists for readObject( ).
There's one other twist. Inside your writeObject( ), you can choose to perform the default
writeObject( ) action by calling defaultWriteObject( ). Likewise, inside readObject( )
you can call defaultReadObject( ). Here is a simple example that demonstrates how you
can control the storage and retrieval of a Serializable object:

```java
//: io/SerialCtl.java
// Controlling serialization by adding your own
// writeObject() and readObject() methods.
import java.io.*;

public class SerialCtl implements Serializable {
private String a;
private transient String b;
public SerialCtl(String aa, String bb) {
a = "Not Transient: " + aa;
b = "Transient: " + bb;
}
public String toString() { return a + "\n" + b; }
private void writeObject(ObjectOutputStream stream)
throws IOException {
stream.defaultWriteObject();
stream.writeObject(b);
}
private void readObject(ObjectInputStream stream)
throws IOException, ClassNotFoundException {
stream.defaultReadObject();
b = (String)stream.readObject();
}
public static void main(String[] args)
throws IOException, ClassNotFoundException {
SerialCtl sc = new SerialCtl("Test1", "Test2");
System.out.println("Before:\n" + sc);
ByteArrayOutputStream buf= new ByteArrayOutputStream();
ObjectOutputStream o = new ObjectOutputStream(buf);
o.writeObject(sc);
// Now get it back:
ObjectInputStream in = new ObjectInputStream(
new ByteArrayInputStream(buf.toByteArray()));
SerialCtl sc2 = (SerialCtl)in.readObject();
System.out.println("After:\n" + sc2);
}
} /* Output:
Before:
Not Transient: Test1
Transient: Test2
After:

6 The section "Interfaces and type information" at the end of the Type Information chapter shows how it's possible to
access private methods from outside of the class.

Not Transient: Test1
Transient: Test2
*///:~
```
In this example, one String field is ordinary and the other is transient, to prove that the
non-transient field is saved by the defaultWriteObject( ) method and the transient
field is saved and restored explicitly. The fields are initialized inside the constructor rather
than at the point of definition to prove that they are not being initialized by some automatic
mechanism during deserialization.
If you use the default mechanism to write the non-transient parts of your object, you must
call defaultWriteObject( ) as the first operation in writeObject( ), and
defaultReadObject( ) as the first operation in readObject( ). These are strange method
calls. It would appear, for example, that you are calling defaultWriteObject( ) for an
ObjectOutputStream and passing it no arguments, and yet it somehow turns around and
knows the reference to your object and how to write all the non-transient parts. Spooky.
The storage and retrieval of the transient objects uses more familiar code. And yet, think
about what happens here. In main( ), a SerialCtl object is created, and then it's serialized
to an ObjectOutputStream. (Notice in this case that a buffer is used instead of a file—it's
all the same to the ObjectOutputStream.) The serialization occurs in the line:
o.writeObject(sc);
The writeObject( ) method must be examining sc to see if it has its own writeObject( )
method. (Not by checking the interface—there isn't one—or the class type, but by actually
hunting for the method using reflection.) If it does, it uses that. A similar approach holds true
for readObject( ). Perhaps this was the only practical way that they could solve the
problem, but it's certainly strange.
Versioning
It's possible that you might want to change the version of a serializable class (objects of the
original class might be stored in a database, for example). This is supported, but you'll
probably do it only in special cases, and it requires an extra depth of understanding that we
will not attempt to achieve here. The JDK documents downloadable from
http://java.sun.com cover this topic quite thoroughly.
You will also notice in the JDK documentation many comments that begin with:
Warning: Serialized objects of this class will not be compatible with future Swing
releases. The current serialization support is appropriate for short term storage or RMI
between applications ...
This is because the versioning mechanism is too simple to work reliably in all situations,
especially with JavaBeans. They're working on a correction for the design, and that's what the
warning is about.
Using persistence
It's quite appealing to use serialization technology to store some of the state of your program
so that you can easily restore the program to the current state later. But before you can do
this, some questions must be answered. What happens if you serialize two objects that both
have a reference to a third object? When you restore those two objects from their serialized
state, do you get only one occurrence of the third object? What if you serialize your two
objects to separate files and deserialize them in different parts of your code?
I/O 713 

Here's an example that shows the problem:

```java
//: io/MyWorld.java
import java.io.*;
import java.util.*;
import static net.mindview.util.Print.*;

class House implements Serializable {}

class Animal implements Serializable {
private String name;
private House preferredHouse;
Animal(String nm, House h) {
name = nm;
preferredHouse = h;
}
public String toString() {
return name + "[" + super.toString() +
"], " + preferredHouse + "\n";
}
}

public class MyWorld {
public static void main(String[] args)
throws IOException, ClassNotFoundException {
House house = new House();
List<Animal> animals = new ArrayList<Animal>();
animals.add(new Animal("Bosco the dog", house));
animals.add(new Animal("Ralph the hamster", house));
animals.add(new Animal("Molly the cat", house));
print("animals: " + animals);
ByteArrayOutputStream buf1 =
new ByteArrayOutputStream();
ObjectOutputStream o1 = new ObjectOutputStream(buf1);
o1.writeObject(animals);
o1.writeObject(animals); // Write a 2nd set
// Write to a different stream:
ByteArrayOutputStream buf2 =
new ByteArrayOutputStream();
ObjectOutputStream o2 = new ObjectOutputStream(buf2);
o2.writeObject(animals);
// Now get them back:
ObjectInputStream in1 = new ObjectInputStream(
new ByteArrayInputStream(buf1.toByteArray()));
ObjectInputStream in2 = new ObjectInputStream(
new ByteArrayInputStream(buf2.toByteArray()));
List
animals1 = (List)in1.readObject(),
animals2 = (List)in1.readObject(),
animals3 = (List)in2.readObject();
print("animals1: " + animals1);
print("animals2: " + animals2);
print("animals3: " + animals3);
}
} /* Output: (Sample)
animals: [Bosco the dog[Animal@addbf1], House@42e816
, Ralph the hamster[Animal@9304b1], House@42e816
, Molly the cat[Animal@190d11], House@42e816
]
animals1: [Bosco the dog[Animal@de6f34], House@156ee8e
, Ralph the hamster[Animal@47b480], House@156ee8e
, Molly the cat[Animal@19b49e6], House@156ee8e
]

animals2: [Bosco the dog[Animal@de6f34], House@156ee8e
, Ralph the hamster[Animal@47b480], House@156ee8e
, Molly the cat[Animal@19b49e6], House@156ee8e
]
animals3: [Bosco the dog[Animal@10d448], House@e0e1c6
, Ralph the hamster[Animal@6ca1c], House@e0e1c6
, Molly the cat[Animal@1bf216a], House@e0e1c6
]
*///:~
```
One thing that's interesting here is that it's possible to use object serialization to and from a
byte array as a way of doing a "deep copy" of any object that's Serializable. (A deep copy
means that you're duplicating the entire web of objects, rather than just the basic object and
its references.) Object copying is covered in depth in the online supplements for this book.
Animal objects contain fields of type House. In main( ), a List of these Animals is
created and it is serialized twice to one stream and then again to a separate stream. When
these are deserialized and printed, you see the output shown for one run (the objects will be
in different memory locations each run).
Of course, you expect that the deserialized objects have different addresses from their
originals. But notice that in animals1 and animals2, the same addresses appear, including
the references to the House object that both share. On the other hand, when animals3 is
recovered, the system has no way of knowing that the objects in this other stream are aliases
of the objects in the first stream, so it makes a completely different web of objects.
As long as you're serializing everything to a single stream, you'll recover the same web of
objects that you wrote, with no accidental duplication of objects. Of course, you can change
the state of your objects in between the time you write the first and the last, but that's your
responsibility; the objects will be written in whatever state they are in (and with whatever
connections they have to other objects) at the time you serialize them.
The safest thing to do if you want to save the state of a system is to serialize as an "atomic"
operation. If you serialize some things, do some other work, and serialize some more, etc.,
then you will not be storing the system safely. Instead, put all the objects that comprise the
state of your system in a single container and simply write that container out in one
operation. Then you can restore it with a single method call as well.
The following example is an imaginary computer-aided design (CAD) system that
demonstrates the approach. In addition, it throws in the issue of static fields; if you look at
the JDK documentation, you'll see that Class is Serializable, so it should be easy to store
the static fields by simply serializing the Class object. That seems like a sensible approach,
anyway.

```java
//: io/StoreCADState.java
// Saving the state of a pretend CAD system.
import java.io.*;
import java.util.*;

abstract class Shape implements Serializable {
public static final int RED = 1, BLUE = 2, GREEN = 3;
private int xPos, yPos, dimension;
private static Random rand = new Random(47);
private static int counter = 0;
public abstract void setColor(int newColor);
public abstract int getColor();
public Shape(int xVal, int yVal, int dim) {
xPos = xVal;
yPos = yVal;
dimension = dim;
I/O 715 

}
public String toString() {
return getClass() +
"color[" + getColor() + "] xPos[" + xPos +
"] yPos[" + yPos + "] dim[" + dimension + "]\n";
}
public static Shape randomFactory() {
int xVal = rand.nextInt(100);
int yVal = rand.nextInt(100);
int dim = rand.nextInt(100);
switch(counter++ % 3) {
default:
case 0: return new Circle(xVal, yVal, dim);
case 1: return new Square(xVal, yVal, dim);
case 2: return new Line(xVal, yVal, dim);
}
}
}

class Circle extends Shape {
private static int color = RED;
public Circle(int xVal, int yVal, int dim) {
super(xVal, yVal, dim);
}
public void setColor(int newColor) { color = newColor; }
public int getColor() { return color; }
}

class Square extends Shape {
private static int color;
public Square(int xVal, int yVal, int dim) {
super(xVal, yVal, dim);
color = RED;
}
public void setColor(int newColor) { color = newColor; }
public int getColor() { return color; }
}

class Line extends Shape {
private static int color = RED;
public static void
serializeStaticState(ObjectOutputStream os)
throws IOException { os.writeInt(color); }
public static void
deserializeStaticState(ObjectInputStream os)
throws IOException { color = os.readInt(); }
public Line(int xVal, int yVal, int dim) {
super(xVal, yVal, dim);
}
public void setColor(int newColor) { color = newColor; }
public int getColor() { return color; }
}

public class StoreCADState {
public static void main(String[] args) throws Exception {
List<Class<? extends Shape>> shapeTypes =
new ArrayList<Class<? extends Shape>>();
// Add references to the class objects:
shapeTypes.add(Circle.class);
shapeTypes.add(Square.class);
shapeTypes.add(Line.class);
List<Shape> shapes = new ArrayList<Shape>();
// Make some shapes:

for(int i = 0; i < 10; i++)
shapes.add(Shape.randomFactory());
// Set all the static colors to GREEN:
for(int i = 0; i < 10; i++)
((Shape)shapes.get(i)).setColor(Shape.GREEN);
// Save the state vector:
ObjectOutputStream out = new ObjectOutputStream(
new FileOutputStream("CADState.out"));
out.writeObject(shapeTypes);
Line.serializeStaticState(out);
out.writeObject(shapes);
// Display the shapes:
System.out.println(shapes);
}
} /* Output:
[class Circlecolor[3] xPos[58] yPos[55] dim[93]
, class Squarecolor[3] xPos[61] yPos[61] dim[29]
, class Linecolor[3] xPos[68] yPos[0] dim[22]
, class Circlecolor[3] xPos[7] yPos[88] dim[28]
, class Squarecolor[3] xPos[51] yPos[89] dim[9]
, class Linecolor[3] xPos[78] yPos[98] dim[61]
, class Circlecolor[3] xPos[20] yPos[58] dim[16]
, class Squarecolor[3] xPos[40] yPos[11] dim[22]
, class Linecolor[3] xPos[4] yPos[83] dim[6]
, class Circlecolor[3] xPos[75] yPos[10] dim[42]
]
*///:~
```
The Shape class implements Serializable, so anything that is inherited from Shape is
automatically Serializable as well. Each Shape contains data, and each derived Shape
class contains a static field that determines the color of all of those types of Shapes.
(Placing a static field in the base class would result in only one field, since static fields are
not duplicated in derived classes.) Methods in the base class can be overridden to set the
color for the various types (static methods are not dynamically bound, so these are normal
methods). The randomFactory( ) method creates a different Shape each time you call it,
using random values for the Shape data.
Circle and Square are straightforward extensions of Shape; the only difference is that
Circle initializes color at the point of definition and Square initializes it in the constructor.
We'll leave the discussion of Line for later.
In main( ), one ArrayList is used to hold the Class objects and the other to hold the
shapes.
Recovering the objects is fairly straightforward:

```java
//: io/RecoverCADState.java
// Restoring the state of the pretend CAD system.
// {RunFirst: StoreCADState}
import java.io.*;
import java.util.*;

public class RecoverCADState {
@SuppressWarnings("unchecked")
public static void main(String[] args) throws Exception {
ObjectInputStream in = new ObjectInputStream(
new FileInputStream("CADState.out"));
// Read in the same order they were written:
List<Class<? extends Shape>> shapeTypes =
(List<Class<? extends Shape>>)in.readObject();
Line.deserializeStaticState(in);
I/O 717 

List<Shape> shapes = (List<Shape>)in.readObject();
System.out.println(shapes);
}
} /* Output:
[class Circlecolor[1] xPos[58] yPos[55] dim[93]
, class Squarecolor[0] xPos[61] yPos[61] dim[29]
, class Linecolor[3] xPos[68] yPos[0] dim[22]
, class Circlecolor[1] xPos[7] yPos[88] dim[28]
, class Squarecolor[0] xPos[51] yPos[89] dim[9]
, class Linecolor[3] xPos[78] yPos[98] dim[61]
, class Circlecolor[1] xPos[20] yPos[58] dim[16]
, class Squarecolor[0] xPos[40] yPos[11] dim[22]
, class Linecolor[3] xPos[4] yPos[83] dim[6]
, class Circlecolor[1] xPos[75] yPos[10] dim[42]
]
*///:~
```
You can see that the values of xPos, yPos, and dim were all stored and recovered
successfully, but there's something wrong with the retrieval of the static information. It's all
"3" going in, but it doesn't come out that way. Circles have a value of 1 (RED, which is the
definition), and Squares have a value of 0 (remember, they are initialized in the
constructor). It's as if the statics didn't get serialized at all! That's right—even though class
Class is Serializable, it doesn't do what you expect. So if you want to serialize statics, you
must do it yourself.
This is what the serializeStaticState( ) and deserializeStaticState( ) static methods in
Line are for. You can see that they are explicitly called as part of the storage and retrieval
process. (Note that the order of writing to the serialize file and reading back from it must be
maintained.) Thus to make these programs run correctly, you must:
1. Add a serializeStaticState( ) and deserializeStaticState( ) to the shapes.

2. Remove the ArrayList shapeTypes and all code related to it.

3. Add calls to the new serialize and deserialize static methods in the shapes.

Another issue you might have to think about is security, since serialization also saves
private data. If you have a security issue, those fields should be marked as transient. But
then you have to design a secure way to store that information so that when you do a restore,
you can reset those private variables.

Exercise 30: (1) Repair the program CADState.java as described in the text.
XML
An important limitation of object serialization is that it is a Java-only solution: Only Java
programs can deserialize such objects. A more interoperable solution is to convert data to
XML format, which allows it to be consumed by a large variety of platforms and languages.
Because of its popularity, there are a confusing number of options for programming with
XML, including the javax.xml.* libraries distributed with the JDK. I've chosen to use
Elliotte Rusty Harold's open-source XOM library (downloads and documentation at
www.xom.nu) because it seems to be the simplest and most straightforward way to produce
and modify XML using Java. In addition, XOM emphasizes XML correctness.
As an example, suppose you have Person objects containing first and last names that you'd
like to serialize into XML. The following Person class has a getXML( ) method that uses

XOM to produce the Person data converted to an XML Element object, and a constructor
that takes an Element and extracts the appropriate Person data (notice that the XML
examples are in their own subdirectory):

```java
//: xml/Person.java
// Use the XOM library to write and read XML
// {Requires: nu.xom.Node; You must install
// the XOM library from http://www.xom.nu }
import nu.xom.*;
import java.io.*;
import java.util.*;

public class Person {
private String first, last;
public Person(String first, String last) {
this.first = first;
this.last = last;
}
// Produce an XML Element from this Person object:
public Element getXML() {
Element person = new Element("person");
Element firstName = new Element("first");
firstName.appendChild(first);
Element lastName = new Element("last");
lastName.appendChild(last);
person.appendChild(firstName);
person.appendChild(lastName);
return person;
}
// Constructor to restore a Person from an XML Element:
public Person(Element person) {
first= person.getFirstChildElement("first").getValue();
last = person.getFirstChildElement("last").getValue();
}
public String toString() { return first + " " + last; }
// Make it human-readable:
public static void
format(OutputStream os, Document doc) throws Exception {
Serializer serializer= new Serializer(os,"ISO-8859-1");
serializer.setIndent(4);
serializer.setMaxLength(60);
serializer.write(doc);
serializer.flush();
}
public static void main(String[] args) throws Exception {
List<Person> people = Arrays.asList(
new Person("Dr. Bunsen", "Honeydew"),
new Person("Gonzo", "The Great"),
new Person("Phillip J.", "Fry"));
System.out.println(people);
Element root = new Element("people");
for(Person p : people)
root.appendChild(p.getXML());
Document doc = new Document(root);
format(System.out, doc);
format(new BufferedOutputStream(new FileOutputStream(
"People.xml")), doc);
}
} /* Output:
[Dr. Bunsen Honeydew, Gonzo The Great, Phillip J. Fry]
<?xml version="1.0" encoding="ISO-8859-1"?>
<people>
<person>
I/O 719 

<first>Dr. Bunsen</first>
<last>Honeydew</last>
</person>
<person>
<first>Gonzo</first>
<last>The Great</last>
</person>
<person>
<first>Phillip J.</first>
<last>Fry</last>
</person>
</people>
*///:~
```
The XOM methods are fairly self-explanatory and can be found in the XOM documentation.
XOM also contains a Serializer class that you can see used in the format( ) method to turn
the XML into a more readable form. If you just call toXML( ) you'll get everything run
together, so the Serializer is a convenient tool.
Deserializing Person objects from an XML file is also simple:

```java
//: xml/People.java
// {Requires: nu.xom.Node; You must install
// the XOM library from http://www.xom.nu }
// {RunFirst: Person}
import nu.xom.*;
import java.util.*;

public class People extends ArrayList<Person> {
public People(String fileName) throws Exception {
Document doc = new Builder().build(fileName);
Elements elements =
doc.getRootElement().getChildElements();
for(int i = 0; i < elements.size(); i++)
add(new Person(elements.get(i)));
}
public static void main(String[] args) throws Exception {
People p = new People("People.xml");
System.out.println(p);
}
} /* Output:
[Dr. Bunsen Honeydew, Gonzo The Great, Phillip J. Fry]
*///:~
```
The People constructor opens and reads a file using XOM's Builder.build( ) method, and
the getChildElements( ) method produces an Elements list (not a standard Java List,
but an object that only has a size( ) and get( ) method—Harold did not want to force people
to use Java SE5, but still wanted a type-safe container). Each Element in this list represents
a Person object, so it is handed to the second Person constructor. Note that this requires
that you know ahead of time the exact structure of your XML file, but this is often true with
these kinds of problems. If the structure doesn't match what you expect, XOM will throw an
exception. It's also possible for you to write more complex code that will explore the XML
document rather than making assumptions about it, for cases when you have less concrete
information about the incoming XML structure.
In order to get these examples to compile, you will have to put the JAR files from the XOM
distribution into your classpath.
This has only been a brief introduction to XML programming with Java and the XOM library;
for more information see www.xom.nu.


Exercise 31: (2) Add appropriate address information to Person.java and
People.java.

Exercise 32: (4) Using a Map<String,Integer> and the
net.mindview.util.TextFile utility, write a program that counts the occurrence of words
in a file (use "\\W+" as the second argument to the TextFile constructor). Store the results
as an XML file.
Preferences
The Preferences API is much closer to persistence than it is to object serialization, because it
automatically stores and retrieves your information. However, its use is restricted to small
and limited data sets—you can only hold primitives and Strings, and the length of each
stored String can't be longer than 8K (not tiny, but you don't want to build anything serious
with it, either). As the name suggests, the Preferences API is designed to store and retrieve
user preferences and program-configuration settings.
Preferences are key-value sets (like Maps) stored in a hierarchy of nodes. Although the node
hierarchy can be used to create complicated structures, it's typical to create a single node
named after your class and store the information there. Here's a simple example:

```java
//: io/PreferencesDemo.java
import java.util.prefs.*;
import static net.mindview.util.Print.*;

public class PreferencesDemo {
public static void main(String[] args) throws Exception {
Preferences prefs = Preferences
.userNodeForPackage(PreferencesDemo.class);
prefs.put("Location", "Oz");
prefs.put("Footwear", "Ruby Slippers");
prefs.putInt("Companions", 4);
prefs.putBoolean("Are there witches?", true);
int usageCount = prefs.getInt("UsageCount", 0);
usageCount++;
prefs.putInt("UsageCount", usageCount);
for(String key : prefs.keys())
print(key + ": "+ prefs.get(key, null));
// You must always provide a default value:
print("How many companions does Dorothy have? " +
prefs.getInt("Companions", 0));
}
} /* Output: (Sample)
Location: Oz
Footwear: Ruby Slippers
Companions: 4
Are there witches?: true
UsageCount: 53
How many companions does Dorothy have? 4
*///:~
```
Here, userNodeForPackage( ) is used, but you could also choose
systemNodeForPackage( ); the choice is somewhat arbitrary, but the idea is that "user" is
for individual user preferences, and "system" is for general installation configuration. Since
main( ) is static, PreferencesDemo.class is used to identify the node, but inside a
nonstatic method, you'll usually use getClass( ). You don't need to use the current class as
the node identifier, but that's the usual practice.
I/O 721 

Once you create the node, it's available for either loading or reading data. This example loads
the node with various types of items and then gets the keys( ). These come back as a
String[], which you might not expect if you're used to the keys( ) method in the collections
library. Notice the second argument to get( ). This is the default value that is produced if
there isn't any entry for that key value. While iterating through a set of keys, you always know
there's an entry, so using null as the default is safe, but normally you'll be fetching a named
key, as in:
prefs.getInt("Companions", 0));
In the normal case, you'll want to provide a reasonable default value. In fact, a typical idiom
is seen in the lines:
int usageCount = prefs.getInt("UsageCount", 0);
usageCount++;
prefs.putInt("UsageCount", usageCount);
This way, the first time you run the program, the UsageCount will be zero, but on
subsequent invocations it will be nonzero.
When you run PreferencesDemo.java you'll see that the UsageCount does indeed
increment every time you run the program, but where is the data stored? There's no local file
that appears after the program is run the first time. The Preferences API uses appropriate
system resources to accomplish its task, and these will vary depending on the OS. In
Windows, the registry is used (since it's already a hierarchy of nodes with key-value pairs).
But the whole point is that the information is magically stored for you so that you don't have
to worry about how it works from one system to another.
There's more to the Preferences API than shown here. Consult the JDK documentation,
which is fairly understandable, for further details.

Exercise 33: (2) Write a program that displays the current value of a directory called
"base directory" and prompts you for a new value. Use the Preferences API to store the value.

## 🍀 Summary
The Java I/O stream library does satisfy the basic requirements: You can perform reading
and writing with the console, a file, a block of memory, or even across the Internet. With
inheritance, you can create new types of input and output objects. And you can even add a
simple extensibility to the kinds of objects a stream will accept by redefining the toString( )
method that's automatically called when you pass an object to a method that's expecting a
String (Java's limited "automatic type conversion").
There are questions left unanswered by the documentation and design of the I/O stream
library. For example, it would have been nice if you could say that you want an exception
thrown if you try to overwrite a file when opening it for output—some programming systems
allow you to specify that you want to open an output file, but only if it doesn't already exist.
In Java, it appears that you are supposed to use a File object to determine whether a file
exists, because if you open it as a FileOutputStream or FileWriter, it will always get
overwritten.
The I/O stream library brings up mixed feelings; it does much of the job and it's portable. But
if you don't already understand the Decorator design pattern, the design is not intuitive, so
there's extra overhead in learning and teaching it. It's also incomplete; for example, I
shouldn't have to write utilities like TextFile (the new Java SE5 PrintWriter is a step in
the right direction here, but is only a partial solution). There has been a big improvement in

I/O 723 
Java SE5: They've finally added the kind of output formatting that virtually every other
language has always supported.
Once you do understand the Decorator pattern and begin using the library in situations that
require its flexibility, you can begin to benefit from this design, at which point its cost in extra
lines of code may not bother you as much.
Solutions to selected exercises can be found in the electronic document The Thinking in Java Annotated Solution Guide,
available for sale from www.MindView.net.

