import { Collection, PhilosophyItem, WorkflowStep, Project, Testimonial } from "./types";

import collection1 from "./assets/collection/collection1.jpg";
import collection2 from "./assets/collection/collection2.jpg";
import collection3 from "./assets/collection/collection3.jpg";
import collection4 from "./assets/collection/collection4.jpg";

export const BRAND_INFO = {
  name: "Mars Group",
  tagline: "Heritage & Grace",
  hotline: "0903 731 769",
  email: "tina@mars-vn.com",
  address: "District 2, Ho Chi Minh City, VietNam",
};

export const COMPANY_STATS = [
{
value: "34",
label: "Tỉnh thành phục vụ",
},
{
value: "298+",
label: "Doanh nghiệp",
},
{
value: "1.000.000+",
label: "Quà tặng mỗi năm",
},
{
value: "18+",
label: "Năm kinh nghiệm",
},
];

export const NAVIGATION_LINKS = [
{ label: "Sản Phẩm", href: "#collections" },
{ label: "Năng Lực", href: "#our-story" },
{ label: "Câu Chuyện", href: "#philosophy" },
{ label: "Dự Án", href: "#capabilities" },
{ label: "Liên Hệ", href: "#contact" },
];

export const COLLECTIONS: Collection[] = [
{
id: "customer-gifts",
title: "Quà Khách Hàng",
tagline: "Tăng độ ghi nhớ thương hiệu",
icon: "Users",
description:
"Giải pháp quà tặng giúp doanh nghiệp xây dựng mối quan hệ bền vững và tạo trải nghiệm tích cực cho khách hàng.",
image: collection1,
url: "https://fesgift.com/qua-tang-doanh-nghiep/qua-tang-cham-soc-khach-hang/",
badge: "KHÁCH HÀNG",
highlights: [
"Giftset theo nhận diện thương hiệu",
"Bao bì thiết kế riêng",
"Tăng độ ghi nhớ thương hiệu",
],
},

{
id: "event-gifts",
title: "Quà Sự Kiện",
tagline: "Đồng bộ mọi chiến dịch",
icon: "CalendarDays",
description:
"Phù hợp cho hội nghị, workshop, activation, lễ ra mắt sản phẩm và các chương trình truyền thông doanh nghiệp.",
image: collection2,
url: "https://fesgift.com/qua-tang-doanh-nghiep/qua-tang-su-kien/",
badge: "SỰ KIỆN",
highlights: [
"Sản xuất số lượng lớn",
"Đồng bộ concept chương trình",
"Tiến độ triển khai nhanh",
],
},

{
id: "vip-gifts",
title: "Quà VIP",
tagline: "Khẳng định đẳng cấp đối tác",
icon: "Crown",
description:
"Dòng quà tặng cao cấp dành cho đối tác chiến lược, khách hàng quan trọng và các chương trình tri ân đặc biệt.",
image: collection3,
url: "https://fesgift.com/qua-tang-ca-nhan/qua-theo-nguoi-nhan-qua-tang-ca-nhan/cho-vip-cua-ban-qua-theo-nguoi-nhan-qua-tang-ca-nhan/",
badge: "VIP",
highlights: [
"Thiết kế sang trọng",
"Cá nhân hóa theo yêu cầu",
"Nâng tầm hình ảnh doanh nghiệp",
],
},

{
id: "employee-gifts",
title: "Quà Đội Ngũ",
tagline: "Gắn kết và truyền cảm hứng",
icon: "UsersRound",
description:
"Welcome Kit, quà sinh nhật, lễ tết và các chương trình nội bộ giúp nâng cao trải nghiệm nhân sự.",
image: collection4,
url: "https://fesgift.com/qua-tang-doanh-nghiep/qua-gan-ket-doi-ngu/",
badge: "NỘI BỘ",
highlights: [
"Welcome Kit",
"Quà sinh nhật nhân viên",
"Quà lễ tết doanh nghiệp",
],
},
];

