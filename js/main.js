// tạo một biến lưu danh sach lop gom 9 phần tử là thành viên của nhóm mình bao gồm các thông tin(họ và tên, giới tính, nơi sinh)
// dùng javascript để in danh sách đó ra html
// Hàm tạo 9 đối tượng
// Dữ liệu ban đầu
function thanh_vien(){
    const a = [
        {hoten: "Nguyen Viet Hoang An", gioitinh: "Nam", noisinh: "Ha Tay"},
        {hoten: "Lai Van Hung", gioitinh: "Nam", noisinh: "Thanh Hoa"},
        {hoten: "Nguyen Ngoc Bich", gioitinh: "Nu", noisinh: "Ha Noi"},
        {hoten: "Vu Van Luan", gioitinh: "Nam", noisinh: "Nam Dinh"},       
        {hoten: "Nguyen Viet Anh", gioitinh: "Nam", noisinh: "Thanh Hoa"},
        {hoten: "Nguyen Ngoc Linh", gioitinh: "Nu", noisinh: "Ha Noi"},
        {hoten: "Tran Duy Hung", gioitinh: "Nam", noisinh: "Ha Noi"}, 
    ]
    var cnt = 0;
    for(var i = 0; i < a.length; i++){
        cnt ++;
        document.write( cnt, '.', a[i].hoten + "-", a[i].gioitinh + "-",  a[i].noisinh, "<br>");
    }
}
thanh_vien();
var doi = function(){
    var do_C = document.getElementById("swap").value;
    var do_F = do_C * (9/5) + 32;
    document.getElementById("swapped").value = do_F;
}
document.addEventListener('DOMContentLoaded', function(){
    var but = document.getElementById("but");
    but.addEventListener('click', doi);
})
function calculateRectangleArea(){
    var cd = parseFloat(document.getElementById('cd').value);
    var cr = parseFloat(document.getElementById('cr').value);
    var dt = cd * cr;
    console.log(dt);
    document.getElementById('dt').value = dt;
}
document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('btn');
    btn.addEventListener('click', calculateRectangleArea);
});
function calculateTriangleArea(){
    var cs = document.getElementById('cs').value;
    var cc = document.getElementById('cc').value;
    var dt = (cs * cc)/2;
    document.getElementById('dttg').value = dt;
}
document.addEventListener('DOMContentLoaded',function(){
    var butt = document.getElementById('butt');
    butt.addEventListener('click', calculateTriangleArea); 
});
function calculateSquareArea(){
    var canh = document.getElementById("chv").value;
    var dthv = canh * canh;
    document.getElementById("dthv").value = dthv;
}
document.addEventListener('DOMContentLoaded', function(){
    var bton = document.getElementById('bton');
    bton.addEventListener('click', calculateSquareArea);
});