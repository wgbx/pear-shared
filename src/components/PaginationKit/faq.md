# faq

## 一些问题

1. 删除最后一页，需要跳转到前一页
2. 接入 PaginationTable 的情况(兼容)

## PaginationKit

1. 接入 InfiniteQuery: 可以简单接入，需要修改 item 里的 atom 逻辑
2. 接入 InfiniteScroll: 可以简单接入，需要修改 item 里的 atom 逻辑
3. 接入 PaginationTable: `./apps/web/src/app/(pages)/events/components/desktop/EventTableContent.tsx`

## PaginationTable 组件接入

- 这个组件与 `InfiniteQuery/InfiniteScroll` API 相差比较大，所以，做法是 扩展了 `paginationMode="traditional-new"` 一套相似的皮肤
- 不过，在实际开发中发现 `PaginationTable` 与现有的 `PaginationKit` 实现效果还是有明显的差别。典型: 翻到第 n 页，点击详情，返回到列表页，并没有记录页数功能。

## 设置了 pageSize 不生效

- question: 有时候，发现修改了 `PaginationList` 中的 `pageSize` 但并未生效。
- answer: 组件默认会将上次有效的 pageSize(默认为 30),存到 sessionStorage 中，如果在代码中修改了这个值，最终还是会取 sessionStorage 里的值。

## 还未实现的功能

1. 针对 page 一些特别的操作 `add/remove/update/destroy` 需要提供对应的 API 来操作，会比较友好
2. 针对 page 组件，需要添加 tests
