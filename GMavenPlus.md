# Groovy Scripting

Welcome to the GMavenPlus wiki!

## Common Links
* Basic compilation instructions are on the [[Usage]] page (assumes a joint Groovy-Java project).  If you're doing a pure Groovy project, check out [[this|Examples#pure-groovy-compilation]] example.
* Script execution instructions can be found [[here|Examples#execute-scripts]].
* InvokeDynamic instructions can be found [[here|Examples#invokedynamic-compilation]].
* Android instructions can be found [[here|Examples#android-compilation]].
* Looking for more examples of usage?  Check out the [[Examples]] page.
* Maven site documentation is [here](http://groovy.github.io/GMavenPlus/index.html).
* Want a release that isn't yet in Maven Central or a snapshot release? See the [[Repositories]] documentation.
* Need help?  Ask in our [Google group](https://groups.google.com/forum/#!forum/gmavenplus) or [Slack](https://groovy-community.slack.com/messages/C2SLAV9FY/).

## More Links
* Trying to decide if GMavenPlus is right for your project? Check out [[Choosing Your Build Tool]].
* Migrating from GMaven?  Check out [[GMaven Migration]].
* Think you found a bug?  Ask about it on our [mailing list](https://groups.google.com/d/forum/gmavenplus) or open an [issue](https://github.com/groovy/GMavenPlus/issues) and we'll look into it.
* Looking for project reports?  Check out the [Maven site](http://groovy.github.com/GMavenPlus/index.html).
* For those curious, there's some background on the project in the [[About]] page.
* Interested in [[Contributing]]?

# About GMavenPlus

## Why?

These were some of my goals in creating this project:

 * Simplify the project for ease of future maintenance (fewer modules, flatter class hierarchies, fewer dependencies -- I'm a big fan of KISS)
 * Don't depend on any particular version of Groovy (to let me play with new Groovy versions without waiting for a new plugin release and reduce the needed maintenance)
 * Allow access to GroovyDoc tool through the plugin
 * Support for invokedynamic
 * Be at least as configurable as the groovyc Ant task


## Why not patch GMaven?

Both projects use the same classes maintained by the Groovy team underneath (as does the Ant groovyc task), but I had a fundamentally different idea about how I want to access the Groovy classes.  I felt the plugin should be a lightweight facade providing access to the Groovy classes without coupling the codebase to a particular Groovy version. This was very different than how GMaven works.  It uses a heavier weight Plexus component based implementation, and is compiled against a specific Groovy version, necessitating updating the plugin with a new provider every time a new branch of Groovy was released (sometimes there'd be breaking changes with a minor point release which caused additional issues).  Additionally, when Groovy added indy and grooid, it meant GMaven would have needed 3 providers per release or separate plugin releases for each.  I maintained GMaven for a while, and didn't like the extra work this caused.  GMaven 2 was considering completely different direction and only supporting script execution.

## What's so different?

Other than support for additional features, the fundamental difference is rather than having a plugin dependency choose the version of groovy, GMavenPlus loads your project's compile time classpath into itself and uses Java's Reflection API to make the calls to Groovy that it needs. This gives you more choice over which version of Groovy you use, and makes less work for me because I won't have to release a new version of the plugin every time a new release of Groovy comes out.


## Why not just use groovyc in the AntRun Plugin?

You [could](http://groovy.codehaus.org/Compiling+With+Maven2).  I don't think all there's an Ant task for the execute, console, and shell goals, but you could probably find a way to make it happen.  My objection to this is that while there are some newer build tools out there that have some advantages over Maven, Maven is well-established and has a huge userbase.  Whether you love it or hate it, both Maven and Ant are here to stay and deserve first-class support.


## Why not just use the Groovy-Eclipse Compiler Plugin for Maven?

You could.  I lay out some pros and cons of this approach [here](https://github.com/keeganwitt/GMavenPlus/wiki/Choosing-Your-Build-Tool#groovy-eclipse-compiler-plugin-for-maven).  My main objections with this approach are
* It forces me to use the Eclipse compiler
* It's not nearly as lightweight as I think it should be (this leads to occasional delays after a new Groovy release before I can start using it)
* Doesn't let me choose the version of Groovy I want to compile with
* Doesn't yet support [invokedynamic](http://jira.codehaus.org/browse/GRECLIPSE-1582)
* Doesn't yet support Android
* Because it uses forked versions of Groovy's classes, it can result in different behavior than groovyc or Gradle

I felt strongly enough about the issues with alternative solutions that I felt the community deserved another choice.


# Choosing Your Build Tool
The goal of this page is to help a developer understand the differences between build tools, as it applies to Groovy integration.  It is meant to be unbiased, not an "us vs them" marketing page.  Feel free to correct any errors.

## [groovyc Ant Task](http://groovy-lang.org/groovyc.html#_ant_task)

**Pros**

* Maintained by Groovy team, updated at the same time as Groovy releases
* Supports invokedynamic
* Available for all Groovy versions
* You can use pretty much the same setup from your Ant projects in Maven [via the AntRun Plugin](https://gist.github.com/keeganwitt/d56b4b81165a264061d5)
* Allows generation of API docs without stubs
* Lets you specify the version of Groovy to use
* Allows Groovy configuration options to be passed to the compiler
* Supports [configuration scripts](http://groovy-lang.org/dsls.html#compilation-customizers)
* Uses Groovy's compilation APIs underneath
* Can write build in Groovy with [Gant](https://gant.github.io/)
* Supports Groovydoc generation (by groovdoc task)

**Cons**

* It's Ant, so there's more configuration and less convention than either of the Maven options (which may or may not be what you want)
* Uses stubs for mixed compilation
* If you're using the AntRun plugin on a mixed Groovy/Java project, you'll need to have javac handle you Java instead of the Maven Compiler Plugin
* Doesn't support Groovy mojos, except through [Java 5 annotations](http://maven.apache.org/plugin-tools/maven-plugin-plugin/examples/using-annotations.html)
* Doesn't support execution of Groovy scripts
* Doesn't support interactive shell/console on your project

## [GMaven 1](https://groovy.github.io/gmaven/)
**Pros**

* Tighter integration with Maven paradigm than groovyc
* Has been around longer than GMavenPlus
* Supports execution of Groovy scripts
* Allows Groovy configuration options to be passed to the compiler
* Uses Groovy's compilation APIs underneath (with the exception of stub generation,which was forked to preserve the Javadoc for use with Maven mojos)
* You can run Groovy tools (like GroovyConsole, GroovyShell, etc) without any additional installation or configuration
* Supports Groovy mojos (although you can't use versions of Groovy newer than 1.6 for this)
* Supports interactive shell/console on your project

**Cons**

* No longer maintained
* Doesn't support Groovy versions newer than 2.0.x
* Doesn't support invokedynamic
* Doesn't allow generation of API docs without stubs
* Doesn't let you specify the version of Groovy to use
* Doesn't support [configuration scripts](http://groovy-lang.org/dsls.html#compilation-customizers)
* Uses stubs for mixed compilation
* Not a [standard compiler plugin](http://maven.apache.org/plugins/maven-compiler-plugin/non-javac-compilers.html)


## [GMaven 2](http://groovy.github.io/gmaven/)
GMaven 2 isn't a build tool, it only lets you run Groovy scripts as part of your Maven build.  As such, many of the pros/cons don't apply.


## [GMavenPlus](http://github.com/keeganwitt/GMavenPlus)
**Pros**

* Uses reflection to access Groovy APIs, so except for new features (e.g. invokedynamic), you can use newer versions of Groovy without waiting for a new release
* Tighter integration with Maven paradigm than groovyc
* Supports invokedynamic
* Allows generation of API docs without stubs
* Source code is smaller and simpler than GMaven
* Lets you specify the version of Groovy to use
* Supports execution of Groovy scripts
* Allows Groovy configuration options to be passed to the compiler
* Supports [configuration scripts](http://groovy-lang.org/dsls.html#compilation-customizers)
* Uses Groovy's compilation APIs underneath
* Supports interactive shell/console on your project
* Supports Groovydoc generation

**Cons**

* Uses stubs for mixed compilation
* Doesn't support versions of Groovy older than 1.5
* Doesn't support Groovy mojos, except through [Java 5 annotations](http://maven.apache.org/plugin-tools/maven-plugin-plugin/examples/using-annotations.html)
* Not a [standard compiler plugin](http://maven.apache.org/plugins/maven-compiler-plugin/non-javac-compilers.html)


## [Groovy Eclipse Compiler Plugin for Maven](https://github.com/groovy/groovy-eclipse/wiki/Groovy-Eclipse-Maven-plugin)
**Pros**

* Doesn't use stubs for mixed compilation
* Tight integration with Eclipse
* Is a [standard compiler plugin](http://maven.apache.org/plugins/maven-compiler-plugin/non-javac-compilers.html)

**Cons**

* Doesn't support [invokedynamic](http://jira.codehaus.org/browse/GRECLIPSE-1582)
* Doesn't let you specify version of Groovy to use
* Doesn't support API docs generation
* Doesn't support execution of Groovy scripts
* Doesn't allow Groovy configuration options to be passed to the compiler (because it's a [standard compiler plugin](http://maven.apache.org/plugins/maven-compiler-plugin/non-javac-compilers.html))
* Doesn't support [configuration scripts](http://groovy-lang.org/dsls.html#compilation-customizers)
* Cannot choose between Eclipse compiler and standard Java compiler
* Sometimes lags a bit behind new Groovy releases
* Uses forked versions of Groovy's compilation APIs (while these do have some improvements over the standard APIs, it also means no other tool compiles exactly the same as Groovy-Eclipse and occasionally results differ from other tools)
* Doesn't support versions of Groovy older than 1.7
* Doesn't support Groovy mojos, except through [Java 5 annotations](http://maven.apache.org/plugin-tools/maven-plugin-plugin/examples/using-annotations.html)
* Doesn't support interactive shell/console on your project
* Doesn't support Groovydoc generation


## [Buildr](http://buildr.apache.org/rdoc/Buildr/Groovy/Groovyc.html)

**Pros**

* Uses the Groovyc Ant task underneath, so should have good compatibility
* Supports invokedynamic (presumably, since uses Ant underneath)
* Supports [configuration scripts](http://groovy-lang.org/dsls.html#compilation-customizers) (presumably, since uses Ant underneath)
* Supports all Groovy versions
* Lets you specify the version of Groovy to use
* Some may like the syntax better than other options (it's a Ruby DSL)
* Supports Groovydoc generation (presumably, since uses Ant underneath)

**Cons**

* Doesn't support Groovy mojos, except through [Java 5 annotations](http://maven.apache.org/plugin-tools/maven-plugin-plugin/examples/using-annotations.html)
* Doesn't support interactive shell/console on your project
* Doesn't support execution of Groovy scripts

## [Gradle](http://www.gradle.org/)

**Pros**

* Uses the Groovyc Ant task underneath, so should have good compatibility
* Supports invokedynamic
* Supports [configuration scripts](http://groovy-lang.org/dsls.html#compilation-customizers)
* Supports execution of Groovy scripts
* Can write build in Groovy
* Increasingly popular in the Groovy community (Groovy itself is built with Gradle)
* Supports Groovydoc generation
* Supports interactive shell bound to your project, either through defining your own task (as mentioned in [GRADLE-2880](http://issues.gradle.org/browse/GRADLE-2880)), or with the new [gradle-groovysh-plugin](https://github.com/tkruse/gradle-groovysh-plugin).

**Cons**

* Doesn't support Groovy mojos, except through [Java 5 annotations](http://maven.apache.org/plugin-tools/maven-plugin-plugin/examples/using-annotations.html)

## A Special Thanks
While on the topic of other build tools, I'd like to extend a special thanks to the authors of the GMaven and groovyc projects.  Your work greatly increased my understanding of the Groovy tools classes and saved me loads of time.  Thank you.

# Examples

The following examples describe some popular ways GMavenPlus can be used.

* [Pure Groovy Compilation](#pure-groovy-compilation)
* [Joint Compilation](#joint-compilation)
* [InvokeDynamic Compilation](#invokedynamic-compilation)
* [Spock 1 and JUnit](#spock-1-and-junit)
* [Spock 2 and JUnit](#spock-2-and-junit)
* [Dynamic Properties](#dynamic-properties)
* [Configuration Script](#configuration-script)
* [Android Compilation](#android-compilation)
* [Additional Sources](#additional-sources)
* [GroovyDoc](#groovydoc)
* [Add GroovyDoc to Site](#add-groovydoc-to-site)
* [GroovyDoc jars](#groovydoc-jars)
* [Execute Scripts](#execute-scripts)
* [Groovy Console](#groovy-console)
* [Groovy Shell](#groovy-shell)
* [Groovy Maven Plugins](#groovy-maven-plugins)

## Pure Groovy Compilation

To compile Groovy code as part of the project compilation when there are no dependencies between Java and Groovy, you should add something similar to the following in your pom.xml:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <goals>
              <goal>addSources</goal>
              <goal>addTestSources</goal>
              <goal>compile</goal>
              <goal>compileTests</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
    </dependency>
  </dependencies>
</project>
```
To compile both the main and test Groovy sources, simply execute the normal compile phase from the default lifecycle:

`mvn compile`

## Joint Compilation

To compile projects where you have mixed Java and Groovy (with dependencies between the two), you'll need to generate stubs in addition to normal compilation. To do this, you should add something similar to the following in your `pom.xml`:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <goals>
              <goal>addSources</goal>
              <goal>addTestSources</goal>
              <goal>generateStubs</goal>
              <goal>compile</goal>
              <goal>generateTestStubs</goal>
              <goal>compileTests</goal>
              <goal>removeStubs</goal>
              <goal>removeTestStubs</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
      </plugin>
    </plugins>
  </build>
  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
    </dependency>
  </dependencies>
</project>
```
This will modify Maven's source directories to contain both the Java sources and the Groovy sources, but not the Java stubs (these were removed by the removeStubs and removeTestStubs goals). If you need to keep them (for example for polyglot builds), don't call those goals until after you are are done using the stubs.

To compile both the main and test Groovy and Java sources, simply execute the normal compile phase from the default lifecycle:

`mvn compile`

## InvokeDynamic Compilation

**Groovy 4.x and newer**

Groovy 4.x and later [only supports](https://groovy-lang.org/releasenotes/groovy-4.0.html#Groovy4.0-indy-only) the invokedynamic bytecode so this section doesn't apply.

**Groovy 2.x and 3.x** 

To take advantage of [invokedynamic](http://docs.oracle.com/javase/7/docs/technotes/guides/vm/multiple-language-support.html#invokedynamic), you need to include the Groovy jar that [supports it](http://groovy.codehaus.org/InvokeDynamic+support) and set the configuration option. If you only include the Groovy indy jar without setting the configuration option only Groovy's classes will take advantage of invokedynamic, your classes will not. To do this, you should add something similar to the following in your `pom.xml`:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <goals>
              <goal>compile</goal>
              <goal>compileTests</goal>
            </goals>
          </execution>
        </executions>
        <configuration>
          <invokeDynamic>true</invokeDynamic>
        </configuration>
      </plugin>
    </plugins>
   </build>
  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <!-- any indy version of Groovy \>= 2.0.0-beta-3 should work here -->
      <version>3.0.18</version>
      <classifier>indy</classifier>
    </dependency>
  </dependencies>
</project>
```
To compile both the main and test Groovy sources, simply execute the normal compile phase from the default lifecycle:

`mvn compile`

## Spock 1 and JUnit

Spock 1 works with JUnit 4, you can add that to your project like this

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>org.codehaus.gmavenplus</groupId>
  <artifactId>joint-test</artifactId>
  <version>1.0-SNAPSHOT</version>

  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>2.5.14</version>
    </dependency>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.2</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-core</artifactId>
      <version>1.3-groovy-2.5</version>
      <type>pom</type>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <goals>
              <goal>addSources</goal>
              <goal>addTestSources</goal>
              <goal>generateStubs</goal>
              <goal>compile</goal>
              <goal>generateTestStubs</goal>
              <goal>compileTests</goal>
              <goal>removeStubs</goal>
              <goal>removeTestStubs</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.0.0-M5</version>
        <configuration>
          <includes>
            <include>**/*Spec.class</include>
            <include>**/*Test.java</include>
          </includes>
        </configuration>
      </plugin>
    </plugins>
  </build>

</project>
```

## Spock 2 and JUnit

Spock 2 uses JUnit 5, but you can also run JUnit 4 style tests by adding the appropriate dependencies.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>org.codehaus.gmavenplus</groupId>
  <artifactId>joint-test</artifactId>
  <version>1.0-SNAPSHOT</version>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.spockframework</groupId>
        <artifactId>spock-bom</artifactId>
        <version>2.1-groovy-3.0</version>
        <!-- use below for Groovy 4 -->
        <!-- <version>2.2-M1-groovy-4.0</version> -->
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
    </dependency>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-api</artifactId>
      <version>5.8.2</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-engine</artifactId>
      <version>5.8.2</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-core</artifactId>
      <scope>test</scope>
    </dependency>

    <!-- add dependencies below to enable JUnit 4 style tests -->
    <dependency>
      <groupId>org.junit.vintage</groupId>
      <artifactId>junit-vintage-engine</artifactId>
      <version>5.8.2</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-junit4</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <goals>
              <goal>addSources</goal>
              <goal>addTestSources</goal>
              <goal>generateStubs</goal>
              <goal>compile</goal>
              <goal>generateTestStubs</goal>
              <goal>compileTests</goal>
              <goal>removeStubs</goal>
              <goal>removeTestStubs</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.0.0-M5</version>
        <configuration>
          <includes>
            <include>**/*Spec.class</include>
            <include>**/*Test.java</include>
          </includes>
        </configuration>
      </plugin>
    </plugins>
  </build>

</project>
```

## Dynamic Properties

You can define properties dynamically in the middle of the maven run so that later maven goals can react to that property. This only works for adding properties, updating an existing property will not work. This gives you Maven Plugin like capability without the overhead of setting up a separate plugin codebase. In this example, the version of the project is introspected and maven "deploy" like functionality is created for writing on SNAPSHOT or RELEASE docker registries. (from [stackoverflow](http://stackoverflow.com/questions/17425684/maven-change-properties-on-the-fly-runtime/35731118#35731118))

```xml
  <plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>build-helper-maven-plugin</artifactId>
    <version>3.2.0</version>
    <executions>
      <execution>
        <id>parse-version</id>
        <goals>
          <goal>parse-version</goal>
        </goals>
      </execution>
    </executions>
  </plugin>

  <plugin>
    <groupId>org.codehaus.gmavenplus</groupId>
    <artifactId>gmavenplus-plugin</artifactId>
    <version>3.0.0</version>
    <dependencies>
      <dependency>
        <groupId>org.apache.groovy</groupId>
        <artifactId>groovy</artifactId>
        <version>4.0.15</version>
        <scope>runtime</scope>
      </dependency>
    </dependencies>
    <executions>
      <execution>
        <id>add-dynamic-properties</id>
        <phase>initialize</phase>
        <goals>
          <goal>execute</goal>
        </goals>
        <configuration>
          <scripts>
            <script>
<![CDATA[
@Grapes([
  @Grab(group='org.apache.commons', module='commons-lang3', version='3.3.2')
])
import java.text.SimpleDateFormat

Date now = new Date()
SimpleDateFormat timestamp = new SimpleDateFormat("yyyyMMdd.HHmmss")

myver  = "${project.version}"
myqual = "${parsedVersion.qualifier}"
myrepo = (myqual == "SNAPSHOT") ? "${docker.repo.snapshot}" : "${docker.repo.release}"
mytag  = (myqual == "SNAPSHOT") ? myver + "-" + timestamp.format(now) : myver

project.properties.setProperty('docker.repo.name', myrepo)
project.properties.setProperty('docker.image.tag', mytag) 

log.info("Docker repository name is " + project.properties['docker.repo.name'])
log.info("Docker image tag is " + project.properties['docker.image.tag'])
]]>
            </script>
          </scripts>
        </configuration>
      </execution>
    </executions>
  </plugin>
```

## Configuration Script

To compile using a [configuration script](http://groovy-lang.org/dsls.html#compilation-customizers), you just need to  tell GMavenPlus where your script is. To do that, add something like this to your `pom.xml`:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <goals>
              <goal>compile</goal>
              <goal>compileTests</goal>
            </goals>
          </execution>
        </executions>
        <configuration>
          <configScript>config.groovy</configScript>
        </configuration>
      </plugin>
    </plugins>
   </build>
  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
    </dependency>
  </dependencies>
</project>
```
To compile both the main and test Groovy sources, simply execute the normal compile phase from the default lifecycle:

`mvn compile`

## Android Compilation

To compile Groovy for use in Android, you need to include the Groovy jar that supports it. Everything else is the same as the normal compilation usages. To do this, you should add something similar to the following in your `pom.xml`:

```xml
<project>
  <properties>
    <!-- you can use 1.7 if targeting KitKat (19) or higher -->
    <maven.compiler.source>1.7</maven.compiler.source>
    <maven.compiler.target>1.7</maven.compiler.target>
  </properties>
  <build>
    <finalName>gmavenplus-plugin</finalName>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
       <executions>
          <execution>
            <goals>
              <goal>addSources</goal>
              <goal>addTestSources</goal>
              <goal>compile</goal>
              <goal>compileTests</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>com.jayway.maven.plugins.android.generation2</groupId>
        <artifactId>android-maven-plugin</artifactId>
        <version>4.6.0</version>
        <extensions>true</extensions>
        <configuration>
          <sdk>
            <!-- a list of version codes is available here: https://developer.android.com/reference/android/os/Build.VERSION_CODES.html -->
            <platform>28</platform>
            <!-- assumes ANDROID_HOME environment variable is set and SDK matching this version is installed there -->
          </sdk>
        </configuration>
     </plugin>
    </plugins>
  </build>
  <dependencies>
    <dependency>
      <groupId>com.google.android</groupId>
      <artifactId>android</artifactId>
      <version>4.1.1.4</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
      <classifier>grooid</classifier>
    </dependency>
   </dependencies>
</project>
```

To compile both the main and test Groovy sources, simply execute the normal compile phase from the default lifecycle:

`mvn compile`

## Additional Sources

If you have sources that don't have the default extension (.groovy) or are in non-default directories (src/main/groovy and src/test/groovy) you must configure GMavenPlus to recognize those sources. To do this, you should add something similar to the following in your `pom.xml`:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <goals>
              <goal>compile</goal>
              <goal>compileTests</goal>
            </goals>
          </execution>
        </executions>
        <configuration>
          <!-- this example has a structure of
               ./
               |-- src/
                   |-- main/
                       |-- groovy/
                           |-- Class1.groovy
                   |-- additional/
                       |-- groovy/
                           |-- Class2.groovy
                       |-- gvy/
                           |-- Class3.gvy
                   |-- test/
                       |-- groovy/
                       |-- Class1Test.groovy
                   |-- additional/
                       |-- groovy/
                           |-- Class2Test.groovy
                       |-- gvy/
                           |-- Class3Test.gvy
          -->
          <sources>
            <source>
              <directory>${project.basedir}/src/main/groovy</directory>
              <includes>
                <include>**/*.groovy</include>
              </includes>
            </source>
            <source>
              <directory>${project.basedir}/src/additional</directory>
              <includes>
                <include>groovy/**/*.groovy</include>
                <include>gvy/**/*.gvy</include>
              </includes>
            </source>
          </sources>
          <testSources>
            <testSource>
              <directory>${project.basedir}/src/test/groovy</directory>
              <includes>
                <include>**/*.groovy</include>
              </includes>
            </testSource>
            <testSource>
              <directory>${project.basedir}/src/additionalTest</directory>
              <includes>
                <include>groovy/**/*.groovy</include>
                <include>gvy/**/*.gvy</include>
              </includes>
            </testSource>
          </testSources>
        </configuration>
      </plugin>
    </plugins>
  </build>
  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
    </dependency>
  </dependencies>
</project>
```

To compile both the main and test Groovy sources, simply execute the normal compile phase from the default lifecycle:

`mvn compile`

## GroovyDoc

To generate GroovyDoc for mixed Groovy and Java projects manually, you only need add the plugin (no need to configure any executions). To do this, you should add something similar to the following in your `pom.xml`:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
      </plugin>
    </plugins>
  </build>
  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
    </dependency>
  </dependencies>
</project>
```

To generate the groovyDoc for the main sources, simply execute GMavenPlus's groovydoc goal:

`mvn gplus:groovydoc`

If you are doing this for Groovy objects that also use Java sources, you will also need to execute GMavenPlus's generateStubs goal in addition to the groovydoc goal:

`mvn gplus:generateStubs gplus:groovydoc`

To make this easy to invoke (like above), you may want to add the plugin group to your `settings.xml`:

```xml
<pluginGroups>
  <pluginGroup>org.codehaus.gmavenplus</pluginGroup>
</pluginGroups>
```

## Add GroovyDoc to Site

Note that this mojo is not set up to be used in the \<reporting\> section. So you will need to set the `<outputDirectory>` and `<executions>` to mimic this functionality. To do this, you should add something similar to the following in your `pom.xml`:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <phase>site</phase>
            <goals>
              <goal>generateStubs</goal>
              <goal>generateTestStubs</goal>
              <goal>groovydoc</goal>
              <goal>groovydocTests</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
    </dependency>
  </dependencies>
</project>
```

To generate the groovyDoc for the main sources, simply execute the normal site phase from the default lifecycle:

`mvn site`

Keep in mind that you can exclude the stub generation goals from the execution if

* You don't have any Java that Groovy classes use
* Another execution has already generated the stubs (typical in site lifecycle)


## GroovyDoc Jars

GMavenPlus can create jar archives and bind them to the project. To do this, you should add something
  similar to the following in your `pom.xml`:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <phase>site</phase>
            <goals>
              <goal>generateStubs</goal>
              <goal>generateTestStubs</goal>
              <goal>groovydoc-jar</goal>
              <goal>groovydocTests-jar</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
    </dependency>
  </dependencies>
</project>
```

By default, these goals will also invoke `groovydoc`/`groovydocTests` goals. If you've already generated the GroovyDoc previously in the lifecycle, you can skip this by setting `invokeGroovyDoc` to `false`.

Also keep in mind that you can exclude the stub generation goals from the execution if

* You don't have any Java that Groovy classes use
* Another execution has already generated the stubs (typical in site lifecycle)


## Execute Scripts

Note that if you'd like to separate script dependencies from those of your project, you can use Groovy's [@Grab](http://groovy.codehaus.org/Grape) annotation instead of making them plugin dependencies if you prefer. Any plugin dependencies and any project test dependencies are also available for use in your scripts (remember that test scope also includes compile scope). This example demonstrates all three ways of including dependencies. Note that Maven will try to filter dollar curly references, so you'll need to either make sure the names don't collide or use the dollar without the curly if you don't want that to happen. Note that you can also add your own properties to use in the script (that can be set from the POM's properties or the command line. To execute Groovy scripts in build, add something similar to the following in your `pom.xml`:

```xml
<project>
  <properties>
    <projectProp>yetAnotherValue</projectProp>
  </properties>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <executions>
          <execution>
            <id>execute</id>
            <goals>
              <goal>execute</goal>
            </goals>
          </execution>
        </executions>
      <configuration>
        <properties>
          <property>
            <name>someProp</name>
            <value>${someProp}</value>
          </property>
        </properties>
        <scripts>
          <script><![CDATA[
            @Grapes([
              @Grab(group='org.apache.commons', module='commons-lang3', version='3.3.2')
            ])
            import org.apache.commons.lang3.SystemUtils
            log.debug("The settings are " + session.settings)
            log.debug("This session's goals are " + session.goals)
            log.debug("The local repository is " + session.localRepository)
            log.debug("The reactor projects are " + session.sortedProjects)
            log.debug("The plugin artifacts are " + pluginArtifacts)
            log.debug("The mojo execution is " + mojoExecution)
            log.debug("The plugin descriptor is " + mojoExecution.mojoDescriptor)
            log.debug("someProp is " + someProp)
            log.debug("projectProp is " + project.properties['projectProp'])
            log.debug("Using Java " + SystemUtils.JAVA_VERSION)
            assert ant.project.baseDir == project.basedir
            // the first reference is not filtered by Maven, the second reference is
            assert "$project.name" == "${project.name}"
          ]]></script>
          <script>file:///${project.basedir}/src/main/resources/groovyScripts/someScript.groovy</script>
          <script>${project.basedir}/src/main/resources/groovyScripts/someOtherScript.groovy</script>
        </scripts>
      </configuration>
      <dependencies>
        <dependency>
          <groupId>org.apache.groovy</groupId>
          <artifactId>groovy</artifactId>
          <version>4.0.15</version>
          <scope>runtime</scope>
        </dependency>
      </dependencies>
    </plugin>
  </plugins>
  </build>
</project>
```

To execute your script(s), simply execute GMavenPlus's execute goal:

`mvn gplus:execute@execute`

To make this easy to invoke (like above), you may want to add the plugin group to your `settings.xml`:

```xml
<pluginGroups>
  <pluginGroup>org.codehaus.gmavenplus</pluginGroup>
<pluginGroups>
```

## Groovy Console

If you're already using GMavenPlus in your project, no additional configuration is needed. If you're not already using GMavenPlus in your project but want to be able to use the console, you'll need to define the version of GMavenPlus and Groovy. To do this, you should add something similar to the following in your `pom.xml`:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <dependencies>
          <dependency>
            <groupId>org.apache.groovy</groupId>
            <artifactId>groovy-console</artifactId>
            <version>4.0.15</version>
            <scope>runtime</scope>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

To launch a Groovy console bound to the current project, simply execute GMavenPlus's console goal:

`mvn gplus:console`

Or you can start a console without having GMavenPlus in your project, as long as you have a dependency on Groovy in your project by running the complete path to the goal:

`mvn org.codehaus.gmavenplus:gmavenplus-plugin:1.2:console`

## Groovy Shell

If want to be able to use the shell, you'll need to define the version of GMavenPlus, Groovy, and JLine. To do this, you should add something similar to the following in your `pom.xml`:

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.0</version>
        <dependencies>
          <dependency>
            <groupId>org.apache.groovy</groupId>
            <artifactId>groovy-groovysh</artifactId>
            <version>4.0.15</version>
            <scope>runtime</scope>
          </dependency>
          <!-- if you are using a version of Groovy \< 2.2.0-beta-1, you'll need to uncomment below -->
          <!--<dependency>-->
            <!--<groupId>jline</groupId>-->
            <!--<artifactId>jline</artifactId>-->
            <!--<version>1.0</version>-->
            <!--<scope>runtime</scope>-->
          <!--</dependency>-->
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

To launch a Groovy console bound to the current project, simply execute GMavenPlus's shell goal:

`mvn gplus:shell`

## Groovy Maven Plugins

An example of how to use GMavenPlus to create Maven plugins in Groovy can be seen in GMavenPlus's own integration test of that functionality [here](https://github.com/groovy/GMavenPlus/tree/master/src/it/mavenPlugin).

# Usage

The two most popular use cases for GMavenPlus are [executing Groovy scripts](#executing-a-groovy-script) and [compiling Groovy sources](#compiling-groovy-sources).  However, there are other usages available.  Such as generating GroovyDoc, and launching a Groovy shell or console bound to a Maven project, which you can read about on our [[examples]] page.

## Executing a Groovy script ##

You may choose to bind your execution to any phase you wish.  In this example, it is not bound to any phase and must be called explicitly like this

`mvn gplus:execute`

### Configuring GMavenPlus ###

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.2</version>
        <executions>
          <execution>
            <goals>
              <goal>execute</goal>
            </goals>
          </execution>
        </executions>
      <configuration>
        <scripts>
          <script><![CDATA[
            // your script here
          ]]></script>
        </scripts>
      </configuration>
      <dependencies>
        <dependency>
          <groupId>org.apache.groovy</groupId>
          <artifactId>groovy</artifactId>
          <version>4.0.15</version>
          <scope>runtime</scope>
        </dependency>
      </dependencies>
    </plugin>
  </plugins>
  </build>
</project>
```

More advanced usages can be found on our [[examples]] page.

## Compiling Groovy sources ##

The compilation goals (including those for joint compilation) for GMavenPlus are bound to their respective phases in the build lifecycle.  So to compile your sources, you need only tell maven how much of the lifecycle to execute. The following will compile your sources:

`mvn compile`

To compile your test sources, you'll do:

`mvn test-compile`

The above command will execute both compiler:compile and compiler:testCompile since the compile phase happens a few phases before the test-compile phase.

### Configuring GMavenPlus ###

```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmavenplus</groupId>
        <artifactId>gmavenplus-plugin</artifactId>
        <version>3.0.2</version>
        <executions>
          <execution>
            <goals>
              <goal>addSources</goal>
              <goal>addTestSources</goal>
              <goal>generateStubs</goal>
              <goal>compile</goal>
              <goal>generateTestStubs</goal>
              <goal>compileTests</goal>
              <goal>removeStubs</goal>
              <goal>removeTestStubs</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
      </plugin>
      <plugin>
        <!-- if including source jars, use the no-fork goals
             otherwise both the Groovy sources and Java stub sources
             will get included in your jar -->
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-source-plugin</artifactId>
        <!-- source plugin \> = 2.1 is required to use the no-fork goals -->
        <version>3.2.1</version>
        <executions>
          <execution>
            <id>attach-sources</id>
            <goals>
              <goal>jar-no-fork</goal>
              <goal>test-jar-no-fork</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
  <dependencies>
    <dependency>
      <groupId>org.apache.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>4.0.15</version>
    </dependency>
  </dependencies>
</project>
```

More advanced usages can be found on our [[examples]] page.

### Why do I need so many goals? ###

Because we need to mix Groovy and Java lifecycles together.  The only other way to do this is a with a custom lifecycle.  This seemed inappropriate since you have to introduce a new type (which both GMaven and GMavenPlus did at one time as groovy-jar).  But what if you are mixing Groovy, Java, and another language (maybe Scala)?  We'd have to define types for all the combinations.  It also seemed inappropriate that consumers of your artifact should be aware of the fact it was written in another language.

Here's how those goals map to the sequence of actions GMavenPlus takes

1. Add the Groovy source sources to Maven's main sources (because `addSources` was requested).  This is useful for when you want to make a source jar.  If you have no main Groovy code, you can omit this.
1. Add the Groovy test sources to Maven's test sources (`addTestSources` was requested).  This is useful for when you want to make a test source jar.  If you have no test Groovy code, you can omit this.
1. Generate Java stubs for main Groovy code (because `generateStubs` was requested).  These are then added to Maven's main sources for the Compiler plugin to use so Java can compile against them.  If you have no main Groovy code or are not mixing Groovy with Java or creating Groovydoc, you can omit this.
1. > At this point in the execution, the Compiler plugin will compile the main Java code (including the generated main Java stubs if applicable).
1. Compile the main Groovy code (because `compile` was requested).  If you have no main Groovy code, you can omit this.
1. Remove the main stubs from Maven's main sources (because `removeStubs` was requested).  This can be done because stubs are only needed until Java is compiled.  If you don't run this step, the stubs will be included in the main source jar (if created).  If you didn't request `generateStubs`, you can omit this.
1. Generate Java stubs for test Groovy code (because `generateTestStubs` was requested).  These are then added to Maven's test sources for the Compiler plugin to use so Java can compile against them.  If you have no test Groovy code or are not mixing Groovy with Java or creating Groovydoc, you can omit this.
1. > At this point in the execution, the Compiler plugin will compile the test Java code (including the generated test Java stubs if applicable).
1. Compile the test Groovy code (because `compileTests` was requested).  If you have no test Groovy code, you can omit this.
1. Remove the test stubs from Maven's test sources (because `removeTestStubs` was requested).  This can be done because stubs are only needed until Java is compiled.  If you don't run this step, the stubs will be included in the test source jar (if created).  If you didn't request `generateTestStubs`, you can omit this.

## Migrating configurations

Switching from GMaven requires some changes to your confugration, although the configuration is very similar. The [[Examples]] page has many popular use cases. The most common migrations are documented below.

### Compiling

For many users, you replace a configuration like this one

```xml
<project>
  <properties>
    <gmaven.version>1.5</gmaven.version>
    <gmaven.providerVersion>2.0</gmaven.providerVersion>
    <groovy.version>4.0.6</groovy.version>
  </properties>
  <build>
    <plugins>
      <plugin>
        <groupId>org.codehaus.gmaven</groupId>
        <artifactId>gmaven-plugin</artifactId>
        <version>1.5</version>
        <configuration>
          <providerSelection>2.0</providerSelection>
        </configuration>
        <executions>
          <execution>
            <goals>
              <goal>generateStubs</goal>
              <goal>compile</goal>
              <goal>generateTestStubs</goal>
              <goal>testCompile</goal>
            </goals>
          </execution>
        </executions>

        <!-- some projects might also override the Groovy version with something like below -->
        <dependencies>
          <dependency>
            <groupId>org.codehaus.gmaven.runtime</groupId>
            <artifactId>gmaven-runtime-2.0</artifactId>
            <version>1.5</version>
            <exclusions>
              <exclusion>
                <groupId>org.codehaus.groovy</groupId>
                <artifactId>groovy-all</artifactId>
              </exclusion>
            </exclusions>
          </dependency>
          <dependency>
            <groupId>org.codehaus.groovy</groupId>
            <artifactId>groovy-all</artifactId>
            <version>${groovy.version}</version>
            <type>pom</type>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

With the one documented [[here|Examples#joint-compilation]].

### Running scripts

For many users, you replace a configuration like this one

```xml
<build>
  <plugin>
    <groupId>org.codehaus.gmaven</groupId>
    <artifactId>gmaven-plugin</artifactId>
    <version>1.5</version>
    <configuration>
      <source>println 'Hi!'</source>
      <providerSelection>2.0</providerSelection>
    </configuration>
  </plugin>
</build>

```

With the one documented [[here|Examples#execute-scripts]].

## FAQ for users migrating from GMaven

A special welcome to you!  I hope you find that this plugin meets your needs.  Here's the answers to some questions you might have about your migration.

### What does GMavenPlus provide that GMaven doesn't?

 * Uses whatever version of Groovy your project does (this was possible with GMaven, just not as straight-foward -- you needed to override the plugin dependencies)
 * Access to the groovydoc tool (this might make stub generation unneeded for you if you're not mixing Groovy and Java)
 * Some additional configuration options (including the option to use invokedynamic)

### What's not in GMavenPlus that was in GMaven?

Below are the items I don't plan on implementing at this time.  However, if these features are important to anyone (or my assumptions are flawed), I'll gladly reconsider.

 * The GroovyMojo (this is unnecessary since you can compile your mojo like any other Groovy class when you use [Java 5 annotations](http://maven.apache.org/plugin-tools/maven-plugin-plugin/examples/using-annotations.html))
 * The stack trace sanitization feature (this should be configurable with Groovy's debug property instead)
 * gmaven-archetypes and gmaven-examples (I thought the usage is so simple that between the Maven site and the integration tests these aren't really needed.)
 * The groovy-jar type (I felt it was wrong to change the type just because Groovy was used.  Types should be used for what it is, not how it was made.  Plus it wouldn't work for polyglot builds.)

### Will GMavenPlus fix my stub generation issues?

I've not personally ever run into these issues, but for those that have: Probably not.  The method of generating stubs uses classes maintained by the Groovy project, which is also the way GMaven works (except for the 1.5 and 1.6 providers which implement their own stub generation).  So if you had problems with it, you'll probably have problems with this as well.  If you do encounter issues with stub generation, please drop me a note or [raise an issue](http://github.com/keeganwitt/GMavenPlus/issues).  I'd be happy to see if it is happening within GMavenPlus (in which case I'll fix it), or if it's not you can [create an issue for the Groovy team](http://jira.codehaus.org/browse/GROOVY).  Alternatively, you can use the [Groovy-Eclipse Compiler Plugin for Maven](http://groovy.codehaus.org/Groovy-Eclipse+compiler+plugin+for+Maven), which doesn't use stubs.

### But which tool is the official one?

Technically, there never was any official (endorsed by Groovy team) plugin for Maven.  GMaven was (and still is) very popular because there were no good alternatives at the time.  Groovy-Eclipse compile plugin for Maven has become increasingly popular because GMaven was being worked on less and less.  The closest thing to an official tool I guess would be groovyc, since it's maintained by the Groovy team.  However, it's also worth noting that Groovy itself is built with Gradle.

# Repositories

New releases are synced to [Maven Central](https://search.maven.org/). If you need to get a new release before it's been synced, you can get it from the repository it's been published to ([Sonatype OSSRH](https://oss.sonatype.org/)). Sonatype also hosts snapshot releases. Below is the configuration for these respositories


```xml
<repositories>
  <repository>
    <id>sonatype-oss-snapshots</id>
    <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    <releases>
      <enabled>false</enabled>
    </releases>
    <snapshots>
      <enabled>true</enabled>
      <updatePolicy>always</updatePolicy>
      <checksumPolicy>warn</checksumPolicy>
    </snapshots>
  </repository>
  <repository>
    <id>sonatype-oss-releases</id>
    <url>https://oss.sonatype.org/content/repositories/releases</url>
    <releases>
      <enabled>true</enabled>
    </releases>
    <snapshots>
      <enabled>false</enabled>
    </snapshots>
  </repository>
<repositories>
```

# Known Issues

* Anything requiring stubs (joint compilation or Groovydoc) doesn't work with Groovy versions older than 1.8.2 and 1.9-beta-1 and 1.9-beta-2.
* Because Groovy erroneously introduced an Ant dependency, Groovydoc doesn't work with Groovy 1.5.8 and 1.6-RC-1.

# How to contribute?

We always welcome patches and bug reports.  If you don't want to dig into the code, we can always use more testers.  Regular patchers may be given full dev access.  We use [Travis](https://travis-ci.org/groovy/GMavenPlus) as our CI tool.

# Design Decisions

This is to help contributors understand why we made some of the choices we made when designing GMavenPlus.

## Why Reflection to access Groovy tools?
Interfaces and OSGI modules would have been preferable to decouple the plugin from particular Groovy versions, but at the moment the effort to modularize Groovy is incomplete and no interfaces exist for the tools. For now, it was simpler to just use reflection. This does have the disadvantage of making the code a bit harder to read, slower execution, and perhaps a greater chance of runtime errors. Perhaps in the future other options will be available.

## Why was this written for JDK 1.5?
This plugin focuses on supporting newer versions of Groovy, and since Groovy 1.7, JDK 1.5 or greater is required. At some point in the future, JDK 1.4 may be supported. It wasn't written for a higher version so that it can be used by a wider audience.

## Why use the project's Groovy?
We chose not to implement a system like GMaven's providers or Groovy-Eclipse's compilers to keep the system simpler, avoid possible issues between the version the code was compiled with and the version used at runtime, to avoid the need for a new release every time a new version of Groovy comes out, and because I'm hoping it'll cause less confusion than the providers mechanism.

## Why the name?
Because I'm terrible at coming up with names :)  Part of it was that I wanted a name that tied into it's history and this was one of the first things that came to mind.  I had some other ideas later, but I'd already mentioned this project under that name in a few places and wanted to maximize traffic to the project, so I just stuck with it.