---
layout: post
title: OI笔记 | 线段树合并笔记
categories: Solution
description: Note
keywords: NOIP, OI, Note
---

线段树合并是一种能够将两棵线段树在 $\mathcal{O}(n\log n)$ 的时间内合并信息的算法。

具体实现请见例题。

## 【模板】线段树合并

[洛谷 P4556](https://www.luogu.com.cn/problem/P4556)

有一颗 $n$ 个点的树，每个点上有一个数组 $cnt$。有 $m$ 次操作，每次操作 $(u, v, w)$ 将 $u$ 到 $v$ 路径上的点的 $cnt_{w}\gets cnt_{w} + 1$。求 $m$ 次操作后，每个点上 $cnt$ 数组内的最大值。

$1 \leq n, m \leq 10^5$，$1 \leq a,b,x,y \leq n$，$1 \leq z \leq 10^5$。

### 题解

每一次操作都改成树上差分，即 $u,v, \text{lca}(u,v), fa_{\text{lca}(u,v)}$ 到 $1$ 的路径上加加减减。

每个点为 $cnt$ 数组维护一颗权值线段树，维护最大值即可。

然后利用线段树合并做树上前缀和即可。

```cpp
#include <bits/stdc++.h>
#define pb emplace_back
using namespace std;
typedef long long ll;

inline ll read() {...}
inline void write(ll x) {...}

const int MAX_N = 1e5 + 10, MAX_LOG = 18;
int n, m;
int fa[MAX_N][MAX_LOG], dep[MAX_N];
vector<int> G[MAX_N];

inline void dfs(int now, int pre) {
	fa[now][0] = pre, dep[now] = dep[pre] + 1;
	for(int i = 1; i < MAX_LOG; i++)
		fa[now][i] = fa[fa[now][i - 1]][i - 1];
	for(int v : G[now])
		if(v != pre)	dfs(v, now);
}
inline int LCA(int u, int v) {
	if(dep[u] < dep[v])	swap(u, v);
	for(int i = MAX_LOG - 1; i >= 0; i--)
		if(fa[u][i] && dep[fa[u][i]] >= dep[v])	u = fa[u][i];
	if(u == v)	return u;
	for(int i = MAX_LOG - 1; i >= 0; i--)
		if(fa[u][i] && fa[v][i] && fa[u][i] != fa[v][i])	u = fa[u][i], v = fa[v][i];
	return fa[u][0];
}

int rt[MAX_N], ans[MAX_N], tot;
struct node {
	int sum, res, lc, rc;
	node() {
		sum = 0, res = 0, lc = 0, rc = 0;
	}
} d[MAX_N << 6];
inline int mid(int s, int t) {
	return s + ((t - s) >> 1);
}
inline void pu(int p) {
	d[p].res = d[d[p].lc].sum >= d[d[p].rc].sum ? d[d[p].lc].res : d[d[p].rc].res;
	d[p].sum = max(d[d[p].lc].sum, d[d[p].rc].sum);
}
inline int update(int p, int s, int t, int col, int val) {
	if(!p)	p = ++tot;
	if(s == t) {
		d[p].sum += val;
		d[p].res = col;
		return p; 
	}
	int m = mid(s, t);	
	if(col <= m)	d[p].lc = update(d[p].lc, s, m, col, val);
	else	d[p].rc = update(d[p].rc, m + 1, t, col, val);
	pu(p);
	return p;
}
inline int merge(int x, int y, int s, int t) {
	if(!x)	return y;
	if(!y)	return x;
	if(s == t) {
		d[x].sum += d[y].sum;
		return x;
	}
	int m = mid(s, t);
	d[x].lc = merge(d[x].lc, d[y].lc, s, m);
	d[x].rc = merge(d[x].rc, d[y].rc, m + 1, t);
	pu(x);
	return x;
}
void cal(int now) {
	for(int v : G[now]) {
		if(v == fa[now][0])	continue;
		cal(v);
		rt[now] = merge(rt[now], rt[v], 1, MAX_N);
	}
	ans[now] = d[rt[now]].sum ? d[rt[now]].res : 0;
}

int main() {
	n = read(), m = read();
	for(int i = 1, u, v; i <= n - 1; i++) {
		u = read(), v = read();
		G[u].pb(v), G[v].pb(u);
	}
	dfs(1, 0);
	for(int i = 1, x, y, lca, z; i <= m; i++) {
		x = read(), y = read(), z = read();
		lca = LCA(x, y);
		rt[x] = update(rt[x], 1, MAX_N, z, 1);
		rt[y] = update(rt[y], 1, MAX_N, z, 1);
		rt[lca] = update(rt[lca], 1, MAX_N, z, -1);
		rt[fa[lca][0]] = update(rt[fa[lca][0]], 1, MAX_N, z, -1);
	}
	cal(1);
	for(int i = 1; i <= n; i++)
		write(ans[i]), putchar('\n');
	return 0;
}
```

## [USACO17JAN]Promotion Counting P

[洛谷 P3605](https://www.luogu.com.cn/problem/P3605)

有一棵 $n$ 个点的树，点 $i$ 的点权是 $p_i$，每个点点权互不相同。对于每一个节点 $i$，计算其子树内节点 $j$ 的数量，其中 $j$ 满足 $p_j > p_i$。

$1\le n \le 10^5$，$1 \le p_i \le 10^9$。

### Solution 1

先把 $p_i$ 的值域离散化到 $[1,n]$。

可以在每一个节点上建一棵权值线段树，然后在 dfs 过程中做线段树合并。

时间复杂度是常数比较大的 $\mathcal{O}(n\log n)$。

```cpp
#include <bits/stdc++.h>
#define pb emplace_back
using namespace std;
typedef long long ll;

inline ll read() {...}
inline void write(ll x) {...}

const int MAX_N = 1e5 + 10;
int n, cnt, p[MAX_N], P[MAX_N], rt[MAX_N], ans[MAX_N];
vector<int> G[MAX_N];
struct node {
	int lc, rc, val;
	node() {
		lc = rc = val = 0;
	}
} d[MAX_N << 5];

inline int mid(int s, int t) {
	return (s + ((t - s) >> 1));
}
inline void pu(int now) {
	d[now].val = d[d[now].lc].val + d[d[now].rc].val;
}
inline int update(int now, int s, int t, int v) {
	if(!now)	now = ++cnt;
	if(s == t) {
		d[now].val = 1;
		return now;
	}
	int m = mid(s, t);
	if(v <= m)	d[now].lc = update(d[now].lc, s, m, v);
	else	d[now].rc = update(d[now].rc, m + 1, t, v);
	pu(now);
	return now;
}
inline int merge(int u, int v, int s, int t) {
	if(!u)	return v;
	if(!v)	return u;
	if(s == t) {
		d[u].val += d[v].val;
		return u;
	}
	int m = mid(s, t);
	d[u].lc = merge(d[u].lc, d[v].lc, s, m);
	d[u].rc = merge(d[u].rc, d[v].rc, m + 1, t);
	pu(u);
	return u;
}
inline int query(int now, int s, int t, int l, int r) {
	if(l <= s && t <= r)	return d[now].val;
	int m = mid(s, t), ret = 0;
	if(l <= m)	ret += query(d[now].lc, s, m, l, r);
	if(r > m)	ret += query(d[now].rc, m + 1, t, l, r);
	return ret;
}

void dfs(int now) {
	for(int v : G[now]) {
		dfs(v);
		rt[now] = merge(rt[now], rt[v], 1, n);
	}
	ans[now] = query(rt[now], 1, n, p[now] + 1, n);
}

int main() {
	n = read();
	for(int i = 1; i <= n; i++)
		p[i] = P[i] = read();
	sort(P + 1, P + n + 1);
	for(int i = 1; i <= n; i++) {
		p[i] = lower_bound(P + 1, P + n + 1, p[i]) - P;
		rt[i] = update(rt[i], 1, n, p[i]);
	}
	for(int i = 2, fa; i <= n; i++) {
		fa = read();
		G[fa].pb(i);
	}	
	dfs(1);
	for(int i = 1; i <= n; i++)
		write(ans[i]), putchar('\n');
	return 0;
}
```

### Solution 2

同样先把 $p_i$ 的值域离散化到 $[1,n]$。

然后直接 dfs，用一个 $[1,n]$ 上的树状数组来维护大于 $p_i$ 的个数。我们在遍历子树前询问一遍，遍历子树后再询问一遍，差值就是这个点的答案。

时间复杂度是常数比较小的 $\mathcal{O}(n\log n)$。

```cpp
#include <bits/stdc++.h>
#define pb emplace_back
using namespace std;
typedef long long ll;

inline ll read() {...}
inline void write(ll x) {...}

const int MAX_N = 1e5 + 10;
int n, p[MAX_N], P[MAX_N], ans[MAX_N];
vector<int> G[MAX_N];

struct TreeArray {
    int t[MAX_N];
    TreeArray() {
        memset(t, 0, sizeof(t));
    }
    inline int lowbit(int i) {
        return (i & -i);
    }
    inline void add(int p, int v) {
        for(; p <= n; p += lowbit(p))
            t[p] += v;
    }
    inline int query(int p) {
        int ret = 0;
        for(; p; p -= lowbit(p))
            ret += t[p];
        return ret;
    }
} T;

void dfs(int u) {
    int lst = T.query(n) - T.query(p[u]);
    for(int v : G[u])
        dfs(v);
    int now = T.query(n) - T.query(p[u]);
    ans[u] = now - lst;
    T.add(p[u], 1);
}

int main() {
    n = read();
    for(int i = 1; i <= n; i++)
        P[i] = p[i] = read();
    sort(P + 1, P + n + 1);
    for(int i = 1; i <= n; i++)
        p[i] = lower_bound(P + 1, P + n + 1, p[i]) - P;
    for(int i = 2, fa; i <= n; i++) {
        fa = read();
        G[fa].pb(i);
    }
    dfs(1);
    for(int i = 1; i <= n; i++)
        write(ans[i]), putchar('\n');
    return 0;
}
```

## Lomsat gelral

[CF600E](https://codeforces.com/problemset/problem/600/E)

- 有一棵  $n$ 个结点的以  $1$ 号结点为根的**有根树**。
- 每个结点都有一个颜色，颜色是以编号表示的， $i$ 号结点的颜色编号为  $c_i$。
- 如果一种颜色在以  $x$ 为根的子树内出现次数最多，称其在以  $x$ 为根的子树中占**主导地位**。显然，同一子树中可能有多种颜色占主导地位。
- 你的任务是对于每一个  $i\in[1,n]$，求出以  $i$ 为根的子树中，占主导地位的**颜色编号**和。
-  $n\le 10^5,c_i\le n$

### Solution 1

使用 dsu on tree 算法，即在树上启发式合并。

我们考虑暴力统计某个节点 $u$ 的答案，用一个 $cnt$ 数组保存每个颜色出现的次数。我们要算出 $u$ 的所有子树的答案，然后合并起来。每次都要遍历一棵子树计算答案，然后把 $cnt$ 清空，再遍历下一棵子树。所以明显是 $\mathcal{O(n^2)}$ 的。

但是我们发现，清空操作不需要对最后一棵遍历到的子树做。所以我们只要先重链剖分一下，求出每个节点的重儿子。在上述暴力统计的过程中，把重儿子放到最后一个遍历。计算轻儿子的时候要消除它对 $cnt$ 的影响，而重儿子就不需要消除。这样做的复杂度可以证明是 $\mathcal{O}(n\log n)$ 的。

我们引出 dsu on tree 的递归流程：

1. 递归轻儿子，同时标记要删除它对答案的贡献。

2. 递归重儿子，不做标记。

3. 把轻儿子的贡献加到答案里，得出当前节点的答案。

3. 如果当前节点被标记，删除它对答案的贡献。

```cpp
#include <bits/stdc++.h>
#define pb emplace_back
using namespace std;
typedef long long ll;

inline ll read() {...}
inline void write(ll x) {...}

const int MAX_N = 1e5 + 10;
int n, mx, c[MAX_N], cnt[MAX_N], siz[MAX_N], hson[MAX_N];
ll sum, ans[MAX_N];
vector<int> G[MAX_N];

void dfs(int u, int pre) {
    siz[u] = 1;
    hson[u] = -1;
    for(int v : G[u]) {
        if(v == pre)    continue;
        dfs(v, u);
        siz[u] += siz[v];
        if(hson[u] == -1 || siz[v] > siz[hson[u]])  hson[u] = v;
    }
}

void add(int u, int pre, int val, int hs) {
    cnt[c[u]] += val;
    if(cnt[c[u]] > mx)  mx = cnt[c[u]], sum = c[u];
    else if(cnt[c[u]] == mx)    sum += c[u];
    for(int v : G[u]) {
        if(v == pre || v == hs)    continue;
        add(v, u, val, hs);        
    }
}  

void cal(int u, int pre, bool opt) {
    for(int v : G[u]) {
        if(v == pre || v == hson[u])    continue;
        cal(v, u, 1);
    }
    if(hson[u] != -1)   cal(hson[u], u, 0);
    add(u, pre, 1, hson[u]);
    ans[u] = sum;
    if(opt == 0)    return;
    add(u, pre, -1, -1);
    sum = mx = 0;
}

int main() {
    n = read();
    for(int i = 1; i <= n; i++)
        c[i] = read();
    for(int i = 1, u, v; i <= n - 1; i++) {
        u = read(), v = read();
        G[u].pb(v), G[v].pb(u);
    } 
    dfs(1, 0);
    cal(1, 0, 0);
    for(int i = 1; i <= n; i++)
        write(ans[i]), putchar(" \n"[i == n]);
    return 0;
}
```

### Solution 2

在每一个节点上维护一棵权值线段树，维护答案，于是就是线段树合并的模板。

时间复杂度 $\mathcal{O}(n\log n)$，空间花费比较大。

```cpp
#include <bits/stdc++.h>
#define pb emplace_back
using namespace std;
typedef long long ll;

inline ll read() {...}
inline void write(ll x) {..}

const int MAX_N = 1e5 + 10;
int n, cnt, c[MAX_N], rt[MAX_N];
ll ans[MAX_N];
vector<int> G[MAX_N];

struct node {
    int lc, rc, val;
    ll ans;
    node() {
        lc = rc = val = ans = 0;
    }
} d[MAX_N << 5];

inline int mid(int s, int t) {
    return (s + ((t - s) >> 1));
}
inline void pu(int p) {
    node L = d[d[p].lc], R = d[d[p].rc];
    d[p].val = max(L.val, R.val);
    if(L.val < R.val)   d[p].ans = R.ans;
    if(L.val > R.val)   d[p].ans = L.ans;
    if(L.val == R.val)  d[p].ans = L.ans + R.ans;
}
inline int update(int p, int s, int t, int v) {
    if(!p)  p = ++cnt;
    if(s == t) {
        d[p].val = 1;
        d[p].ans = v;
        return p;
    } 
    int m = mid(s, t);
    if(v <= m)  d[p].lc = update(d[p].lc, s, m, v);
    else    d[p].rc = update(d[p].rc, m + 1, t, v);
    pu(p);
    return p;
}
inline int merge(int u, int v, int s, int t) {
    if(!u)  return v;
    if(!v)  return u;
    if(s == t) {
        d[u].val += d[v].val;
        return u;
    }
    int m = mid(s, t);
    d[u].lc = merge(d[u].lc, d[v].lc, s, m);
    d[u].rc = merge(d[u].rc, d[v].rc, m + 1, t);
    pu(u);
    return u;
}

void dfs(int u, int pre) {
    for(int v : G[u]) {
        if(v == pre)    continue;
        dfs(v, u);
        rt[u] = merge(rt[u], rt[v], 1, n);
    }
    ans[u] = d[rt[u]].ans;
}

int main() {
    n = read();
    for(int i = 1; i <= n; i++) {
        c[i] = read();
        rt[i] = update(rt[i], 1, n, c[i]);
    }
    for(int i = 1, u, v; i <= n - 1; i++) {
        u = read(), v = read();
        G[u].pb(v), G[v].pb(u);
    } 
    dfs(1, 0);
    for(int i = 1; i <= n; i++)
        write(ans[i]), putchar(" \n"[i == n]);
    return 0;
}
```

## [POI2011]ROT-Tree Rotations

[洛谷 P3521](https://www.luogu.com.cn/problem/P3521)

给定一颗有 $n$ 个**叶节点**的二叉树。每个叶节点都有一个权值 $p_i$（注意，根不是叶节点），所有叶节点的权值构成了一个 $1 \sim n$ 的排列。

对于这棵二叉树的任何一个结点，保证其要么是叶节点，要么左右两个孩子都存在。  

现在你可以任选一些节点，交换这些节点的左右子树。  

在最终的树上，按照先序遍历遍历整棵树并依次写下遇到的叶结点的权值构成一个长度为 $n$ 的排列，你需要最小化这个排列的逆序对数。

$2 \leq n \leq 2 \times 10^5$

### 题解

由于先序遍历为根节点 $\to$ 左子树 $\to$ 右子树，那么某个节点为根的子树内的答案即为：

$$左子树的答案+右子树的答案 + \min \left\{ 左右子树产生的逆序对数 \right\}$$

我们考虑用在每个节点上建一个权值线段树，用线段树合并来统计答案。

我们要合并某个节点的左孩子和右孩子时，找到它们对应的权值线段树的根节点 $x, y$，然后线段树合并两棵权值线段树。假设这两棵权值线段树相同位置的节点为 $u, v$，则可以分类计算答案：

1. 若不交换左子树和右子树，则逆序对数为 $\sum\limits_{u,v} (siz_{rc_u} \times siz_{lc_v})$。

2. 若交换左子树和右子树，则逆序对数为 $\sum\limits_{u,v}(siz_{rc_v}\times siz_{lc_u})$。

然后我们把这两个取 $\min$ 加到答案即可。


```cpp
#include <bits/stdc++.h>
#define pb emplace_back
using namespace std;
typedef long long ll;

inline ll read() {...}
inline void write(ll x) {...}

const int MAX_N = 2e5 + 10;
int n, cnt;
ll sum1, sum2, ans;
struct node {
	int lc, rc, siz;
} d[MAX_N << 5];

inline int mid(int s, int t) {
	return s + ((t - s) >> 1);
}
inline void pu(int p) {
    d[p].siz = d[d[p].lc].siz + d[d[p].rc].siz;
}
inline int update(int p, int s, int t, int x) {
	if(!p)	p = ++cnt;
	if(s == t) {
	    d[p].siz = 1;
	    return p;
	}
	int m = mid(s, t);
	if(x <= m)	d[p].lc = update(d[p].lc, s, m, x);
	else	d[p].rc = update(d[p].rc, m + 1, t, x);
    pu(p);
	return p;
}
inline int merge(int u, int v, int s, int t) {
	if(!u)	return v;
	if(!v)	return u;
	if(s == t) {
		d[u].siz += d[v].siz;
		return u;
	}
	sum1 += 1ll * d[d[u].rc].siz * d[d[v].lc].siz;
	sum2 += 1ll * d[d[v].rc].siz * d[d[u].lc].siz;
	int m = mid(s, t);
	d[u].lc = merge(d[u].lc, d[v].lc, s, m);
	d[u].rc = merge(d[u].rc, d[v].rc, m + 1, t);
	pu(u);
	return u;
}

inline int dfs() {
	int x = read(), rt = 0;
	if(x == 0) {
		int lc = dfs(), rc = dfs();
		sum1 = sum2 = 0;
		rt = merge(lc, rc, 1, n);
		ans += min(sum1, sum2);
	}
	else rt = update(rt, 1, n, x);
	return rt;
}

int main() {
	n = read();
	dfs(); 
	write(ans), putchar('\n');
    return 0;
}
```