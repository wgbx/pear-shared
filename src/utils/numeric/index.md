---
title: numeric
---

# numeric

基于 `currency.js` 的数值工具函数，用于精确的货币计算，避免浮点数精度问题。

## ⚠️ 精度提示

**默认精度为 2 位小数**，针对货币计算（分）做了优化。

以下场景**不适合**使用该精度：

- **百分比计算**（如佣金比例、税率）——请使用 `{ precision: 4 }` 或更高精度
- **汇率换算**——可能需要 4 位以上小数
- **利息计算**——长期累积会产生误差
- **科学计算**——建议使用专门的数学库

对于需要更高精度的场景，可传入 `precision` 选项：

```ts
// Percentage calculation (recommended precision: 4-6)
numericMultiply(1000, 0.123456, { precision: 6 }); // 123.456

// Default precision (2 decimal places)
numericMultiply(1000, 0.123456); // 123.46 (loses precision)
```

## 示例

### 基础数学运算

```ts
import {
  numericAdd,
  numericSubtract,
  numericMultiply,
  numericDivide,
} from '@bosinc/shared';

// Default precision: 2 decimal places
numericAdd(100, 50); // 150
numericSubtract(100, 30); // 70
numericMultiply(100, 0.3); // 30
numericDivide(100, 4); // 25
```

### 批量运算

```ts
import {
  numericAddMany,
  numericSubtractMany,
  numericMultiplyMany,
} from '@bosinc/shared';

// Batch addition: sum all values
numericAddMany([1, 2, 3, 4]); // 10
numericAddMany([100, 50, 25]); // 175

// Batch subtraction: subtract all from first value
numericSubtractMany([100, 20, 5]); // 75 (100 - 20 - 5)
numericSubtractMany([1000, 100, 50]); // 850

// Batch multiplication: multiply all values (only the final product is rounded)
numericMultiplyMany([2, 3, 4]); // 24
numericMultiplyMany([100, 0.5, 0.1]); // 5
numericMultiplyMany([0.004, 1000]); // 4
```

**实际示例 - 购物车总价：**

```ts
import { numericAddMany, numericFormat } from '@bosinc/shared';

const cartItems = [99.99, 49.5, 15.0, 5.5];
const total = numericAddMany(cartItems); // 169.99

console.log(numericFormat(total, { symbol: '¥' })); // "¥169.99"
```

**实际示例 - 计算折扣：**

```ts
import { numericSubtractMany, numericFormat } from '@bosinc/shared';

const price = 1000;
const discounts = [50, 20, 10]; // Multiple discounts
const finalPrice = numericSubtractMany([price, ...discounts]); // 920

console.log(numericFormat(finalPrice)); // "$920.00"
```

### 货币格式化

```ts
import { numericFormat } from '@bosinc/shared';

// Default: `$` symbol
numericFormat(1234.56); // "$1,234.56"
numericFormat(1000); // "$1,000.00"
numericFormat(-12.5); // "-$12.50"

// With custom symbol
numericFormat(1234.56, { symbol: '¥' }); // "¥1,234.56"
numericFormat(1234.56, { symbol: '€' }); // "€1,234.56"

// Without symbol
numericFormat(1234.56, { symbol: '' }); // "1,234.56"

// Adjust precision
numericFormat(1234, { symbol: '¥', precision: 0 }); // "¥1,234"
numericFormat(1234.567, { precision: 3 }); // "$1,234.567"

// Change decimal and thousand separators
numericFormat(1234.56, { decimal: ',', separator: '.' }); // "$1.234,56"

// Custom format function
numericFormat(1234.56, (value) => `USD ${value?.value}`); // "USD 1234.56"
```

### 使用 numeric 对象

```ts
import { numeric } from '@bosinc/shared';

numeric.add(100, 50); // 150
numeric.subtract(100, 30); // 70
numeric.multiply(100, 0.3); // 30
numeric.divide(100, 4); // 25
numeric.format(1234.56); // "$1,234.56"
```

### 实际示例

```ts
import { numericAdd, numericMultiply, numericFormat } from '@bosinc/shared';

// Calculate total price with tax
const price = 100;
const quantity = 3;
const taxRate = 0.1; // 10%

const subtotal = numericMultiply(price, quantity); // 300
const tax = numericMultiply(subtotal, taxRate); // 30
const total = numericAdd(subtotal, tax); // 330

console.log(numericFormat(total)); // "$330.00"
```

### 百分比计算（更高精度）

```ts
import { numericMultiply, numericDivide } from '@bosinc/shared';

// ❌ Not recommended: the rate is rounded to 2 decimals too early
const roughRate = numericDivide(1, 3); // 0.33
numericMultiply(1000, roughRate); // 330

// ✅ Recommended: specify higher precision for intermediate values
const rate = numericDivide(1, 3, { precision: 6 }); // 0.333333
const commission = numericMultiply(1000, rate, { precision: 6 }); // 333.333

// Final result: round to 2 decimal places
const finalCommission = numericMultiply(commission, 1); // 333.33
```

## API

### numericAdd

加法：a + b

**精度：** 默认为 2 位小数

| 参数 | 说明               | 类型               | 必填 | 默认值 |
| ---- | ------------------ | ------------------ | ---- | ------ |
| a    | 第一个数字         | `number \| string` | `✅` | `-`    |
| b    | 待相加的第二个数字 | `number \| string` | `✅` | `-`    |

**返回值：** `number` - a 与 b 的和

### numericSubtract

减法：a - b

**精度：** 默认为 2 位小数

| 参数 | 说明   | 类型               | 必填 | 默认值 |
| ---- | ------ | ------------------ | ---- | ------ |
| a    | 被减数 | `number \| string` | `✅` | `-`    |
| b    | 减数   | `number \| string` | `✅` | `-`    |

**返回值：** `number` - a 与 b 的差

### numericMultiply

乘法：a × b

**精度：** 默认为 2 位小数。百分比计算请使用 `{ precision: 4-6 }`。

| 参数 | 说明             | 类型               | 必填 | 默认值             |
| ---- | ---------------- | ------------------ | ---- | ------------------ |
| a    | 第一个因数       | `number \| string` | `✅` | `-`                |
| b    | 第二个因数       | `number \| string` | `✅` | `-`                |
| opts | Currency.js 选项 | `currency.Options` | `-`  | `{ precision: 2 }` |

**返回值：** `number` - a 与 b 的积

### numericDivide

除法：a ÷ b

**精度：** 默认为 2 位小数。百分比计算请使用 `{ precision: 4-6 }`。

| 参数 | 说明             | 类型               | 必填 | 默认值             |
| ---- | ---------------- | ------------------ | ---- | ------------------ |
| a    | 被除数           | `number \| string` | `✅` | `-`                |
| b    | 除数             | `number \| string` | `✅` | `-`                |
| opts | Currency.js 选项 | `currency.Options` | `-`  | `{ precision: 2 }` |

**返回值：** `number` - a 与 b 的商

### numericFormat

格式化为带千分位分隔符的货币字符串。默认使用 `$` 符号；传入 `{ symbol: '' }` 可省略符号。

| 参数  | 说明                                       | 类型                                  | 必填 | 默认值                            |
| ----- | ------------------------------------------ | ------------------------------------- | ---- | --------------------------------- |
| value | 待格式化的值                               | `number \| string`                    | `✅` | `-`                               |
| opts  | Currency.js 格式化选项，或自定义格式化函数 | `currency.Options \| currency.Format` | `-`  | `{ symbol: '$', separator: ',' }` |

**返回值：** `string` - 格式化后的货币字符串

### numericAddMany

批量加法：对数组中所有值求和

**精度：** 默认为 2 位小数

| 参数   | 说明             | 类型                   | 必填 | 默认值 |
| ------ | ---------------- | ---------------------- | ---- | ------ |
| values | 待相加的数字数组 | `(number \| string)[]` | `✅` | `-`    |

**返回值：** `number` - 所有值之和

### numericSubtractMany

批量减法：用第一个值依次减去其余各值

**精度：** 默认为 2 位小数

| 参数   | 说明                             | 类型                   | 必填 | 默认值 |
| ------ | -------------------------------- | ---------------------- | ---- | ------ |
| values | 数组，第一个为被减数，其余为减数 | `(number \| string)[]` | `✅` | `-`    |

**返回值：** `number` - 第一个值依次减去其余各值后的结果

### numericMultiplyMany

批量乘法：对数组中所有值求积

**精度：** 仅最终乘积会被四舍五入到 2 位小数，中间输入保留最多 6 位小数，因此 `[0.004, 1000]` 返回 `4`。

| 参数   | 说明             | 类型                   | 必填 | 默认值 |
| ------ | ---------------- | ---------------------- | ---- | ------ |
| values | 待相乘的数字数组 | `(number \| string)[]` | `✅` | `-`    |

**返回值：** `number` - 所有值之积

### numeric

包含全部数值工具函数的对象

| 属性         | 说明       | 类型                                                                              |
| ------------ | ---------- | --------------------------------------------------------------------------------- |
| add          | 加法函数   | `(a: number \| string, b: number \| string) => number`                            |
| subtract     | 减法函数   | `(a: number \| string, b: number \| string) => number`                            |
| multiply     | 乘法函数   | `(a: number \| string, b: number \| string, opts?: currency.Options) => number`   |
| divide       | 除法函数   | `(a: number \| string, b: number \| string, opts?: currency.Options) => number`   |
| format       | 格式化函数 | `(value: number \| string, opts?: currency.Options \| currency.Format) => string` |
| addMany      | 批量加法   | `(values: (number \| string)[]) => number`                                        |
| subtractMany | 批量减法   | `(values: (number \| string)[]) => number`                                        |
| multiplyMany | 批量乘法   | `(values: (number \| string)[]) => number`                                        |
