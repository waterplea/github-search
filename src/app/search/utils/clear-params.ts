export function clearParams<T>(data: Record<string, T>): Record<string, T | null> {
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, value || null]),
    );
}
