// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { fromFileUrl } from "../path.ts";
/**
 * TODO: Also accept 'path' parameter as a Node polyfill Buffer type once these
 * are implemented. See https://github.com/denoland/deno/issues/3403
 * Deprecated in node api
 */ export function exists(path, callback) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    Deno.lstat(path).then(()=>callback(true), ()=>callback(false));
}
// The callback of fs.exists doesn't have standard callback signature.
// We need to provide special implementation for promisify.
// See https://github.com/nodejs/node/pull/13316
const kCustomPromisifiedSymbol = Symbol.for("nodejs.util.promisify.custom");
Object.defineProperty(exists, kCustomPromisifiedSymbol, {
    value: (path)=>{
        return new Promise((resolve)=>{
            exists(path, (exists)=>resolve(exists));
        });
    }
});
/**
 * TODO: Also accept 'path' parameter as a Node polyfill Buffer or URL type once these
 * are implemented. See https://github.com/denoland/deno/issues/3403
 */ export function existsSync(path) {
    path = path instanceof URL ? fromFileUrl(path) : path;
    try {
        Deno.lstatSync(path);
        return true;
    } catch (err) {
        if (err instanceof Deno.errors.NotFound) {
            return false;
        }
        throw err;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjE0Ny4wL25vZGUvX2ZzL19mc19leGlzdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTgtMjAyMiB0aGUgRGVubyBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgbGljZW5zZS5cbmltcG9ydCB7IGZyb21GaWxlVXJsIH0gZnJvbSBcIi4uL3BhdGgudHNcIjtcblxudHlwZSBFeGlzdHNDYWxsYmFjayA9IChleGlzdHM6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbi8qKlxuICogVE9ETzogQWxzbyBhY2NlcHQgJ3BhdGgnIHBhcmFtZXRlciBhcyBhIE5vZGUgcG9seWZpbGwgQnVmZmVyIHR5cGUgb25jZSB0aGVzZVxuICogYXJlIGltcGxlbWVudGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Rlbm9sYW5kL2Rlbm8vaXNzdWVzLzM0MDNcbiAqIERlcHJlY2F0ZWQgaW4gbm9kZSBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aXN0cyhwYXRoOiBzdHJpbmcgfCBVUkwsIGNhbGxiYWNrOiBFeGlzdHNDYWxsYmFjayk6IHZvaWQge1xuICBwYXRoID0gcGF0aCBpbnN0YW5jZW9mIFVSTCA/IGZyb21GaWxlVXJsKHBhdGgpIDogcGF0aDtcbiAgRGVuby5sc3RhdChwYXRoKS50aGVuKCgpID0+IGNhbGxiYWNrKHRydWUpLCAoKSA9PiBjYWxsYmFjayhmYWxzZSkpO1xufVxuXG4vLyBUaGUgY2FsbGJhY2sgb2YgZnMuZXhpc3RzIGRvZXNuJ3QgaGF2ZSBzdGFuZGFyZCBjYWxsYmFjayBzaWduYXR1cmUuXG4vLyBXZSBuZWVkIHRvIHByb3ZpZGUgc3BlY2lhbCBpbXBsZW1lbnRhdGlvbiBmb3IgcHJvbWlzaWZ5LlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9wdWxsLzEzMzE2XG5jb25zdCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgPSBTeW1ib2wuZm9yKFwibm9kZWpzLnV0aWwucHJvbWlzaWZ5LmN1c3RvbVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleGlzdHMsIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICB2YWx1ZTogKHBhdGg6IHN0cmluZyB8IFVSTCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgZXhpc3RzKHBhdGgsIChleGlzdHMpID0+IHJlc29sdmUoZXhpc3RzKSk7XG4gICAgfSk7XG4gIH0sXG59KTtcblxuLyoqXG4gKiBUT0RPOiBBbHNvIGFjY2VwdCAncGF0aCcgcGFyYW1ldGVyIGFzIGEgTm9kZSBwb2x5ZmlsbCBCdWZmZXIgb3IgVVJMIHR5cGUgb25jZSB0aGVzZVxuICogYXJlIGltcGxlbWVudGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Rlbm9sYW5kL2Rlbm8vaXNzdWVzLzM0MDNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aXN0c1N5bmMocGF0aDogc3RyaW5nIHwgVVJMKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoIGluc3RhbmNlb2YgVVJMID8gZnJvbUZpbGVVcmwocGF0aCkgOiBwYXRoO1xuICB0cnkge1xuICAgIERlbm8ubHN0YXRTeW5jKHBhdGgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgRGVuby5lcnJvcnMuTm90Rm91bmQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhyb3cgZXJyO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFLFNBQVMsV0FBVyxRQUFRLFlBQVksQ0FBQztBQUl6Qzs7OztHQUlHLENBQ0gsT0FBTyxTQUFTLE1BQU0sQ0FBQyxJQUFrQixFQUFFLFFBQXdCLEVBQVE7SUFDekUsSUFBSSxHQUFHLElBQUksWUFBWSxHQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ3BFO0FBRUQsc0VBQXNFO0FBQ3RFLDJEQUEyRDtBQUMzRCxnREFBZ0Q7QUFDaEQsTUFBTSx3QkFBd0IsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLEFBQUM7QUFDNUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsd0JBQXdCLEVBQUU7SUFDdEQsS0FBSyxFQUFFLENBQUMsSUFBa0IsR0FBSztRQUM3QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFLO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0tBQ0o7Q0FDRixDQUFDLENBQUM7QUFFSDs7O0dBR0csQ0FDSCxPQUFPLFNBQVMsVUFBVSxDQUFDLElBQWtCLEVBQVc7SUFDdEQsSUFBSSxHQUFHLElBQUksWUFBWSxHQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN0RCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztLQUNiLENBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixJQUFJLEdBQUcsWUFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsTUFBTSxHQUFHLENBQUM7S0FDWDtDQUNGIn0=