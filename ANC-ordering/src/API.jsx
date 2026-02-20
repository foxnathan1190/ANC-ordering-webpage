
async function request(path, opts) {
    const res = await fetch(BASE + path, opts);
    if (!res.ok) {
        const txt = await res.text().catch(() => res.statusText);
        throw new Error(txt || `HTTP ${res.status}`);
    }
    return res.json().catch(() => null);
}

export function getItems() {
    return request('/api/items');
}

export function placeOrder(payload) {
    return request('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
}