"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/local";
mongoose_1.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.BookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Book = mongoose_1.model("Book", exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWxsaW90L0RvY3VtZW50cy9Qcm9qZWN0cy9UdXRvcmlhbEVkZ2UvUHJvamVjdHMvVHlwZVNjcmlwdC90eXBlc2NyaXB0LW1vbmdvZGItdHV0b3JpYWwvc3JjLyIsInNvdXJjZXMiOlsiYm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrRDtBQUVsRCxJQUFNLEdBQUcsR0FBVyxpQ0FBaUMsQ0FBQztBQUV0RCxrQkFBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVE7SUFDcEIsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBQ3hDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFVSxRQUFBLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDbkMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3ZDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUN6QyxDQUFDLENBQUM7QUFFSCxJQUFNLElBQUksR0FBRyxnQkFBSyxDQUFDLE1BQU0sRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFDdkMsa0JBQWUsSUFBSSxDQUFDIn0=