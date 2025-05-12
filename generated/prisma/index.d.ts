
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Software
 * 
 */
export type Software = $Result.DefaultSelection<Prisma.$SoftwarePayload>
/**
 * Model LicenseKey
 * 
 */
export type LicenseKey = $Result.DefaultSelection<Prisma.$LicenseKeyPayload>
/**
 * Model Activation
 * 
 */
export type Activation = $Result.DefaultSelection<Prisma.$ActivationPayload>
/**
 * Model MonthlyUsage
 * 
 */
export type MonthlyUsage = $Result.DefaultSelection<Prisma.$MonthlyUsagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PricingModel: {
  FLAT: 'FLAT',
  PER_USE: 'PER_USE',
  MONTHLY_SUBSCRIPTION: 'MONTHLY_SUBSCRIPTION'
};

export type PricingModel = (typeof PricingModel)[keyof typeof PricingModel]


export const LicenseStatus: {
  AVAILABLE: 'AVAILABLE',
  ACTIVATED: 'ACTIVATED',
  CANCELED: 'CANCELED'
};

export type LicenseStatus = (typeof LicenseStatus)[keyof typeof LicenseStatus]


export const EmployeeRole: {
  EMPLOYEE: 'EMPLOYEE',
  ADMIN: 'ADMIN',
  VENDOR: 'VENDOR'
};

export type EmployeeRole = (typeof EmployeeRole)[keyof typeof EmployeeRole]

}

export type PricingModel = $Enums.PricingModel

export const PricingModel: typeof $Enums.PricingModel

export type LicenseStatus = $Enums.LicenseStatus

export const LicenseStatus: typeof $Enums.LicenseStatus

export type EmployeeRole = $Enums.EmployeeRole

export const EmployeeRole: typeof $Enums.EmployeeRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vendors
 * const vendors = await prisma.vendor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Vendors
   * const vendors = await prisma.vendor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.software`: Exposes CRUD operations for the **Software** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Software
    * const software = await prisma.software.findMany()
    * ```
    */
  get software(): Prisma.SoftwareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licenseKey`: Exposes CRUD operations for the **LicenseKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseKeys
    * const licenseKeys = await prisma.licenseKey.findMany()
    * ```
    */
  get licenseKey(): Prisma.LicenseKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activation`: Exposes CRUD operations for the **Activation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activations
    * const activations = await prisma.activation.findMany()
    * ```
    */
  get activation(): Prisma.ActivationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyUsage`: Exposes CRUD operations for the **MonthlyUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyUsages
    * const monthlyUsages = await prisma.monthlyUsage.findMany()
    * ```
    */
  get monthlyUsage(): Prisma.MonthlyUsageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Vendor: 'Vendor',
    Employee: 'Employee',
    Software: 'Software',
    LicenseKey: 'LicenseKey',
    Activation: 'Activation',
    MonthlyUsage: 'MonthlyUsage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vendor" | "employee" | "software" | "licenseKey" | "activation" | "monthlyUsage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Software: {
        payload: Prisma.$SoftwarePayload<ExtArgs>
        fields: Prisma.SoftwareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoftwareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoftwareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload>
          }
          findFirst: {
            args: Prisma.SoftwareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoftwareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload>
          }
          findMany: {
            args: Prisma.SoftwareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload>[]
          }
          create: {
            args: Prisma.SoftwareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload>
          }
          createMany: {
            args: Prisma.SoftwareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SoftwareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload>[]
          }
          delete: {
            args: Prisma.SoftwareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload>
          }
          update: {
            args: Prisma.SoftwareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload>
          }
          deleteMany: {
            args: Prisma.SoftwareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoftwareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SoftwareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload>[]
          }
          upsert: {
            args: Prisma.SoftwareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoftwarePayload>
          }
          aggregate: {
            args: Prisma.SoftwareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoftware>
          }
          groupBy: {
            args: Prisma.SoftwareGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoftwareGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoftwareCountArgs<ExtArgs>
            result: $Utils.Optional<SoftwareCountAggregateOutputType> | number
          }
        }
      }
      LicenseKey: {
        payload: Prisma.$LicenseKeyPayload<ExtArgs>
        fields: Prisma.LicenseKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          findFirst: {
            args: Prisma.LicenseKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          findMany: {
            args: Prisma.LicenseKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>[]
          }
          create: {
            args: Prisma.LicenseKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          createMany: {
            args: Prisma.LicenseKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>[]
          }
          delete: {
            args: Prisma.LicenseKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          update: {
            args: Prisma.LicenseKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          deleteMany: {
            args: Prisma.LicenseKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>[]
          }
          upsert: {
            args: Prisma.LicenseKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseKeyPayload>
          }
          aggregate: {
            args: Prisma.LicenseKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseKey>
          }
          groupBy: {
            args: Prisma.LicenseKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseKeyCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseKeyCountAggregateOutputType> | number
          }
        }
      }
      Activation: {
        payload: Prisma.$ActivationPayload<ExtArgs>
        fields: Prisma.ActivationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload>
          }
          findFirst: {
            args: Prisma.ActivationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload>
          }
          findMany: {
            args: Prisma.ActivationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload>[]
          }
          create: {
            args: Prisma.ActivationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload>
          }
          createMany: {
            args: Prisma.ActivationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload>[]
          }
          delete: {
            args: Prisma.ActivationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload>
          }
          update: {
            args: Prisma.ActivationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload>
          }
          deleteMany: {
            args: Prisma.ActivationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload>[]
          }
          upsert: {
            args: Prisma.ActivationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationPayload>
          }
          aggregate: {
            args: Prisma.ActivationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivation>
          }
          groupBy: {
            args: Prisma.ActivationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivationCountArgs<ExtArgs>
            result: $Utils.Optional<ActivationCountAggregateOutputType> | number
          }
        }
      }
      MonthlyUsage: {
        payload: Prisma.$MonthlyUsagePayload<ExtArgs>
        fields: Prisma.MonthlyUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload>
          }
          findFirst: {
            args: Prisma.MonthlyUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload>
          }
          findMany: {
            args: Prisma.MonthlyUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload>[]
          }
          create: {
            args: Prisma.MonthlyUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload>
          }
          createMany: {
            args: Prisma.MonthlyUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload>[]
          }
          delete: {
            args: Prisma.MonthlyUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload>
          }
          update: {
            args: Prisma.MonthlyUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload>
          }
          deleteMany: {
            args: Prisma.MonthlyUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthlyUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload>[]
          }
          upsert: {
            args: Prisma.MonthlyUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyUsagePayload>
          }
          aggregate: {
            args: Prisma.MonthlyUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyUsage>
          }
          groupBy: {
            args: Prisma.MonthlyUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyUsageCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyUsageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    vendor?: VendorOmit
    employee?: EmployeeOmit
    software?: SoftwareOmit
    licenseKey?: LicenseKeyOmit
    activation?: ActivationOmit
    monthlyUsage?: MonthlyUsageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    activations: number
    licenseKeys: number
    monthlyUsage: number
    software: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activations?: boolean | VendorCountOutputTypeCountActivationsArgs
    licenseKeys?: boolean | VendorCountOutputTypeCountLicenseKeysArgs
    monthlyUsage?: boolean | VendorCountOutputTypeCountMonthlyUsageArgs
    software?: boolean | VendorCountOutputTypeCountSoftwareArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountActivationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivationWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountLicenseKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseKeyWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountMonthlyUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyUsageWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountSoftwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoftwareWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    performedActivations: number
    activatedKeys: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performedActivations?: boolean | EmployeeCountOutputTypeCountPerformedActivationsArgs
    activatedKeys?: boolean | EmployeeCountOutputTypeCountActivatedKeysArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPerformedActivationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivationWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountActivatedKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseKeyWhereInput
  }


  /**
   * Count Type SoftwareCountOutputType
   */

  export type SoftwareCountOutputType = {
    activations: number
    licenseKeys: number
    monthlyUsage: number
  }

  export type SoftwareCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activations?: boolean | SoftwareCountOutputTypeCountActivationsArgs
    licenseKeys?: boolean | SoftwareCountOutputTypeCountLicenseKeysArgs
    monthlyUsage?: boolean | SoftwareCountOutputTypeCountMonthlyUsageArgs
  }

  // Custom InputTypes
  /**
   * SoftwareCountOutputType without action
   */
  export type SoftwareCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoftwareCountOutputType
     */
    select?: SoftwareCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SoftwareCountOutputType without action
   */
  export type SoftwareCountOutputTypeCountActivationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivationWhereInput
  }

  /**
   * SoftwareCountOutputType without action
   */
  export type SoftwareCountOutputTypeCountLicenseKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseKeyWhereInput
  }

  /**
   * SoftwareCountOutputType without action
   */
  export type SoftwareCountOutputTypeCountMonthlyUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyUsageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    supabaseUserId: string | null
    contactEmail: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.EmployeeRole | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    supabaseUserId: string | null
    contactEmail: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.EmployeeRole | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    supabaseUserId: number
    contactEmail: number
    name: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type VendorMinAggregateInputType = {
    id?: true
    supabaseUserId?: true
    contactEmail?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    supabaseUserId?: true
    contactEmail?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    supabaseUserId?: true
    contactEmail?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    supabaseUserId: string | null
    contactEmail: string | null
    name: string
    createdAt: Date
    updatedAt: Date
    role: $Enums.EmployeeRole
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    contactEmail?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    activations?: boolean | Vendor$activationsArgs<ExtArgs>
    licenseKeys?: boolean | Vendor$licenseKeysArgs<ExtArgs>
    monthlyUsage?: boolean | Vendor$monthlyUsageArgs<ExtArgs>
    software?: boolean | Vendor$softwareArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    contactEmail?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    contactEmail?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    supabaseUserId?: boolean
    contactEmail?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseUserId" | "contactEmail" | "name" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activations?: boolean | Vendor$activationsArgs<ExtArgs>
    licenseKeys?: boolean | Vendor$licenseKeysArgs<ExtArgs>
    monthlyUsage?: boolean | Vendor$monthlyUsageArgs<ExtArgs>
    software?: boolean | Vendor$softwareArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VendorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      activations: Prisma.$ActivationPayload<ExtArgs>[]
      licenseKeys: Prisma.$LicenseKeyPayload<ExtArgs>[]
      monthlyUsage: Prisma.$MonthlyUsagePayload<ExtArgs>[]
      software: Prisma.$SoftwarePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supabaseUserId: string | null
      contactEmail: string | null
      name: string
      createdAt: Date
      updatedAt: Date
      role: $Enums.EmployeeRole
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {VendorUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activations<T extends Vendor$activationsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$activationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licenseKeys<T extends Vendor$licenseKeysArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$licenseKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyUsage<T extends Vendor$monthlyUsageArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$monthlyUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    software<T extends Vendor$softwareArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$softwareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly supabaseUserId: FieldRef<"Vendor", 'String'>
    readonly contactEmail: FieldRef<"Vendor", 'String'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
    readonly role: FieldRef<"Vendor", 'EmployeeRole'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor updateManyAndReturn
   */
  export type VendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.activations
   */
  export type Vendor$activationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    where?: ActivationWhereInput
    orderBy?: ActivationOrderByWithRelationInput | ActivationOrderByWithRelationInput[]
    cursor?: ActivationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivationScalarFieldEnum | ActivationScalarFieldEnum[]
  }

  /**
   * Vendor.licenseKeys
   */
  export type Vendor$licenseKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    where?: LicenseKeyWhereInput
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    cursor?: LicenseKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseKeyScalarFieldEnum | LicenseKeyScalarFieldEnum[]
  }

  /**
   * Vendor.monthlyUsage
   */
  export type Vendor$monthlyUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    where?: MonthlyUsageWhereInput
    orderBy?: MonthlyUsageOrderByWithRelationInput | MonthlyUsageOrderByWithRelationInput[]
    cursor?: MonthlyUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyUsageScalarFieldEnum | MonthlyUsageScalarFieldEnum[]
  }

  /**
   * Vendor.software
   */
  export type Vendor$softwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    where?: SoftwareWhereInput
    orderBy?: SoftwareOrderByWithRelationInput | SoftwareOrderByWithRelationInput[]
    cursor?: SoftwareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SoftwareScalarFieldEnum | SoftwareScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    supabaseUserId: string | null
    companyName: string | null
    name: string | null
    email: string | null
    role: $Enums.EmployeeRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    supabaseUserId: string | null
    companyName: string | null
    name: string | null
    email: string | null
    role: $Enums.EmployeeRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    supabaseUserId: number
    companyName: number
    name: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    supabaseUserId?: true
    companyName?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    supabaseUserId?: true
    companyName?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    supabaseUserId?: true
    companyName?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    supabaseUserId: string | null
    companyName: string | null
    name: string
    email: string
    role: $Enums.EmployeeRole
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    companyName?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    performedActivations?: boolean | Employee$performedActivationsArgs<ExtArgs>
    activatedKeys?: boolean | Employee$activatedKeysArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    companyName?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    companyName?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    supabaseUserId?: boolean
    companyName?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseUserId" | "companyName" | "name" | "email" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performedActivations?: boolean | Employee$performedActivationsArgs<ExtArgs>
    activatedKeys?: boolean | Employee$activatedKeysArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      performedActivations: Prisma.$ActivationPayload<ExtArgs>[]
      activatedKeys: Prisma.$LicenseKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supabaseUserId: string | null
      companyName: string | null
      name: string
      email: string
      role: $Enums.EmployeeRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    performedActivations<T extends Employee$performedActivationsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$performedActivationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activatedKeys<T extends Employee$activatedKeysArgs<ExtArgs> = {}>(args?: Subset<T, Employee$activatedKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly supabaseUserId: FieldRef<"Employee", 'String'>
    readonly companyName: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly role: FieldRef<"Employee", 'EmployeeRole'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.performedActivations
   */
  export type Employee$performedActivationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    where?: ActivationWhereInput
    orderBy?: ActivationOrderByWithRelationInput | ActivationOrderByWithRelationInput[]
    cursor?: ActivationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivationScalarFieldEnum | ActivationScalarFieldEnum[]
  }

  /**
   * Employee.activatedKeys
   */
  export type Employee$activatedKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    where?: LicenseKeyWhereInput
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    cursor?: LicenseKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseKeyScalarFieldEnum | LicenseKeyScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Software
   */

  export type AggregateSoftware = {
    _count: SoftwareCountAggregateOutputType | null
    _avg: SoftwareAvgAggregateOutputType | null
    _sum: SoftwareSumAggregateOutputType | null
    _min: SoftwareMinAggregateOutputType | null
    _max: SoftwareMaxAggregateOutputType | null
  }

  export type SoftwareAvgAggregateOutputType = {
    pricePerUse: number | null
    monthlyRate: number | null
  }

  export type SoftwareSumAggregateOutputType = {
    pricePerUse: number | null
    monthlyRate: number | null
  }

  export type SoftwareMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    vendorId: string | null
    pricingModel: $Enums.PricingModel | null
    pricePerUse: number | null
    monthlyRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoftwareMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    vendorId: string | null
    pricingModel: $Enums.PricingModel | null
    pricePerUse: number | null
    monthlyRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoftwareCountAggregateOutputType = {
    id: number
    name: number
    description: number
    vendorId: number
    pricingModel: number
    pricePerUse: number
    monthlyRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SoftwareAvgAggregateInputType = {
    pricePerUse?: true
    monthlyRate?: true
  }

  export type SoftwareSumAggregateInputType = {
    pricePerUse?: true
    monthlyRate?: true
  }

  export type SoftwareMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    vendorId?: true
    pricingModel?: true
    pricePerUse?: true
    monthlyRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoftwareMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    vendorId?: true
    pricingModel?: true
    pricePerUse?: true
    monthlyRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoftwareCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    vendorId?: true
    pricingModel?: true
    pricePerUse?: true
    monthlyRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SoftwareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Software to aggregate.
     */
    where?: SoftwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Software to fetch.
     */
    orderBy?: SoftwareOrderByWithRelationInput | SoftwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoftwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Software from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Software.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Software
    **/
    _count?: true | SoftwareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoftwareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoftwareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoftwareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoftwareMaxAggregateInputType
  }

  export type GetSoftwareAggregateType<T extends SoftwareAggregateArgs> = {
        [P in keyof T & keyof AggregateSoftware]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoftware[P]>
      : GetScalarType<T[P], AggregateSoftware[P]>
  }




  export type SoftwareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoftwareWhereInput
    orderBy?: SoftwareOrderByWithAggregationInput | SoftwareOrderByWithAggregationInput[]
    by: SoftwareScalarFieldEnum[] | SoftwareScalarFieldEnum
    having?: SoftwareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoftwareCountAggregateInputType | true
    _avg?: SoftwareAvgAggregateInputType
    _sum?: SoftwareSumAggregateInputType
    _min?: SoftwareMinAggregateInputType
    _max?: SoftwareMaxAggregateInputType
  }

  export type SoftwareGroupByOutputType = {
    id: string
    name: string
    description: string | null
    vendorId: string
    pricingModel: $Enums.PricingModel
    pricePerUse: number | null
    monthlyRate: number | null
    createdAt: Date
    updatedAt: Date
    _count: SoftwareCountAggregateOutputType | null
    _avg: SoftwareAvgAggregateOutputType | null
    _sum: SoftwareSumAggregateOutputType | null
    _min: SoftwareMinAggregateOutputType | null
    _max: SoftwareMaxAggregateOutputType | null
  }

  type GetSoftwareGroupByPayload<T extends SoftwareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoftwareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoftwareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoftwareGroupByOutputType[P]>
            : GetScalarType<T[P], SoftwareGroupByOutputType[P]>
        }
      >
    >


  export type SoftwareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    vendorId?: boolean
    pricingModel?: boolean
    pricePerUse?: boolean
    monthlyRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activations?: boolean | Software$activationsArgs<ExtArgs>
    licenseKeys?: boolean | Software$licenseKeysArgs<ExtArgs>
    monthlyUsage?: boolean | Software$monthlyUsageArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    _count?: boolean | SoftwareCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["software"]>

  export type SoftwareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    vendorId?: boolean
    pricingModel?: boolean
    pricePerUse?: boolean
    monthlyRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["software"]>

  export type SoftwareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    vendorId?: boolean
    pricingModel?: boolean
    pricePerUse?: boolean
    monthlyRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["software"]>

  export type SoftwareSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    vendorId?: boolean
    pricingModel?: boolean
    pricePerUse?: boolean
    monthlyRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SoftwareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "vendorId" | "pricingModel" | "pricePerUse" | "monthlyRate" | "createdAt" | "updatedAt", ExtArgs["result"]["software"]>
  export type SoftwareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activations?: boolean | Software$activationsArgs<ExtArgs>
    licenseKeys?: boolean | Software$licenseKeysArgs<ExtArgs>
    monthlyUsage?: boolean | Software$monthlyUsageArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    _count?: boolean | SoftwareCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SoftwareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type SoftwareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $SoftwarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Software"
    objects: {
      activations: Prisma.$ActivationPayload<ExtArgs>[]
      licenseKeys: Prisma.$LicenseKeyPayload<ExtArgs>[]
      monthlyUsage: Prisma.$MonthlyUsagePayload<ExtArgs>[]
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      vendorId: string
      pricingModel: $Enums.PricingModel
      pricePerUse: number | null
      monthlyRate: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["software"]>
    composites: {}
  }

  type SoftwareGetPayload<S extends boolean | null | undefined | SoftwareDefaultArgs> = $Result.GetResult<Prisma.$SoftwarePayload, S>

  type SoftwareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoftwareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoftwareCountAggregateInputType | true
    }

  export interface SoftwareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Software'], meta: { name: 'Software' } }
    /**
     * Find zero or one Software that matches the filter.
     * @param {SoftwareFindUniqueArgs} args - Arguments to find a Software
     * @example
     * // Get one Software
     * const software = await prisma.software.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoftwareFindUniqueArgs>(args: SelectSubset<T, SoftwareFindUniqueArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Software that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoftwareFindUniqueOrThrowArgs} args - Arguments to find a Software
     * @example
     * // Get one Software
     * const software = await prisma.software.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoftwareFindUniqueOrThrowArgs>(args: SelectSubset<T, SoftwareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Software that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareFindFirstArgs} args - Arguments to find a Software
     * @example
     * // Get one Software
     * const software = await prisma.software.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoftwareFindFirstArgs>(args?: SelectSubset<T, SoftwareFindFirstArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Software that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareFindFirstOrThrowArgs} args - Arguments to find a Software
     * @example
     * // Get one Software
     * const software = await prisma.software.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoftwareFindFirstOrThrowArgs>(args?: SelectSubset<T, SoftwareFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Software that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Software
     * const software = await prisma.software.findMany()
     * 
     * // Get first 10 Software
     * const software = await prisma.software.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const softwareWithIdOnly = await prisma.software.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SoftwareFindManyArgs>(args?: SelectSubset<T, SoftwareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Software.
     * @param {SoftwareCreateArgs} args - Arguments to create a Software.
     * @example
     * // Create one Software
     * const Software = await prisma.software.create({
     *   data: {
     *     // ... data to create a Software
     *   }
     * })
     * 
     */
    create<T extends SoftwareCreateArgs>(args: SelectSubset<T, SoftwareCreateArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Software.
     * @param {SoftwareCreateManyArgs} args - Arguments to create many Software.
     * @example
     * // Create many Software
     * const software = await prisma.software.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoftwareCreateManyArgs>(args?: SelectSubset<T, SoftwareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Software and returns the data saved in the database.
     * @param {SoftwareCreateManyAndReturnArgs} args - Arguments to create many Software.
     * @example
     * // Create many Software
     * const software = await prisma.software.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Software and only return the `id`
     * const softwareWithIdOnly = await prisma.software.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SoftwareCreateManyAndReturnArgs>(args?: SelectSubset<T, SoftwareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Software.
     * @param {SoftwareDeleteArgs} args - Arguments to delete one Software.
     * @example
     * // Delete one Software
     * const Software = await prisma.software.delete({
     *   where: {
     *     // ... filter to delete one Software
     *   }
     * })
     * 
     */
    delete<T extends SoftwareDeleteArgs>(args: SelectSubset<T, SoftwareDeleteArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Software.
     * @param {SoftwareUpdateArgs} args - Arguments to update one Software.
     * @example
     * // Update one Software
     * const software = await prisma.software.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoftwareUpdateArgs>(args: SelectSubset<T, SoftwareUpdateArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Software.
     * @param {SoftwareDeleteManyArgs} args - Arguments to filter Software to delete.
     * @example
     * // Delete a few Software
     * const { count } = await prisma.software.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoftwareDeleteManyArgs>(args?: SelectSubset<T, SoftwareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Software.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Software
     * const software = await prisma.software.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoftwareUpdateManyArgs>(args: SelectSubset<T, SoftwareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Software and returns the data updated in the database.
     * @param {SoftwareUpdateManyAndReturnArgs} args - Arguments to update many Software.
     * @example
     * // Update many Software
     * const software = await prisma.software.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Software and only return the `id`
     * const softwareWithIdOnly = await prisma.software.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SoftwareUpdateManyAndReturnArgs>(args: SelectSubset<T, SoftwareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Software.
     * @param {SoftwareUpsertArgs} args - Arguments to update or create a Software.
     * @example
     * // Update or create a Software
     * const software = await prisma.software.upsert({
     *   create: {
     *     // ... data to create a Software
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Software we want to update
     *   }
     * })
     */
    upsert<T extends SoftwareUpsertArgs>(args: SelectSubset<T, SoftwareUpsertArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Software.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareCountArgs} args - Arguments to filter Software to count.
     * @example
     * // Count the number of Software
     * const count = await prisma.software.count({
     *   where: {
     *     // ... the filter for the Software we want to count
     *   }
     * })
    **/
    count<T extends SoftwareCountArgs>(
      args?: Subset<T, SoftwareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoftwareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Software.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoftwareAggregateArgs>(args: Subset<T, SoftwareAggregateArgs>): Prisma.PrismaPromise<GetSoftwareAggregateType<T>>

    /**
     * Group by Software.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoftwareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoftwareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoftwareGroupByArgs['orderBy'] }
        : { orderBy?: SoftwareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoftwareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoftwareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Software model
   */
  readonly fields: SoftwareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Software.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoftwareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activations<T extends Software$activationsArgs<ExtArgs> = {}>(args?: Subset<T, Software$activationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licenseKeys<T extends Software$licenseKeysArgs<ExtArgs> = {}>(args?: Subset<T, Software$licenseKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyUsage<T extends Software$monthlyUsageArgs<ExtArgs> = {}>(args?: Subset<T, Software$monthlyUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Software model
   */
  interface SoftwareFieldRefs {
    readonly id: FieldRef<"Software", 'String'>
    readonly name: FieldRef<"Software", 'String'>
    readonly description: FieldRef<"Software", 'String'>
    readonly vendorId: FieldRef<"Software", 'String'>
    readonly pricingModel: FieldRef<"Software", 'PricingModel'>
    readonly pricePerUse: FieldRef<"Software", 'Float'>
    readonly monthlyRate: FieldRef<"Software", 'Float'>
    readonly createdAt: FieldRef<"Software", 'DateTime'>
    readonly updatedAt: FieldRef<"Software", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Software findUnique
   */
  export type SoftwareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    /**
     * Filter, which Software to fetch.
     */
    where: SoftwareWhereUniqueInput
  }

  /**
   * Software findUniqueOrThrow
   */
  export type SoftwareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    /**
     * Filter, which Software to fetch.
     */
    where: SoftwareWhereUniqueInput
  }

  /**
   * Software findFirst
   */
  export type SoftwareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    /**
     * Filter, which Software to fetch.
     */
    where?: SoftwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Software to fetch.
     */
    orderBy?: SoftwareOrderByWithRelationInput | SoftwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Software.
     */
    cursor?: SoftwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Software from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Software.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Software.
     */
    distinct?: SoftwareScalarFieldEnum | SoftwareScalarFieldEnum[]
  }

  /**
   * Software findFirstOrThrow
   */
  export type SoftwareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    /**
     * Filter, which Software to fetch.
     */
    where?: SoftwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Software to fetch.
     */
    orderBy?: SoftwareOrderByWithRelationInput | SoftwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Software.
     */
    cursor?: SoftwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Software from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Software.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Software.
     */
    distinct?: SoftwareScalarFieldEnum | SoftwareScalarFieldEnum[]
  }

  /**
   * Software findMany
   */
  export type SoftwareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    /**
     * Filter, which Software to fetch.
     */
    where?: SoftwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Software to fetch.
     */
    orderBy?: SoftwareOrderByWithRelationInput | SoftwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Software.
     */
    cursor?: SoftwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Software from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Software.
     */
    skip?: number
    distinct?: SoftwareScalarFieldEnum | SoftwareScalarFieldEnum[]
  }

  /**
   * Software create
   */
  export type SoftwareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    /**
     * The data needed to create a Software.
     */
    data: XOR<SoftwareCreateInput, SoftwareUncheckedCreateInput>
  }

  /**
   * Software createMany
   */
  export type SoftwareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Software.
     */
    data: SoftwareCreateManyInput | SoftwareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Software createManyAndReturn
   */
  export type SoftwareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * The data used to create many Software.
     */
    data: SoftwareCreateManyInput | SoftwareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Software update
   */
  export type SoftwareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    /**
     * The data needed to update a Software.
     */
    data: XOR<SoftwareUpdateInput, SoftwareUncheckedUpdateInput>
    /**
     * Choose, which Software to update.
     */
    where: SoftwareWhereUniqueInput
  }

  /**
   * Software updateMany
   */
  export type SoftwareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Software.
     */
    data: XOR<SoftwareUpdateManyMutationInput, SoftwareUncheckedUpdateManyInput>
    /**
     * Filter which Software to update
     */
    where?: SoftwareWhereInput
    /**
     * Limit how many Software to update.
     */
    limit?: number
  }

  /**
   * Software updateManyAndReturn
   */
  export type SoftwareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * The data used to update Software.
     */
    data: XOR<SoftwareUpdateManyMutationInput, SoftwareUncheckedUpdateManyInput>
    /**
     * Filter which Software to update
     */
    where?: SoftwareWhereInput
    /**
     * Limit how many Software to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Software upsert
   */
  export type SoftwareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    /**
     * The filter to search for the Software to update in case it exists.
     */
    where: SoftwareWhereUniqueInput
    /**
     * In case the Software found by the `where` argument doesn't exist, create a new Software with this data.
     */
    create: XOR<SoftwareCreateInput, SoftwareUncheckedCreateInput>
    /**
     * In case the Software was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoftwareUpdateInput, SoftwareUncheckedUpdateInput>
  }

  /**
   * Software delete
   */
  export type SoftwareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
    /**
     * Filter which Software to delete.
     */
    where: SoftwareWhereUniqueInput
  }

  /**
   * Software deleteMany
   */
  export type SoftwareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Software to delete
     */
    where?: SoftwareWhereInput
    /**
     * Limit how many Software to delete.
     */
    limit?: number
  }

  /**
   * Software.activations
   */
  export type Software$activationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    where?: ActivationWhereInput
    orderBy?: ActivationOrderByWithRelationInput | ActivationOrderByWithRelationInput[]
    cursor?: ActivationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivationScalarFieldEnum | ActivationScalarFieldEnum[]
  }

  /**
   * Software.licenseKeys
   */
  export type Software$licenseKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    where?: LicenseKeyWhereInput
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    cursor?: LicenseKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseKeyScalarFieldEnum | LicenseKeyScalarFieldEnum[]
  }

  /**
   * Software.monthlyUsage
   */
  export type Software$monthlyUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    where?: MonthlyUsageWhereInput
    orderBy?: MonthlyUsageOrderByWithRelationInput | MonthlyUsageOrderByWithRelationInput[]
    cursor?: MonthlyUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyUsageScalarFieldEnum | MonthlyUsageScalarFieldEnum[]
  }

  /**
   * Software without action
   */
  export type SoftwareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Software
     */
    select?: SoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Software
     */
    omit?: SoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoftwareInclude<ExtArgs> | null
  }


  /**
   * Model LicenseKey
   */

  export type AggregateLicenseKey = {
    _count: LicenseKeyCountAggregateOutputType | null
    _min: LicenseKeyMinAggregateOutputType | null
    _max: LicenseKeyMaxAggregateOutputType | null
  }

  export type LicenseKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    status: $Enums.LicenseStatus | null
    vendorId: string | null
    softwareId: string | null
    expiresAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    activatedAt: Date | null
    activatedById: string | null
    canceledAt: Date | null
    canceledReason: string | null
  }

  export type LicenseKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    status: $Enums.LicenseStatus | null
    vendorId: string | null
    softwareId: string | null
    expiresAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    activatedAt: Date | null
    activatedById: string | null
    canceledAt: Date | null
    canceledReason: string | null
  }

  export type LicenseKeyCountAggregateOutputType = {
    id: number
    key: number
    status: number
    vendorId: number
    softwareId: number
    expiresAt: number
    notes: number
    createdAt: number
    updatedAt: number
    activatedAt: number
    activatedById: number
    canceledAt: number
    canceledReason: number
    _all: number
  }


  export type LicenseKeyMinAggregateInputType = {
    id?: true
    key?: true
    status?: true
    vendorId?: true
    softwareId?: true
    expiresAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    activatedAt?: true
    activatedById?: true
    canceledAt?: true
    canceledReason?: true
  }

  export type LicenseKeyMaxAggregateInputType = {
    id?: true
    key?: true
    status?: true
    vendorId?: true
    softwareId?: true
    expiresAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    activatedAt?: true
    activatedById?: true
    canceledAt?: true
    canceledReason?: true
  }

  export type LicenseKeyCountAggregateInputType = {
    id?: true
    key?: true
    status?: true
    vendorId?: true
    softwareId?: true
    expiresAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    activatedAt?: true
    activatedById?: true
    canceledAt?: true
    canceledReason?: true
    _all?: true
  }

  export type LicenseKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseKey to aggregate.
     */
    where?: LicenseKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseKeys to fetch.
     */
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseKeys
    **/
    _count?: true | LicenseKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseKeyMaxAggregateInputType
  }

  export type GetLicenseKeyAggregateType<T extends LicenseKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseKey[P]>
      : GetScalarType<T[P], AggregateLicenseKey[P]>
  }




  export type LicenseKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseKeyWhereInput
    orderBy?: LicenseKeyOrderByWithAggregationInput | LicenseKeyOrderByWithAggregationInput[]
    by: LicenseKeyScalarFieldEnum[] | LicenseKeyScalarFieldEnum
    having?: LicenseKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseKeyCountAggregateInputType | true
    _min?: LicenseKeyMinAggregateInputType
    _max?: LicenseKeyMaxAggregateInputType
  }

  export type LicenseKeyGroupByOutputType = {
    id: string
    key: string
    status: $Enums.LicenseStatus
    vendorId: string
    softwareId: string
    expiresAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    activatedAt: Date | null
    activatedById: string | null
    canceledAt: Date | null
    canceledReason: string | null
    _count: LicenseKeyCountAggregateOutputType | null
    _min: LicenseKeyMinAggregateOutputType | null
    _max: LicenseKeyMaxAggregateOutputType | null
  }

  type GetLicenseKeyGroupByPayload<T extends LicenseKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseKeyGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseKeyGroupByOutputType[P]>
        }
      >
    >


  export type LicenseKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    vendorId?: boolean
    softwareId?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activatedAt?: boolean
    activatedById?: boolean
    canceledAt?: boolean
    canceledReason?: boolean
    activation?: boolean | LicenseKey$activationArgs<ExtArgs>
    activatedBy?: boolean | LicenseKey$activatedByArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseKey"]>

  export type LicenseKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    vendorId?: boolean
    softwareId?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activatedAt?: boolean
    activatedById?: boolean
    canceledAt?: boolean
    canceledReason?: boolean
    activatedBy?: boolean | LicenseKey$activatedByArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseKey"]>

  export type LicenseKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    status?: boolean
    vendorId?: boolean
    softwareId?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activatedAt?: boolean
    activatedById?: boolean
    canceledAt?: boolean
    canceledReason?: boolean
    activatedBy?: boolean | LicenseKey$activatedByArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseKey"]>

  export type LicenseKeySelectScalar = {
    id?: boolean
    key?: boolean
    status?: boolean
    vendorId?: boolean
    softwareId?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activatedAt?: boolean
    activatedById?: boolean
    canceledAt?: boolean
    canceledReason?: boolean
  }

  export type LicenseKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "status" | "vendorId" | "softwareId" | "expiresAt" | "notes" | "createdAt" | "updatedAt" | "activatedAt" | "activatedById" | "canceledAt" | "canceledReason", ExtArgs["result"]["licenseKey"]>
  export type LicenseKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activation?: boolean | LicenseKey$activationArgs<ExtArgs>
    activatedBy?: boolean | LicenseKey$activatedByArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type LicenseKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activatedBy?: boolean | LicenseKey$activatedByArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type LicenseKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activatedBy?: boolean | LicenseKey$activatedByArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $LicenseKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseKey"
    objects: {
      activation: Prisma.$ActivationPayload<ExtArgs> | null
      activatedBy: Prisma.$EmployeePayload<ExtArgs> | null
      software: Prisma.$SoftwarePayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      status: $Enums.LicenseStatus
      vendorId: string
      softwareId: string
      expiresAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      activatedAt: Date | null
      activatedById: string | null
      canceledAt: Date | null
      canceledReason: string | null
    }, ExtArgs["result"]["licenseKey"]>
    composites: {}
  }

  type LicenseKeyGetPayload<S extends boolean | null | undefined | LicenseKeyDefaultArgs> = $Result.GetResult<Prisma.$LicenseKeyPayload, S>

  type LicenseKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseKeyCountAggregateInputType | true
    }

  export interface LicenseKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseKey'], meta: { name: 'LicenseKey' } }
    /**
     * Find zero or one LicenseKey that matches the filter.
     * @param {LicenseKeyFindUniqueArgs} args - Arguments to find a LicenseKey
     * @example
     * // Get one LicenseKey
     * const licenseKey = await prisma.licenseKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseKeyFindUniqueArgs>(args: SelectSubset<T, LicenseKeyFindUniqueArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LicenseKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseKeyFindUniqueOrThrowArgs} args - Arguments to find a LicenseKey
     * @example
     * // Get one LicenseKey
     * const licenseKey = await prisma.licenseKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicenseKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyFindFirstArgs} args - Arguments to find a LicenseKey
     * @example
     * // Get one LicenseKey
     * const licenseKey = await prisma.licenseKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseKeyFindFirstArgs>(args?: SelectSubset<T, LicenseKeyFindFirstArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicenseKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyFindFirstOrThrowArgs} args - Arguments to find a LicenseKey
     * @example
     * // Get one LicenseKey
     * const licenseKey = await prisma.licenseKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LicenseKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseKeys
     * const licenseKeys = await prisma.licenseKey.findMany()
     * 
     * // Get first 10 LicenseKeys
     * const licenseKeys = await prisma.licenseKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseKeyWithIdOnly = await prisma.licenseKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseKeyFindManyArgs>(args?: SelectSubset<T, LicenseKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LicenseKey.
     * @param {LicenseKeyCreateArgs} args - Arguments to create a LicenseKey.
     * @example
     * // Create one LicenseKey
     * const LicenseKey = await prisma.licenseKey.create({
     *   data: {
     *     // ... data to create a LicenseKey
     *   }
     * })
     * 
     */
    create<T extends LicenseKeyCreateArgs>(args: SelectSubset<T, LicenseKeyCreateArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LicenseKeys.
     * @param {LicenseKeyCreateManyArgs} args - Arguments to create many LicenseKeys.
     * @example
     * // Create many LicenseKeys
     * const licenseKey = await prisma.licenseKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseKeyCreateManyArgs>(args?: SelectSubset<T, LicenseKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseKeys and returns the data saved in the database.
     * @param {LicenseKeyCreateManyAndReturnArgs} args - Arguments to create many LicenseKeys.
     * @example
     * // Create many LicenseKeys
     * const licenseKey = await prisma.licenseKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseKeys and only return the `id`
     * const licenseKeyWithIdOnly = await prisma.licenseKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LicenseKey.
     * @param {LicenseKeyDeleteArgs} args - Arguments to delete one LicenseKey.
     * @example
     * // Delete one LicenseKey
     * const LicenseKey = await prisma.licenseKey.delete({
     *   where: {
     *     // ... filter to delete one LicenseKey
     *   }
     * })
     * 
     */
    delete<T extends LicenseKeyDeleteArgs>(args: SelectSubset<T, LicenseKeyDeleteArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LicenseKey.
     * @param {LicenseKeyUpdateArgs} args - Arguments to update one LicenseKey.
     * @example
     * // Update one LicenseKey
     * const licenseKey = await prisma.licenseKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseKeyUpdateArgs>(args: SelectSubset<T, LicenseKeyUpdateArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LicenseKeys.
     * @param {LicenseKeyDeleteManyArgs} args - Arguments to filter LicenseKeys to delete.
     * @example
     * // Delete a few LicenseKeys
     * const { count } = await prisma.licenseKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseKeyDeleteManyArgs>(args?: SelectSubset<T, LicenseKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseKeys
     * const licenseKey = await prisma.licenseKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseKeyUpdateManyArgs>(args: SelectSubset<T, LicenseKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseKeys and returns the data updated in the database.
     * @param {LicenseKeyUpdateManyAndReturnArgs} args - Arguments to update many LicenseKeys.
     * @example
     * // Update many LicenseKeys
     * const licenseKey = await prisma.licenseKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LicenseKeys and only return the `id`
     * const licenseKeyWithIdOnly = await prisma.licenseKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LicenseKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LicenseKey.
     * @param {LicenseKeyUpsertArgs} args - Arguments to update or create a LicenseKey.
     * @example
     * // Update or create a LicenseKey
     * const licenseKey = await prisma.licenseKey.upsert({
     *   create: {
     *     // ... data to create a LicenseKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseKey we want to update
     *   }
     * })
     */
    upsert<T extends LicenseKeyUpsertArgs>(args: SelectSubset<T, LicenseKeyUpsertArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LicenseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyCountArgs} args - Arguments to filter LicenseKeys to count.
     * @example
     * // Count the number of LicenseKeys
     * const count = await prisma.licenseKey.count({
     *   where: {
     *     // ... the filter for the LicenseKeys we want to count
     *   }
     * })
    **/
    count<T extends LicenseKeyCountArgs>(
      args?: Subset<T, LicenseKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseKeyAggregateArgs>(args: Subset<T, LicenseKeyAggregateArgs>): Prisma.PrismaPromise<GetLicenseKeyAggregateType<T>>

    /**
     * Group by LicenseKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseKeyGroupByArgs['orderBy'] }
        : { orderBy?: LicenseKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseKey model
   */
  readonly fields: LicenseKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activation<T extends LicenseKey$activationArgs<ExtArgs> = {}>(args?: Subset<T, LicenseKey$activationArgs<ExtArgs>>): Prisma__ActivationClient<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activatedBy<T extends LicenseKey$activatedByArgs<ExtArgs> = {}>(args?: Subset<T, LicenseKey$activatedByArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    software<T extends SoftwareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SoftwareDefaultArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicenseKey model
   */
  interface LicenseKeyFieldRefs {
    readonly id: FieldRef<"LicenseKey", 'String'>
    readonly key: FieldRef<"LicenseKey", 'String'>
    readonly status: FieldRef<"LicenseKey", 'LicenseStatus'>
    readonly vendorId: FieldRef<"LicenseKey", 'String'>
    readonly softwareId: FieldRef<"LicenseKey", 'String'>
    readonly expiresAt: FieldRef<"LicenseKey", 'DateTime'>
    readonly notes: FieldRef<"LicenseKey", 'String'>
    readonly createdAt: FieldRef<"LicenseKey", 'DateTime'>
    readonly updatedAt: FieldRef<"LicenseKey", 'DateTime'>
    readonly activatedAt: FieldRef<"LicenseKey", 'DateTime'>
    readonly activatedById: FieldRef<"LicenseKey", 'String'>
    readonly canceledAt: FieldRef<"LicenseKey", 'DateTime'>
    readonly canceledReason: FieldRef<"LicenseKey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LicenseKey findUnique
   */
  export type LicenseKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicenseKey to fetch.
     */
    where: LicenseKeyWhereUniqueInput
  }

  /**
   * LicenseKey findUniqueOrThrow
   */
  export type LicenseKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicenseKey to fetch.
     */
    where: LicenseKeyWhereUniqueInput
  }

  /**
   * LicenseKey findFirst
   */
  export type LicenseKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicenseKey to fetch.
     */
    where?: LicenseKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseKeys to fetch.
     */
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseKeys.
     */
    cursor?: LicenseKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseKeys.
     */
    distinct?: LicenseKeyScalarFieldEnum | LicenseKeyScalarFieldEnum[]
  }

  /**
   * LicenseKey findFirstOrThrow
   */
  export type LicenseKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicenseKey to fetch.
     */
    where?: LicenseKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseKeys to fetch.
     */
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseKeys.
     */
    cursor?: LicenseKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseKeys.
     */
    distinct?: LicenseKeyScalarFieldEnum | LicenseKeyScalarFieldEnum[]
  }

  /**
   * LicenseKey findMany
   */
  export type LicenseKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    /**
     * Filter, which LicenseKeys to fetch.
     */
    where?: LicenseKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseKeys to fetch.
     */
    orderBy?: LicenseKeyOrderByWithRelationInput | LicenseKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseKeys.
     */
    cursor?: LicenseKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseKeys.
     */
    skip?: number
    distinct?: LicenseKeyScalarFieldEnum | LicenseKeyScalarFieldEnum[]
  }

  /**
   * LicenseKey create
   */
  export type LicenseKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a LicenseKey.
     */
    data: XOR<LicenseKeyCreateInput, LicenseKeyUncheckedCreateInput>
  }

  /**
   * LicenseKey createMany
   */
  export type LicenseKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseKeys.
     */
    data: LicenseKeyCreateManyInput | LicenseKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseKey createManyAndReturn
   */
  export type LicenseKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * The data used to create many LicenseKeys.
     */
    data: LicenseKeyCreateManyInput | LicenseKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseKey update
   */
  export type LicenseKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a LicenseKey.
     */
    data: XOR<LicenseKeyUpdateInput, LicenseKeyUncheckedUpdateInput>
    /**
     * Choose, which LicenseKey to update.
     */
    where: LicenseKeyWhereUniqueInput
  }

  /**
   * LicenseKey updateMany
   */
  export type LicenseKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseKeys.
     */
    data: XOR<LicenseKeyUpdateManyMutationInput, LicenseKeyUncheckedUpdateManyInput>
    /**
     * Filter which LicenseKeys to update
     */
    where?: LicenseKeyWhereInput
    /**
     * Limit how many LicenseKeys to update.
     */
    limit?: number
  }

  /**
   * LicenseKey updateManyAndReturn
   */
  export type LicenseKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * The data used to update LicenseKeys.
     */
    data: XOR<LicenseKeyUpdateManyMutationInput, LicenseKeyUncheckedUpdateManyInput>
    /**
     * Filter which LicenseKeys to update
     */
    where?: LicenseKeyWhereInput
    /**
     * Limit how many LicenseKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseKey upsert
   */
  export type LicenseKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the LicenseKey to update in case it exists.
     */
    where: LicenseKeyWhereUniqueInput
    /**
     * In case the LicenseKey found by the `where` argument doesn't exist, create a new LicenseKey with this data.
     */
    create: XOR<LicenseKeyCreateInput, LicenseKeyUncheckedCreateInput>
    /**
     * In case the LicenseKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseKeyUpdateInput, LicenseKeyUncheckedUpdateInput>
  }

  /**
   * LicenseKey delete
   */
  export type LicenseKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
    /**
     * Filter which LicenseKey to delete.
     */
    where: LicenseKeyWhereUniqueInput
  }

  /**
   * LicenseKey deleteMany
   */
  export type LicenseKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseKeys to delete
     */
    where?: LicenseKeyWhereInput
    /**
     * Limit how many LicenseKeys to delete.
     */
    limit?: number
  }

  /**
   * LicenseKey.activation
   */
  export type LicenseKey$activationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    where?: ActivationWhereInput
  }

  /**
   * LicenseKey.activatedBy
   */
  export type LicenseKey$activatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * LicenseKey without action
   */
  export type LicenseKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseKey
     */
    select?: LicenseKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseKey
     */
    omit?: LicenseKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseKeyInclude<ExtArgs> | null
  }


  /**
   * Model Activation
   */

  export type AggregateActivation = {
    _count: ActivationCountAggregateOutputType | null
    _min: ActivationMinAggregateOutputType | null
    _max: ActivationMaxAggregateOutputType | null
  }

  export type ActivationMinAggregateOutputType = {
    id: string | null
    licenseKeyId: string | null
    activatedById: string | null
    softwareId: string | null
    vendorId: string | null
    headsetSerialNumber: string | null
    activatedAt: Date | null
    createdAt: Date | null
  }

  export type ActivationMaxAggregateOutputType = {
    id: string | null
    licenseKeyId: string | null
    activatedById: string | null
    softwareId: string | null
    vendorId: string | null
    headsetSerialNumber: string | null
    activatedAt: Date | null
    createdAt: Date | null
  }

  export type ActivationCountAggregateOutputType = {
    id: number
    licenseKeyId: number
    activatedById: number
    softwareId: number
    vendorId: number
    headsetSerialNumber: number
    activatedAt: number
    createdAt: number
    _all: number
  }


  export type ActivationMinAggregateInputType = {
    id?: true
    licenseKeyId?: true
    activatedById?: true
    softwareId?: true
    vendorId?: true
    headsetSerialNumber?: true
    activatedAt?: true
    createdAt?: true
  }

  export type ActivationMaxAggregateInputType = {
    id?: true
    licenseKeyId?: true
    activatedById?: true
    softwareId?: true
    vendorId?: true
    headsetSerialNumber?: true
    activatedAt?: true
    createdAt?: true
  }

  export type ActivationCountAggregateInputType = {
    id?: true
    licenseKeyId?: true
    activatedById?: true
    softwareId?: true
    vendorId?: true
    headsetSerialNumber?: true
    activatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ActivationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activation to aggregate.
     */
    where?: ActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activations to fetch.
     */
    orderBy?: ActivationOrderByWithRelationInput | ActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activations
    **/
    _count?: true | ActivationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivationMaxAggregateInputType
  }

  export type GetActivationAggregateType<T extends ActivationAggregateArgs> = {
        [P in keyof T & keyof AggregateActivation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivation[P]>
      : GetScalarType<T[P], AggregateActivation[P]>
  }




  export type ActivationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivationWhereInput
    orderBy?: ActivationOrderByWithAggregationInput | ActivationOrderByWithAggregationInput[]
    by: ActivationScalarFieldEnum[] | ActivationScalarFieldEnum
    having?: ActivationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivationCountAggregateInputType | true
    _min?: ActivationMinAggregateInputType
    _max?: ActivationMaxAggregateInputType
  }

  export type ActivationGroupByOutputType = {
    id: string
    licenseKeyId: string
    activatedById: string
    softwareId: string
    vendorId: string
    headsetSerialNumber: string | null
    activatedAt: Date
    createdAt: Date
    _count: ActivationCountAggregateOutputType | null
    _min: ActivationMinAggregateOutputType | null
    _max: ActivationMaxAggregateOutputType | null
  }

  type GetActivationGroupByPayload<T extends ActivationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivationGroupByOutputType[P]>
            : GetScalarType<T[P], ActivationGroupByOutputType[P]>
        }
      >
    >


  export type ActivationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKeyId?: boolean
    activatedById?: boolean
    softwareId?: boolean
    vendorId?: boolean
    headsetSerialNumber?: boolean
    activatedAt?: boolean
    createdAt?: boolean
    activatedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    licenseKey?: boolean | LicenseKeyDefaultArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activation"]>

  export type ActivationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKeyId?: boolean
    activatedById?: boolean
    softwareId?: boolean
    vendorId?: boolean
    headsetSerialNumber?: boolean
    activatedAt?: boolean
    createdAt?: boolean
    activatedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    licenseKey?: boolean | LicenseKeyDefaultArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activation"]>

  export type ActivationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKeyId?: boolean
    activatedById?: boolean
    softwareId?: boolean
    vendorId?: boolean
    headsetSerialNumber?: boolean
    activatedAt?: boolean
    createdAt?: boolean
    activatedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    licenseKey?: boolean | LicenseKeyDefaultArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activation"]>

  export type ActivationSelectScalar = {
    id?: boolean
    licenseKeyId?: boolean
    activatedById?: boolean
    softwareId?: boolean
    vendorId?: boolean
    headsetSerialNumber?: boolean
    activatedAt?: boolean
    createdAt?: boolean
  }

  export type ActivationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licenseKeyId" | "activatedById" | "softwareId" | "vendorId" | "headsetSerialNumber" | "activatedAt" | "createdAt", ExtArgs["result"]["activation"]>
  export type ActivationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activatedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    licenseKey?: boolean | LicenseKeyDefaultArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type ActivationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activatedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    licenseKey?: boolean | LicenseKeyDefaultArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type ActivationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activatedBy?: boolean | EmployeeDefaultArgs<ExtArgs>
    licenseKey?: boolean | LicenseKeyDefaultArgs<ExtArgs>
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $ActivationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activation"
    objects: {
      activatedBy: Prisma.$EmployeePayload<ExtArgs>
      licenseKey: Prisma.$LicenseKeyPayload<ExtArgs>
      software: Prisma.$SoftwarePayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseKeyId: string
      activatedById: string
      softwareId: string
      vendorId: string
      headsetSerialNumber: string | null
      activatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["activation"]>
    composites: {}
  }

  type ActivationGetPayload<S extends boolean | null | undefined | ActivationDefaultArgs> = $Result.GetResult<Prisma.$ActivationPayload, S>

  type ActivationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivationCountAggregateInputType | true
    }

  export interface ActivationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activation'], meta: { name: 'Activation' } }
    /**
     * Find zero or one Activation that matches the filter.
     * @param {ActivationFindUniqueArgs} args - Arguments to find a Activation
     * @example
     * // Get one Activation
     * const activation = await prisma.activation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivationFindUniqueArgs>(args: SelectSubset<T, ActivationFindUniqueArgs<ExtArgs>>): Prisma__ActivationClient<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivationFindUniqueOrThrowArgs} args - Arguments to find a Activation
     * @example
     * // Get one Activation
     * const activation = await prisma.activation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivationFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivationClient<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationFindFirstArgs} args - Arguments to find a Activation
     * @example
     * // Get one Activation
     * const activation = await prisma.activation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivationFindFirstArgs>(args?: SelectSubset<T, ActivationFindFirstArgs<ExtArgs>>): Prisma__ActivationClient<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationFindFirstOrThrowArgs} args - Arguments to find a Activation
     * @example
     * // Get one Activation
     * const activation = await prisma.activation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivationFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivationClient<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activations
     * const activations = await prisma.activation.findMany()
     * 
     * // Get first 10 Activations
     * const activations = await prisma.activation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activationWithIdOnly = await prisma.activation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivationFindManyArgs>(args?: SelectSubset<T, ActivationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activation.
     * @param {ActivationCreateArgs} args - Arguments to create a Activation.
     * @example
     * // Create one Activation
     * const Activation = await prisma.activation.create({
     *   data: {
     *     // ... data to create a Activation
     *   }
     * })
     * 
     */
    create<T extends ActivationCreateArgs>(args: SelectSubset<T, ActivationCreateArgs<ExtArgs>>): Prisma__ActivationClient<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activations.
     * @param {ActivationCreateManyArgs} args - Arguments to create many Activations.
     * @example
     * // Create many Activations
     * const activation = await prisma.activation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivationCreateManyArgs>(args?: SelectSubset<T, ActivationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activations and returns the data saved in the database.
     * @param {ActivationCreateManyAndReturnArgs} args - Arguments to create many Activations.
     * @example
     * // Create many Activations
     * const activation = await prisma.activation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activations and only return the `id`
     * const activationWithIdOnly = await prisma.activation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivationCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activation.
     * @param {ActivationDeleteArgs} args - Arguments to delete one Activation.
     * @example
     * // Delete one Activation
     * const Activation = await prisma.activation.delete({
     *   where: {
     *     // ... filter to delete one Activation
     *   }
     * })
     * 
     */
    delete<T extends ActivationDeleteArgs>(args: SelectSubset<T, ActivationDeleteArgs<ExtArgs>>): Prisma__ActivationClient<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activation.
     * @param {ActivationUpdateArgs} args - Arguments to update one Activation.
     * @example
     * // Update one Activation
     * const activation = await prisma.activation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivationUpdateArgs>(args: SelectSubset<T, ActivationUpdateArgs<ExtArgs>>): Prisma__ActivationClient<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activations.
     * @param {ActivationDeleteManyArgs} args - Arguments to filter Activations to delete.
     * @example
     * // Delete a few Activations
     * const { count } = await prisma.activation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivationDeleteManyArgs>(args?: SelectSubset<T, ActivationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activations
     * const activation = await prisma.activation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivationUpdateManyArgs>(args: SelectSubset<T, ActivationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activations and returns the data updated in the database.
     * @param {ActivationUpdateManyAndReturnArgs} args - Arguments to update many Activations.
     * @example
     * // Update many Activations
     * const activation = await prisma.activation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activations and only return the `id`
     * const activationWithIdOnly = await prisma.activation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivationUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activation.
     * @param {ActivationUpsertArgs} args - Arguments to update or create a Activation.
     * @example
     * // Update or create a Activation
     * const activation = await prisma.activation.upsert({
     *   create: {
     *     // ... data to create a Activation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activation we want to update
     *   }
     * })
     */
    upsert<T extends ActivationUpsertArgs>(args: SelectSubset<T, ActivationUpsertArgs<ExtArgs>>): Prisma__ActivationClient<$Result.GetResult<Prisma.$ActivationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationCountArgs} args - Arguments to filter Activations to count.
     * @example
     * // Count the number of Activations
     * const count = await prisma.activation.count({
     *   where: {
     *     // ... the filter for the Activations we want to count
     *   }
     * })
    **/
    count<T extends ActivationCountArgs>(
      args?: Subset<T, ActivationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivationAggregateArgs>(args: Subset<T, ActivationAggregateArgs>): Prisma.PrismaPromise<GetActivationAggregateType<T>>

    /**
     * Group by Activation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivationGroupByArgs['orderBy'] }
        : { orderBy?: ActivationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activation model
   */
  readonly fields: ActivationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activatedBy<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    licenseKey<T extends LicenseKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseKeyDefaultArgs<ExtArgs>>): Prisma__LicenseKeyClient<$Result.GetResult<Prisma.$LicenseKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    software<T extends SoftwareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SoftwareDefaultArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activation model
   */
  interface ActivationFieldRefs {
    readonly id: FieldRef<"Activation", 'String'>
    readonly licenseKeyId: FieldRef<"Activation", 'String'>
    readonly activatedById: FieldRef<"Activation", 'String'>
    readonly softwareId: FieldRef<"Activation", 'String'>
    readonly vendorId: FieldRef<"Activation", 'String'>
    readonly headsetSerialNumber: FieldRef<"Activation", 'String'>
    readonly activatedAt: FieldRef<"Activation", 'DateTime'>
    readonly createdAt: FieldRef<"Activation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activation findUnique
   */
  export type ActivationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    /**
     * Filter, which Activation to fetch.
     */
    where: ActivationWhereUniqueInput
  }

  /**
   * Activation findUniqueOrThrow
   */
  export type ActivationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    /**
     * Filter, which Activation to fetch.
     */
    where: ActivationWhereUniqueInput
  }

  /**
   * Activation findFirst
   */
  export type ActivationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    /**
     * Filter, which Activation to fetch.
     */
    where?: ActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activations to fetch.
     */
    orderBy?: ActivationOrderByWithRelationInput | ActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activations.
     */
    cursor?: ActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activations.
     */
    distinct?: ActivationScalarFieldEnum | ActivationScalarFieldEnum[]
  }

  /**
   * Activation findFirstOrThrow
   */
  export type ActivationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    /**
     * Filter, which Activation to fetch.
     */
    where?: ActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activations to fetch.
     */
    orderBy?: ActivationOrderByWithRelationInput | ActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activations.
     */
    cursor?: ActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activations.
     */
    distinct?: ActivationScalarFieldEnum | ActivationScalarFieldEnum[]
  }

  /**
   * Activation findMany
   */
  export type ActivationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    /**
     * Filter, which Activations to fetch.
     */
    where?: ActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activations to fetch.
     */
    orderBy?: ActivationOrderByWithRelationInput | ActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activations.
     */
    cursor?: ActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activations.
     */
    skip?: number
    distinct?: ActivationScalarFieldEnum | ActivationScalarFieldEnum[]
  }

  /**
   * Activation create
   */
  export type ActivationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    /**
     * The data needed to create a Activation.
     */
    data: XOR<ActivationCreateInput, ActivationUncheckedCreateInput>
  }

  /**
   * Activation createMany
   */
  export type ActivationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activations.
     */
    data: ActivationCreateManyInput | ActivationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activation createManyAndReturn
   */
  export type ActivationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * The data used to create many Activations.
     */
    data: ActivationCreateManyInput | ActivationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activation update
   */
  export type ActivationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    /**
     * The data needed to update a Activation.
     */
    data: XOR<ActivationUpdateInput, ActivationUncheckedUpdateInput>
    /**
     * Choose, which Activation to update.
     */
    where: ActivationWhereUniqueInput
  }

  /**
   * Activation updateMany
   */
  export type ActivationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activations.
     */
    data: XOR<ActivationUpdateManyMutationInput, ActivationUncheckedUpdateManyInput>
    /**
     * Filter which Activations to update
     */
    where?: ActivationWhereInput
    /**
     * Limit how many Activations to update.
     */
    limit?: number
  }

  /**
   * Activation updateManyAndReturn
   */
  export type ActivationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * The data used to update Activations.
     */
    data: XOR<ActivationUpdateManyMutationInput, ActivationUncheckedUpdateManyInput>
    /**
     * Filter which Activations to update
     */
    where?: ActivationWhereInput
    /**
     * Limit how many Activations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activation upsert
   */
  export type ActivationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    /**
     * The filter to search for the Activation to update in case it exists.
     */
    where: ActivationWhereUniqueInput
    /**
     * In case the Activation found by the `where` argument doesn't exist, create a new Activation with this data.
     */
    create: XOR<ActivationCreateInput, ActivationUncheckedCreateInput>
    /**
     * In case the Activation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivationUpdateInput, ActivationUncheckedUpdateInput>
  }

  /**
   * Activation delete
   */
  export type ActivationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
    /**
     * Filter which Activation to delete.
     */
    where: ActivationWhereUniqueInput
  }

  /**
   * Activation deleteMany
   */
  export type ActivationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activations to delete
     */
    where?: ActivationWhereInput
    /**
     * Limit how many Activations to delete.
     */
    limit?: number
  }

  /**
   * Activation without action
   */
  export type ActivationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activation
     */
    select?: ActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activation
     */
    omit?: ActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyUsage
   */

  export type AggregateMonthlyUsage = {
    _count: MonthlyUsageCountAggregateOutputType | null
    _avg: MonthlyUsageAvgAggregateOutputType | null
    _sum: MonthlyUsageSumAggregateOutputType | null
    _min: MonthlyUsageMinAggregateOutputType | null
    _max: MonthlyUsageMaxAggregateOutputType | null
  }

  export type MonthlyUsageAvgAggregateOutputType = {
    usageCount: number | null
    totalOwed: number | null
  }

  export type MonthlyUsageSumAggregateOutputType = {
    usageCount: number | null
    totalOwed: number | null
  }

  export type MonthlyUsageMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    softwareId: string | null
    month: Date | null
    usageCount: number | null
    totalOwed: number | null
    calculatedAt: Date | null
  }

  export type MonthlyUsageMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    softwareId: string | null
    month: Date | null
    usageCount: number | null
    totalOwed: number | null
    calculatedAt: Date | null
  }

  export type MonthlyUsageCountAggregateOutputType = {
    id: number
    vendorId: number
    softwareId: number
    month: number
    usageCount: number
    totalOwed: number
    calculatedAt: number
    _all: number
  }


  export type MonthlyUsageAvgAggregateInputType = {
    usageCount?: true
    totalOwed?: true
  }

  export type MonthlyUsageSumAggregateInputType = {
    usageCount?: true
    totalOwed?: true
  }

  export type MonthlyUsageMinAggregateInputType = {
    id?: true
    vendorId?: true
    softwareId?: true
    month?: true
    usageCount?: true
    totalOwed?: true
    calculatedAt?: true
  }

  export type MonthlyUsageMaxAggregateInputType = {
    id?: true
    vendorId?: true
    softwareId?: true
    month?: true
    usageCount?: true
    totalOwed?: true
    calculatedAt?: true
  }

  export type MonthlyUsageCountAggregateInputType = {
    id?: true
    vendorId?: true
    softwareId?: true
    month?: true
    usageCount?: true
    totalOwed?: true
    calculatedAt?: true
    _all?: true
  }

  export type MonthlyUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyUsage to aggregate.
     */
    where?: MonthlyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyUsages to fetch.
     */
    orderBy?: MonthlyUsageOrderByWithRelationInput | MonthlyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyUsages
    **/
    _count?: true | MonthlyUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyUsageMaxAggregateInputType
  }

  export type GetMonthlyUsageAggregateType<T extends MonthlyUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyUsage[P]>
      : GetScalarType<T[P], AggregateMonthlyUsage[P]>
  }




  export type MonthlyUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyUsageWhereInput
    orderBy?: MonthlyUsageOrderByWithAggregationInput | MonthlyUsageOrderByWithAggregationInput[]
    by: MonthlyUsageScalarFieldEnum[] | MonthlyUsageScalarFieldEnum
    having?: MonthlyUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyUsageCountAggregateInputType | true
    _avg?: MonthlyUsageAvgAggregateInputType
    _sum?: MonthlyUsageSumAggregateInputType
    _min?: MonthlyUsageMinAggregateInputType
    _max?: MonthlyUsageMaxAggregateInputType
  }

  export type MonthlyUsageGroupByOutputType = {
    id: string
    vendorId: string
    softwareId: string
    month: Date
    usageCount: number
    totalOwed: number
    calculatedAt: Date
    _count: MonthlyUsageCountAggregateOutputType | null
    _avg: MonthlyUsageAvgAggregateOutputType | null
    _sum: MonthlyUsageSumAggregateOutputType | null
    _min: MonthlyUsageMinAggregateOutputType | null
    _max: MonthlyUsageMaxAggregateOutputType | null
  }

  type GetMonthlyUsageGroupByPayload<T extends MonthlyUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyUsageGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyUsageGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    softwareId?: boolean
    month?: boolean
    usageCount?: boolean
    totalOwed?: boolean
    calculatedAt?: boolean
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyUsage"]>

  export type MonthlyUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    softwareId?: boolean
    month?: boolean
    usageCount?: boolean
    totalOwed?: boolean
    calculatedAt?: boolean
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyUsage"]>

  export type MonthlyUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    softwareId?: boolean
    month?: boolean
    usageCount?: boolean
    totalOwed?: boolean
    calculatedAt?: boolean
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyUsage"]>

  export type MonthlyUsageSelectScalar = {
    id?: boolean
    vendorId?: boolean
    softwareId?: boolean
    month?: boolean
    usageCount?: boolean
    totalOwed?: boolean
    calculatedAt?: boolean
  }

  export type MonthlyUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "softwareId" | "month" | "usageCount" | "totalOwed" | "calculatedAt", ExtArgs["result"]["monthlyUsage"]>
  export type MonthlyUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type MonthlyUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type MonthlyUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    software?: boolean | SoftwareDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $MonthlyUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyUsage"
    objects: {
      software: Prisma.$SoftwarePayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      softwareId: string
      month: Date
      usageCount: number
      totalOwed: number
      calculatedAt: Date
    }, ExtArgs["result"]["monthlyUsage"]>
    composites: {}
  }

  type MonthlyUsageGetPayload<S extends boolean | null | undefined | MonthlyUsageDefaultArgs> = $Result.GetResult<Prisma.$MonthlyUsagePayload, S>

  type MonthlyUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyUsageCountAggregateInputType | true
    }

  export interface MonthlyUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyUsage'], meta: { name: 'MonthlyUsage' } }
    /**
     * Find zero or one MonthlyUsage that matches the filter.
     * @param {MonthlyUsageFindUniqueArgs} args - Arguments to find a MonthlyUsage
     * @example
     * // Get one MonthlyUsage
     * const monthlyUsage = await prisma.monthlyUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyUsageFindUniqueArgs>(args: SelectSubset<T, MonthlyUsageFindUniqueArgs<ExtArgs>>): Prisma__MonthlyUsageClient<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyUsageFindUniqueOrThrowArgs} args - Arguments to find a MonthlyUsage
     * @example
     * // Get one MonthlyUsage
     * const monthlyUsage = await prisma.monthlyUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyUsageClient<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyUsageFindFirstArgs} args - Arguments to find a MonthlyUsage
     * @example
     * // Get one MonthlyUsage
     * const monthlyUsage = await prisma.monthlyUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyUsageFindFirstArgs>(args?: SelectSubset<T, MonthlyUsageFindFirstArgs<ExtArgs>>): Prisma__MonthlyUsageClient<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyUsageFindFirstOrThrowArgs} args - Arguments to find a MonthlyUsage
     * @example
     * // Get one MonthlyUsage
     * const monthlyUsage = await prisma.monthlyUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyUsageClient<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyUsages
     * const monthlyUsages = await prisma.monthlyUsage.findMany()
     * 
     * // Get first 10 MonthlyUsages
     * const monthlyUsages = await prisma.monthlyUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyUsageWithIdOnly = await prisma.monthlyUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyUsageFindManyArgs>(args?: SelectSubset<T, MonthlyUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyUsage.
     * @param {MonthlyUsageCreateArgs} args - Arguments to create a MonthlyUsage.
     * @example
     * // Create one MonthlyUsage
     * const MonthlyUsage = await prisma.monthlyUsage.create({
     *   data: {
     *     // ... data to create a MonthlyUsage
     *   }
     * })
     * 
     */
    create<T extends MonthlyUsageCreateArgs>(args: SelectSubset<T, MonthlyUsageCreateArgs<ExtArgs>>): Prisma__MonthlyUsageClient<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyUsages.
     * @param {MonthlyUsageCreateManyArgs} args - Arguments to create many MonthlyUsages.
     * @example
     * // Create many MonthlyUsages
     * const monthlyUsage = await prisma.monthlyUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyUsageCreateManyArgs>(args?: SelectSubset<T, MonthlyUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyUsages and returns the data saved in the database.
     * @param {MonthlyUsageCreateManyAndReturnArgs} args - Arguments to create many MonthlyUsages.
     * @example
     * // Create many MonthlyUsages
     * const monthlyUsage = await prisma.monthlyUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyUsages and only return the `id`
     * const monthlyUsageWithIdOnly = await prisma.monthlyUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthlyUsage.
     * @param {MonthlyUsageDeleteArgs} args - Arguments to delete one MonthlyUsage.
     * @example
     * // Delete one MonthlyUsage
     * const MonthlyUsage = await prisma.monthlyUsage.delete({
     *   where: {
     *     // ... filter to delete one MonthlyUsage
     *   }
     * })
     * 
     */
    delete<T extends MonthlyUsageDeleteArgs>(args: SelectSubset<T, MonthlyUsageDeleteArgs<ExtArgs>>): Prisma__MonthlyUsageClient<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyUsage.
     * @param {MonthlyUsageUpdateArgs} args - Arguments to update one MonthlyUsage.
     * @example
     * // Update one MonthlyUsage
     * const monthlyUsage = await prisma.monthlyUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyUsageUpdateArgs>(args: SelectSubset<T, MonthlyUsageUpdateArgs<ExtArgs>>): Prisma__MonthlyUsageClient<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyUsages.
     * @param {MonthlyUsageDeleteManyArgs} args - Arguments to filter MonthlyUsages to delete.
     * @example
     * // Delete a few MonthlyUsages
     * const { count } = await prisma.monthlyUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyUsageDeleteManyArgs>(args?: SelectSubset<T, MonthlyUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyUsages
     * const monthlyUsage = await prisma.monthlyUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyUsageUpdateManyArgs>(args: SelectSubset<T, MonthlyUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyUsages and returns the data updated in the database.
     * @param {MonthlyUsageUpdateManyAndReturnArgs} args - Arguments to update many MonthlyUsages.
     * @example
     * // Update many MonthlyUsages
     * const monthlyUsage = await prisma.monthlyUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthlyUsages and only return the `id`
     * const monthlyUsageWithIdOnly = await prisma.monthlyUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthlyUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthlyUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthlyUsage.
     * @param {MonthlyUsageUpsertArgs} args - Arguments to update or create a MonthlyUsage.
     * @example
     * // Update or create a MonthlyUsage
     * const monthlyUsage = await prisma.monthlyUsage.upsert({
     *   create: {
     *     // ... data to create a MonthlyUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyUsage we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyUsageUpsertArgs>(args: SelectSubset<T, MonthlyUsageUpsertArgs<ExtArgs>>): Prisma__MonthlyUsageClient<$Result.GetResult<Prisma.$MonthlyUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyUsageCountArgs} args - Arguments to filter MonthlyUsages to count.
     * @example
     * // Count the number of MonthlyUsages
     * const count = await prisma.monthlyUsage.count({
     *   where: {
     *     // ... the filter for the MonthlyUsages we want to count
     *   }
     * })
    **/
    count<T extends MonthlyUsageCountArgs>(
      args?: Subset<T, MonthlyUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlyUsageAggregateArgs>(args: Subset<T, MonthlyUsageAggregateArgs>): Prisma.PrismaPromise<GetMonthlyUsageAggregateType<T>>

    /**
     * Group by MonthlyUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyUsageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlyUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyUsageGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyUsageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlyUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyUsage model
   */
  readonly fields: MonthlyUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    software<T extends SoftwareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SoftwareDefaultArgs<ExtArgs>>): Prisma__SoftwareClient<$Result.GetResult<Prisma.$SoftwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlyUsage model
   */
  interface MonthlyUsageFieldRefs {
    readonly id: FieldRef<"MonthlyUsage", 'String'>
    readonly vendorId: FieldRef<"MonthlyUsage", 'String'>
    readonly softwareId: FieldRef<"MonthlyUsage", 'String'>
    readonly month: FieldRef<"MonthlyUsage", 'DateTime'>
    readonly usageCount: FieldRef<"MonthlyUsage", 'Int'>
    readonly totalOwed: FieldRef<"MonthlyUsage", 'Float'>
    readonly calculatedAt: FieldRef<"MonthlyUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyUsage findUnique
   */
  export type MonthlyUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyUsage to fetch.
     */
    where: MonthlyUsageWhereUniqueInput
  }

  /**
   * MonthlyUsage findUniqueOrThrow
   */
  export type MonthlyUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyUsage to fetch.
     */
    where: MonthlyUsageWhereUniqueInput
  }

  /**
   * MonthlyUsage findFirst
   */
  export type MonthlyUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyUsage to fetch.
     */
    where?: MonthlyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyUsages to fetch.
     */
    orderBy?: MonthlyUsageOrderByWithRelationInput | MonthlyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyUsages.
     */
    cursor?: MonthlyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyUsages.
     */
    distinct?: MonthlyUsageScalarFieldEnum | MonthlyUsageScalarFieldEnum[]
  }

  /**
   * MonthlyUsage findFirstOrThrow
   */
  export type MonthlyUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyUsage to fetch.
     */
    where?: MonthlyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyUsages to fetch.
     */
    orderBy?: MonthlyUsageOrderByWithRelationInput | MonthlyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyUsages.
     */
    cursor?: MonthlyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyUsages.
     */
    distinct?: MonthlyUsageScalarFieldEnum | MonthlyUsageScalarFieldEnum[]
  }

  /**
   * MonthlyUsage findMany
   */
  export type MonthlyUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyUsages to fetch.
     */
    where?: MonthlyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyUsages to fetch.
     */
    orderBy?: MonthlyUsageOrderByWithRelationInput | MonthlyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyUsages.
     */
    cursor?: MonthlyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyUsages.
     */
    skip?: number
    distinct?: MonthlyUsageScalarFieldEnum | MonthlyUsageScalarFieldEnum[]
  }

  /**
   * MonthlyUsage create
   */
  export type MonthlyUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyUsage.
     */
    data: XOR<MonthlyUsageCreateInput, MonthlyUsageUncheckedCreateInput>
  }

  /**
   * MonthlyUsage createMany
   */
  export type MonthlyUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyUsages.
     */
    data: MonthlyUsageCreateManyInput | MonthlyUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyUsage createManyAndReturn
   */
  export type MonthlyUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * The data used to create many MonthlyUsages.
     */
    data: MonthlyUsageCreateManyInput | MonthlyUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyUsage update
   */
  export type MonthlyUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyUsage.
     */
    data: XOR<MonthlyUsageUpdateInput, MonthlyUsageUncheckedUpdateInput>
    /**
     * Choose, which MonthlyUsage to update.
     */
    where: MonthlyUsageWhereUniqueInput
  }

  /**
   * MonthlyUsage updateMany
   */
  export type MonthlyUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyUsages.
     */
    data: XOR<MonthlyUsageUpdateManyMutationInput, MonthlyUsageUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyUsages to update
     */
    where?: MonthlyUsageWhereInput
    /**
     * Limit how many MonthlyUsages to update.
     */
    limit?: number
  }

  /**
   * MonthlyUsage updateManyAndReturn
   */
  export type MonthlyUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * The data used to update MonthlyUsages.
     */
    data: XOR<MonthlyUsageUpdateManyMutationInput, MonthlyUsageUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyUsages to update
     */
    where?: MonthlyUsageWhereInput
    /**
     * Limit how many MonthlyUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyUsage upsert
   */
  export type MonthlyUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyUsage to update in case it exists.
     */
    where: MonthlyUsageWhereUniqueInput
    /**
     * In case the MonthlyUsage found by the `where` argument doesn't exist, create a new MonthlyUsage with this data.
     */
    create: XOR<MonthlyUsageCreateInput, MonthlyUsageUncheckedCreateInput>
    /**
     * In case the MonthlyUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyUsageUpdateInput, MonthlyUsageUncheckedUpdateInput>
  }

  /**
   * MonthlyUsage delete
   */
  export type MonthlyUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
    /**
     * Filter which MonthlyUsage to delete.
     */
    where: MonthlyUsageWhereUniqueInput
  }

  /**
   * MonthlyUsage deleteMany
   */
  export type MonthlyUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyUsages to delete
     */
    where?: MonthlyUsageWhereInput
    /**
     * Limit how many MonthlyUsages to delete.
     */
    limit?: number
  }

  /**
   * MonthlyUsage without action
   */
  export type MonthlyUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyUsage
     */
    select?: MonthlyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyUsage
     */
    omit?: MonthlyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyUsageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VendorScalarFieldEnum: {
    id: 'id',
    supabaseUserId: 'supabaseUserId',
    contactEmail: 'contactEmail',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    supabaseUserId: 'supabaseUserId',
    companyName: 'companyName',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const SoftwareScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    vendorId: 'vendorId',
    pricingModel: 'pricingModel',
    pricePerUse: 'pricePerUse',
    monthlyRate: 'monthlyRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SoftwareScalarFieldEnum = (typeof SoftwareScalarFieldEnum)[keyof typeof SoftwareScalarFieldEnum]


  export const LicenseKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    status: 'status',
    vendorId: 'vendorId',
    softwareId: 'softwareId',
    expiresAt: 'expiresAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    activatedAt: 'activatedAt',
    activatedById: 'activatedById',
    canceledAt: 'canceledAt',
    canceledReason: 'canceledReason'
  };

  export type LicenseKeyScalarFieldEnum = (typeof LicenseKeyScalarFieldEnum)[keyof typeof LicenseKeyScalarFieldEnum]


  export const ActivationScalarFieldEnum: {
    id: 'id',
    licenseKeyId: 'licenseKeyId',
    activatedById: 'activatedById',
    softwareId: 'softwareId',
    vendorId: 'vendorId',
    headsetSerialNumber: 'headsetSerialNumber',
    activatedAt: 'activatedAt',
    createdAt: 'createdAt'
  };

  export type ActivationScalarFieldEnum = (typeof ActivationScalarFieldEnum)[keyof typeof ActivationScalarFieldEnum]


  export const MonthlyUsageScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    softwareId: 'softwareId',
    month: 'month',
    usageCount: 'usageCount',
    totalOwed: 'totalOwed',
    calculatedAt: 'calculatedAt'
  };

  export type MonthlyUsageScalarFieldEnum = (typeof MonthlyUsageScalarFieldEnum)[keyof typeof MonthlyUsageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EmployeeRole'
   */
  export type EnumEmployeeRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeRole'>
    


  /**
   * Reference to a field of type 'EmployeeRole[]'
   */
  export type ListEnumEmployeeRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeRole[]'>
    


  /**
   * Reference to a field of type 'PricingModel'
   */
  export type EnumPricingModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingModel'>
    


  /**
   * Reference to a field of type 'PricingModel[]'
   */
  export type ListEnumPricingModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingModel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'LicenseStatus'
   */
  export type EnumLicenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseStatus'>
    


  /**
   * Reference to a field of type 'LicenseStatus[]'
   */
  export type ListEnumLicenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    supabaseUserId?: StringNullableFilter<"Vendor"> | string | null
    contactEmail?: StringNullableFilter<"Vendor"> | string | null
    name?: StringFilter<"Vendor"> | string
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    role?: EnumEmployeeRoleFilter<"Vendor"> | $Enums.EmployeeRole
    activations?: ActivationListRelationFilter
    licenseKeys?: LicenseKeyListRelationFilter
    monthlyUsage?: MonthlyUsageListRelationFilter
    software?: SoftwareListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    activations?: ActivationOrderByRelationAggregateInput
    licenseKeys?: LicenseKeyOrderByRelationAggregateInput
    monthlyUsage?: MonthlyUsageOrderByRelationAggregateInput
    software?: SoftwareOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supabaseUserId?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    contactEmail?: StringNullableFilter<"Vendor"> | string | null
    name?: StringFilter<"Vendor"> | string
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    role?: EnumEmployeeRoleFilter<"Vendor"> | $Enums.EmployeeRole
    activations?: ActivationListRelationFilter
    licenseKeys?: LicenseKeyListRelationFilter
    monthlyUsage?: MonthlyUsageListRelationFilter
    software?: SoftwareListRelationFilter
  }, "id" | "supabaseUserId">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    supabaseUserId?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    name?: StringWithAggregatesFilter<"Vendor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    role?: EnumEmployeeRoleWithAggregatesFilter<"Vendor"> | $Enums.EmployeeRole
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    supabaseUserId?: StringNullableFilter<"Employee"> | string | null
    companyName?: StringNullableFilter<"Employee"> | string | null
    name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    role?: EnumEmployeeRoleFilter<"Employee"> | $Enums.EmployeeRole
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    performedActivations?: ActivationListRelationFilter
    activatedKeys?: LicenseKeyListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    performedActivations?: ActivationOrderByRelationAggregateInput
    activatedKeys?: LicenseKeyOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supabaseUserId?: string
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    companyName?: StringNullableFilter<"Employee"> | string | null
    name?: StringFilter<"Employee"> | string
    role?: EnumEmployeeRoleFilter<"Employee"> | $Enums.EmployeeRole
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    performedActivations?: ActivationListRelationFilter
    activatedKeys?: LicenseKeyListRelationFilter
  }, "id" | "supabaseUserId" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    supabaseUserId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    name?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    role?: EnumEmployeeRoleWithAggregatesFilter<"Employee"> | $Enums.EmployeeRole
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type SoftwareWhereInput = {
    AND?: SoftwareWhereInput | SoftwareWhereInput[]
    OR?: SoftwareWhereInput[]
    NOT?: SoftwareWhereInput | SoftwareWhereInput[]
    id?: StringFilter<"Software"> | string
    name?: StringFilter<"Software"> | string
    description?: StringNullableFilter<"Software"> | string | null
    vendorId?: StringFilter<"Software"> | string
    pricingModel?: EnumPricingModelFilter<"Software"> | $Enums.PricingModel
    pricePerUse?: FloatNullableFilter<"Software"> | number | null
    monthlyRate?: FloatNullableFilter<"Software"> | number | null
    createdAt?: DateTimeFilter<"Software"> | Date | string
    updatedAt?: DateTimeFilter<"Software"> | Date | string
    activations?: ActivationListRelationFilter
    licenseKeys?: LicenseKeyListRelationFilter
    monthlyUsage?: MonthlyUsageListRelationFilter
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type SoftwareOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    vendorId?: SortOrder
    pricingModel?: SortOrder
    pricePerUse?: SortOrderInput | SortOrder
    monthlyRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activations?: ActivationOrderByRelationAggregateInput
    licenseKeys?: LicenseKeyOrderByRelationAggregateInput
    monthlyUsage?: MonthlyUsageOrderByRelationAggregateInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type SoftwareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SoftwareWhereInput | SoftwareWhereInput[]
    OR?: SoftwareWhereInput[]
    NOT?: SoftwareWhereInput | SoftwareWhereInput[]
    name?: StringFilter<"Software"> | string
    description?: StringNullableFilter<"Software"> | string | null
    vendorId?: StringFilter<"Software"> | string
    pricingModel?: EnumPricingModelFilter<"Software"> | $Enums.PricingModel
    pricePerUse?: FloatNullableFilter<"Software"> | number | null
    monthlyRate?: FloatNullableFilter<"Software"> | number | null
    createdAt?: DateTimeFilter<"Software"> | Date | string
    updatedAt?: DateTimeFilter<"Software"> | Date | string
    activations?: ActivationListRelationFilter
    licenseKeys?: LicenseKeyListRelationFilter
    monthlyUsage?: MonthlyUsageListRelationFilter
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id">

  export type SoftwareOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    vendorId?: SortOrder
    pricingModel?: SortOrder
    pricePerUse?: SortOrderInput | SortOrder
    monthlyRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SoftwareCountOrderByAggregateInput
    _avg?: SoftwareAvgOrderByAggregateInput
    _max?: SoftwareMaxOrderByAggregateInput
    _min?: SoftwareMinOrderByAggregateInput
    _sum?: SoftwareSumOrderByAggregateInput
  }

  export type SoftwareScalarWhereWithAggregatesInput = {
    AND?: SoftwareScalarWhereWithAggregatesInput | SoftwareScalarWhereWithAggregatesInput[]
    OR?: SoftwareScalarWhereWithAggregatesInput[]
    NOT?: SoftwareScalarWhereWithAggregatesInput | SoftwareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Software"> | string
    name?: StringWithAggregatesFilter<"Software"> | string
    description?: StringNullableWithAggregatesFilter<"Software"> | string | null
    vendorId?: StringWithAggregatesFilter<"Software"> | string
    pricingModel?: EnumPricingModelWithAggregatesFilter<"Software"> | $Enums.PricingModel
    pricePerUse?: FloatNullableWithAggregatesFilter<"Software"> | number | null
    monthlyRate?: FloatNullableWithAggregatesFilter<"Software"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Software"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Software"> | Date | string
  }

  export type LicenseKeyWhereInput = {
    AND?: LicenseKeyWhereInput | LicenseKeyWhereInput[]
    OR?: LicenseKeyWhereInput[]
    NOT?: LicenseKeyWhereInput | LicenseKeyWhereInput[]
    id?: StringFilter<"LicenseKey"> | string
    key?: StringFilter<"LicenseKey"> | string
    status?: EnumLicenseStatusFilter<"LicenseKey"> | $Enums.LicenseStatus
    vendorId?: StringFilter<"LicenseKey"> | string
    softwareId?: StringFilter<"LicenseKey"> | string
    expiresAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    notes?: StringNullableFilter<"LicenseKey"> | string | null
    createdAt?: DateTimeFilter<"LicenseKey"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseKey"> | Date | string
    activatedAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    activatedById?: StringNullableFilter<"LicenseKey"> | string | null
    canceledAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    canceledReason?: StringNullableFilter<"LicenseKey"> | string | null
    activation?: XOR<ActivationNullableScalarRelationFilter, ActivationWhereInput> | null
    activatedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    software?: XOR<SoftwareScalarRelationFilter, SoftwareWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type LicenseKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activatedAt?: SortOrderInput | SortOrder
    activatedById?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    canceledReason?: SortOrderInput | SortOrder
    activation?: ActivationOrderByWithRelationInput
    activatedBy?: EmployeeOrderByWithRelationInput
    software?: SoftwareOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type LicenseKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: LicenseKeyWhereInput | LicenseKeyWhereInput[]
    OR?: LicenseKeyWhereInput[]
    NOT?: LicenseKeyWhereInput | LicenseKeyWhereInput[]
    status?: EnumLicenseStatusFilter<"LicenseKey"> | $Enums.LicenseStatus
    vendorId?: StringFilter<"LicenseKey"> | string
    softwareId?: StringFilter<"LicenseKey"> | string
    expiresAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    notes?: StringNullableFilter<"LicenseKey"> | string | null
    createdAt?: DateTimeFilter<"LicenseKey"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseKey"> | Date | string
    activatedAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    activatedById?: StringNullableFilter<"LicenseKey"> | string | null
    canceledAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    canceledReason?: StringNullableFilter<"LicenseKey"> | string | null
    activation?: XOR<ActivationNullableScalarRelationFilter, ActivationWhereInput> | null
    activatedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    software?: XOR<SoftwareScalarRelationFilter, SoftwareWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id" | "key">

  export type LicenseKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activatedAt?: SortOrderInput | SortOrder
    activatedById?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    canceledReason?: SortOrderInput | SortOrder
    _count?: LicenseKeyCountOrderByAggregateInput
    _max?: LicenseKeyMaxOrderByAggregateInput
    _min?: LicenseKeyMinOrderByAggregateInput
  }

  export type LicenseKeyScalarWhereWithAggregatesInput = {
    AND?: LicenseKeyScalarWhereWithAggregatesInput | LicenseKeyScalarWhereWithAggregatesInput[]
    OR?: LicenseKeyScalarWhereWithAggregatesInput[]
    NOT?: LicenseKeyScalarWhereWithAggregatesInput | LicenseKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseKey"> | string
    key?: StringWithAggregatesFilter<"LicenseKey"> | string
    status?: EnumLicenseStatusWithAggregatesFilter<"LicenseKey"> | $Enums.LicenseStatus
    vendorId?: StringWithAggregatesFilter<"LicenseKey"> | string
    softwareId?: StringWithAggregatesFilter<"LicenseKey"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"LicenseKey"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"LicenseKey"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LicenseKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LicenseKey"> | Date | string
    activatedAt?: DateTimeNullableWithAggregatesFilter<"LicenseKey"> | Date | string | null
    activatedById?: StringNullableWithAggregatesFilter<"LicenseKey"> | string | null
    canceledAt?: DateTimeNullableWithAggregatesFilter<"LicenseKey"> | Date | string | null
    canceledReason?: StringNullableWithAggregatesFilter<"LicenseKey"> | string | null
  }

  export type ActivationWhereInput = {
    AND?: ActivationWhereInput | ActivationWhereInput[]
    OR?: ActivationWhereInput[]
    NOT?: ActivationWhereInput | ActivationWhereInput[]
    id?: StringFilter<"Activation"> | string
    licenseKeyId?: StringFilter<"Activation"> | string
    activatedById?: StringFilter<"Activation"> | string
    softwareId?: StringFilter<"Activation"> | string
    vendorId?: StringFilter<"Activation"> | string
    headsetSerialNumber?: StringNullableFilter<"Activation"> | string | null
    activatedAt?: DateTimeFilter<"Activation"> | Date | string
    createdAt?: DateTimeFilter<"Activation"> | Date | string
    activatedBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    licenseKey?: XOR<LicenseKeyScalarRelationFilter, LicenseKeyWhereInput>
    software?: XOR<SoftwareScalarRelationFilter, SoftwareWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type ActivationOrderByWithRelationInput = {
    id?: SortOrder
    licenseKeyId?: SortOrder
    activatedById?: SortOrder
    softwareId?: SortOrder
    vendorId?: SortOrder
    headsetSerialNumber?: SortOrderInput | SortOrder
    activatedAt?: SortOrder
    createdAt?: SortOrder
    activatedBy?: EmployeeOrderByWithRelationInput
    licenseKey?: LicenseKeyOrderByWithRelationInput
    software?: SoftwareOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type ActivationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseKeyId?: string
    AND?: ActivationWhereInput | ActivationWhereInput[]
    OR?: ActivationWhereInput[]
    NOT?: ActivationWhereInput | ActivationWhereInput[]
    activatedById?: StringFilter<"Activation"> | string
    softwareId?: StringFilter<"Activation"> | string
    vendorId?: StringFilter<"Activation"> | string
    headsetSerialNumber?: StringNullableFilter<"Activation"> | string | null
    activatedAt?: DateTimeFilter<"Activation"> | Date | string
    createdAt?: DateTimeFilter<"Activation"> | Date | string
    activatedBy?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    licenseKey?: XOR<LicenseKeyScalarRelationFilter, LicenseKeyWhereInput>
    software?: XOR<SoftwareScalarRelationFilter, SoftwareWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id" | "licenseKeyId">

  export type ActivationOrderByWithAggregationInput = {
    id?: SortOrder
    licenseKeyId?: SortOrder
    activatedById?: SortOrder
    softwareId?: SortOrder
    vendorId?: SortOrder
    headsetSerialNumber?: SortOrderInput | SortOrder
    activatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ActivationCountOrderByAggregateInput
    _max?: ActivationMaxOrderByAggregateInput
    _min?: ActivationMinOrderByAggregateInput
  }

  export type ActivationScalarWhereWithAggregatesInput = {
    AND?: ActivationScalarWhereWithAggregatesInput | ActivationScalarWhereWithAggregatesInput[]
    OR?: ActivationScalarWhereWithAggregatesInput[]
    NOT?: ActivationScalarWhereWithAggregatesInput | ActivationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activation"> | string
    licenseKeyId?: StringWithAggregatesFilter<"Activation"> | string
    activatedById?: StringWithAggregatesFilter<"Activation"> | string
    softwareId?: StringWithAggregatesFilter<"Activation"> | string
    vendorId?: StringWithAggregatesFilter<"Activation"> | string
    headsetSerialNumber?: StringNullableWithAggregatesFilter<"Activation"> | string | null
    activatedAt?: DateTimeWithAggregatesFilter<"Activation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Activation"> | Date | string
  }

  export type MonthlyUsageWhereInput = {
    AND?: MonthlyUsageWhereInput | MonthlyUsageWhereInput[]
    OR?: MonthlyUsageWhereInput[]
    NOT?: MonthlyUsageWhereInput | MonthlyUsageWhereInput[]
    id?: StringFilter<"MonthlyUsage"> | string
    vendorId?: StringFilter<"MonthlyUsage"> | string
    softwareId?: StringFilter<"MonthlyUsage"> | string
    month?: DateTimeFilter<"MonthlyUsage"> | Date | string
    usageCount?: IntFilter<"MonthlyUsage"> | number
    totalOwed?: FloatFilter<"MonthlyUsage"> | number
    calculatedAt?: DateTimeFilter<"MonthlyUsage"> | Date | string
    software?: XOR<SoftwareScalarRelationFilter, SoftwareWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type MonthlyUsageOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    month?: SortOrder
    usageCount?: SortOrder
    totalOwed?: SortOrder
    calculatedAt?: SortOrder
    software?: SoftwareOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
  }

  export type MonthlyUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vendorId_softwareId_month?: MonthlyUsageVendorIdSoftwareIdMonthCompoundUniqueInput
    AND?: MonthlyUsageWhereInput | MonthlyUsageWhereInput[]
    OR?: MonthlyUsageWhereInput[]
    NOT?: MonthlyUsageWhereInput | MonthlyUsageWhereInput[]
    vendorId?: StringFilter<"MonthlyUsage"> | string
    softwareId?: StringFilter<"MonthlyUsage"> | string
    month?: DateTimeFilter<"MonthlyUsage"> | Date | string
    usageCount?: IntFilter<"MonthlyUsage"> | number
    totalOwed?: FloatFilter<"MonthlyUsage"> | number
    calculatedAt?: DateTimeFilter<"MonthlyUsage"> | Date | string
    software?: XOR<SoftwareScalarRelationFilter, SoftwareWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id" | "vendorId_softwareId_month">

  export type MonthlyUsageOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    month?: SortOrder
    usageCount?: SortOrder
    totalOwed?: SortOrder
    calculatedAt?: SortOrder
    _count?: MonthlyUsageCountOrderByAggregateInput
    _avg?: MonthlyUsageAvgOrderByAggregateInput
    _max?: MonthlyUsageMaxOrderByAggregateInput
    _min?: MonthlyUsageMinOrderByAggregateInput
    _sum?: MonthlyUsageSumOrderByAggregateInput
  }

  export type MonthlyUsageScalarWhereWithAggregatesInput = {
    AND?: MonthlyUsageScalarWhereWithAggregatesInput | MonthlyUsageScalarWhereWithAggregatesInput[]
    OR?: MonthlyUsageScalarWhereWithAggregatesInput[]
    NOT?: MonthlyUsageScalarWhereWithAggregatesInput | MonthlyUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyUsage"> | string
    vendorId?: StringWithAggregatesFilter<"MonthlyUsage"> | string
    softwareId?: StringWithAggregatesFilter<"MonthlyUsage"> | string
    month?: DateTimeWithAggregatesFilter<"MonthlyUsage"> | Date | string
    usageCount?: IntWithAggregatesFilter<"MonthlyUsage"> | number
    totalOwed?: FloatWithAggregatesFilter<"MonthlyUsage"> | number
    calculatedAt?: DateTimeWithAggregatesFilter<"MonthlyUsage"> | Date | string
  }

  export type VendorCreateInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    activations?: ActivationCreateNestedManyWithoutVendorInput
    licenseKeys?: LicenseKeyCreateNestedManyWithoutVendorInput
    monthlyUsage?: MonthlyUsageCreateNestedManyWithoutVendorInput
    software?: SoftwareCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    activations?: ActivationUncheckedCreateNestedManyWithoutVendorInput
    licenseKeys?: LicenseKeyUncheckedCreateNestedManyWithoutVendorInput
    monthlyUsage?: MonthlyUsageUncheckedCreateNestedManyWithoutVendorInput
    software?: SoftwareUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    activations?: ActivationUpdateManyWithoutVendorNestedInput
    licenseKeys?: LicenseKeyUpdateManyWithoutVendorNestedInput
    monthlyUsage?: MonthlyUsageUpdateManyWithoutVendorNestedInput
    software?: SoftwareUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    activations?: ActivationUncheckedUpdateManyWithoutVendorNestedInput
    licenseKeys?: LicenseKeyUncheckedUpdateManyWithoutVendorNestedInput
    monthlyUsage?: MonthlyUsageUncheckedUpdateManyWithoutVendorNestedInput
    software?: SoftwareUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
  }

  export type EmployeeCreateInput = {
    id?: string
    supabaseUserId?: string | null
    companyName?: string | null
    name: string
    email: string
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    performedActivations?: ActivationCreateNestedManyWithoutActivatedByInput
    activatedKeys?: LicenseKeyCreateNestedManyWithoutActivatedByInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    supabaseUserId?: string | null
    companyName?: string | null
    name: string
    email: string
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    performedActivations?: ActivationUncheckedCreateNestedManyWithoutActivatedByInput
    activatedKeys?: LicenseKeyUncheckedCreateNestedManyWithoutActivatedByInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performedActivations?: ActivationUpdateManyWithoutActivatedByNestedInput
    activatedKeys?: LicenseKeyUpdateManyWithoutActivatedByNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performedActivations?: ActivationUncheckedUpdateManyWithoutActivatedByNestedInput
    activatedKeys?: LicenseKeyUncheckedUpdateManyWithoutActivatedByNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    supabaseUserId?: string | null
    companyName?: string | null
    name: string
    email: string
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftwareCreateInput = {
    id?: string
    name: string
    description?: string | null
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: ActivationCreateNestedManyWithoutSoftwareInput
    licenseKeys?: LicenseKeyCreateNestedManyWithoutSoftwareInput
    monthlyUsage?: MonthlyUsageCreateNestedManyWithoutSoftwareInput
    vendor: VendorCreateNestedOneWithoutSoftwareInput
  }

  export type SoftwareUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    vendorId: string
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: ActivationUncheckedCreateNestedManyWithoutSoftwareInput
    licenseKeys?: LicenseKeyUncheckedCreateNestedManyWithoutSoftwareInput
    monthlyUsage?: MonthlyUsageUncheckedCreateNestedManyWithoutSoftwareInput
  }

  export type SoftwareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: ActivationUpdateManyWithoutSoftwareNestedInput
    licenseKeys?: LicenseKeyUpdateManyWithoutSoftwareNestedInput
    monthlyUsage?: MonthlyUsageUpdateManyWithoutSoftwareNestedInput
    vendor?: VendorUpdateOneRequiredWithoutSoftwareNestedInput
  }

  export type SoftwareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: StringFieldUpdateOperationsInput | string
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: ActivationUncheckedUpdateManyWithoutSoftwareNestedInput
    licenseKeys?: LicenseKeyUncheckedUpdateManyWithoutSoftwareNestedInput
    monthlyUsage?: MonthlyUsageUncheckedUpdateManyWithoutSoftwareNestedInput
  }

  export type SoftwareCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    vendorId: string
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoftwareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftwareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: StringFieldUpdateOperationsInput | string
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseKeyCreateInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
    activation?: ActivationCreateNestedOneWithoutLicenseKeyInput
    activatedBy?: EmployeeCreateNestedOneWithoutActivatedKeysInput
    software: SoftwareCreateNestedOneWithoutLicenseKeysInput
    vendor: VendorCreateNestedOneWithoutLicenseKeysInput
  }

  export type LicenseKeyUncheckedCreateInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    vendorId: string
    softwareId: string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    activatedById?: string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
    activation?: ActivationUncheckedCreateNestedOneWithoutLicenseKeyInput
  }

  export type LicenseKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    activation?: ActivationUpdateOneWithoutLicenseKeyNestedInput
    activatedBy?: EmployeeUpdateOneWithoutActivatedKeysNestedInput
    software?: SoftwareUpdateOneRequiredWithoutLicenseKeysNestedInput
    vendor?: VendorUpdateOneRequiredWithoutLicenseKeysNestedInput
  }

  export type LicenseKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    vendorId?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedById?: NullableStringFieldUpdateOperationsInput | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    activation?: ActivationUncheckedUpdateOneWithoutLicenseKeyNestedInput
  }

  export type LicenseKeyCreateManyInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    vendorId: string
    softwareId: string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    activatedById?: string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
  }

  export type LicenseKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LicenseKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    vendorId?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedById?: NullableStringFieldUpdateOperationsInput | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivationCreateInput = {
    id?: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
    activatedBy: EmployeeCreateNestedOneWithoutPerformedActivationsInput
    licenseKey: LicenseKeyCreateNestedOneWithoutActivationInput
    software: SoftwareCreateNestedOneWithoutActivationsInput
    vendor: VendorCreateNestedOneWithoutActivationsInput
  }

  export type ActivationUncheckedCreateInput = {
    id?: string
    licenseKeyId: string
    activatedById: string
    softwareId: string
    vendorId: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActivationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedBy?: EmployeeUpdateOneRequiredWithoutPerformedActivationsNestedInput
    licenseKey?: LicenseKeyUpdateOneRequiredWithoutActivationNestedInput
    software?: SoftwareUpdateOneRequiredWithoutActivationsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutActivationsNestedInput
  }

  export type ActivationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKeyId?: StringFieldUpdateOperationsInput | string
    activatedById?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationCreateManyInput = {
    id?: string
    licenseKeyId: string
    activatedById: string
    softwareId: string
    vendorId: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActivationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKeyId?: StringFieldUpdateOperationsInput | string
    activatedById?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyUsageCreateInput = {
    id?: string
    month: Date | string
    usageCount: number
    totalOwed: number
    calculatedAt?: Date | string
    software: SoftwareCreateNestedOneWithoutMonthlyUsageInput
    vendor: VendorCreateNestedOneWithoutMonthlyUsageInput
  }

  export type MonthlyUsageUncheckedCreateInput = {
    id?: string
    vendorId: string
    softwareId: string
    month: Date | string
    usageCount: number
    totalOwed: number
    calculatedAt?: Date | string
  }

  export type MonthlyUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    software?: SoftwareUpdateOneRequiredWithoutMonthlyUsageNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMonthlyUsageNestedInput
  }

  export type MonthlyUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyUsageCreateManyInput = {
    id?: string
    vendorId: string
    softwareId: string
    month: Date | string
    usageCount: number
    totalOwed: number
    calculatedAt?: Date | string
  }

  export type MonthlyUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumEmployeeRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeRoleFilter<$PrismaModel> | $Enums.EmployeeRole
  }

  export type ActivationListRelationFilter = {
    every?: ActivationWhereInput
    some?: ActivationWhereInput
    none?: ActivationWhereInput
  }

  export type LicenseKeyListRelationFilter = {
    every?: LicenseKeyWhereInput
    some?: LicenseKeyWhereInput
    none?: LicenseKeyWhereInput
  }

  export type MonthlyUsageListRelationFilter = {
    every?: MonthlyUsageWhereInput
    some?: MonthlyUsageWhereInput
    none?: MonthlyUsageWhereInput
  }

  export type SoftwareListRelationFilter = {
    every?: SoftwareWhereInput
    some?: SoftwareWhereInput
    none?: SoftwareWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthlyUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SoftwareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    contactEmail?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    contactEmail?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    contactEmail?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEmployeeRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeRoleWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeRoleFilter<$PrismaModel>
    _max?: NestedEnumEmployeeRoleFilter<$PrismaModel>
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    companyName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPricingModelFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingModel | EnumPricingModelFieldRefInput<$PrismaModel>
    in?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingModelFilter<$PrismaModel> | $Enums.PricingModel
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type SoftwareCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    vendorId?: SortOrder
    pricingModel?: SortOrder
    pricePerUse?: SortOrder
    monthlyRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoftwareAvgOrderByAggregateInput = {
    pricePerUse?: SortOrder
    monthlyRate?: SortOrder
  }

  export type SoftwareMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    vendorId?: SortOrder
    pricingModel?: SortOrder
    pricePerUse?: SortOrder
    monthlyRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoftwareMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    vendorId?: SortOrder
    pricingModel?: SortOrder
    pricePerUse?: SortOrder
    monthlyRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoftwareSumOrderByAggregateInput = {
    pricePerUse?: SortOrder
    monthlyRate?: SortOrder
  }

  export type EnumPricingModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingModel | EnumPricingModelFieldRefInput<$PrismaModel>
    in?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingModelWithAggregatesFilter<$PrismaModel> | $Enums.PricingModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricingModelFilter<$PrismaModel>
    _max?: NestedEnumPricingModelFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumLicenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusFilter<$PrismaModel> | $Enums.LicenseStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ActivationNullableScalarRelationFilter = {
    is?: ActivationWhereInput | null
    isNot?: ActivationWhereInput | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type SoftwareScalarRelationFilter = {
    is?: SoftwareWhereInput
    isNot?: SoftwareWhereInput
  }

  export type LicenseKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activatedAt?: SortOrder
    activatedById?: SortOrder
    canceledAt?: SortOrder
    canceledReason?: SortOrder
  }

  export type LicenseKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activatedAt?: SortOrder
    activatedById?: SortOrder
    canceledAt?: SortOrder
    canceledReason?: SortOrder
  }

  export type LicenseKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    status?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activatedAt?: SortOrder
    activatedById?: SortOrder
    canceledAt?: SortOrder
    canceledReason?: SortOrder
  }

  export type EnumLicenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.LicenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseStatusFilter<$PrismaModel>
    _max?: NestedEnumLicenseStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type LicenseKeyScalarRelationFilter = {
    is?: LicenseKeyWhereInput
    isNot?: LicenseKeyWhereInput
  }

  export type ActivationCountOrderByAggregateInput = {
    id?: SortOrder
    licenseKeyId?: SortOrder
    activatedById?: SortOrder
    softwareId?: SortOrder
    vendorId?: SortOrder
    headsetSerialNumber?: SortOrder
    activatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivationMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseKeyId?: SortOrder
    activatedById?: SortOrder
    softwareId?: SortOrder
    vendorId?: SortOrder
    headsetSerialNumber?: SortOrder
    activatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivationMinOrderByAggregateInput = {
    id?: SortOrder
    licenseKeyId?: SortOrder
    activatedById?: SortOrder
    softwareId?: SortOrder
    vendorId?: SortOrder
    headsetSerialNumber?: SortOrder
    activatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MonthlyUsageVendorIdSoftwareIdMonthCompoundUniqueInput = {
    vendorId: string
    softwareId: string
    month: Date | string
  }

  export type MonthlyUsageCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    month?: SortOrder
    usageCount?: SortOrder
    totalOwed?: SortOrder
    calculatedAt?: SortOrder
  }

  export type MonthlyUsageAvgOrderByAggregateInput = {
    usageCount?: SortOrder
    totalOwed?: SortOrder
  }

  export type MonthlyUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    month?: SortOrder
    usageCount?: SortOrder
    totalOwed?: SortOrder
    calculatedAt?: SortOrder
  }

  export type MonthlyUsageMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    softwareId?: SortOrder
    month?: SortOrder
    usageCount?: SortOrder
    totalOwed?: SortOrder
    calculatedAt?: SortOrder
  }

  export type MonthlyUsageSumOrderByAggregateInput = {
    usageCount?: SortOrder
    totalOwed?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ActivationCreateNestedManyWithoutVendorInput = {
    create?: XOR<ActivationCreateWithoutVendorInput, ActivationUncheckedCreateWithoutVendorInput> | ActivationCreateWithoutVendorInput[] | ActivationUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutVendorInput | ActivationCreateOrConnectWithoutVendorInput[]
    createMany?: ActivationCreateManyVendorInputEnvelope
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
  }

  export type LicenseKeyCreateNestedManyWithoutVendorInput = {
    create?: XOR<LicenseKeyCreateWithoutVendorInput, LicenseKeyUncheckedCreateWithoutVendorInput> | LicenseKeyCreateWithoutVendorInput[] | LicenseKeyUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutVendorInput | LicenseKeyCreateOrConnectWithoutVendorInput[]
    createMany?: LicenseKeyCreateManyVendorInputEnvelope
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
  }

  export type MonthlyUsageCreateNestedManyWithoutVendorInput = {
    create?: XOR<MonthlyUsageCreateWithoutVendorInput, MonthlyUsageUncheckedCreateWithoutVendorInput> | MonthlyUsageCreateWithoutVendorInput[] | MonthlyUsageUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MonthlyUsageCreateOrConnectWithoutVendorInput | MonthlyUsageCreateOrConnectWithoutVendorInput[]
    createMany?: MonthlyUsageCreateManyVendorInputEnvelope
    connect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
  }

  export type SoftwareCreateNestedManyWithoutVendorInput = {
    create?: XOR<SoftwareCreateWithoutVendorInput, SoftwareUncheckedCreateWithoutVendorInput> | SoftwareCreateWithoutVendorInput[] | SoftwareUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SoftwareCreateOrConnectWithoutVendorInput | SoftwareCreateOrConnectWithoutVendorInput[]
    createMany?: SoftwareCreateManyVendorInputEnvelope
    connect?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
  }

  export type ActivationUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ActivationCreateWithoutVendorInput, ActivationUncheckedCreateWithoutVendorInput> | ActivationCreateWithoutVendorInput[] | ActivationUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutVendorInput | ActivationCreateOrConnectWithoutVendorInput[]
    createMany?: ActivationCreateManyVendorInputEnvelope
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
  }

  export type LicenseKeyUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<LicenseKeyCreateWithoutVendorInput, LicenseKeyUncheckedCreateWithoutVendorInput> | LicenseKeyCreateWithoutVendorInput[] | LicenseKeyUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutVendorInput | LicenseKeyCreateOrConnectWithoutVendorInput[]
    createMany?: LicenseKeyCreateManyVendorInputEnvelope
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
  }

  export type MonthlyUsageUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<MonthlyUsageCreateWithoutVendorInput, MonthlyUsageUncheckedCreateWithoutVendorInput> | MonthlyUsageCreateWithoutVendorInput[] | MonthlyUsageUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MonthlyUsageCreateOrConnectWithoutVendorInput | MonthlyUsageCreateOrConnectWithoutVendorInput[]
    createMany?: MonthlyUsageCreateManyVendorInputEnvelope
    connect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
  }

  export type SoftwareUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<SoftwareCreateWithoutVendorInput, SoftwareUncheckedCreateWithoutVendorInput> | SoftwareCreateWithoutVendorInput[] | SoftwareUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SoftwareCreateOrConnectWithoutVendorInput | SoftwareCreateOrConnectWithoutVendorInput[]
    createMany?: SoftwareCreateManyVendorInputEnvelope
    connect?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumEmployeeRoleFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeRole
  }

  export type ActivationUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ActivationCreateWithoutVendorInput, ActivationUncheckedCreateWithoutVendorInput> | ActivationCreateWithoutVendorInput[] | ActivationUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutVendorInput | ActivationCreateOrConnectWithoutVendorInput[]
    upsert?: ActivationUpsertWithWhereUniqueWithoutVendorInput | ActivationUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ActivationCreateManyVendorInputEnvelope
    set?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    disconnect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    delete?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    update?: ActivationUpdateWithWhereUniqueWithoutVendorInput | ActivationUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ActivationUpdateManyWithWhereWithoutVendorInput | ActivationUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ActivationScalarWhereInput | ActivationScalarWhereInput[]
  }

  export type LicenseKeyUpdateManyWithoutVendorNestedInput = {
    create?: XOR<LicenseKeyCreateWithoutVendorInput, LicenseKeyUncheckedCreateWithoutVendorInput> | LicenseKeyCreateWithoutVendorInput[] | LicenseKeyUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutVendorInput | LicenseKeyCreateOrConnectWithoutVendorInput[]
    upsert?: LicenseKeyUpsertWithWhereUniqueWithoutVendorInput | LicenseKeyUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: LicenseKeyCreateManyVendorInputEnvelope
    set?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    disconnect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    delete?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    update?: LicenseKeyUpdateWithWhereUniqueWithoutVendorInput | LicenseKeyUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: LicenseKeyUpdateManyWithWhereWithoutVendorInput | LicenseKeyUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: LicenseKeyScalarWhereInput | LicenseKeyScalarWhereInput[]
  }

  export type MonthlyUsageUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MonthlyUsageCreateWithoutVendorInput, MonthlyUsageUncheckedCreateWithoutVendorInput> | MonthlyUsageCreateWithoutVendorInput[] | MonthlyUsageUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MonthlyUsageCreateOrConnectWithoutVendorInput | MonthlyUsageCreateOrConnectWithoutVendorInput[]
    upsert?: MonthlyUsageUpsertWithWhereUniqueWithoutVendorInput | MonthlyUsageUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MonthlyUsageCreateManyVendorInputEnvelope
    set?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    disconnect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    delete?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    connect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    update?: MonthlyUsageUpdateWithWhereUniqueWithoutVendorInput | MonthlyUsageUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MonthlyUsageUpdateManyWithWhereWithoutVendorInput | MonthlyUsageUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MonthlyUsageScalarWhereInput | MonthlyUsageScalarWhereInput[]
  }

  export type SoftwareUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SoftwareCreateWithoutVendorInput, SoftwareUncheckedCreateWithoutVendorInput> | SoftwareCreateWithoutVendorInput[] | SoftwareUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SoftwareCreateOrConnectWithoutVendorInput | SoftwareCreateOrConnectWithoutVendorInput[]
    upsert?: SoftwareUpsertWithWhereUniqueWithoutVendorInput | SoftwareUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SoftwareCreateManyVendorInputEnvelope
    set?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
    disconnect?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
    delete?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
    connect?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
    update?: SoftwareUpdateWithWhereUniqueWithoutVendorInput | SoftwareUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SoftwareUpdateManyWithWhereWithoutVendorInput | SoftwareUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SoftwareScalarWhereInput | SoftwareScalarWhereInput[]
  }

  export type ActivationUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ActivationCreateWithoutVendorInput, ActivationUncheckedCreateWithoutVendorInput> | ActivationCreateWithoutVendorInput[] | ActivationUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutVendorInput | ActivationCreateOrConnectWithoutVendorInput[]
    upsert?: ActivationUpsertWithWhereUniqueWithoutVendorInput | ActivationUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ActivationCreateManyVendorInputEnvelope
    set?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    disconnect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    delete?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    update?: ActivationUpdateWithWhereUniqueWithoutVendorInput | ActivationUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ActivationUpdateManyWithWhereWithoutVendorInput | ActivationUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ActivationScalarWhereInput | ActivationScalarWhereInput[]
  }

  export type LicenseKeyUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<LicenseKeyCreateWithoutVendorInput, LicenseKeyUncheckedCreateWithoutVendorInput> | LicenseKeyCreateWithoutVendorInput[] | LicenseKeyUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutVendorInput | LicenseKeyCreateOrConnectWithoutVendorInput[]
    upsert?: LicenseKeyUpsertWithWhereUniqueWithoutVendorInput | LicenseKeyUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: LicenseKeyCreateManyVendorInputEnvelope
    set?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    disconnect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    delete?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    update?: LicenseKeyUpdateWithWhereUniqueWithoutVendorInput | LicenseKeyUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: LicenseKeyUpdateManyWithWhereWithoutVendorInput | LicenseKeyUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: LicenseKeyScalarWhereInput | LicenseKeyScalarWhereInput[]
  }

  export type MonthlyUsageUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MonthlyUsageCreateWithoutVendorInput, MonthlyUsageUncheckedCreateWithoutVendorInput> | MonthlyUsageCreateWithoutVendorInput[] | MonthlyUsageUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MonthlyUsageCreateOrConnectWithoutVendorInput | MonthlyUsageCreateOrConnectWithoutVendorInput[]
    upsert?: MonthlyUsageUpsertWithWhereUniqueWithoutVendorInput | MonthlyUsageUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MonthlyUsageCreateManyVendorInputEnvelope
    set?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    disconnect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    delete?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    connect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    update?: MonthlyUsageUpdateWithWhereUniqueWithoutVendorInput | MonthlyUsageUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MonthlyUsageUpdateManyWithWhereWithoutVendorInput | MonthlyUsageUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MonthlyUsageScalarWhereInput | MonthlyUsageScalarWhereInput[]
  }

  export type SoftwareUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SoftwareCreateWithoutVendorInput, SoftwareUncheckedCreateWithoutVendorInput> | SoftwareCreateWithoutVendorInput[] | SoftwareUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SoftwareCreateOrConnectWithoutVendorInput | SoftwareCreateOrConnectWithoutVendorInput[]
    upsert?: SoftwareUpsertWithWhereUniqueWithoutVendorInput | SoftwareUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SoftwareCreateManyVendorInputEnvelope
    set?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
    disconnect?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
    delete?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
    connect?: SoftwareWhereUniqueInput | SoftwareWhereUniqueInput[]
    update?: SoftwareUpdateWithWhereUniqueWithoutVendorInput | SoftwareUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SoftwareUpdateManyWithWhereWithoutVendorInput | SoftwareUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SoftwareScalarWhereInput | SoftwareScalarWhereInput[]
  }

  export type ActivationCreateNestedManyWithoutActivatedByInput = {
    create?: XOR<ActivationCreateWithoutActivatedByInput, ActivationUncheckedCreateWithoutActivatedByInput> | ActivationCreateWithoutActivatedByInput[] | ActivationUncheckedCreateWithoutActivatedByInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutActivatedByInput | ActivationCreateOrConnectWithoutActivatedByInput[]
    createMany?: ActivationCreateManyActivatedByInputEnvelope
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
  }

  export type LicenseKeyCreateNestedManyWithoutActivatedByInput = {
    create?: XOR<LicenseKeyCreateWithoutActivatedByInput, LicenseKeyUncheckedCreateWithoutActivatedByInput> | LicenseKeyCreateWithoutActivatedByInput[] | LicenseKeyUncheckedCreateWithoutActivatedByInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutActivatedByInput | LicenseKeyCreateOrConnectWithoutActivatedByInput[]
    createMany?: LicenseKeyCreateManyActivatedByInputEnvelope
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
  }

  export type ActivationUncheckedCreateNestedManyWithoutActivatedByInput = {
    create?: XOR<ActivationCreateWithoutActivatedByInput, ActivationUncheckedCreateWithoutActivatedByInput> | ActivationCreateWithoutActivatedByInput[] | ActivationUncheckedCreateWithoutActivatedByInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutActivatedByInput | ActivationCreateOrConnectWithoutActivatedByInput[]
    createMany?: ActivationCreateManyActivatedByInputEnvelope
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
  }

  export type LicenseKeyUncheckedCreateNestedManyWithoutActivatedByInput = {
    create?: XOR<LicenseKeyCreateWithoutActivatedByInput, LicenseKeyUncheckedCreateWithoutActivatedByInput> | LicenseKeyCreateWithoutActivatedByInput[] | LicenseKeyUncheckedCreateWithoutActivatedByInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutActivatedByInput | LicenseKeyCreateOrConnectWithoutActivatedByInput[]
    createMany?: LicenseKeyCreateManyActivatedByInputEnvelope
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
  }

  export type ActivationUpdateManyWithoutActivatedByNestedInput = {
    create?: XOR<ActivationCreateWithoutActivatedByInput, ActivationUncheckedCreateWithoutActivatedByInput> | ActivationCreateWithoutActivatedByInput[] | ActivationUncheckedCreateWithoutActivatedByInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutActivatedByInput | ActivationCreateOrConnectWithoutActivatedByInput[]
    upsert?: ActivationUpsertWithWhereUniqueWithoutActivatedByInput | ActivationUpsertWithWhereUniqueWithoutActivatedByInput[]
    createMany?: ActivationCreateManyActivatedByInputEnvelope
    set?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    disconnect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    delete?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    update?: ActivationUpdateWithWhereUniqueWithoutActivatedByInput | ActivationUpdateWithWhereUniqueWithoutActivatedByInput[]
    updateMany?: ActivationUpdateManyWithWhereWithoutActivatedByInput | ActivationUpdateManyWithWhereWithoutActivatedByInput[]
    deleteMany?: ActivationScalarWhereInput | ActivationScalarWhereInput[]
  }

  export type LicenseKeyUpdateManyWithoutActivatedByNestedInput = {
    create?: XOR<LicenseKeyCreateWithoutActivatedByInput, LicenseKeyUncheckedCreateWithoutActivatedByInput> | LicenseKeyCreateWithoutActivatedByInput[] | LicenseKeyUncheckedCreateWithoutActivatedByInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutActivatedByInput | LicenseKeyCreateOrConnectWithoutActivatedByInput[]
    upsert?: LicenseKeyUpsertWithWhereUniqueWithoutActivatedByInput | LicenseKeyUpsertWithWhereUniqueWithoutActivatedByInput[]
    createMany?: LicenseKeyCreateManyActivatedByInputEnvelope
    set?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    disconnect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    delete?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    update?: LicenseKeyUpdateWithWhereUniqueWithoutActivatedByInput | LicenseKeyUpdateWithWhereUniqueWithoutActivatedByInput[]
    updateMany?: LicenseKeyUpdateManyWithWhereWithoutActivatedByInput | LicenseKeyUpdateManyWithWhereWithoutActivatedByInput[]
    deleteMany?: LicenseKeyScalarWhereInput | LicenseKeyScalarWhereInput[]
  }

  export type ActivationUncheckedUpdateManyWithoutActivatedByNestedInput = {
    create?: XOR<ActivationCreateWithoutActivatedByInput, ActivationUncheckedCreateWithoutActivatedByInput> | ActivationCreateWithoutActivatedByInput[] | ActivationUncheckedCreateWithoutActivatedByInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutActivatedByInput | ActivationCreateOrConnectWithoutActivatedByInput[]
    upsert?: ActivationUpsertWithWhereUniqueWithoutActivatedByInput | ActivationUpsertWithWhereUniqueWithoutActivatedByInput[]
    createMany?: ActivationCreateManyActivatedByInputEnvelope
    set?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    disconnect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    delete?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    update?: ActivationUpdateWithWhereUniqueWithoutActivatedByInput | ActivationUpdateWithWhereUniqueWithoutActivatedByInput[]
    updateMany?: ActivationUpdateManyWithWhereWithoutActivatedByInput | ActivationUpdateManyWithWhereWithoutActivatedByInput[]
    deleteMany?: ActivationScalarWhereInput | ActivationScalarWhereInput[]
  }

  export type LicenseKeyUncheckedUpdateManyWithoutActivatedByNestedInput = {
    create?: XOR<LicenseKeyCreateWithoutActivatedByInput, LicenseKeyUncheckedCreateWithoutActivatedByInput> | LicenseKeyCreateWithoutActivatedByInput[] | LicenseKeyUncheckedCreateWithoutActivatedByInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutActivatedByInput | LicenseKeyCreateOrConnectWithoutActivatedByInput[]
    upsert?: LicenseKeyUpsertWithWhereUniqueWithoutActivatedByInput | LicenseKeyUpsertWithWhereUniqueWithoutActivatedByInput[]
    createMany?: LicenseKeyCreateManyActivatedByInputEnvelope
    set?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    disconnect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    delete?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    update?: LicenseKeyUpdateWithWhereUniqueWithoutActivatedByInput | LicenseKeyUpdateWithWhereUniqueWithoutActivatedByInput[]
    updateMany?: LicenseKeyUpdateManyWithWhereWithoutActivatedByInput | LicenseKeyUpdateManyWithWhereWithoutActivatedByInput[]
    deleteMany?: LicenseKeyScalarWhereInput | LicenseKeyScalarWhereInput[]
  }

  export type ActivationCreateNestedManyWithoutSoftwareInput = {
    create?: XOR<ActivationCreateWithoutSoftwareInput, ActivationUncheckedCreateWithoutSoftwareInput> | ActivationCreateWithoutSoftwareInput[] | ActivationUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutSoftwareInput | ActivationCreateOrConnectWithoutSoftwareInput[]
    createMany?: ActivationCreateManySoftwareInputEnvelope
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
  }

  export type LicenseKeyCreateNestedManyWithoutSoftwareInput = {
    create?: XOR<LicenseKeyCreateWithoutSoftwareInput, LicenseKeyUncheckedCreateWithoutSoftwareInput> | LicenseKeyCreateWithoutSoftwareInput[] | LicenseKeyUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutSoftwareInput | LicenseKeyCreateOrConnectWithoutSoftwareInput[]
    createMany?: LicenseKeyCreateManySoftwareInputEnvelope
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
  }

  export type MonthlyUsageCreateNestedManyWithoutSoftwareInput = {
    create?: XOR<MonthlyUsageCreateWithoutSoftwareInput, MonthlyUsageUncheckedCreateWithoutSoftwareInput> | MonthlyUsageCreateWithoutSoftwareInput[] | MonthlyUsageUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: MonthlyUsageCreateOrConnectWithoutSoftwareInput | MonthlyUsageCreateOrConnectWithoutSoftwareInput[]
    createMany?: MonthlyUsageCreateManySoftwareInputEnvelope
    connect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
  }

  export type VendorCreateNestedOneWithoutSoftwareInput = {
    create?: XOR<VendorCreateWithoutSoftwareInput, VendorUncheckedCreateWithoutSoftwareInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSoftwareInput
    connect?: VendorWhereUniqueInput
  }

  export type ActivationUncheckedCreateNestedManyWithoutSoftwareInput = {
    create?: XOR<ActivationCreateWithoutSoftwareInput, ActivationUncheckedCreateWithoutSoftwareInput> | ActivationCreateWithoutSoftwareInput[] | ActivationUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutSoftwareInput | ActivationCreateOrConnectWithoutSoftwareInput[]
    createMany?: ActivationCreateManySoftwareInputEnvelope
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
  }

  export type LicenseKeyUncheckedCreateNestedManyWithoutSoftwareInput = {
    create?: XOR<LicenseKeyCreateWithoutSoftwareInput, LicenseKeyUncheckedCreateWithoutSoftwareInput> | LicenseKeyCreateWithoutSoftwareInput[] | LicenseKeyUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutSoftwareInput | LicenseKeyCreateOrConnectWithoutSoftwareInput[]
    createMany?: LicenseKeyCreateManySoftwareInputEnvelope
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
  }

  export type MonthlyUsageUncheckedCreateNestedManyWithoutSoftwareInput = {
    create?: XOR<MonthlyUsageCreateWithoutSoftwareInput, MonthlyUsageUncheckedCreateWithoutSoftwareInput> | MonthlyUsageCreateWithoutSoftwareInput[] | MonthlyUsageUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: MonthlyUsageCreateOrConnectWithoutSoftwareInput | MonthlyUsageCreateOrConnectWithoutSoftwareInput[]
    createMany?: MonthlyUsageCreateManySoftwareInputEnvelope
    connect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
  }

  export type EnumPricingModelFieldUpdateOperationsInput = {
    set?: $Enums.PricingModel
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActivationUpdateManyWithoutSoftwareNestedInput = {
    create?: XOR<ActivationCreateWithoutSoftwareInput, ActivationUncheckedCreateWithoutSoftwareInput> | ActivationCreateWithoutSoftwareInput[] | ActivationUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutSoftwareInput | ActivationCreateOrConnectWithoutSoftwareInput[]
    upsert?: ActivationUpsertWithWhereUniqueWithoutSoftwareInput | ActivationUpsertWithWhereUniqueWithoutSoftwareInput[]
    createMany?: ActivationCreateManySoftwareInputEnvelope
    set?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    disconnect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    delete?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    update?: ActivationUpdateWithWhereUniqueWithoutSoftwareInput | ActivationUpdateWithWhereUniqueWithoutSoftwareInput[]
    updateMany?: ActivationUpdateManyWithWhereWithoutSoftwareInput | ActivationUpdateManyWithWhereWithoutSoftwareInput[]
    deleteMany?: ActivationScalarWhereInput | ActivationScalarWhereInput[]
  }

  export type LicenseKeyUpdateManyWithoutSoftwareNestedInput = {
    create?: XOR<LicenseKeyCreateWithoutSoftwareInput, LicenseKeyUncheckedCreateWithoutSoftwareInput> | LicenseKeyCreateWithoutSoftwareInput[] | LicenseKeyUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutSoftwareInput | LicenseKeyCreateOrConnectWithoutSoftwareInput[]
    upsert?: LicenseKeyUpsertWithWhereUniqueWithoutSoftwareInput | LicenseKeyUpsertWithWhereUniqueWithoutSoftwareInput[]
    createMany?: LicenseKeyCreateManySoftwareInputEnvelope
    set?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    disconnect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    delete?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    update?: LicenseKeyUpdateWithWhereUniqueWithoutSoftwareInput | LicenseKeyUpdateWithWhereUniqueWithoutSoftwareInput[]
    updateMany?: LicenseKeyUpdateManyWithWhereWithoutSoftwareInput | LicenseKeyUpdateManyWithWhereWithoutSoftwareInput[]
    deleteMany?: LicenseKeyScalarWhereInput | LicenseKeyScalarWhereInput[]
  }

  export type MonthlyUsageUpdateManyWithoutSoftwareNestedInput = {
    create?: XOR<MonthlyUsageCreateWithoutSoftwareInput, MonthlyUsageUncheckedCreateWithoutSoftwareInput> | MonthlyUsageCreateWithoutSoftwareInput[] | MonthlyUsageUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: MonthlyUsageCreateOrConnectWithoutSoftwareInput | MonthlyUsageCreateOrConnectWithoutSoftwareInput[]
    upsert?: MonthlyUsageUpsertWithWhereUniqueWithoutSoftwareInput | MonthlyUsageUpsertWithWhereUniqueWithoutSoftwareInput[]
    createMany?: MonthlyUsageCreateManySoftwareInputEnvelope
    set?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    disconnect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    delete?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    connect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    update?: MonthlyUsageUpdateWithWhereUniqueWithoutSoftwareInput | MonthlyUsageUpdateWithWhereUniqueWithoutSoftwareInput[]
    updateMany?: MonthlyUsageUpdateManyWithWhereWithoutSoftwareInput | MonthlyUsageUpdateManyWithWhereWithoutSoftwareInput[]
    deleteMany?: MonthlyUsageScalarWhereInput | MonthlyUsageScalarWhereInput[]
  }

  export type VendorUpdateOneRequiredWithoutSoftwareNestedInput = {
    create?: XOR<VendorCreateWithoutSoftwareInput, VendorUncheckedCreateWithoutSoftwareInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSoftwareInput
    upsert?: VendorUpsertWithoutSoftwareInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutSoftwareInput, VendorUpdateWithoutSoftwareInput>, VendorUncheckedUpdateWithoutSoftwareInput>
  }

  export type ActivationUncheckedUpdateManyWithoutSoftwareNestedInput = {
    create?: XOR<ActivationCreateWithoutSoftwareInput, ActivationUncheckedCreateWithoutSoftwareInput> | ActivationCreateWithoutSoftwareInput[] | ActivationUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: ActivationCreateOrConnectWithoutSoftwareInput | ActivationCreateOrConnectWithoutSoftwareInput[]
    upsert?: ActivationUpsertWithWhereUniqueWithoutSoftwareInput | ActivationUpsertWithWhereUniqueWithoutSoftwareInput[]
    createMany?: ActivationCreateManySoftwareInputEnvelope
    set?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    disconnect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    delete?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    connect?: ActivationWhereUniqueInput | ActivationWhereUniqueInput[]
    update?: ActivationUpdateWithWhereUniqueWithoutSoftwareInput | ActivationUpdateWithWhereUniqueWithoutSoftwareInput[]
    updateMany?: ActivationUpdateManyWithWhereWithoutSoftwareInput | ActivationUpdateManyWithWhereWithoutSoftwareInput[]
    deleteMany?: ActivationScalarWhereInput | ActivationScalarWhereInput[]
  }

  export type LicenseKeyUncheckedUpdateManyWithoutSoftwareNestedInput = {
    create?: XOR<LicenseKeyCreateWithoutSoftwareInput, LicenseKeyUncheckedCreateWithoutSoftwareInput> | LicenseKeyCreateWithoutSoftwareInput[] | LicenseKeyUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutSoftwareInput | LicenseKeyCreateOrConnectWithoutSoftwareInput[]
    upsert?: LicenseKeyUpsertWithWhereUniqueWithoutSoftwareInput | LicenseKeyUpsertWithWhereUniqueWithoutSoftwareInput[]
    createMany?: LicenseKeyCreateManySoftwareInputEnvelope
    set?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    disconnect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    delete?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    connect?: LicenseKeyWhereUniqueInput | LicenseKeyWhereUniqueInput[]
    update?: LicenseKeyUpdateWithWhereUniqueWithoutSoftwareInput | LicenseKeyUpdateWithWhereUniqueWithoutSoftwareInput[]
    updateMany?: LicenseKeyUpdateManyWithWhereWithoutSoftwareInput | LicenseKeyUpdateManyWithWhereWithoutSoftwareInput[]
    deleteMany?: LicenseKeyScalarWhereInput | LicenseKeyScalarWhereInput[]
  }

  export type MonthlyUsageUncheckedUpdateManyWithoutSoftwareNestedInput = {
    create?: XOR<MonthlyUsageCreateWithoutSoftwareInput, MonthlyUsageUncheckedCreateWithoutSoftwareInput> | MonthlyUsageCreateWithoutSoftwareInput[] | MonthlyUsageUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: MonthlyUsageCreateOrConnectWithoutSoftwareInput | MonthlyUsageCreateOrConnectWithoutSoftwareInput[]
    upsert?: MonthlyUsageUpsertWithWhereUniqueWithoutSoftwareInput | MonthlyUsageUpsertWithWhereUniqueWithoutSoftwareInput[]
    createMany?: MonthlyUsageCreateManySoftwareInputEnvelope
    set?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    disconnect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    delete?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    connect?: MonthlyUsageWhereUniqueInput | MonthlyUsageWhereUniqueInput[]
    update?: MonthlyUsageUpdateWithWhereUniqueWithoutSoftwareInput | MonthlyUsageUpdateWithWhereUniqueWithoutSoftwareInput[]
    updateMany?: MonthlyUsageUpdateManyWithWhereWithoutSoftwareInput | MonthlyUsageUpdateManyWithWhereWithoutSoftwareInput[]
    deleteMany?: MonthlyUsageScalarWhereInput | MonthlyUsageScalarWhereInput[]
  }

  export type ActivationCreateNestedOneWithoutLicenseKeyInput = {
    create?: XOR<ActivationCreateWithoutLicenseKeyInput, ActivationUncheckedCreateWithoutLicenseKeyInput>
    connectOrCreate?: ActivationCreateOrConnectWithoutLicenseKeyInput
    connect?: ActivationWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutActivatedKeysInput = {
    create?: XOR<EmployeeCreateWithoutActivatedKeysInput, EmployeeUncheckedCreateWithoutActivatedKeysInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutActivatedKeysInput
    connect?: EmployeeWhereUniqueInput
  }

  export type SoftwareCreateNestedOneWithoutLicenseKeysInput = {
    create?: XOR<SoftwareCreateWithoutLicenseKeysInput, SoftwareUncheckedCreateWithoutLicenseKeysInput>
    connectOrCreate?: SoftwareCreateOrConnectWithoutLicenseKeysInput
    connect?: SoftwareWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutLicenseKeysInput = {
    create?: XOR<VendorCreateWithoutLicenseKeysInput, VendorUncheckedCreateWithoutLicenseKeysInput>
    connectOrCreate?: VendorCreateOrConnectWithoutLicenseKeysInput
    connect?: VendorWhereUniqueInput
  }

  export type ActivationUncheckedCreateNestedOneWithoutLicenseKeyInput = {
    create?: XOR<ActivationCreateWithoutLicenseKeyInput, ActivationUncheckedCreateWithoutLicenseKeyInput>
    connectOrCreate?: ActivationCreateOrConnectWithoutLicenseKeyInput
    connect?: ActivationWhereUniqueInput
  }

  export type EnumLicenseStatusFieldUpdateOperationsInput = {
    set?: $Enums.LicenseStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ActivationUpdateOneWithoutLicenseKeyNestedInput = {
    create?: XOR<ActivationCreateWithoutLicenseKeyInput, ActivationUncheckedCreateWithoutLicenseKeyInput>
    connectOrCreate?: ActivationCreateOrConnectWithoutLicenseKeyInput
    upsert?: ActivationUpsertWithoutLicenseKeyInput
    disconnect?: ActivationWhereInput | boolean
    delete?: ActivationWhereInput | boolean
    connect?: ActivationWhereUniqueInput
    update?: XOR<XOR<ActivationUpdateToOneWithWhereWithoutLicenseKeyInput, ActivationUpdateWithoutLicenseKeyInput>, ActivationUncheckedUpdateWithoutLicenseKeyInput>
  }

  export type EmployeeUpdateOneWithoutActivatedKeysNestedInput = {
    create?: XOR<EmployeeCreateWithoutActivatedKeysInput, EmployeeUncheckedCreateWithoutActivatedKeysInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutActivatedKeysInput
    upsert?: EmployeeUpsertWithoutActivatedKeysInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutActivatedKeysInput, EmployeeUpdateWithoutActivatedKeysInput>, EmployeeUncheckedUpdateWithoutActivatedKeysInput>
  }

  export type SoftwareUpdateOneRequiredWithoutLicenseKeysNestedInput = {
    create?: XOR<SoftwareCreateWithoutLicenseKeysInput, SoftwareUncheckedCreateWithoutLicenseKeysInput>
    connectOrCreate?: SoftwareCreateOrConnectWithoutLicenseKeysInput
    upsert?: SoftwareUpsertWithoutLicenseKeysInput
    connect?: SoftwareWhereUniqueInput
    update?: XOR<XOR<SoftwareUpdateToOneWithWhereWithoutLicenseKeysInput, SoftwareUpdateWithoutLicenseKeysInput>, SoftwareUncheckedUpdateWithoutLicenseKeysInput>
  }

  export type VendorUpdateOneRequiredWithoutLicenseKeysNestedInput = {
    create?: XOR<VendorCreateWithoutLicenseKeysInput, VendorUncheckedCreateWithoutLicenseKeysInput>
    connectOrCreate?: VendorCreateOrConnectWithoutLicenseKeysInput
    upsert?: VendorUpsertWithoutLicenseKeysInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutLicenseKeysInput, VendorUpdateWithoutLicenseKeysInput>, VendorUncheckedUpdateWithoutLicenseKeysInput>
  }

  export type ActivationUncheckedUpdateOneWithoutLicenseKeyNestedInput = {
    create?: XOR<ActivationCreateWithoutLicenseKeyInput, ActivationUncheckedCreateWithoutLicenseKeyInput>
    connectOrCreate?: ActivationCreateOrConnectWithoutLicenseKeyInput
    upsert?: ActivationUpsertWithoutLicenseKeyInput
    disconnect?: ActivationWhereInput | boolean
    delete?: ActivationWhereInput | boolean
    connect?: ActivationWhereUniqueInput
    update?: XOR<XOR<ActivationUpdateToOneWithWhereWithoutLicenseKeyInput, ActivationUpdateWithoutLicenseKeyInput>, ActivationUncheckedUpdateWithoutLicenseKeyInput>
  }

  export type EmployeeCreateNestedOneWithoutPerformedActivationsInput = {
    create?: XOR<EmployeeCreateWithoutPerformedActivationsInput, EmployeeUncheckedCreateWithoutPerformedActivationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPerformedActivationsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type LicenseKeyCreateNestedOneWithoutActivationInput = {
    create?: XOR<LicenseKeyCreateWithoutActivationInput, LicenseKeyUncheckedCreateWithoutActivationInput>
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutActivationInput
    connect?: LicenseKeyWhereUniqueInput
  }

  export type SoftwareCreateNestedOneWithoutActivationsInput = {
    create?: XOR<SoftwareCreateWithoutActivationsInput, SoftwareUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: SoftwareCreateOrConnectWithoutActivationsInput
    connect?: SoftwareWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutActivationsInput = {
    create?: XOR<VendorCreateWithoutActivationsInput, VendorUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutActivationsInput
    connect?: VendorWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutPerformedActivationsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPerformedActivationsInput, EmployeeUncheckedCreateWithoutPerformedActivationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPerformedActivationsInput
    upsert?: EmployeeUpsertWithoutPerformedActivationsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPerformedActivationsInput, EmployeeUpdateWithoutPerformedActivationsInput>, EmployeeUncheckedUpdateWithoutPerformedActivationsInput>
  }

  export type LicenseKeyUpdateOneRequiredWithoutActivationNestedInput = {
    create?: XOR<LicenseKeyCreateWithoutActivationInput, LicenseKeyUncheckedCreateWithoutActivationInput>
    connectOrCreate?: LicenseKeyCreateOrConnectWithoutActivationInput
    upsert?: LicenseKeyUpsertWithoutActivationInput
    connect?: LicenseKeyWhereUniqueInput
    update?: XOR<XOR<LicenseKeyUpdateToOneWithWhereWithoutActivationInput, LicenseKeyUpdateWithoutActivationInput>, LicenseKeyUncheckedUpdateWithoutActivationInput>
  }

  export type SoftwareUpdateOneRequiredWithoutActivationsNestedInput = {
    create?: XOR<SoftwareCreateWithoutActivationsInput, SoftwareUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: SoftwareCreateOrConnectWithoutActivationsInput
    upsert?: SoftwareUpsertWithoutActivationsInput
    connect?: SoftwareWhereUniqueInput
    update?: XOR<XOR<SoftwareUpdateToOneWithWhereWithoutActivationsInput, SoftwareUpdateWithoutActivationsInput>, SoftwareUncheckedUpdateWithoutActivationsInput>
  }

  export type VendorUpdateOneRequiredWithoutActivationsNestedInput = {
    create?: XOR<VendorCreateWithoutActivationsInput, VendorUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutActivationsInput
    upsert?: VendorUpsertWithoutActivationsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutActivationsInput, VendorUpdateWithoutActivationsInput>, VendorUncheckedUpdateWithoutActivationsInput>
  }

  export type SoftwareCreateNestedOneWithoutMonthlyUsageInput = {
    create?: XOR<SoftwareCreateWithoutMonthlyUsageInput, SoftwareUncheckedCreateWithoutMonthlyUsageInput>
    connectOrCreate?: SoftwareCreateOrConnectWithoutMonthlyUsageInput
    connect?: SoftwareWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutMonthlyUsageInput = {
    create?: XOR<VendorCreateWithoutMonthlyUsageInput, VendorUncheckedCreateWithoutMonthlyUsageInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMonthlyUsageInput
    connect?: VendorWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SoftwareUpdateOneRequiredWithoutMonthlyUsageNestedInput = {
    create?: XOR<SoftwareCreateWithoutMonthlyUsageInput, SoftwareUncheckedCreateWithoutMonthlyUsageInput>
    connectOrCreate?: SoftwareCreateOrConnectWithoutMonthlyUsageInput
    upsert?: SoftwareUpsertWithoutMonthlyUsageInput
    connect?: SoftwareWhereUniqueInput
    update?: XOR<XOR<SoftwareUpdateToOneWithWhereWithoutMonthlyUsageInput, SoftwareUpdateWithoutMonthlyUsageInput>, SoftwareUncheckedUpdateWithoutMonthlyUsageInput>
  }

  export type VendorUpdateOneRequiredWithoutMonthlyUsageNestedInput = {
    create?: XOR<VendorCreateWithoutMonthlyUsageInput, VendorUncheckedCreateWithoutMonthlyUsageInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMonthlyUsageInput
    upsert?: VendorUpsertWithoutMonthlyUsageInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutMonthlyUsageInput, VendorUpdateWithoutMonthlyUsageInput>, VendorUncheckedUpdateWithoutMonthlyUsageInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumEmployeeRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeRoleFilter<$PrismaModel> | $Enums.EmployeeRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeRole[] | ListEnumEmployeeRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeRoleWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeRoleFilter<$PrismaModel>
    _max?: NestedEnumEmployeeRoleFilter<$PrismaModel>
  }

  export type NestedEnumPricingModelFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingModel | EnumPricingModelFieldRefInput<$PrismaModel>
    in?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingModelFilter<$PrismaModel> | $Enums.PricingModel
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPricingModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingModel | EnumPricingModelFieldRefInput<$PrismaModel>
    in?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingModelWithAggregatesFilter<$PrismaModel> | $Enums.PricingModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricingModelFilter<$PrismaModel>
    _max?: NestedEnumPricingModelFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumLicenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusFilter<$PrismaModel> | $Enums.LicenseStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.LicenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseStatusFilter<$PrismaModel>
    _max?: NestedEnumLicenseStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ActivationCreateWithoutVendorInput = {
    id?: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
    activatedBy: EmployeeCreateNestedOneWithoutPerformedActivationsInput
    licenseKey: LicenseKeyCreateNestedOneWithoutActivationInput
    software: SoftwareCreateNestedOneWithoutActivationsInput
  }

  export type ActivationUncheckedCreateWithoutVendorInput = {
    id?: string
    licenseKeyId: string
    activatedById: string
    softwareId: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActivationCreateOrConnectWithoutVendorInput = {
    where: ActivationWhereUniqueInput
    create: XOR<ActivationCreateWithoutVendorInput, ActivationUncheckedCreateWithoutVendorInput>
  }

  export type ActivationCreateManyVendorInputEnvelope = {
    data: ActivationCreateManyVendorInput | ActivationCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type LicenseKeyCreateWithoutVendorInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
    activation?: ActivationCreateNestedOneWithoutLicenseKeyInput
    activatedBy?: EmployeeCreateNestedOneWithoutActivatedKeysInput
    software: SoftwareCreateNestedOneWithoutLicenseKeysInput
  }

  export type LicenseKeyUncheckedCreateWithoutVendorInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    softwareId: string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    activatedById?: string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
    activation?: ActivationUncheckedCreateNestedOneWithoutLicenseKeyInput
  }

  export type LicenseKeyCreateOrConnectWithoutVendorInput = {
    where: LicenseKeyWhereUniqueInput
    create: XOR<LicenseKeyCreateWithoutVendorInput, LicenseKeyUncheckedCreateWithoutVendorInput>
  }

  export type LicenseKeyCreateManyVendorInputEnvelope = {
    data: LicenseKeyCreateManyVendorInput | LicenseKeyCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyUsageCreateWithoutVendorInput = {
    id?: string
    month: Date | string
    usageCount: number
    totalOwed: number
    calculatedAt?: Date | string
    software: SoftwareCreateNestedOneWithoutMonthlyUsageInput
  }

  export type MonthlyUsageUncheckedCreateWithoutVendorInput = {
    id?: string
    softwareId: string
    month: Date | string
    usageCount: number
    totalOwed: number
    calculatedAt?: Date | string
  }

  export type MonthlyUsageCreateOrConnectWithoutVendorInput = {
    where: MonthlyUsageWhereUniqueInput
    create: XOR<MonthlyUsageCreateWithoutVendorInput, MonthlyUsageUncheckedCreateWithoutVendorInput>
  }

  export type MonthlyUsageCreateManyVendorInputEnvelope = {
    data: MonthlyUsageCreateManyVendorInput | MonthlyUsageCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type SoftwareCreateWithoutVendorInput = {
    id?: string
    name: string
    description?: string | null
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: ActivationCreateNestedManyWithoutSoftwareInput
    licenseKeys?: LicenseKeyCreateNestedManyWithoutSoftwareInput
    monthlyUsage?: MonthlyUsageCreateNestedManyWithoutSoftwareInput
  }

  export type SoftwareUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    description?: string | null
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: ActivationUncheckedCreateNestedManyWithoutSoftwareInput
    licenseKeys?: LicenseKeyUncheckedCreateNestedManyWithoutSoftwareInput
    monthlyUsage?: MonthlyUsageUncheckedCreateNestedManyWithoutSoftwareInput
  }

  export type SoftwareCreateOrConnectWithoutVendorInput = {
    where: SoftwareWhereUniqueInput
    create: XOR<SoftwareCreateWithoutVendorInput, SoftwareUncheckedCreateWithoutVendorInput>
  }

  export type SoftwareCreateManyVendorInputEnvelope = {
    data: SoftwareCreateManyVendorInput | SoftwareCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type ActivationUpsertWithWhereUniqueWithoutVendorInput = {
    where: ActivationWhereUniqueInput
    update: XOR<ActivationUpdateWithoutVendorInput, ActivationUncheckedUpdateWithoutVendorInput>
    create: XOR<ActivationCreateWithoutVendorInput, ActivationUncheckedCreateWithoutVendorInput>
  }

  export type ActivationUpdateWithWhereUniqueWithoutVendorInput = {
    where: ActivationWhereUniqueInput
    data: XOR<ActivationUpdateWithoutVendorInput, ActivationUncheckedUpdateWithoutVendorInput>
  }

  export type ActivationUpdateManyWithWhereWithoutVendorInput = {
    where: ActivationScalarWhereInput
    data: XOR<ActivationUpdateManyMutationInput, ActivationUncheckedUpdateManyWithoutVendorInput>
  }

  export type ActivationScalarWhereInput = {
    AND?: ActivationScalarWhereInput | ActivationScalarWhereInput[]
    OR?: ActivationScalarWhereInput[]
    NOT?: ActivationScalarWhereInput | ActivationScalarWhereInput[]
    id?: StringFilter<"Activation"> | string
    licenseKeyId?: StringFilter<"Activation"> | string
    activatedById?: StringFilter<"Activation"> | string
    softwareId?: StringFilter<"Activation"> | string
    vendorId?: StringFilter<"Activation"> | string
    headsetSerialNumber?: StringNullableFilter<"Activation"> | string | null
    activatedAt?: DateTimeFilter<"Activation"> | Date | string
    createdAt?: DateTimeFilter<"Activation"> | Date | string
  }

  export type LicenseKeyUpsertWithWhereUniqueWithoutVendorInput = {
    where: LicenseKeyWhereUniqueInput
    update: XOR<LicenseKeyUpdateWithoutVendorInput, LicenseKeyUncheckedUpdateWithoutVendorInput>
    create: XOR<LicenseKeyCreateWithoutVendorInput, LicenseKeyUncheckedCreateWithoutVendorInput>
  }

  export type LicenseKeyUpdateWithWhereUniqueWithoutVendorInput = {
    where: LicenseKeyWhereUniqueInput
    data: XOR<LicenseKeyUpdateWithoutVendorInput, LicenseKeyUncheckedUpdateWithoutVendorInput>
  }

  export type LicenseKeyUpdateManyWithWhereWithoutVendorInput = {
    where: LicenseKeyScalarWhereInput
    data: XOR<LicenseKeyUpdateManyMutationInput, LicenseKeyUncheckedUpdateManyWithoutVendorInput>
  }

  export type LicenseKeyScalarWhereInput = {
    AND?: LicenseKeyScalarWhereInput | LicenseKeyScalarWhereInput[]
    OR?: LicenseKeyScalarWhereInput[]
    NOT?: LicenseKeyScalarWhereInput | LicenseKeyScalarWhereInput[]
    id?: StringFilter<"LicenseKey"> | string
    key?: StringFilter<"LicenseKey"> | string
    status?: EnumLicenseStatusFilter<"LicenseKey"> | $Enums.LicenseStatus
    vendorId?: StringFilter<"LicenseKey"> | string
    softwareId?: StringFilter<"LicenseKey"> | string
    expiresAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    notes?: StringNullableFilter<"LicenseKey"> | string | null
    createdAt?: DateTimeFilter<"LicenseKey"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseKey"> | Date | string
    activatedAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    activatedById?: StringNullableFilter<"LicenseKey"> | string | null
    canceledAt?: DateTimeNullableFilter<"LicenseKey"> | Date | string | null
    canceledReason?: StringNullableFilter<"LicenseKey"> | string | null
  }

  export type MonthlyUsageUpsertWithWhereUniqueWithoutVendorInput = {
    where: MonthlyUsageWhereUniqueInput
    update: XOR<MonthlyUsageUpdateWithoutVendorInput, MonthlyUsageUncheckedUpdateWithoutVendorInput>
    create: XOR<MonthlyUsageCreateWithoutVendorInput, MonthlyUsageUncheckedCreateWithoutVendorInput>
  }

  export type MonthlyUsageUpdateWithWhereUniqueWithoutVendorInput = {
    where: MonthlyUsageWhereUniqueInput
    data: XOR<MonthlyUsageUpdateWithoutVendorInput, MonthlyUsageUncheckedUpdateWithoutVendorInput>
  }

  export type MonthlyUsageUpdateManyWithWhereWithoutVendorInput = {
    where: MonthlyUsageScalarWhereInput
    data: XOR<MonthlyUsageUpdateManyMutationInput, MonthlyUsageUncheckedUpdateManyWithoutVendorInput>
  }

  export type MonthlyUsageScalarWhereInput = {
    AND?: MonthlyUsageScalarWhereInput | MonthlyUsageScalarWhereInput[]
    OR?: MonthlyUsageScalarWhereInput[]
    NOT?: MonthlyUsageScalarWhereInput | MonthlyUsageScalarWhereInput[]
    id?: StringFilter<"MonthlyUsage"> | string
    vendorId?: StringFilter<"MonthlyUsage"> | string
    softwareId?: StringFilter<"MonthlyUsage"> | string
    month?: DateTimeFilter<"MonthlyUsage"> | Date | string
    usageCount?: IntFilter<"MonthlyUsage"> | number
    totalOwed?: FloatFilter<"MonthlyUsage"> | number
    calculatedAt?: DateTimeFilter<"MonthlyUsage"> | Date | string
  }

  export type SoftwareUpsertWithWhereUniqueWithoutVendorInput = {
    where: SoftwareWhereUniqueInput
    update: XOR<SoftwareUpdateWithoutVendorInput, SoftwareUncheckedUpdateWithoutVendorInput>
    create: XOR<SoftwareCreateWithoutVendorInput, SoftwareUncheckedCreateWithoutVendorInput>
  }

  export type SoftwareUpdateWithWhereUniqueWithoutVendorInput = {
    where: SoftwareWhereUniqueInput
    data: XOR<SoftwareUpdateWithoutVendorInput, SoftwareUncheckedUpdateWithoutVendorInput>
  }

  export type SoftwareUpdateManyWithWhereWithoutVendorInput = {
    where: SoftwareScalarWhereInput
    data: XOR<SoftwareUpdateManyMutationInput, SoftwareUncheckedUpdateManyWithoutVendorInput>
  }

  export type SoftwareScalarWhereInput = {
    AND?: SoftwareScalarWhereInput | SoftwareScalarWhereInput[]
    OR?: SoftwareScalarWhereInput[]
    NOT?: SoftwareScalarWhereInput | SoftwareScalarWhereInput[]
    id?: StringFilter<"Software"> | string
    name?: StringFilter<"Software"> | string
    description?: StringNullableFilter<"Software"> | string | null
    vendorId?: StringFilter<"Software"> | string
    pricingModel?: EnumPricingModelFilter<"Software"> | $Enums.PricingModel
    pricePerUse?: FloatNullableFilter<"Software"> | number | null
    monthlyRate?: FloatNullableFilter<"Software"> | number | null
    createdAt?: DateTimeFilter<"Software"> | Date | string
    updatedAt?: DateTimeFilter<"Software"> | Date | string
  }

  export type ActivationCreateWithoutActivatedByInput = {
    id?: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
    licenseKey: LicenseKeyCreateNestedOneWithoutActivationInput
    software: SoftwareCreateNestedOneWithoutActivationsInput
    vendor: VendorCreateNestedOneWithoutActivationsInput
  }

  export type ActivationUncheckedCreateWithoutActivatedByInput = {
    id?: string
    licenseKeyId: string
    softwareId: string
    vendorId: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActivationCreateOrConnectWithoutActivatedByInput = {
    where: ActivationWhereUniqueInput
    create: XOR<ActivationCreateWithoutActivatedByInput, ActivationUncheckedCreateWithoutActivatedByInput>
  }

  export type ActivationCreateManyActivatedByInputEnvelope = {
    data: ActivationCreateManyActivatedByInput | ActivationCreateManyActivatedByInput[]
    skipDuplicates?: boolean
  }

  export type LicenseKeyCreateWithoutActivatedByInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
    activation?: ActivationCreateNestedOneWithoutLicenseKeyInput
    software: SoftwareCreateNestedOneWithoutLicenseKeysInput
    vendor: VendorCreateNestedOneWithoutLicenseKeysInput
  }

  export type LicenseKeyUncheckedCreateWithoutActivatedByInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    vendorId: string
    softwareId: string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
    activation?: ActivationUncheckedCreateNestedOneWithoutLicenseKeyInput
  }

  export type LicenseKeyCreateOrConnectWithoutActivatedByInput = {
    where: LicenseKeyWhereUniqueInput
    create: XOR<LicenseKeyCreateWithoutActivatedByInput, LicenseKeyUncheckedCreateWithoutActivatedByInput>
  }

  export type LicenseKeyCreateManyActivatedByInputEnvelope = {
    data: LicenseKeyCreateManyActivatedByInput | LicenseKeyCreateManyActivatedByInput[]
    skipDuplicates?: boolean
  }

  export type ActivationUpsertWithWhereUniqueWithoutActivatedByInput = {
    where: ActivationWhereUniqueInput
    update: XOR<ActivationUpdateWithoutActivatedByInput, ActivationUncheckedUpdateWithoutActivatedByInput>
    create: XOR<ActivationCreateWithoutActivatedByInput, ActivationUncheckedCreateWithoutActivatedByInput>
  }

  export type ActivationUpdateWithWhereUniqueWithoutActivatedByInput = {
    where: ActivationWhereUniqueInput
    data: XOR<ActivationUpdateWithoutActivatedByInput, ActivationUncheckedUpdateWithoutActivatedByInput>
  }

  export type ActivationUpdateManyWithWhereWithoutActivatedByInput = {
    where: ActivationScalarWhereInput
    data: XOR<ActivationUpdateManyMutationInput, ActivationUncheckedUpdateManyWithoutActivatedByInput>
  }

  export type LicenseKeyUpsertWithWhereUniqueWithoutActivatedByInput = {
    where: LicenseKeyWhereUniqueInput
    update: XOR<LicenseKeyUpdateWithoutActivatedByInput, LicenseKeyUncheckedUpdateWithoutActivatedByInput>
    create: XOR<LicenseKeyCreateWithoutActivatedByInput, LicenseKeyUncheckedCreateWithoutActivatedByInput>
  }

  export type LicenseKeyUpdateWithWhereUniqueWithoutActivatedByInput = {
    where: LicenseKeyWhereUniqueInput
    data: XOR<LicenseKeyUpdateWithoutActivatedByInput, LicenseKeyUncheckedUpdateWithoutActivatedByInput>
  }

  export type LicenseKeyUpdateManyWithWhereWithoutActivatedByInput = {
    where: LicenseKeyScalarWhereInput
    data: XOR<LicenseKeyUpdateManyMutationInput, LicenseKeyUncheckedUpdateManyWithoutActivatedByInput>
  }

  export type ActivationCreateWithoutSoftwareInput = {
    id?: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
    activatedBy: EmployeeCreateNestedOneWithoutPerformedActivationsInput
    licenseKey: LicenseKeyCreateNestedOneWithoutActivationInput
    vendor: VendorCreateNestedOneWithoutActivationsInput
  }

  export type ActivationUncheckedCreateWithoutSoftwareInput = {
    id?: string
    licenseKeyId: string
    activatedById: string
    vendorId: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActivationCreateOrConnectWithoutSoftwareInput = {
    where: ActivationWhereUniqueInput
    create: XOR<ActivationCreateWithoutSoftwareInput, ActivationUncheckedCreateWithoutSoftwareInput>
  }

  export type ActivationCreateManySoftwareInputEnvelope = {
    data: ActivationCreateManySoftwareInput | ActivationCreateManySoftwareInput[]
    skipDuplicates?: boolean
  }

  export type LicenseKeyCreateWithoutSoftwareInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
    activation?: ActivationCreateNestedOneWithoutLicenseKeyInput
    activatedBy?: EmployeeCreateNestedOneWithoutActivatedKeysInput
    vendor: VendorCreateNestedOneWithoutLicenseKeysInput
  }

  export type LicenseKeyUncheckedCreateWithoutSoftwareInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    vendorId: string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    activatedById?: string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
    activation?: ActivationUncheckedCreateNestedOneWithoutLicenseKeyInput
  }

  export type LicenseKeyCreateOrConnectWithoutSoftwareInput = {
    where: LicenseKeyWhereUniqueInput
    create: XOR<LicenseKeyCreateWithoutSoftwareInput, LicenseKeyUncheckedCreateWithoutSoftwareInput>
  }

  export type LicenseKeyCreateManySoftwareInputEnvelope = {
    data: LicenseKeyCreateManySoftwareInput | LicenseKeyCreateManySoftwareInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyUsageCreateWithoutSoftwareInput = {
    id?: string
    month: Date | string
    usageCount: number
    totalOwed: number
    calculatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutMonthlyUsageInput
  }

  export type MonthlyUsageUncheckedCreateWithoutSoftwareInput = {
    id?: string
    vendorId: string
    month: Date | string
    usageCount: number
    totalOwed: number
    calculatedAt?: Date | string
  }

  export type MonthlyUsageCreateOrConnectWithoutSoftwareInput = {
    where: MonthlyUsageWhereUniqueInput
    create: XOR<MonthlyUsageCreateWithoutSoftwareInput, MonthlyUsageUncheckedCreateWithoutSoftwareInput>
  }

  export type MonthlyUsageCreateManySoftwareInputEnvelope = {
    data: MonthlyUsageCreateManySoftwareInput | MonthlyUsageCreateManySoftwareInput[]
    skipDuplicates?: boolean
  }

  export type VendorCreateWithoutSoftwareInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    activations?: ActivationCreateNestedManyWithoutVendorInput
    licenseKeys?: LicenseKeyCreateNestedManyWithoutVendorInput
    monthlyUsage?: MonthlyUsageCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutSoftwareInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    activations?: ActivationUncheckedCreateNestedManyWithoutVendorInput
    licenseKeys?: LicenseKeyUncheckedCreateNestedManyWithoutVendorInput
    monthlyUsage?: MonthlyUsageUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutSoftwareInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutSoftwareInput, VendorUncheckedCreateWithoutSoftwareInput>
  }

  export type ActivationUpsertWithWhereUniqueWithoutSoftwareInput = {
    where: ActivationWhereUniqueInput
    update: XOR<ActivationUpdateWithoutSoftwareInput, ActivationUncheckedUpdateWithoutSoftwareInput>
    create: XOR<ActivationCreateWithoutSoftwareInput, ActivationUncheckedCreateWithoutSoftwareInput>
  }

  export type ActivationUpdateWithWhereUniqueWithoutSoftwareInput = {
    where: ActivationWhereUniqueInput
    data: XOR<ActivationUpdateWithoutSoftwareInput, ActivationUncheckedUpdateWithoutSoftwareInput>
  }

  export type ActivationUpdateManyWithWhereWithoutSoftwareInput = {
    where: ActivationScalarWhereInput
    data: XOR<ActivationUpdateManyMutationInput, ActivationUncheckedUpdateManyWithoutSoftwareInput>
  }

  export type LicenseKeyUpsertWithWhereUniqueWithoutSoftwareInput = {
    where: LicenseKeyWhereUniqueInput
    update: XOR<LicenseKeyUpdateWithoutSoftwareInput, LicenseKeyUncheckedUpdateWithoutSoftwareInput>
    create: XOR<LicenseKeyCreateWithoutSoftwareInput, LicenseKeyUncheckedCreateWithoutSoftwareInput>
  }

  export type LicenseKeyUpdateWithWhereUniqueWithoutSoftwareInput = {
    where: LicenseKeyWhereUniqueInput
    data: XOR<LicenseKeyUpdateWithoutSoftwareInput, LicenseKeyUncheckedUpdateWithoutSoftwareInput>
  }

  export type LicenseKeyUpdateManyWithWhereWithoutSoftwareInput = {
    where: LicenseKeyScalarWhereInput
    data: XOR<LicenseKeyUpdateManyMutationInput, LicenseKeyUncheckedUpdateManyWithoutSoftwareInput>
  }

  export type MonthlyUsageUpsertWithWhereUniqueWithoutSoftwareInput = {
    where: MonthlyUsageWhereUniqueInput
    update: XOR<MonthlyUsageUpdateWithoutSoftwareInput, MonthlyUsageUncheckedUpdateWithoutSoftwareInput>
    create: XOR<MonthlyUsageCreateWithoutSoftwareInput, MonthlyUsageUncheckedCreateWithoutSoftwareInput>
  }

  export type MonthlyUsageUpdateWithWhereUniqueWithoutSoftwareInput = {
    where: MonthlyUsageWhereUniqueInput
    data: XOR<MonthlyUsageUpdateWithoutSoftwareInput, MonthlyUsageUncheckedUpdateWithoutSoftwareInput>
  }

  export type MonthlyUsageUpdateManyWithWhereWithoutSoftwareInput = {
    where: MonthlyUsageScalarWhereInput
    data: XOR<MonthlyUsageUpdateManyMutationInput, MonthlyUsageUncheckedUpdateManyWithoutSoftwareInput>
  }

  export type VendorUpsertWithoutSoftwareInput = {
    update: XOR<VendorUpdateWithoutSoftwareInput, VendorUncheckedUpdateWithoutSoftwareInput>
    create: XOR<VendorCreateWithoutSoftwareInput, VendorUncheckedCreateWithoutSoftwareInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutSoftwareInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutSoftwareInput, VendorUncheckedUpdateWithoutSoftwareInput>
  }

  export type VendorUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    activations?: ActivationUpdateManyWithoutVendorNestedInput
    licenseKeys?: LicenseKeyUpdateManyWithoutVendorNestedInput
    monthlyUsage?: MonthlyUsageUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    activations?: ActivationUncheckedUpdateManyWithoutVendorNestedInput
    licenseKeys?: LicenseKeyUncheckedUpdateManyWithoutVendorNestedInput
    monthlyUsage?: MonthlyUsageUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ActivationCreateWithoutLicenseKeyInput = {
    id?: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
    activatedBy: EmployeeCreateNestedOneWithoutPerformedActivationsInput
    software: SoftwareCreateNestedOneWithoutActivationsInput
    vendor: VendorCreateNestedOneWithoutActivationsInput
  }

  export type ActivationUncheckedCreateWithoutLicenseKeyInput = {
    id?: string
    activatedById: string
    softwareId: string
    vendorId: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActivationCreateOrConnectWithoutLicenseKeyInput = {
    where: ActivationWhereUniqueInput
    create: XOR<ActivationCreateWithoutLicenseKeyInput, ActivationUncheckedCreateWithoutLicenseKeyInput>
  }

  export type EmployeeCreateWithoutActivatedKeysInput = {
    id?: string
    supabaseUserId?: string | null
    companyName?: string | null
    name: string
    email: string
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    performedActivations?: ActivationCreateNestedManyWithoutActivatedByInput
  }

  export type EmployeeUncheckedCreateWithoutActivatedKeysInput = {
    id?: string
    supabaseUserId?: string | null
    companyName?: string | null
    name: string
    email: string
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    performedActivations?: ActivationUncheckedCreateNestedManyWithoutActivatedByInput
  }

  export type EmployeeCreateOrConnectWithoutActivatedKeysInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutActivatedKeysInput, EmployeeUncheckedCreateWithoutActivatedKeysInput>
  }

  export type SoftwareCreateWithoutLicenseKeysInput = {
    id?: string
    name: string
    description?: string | null
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: ActivationCreateNestedManyWithoutSoftwareInput
    monthlyUsage?: MonthlyUsageCreateNestedManyWithoutSoftwareInput
    vendor: VendorCreateNestedOneWithoutSoftwareInput
  }

  export type SoftwareUncheckedCreateWithoutLicenseKeysInput = {
    id?: string
    name: string
    description?: string | null
    vendorId: string
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: ActivationUncheckedCreateNestedManyWithoutSoftwareInput
    monthlyUsage?: MonthlyUsageUncheckedCreateNestedManyWithoutSoftwareInput
  }

  export type SoftwareCreateOrConnectWithoutLicenseKeysInput = {
    where: SoftwareWhereUniqueInput
    create: XOR<SoftwareCreateWithoutLicenseKeysInput, SoftwareUncheckedCreateWithoutLicenseKeysInput>
  }

  export type VendorCreateWithoutLicenseKeysInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    activations?: ActivationCreateNestedManyWithoutVendorInput
    monthlyUsage?: MonthlyUsageCreateNestedManyWithoutVendorInput
    software?: SoftwareCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutLicenseKeysInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    activations?: ActivationUncheckedCreateNestedManyWithoutVendorInput
    monthlyUsage?: MonthlyUsageUncheckedCreateNestedManyWithoutVendorInput
    software?: SoftwareUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutLicenseKeysInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutLicenseKeysInput, VendorUncheckedCreateWithoutLicenseKeysInput>
  }

  export type ActivationUpsertWithoutLicenseKeyInput = {
    update: XOR<ActivationUpdateWithoutLicenseKeyInput, ActivationUncheckedUpdateWithoutLicenseKeyInput>
    create: XOR<ActivationCreateWithoutLicenseKeyInput, ActivationUncheckedCreateWithoutLicenseKeyInput>
    where?: ActivationWhereInput
  }

  export type ActivationUpdateToOneWithWhereWithoutLicenseKeyInput = {
    where?: ActivationWhereInput
    data: XOR<ActivationUpdateWithoutLicenseKeyInput, ActivationUncheckedUpdateWithoutLicenseKeyInput>
  }

  export type ActivationUpdateWithoutLicenseKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedBy?: EmployeeUpdateOneRequiredWithoutPerformedActivationsNestedInput
    software?: SoftwareUpdateOneRequiredWithoutActivationsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutActivationsNestedInput
  }

  export type ActivationUncheckedUpdateWithoutLicenseKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    activatedById?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutActivatedKeysInput = {
    update: XOR<EmployeeUpdateWithoutActivatedKeysInput, EmployeeUncheckedUpdateWithoutActivatedKeysInput>
    create: XOR<EmployeeCreateWithoutActivatedKeysInput, EmployeeUncheckedCreateWithoutActivatedKeysInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutActivatedKeysInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutActivatedKeysInput, EmployeeUncheckedUpdateWithoutActivatedKeysInput>
  }

  export type EmployeeUpdateWithoutActivatedKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performedActivations?: ActivationUpdateManyWithoutActivatedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutActivatedKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    performedActivations?: ActivationUncheckedUpdateManyWithoutActivatedByNestedInput
  }

  export type SoftwareUpsertWithoutLicenseKeysInput = {
    update: XOR<SoftwareUpdateWithoutLicenseKeysInput, SoftwareUncheckedUpdateWithoutLicenseKeysInput>
    create: XOR<SoftwareCreateWithoutLicenseKeysInput, SoftwareUncheckedCreateWithoutLicenseKeysInput>
    where?: SoftwareWhereInput
  }

  export type SoftwareUpdateToOneWithWhereWithoutLicenseKeysInput = {
    where?: SoftwareWhereInput
    data: XOR<SoftwareUpdateWithoutLicenseKeysInput, SoftwareUncheckedUpdateWithoutLicenseKeysInput>
  }

  export type SoftwareUpdateWithoutLicenseKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: ActivationUpdateManyWithoutSoftwareNestedInput
    monthlyUsage?: MonthlyUsageUpdateManyWithoutSoftwareNestedInput
    vendor?: VendorUpdateOneRequiredWithoutSoftwareNestedInput
  }

  export type SoftwareUncheckedUpdateWithoutLicenseKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: StringFieldUpdateOperationsInput | string
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: ActivationUncheckedUpdateManyWithoutSoftwareNestedInput
    monthlyUsage?: MonthlyUsageUncheckedUpdateManyWithoutSoftwareNestedInput
  }

  export type VendorUpsertWithoutLicenseKeysInput = {
    update: XOR<VendorUpdateWithoutLicenseKeysInput, VendorUncheckedUpdateWithoutLicenseKeysInput>
    create: XOR<VendorCreateWithoutLicenseKeysInput, VendorUncheckedCreateWithoutLicenseKeysInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutLicenseKeysInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutLicenseKeysInput, VendorUncheckedUpdateWithoutLicenseKeysInput>
  }

  export type VendorUpdateWithoutLicenseKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    activations?: ActivationUpdateManyWithoutVendorNestedInput
    monthlyUsage?: MonthlyUsageUpdateManyWithoutVendorNestedInput
    software?: SoftwareUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutLicenseKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    activations?: ActivationUncheckedUpdateManyWithoutVendorNestedInput
    monthlyUsage?: MonthlyUsageUncheckedUpdateManyWithoutVendorNestedInput
    software?: SoftwareUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type EmployeeCreateWithoutPerformedActivationsInput = {
    id?: string
    supabaseUserId?: string | null
    companyName?: string | null
    name: string
    email: string
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedKeys?: LicenseKeyCreateNestedManyWithoutActivatedByInput
  }

  export type EmployeeUncheckedCreateWithoutPerformedActivationsInput = {
    id?: string
    supabaseUserId?: string | null
    companyName?: string | null
    name: string
    email: string
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedKeys?: LicenseKeyUncheckedCreateNestedManyWithoutActivatedByInput
  }

  export type EmployeeCreateOrConnectWithoutPerformedActivationsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPerformedActivationsInput, EmployeeUncheckedCreateWithoutPerformedActivationsInput>
  }

  export type LicenseKeyCreateWithoutActivationInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
    activatedBy?: EmployeeCreateNestedOneWithoutActivatedKeysInput
    software: SoftwareCreateNestedOneWithoutLicenseKeysInput
    vendor: VendorCreateNestedOneWithoutLicenseKeysInput
  }

  export type LicenseKeyUncheckedCreateWithoutActivationInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    vendorId: string
    softwareId: string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    activatedById?: string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
  }

  export type LicenseKeyCreateOrConnectWithoutActivationInput = {
    where: LicenseKeyWhereUniqueInput
    create: XOR<LicenseKeyCreateWithoutActivationInput, LicenseKeyUncheckedCreateWithoutActivationInput>
  }

  export type SoftwareCreateWithoutActivationsInput = {
    id?: string
    name: string
    description?: string | null
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    licenseKeys?: LicenseKeyCreateNestedManyWithoutSoftwareInput
    monthlyUsage?: MonthlyUsageCreateNestedManyWithoutSoftwareInput
    vendor: VendorCreateNestedOneWithoutSoftwareInput
  }

  export type SoftwareUncheckedCreateWithoutActivationsInput = {
    id?: string
    name: string
    description?: string | null
    vendorId: string
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    licenseKeys?: LicenseKeyUncheckedCreateNestedManyWithoutSoftwareInput
    monthlyUsage?: MonthlyUsageUncheckedCreateNestedManyWithoutSoftwareInput
  }

  export type SoftwareCreateOrConnectWithoutActivationsInput = {
    where: SoftwareWhereUniqueInput
    create: XOR<SoftwareCreateWithoutActivationsInput, SoftwareUncheckedCreateWithoutActivationsInput>
  }

  export type VendorCreateWithoutActivationsInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    licenseKeys?: LicenseKeyCreateNestedManyWithoutVendorInput
    monthlyUsage?: MonthlyUsageCreateNestedManyWithoutVendorInput
    software?: SoftwareCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutActivationsInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    licenseKeys?: LicenseKeyUncheckedCreateNestedManyWithoutVendorInput
    monthlyUsage?: MonthlyUsageUncheckedCreateNestedManyWithoutVendorInput
    software?: SoftwareUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutActivationsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutActivationsInput, VendorUncheckedCreateWithoutActivationsInput>
  }

  export type EmployeeUpsertWithoutPerformedActivationsInput = {
    update: XOR<EmployeeUpdateWithoutPerformedActivationsInput, EmployeeUncheckedUpdateWithoutPerformedActivationsInput>
    create: XOR<EmployeeCreateWithoutPerformedActivationsInput, EmployeeUncheckedCreateWithoutPerformedActivationsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPerformedActivationsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPerformedActivationsInput, EmployeeUncheckedUpdateWithoutPerformedActivationsInput>
  }

  export type EmployeeUpdateWithoutPerformedActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedKeys?: LicenseKeyUpdateManyWithoutActivatedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPerformedActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedKeys?: LicenseKeyUncheckedUpdateManyWithoutActivatedByNestedInput
  }

  export type LicenseKeyUpsertWithoutActivationInput = {
    update: XOR<LicenseKeyUpdateWithoutActivationInput, LicenseKeyUncheckedUpdateWithoutActivationInput>
    create: XOR<LicenseKeyCreateWithoutActivationInput, LicenseKeyUncheckedCreateWithoutActivationInput>
    where?: LicenseKeyWhereInput
  }

  export type LicenseKeyUpdateToOneWithWhereWithoutActivationInput = {
    where?: LicenseKeyWhereInput
    data: XOR<LicenseKeyUpdateWithoutActivationInput, LicenseKeyUncheckedUpdateWithoutActivationInput>
  }

  export type LicenseKeyUpdateWithoutActivationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    activatedBy?: EmployeeUpdateOneWithoutActivatedKeysNestedInput
    software?: SoftwareUpdateOneRequiredWithoutLicenseKeysNestedInput
    vendor?: VendorUpdateOneRequiredWithoutLicenseKeysNestedInput
  }

  export type LicenseKeyUncheckedUpdateWithoutActivationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    vendorId?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedById?: NullableStringFieldUpdateOperationsInput | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SoftwareUpsertWithoutActivationsInput = {
    update: XOR<SoftwareUpdateWithoutActivationsInput, SoftwareUncheckedUpdateWithoutActivationsInput>
    create: XOR<SoftwareCreateWithoutActivationsInput, SoftwareUncheckedCreateWithoutActivationsInput>
    where?: SoftwareWhereInput
  }

  export type SoftwareUpdateToOneWithWhereWithoutActivationsInput = {
    where?: SoftwareWhereInput
    data: XOR<SoftwareUpdateWithoutActivationsInput, SoftwareUncheckedUpdateWithoutActivationsInput>
  }

  export type SoftwareUpdateWithoutActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseKeys?: LicenseKeyUpdateManyWithoutSoftwareNestedInput
    monthlyUsage?: MonthlyUsageUpdateManyWithoutSoftwareNestedInput
    vendor?: VendorUpdateOneRequiredWithoutSoftwareNestedInput
  }

  export type SoftwareUncheckedUpdateWithoutActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: StringFieldUpdateOperationsInput | string
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseKeys?: LicenseKeyUncheckedUpdateManyWithoutSoftwareNestedInput
    monthlyUsage?: MonthlyUsageUncheckedUpdateManyWithoutSoftwareNestedInput
  }

  export type VendorUpsertWithoutActivationsInput = {
    update: XOR<VendorUpdateWithoutActivationsInput, VendorUncheckedUpdateWithoutActivationsInput>
    create: XOR<VendorCreateWithoutActivationsInput, VendorUncheckedCreateWithoutActivationsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutActivationsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutActivationsInput, VendorUncheckedUpdateWithoutActivationsInput>
  }

  export type VendorUpdateWithoutActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    licenseKeys?: LicenseKeyUpdateManyWithoutVendorNestedInput
    monthlyUsage?: MonthlyUsageUpdateManyWithoutVendorNestedInput
    software?: SoftwareUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    licenseKeys?: LicenseKeyUncheckedUpdateManyWithoutVendorNestedInput
    monthlyUsage?: MonthlyUsageUncheckedUpdateManyWithoutVendorNestedInput
    software?: SoftwareUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type SoftwareCreateWithoutMonthlyUsageInput = {
    id?: string
    name: string
    description?: string | null
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: ActivationCreateNestedManyWithoutSoftwareInput
    licenseKeys?: LicenseKeyCreateNestedManyWithoutSoftwareInput
    vendor: VendorCreateNestedOneWithoutSoftwareInput
  }

  export type SoftwareUncheckedCreateWithoutMonthlyUsageInput = {
    id?: string
    name: string
    description?: string | null
    vendorId: string
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: ActivationUncheckedCreateNestedManyWithoutSoftwareInput
    licenseKeys?: LicenseKeyUncheckedCreateNestedManyWithoutSoftwareInput
  }

  export type SoftwareCreateOrConnectWithoutMonthlyUsageInput = {
    where: SoftwareWhereUniqueInput
    create: XOR<SoftwareCreateWithoutMonthlyUsageInput, SoftwareUncheckedCreateWithoutMonthlyUsageInput>
  }

  export type VendorCreateWithoutMonthlyUsageInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    activations?: ActivationCreateNestedManyWithoutVendorInput
    licenseKeys?: LicenseKeyCreateNestedManyWithoutVendorInput
    software?: SoftwareCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutMonthlyUsageInput = {
    id?: string
    supabaseUserId?: string | null
    contactEmail?: string | null
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.EmployeeRole
    activations?: ActivationUncheckedCreateNestedManyWithoutVendorInput
    licenseKeys?: LicenseKeyUncheckedCreateNestedManyWithoutVendorInput
    software?: SoftwareUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutMonthlyUsageInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutMonthlyUsageInput, VendorUncheckedCreateWithoutMonthlyUsageInput>
  }

  export type SoftwareUpsertWithoutMonthlyUsageInput = {
    update: XOR<SoftwareUpdateWithoutMonthlyUsageInput, SoftwareUncheckedUpdateWithoutMonthlyUsageInput>
    create: XOR<SoftwareCreateWithoutMonthlyUsageInput, SoftwareUncheckedCreateWithoutMonthlyUsageInput>
    where?: SoftwareWhereInput
  }

  export type SoftwareUpdateToOneWithWhereWithoutMonthlyUsageInput = {
    where?: SoftwareWhereInput
    data: XOR<SoftwareUpdateWithoutMonthlyUsageInput, SoftwareUncheckedUpdateWithoutMonthlyUsageInput>
  }

  export type SoftwareUpdateWithoutMonthlyUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: ActivationUpdateManyWithoutSoftwareNestedInput
    licenseKeys?: LicenseKeyUpdateManyWithoutSoftwareNestedInput
    vendor?: VendorUpdateOneRequiredWithoutSoftwareNestedInput
  }

  export type SoftwareUncheckedUpdateWithoutMonthlyUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    vendorId?: StringFieldUpdateOperationsInput | string
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: ActivationUncheckedUpdateManyWithoutSoftwareNestedInput
    licenseKeys?: LicenseKeyUncheckedUpdateManyWithoutSoftwareNestedInput
  }

  export type VendorUpsertWithoutMonthlyUsageInput = {
    update: XOR<VendorUpdateWithoutMonthlyUsageInput, VendorUncheckedUpdateWithoutMonthlyUsageInput>
    create: XOR<VendorCreateWithoutMonthlyUsageInput, VendorUncheckedCreateWithoutMonthlyUsageInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutMonthlyUsageInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutMonthlyUsageInput, VendorUncheckedUpdateWithoutMonthlyUsageInput>
  }

  export type VendorUpdateWithoutMonthlyUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    activations?: ActivationUpdateManyWithoutVendorNestedInput
    licenseKeys?: LicenseKeyUpdateManyWithoutVendorNestedInput
    software?: SoftwareUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutMonthlyUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    activations?: ActivationUncheckedUpdateManyWithoutVendorNestedInput
    licenseKeys?: LicenseKeyUncheckedUpdateManyWithoutVendorNestedInput
    software?: SoftwareUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ActivationCreateManyVendorInput = {
    id?: string
    licenseKeyId: string
    activatedById: string
    softwareId: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
  }

  export type LicenseKeyCreateManyVendorInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    softwareId: string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    activatedById?: string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
  }

  export type MonthlyUsageCreateManyVendorInput = {
    id?: string
    softwareId: string
    month: Date | string
    usageCount: number
    totalOwed: number
    calculatedAt?: Date | string
  }

  export type SoftwareCreateManyVendorInput = {
    id?: string
    name: string
    description?: string | null
    pricingModel: $Enums.PricingModel
    pricePerUse?: number | null
    monthlyRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivationUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedBy?: EmployeeUpdateOneRequiredWithoutPerformedActivationsNestedInput
    licenseKey?: LicenseKeyUpdateOneRequiredWithoutActivationNestedInput
    software?: SoftwareUpdateOneRequiredWithoutActivationsNestedInput
  }

  export type ActivationUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKeyId?: StringFieldUpdateOperationsInput | string
    activatedById?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKeyId?: StringFieldUpdateOperationsInput | string
    activatedById?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseKeyUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    activation?: ActivationUpdateOneWithoutLicenseKeyNestedInput
    activatedBy?: EmployeeUpdateOneWithoutActivatedKeysNestedInput
    software?: SoftwareUpdateOneRequiredWithoutLicenseKeysNestedInput
  }

  export type LicenseKeyUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    softwareId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedById?: NullableStringFieldUpdateOperationsInput | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    activation?: ActivationUncheckedUpdateOneWithoutLicenseKeyNestedInput
  }

  export type LicenseKeyUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    softwareId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedById?: NullableStringFieldUpdateOperationsInput | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyUsageUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    software?: SoftwareUpdateOneRequiredWithoutMonthlyUsageNestedInput
  }

  export type MonthlyUsageUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyUsageUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoftwareUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: ActivationUpdateManyWithoutSoftwareNestedInput
    licenseKeys?: LicenseKeyUpdateManyWithoutSoftwareNestedInput
    monthlyUsage?: MonthlyUsageUpdateManyWithoutSoftwareNestedInput
  }

  export type SoftwareUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: ActivationUncheckedUpdateManyWithoutSoftwareNestedInput
    licenseKeys?: LicenseKeyUncheckedUpdateManyWithoutSoftwareNestedInput
    monthlyUsage?: MonthlyUsageUncheckedUpdateManyWithoutSoftwareNestedInput
  }

  export type SoftwareUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricePerUse?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationCreateManyActivatedByInput = {
    id?: string
    licenseKeyId: string
    softwareId: string
    vendorId: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
  }

  export type LicenseKeyCreateManyActivatedByInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    vendorId: string
    softwareId: string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
  }

  export type ActivationUpdateWithoutActivatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseKey?: LicenseKeyUpdateOneRequiredWithoutActivationNestedInput
    software?: SoftwareUpdateOneRequiredWithoutActivationsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutActivationsNestedInput
  }

  export type ActivationUncheckedUpdateWithoutActivatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKeyId?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationUncheckedUpdateManyWithoutActivatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKeyId?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseKeyUpdateWithoutActivatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    activation?: ActivationUpdateOneWithoutLicenseKeyNestedInput
    software?: SoftwareUpdateOneRequiredWithoutLicenseKeysNestedInput
    vendor?: VendorUpdateOneRequiredWithoutLicenseKeysNestedInput
  }

  export type LicenseKeyUncheckedUpdateWithoutActivatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    vendorId?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    activation?: ActivationUncheckedUpdateOneWithoutLicenseKeyNestedInput
  }

  export type LicenseKeyUncheckedUpdateManyWithoutActivatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    vendorId?: StringFieldUpdateOperationsInput | string
    softwareId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivationCreateManySoftwareInput = {
    id?: string
    licenseKeyId: string
    activatedById: string
    vendorId: string
    headsetSerialNumber?: string | null
    activatedAt?: Date | string
    createdAt?: Date | string
  }

  export type LicenseKeyCreateManySoftwareInput = {
    id?: string
    key: string
    status?: $Enums.LicenseStatus
    vendorId: string
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activatedAt?: Date | string | null
    activatedById?: string | null
    canceledAt?: Date | string | null
    canceledReason?: string | null
  }

  export type MonthlyUsageCreateManySoftwareInput = {
    id?: string
    vendorId: string
    month: Date | string
    usageCount: number
    totalOwed: number
    calculatedAt?: Date | string
  }

  export type ActivationUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedBy?: EmployeeUpdateOneRequiredWithoutPerformedActivationsNestedInput
    licenseKey?: LicenseKeyUpdateOneRequiredWithoutActivationNestedInput
    vendor?: VendorUpdateOneRequiredWithoutActivationsNestedInput
  }

  export type ActivationUncheckedUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKeyId?: StringFieldUpdateOperationsInput | string
    activatedById?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationUncheckedUpdateManyWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKeyId?: StringFieldUpdateOperationsInput | string
    activatedById?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    headsetSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseKeyUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    activation?: ActivationUpdateOneWithoutLicenseKeyNestedInput
    activatedBy?: EmployeeUpdateOneWithoutActivatedKeysNestedInput
    vendor?: VendorUpdateOneRequiredWithoutLicenseKeysNestedInput
  }

  export type LicenseKeyUncheckedUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    vendorId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedById?: NullableStringFieldUpdateOperationsInput | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
    activation?: ActivationUncheckedUpdateOneWithoutLicenseKeyNestedInput
  }

  export type LicenseKeyUncheckedUpdateManyWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    vendorId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activatedById?: NullableStringFieldUpdateOperationsInput | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyUsageUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutMonthlyUsageNestedInput
  }

  export type MonthlyUsageUncheckedUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyUsageUncheckedUpdateManyWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    usageCount?: IntFieldUpdateOperationsInput | number
    totalOwed?: FloatFieldUpdateOperationsInput | number
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}