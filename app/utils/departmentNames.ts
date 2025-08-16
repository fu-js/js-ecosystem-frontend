import { Department } from "@prisma/client";

export default {
  [Department.BanChuyenMon]: "Ban Chuyên Môn",
  [Department.BanDoiNgoai]: "Ban Đối Ngoại",
  [Department.BanNoiDung]: "Ban Nội Dung",
  [Department.BanTruyenThong]: "Ban Truyền Thông",
  [Department.BanVanHoa]: "Ban Văn Hoá",
} as const;
