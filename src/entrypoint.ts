import type { Alpine } from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";

export default (Alpine: Alpine) => {
	Alpine.plugin(intersect);
	Alpine.plugin(persist);
};
