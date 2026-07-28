import story1 from "../assets/story1.jpg";
import story1_2 from "../assets/story1-2.jpg";
import story1_3 from "../assets/story1-3.jpg";
import story2 from "../assets/story2.jpg";
import story2_2 from "../assets/story2-2.jpg";
import story2_3 from "../assets/story2-3.jpg";
import story2_4 from "../assets/story2-4.jpg";
import story2_5 from "../assets/story2-5.jpg";
import story3 from "../assets/story3.jpg";
import story3_2 from "../assets/story3-2.jpg";
import story3_3 from "../assets/story3-3.jpg";
import story3_4 from "../assets/story3-4.jpg";
import story3_5 from "../assets/story3-5.jpg";
import story4 from "../assets/story4.jpg";
import story41 from "../assets/story4-1.jpg";
import story4video1 from "../assets/story4.mp4";
import story4video2 from "../assets/story4-2.mp4";


export interface Story {
  id: number;
  title: string;
  cardTitle: string;
  cardImage: string;
  tag: string;
  images: string[];
  videos?: string[];
  imageFit?: "cover" | "contain";
  description: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Kết nối cùng Generali",
    cardTitle: "Kết nối cùng Generali",
    cardImage: story1,
    tag: "Đối tác",
    images: [story1, story1_2, story1_3],
    imageFit: "contain",
    description:
      "Mars Group vinh dự đồng hành cùng Generali trong hành trình “Kết nối trăm điểm tin cậy”, mang không khí sôi động đến các văn phòng GenCasa trên toàn quốc. Với sản phẩm LEO nhồi bông và LEO móc khóa được thiết kế đồng bộ, chúng tôi góp phần lan tỏa thông điệp tích cực và tạo nên những trải nghiệm đáng nhớ cho khách hàng, đối tác và đội ngũ Generali.",
  },
  {
    id: 2,
    title: "365 ngày - Không bỏ lỡ một sinh nhật nào",
    cardTitle: "365 ngày - Không bỏ lỡ một sinh nhật nào",
    cardImage: story2,
    tag: "Khách hàng",
    images: [story2, story2_2, story2_3, story2_4, story2_5],
    imageFit: "cover",
    description:
      "Mỗi món quà được gửi đúng dịp không chỉ là lời chúc mừng mà còn là cầu nối giữa doanh nghiệp và khách hàng. Với hệ thống quản lý ngày đặc biệt cùng mạng lưới giao hoa tại 34 tỉnh thành, Mars Group giúp thương hiệu của quý khách luôn hiện diện trong những khoảnh khắc ý nghĩa.",
  },
  {
    id: 3,
    title: "Sự chăm chút của Mars Group",
    cardTitle: "Sự chăm chút của Mars Group",
    cardImage: story3,
    tag: "Nội bộ",
    images: [story3_2, story3_3, story3_4, story3_5],
    imageFit: "cover",
    description:
      "Phía sau mỗi sản phẩm là những ngày làm việc khẩn trương của đội ngũ Mars Group. Khi thời gian gấp rút, các bộ phận luôn sát cánh hỗ trợ nhau để hoàn thành từng công đoạn đúng kế hoạch, từ sản xuất, kiểm tra chất lượng đến đóng gói. Chính tinh thần đồng đội ấy giúp mỗi đơn hàng được bàn giao đúng tiến độ mà vẫn giữ trọn sự chỉn chu trong từng chi tiết.",
  },
  {
    id: 4,
    title: "Biến ý tưởng thành biểu tượng thương hiệu",
    cardTitle: "Biến ý tưởng thành biểu tượng thương hiệu",
    cardImage: story41,
    tag: "Thương hiệu",
    images: [story4],
    videos: [
      story4video1,
      story4video2,
  ],
    imageFit: "cover",
    description:
      "Nhân dịp kỷ niệm 51 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30/4), Mars Group đã đồng hành cùng khách hàng tạo nên những mẫu mascot được thiết kế riêng theo bộ nhận diện thương hiệu, mang đậm dấu ấn doanh nghiệp và tinh thần của sự kiện.",
  },
];