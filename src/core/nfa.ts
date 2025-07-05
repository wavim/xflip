export class NFA {
	transit: Map<string, number[]>[] = [];

	epsilon(states: number[]): Set<number> {
		const stack = states;
		const closure = new Set(stack);

		let start: number | undefined;

		while ((start = stack.pop()) !== undefined) {
			const ends = this.transit[start].get("") ?? [];

			for (const end of ends.filter((s) => !closure.has(s))) {
				stack.push(end);
				closure.add(end);
			}
		}

		return closure;
	}
}
