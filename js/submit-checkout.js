const scriptUrl ="https://script.google.com/macros/s/AKfycbwaiH_XxC32KalzjZL2wWup0Bx-BWB_SY1sjfSpjEhQrJ11FFowrIbzEYhkBMEAz9UIsQ/exec"

let form = document.getElementById('form-contact')
form.addEventListener("submit" , (e) => {
    e.preventDefault()

    fetch(scriptUrl , {
        method: "POST",
        body: new FormData(form),
    }).then((response) =>{
            localStorage.removeItem('cart')
            window.location.reload()

    }).catch((error) => console.error("error ! " , error.message))

})





// function saveToExcel() {


//     const file = "orders.xlsx";
//     const workbook = XLSX.readFile(file);

//     // تحديد الورقة الأولى
// const sheetName = workbook.SheetNames[0];
// const worksheet = workbook.Sheets[sheetName];
    
// // 1. الحصول على القيم من الحقول

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const address = document.getElementById("address").value;

//     const items = document.getElementById("items").value;
//     const total_price = document.getElementById("total-price").value;
//     const count_items = document.getElementById("count-items").value;

//     if (!name || !email || !phone || !address) {
//         alert("يرجى ملء جميع الحقول قبل الحفظ!");
//         return;
//     }

//     // 2. إنشاء بيانات الجدول
//     // const data = [
//     //     ["الاسم", "البريد الإلكتروني", "رقم الهاتف", "العنوان"],
//     //     [name, email, phone, address, items, total_price, count_items]
//     // ];

//     const newRow = [name, email, phone, address, items, total_price, count_items];
//     jsonData.push(newRow);

//     // تحويل البيانات المحدثة إلى ورقة عمل جديدة
// const newWorksheet = XLSX.utils.json_to_sheet(jsonData);

// // تحديث المصنف وحفظه
// workbook.Sheets[sheetName] = newWorksheet;
// XLSX.writeFile(workbook, file)




//     localStorage.removeItem('cart')
//     window.location.reload()
// }


    // // 3. تحويل البيانات إلى ورقة عمل (Worksheet)
    // const ws = XLSX.utils.aoa_to_sheet(data);

    // // 4. إنشاء مصنف (Workbook) وإضافة ورقة العمل
    // const wb = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, "المستخدمون");

    // // 5. حفظ الملف وتحميله للمستخدم
    // XLSX.writeFile(wb, "UserData.xlsx");

    // alert("تم حفظ البيانات في ملف Excel!");





// // تحويل البيانات إلى JSON (اختياري)
// const jsonData = XLSX.utils.sheet_to_json(worksheet);
// console.log(jsonData); // عرض البيانات قبل التعديل

// // إضافة صف جديد
















// const file = "orders.xlsx";  // اسم الملف
// const workbook = XLSX.readFile(file);

// // تحديد الورقة الأولى
// const sheetName = workbook.SheetNames[0];
// const worksheet = workbook.Sheets[sheetName];

// // إضافة صف جديد
// let form_contact = document.getElementById('form-contact')
// form.addEventListener("submit", (e) => {
//     const newRow = new FormData(form_contact);
//     jsonData.push(newRow);

//     // تحويل البيانات المحدثة إلى ورقة عمل جديدة
//     const newWorksheet = XLSX.utils.json_to_sheet(jsonData);

//     // تحديث المصنف وحفظه
//     workbook.Sheets[sheetName] = newWorksheet;
//     XLSX.writeFile(workbook, file)

//     localStorage.removeItem('cart')
//     window.location.reload()
// })







