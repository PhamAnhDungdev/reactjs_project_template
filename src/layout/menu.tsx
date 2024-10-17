import { DataLineageIcon, DocumentShareIcon, DotIcon, BookmarkIcon, FlashIcon, ShoppingCartIcon, FlowsIcon, CreditCardIcon } from "evergreen-ui";

export const menuItems = [
  {
    title: "Quản lý",
    icon: <DataLineageIcon />,
    children: [
      {
        title: "Mô hình Topsim",
        icon: <DotIcon />,
        path: "/manage/topsim-model"
      },
      {
        title: "Quản lý người dùng",
        icon: <DotIcon />,
        path: "/manage/users"
      }
    ]
  },
  {
    title: "Ticket",
    icon: <BookmarkIcon />,
    children: [
      {
        title: "Danh sách",
        icon: <DotIcon />,
        path: "/ticket/list"
      },
    ]
  },
  {
    title: "Cơ hội",
    icon: <FlashIcon />,
    children: [
      {
        title: "Danh sách",
        icon: <DotIcon />,
        path: "/opportunity/list"
      }
    ],
  },
  {
    title: "Đơn hàng",
    icon: <ShoppingCartIcon />,
    children: [
      {
        title: "Danh sách",
        icon: <DotIcon />,
        path: "/order/list"
      },
      {
        title: "Hoàn trả đơn hàng",
        icon: <DotIcon />,
        path: "/order/return"
      }
    ],
  },
  {
    title: "Giao dịch",
    icon: <FlowsIcon />,
    children: [
      {
        title: "Danh sách gói",
        icon: <DotIcon />,
        path: "/trader/package"
      },
      {
        title: "Danh sách đơn hàng",
        icon: <DotIcon />,
        path: "/trader/order"
      },
      {
        title: "COD không ở Thành Công",
        icon: <DotIcon />,
        path: "/trader/cod"
      },
      {
        title: "Chuyển đang giao COD",
        icon: <DotIcon />,
        path: "/trader/shipping-cod"
      },
      {
        title: "Chia khu vực giao SIM",
        icon: <DotIcon />,
        path: "/trader/auto-divide-shipper"
      },
      {
        title: "Đơn thất bại COD",
        icon: <DotIcon />,
        path: "/trader/fail-cod"
      },
    ],
  },
  {
    title: "GD kế toán",
    icon: <CreditCardIcon />,
    children:[
      {
        title: "Thanh toán đơn hàng",
        icon: <DotIcon />,
        path: "/transaction-accounting/payment"
      },
      {
        title: "Hoàn trả đơn hàng",
        icon: <DotIcon />,
        path: "/transaction-accounting/list-refund"
      },
      {
        title: "Excel COD",
        icon: <DotIcon />,
        path: "/transaction-accounting/excel"
      },
      {
        title: "Thanh toán - Excel",
        icon: <DotIcon />,
        path: "/transaction-accounting/deal-excels"
      },
      {
        title: "Thanh toán công nợ Excel",
        icon: <DotIcon />,
        path: "/transaction-accounting/payment-debit-excel"
      },
      {
        title: "Hủy COD - Excel",
        icon: <DotIcon />,
        path: "/transaction-accounting/cancel-cod-excel"
      },
      {
        title: "Thanh toán khối ngoài VP",
        icon: <DotIcon />,
        path: "/transaction-accounting/payment-outside"
      },
      {
        title: "Xuất Excel",
        icon: <DotIcon />,
        path: "/transaction-accounting/export-excel"
      }
    ]
  },
  // {
  //   title: "Quản lý tài liệu",
  //   path: "/medias",
  //   icon: <FolderSharedIcon />
  // },
  {
    title: "Tài liệu hướng dẫn",
    path: "/instructions",
    icon: <DocumentShareIcon />
  },
];
