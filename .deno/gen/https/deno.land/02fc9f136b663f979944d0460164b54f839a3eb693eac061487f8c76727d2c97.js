// Ported from js-yaml v3.13.1:
// https://github.com/nodeca/js-yaml/commit/665aadda42349dcae869f12040d9b10ef18d12da
// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { Type } from "../type.ts";
export const str = new Type("tag:yaml.org,2002:str", {
    construct (data) {
        return data !== null ? data : "";
    },
    kind: "scalar"
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzNC4wL2VuY29kaW5nL195YW1sL3R5cGUvc3RyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFBvcnRlZCBmcm9tIGpzLXlhbWwgdjMuMTMuMTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvanMteWFtbC9jb21taXQvNjY1YWFkZGE0MjM0OWRjYWU4NjlmMTIwNDBkOWIxMGVmMThkMTJkYVxuLy8gQ29weXJpZ2h0IDIwMTgtMjAyMiB0aGUgRGVubyBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgbGljZW5zZS5cblxuaW1wb3J0IHsgVHlwZSB9IGZyb20gXCIuLi90eXBlLnRzXCI7XG5cbmV4cG9ydCBjb25zdCBzdHIgPSBuZXcgVHlwZShcInRhZzp5YW1sLm9yZywyMDAyOnN0clwiLCB7XG4gIGNvbnN0cnVjdChkYXRhKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRhdGEgOiBcIlwiO1xuICB9LFxuICBraW5kOiBcInNjYWxhclwiLFxufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQStCO0FBQy9CLG9GQUFvRjtBQUNwRiwwRUFBMEU7QUFFMUUsU0FBUyxJQUFJLFFBQVEsWUFBWSxDQUFDO0FBRWxDLE9BQU8sTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7SUFDbkQsU0FBUyxFQUFDLElBQUksRUFBVTtRQUN0QixPQUFPLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztLQUNsQztJQUNELElBQUksRUFBRSxRQUFRO0NBQ2YsQ0FBQyxDQUFDIn0=