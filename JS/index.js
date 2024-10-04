// 1.let keyword: Khai báo biến với phạm vi khối.
    
    // var / let , const : scope, hosting 
    // Const / Var, let : assignments

// 2. const keyword: Khai báo hằng số với phạm vi khối.


// 3. Arrow Functions: Hàm mũi tên với cú pháp ngắn gọn.

    const x = (x,y) => x * y ;

// 4. Destructuring Assignment: {a, b} = ... để gán giá trị từ đối tượng.

    const person = {
        firstname : "John",
        lastname : "Doe",
        age : 30,
        eyeColor : "blue"
    }

    const {firstname, lastname} = person;

    console.log(firstname , lastname);
    console.log(person.firstname);
    

// 4. Destructuring Assignment: [a, b] = ... để gán giá trị từ mảng.
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    let [fruit1, fruit2] = fruits;

    console.log(fruit1 ,fruit2);
    console.log(fruits[0]);

// 5. Spread Operator (...): Mở rộng mảng hoặc đối tượng.

    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Apr", "May", "Jun"];
    const q3 = ["Jul", "Aug", "Sep"];
    const q4 = ["Oct", "Nov", "May"];

    const quarters = [...q1,...q2,...q3,...q4];
    console.log(quarters);
    
    const numbers = [23,55,21,87,56];
    let maxValue = Math.max(...numbers);
    console.log(maxValue);
    


// 6. For/of: Vòng lặp qua các giá trị của một iterable.

    const arr1 = [1,2,3,4,5]

    for(let value of arr1){
        console.log(value);
    }

    const mystring = 'hello';

    for(let char of mystring){
        console.log(char);
    }

    const map = new Map();
    map.set('one', 1);
    map.set('two', 2);

    for(let [key, value] of map){
        console.log(key, value);
    }

    const object = { a: 1, b: 2, c: 3 };

    for(let key in object){
        console.log(key);
    }



    const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 }
      ];
      
      for (const user of users) {
        console.log(user.name);
      }
      

// 7. Map Objects: Cấu trúc dữ liệu lưu trữ cặp khóa-giá trị.

// Lưu được cái kiểu giá trị khác nhau 
    
    const map2 = new Map();
    map2.set('name', 'John');
    map2.set('age', 30);

    console.log(map2.has('name'));
    console.log(map2.has('address'));
    
    // xóa 
    map2.delete('name');
    console.log(map2.has('name'));
    
    // lấy giá trị
    console.log(map2.get('age'));
    
    // duyệt
    for(let [key, value] of map2){
        console.log(key, value);
    }

    // size 
    console.log(map2.size);
    
    // xóa all
    map2.clear();
    console.log(map2.size);

// 8. Set Objects: Cấu trúc dữ liệu lưu trữ các giá trị duy nhất.
    // giống array nhưng chỉ lưu các phần tử không trùng lặp

// 9. Classes: Định nghĩa lớp và kế thừa.
    // Giống class và extend của java 
    // Nhưng cú pháp khác nhau
    // Ví dụ:
    class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      
        greet() {
          console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
      }
    const person1 = new Person ('John', '30');
    person1.greet();
    
    // kết thừa: 
    class Employee extends Person {
        constructor(name, age, department) {
            super(name, age);
            this.department = department;
    }
        work() {
            console.log(`${this.name} is working as a ${this.jobTitle}.`);
          }
      }

    const employee1 = new Employee('John', '30', 'Sales');
    employee1.greet();
    employee1.work();
    
      // Phương thức tĩnh của class : có thể gọi mà k cần tạo đối tượng

    class MathUtils {
        static add(a, b) {
            return a + b;
        }

    }
    console.log(MathUtils.add(5,3));
    
    // Thuộc tính tĩnh : Định nghĩa trựa tiếp trên lớp k cần trên đối tượng 

    class config {
        static apiURL = "http://localhost/config";
    }

    console.log(config.apiURL);
    
    // Cũng có getter + setter 

    class home {
        constructor(width, height ) {
            this.width = width;
            this.height = height;
        }

        get area (){
            return this.width*this.height;
        }

        set area (value) {
            this.width = this.height = Math.sqrt(value);
        }
    }
    const rect = new home(4,5);
    console.log(rect.area);

    rect.area = 25;
    console.log(rect.width, rect.height);



// 10. Promises: Quản lý các hoạt động bất đồng bộ.

 // 3 trạng thái : pending, perfused , reject 

    var prompts = new Promise((resolve, reject) =>{
        // Logic
        // Thành công : resolve
        // Thất bại : reject

        // reject('co loi ');
        resolve('John');
    })
    prompts
    .then((name) => {
        console.log(`Hello, ${name}!`);
    })
   .catch((error) => {
     console.log(error);
    })
    .finally(() => {
        console.log("Promise finished!");
    })


    // Chain :  (Tính chất chuỗi)

    var prompts = new Promise((resolve, reject) => {
        resolve();
    })

    prompts
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([1,2,3]);
            }, 2000);
        });
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise finished!");
    });

    // 
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // sleep(1000)
    // .then(() => {
    //     console.log(1);
    //     return sleep(1000);
    // })
    // .then(() => {
    //     console.log(2);
    //     return sleep(1000);
    // })
    // .then(() => {
    //     console.log(3);
    //     return sleep(1000);
    // })
    
    // .then(() => {
    //     console.log(4);
    //     return sleep(1000);
    // })
    
    // .then(() => {
    //     console.log(5);
    //     return sleep(1000);
    // })
    

    // Promise.resolve
    // Promise.reject
    // Promise.all

    var prompts = new Promise((resolve, reject) => {
        resolve('John');
    })

    // resolve promise
    var prompts = Promise.resolve('dâdaa');
    prompts.then((data) => {
        console.log(data);
        
    })

    // reject promise
    var prompts = Promise.reject('Lỗi');
    prompts.then((data) => {
        console.log(data);
        
    })
   .catch((error) => {
    console.log(error);
    
   })

   // promise.all

   var promise1 = new Promise(
        function(resolve){
            setTimeout(function(){
                resolve([1]);
            },1000);
        }
   );

//    var promise2 = new Promise(
//     function(resolve){
//             setTimeout(function(){
//                 resolve([2,3]);
//             },2000);
//         }
//     );

   var promise2 = Promise.reject();

    Promise.all([promise1, promise2])
   .then(([result1, result2]) => {
       console.log(result1.concat(result2));
   })
   .catch((error) => {
        console.log(error);
    });



// 11. Symbol: Tạo ra các giá trị duy nhất.
// Tạo biến duy nhất
    var glucose = Symbol('Suga');
    var protein = Symbol('Suga');
    console.log(glucose === protein); // false


// 12. Default Parameters: Đặt giá trị mặc định cho tham số hàm.

    function multiply(a = 1, b = 1) {
        return a * b;
    }
    
    console.log(multiply()); // Output: 1
    console.log(multiply(5)); // Output: 5
    console.log(multiply(5, 2)); // Output: 10

    function incorrectOrder(a = 1, b) {
        // Lỗi: Tham số không có giá trị mặc định không thể đứng sau tham số có giá trị mặc định
      }


      
    

// 13. Function Rest Parameter: Thu thập các tham số còn lại vào một mảng.

    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    
    console.log(sum(10, 20, 30)); // Output: 60
  

    // Nối chuỗi 

    function concatenate(separator, ...strings) {
        return strings.join(separator);
      }
      
    console.log(concatenate(', ', 'apple', 'banana', 'cherry'));
    // Output: 'apple, banana, cherry'
      

      // Min max

      function findMax(...numbers) {
        return Math.max(...numbers);
      }
      
      console.log(findMax(10, 20, 30, 5, 15)); // Output: 30
      

      // Hỗ trợ các phương thức mảng

      function oldSum() {
        const args = Array.prototype.slice.call(arguments);
        return args.reduce((total, num) => total + num, 0);
      }
      
      console.log(oldSum(1, 2, 3)); // Output: 6
      

// 14. String.includes(): Kiểm tra xem chuỗi có chứa một chuỗi con hay không.

    const text1 = "Hello world, welcome to the universe.";
    console.log(text1.includes("world")); // Output: true
    console.log(text1.includes("World")); // Output: false (case-sensitive)


// 15. String.startsWith(): Kiểm tra xem chuỗi có bắt đầu bằng một chuỗi con hay không.

    const text2 = "Hello world, welcome to the universe.";
    console.log(text2.startsWith("Hello")); // Output: true
    console.log(text2.startsWith("hello")); // Output: false (case-sensitive)

// 16. String.endsWith(): Kiểm tra xem chuỗi có kết thúc bằng một chuỗi con hay không.
    const text3 = "Hello world, welcome to the universe";
    console.log(text3.endsWith("universe")); // Output: true
    console.log(text3.endsWith("hello"));

// 17. Array.entries(): Trả về một iterator chứa các cặp [index, value].
      // Gần giống với map(java) nhưng k phải giá trị duy nhất

    const array1 = ['a', 'a', 'c'];

    for (const [index, value] of array1.entries()) {
    console.log(index, value);
    }
    // Output:
    // 0 'a'
    // 1 'b'
    // 2 'c'

    const array2 = [1, 2, 3];
    const newArray = array2.map(x => x * 2);

    console.log(newArray); // Output: [2, 4, 6]




// 18. Array.from(): Tạo một mảng từ một đối tượng giống mảng hoặc iterable.
    
    // Tạo mảng mới từ 1 đối tượng giống mảng hoặc iterable mà k cần dùng for
    // Chuyển đổi chuỗi thành mảng ký tự 
    const str = 'hello dlqld qdqd';
    const arra1 = Array.from(str);
    console.log(arra1); // Output: ['h', 'e', 'l', 'l', 'o']


    // 
    
    const set = new Set(['a', 'b', 'c']);
    const arr2 = Array.from(set);
    console.log(arr2); // Output: ['a', 'b', 'c']



// Array.keys(): Trả về một iterator chứa các khóa của mảng.

    const array = ['a', 'b', 'c'];

    for (const key of array.keys()) {
    console.log(key);
    }

    // Output:
    // 0
    // 1
    // 2




// Array.find(): Trả về giá trị đầu tiên trong mảng thỏa mãn điều kiện.
    // trả về giá trị đúng k cần dùng for 

    const arr4 = [5, 12, 8, 130, 44];

    const found = arr4.find(element => element > 10);

    console.log(found); // Output: 12


// Array.findIndex(): Trả về chỉ số của giá trị đầu tiên trong mảng thỏa mãn điều kiện.
    // Cũng trả về key của giá trị k cần dùng for
    const arr5 = [5, 12, 8, 130, 44];

    const foundkey = arr5.findIndex(element => element > 10);

    console.log(foundkey); // Output: 12

// Math.trunc(): Loại bỏ phần thập phân của một số.

    console.log(Math.trunc(4.9)); // Output: 4
    console.log(Math.trunc(-4.9)); // Output: -4

    
// Math.sign(): Trả về dấu của một số.

    console.log(Math.sign(3)); // Output: 1
    console.log(Math.sign(-3)); // Output: -1
    console.log(Math.sign(0)); // Output: 0
    console.log(Math.sign(-0)); // Output: -0
    console.log(Math.sign(NaN)); // Output: NaN


// Math.cbrt(): Tính căn bậc ba của một số.
    console.log(Math.cbrt(27)); // Output: 3

    // Math.hypot(): Tính căn bậc hai của trunng bình phương của các số.
    console.log(Math.hypot(3, 4)); // Output: 5

   
// Math.log2(): Tính logarit cơ số 2 của một số.
// Math.log10(): Tính logarit cơ số 10 của một số.


// Number.EPSILON: Độ chính xác nhỏ nhất giữa hai số dấu phẩy động.
    console.log(Number.EPSILON); // Output: 2.220446049250313e-16


// Number.MIN_SAFE_INTEGER: Số nguyên nhỏ nhất an toàn.
    console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

// Number.MAX_SAFE_INTEGER: Số nguyên lớn nhất an toàn.
    console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991


// Number.isInteger(): Kiểm tra xem giá trị có phải là số nguyên hay không.

    console.log(Number.isInteger(4)); // Output: true
    console.log(Number.isInteger(4.5)); // Output: false

// Number.isSafeInteger(): Kiểm tra xem giá trị có phải là số nguyên an toàn hay không.

    console.log(Number.isSafeInteger(9007199254740991)); // Output: true
    console.log(Number.isSafeInteger(9007199254740992)); // Output: false


// New Global Methods: Các phương thức toàn cục mới.

    // Number.isNaN(): Kiểm tra xem giá trị có phải là NaN hay không.
    // Number.isFinite(): Kiểm tra xem giá trị có phải là số hữu hạn hay không.
    // Object.assign(): Sao chép các giá trị của tất cả các thuộc tính có thể liệt kê từ một hoặc nhiều đối tượng nguồn đến một đối tượng đích.
    // Object.is(): So sánh hai giá trị để kiểm tra xem chúng có giống nhau không.


// JavaScript Modules: Sử dụng import và export để quản lý mã

    // module.js
    export const name = 'John';
    export function sayHello() {
    console.log('Hello');
    }


    // main.js
    import { name, sayHello } from './module.js';

    console.log(name); // Output: John
    sayHello(); // Output: Hello
