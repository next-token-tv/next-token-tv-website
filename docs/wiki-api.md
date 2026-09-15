# 资料库 API

Next Token 资料库在 `https://nexttoken.tv/api/v1/` 提供公开、只读、无须鉴权的静态 JSON API，公开文档位于 `https://nexttoken.tv/api/`。版本 `v1` 的数据来自 `src/content/data/brands/*.yaml`、`src/content/data/products/*.yaml` 与 `src/content/data/people/*.yaml`，这些 YAML 文件仍是唯一事实源。更新资料库并重新构建、发布网站后，API 随之更新。

## 端点

- `/api/v1/wiki.json`：API 入口、集合地址与数量。
- `/api/v1/wiki/brands.json`：全部品牌。
- `/api/v1/wiki/products.json`：全部产品。
- `/api/v1/wiki/people.json`：全部人物。
- `/api/v1/wiki/brands/<id>.json`：单个品牌。
- `/api/v1/wiki/products/<id>.json`：单个产品。
- `/api/v1/wiki/people/<id>.json`：单个人物。

集合响应包含 `schemaVersion`、`collection`、`count` 和 `data`。每条实体记录都包含：

- `schemaVersion`、`entityType` 与稳定的 `id`；
- 中文、英文名称与简介，别名、类型、官方链接、来源和最近核验日期等适用字段；
- 对应的公开网页 `url` 与单实体接口 `apiUrl`；
- `relationships`，列出关联的品牌、产品、人物、节目或栏目 ID；品牌的相关节目包含直接提及该品牌或其所属产品的节目。

品牌与产品记录的 `kind` 可用于客户端筛选。集合按 `id` 稳定排序；关系数组也使用稳定顺序。API 响应允许跨域读取，并显式使用 UTF-8 JSON 内容类型。

## 稳定性与范围

`v1` 可增加向后兼容字段；删除字段、改变字段含义或更改既有字段类型需要发布新的 API 主版本。实体 ID 是详情端点与关系引用的稳定键。

API 只发布网站资料库的公开实体数据。`src/content/imported/` 中的文字稿、单集制作快照，以及导入过程产生的候选词和诊断报告不属于资料库 API。

示例：

```bash
curl https://nexttoken.tv/api/v1/wiki/products/chatgpt.json
curl https://nexttoken.tv/api/v1/wiki/brands.json | jq '.data[] | select(.kind == "company-brand")'
```
