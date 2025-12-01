// Helper para formatear números con separador de miles
export function formatNumber(value, locale = "es-CL") {
	if (value == null) return "";
	if (typeof value === "number") return value.toLocaleString(locale);
	// si ya viene formateado o es string
	const num = Number(String(value).replace(/[^0-9.-]+/g, ""));
	return Number.isFinite(num) ? num.toLocaleString(locale) : String(value);
}

export default formatNumber;
