import { Package, Users, BarChart3, Globe, Smartphone, Database } from "lucide-react"

export const mainFeatures = [
  {
    id: "inventory",
    label: "Inventory",
    title: "Smart Inventory Management",
    icon: Package,
    desc: "Take full control of your stock with a powerful inventory system designed to eliminate guesswork, reduce losses, and increase profitability.",
    tags: ["Multi-Warehouse", "Barcode", "Auto-Reorder"],
    image: "/images/inventory-demo.jpg",
    details: [
      "Real-time stock levels — auto-updated on every sale, purchase, return, or transfer",
      "Multi-location control — separate tracking per branch with easy internal transfers",
      "Low-stock alerts with configurable thresholds — never run out of best-sellers",
      "Barcode scanning — add stock, process sales, and count inventory in seconds",
      "Product variants — manage sizes, colors, and models under one parent product",
      "Reports & export — sales performance, stock valuation, and movement history",
    ],
  },
  {
    id: "crm",
    label: "CRM",
    title: "Customer Relationships",
    icon: Users,
    desc: "A centralized CRM system designed to give you complete visibility over your sales pipeline, customer interactions, and revenue performance.",
    tags: ["Sales Pipeline", "Deal Tracking", "Activity Log"],
    image: "/images/crm-demo.jpg",
    details: [
      "Sales pipeline view — track leads, proposals, negotiations, and closed deals",
      "Customer profiles — contact info, purchase history, deal values, and internal notes",
      "Deal tracking — size, stage, probability scoring, and expected close dates",
      "Activity timeline — logged calls, meetings, emails, and scheduled reminders",
      "Task management — automated reminders, role-based assignments, deadline tracking",
      "Sales reports — conversion rates, rep performance, average deal size, revenue targets",
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Advanced Analytics",
    icon: BarChart3,
    desc: "Transform raw operational data into clear, strategic intelligence. Real-time visibility, professional reporting, and actionable insights.",
    tags: ["Real-Time Dashboards", "Custom Reports", "Business Insights"],
    image: "/images/dashboard-demo.jpg",
    details: [
      "Professional reports — Revenue by Category, ABC Classification, Stock Heatmap",
      "Real-time analytics — sales velocity, inventory movements, revenue fluctuations",
      "Role-based dashboards — sales, operations, management, and marketing views",
      "Business insights — identify high-margin products, detect slow-moving inventory",
      "Automated alerts — low stock, revenue thresholds, sales targets, discount variance",
      "Download & upload — export CSV/PDF, import bulk data, integrate with existing systems",
    ],
  },
]

export const additionalFeatures = [
  { icon: Globe, title: "Multi-Location", desc: "Manage multiple warehouses, storefronts, and teams from one centralized dashboard." },
  { icon: Smartphone, title: "Mobile-First", desc: "Responsive design optimized for mobile devices. Manage your business from anywhere." },
  { icon: Database, title: "Data Export", desc: "Export your data anytime. CSV, PDF, and custom format support for all reports." },
]
