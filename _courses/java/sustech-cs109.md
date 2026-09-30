---
title: "SUSTech CS109 - Java"
course_id: "java"
course_title: "计算机程序设计基础/JavaA"
section: ""
status: "completed"
reference: false
layout: "course"
permalink: "/courses/java/sustech-cs109/"
course_page: true
doc_type: "note"
description: "计算机程序设计基础/JavaA · SUSTech CS109 - Java"
excerpt: "计算机程序设计基础/JavaA · SUSTech CS109 - Java"
---

{% raw %}

## Java 简介（Introduction to Java）
{: #section-1 }

Java 是一门基于 **C++** 的编程语言。

Java 之父：James Gosling。

Java 从源代码到运行：
1. 编译器：编译源代码到**字节码**。`javac Main.java`
2. 解释器（JVM）：读取，识别，**解释**，运行字节码。`java Main`

JVM：Java Virtual Machine，运行程序的虚拟机。
JRE：Java Runtime Environment = JVM + 核心类库。
JDK：Java Development Kit = JRE + 开发工具

变量名，方法名都是标识符（Identifiers）。标识符只允许出现大小写英文字母和数字，$和_，不允许用数字开头。

多行注释是贪心匹配的，不能嵌套。

```java
/*
/* ..... */
*/ （语法错误）
```

转义字符（Escape Character）：`\n` 换行，`\t` Tab，`\"` 转义 `"` 字符。

## 数据类型与计算 (Data Type and Calculation)
{: #section-2 }

- 基础数据类型（Primitive Data Type），共有八种：
  ```java
  byte(8 bits), short(16 bits), int(32 bits), long(64 bits)  // Integral Type
  float(32 bits), double(64 bits) // Floating-Point Type
  // 注意 float f = 1.2f 要在数字后加个 "f" 显式告诉编译器
  boolean(1 bit)
  char(16 bits, unicode)   
  ```
- 引用类型（Reference Type），也叫复杂数据类型（Complex Data Type）。

考虑  `++a or a++` 的区别。

逻辑运算符：与，或，非，异或。
`&& or ||` 和 `& or |` 的区别：前者会短路，后者不会短路。

**运算符优先级：** 四则 > 比较 > 赋值。细则看这个图：
<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/CS109%20-%202.png' | relative_url }}{% raw %}" alt="CS109 - 2" loading="lazy">

`String.format("%d", 1)` 返回格式化后的字符串 `"1"`。

类型强制转换（Explicit Conversion） `(double)a * b`，其中 `b` 也会被隐式提升（Implicitly Promoted） 为 `double`。

提升需要不丢精度，比如 `float` 可以提升为 `double`，`short` 可以提升为 `long`，反过来却不安全。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/CS109%20-%203.png' | relative_url }}{% raw %}" alt="CS109 - 3" loading="lazy">

八大基础类型有对应的 Wrapper Classes
`ArrayList<Integer> list = new Arraylist<Integer>();`
`Map<Integer, String>`

## 控制语句（Control Statement）
{: #section-3 }

注意 `if` 如果不加花括号的话只看它的下一句
```java
if (a) {
	if (b)
		c;
}
// 没有花括号的话就是这两个匹配 if(b) c; else d;
else
	d;
```

注意 `switch` 要有 `break`，不然会穿透继续执行下面的代码。
`switch` 中的变量类型不能是浮点数 `float / double`。
```java
switch (a) {
	case A:
		A1;
		A2;
		break;
	case B:
		B1;
		B2;
		break;
	default:
		D;
}
```

循环：`for, while, do...while`。
## 数组（Array）
{: #section-4 }

数组 `int[] a = new int[10];`  其中 `10` 为数组的大小。
创建后大小不能更改，大小通过 `a.length` 可以获取。

> 注意：
> 数组用 `a.length`。
> `String / StringBuilder` 用 `a.length()`。
> `List / Set / Map` 这种东西都用 `a.size()`。

数组越界会抛 `ArrayIndexOutofBound` 异常。

初始化数组的方法：
```java
int[] arr1 = new int[]{1, 2, 3}; // 正确
int[] arr2 = {1, 2, 3}; // 正确
int[] arr3;
arr3 = {1, 2, 3} // 不正确，必须使用 new 关键字
```

赋值操作只会更改数组的引用。例如：
```java
int[] list1 = {1, 2, 3};
int[] list2 = {4, 5, 6};

list2 = list1; // list2 -> {1, 2, 3}
list1[0] = 0; // list2 -> {0, 2, 3}
```

多维数组：可以视为数组的嵌套。例如：
```java
int[][] arr = new int[3][4];
int[][] arr1 = {{1, 2}, {3, 4, 5}};
```

## 方法（Method）
{: #section-5 }

函数中的传参数：基础类型是传值本身，引用类型是传引用。参数也会隐式提升。

同一个方法不同的签名（Signature，就是参数类型列表），可实现方法重载（Method Overloading）

可变数量参数 `public static double sum(double... numbers)`

调用栈（Method-Call Stack）：调用方法时会创建栈帧，推入调用栈，然后在栈顶执行，执行完会弹出栈顶。
## 字符串与包装类（String and Wrapper Classes）
{: #section-6 }

不可变字符串 `String` 是 Java 预定义的类（Predefined Class），也是引用类型。

```java
String s1 = new String("hello");
String _s1 = new String("hello");
String s2 = new String();
String s3 = new String(s1);
char[] charArray = {'h', 'e', 'l', 'l', 'o'};
String s4 = new String(charArray);
String s5 = new String(charArray, 3, 2); // "lo"
String s6 = "hello";
String _s6 = "hello";
/*
注意，s6 是用字面常量（String Literals）创建的字符串，相同的字面常量会指向同一个地址。
s1 使用 new 关键字创建一个新的实例。
那么，会导致 s1 == _s1 为 false，而 s6 == _s6 为 true。
要比较字符串的值是否相同，要用 s1.equals(_s1) -> true
忽略大小写用 s1.equalsIgnoreCase("Hello") -> true
*/
s6 = "world";
// 注意字符串具有不可变性（Immutability），这个操作会让 s6 指向 "world" 这个常量的地址，但没有删掉 "hello" 这个常量的地址。
int len = s6.length(); // 5
char c = s6.charAt(0); // w
char[] charCopy = new char[3];
s6.getChars(0, 2, charCopy, 1); // charCopy -> {\u0000, w, o};

System.out.println("hello".compareTo("HELLO")); // 32 （'h' - 'H')
System.out.println("he".compareTo("hello")); // -3 (2 - 5)
// 字符串的 compareTo 方法：找到第一个不同的字符，返回它们的 Unicode 编码差值。特别地， 如果一个字符串是另一个字符串的前缀，那么返回它们长度的差值。

boolean r1 = "hello".startsWith("he"); // true
boolean r2 = "hello".endsWith("lo"); // ture
boolean r3 = "hello".startsWith("ell", 1) // true

String s = "abcdcba";
int index1 = s.indexOf('c'); // 2
int index2 = s.indexOf('p'); // -1
int index3 = s.indexOf('c', 3) // 4 (从 index = 3 开始搜)
// lastIndexOf 为反向搜索，其余一样

String ss1 = "abcdefg".substring(2); // cdefg
String ss2 = "abcdefg".substring(2, 4); // cd

String sss = "hello".replace("ll", "LL"); // heLLo

String upper = "hello".toUpperCase(); // HELLO
String lower = "HELLO".toLowerCase(); // hello

String trimed = "  hello   ".trim(); // "hello"

String concated = "hello".concat(" world"); // "hello world"
String concated1 = "hello" + " world";
```

可变字符串 `StringBuilder` 的操作效率比较高。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/CS109%20-%204.png' | relative_url }}{% raw %}" alt="CS109 - 4" loading="lazy">

包装类（Wrapper Class）可以将八大基础类型作为对象处理：
```java
Boolean, Character, Double, Float, Byte, Short, Integer, Long
```
也提供了一些静态方法，比如：
```java
Character.isDigit('c'); // false
Integer.parseInt("8"); // 8
Double.parseDouble("3.3"); // 3.3
String.valueOf(123); // "123"
```

自动装箱（Auto-boxing）和自动拆箱（Auto-unboxing）：
```java
int a = 1;
Integer b = a; // auto-boxing
int c = b; // auto-unboxing
```
## 类与对象（Class and Object）
{: #section-7 }

类（Class）的属性（Attributes）：
1. 生命周期（Lifespan）：实例从创建到销毁的时间。
2. 变量 / 字段（Variables / Fields）
3. 方法

包（Package）：例如 `java.util` ，`edu.sustech.xiangqi`。
可以导入包中的类，例如 `import java.util.*`。
还可以导入类的静态成员，例如 `import java.lang.Math.*`。
但导入了同名的静态成员会有编译错误。

枚举类（Enumerations）：
```java
public enum Direction {
	NORTH, SOUTH, EAST, WEST
}
// 等效于下面这个
public final class Direction {
	private Direction() {} 
	public static final Direction EAST = new Direction();
	public static final Direction WEST = new Direction();
	public static final Direction SOUTH = new Direction();
	public static final Direction NORTH = new Direction();
}
```
那么 `Direction` 类型的变量只能赋予这四种，或者 `null`。

`ArrayList<T>`：可变长度数组。
```java
// import java.util.ArrayList;
// import java.util.Collections;
ArrayList<Integer> list = new ArrayList<>();
list.add(1);
list.add(2);
System.out.println(list.get(1)); // 2
Collections.sort(list);
Collections.reverse(list);
```

考虑  `static` 关键字修饰变量或修饰方法的作用。

## 继承（Inheritance）
{: #section-8 }

子类（Subclass）继承自超类（Superclass）。
子类可以被当成超类（is-a relationship）。也就是说，父类变量可以放子类对象。
所有类都直接或间接继承自 `Object`。
一个类只能有一个直接超类。
修饰符：

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/CS109-1.png' | relative_url }}{% raw %}" alt="CS109-1" loading="lazy">
子类会不会“继承“超类 `private` 成员具有争议。一个比较有共识的说法是，子类会继承超类的所有成员，但是会隐藏 `private` 成员。
子类可以通过 `super` 关键字调用（invoke）超类的构造方法。
没有标识符（no modifier）相当于 `package-private`。
使用  `extends` 关键字继承。

重写（Overriding）比如
```java
@Override
public String toString() {
	...
}
```
重写方法的访问级别只能比超类 **相同或更高**，例如，超类中的 `protected` 方法可以重写为 `public` 方法，但不能重写为 `private` 方法。
重写方法的返回值需要是超类返回类型的 **相同或子类型**。不过，如果父类方法的返回类型是基本数据类型（如 `int`, `double`）或 `void`，则子类重写方法的返回类型必须**完全相同**。

不可以重写超类的静态方法和实例变量。但是可以在子类中定义一个与超类实例变量名相同的变量 / 与超类静态方法签名一样的方法，来隐藏超类的这些方法和变量。

```java
class Parent {
    protected int value = 10;
    public static void staticMethod() {
        System.out.println("Parent static");
    }
}

class Child extends Parent {
	private int value = 20; // 隐藏父类的value

	public static void staticMethod() { // 隐藏父类的静态方法
		System.out.println("Child static");
	}

	public void printValues() {
		System.out.println(super.value); // 10（父类的value）
		System.out.println(this.value); // 20（子类的value）
	}
}
Parent.staticMethod(); // 输出 "Parent static"
Child.staticMethod(); // 输出 "Child static"

```

## 多态（Polymorphism）
{: #section-9 }

父类变量可以放子类对象。

使用多态时，如果子类和父类有同名的方法，那么调用的是子类还是父类的方法，取决于绑定的模式：
- 动态绑定 (Dynamic Binding)：方法调用基于运行时的实际类型，而不是变量的声明类型。
```java
Animal animal;
animal = new Fish(); // 隐式转换（Implicit Casting）
animal.move(); // 动态绑定，调用的是 Fish 的 move 方法
animal.swim(); // 编译错误，因为 animal 本身没有 swim 这个方法
if (animal instanceof Fish) {
	Fish fish = (Fish) Animal; // 显式转换（Explicit Casting）
	fish.swim(); // 可以正常运作
}
```
- 静态绑定（Static Binding）：当方法被定义为 `static / final / private`，方法调用基于引用变量的类型。
```java
// 考虑上面写的 Parent 和 Child 类，虽然子类隐藏了父类的 staticMethod 方法，但由于静态绑定，还是会调用父类的静态方法
Parent p = new Child();
p.staticMethod(); // 输出 "Parent static"
```

`final` 关键字：
- 可以修饰变量，让它变成常量，不能再修改；
- 可以修饰方法，让它不能被子类重写（`private / static` 方法都隐式声明为 ` final `）；
- 可以修饰类，让它不能被继承（`String / System` 都是 `final` 类）。

`abstract` 关键字：
- 修饰类，让它变成抽象类。包含抽象方法的类必须声明为抽象类。抽象类也可以不包含抽象方法，可以包含具体方法，也可以包含构造方法（但不能直接调用，只能被子类间接调用）。
- 修饰方法，规定方法必须被（不抽象的）子类实现。显然抽象方法不能是 `static` 或 `final` 的。
  ```java
  public abstract class Animal {
  	public abstract void move();
  }
  ```


## 接口（Interface）
{: #section-10 }

接口是一种特殊的类，与公共的抽象类类似。使用 `interface` 关键字。
接口不可以包含构造方法。
接口中的常量都隐式被 `public static final` 修饰。
接口可以包含抽象方法（Abstract） / 默认方法 （Default） / 静态方法 （Static）。如果没有指定，隐式为抽象方法。
不可以直接实例化一个接口，但接口变量可以指向实现了接口的类的实例。
```java
Payable p1 = new Alipay();
```
一个类只能继承 `extends`  一个类，但可以实现 ` implements `  很多个接口。

<img class="course-image" src="{% endraw %}{{ '/assets/courses/%E7%AC%94%E8%AE%B0%E4%BE%9D%E8%B5%96/%E5%9B%BE%E7%89%87/CS109%20-%205.png' | relative_url }}{% raw %}" alt="CS109 - 5" loading="lazy">


## 泛型（Generic Methods）
{: #section-11 }

注意 `T` 只能是引用类型。
```java
public static <T> void printArray(T[] array) {
	for (T element : array) {
		...
	}
}
```

```java
public static <T extends Comparable<T>> T maximum(T a, T b, T c) {
	T m = x;
	if (y.compareTo(m) > 0)	max = y;
	if (z.compareTo(m) > 0) max = z;
	return m;
}
```
注意这里的 `extends` 是实现的意思。

泛型类（Generic Classes）例如 `ArrayList<T>, Stack<T>`。
泛型只是语法糖，编译成字节码之后，泛型是不存在的，会自动进行类型转换（这个叫做擦除 Erasure）。

需要注意泛型的**类型安全**：
```java
String s = "abc";
Object o = s; // ok
List<String> ls = new ArrayList<String>();
List<Object> lo = ls; // compile error
```
也就是说，`List<String>` 并不是 `List<Object>` 的子类型。
要怎么遍历各种类型的 `List` 呢，除了使用泛型类型参数（Type Parameter）`T`，还可以使用通配符（Wildcard）`? ` 。
```java
public void processList(List<?> list) {
	for (Object element : list) {
		...
	}
}
```

今年不考异常处理。
{% endraw %}
