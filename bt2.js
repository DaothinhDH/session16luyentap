// 1. Viết function in ra câu “Xin chào Rikkei Academy”
// 2. Viết function tính bình phương của một số
// 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím.Biết thế kỷ
// thứ nhất tính từ năm 1 đến 100
// 4. Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu
// tiên và thêm vào dấu “…” ở cuối chuỗi
// 5. Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên.Ví dụ:
// “rIkKEi” sau khi chuẩn hóa thành “Rikkei”
// 6. Viết function trả ra giá trị lớn nhất trong một mảng số
// 7. Viết function kiểm tra số chẵn - lẻ, nguyên tố, hoàn hảo
// 8. Viết function trả ra trung bình cộng của một mảng số
// 9. Nhập vào một vào một số n, in ra n số nguyên tố tăng dần

// 1. Viết function in ra câu “Xin chào Rikkei Academy”
// function inXinChao() {
//     console.log("Xin chao RA");
// }
// inXinChao()
// 2. Viết function tính bình phương của một số
// function tinhBinhPhuong(number) {
//     return Math.pow(number, 2)
// }
// console.log(tinhBinhPhuong(4));
// console.log(tinhBinhPhuong(8));
// console.log(tinhBinhPhuong(0));

// 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ
// thứ nhất tính từ năm 1 đến 100

// let nam = Number(prompt("Nhap nam"))

// if (nam % 100 === 0) {
//     console.log(`Nam ${nam} thuoc the ky ${nam / 100}`);
// } else {
//     console.log(`Nam ${nam} thuoc the ky ${Math.ceil(nam / 100)}`);
// }

// 4. Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu
// tiên và thêm vào dấu “…” ở cuối chuỗi
//cách1:

// let chuoi = prompt("Nhap chuoi")

// function inChuoi(chuoi) {
//     if (chuoi.length < 15) {
//         console.log(chuoi);
//     } else {
//         // hàm slice áp dụng cho chuỗi, slice có chức năng cắt chuỗi từ vị trí nào và muốn cắt bao nhiêu
//         // VD: let chuoi = "mot chuoi rat la dai"
//         // VD: chuoi.slice(0, 15): cắt từ vị trí 0 và cắt 15 phần tử ==> "mot chuoi rat l"
//         // VD: chuoi.slice(5, 2): cắt từ vị trí 5 và cắt 2 phần tử ==> "uo"
//         chuoi = chuoi.slice(0, 15)
//         console.log(chuoi + "...");
//     }
// }
// inChuoi(chuoi)

//============================
// cách 2:
// let chuoiNhap = prompt("Nhap chuoi lon hon 15 ky tu")
// function catChuoi(chuoiNhap) {
//     let chuoiTraRa = ""
//     for (i = 0; i < 10; i++) {
//         chuoiTraRa += chuoiNhap[i]
//     }
//     return chuoiTraRa + "..."
// }

// console.log(catChuoi(chuoiNhap));



// 5. Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên.Ví dụ:
// “rIkKEi” sau khi chuẩn hóa thành “Rikkei”
// let arr = prompt("Nhập vào một chuỗi bất kì")
// function chuthuong(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

// }
// console.log(chuthuong(arr));

// 6. Viết function trả ra giá trị lớn nhất trong một mảng số;
// let arr = [3, 6, 9, 34, 67, 45]
// console.log(Math.max(...arr));

//  7. Viết function kiểm tra số chẵn - lẻ, nguyên tố, hoàn hảo


