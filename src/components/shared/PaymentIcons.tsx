export default function PaymentIcons() {
  const methods = [
    { name: "Visa", bg: "#1A1F71", text: "#FFFFFF", label: "VISA" },
    { name: "Mastercard", bg: "#EB001B", text: "#F79E1B", label: "MC" },
    { name: "PayPal", bg: "#003087", text: "#009CDE", label: "PayPal" },
    { name: "Klarna", bg: "#FFB3C7", text: "#17120F", label: "Klarna" },
    { name: "Apple Pay", bg: "#000000", text: "#FFFFFF", label: "Pay" },
    { name: "Google Pay", bg: "#FFFFFF", text: "#5F6368", label: "GPay" },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {methods.map((m) => (
        <span
          key={m.name}
          className="inline-flex items-center justify-center rounded px-2 py-1 text-[10px] font-bold"
          style={{ backgroundColor: m.bg, color: m.text, minWidth: 36, minHeight: 22 }}
          aria-label={m.name}
        >
          {m.label}
        </span>
      ))}
    </div>
  );
}
