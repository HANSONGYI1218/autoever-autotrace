
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model DrivingRecord
 * 
 */
export type DrivingRecord = $Result.DefaultSelection<Prisma.$DrivingRecordPayload>
/**
 * Model VehicleDriver
 * 
 */
export type VehicleDriver = $Result.DefaultSelection<Prisma.$VehicleDriverPayload>
/**
 * Model AnomalyEvent
 * 
 */
export type AnomalyEvent = $Result.DefaultSelection<Prisma.$AnomalyEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VehicleStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  MAINTENANCE: 'MAINTENANCE'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const EventSeverity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type EventSeverity = (typeof EventSeverity)[keyof typeof EventSeverity]

}

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type EventSeverity = $Enums.EventSeverity

export const EventSeverity: typeof $Enums.EventSeverity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Drivers
 * const drivers = await prisma.driver.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Drivers
   * const drivers = await prisma.driver.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drivingRecord`: Exposes CRUD operations for the **DrivingRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrivingRecords
    * const drivingRecords = await prisma.drivingRecord.findMany()
    * ```
    */
  get drivingRecord(): Prisma.DrivingRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleDriver`: Exposes CRUD operations for the **VehicleDriver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleDrivers
    * const vehicleDrivers = await prisma.vehicleDriver.findMany()
    * ```
    */
  get vehicleDriver(): Prisma.VehicleDriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anomalyEvent`: Exposes CRUD operations for the **AnomalyEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnomalyEvents
    * const anomalyEvents = await prisma.anomalyEvent.findMany()
    * ```
    */
  get anomalyEvent(): Prisma.AnomalyEventDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Driver: 'Driver',
    Vehicle: 'Vehicle',
    DrivingRecord: 'DrivingRecord',
    VehicleDriver: 'VehicleDriver',
    AnomalyEvent: 'AnomalyEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "driver" | "vehicle" | "drivingRecord" | "vehicleDriver" | "anomalyEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      DrivingRecord: {
        payload: Prisma.$DrivingRecordPayload<ExtArgs>
        fields: Prisma.DrivingRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrivingRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrivingRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingRecordPayload>
          }
          findFirst: {
            args: Prisma.DrivingRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrivingRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingRecordPayload>
          }
          findMany: {
            args: Prisma.DrivingRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingRecordPayload>[]
          }
          create: {
            args: Prisma.DrivingRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingRecordPayload>
          }
          createMany: {
            args: Prisma.DrivingRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DrivingRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingRecordPayload>
          }
          update: {
            args: Prisma.DrivingRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingRecordPayload>
          }
          deleteMany: {
            args: Prisma.DrivingRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrivingRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DrivingRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingRecordPayload>
          }
          aggregate: {
            args: Prisma.DrivingRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrivingRecord>
          }
          groupBy: {
            args: Prisma.DrivingRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrivingRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrivingRecordCountArgs<ExtArgs>
            result: $Utils.Optional<DrivingRecordCountAggregateOutputType> | number
          }
        }
      }
      VehicleDriver: {
        payload: Prisma.$VehicleDriverPayload<ExtArgs>
        fields: Prisma.VehicleDriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleDriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleDriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDriverPayload>
          }
          findFirst: {
            args: Prisma.VehicleDriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleDriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDriverPayload>
          }
          findMany: {
            args: Prisma.VehicleDriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDriverPayload>[]
          }
          create: {
            args: Prisma.VehicleDriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDriverPayload>
          }
          createMany: {
            args: Prisma.VehicleDriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleDriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDriverPayload>
          }
          update: {
            args: Prisma.VehicleDriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDriverPayload>
          }
          deleteMany: {
            args: Prisma.VehicleDriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleDriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleDriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDriverPayload>
          }
          aggregate: {
            args: Prisma.VehicleDriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleDriver>
          }
          groupBy: {
            args: Prisma.VehicleDriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleDriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleDriverCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleDriverCountAggregateOutputType> | number
          }
        }
      }
      AnomalyEvent: {
        payload: Prisma.$AnomalyEventPayload<ExtArgs>
        fields: Prisma.AnomalyEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnomalyEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnomalyEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          findFirst: {
            args: Prisma.AnomalyEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnomalyEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          findMany: {
            args: Prisma.AnomalyEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>[]
          }
          create: {
            args: Prisma.AnomalyEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          createMany: {
            args: Prisma.AnomalyEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnomalyEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          update: {
            args: Prisma.AnomalyEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          deleteMany: {
            args: Prisma.AnomalyEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnomalyEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnomalyEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          aggregate: {
            args: Prisma.AnomalyEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnomalyEvent>
          }
          groupBy: {
            args: Prisma.AnomalyEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnomalyEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnomalyEventCountArgs<ExtArgs>
            result: $Utils.Optional<AnomalyEventCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    driver?: DriverOmit
    vehicle?: VehicleOmit
    drivingRecord?: DrivingRecordOmit
    vehicleDriver?: VehicleDriverOmit
    anomalyEvent?: AnomalyEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    drivingRecords: number
    vehicleDrivers: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivingRecords?: boolean | DriverCountOutputTypeCountDrivingRecordsArgs
    vehicleDrivers?: boolean | DriverCountOutputTypeCountVehicleDriversArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountDrivingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrivingRecordWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountVehicleDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleDriverWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    drivingRecords: number
    vehicleDrivers: number
    anomalyEvents: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivingRecords?: boolean | VehicleCountOutputTypeCountDrivingRecordsArgs
    vehicleDrivers?: boolean | VehicleCountOutputTypeCountVehicleDriversArgs
    anomalyEvents?: boolean | VehicleCountOutputTypeCountAnomalyEventsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountDrivingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrivingRecordWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountVehicleDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleDriverWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountAnomalyEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyEventWhereInput
  }


  /**
   * Count Type DrivingRecordCountOutputType
   */

  export type DrivingRecordCountOutputType = {
    anomalyEvents: number
  }

  export type DrivingRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anomalyEvents?: boolean | DrivingRecordCountOutputTypeCountAnomalyEventsArgs
  }

  // Custom InputTypes
  /**
   * DrivingRecordCountOutputType without action
   */
  export type DrivingRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecordCountOutputType
     */
    select?: DrivingRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrivingRecordCountOutputType without action
   */
  export type DrivingRecordCountOutputTypeCountAnomalyEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    name: string | null
    licenseNo: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    name: string | null
    licenseNo: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    name: number
    licenseNo: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverMinAggregateInputType = {
    id?: true
    name?: true
    licenseNo?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    name?: true
    licenseNo?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    name?: true
    licenseNo?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    name: string
    licenseNo: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    licenseNo?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drivingRecords?: boolean | Driver$drivingRecordsArgs<ExtArgs>
    vehicleDrivers?: boolean | Driver$vehicleDriversArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>



  export type DriverSelectScalar = {
    id?: boolean
    name?: boolean
    licenseNo?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "licenseNo" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivingRecords?: boolean | Driver$drivingRecordsArgs<ExtArgs>
    vehicleDrivers?: boolean | Driver$vehicleDriversArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      drivingRecords: Prisma.$DrivingRecordPayload<ExtArgs>[]
      vehicleDrivers: Prisma.$VehicleDriverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      licenseNo: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
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
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drivingRecords<T extends Driver$drivingRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$drivingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicleDrivers<T extends Driver$vehicleDriversArgs<ExtArgs> = {}>(args?: Subset<T, Driver$vehicleDriversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'String'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly licenseNo: FieldRef<"Driver", 'String'>
    readonly phone: FieldRef<"Driver", 'String'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.drivingRecords
   */
  export type Driver$drivingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    where?: DrivingRecordWhereInput
    orderBy?: DrivingRecordOrderByWithRelationInput | DrivingRecordOrderByWithRelationInput[]
    cursor?: DrivingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrivingRecordScalarFieldEnum | DrivingRecordScalarFieldEnum[]
  }

  /**
   * Driver.vehicleDrivers
   */
  export type Driver$vehicleDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    where?: VehicleDriverWhereInput
    orderBy?: VehicleDriverOrderByWithRelationInput | VehicleDriverOrderByWithRelationInput[]
    cursor?: VehicleDriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleDriverScalarFieldEnum | VehicleDriverScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    vehicleNo: string | null
    manufacturer: string | null
    model: string | null
    year: number | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    vehicleNo: string | null
    manufacturer: string | null
    model: string | null
    year: number | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    vehicleNo: number
    manufacturer: number
    model: number
    year: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    vehicleNo?: true
    manufacturer?: true
    model?: true
    year?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    vehicleNo?: true
    manufacturer?: true
    model?: true
    year?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    vehicleNo?: true
    manufacturer?: true
    model?: true
    year?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    vehicleNo: string
    manufacturer: string | null
    model: string | null
    year: number | null
    status: $Enums.VehicleStatus | null
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleNo?: boolean
    manufacturer?: boolean
    model?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drivingRecords?: boolean | Vehicle$drivingRecordsArgs<ExtArgs>
    vehicleDrivers?: boolean | Vehicle$vehicleDriversArgs<ExtArgs>
    anomalyEvents?: boolean | Vehicle$anomalyEventsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>



  export type VehicleSelectScalar = {
    id?: boolean
    vehicleNo?: boolean
    manufacturer?: boolean
    model?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleNo" | "manufacturer" | "model" | "year" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivingRecords?: boolean | Vehicle$drivingRecordsArgs<ExtArgs>
    vehicleDrivers?: boolean | Vehicle$vehicleDriversArgs<ExtArgs>
    anomalyEvents?: boolean | Vehicle$anomalyEventsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      drivingRecords: Prisma.$DrivingRecordPayload<ExtArgs>[]
      vehicleDrivers: Prisma.$VehicleDriverPayload<ExtArgs>[]
      anomalyEvents: Prisma.$AnomalyEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleNo: string
      manufacturer: string | null
      model: string | null
      year: number | null
      status: $Enums.VehicleStatus | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drivingRecords<T extends Vehicle$drivingRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$drivingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicleDrivers<T extends Vehicle$vehicleDriversArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$vehicleDriversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anomalyEvents<T extends Vehicle$anomalyEventsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$anomalyEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly vehicleNo: FieldRef<"Vehicle", 'String'>
    readonly manufacturer: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly status: FieldRef<"Vehicle", 'VehicleStatus'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.drivingRecords
   */
  export type Vehicle$drivingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    where?: DrivingRecordWhereInput
    orderBy?: DrivingRecordOrderByWithRelationInput | DrivingRecordOrderByWithRelationInput[]
    cursor?: DrivingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrivingRecordScalarFieldEnum | DrivingRecordScalarFieldEnum[]
  }

  /**
   * Vehicle.vehicleDrivers
   */
  export type Vehicle$vehicleDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    where?: VehicleDriverWhereInput
    orderBy?: VehicleDriverOrderByWithRelationInput | VehicleDriverOrderByWithRelationInput[]
    cursor?: VehicleDriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleDriverScalarFieldEnum | VehicleDriverScalarFieldEnum[]
  }

  /**
   * Vehicle.anomalyEvents
   */
  export type Vehicle$anomalyEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    where?: AnomalyEventWhereInput
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    cursor?: AnomalyEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model DrivingRecord
   */

  export type AggregateDrivingRecord = {
    _count: DrivingRecordCountAggregateOutputType | null
    _avg: DrivingRecordAvgAggregateOutputType | null
    _sum: DrivingRecordSumAggregateOutputType | null
    _min: DrivingRecordMinAggregateOutputType | null
    _max: DrivingRecordMaxAggregateOutputType | null
  }

  export type DrivingRecordAvgAggregateOutputType = {
    distance: number | null
    duration: number | null
  }

  export type DrivingRecordSumAggregateOutputType = {
    distance: number | null
    duration: number | null
  }

  export type DrivingRecordMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    driverId: string | null
    startedAt: Date | null
    endedAt: Date | null
    distance: number | null
    duration: number | null
  }

  export type DrivingRecordMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    driverId: string | null
    startedAt: Date | null
    endedAt: Date | null
    distance: number | null
    duration: number | null
  }

  export type DrivingRecordCountAggregateOutputType = {
    id: number
    vehicleId: number
    driverId: number
    startedAt: number
    endedAt: number
    distance: number
    duration: number
    _all: number
  }


  export type DrivingRecordAvgAggregateInputType = {
    distance?: true
    duration?: true
  }

  export type DrivingRecordSumAggregateInputType = {
    distance?: true
    duration?: true
  }

  export type DrivingRecordMinAggregateInputType = {
    id?: true
    vehicleId?: true
    driverId?: true
    startedAt?: true
    endedAt?: true
    distance?: true
    duration?: true
  }

  export type DrivingRecordMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    driverId?: true
    startedAt?: true
    endedAt?: true
    distance?: true
    duration?: true
  }

  export type DrivingRecordCountAggregateInputType = {
    id?: true
    vehicleId?: true
    driverId?: true
    startedAt?: true
    endedAt?: true
    distance?: true
    duration?: true
    _all?: true
  }

  export type DrivingRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrivingRecord to aggregate.
     */
    where?: DrivingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrivingRecords to fetch.
     */
    orderBy?: DrivingRecordOrderByWithRelationInput | DrivingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrivingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrivingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrivingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrivingRecords
    **/
    _count?: true | DrivingRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrivingRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrivingRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrivingRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrivingRecordMaxAggregateInputType
  }

  export type GetDrivingRecordAggregateType<T extends DrivingRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDrivingRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrivingRecord[P]>
      : GetScalarType<T[P], AggregateDrivingRecord[P]>
  }




  export type DrivingRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrivingRecordWhereInput
    orderBy?: DrivingRecordOrderByWithAggregationInput | DrivingRecordOrderByWithAggregationInput[]
    by: DrivingRecordScalarFieldEnum[] | DrivingRecordScalarFieldEnum
    having?: DrivingRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrivingRecordCountAggregateInputType | true
    _avg?: DrivingRecordAvgAggregateInputType
    _sum?: DrivingRecordSumAggregateInputType
    _min?: DrivingRecordMinAggregateInputType
    _max?: DrivingRecordMaxAggregateInputType
  }

  export type DrivingRecordGroupByOutputType = {
    id: string
    vehicleId: string
    driverId: string | null
    startedAt: Date
    endedAt: Date | null
    distance: number | null
    duration: number | null
    _count: DrivingRecordCountAggregateOutputType | null
    _avg: DrivingRecordAvgAggregateOutputType | null
    _sum: DrivingRecordSumAggregateOutputType | null
    _min: DrivingRecordMinAggregateOutputType | null
    _max: DrivingRecordMaxAggregateOutputType | null
  }

  type GetDrivingRecordGroupByPayload<T extends DrivingRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrivingRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrivingRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrivingRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DrivingRecordGroupByOutputType[P]>
        }
      >
    >


  export type DrivingRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    driverId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    distance?: boolean
    duration?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DrivingRecord$driverArgs<ExtArgs>
    anomalyEvents?: boolean | DrivingRecord$anomalyEventsArgs<ExtArgs>
    _count?: boolean | DrivingRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivingRecord"]>



  export type DrivingRecordSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    driverId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    distance?: boolean
    duration?: boolean
  }

  export type DrivingRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "driverId" | "startedAt" | "endedAt" | "distance" | "duration", ExtArgs["result"]["drivingRecord"]>
  export type DrivingRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DrivingRecord$driverArgs<ExtArgs>
    anomalyEvents?: boolean | DrivingRecord$anomalyEventsArgs<ExtArgs>
    _count?: boolean | DrivingRecordCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DrivingRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrivingRecord"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs> | null
      anomalyEvents: Prisma.$AnomalyEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      driverId: string | null
      startedAt: Date
      endedAt: Date | null
      distance: number | null
      duration: number | null
    }, ExtArgs["result"]["drivingRecord"]>
    composites: {}
  }

  type DrivingRecordGetPayload<S extends boolean | null | undefined | DrivingRecordDefaultArgs> = $Result.GetResult<Prisma.$DrivingRecordPayload, S>

  type DrivingRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrivingRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrivingRecordCountAggregateInputType | true
    }

  export interface DrivingRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrivingRecord'], meta: { name: 'DrivingRecord' } }
    /**
     * Find zero or one DrivingRecord that matches the filter.
     * @param {DrivingRecordFindUniqueArgs} args - Arguments to find a DrivingRecord
     * @example
     * // Get one DrivingRecord
     * const drivingRecord = await prisma.drivingRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrivingRecordFindUniqueArgs>(args: SelectSubset<T, DrivingRecordFindUniqueArgs<ExtArgs>>): Prisma__DrivingRecordClient<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrivingRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrivingRecordFindUniqueOrThrowArgs} args - Arguments to find a DrivingRecord
     * @example
     * // Get one DrivingRecord
     * const drivingRecord = await prisma.drivingRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrivingRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, DrivingRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrivingRecordClient<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrivingRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingRecordFindFirstArgs} args - Arguments to find a DrivingRecord
     * @example
     * // Get one DrivingRecord
     * const drivingRecord = await prisma.drivingRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrivingRecordFindFirstArgs>(args?: SelectSubset<T, DrivingRecordFindFirstArgs<ExtArgs>>): Prisma__DrivingRecordClient<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrivingRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingRecordFindFirstOrThrowArgs} args - Arguments to find a DrivingRecord
     * @example
     * // Get one DrivingRecord
     * const drivingRecord = await prisma.drivingRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrivingRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, DrivingRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrivingRecordClient<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrivingRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrivingRecords
     * const drivingRecords = await prisma.drivingRecord.findMany()
     * 
     * // Get first 10 DrivingRecords
     * const drivingRecords = await prisma.drivingRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drivingRecordWithIdOnly = await prisma.drivingRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrivingRecordFindManyArgs>(args?: SelectSubset<T, DrivingRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrivingRecord.
     * @param {DrivingRecordCreateArgs} args - Arguments to create a DrivingRecord.
     * @example
     * // Create one DrivingRecord
     * const DrivingRecord = await prisma.drivingRecord.create({
     *   data: {
     *     // ... data to create a DrivingRecord
     *   }
     * })
     * 
     */
    create<T extends DrivingRecordCreateArgs>(args: SelectSubset<T, DrivingRecordCreateArgs<ExtArgs>>): Prisma__DrivingRecordClient<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrivingRecords.
     * @param {DrivingRecordCreateManyArgs} args - Arguments to create many DrivingRecords.
     * @example
     * // Create many DrivingRecords
     * const drivingRecord = await prisma.drivingRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrivingRecordCreateManyArgs>(args?: SelectSubset<T, DrivingRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DrivingRecord.
     * @param {DrivingRecordDeleteArgs} args - Arguments to delete one DrivingRecord.
     * @example
     * // Delete one DrivingRecord
     * const DrivingRecord = await prisma.drivingRecord.delete({
     *   where: {
     *     // ... filter to delete one DrivingRecord
     *   }
     * })
     * 
     */
    delete<T extends DrivingRecordDeleteArgs>(args: SelectSubset<T, DrivingRecordDeleteArgs<ExtArgs>>): Prisma__DrivingRecordClient<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrivingRecord.
     * @param {DrivingRecordUpdateArgs} args - Arguments to update one DrivingRecord.
     * @example
     * // Update one DrivingRecord
     * const drivingRecord = await prisma.drivingRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrivingRecordUpdateArgs>(args: SelectSubset<T, DrivingRecordUpdateArgs<ExtArgs>>): Prisma__DrivingRecordClient<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrivingRecords.
     * @param {DrivingRecordDeleteManyArgs} args - Arguments to filter DrivingRecords to delete.
     * @example
     * // Delete a few DrivingRecords
     * const { count } = await prisma.drivingRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrivingRecordDeleteManyArgs>(args?: SelectSubset<T, DrivingRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrivingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrivingRecords
     * const drivingRecord = await prisma.drivingRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrivingRecordUpdateManyArgs>(args: SelectSubset<T, DrivingRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DrivingRecord.
     * @param {DrivingRecordUpsertArgs} args - Arguments to update or create a DrivingRecord.
     * @example
     * // Update or create a DrivingRecord
     * const drivingRecord = await prisma.drivingRecord.upsert({
     *   create: {
     *     // ... data to create a DrivingRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrivingRecord we want to update
     *   }
     * })
     */
    upsert<T extends DrivingRecordUpsertArgs>(args: SelectSubset<T, DrivingRecordUpsertArgs<ExtArgs>>): Prisma__DrivingRecordClient<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrivingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingRecordCountArgs} args - Arguments to filter DrivingRecords to count.
     * @example
     * // Count the number of DrivingRecords
     * const count = await prisma.drivingRecord.count({
     *   where: {
     *     // ... the filter for the DrivingRecords we want to count
     *   }
     * })
    **/
    count<T extends DrivingRecordCountArgs>(
      args?: Subset<T, DrivingRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrivingRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrivingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrivingRecordAggregateArgs>(args: Subset<T, DrivingRecordAggregateArgs>): Prisma.PrismaPromise<GetDrivingRecordAggregateType<T>>

    /**
     * Group by DrivingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingRecordGroupByArgs} args - Group by arguments.
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
      T extends DrivingRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrivingRecordGroupByArgs['orderBy'] }
        : { orderBy?: DrivingRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrivingRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrivingRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrivingRecord model
   */
  readonly fields: DrivingRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrivingRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrivingRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DrivingRecord$driverArgs<ExtArgs> = {}>(args?: Subset<T, DrivingRecord$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    anomalyEvents<T extends DrivingRecord$anomalyEventsArgs<ExtArgs> = {}>(args?: Subset<T, DrivingRecord$anomalyEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DrivingRecord model
   */
  interface DrivingRecordFieldRefs {
    readonly id: FieldRef<"DrivingRecord", 'String'>
    readonly vehicleId: FieldRef<"DrivingRecord", 'String'>
    readonly driverId: FieldRef<"DrivingRecord", 'String'>
    readonly startedAt: FieldRef<"DrivingRecord", 'DateTime'>
    readonly endedAt: FieldRef<"DrivingRecord", 'DateTime'>
    readonly distance: FieldRef<"DrivingRecord", 'Float'>
    readonly duration: FieldRef<"DrivingRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DrivingRecord findUnique
   */
  export type DrivingRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    /**
     * Filter, which DrivingRecord to fetch.
     */
    where: DrivingRecordWhereUniqueInput
  }

  /**
   * DrivingRecord findUniqueOrThrow
   */
  export type DrivingRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    /**
     * Filter, which DrivingRecord to fetch.
     */
    where: DrivingRecordWhereUniqueInput
  }

  /**
   * DrivingRecord findFirst
   */
  export type DrivingRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    /**
     * Filter, which DrivingRecord to fetch.
     */
    where?: DrivingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrivingRecords to fetch.
     */
    orderBy?: DrivingRecordOrderByWithRelationInput | DrivingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrivingRecords.
     */
    cursor?: DrivingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrivingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrivingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrivingRecords.
     */
    distinct?: DrivingRecordScalarFieldEnum | DrivingRecordScalarFieldEnum[]
  }

  /**
   * DrivingRecord findFirstOrThrow
   */
  export type DrivingRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    /**
     * Filter, which DrivingRecord to fetch.
     */
    where?: DrivingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrivingRecords to fetch.
     */
    orderBy?: DrivingRecordOrderByWithRelationInput | DrivingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrivingRecords.
     */
    cursor?: DrivingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrivingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrivingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrivingRecords.
     */
    distinct?: DrivingRecordScalarFieldEnum | DrivingRecordScalarFieldEnum[]
  }

  /**
   * DrivingRecord findMany
   */
  export type DrivingRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    /**
     * Filter, which DrivingRecords to fetch.
     */
    where?: DrivingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrivingRecords to fetch.
     */
    orderBy?: DrivingRecordOrderByWithRelationInput | DrivingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrivingRecords.
     */
    cursor?: DrivingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrivingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrivingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrivingRecords.
     */
    distinct?: DrivingRecordScalarFieldEnum | DrivingRecordScalarFieldEnum[]
  }

  /**
   * DrivingRecord create
   */
  export type DrivingRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a DrivingRecord.
     */
    data: XOR<DrivingRecordCreateInput, DrivingRecordUncheckedCreateInput>
  }

  /**
   * DrivingRecord createMany
   */
  export type DrivingRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrivingRecords.
     */
    data: DrivingRecordCreateManyInput | DrivingRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrivingRecord update
   */
  export type DrivingRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a DrivingRecord.
     */
    data: XOR<DrivingRecordUpdateInput, DrivingRecordUncheckedUpdateInput>
    /**
     * Choose, which DrivingRecord to update.
     */
    where: DrivingRecordWhereUniqueInput
  }

  /**
   * DrivingRecord updateMany
   */
  export type DrivingRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrivingRecords.
     */
    data: XOR<DrivingRecordUpdateManyMutationInput, DrivingRecordUncheckedUpdateManyInput>
    /**
     * Filter which DrivingRecords to update
     */
    where?: DrivingRecordWhereInput
    /**
     * Limit how many DrivingRecords to update.
     */
    limit?: number
  }

  /**
   * DrivingRecord upsert
   */
  export type DrivingRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the DrivingRecord to update in case it exists.
     */
    where: DrivingRecordWhereUniqueInput
    /**
     * In case the DrivingRecord found by the `where` argument doesn't exist, create a new DrivingRecord with this data.
     */
    create: XOR<DrivingRecordCreateInput, DrivingRecordUncheckedCreateInput>
    /**
     * In case the DrivingRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrivingRecordUpdateInput, DrivingRecordUncheckedUpdateInput>
  }

  /**
   * DrivingRecord delete
   */
  export type DrivingRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    /**
     * Filter which DrivingRecord to delete.
     */
    where: DrivingRecordWhereUniqueInput
  }

  /**
   * DrivingRecord deleteMany
   */
  export type DrivingRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrivingRecords to delete
     */
    where?: DrivingRecordWhereInput
    /**
     * Limit how many DrivingRecords to delete.
     */
    limit?: number
  }

  /**
   * DrivingRecord.driver
   */
  export type DrivingRecord$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * DrivingRecord.anomalyEvents
   */
  export type DrivingRecord$anomalyEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    where?: AnomalyEventWhereInput
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    cursor?: AnomalyEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * DrivingRecord without action
   */
  export type DrivingRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
  }


  /**
   * Model VehicleDriver
   */

  export type AggregateVehicleDriver = {
    _count: VehicleDriverCountAggregateOutputType | null
    _min: VehicleDriverMinAggregateOutputType | null
    _max: VehicleDriverMaxAggregateOutputType | null
  }

  export type VehicleDriverMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    driverId: string | null
    assignedAt: Date | null
    unassignedAt: Date | null
  }

  export type VehicleDriverMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    driverId: string | null
    assignedAt: Date | null
    unassignedAt: Date | null
  }

  export type VehicleDriverCountAggregateOutputType = {
    id: number
    vehicleId: number
    driverId: number
    assignedAt: number
    unassignedAt: number
    _all: number
  }


  export type VehicleDriverMinAggregateInputType = {
    id?: true
    vehicleId?: true
    driverId?: true
    assignedAt?: true
    unassignedAt?: true
  }

  export type VehicleDriverMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    driverId?: true
    assignedAt?: true
    unassignedAt?: true
  }

  export type VehicleDriverCountAggregateInputType = {
    id?: true
    vehicleId?: true
    driverId?: true
    assignedAt?: true
    unassignedAt?: true
    _all?: true
  }

  export type VehicleDriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleDriver to aggregate.
     */
    where?: VehicleDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDrivers to fetch.
     */
    orderBy?: VehicleDriverOrderByWithRelationInput | VehicleDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleDrivers
    **/
    _count?: true | VehicleDriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleDriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleDriverMaxAggregateInputType
  }

  export type GetVehicleDriverAggregateType<T extends VehicleDriverAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleDriver[P]>
      : GetScalarType<T[P], AggregateVehicleDriver[P]>
  }




  export type VehicleDriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleDriverWhereInput
    orderBy?: VehicleDriverOrderByWithAggregationInput | VehicleDriverOrderByWithAggregationInput[]
    by: VehicleDriverScalarFieldEnum[] | VehicleDriverScalarFieldEnum
    having?: VehicleDriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleDriverCountAggregateInputType | true
    _min?: VehicleDriverMinAggregateInputType
    _max?: VehicleDriverMaxAggregateInputType
  }

  export type VehicleDriverGroupByOutputType = {
    id: string
    vehicleId: string
    driverId: string
    assignedAt: Date | null
    unassignedAt: Date | null
    _count: VehicleDriverCountAggregateOutputType | null
    _min: VehicleDriverMinAggregateOutputType | null
    _max: VehicleDriverMaxAggregateOutputType | null
  }

  type GetVehicleDriverGroupByPayload<T extends VehicleDriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleDriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleDriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleDriverGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleDriverGroupByOutputType[P]>
        }
      >
    >


  export type VehicleDriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    driverId?: boolean
    assignedAt?: boolean
    unassignedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleDriver"]>



  export type VehicleDriverSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    driverId?: boolean
    assignedAt?: boolean
    unassignedAt?: boolean
  }

  export type VehicleDriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "driverId" | "assignedAt" | "unassignedAt", ExtArgs["result"]["vehicleDriver"]>
  export type VehicleDriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $VehicleDriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleDriver"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      driverId: string
      assignedAt: Date | null
      unassignedAt: Date | null
    }, ExtArgs["result"]["vehicleDriver"]>
    composites: {}
  }

  type VehicleDriverGetPayload<S extends boolean | null | undefined | VehicleDriverDefaultArgs> = $Result.GetResult<Prisma.$VehicleDriverPayload, S>

  type VehicleDriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleDriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleDriverCountAggregateInputType | true
    }

  export interface VehicleDriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleDriver'], meta: { name: 'VehicleDriver' } }
    /**
     * Find zero or one VehicleDriver that matches the filter.
     * @param {VehicleDriverFindUniqueArgs} args - Arguments to find a VehicleDriver
     * @example
     * // Get one VehicleDriver
     * const vehicleDriver = await prisma.vehicleDriver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleDriverFindUniqueArgs>(args: SelectSubset<T, VehicleDriverFindUniqueArgs<ExtArgs>>): Prisma__VehicleDriverClient<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleDriver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleDriverFindUniqueOrThrowArgs} args - Arguments to find a VehicleDriver
     * @example
     * // Get one VehicleDriver
     * const vehicleDriver = await prisma.vehicleDriver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleDriverFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleDriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleDriverClient<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleDriver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDriverFindFirstArgs} args - Arguments to find a VehicleDriver
     * @example
     * // Get one VehicleDriver
     * const vehicleDriver = await prisma.vehicleDriver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleDriverFindFirstArgs>(args?: SelectSubset<T, VehicleDriverFindFirstArgs<ExtArgs>>): Prisma__VehicleDriverClient<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleDriver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDriverFindFirstOrThrowArgs} args - Arguments to find a VehicleDriver
     * @example
     * // Get one VehicleDriver
     * const vehicleDriver = await prisma.vehicleDriver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleDriverFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleDriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleDriverClient<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleDrivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleDrivers
     * const vehicleDrivers = await prisma.vehicleDriver.findMany()
     * 
     * // Get first 10 VehicleDrivers
     * const vehicleDrivers = await prisma.vehicleDriver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleDriverWithIdOnly = await prisma.vehicleDriver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleDriverFindManyArgs>(args?: SelectSubset<T, VehicleDriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleDriver.
     * @param {VehicleDriverCreateArgs} args - Arguments to create a VehicleDriver.
     * @example
     * // Create one VehicleDriver
     * const VehicleDriver = await prisma.vehicleDriver.create({
     *   data: {
     *     // ... data to create a VehicleDriver
     *   }
     * })
     * 
     */
    create<T extends VehicleDriverCreateArgs>(args: SelectSubset<T, VehicleDriverCreateArgs<ExtArgs>>): Prisma__VehicleDriverClient<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleDrivers.
     * @param {VehicleDriverCreateManyArgs} args - Arguments to create many VehicleDrivers.
     * @example
     * // Create many VehicleDrivers
     * const vehicleDriver = await prisma.vehicleDriver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleDriverCreateManyArgs>(args?: SelectSubset<T, VehicleDriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleDriver.
     * @param {VehicleDriverDeleteArgs} args - Arguments to delete one VehicleDriver.
     * @example
     * // Delete one VehicleDriver
     * const VehicleDriver = await prisma.vehicleDriver.delete({
     *   where: {
     *     // ... filter to delete one VehicleDriver
     *   }
     * })
     * 
     */
    delete<T extends VehicleDriverDeleteArgs>(args: SelectSubset<T, VehicleDriverDeleteArgs<ExtArgs>>): Prisma__VehicleDriverClient<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleDriver.
     * @param {VehicleDriverUpdateArgs} args - Arguments to update one VehicleDriver.
     * @example
     * // Update one VehicleDriver
     * const vehicleDriver = await prisma.vehicleDriver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleDriverUpdateArgs>(args: SelectSubset<T, VehicleDriverUpdateArgs<ExtArgs>>): Prisma__VehicleDriverClient<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleDrivers.
     * @param {VehicleDriverDeleteManyArgs} args - Arguments to filter VehicleDrivers to delete.
     * @example
     * // Delete a few VehicleDrivers
     * const { count } = await prisma.vehicleDriver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDriverDeleteManyArgs>(args?: SelectSubset<T, VehicleDriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleDrivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleDrivers
     * const vehicleDriver = await prisma.vehicleDriver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleDriverUpdateManyArgs>(args: SelectSubset<T, VehicleDriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleDriver.
     * @param {VehicleDriverUpsertArgs} args - Arguments to update or create a VehicleDriver.
     * @example
     * // Update or create a VehicleDriver
     * const vehicleDriver = await prisma.vehicleDriver.upsert({
     *   create: {
     *     // ... data to create a VehicleDriver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleDriver we want to update
     *   }
     * })
     */
    upsert<T extends VehicleDriverUpsertArgs>(args: SelectSubset<T, VehicleDriverUpsertArgs<ExtArgs>>): Prisma__VehicleDriverClient<$Result.GetResult<Prisma.$VehicleDriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleDrivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDriverCountArgs} args - Arguments to filter VehicleDrivers to count.
     * @example
     * // Count the number of VehicleDrivers
     * const count = await prisma.vehicleDriver.count({
     *   where: {
     *     // ... the filter for the VehicleDrivers we want to count
     *   }
     * })
    **/
    count<T extends VehicleDriverCountArgs>(
      args?: Subset<T, VehicleDriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleDriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleDriver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleDriverAggregateArgs>(args: Subset<T, VehicleDriverAggregateArgs>): Prisma.PrismaPromise<GetVehicleDriverAggregateType<T>>

    /**
     * Group by VehicleDriver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDriverGroupByArgs} args - Group by arguments.
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
      T extends VehicleDriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleDriverGroupByArgs['orderBy'] }
        : { orderBy?: VehicleDriverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleDriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleDriver model
   */
  readonly fields: VehicleDriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleDriver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleDriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VehicleDriver model
   */
  interface VehicleDriverFieldRefs {
    readonly id: FieldRef<"VehicleDriver", 'String'>
    readonly vehicleId: FieldRef<"VehicleDriver", 'String'>
    readonly driverId: FieldRef<"VehicleDriver", 'String'>
    readonly assignedAt: FieldRef<"VehicleDriver", 'DateTime'>
    readonly unassignedAt: FieldRef<"VehicleDriver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleDriver findUnique
   */
  export type VehicleDriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDriver to fetch.
     */
    where: VehicleDriverWhereUniqueInput
  }

  /**
   * VehicleDriver findUniqueOrThrow
   */
  export type VehicleDriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDriver to fetch.
     */
    where: VehicleDriverWhereUniqueInput
  }

  /**
   * VehicleDriver findFirst
   */
  export type VehicleDriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDriver to fetch.
     */
    where?: VehicleDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDrivers to fetch.
     */
    orderBy?: VehicleDriverOrderByWithRelationInput | VehicleDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleDrivers.
     */
    cursor?: VehicleDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleDrivers.
     */
    distinct?: VehicleDriverScalarFieldEnum | VehicleDriverScalarFieldEnum[]
  }

  /**
   * VehicleDriver findFirstOrThrow
   */
  export type VehicleDriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDriver to fetch.
     */
    where?: VehicleDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDrivers to fetch.
     */
    orderBy?: VehicleDriverOrderByWithRelationInput | VehicleDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleDrivers.
     */
    cursor?: VehicleDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleDrivers.
     */
    distinct?: VehicleDriverScalarFieldEnum | VehicleDriverScalarFieldEnum[]
  }

  /**
   * VehicleDriver findMany
   */
  export type VehicleDriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDrivers to fetch.
     */
    where?: VehicleDriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDrivers to fetch.
     */
    orderBy?: VehicleDriverOrderByWithRelationInput | VehicleDriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleDrivers.
     */
    cursor?: VehicleDriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDrivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDrivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleDrivers.
     */
    distinct?: VehicleDriverScalarFieldEnum | VehicleDriverScalarFieldEnum[]
  }

  /**
   * VehicleDriver create
   */
  export type VehicleDriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleDriver.
     */
    data: XOR<VehicleDriverCreateInput, VehicleDriverUncheckedCreateInput>
  }

  /**
   * VehicleDriver createMany
   */
  export type VehicleDriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleDrivers.
     */
    data: VehicleDriverCreateManyInput | VehicleDriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleDriver update
   */
  export type VehicleDriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleDriver.
     */
    data: XOR<VehicleDriverUpdateInput, VehicleDriverUncheckedUpdateInput>
    /**
     * Choose, which VehicleDriver to update.
     */
    where: VehicleDriverWhereUniqueInput
  }

  /**
   * VehicleDriver updateMany
   */
  export type VehicleDriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleDrivers.
     */
    data: XOR<VehicleDriverUpdateManyMutationInput, VehicleDriverUncheckedUpdateManyInput>
    /**
     * Filter which VehicleDrivers to update
     */
    where?: VehicleDriverWhereInput
    /**
     * Limit how many VehicleDrivers to update.
     */
    limit?: number
  }

  /**
   * VehicleDriver upsert
   */
  export type VehicleDriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleDriver to update in case it exists.
     */
    where: VehicleDriverWhereUniqueInput
    /**
     * In case the VehicleDriver found by the `where` argument doesn't exist, create a new VehicleDriver with this data.
     */
    create: XOR<VehicleDriverCreateInput, VehicleDriverUncheckedCreateInput>
    /**
     * In case the VehicleDriver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleDriverUpdateInput, VehicleDriverUncheckedUpdateInput>
  }

  /**
   * VehicleDriver delete
   */
  export type VehicleDriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
    /**
     * Filter which VehicleDriver to delete.
     */
    where: VehicleDriverWhereUniqueInput
  }

  /**
   * VehicleDriver deleteMany
   */
  export type VehicleDriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleDrivers to delete
     */
    where?: VehicleDriverWhereInput
    /**
     * Limit how many VehicleDrivers to delete.
     */
    limit?: number
  }

  /**
   * VehicleDriver without action
   */
  export type VehicleDriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDriver
     */
    select?: VehicleDriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDriver
     */
    omit?: VehicleDriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDriverInclude<ExtArgs> | null
  }


  /**
   * Model AnomalyEvent
   */

  export type AggregateAnomalyEvent = {
    _count: AnomalyEventCountAggregateOutputType | null
    _avg: AnomalyEventAvgAggregateOutputType | null
    _sum: AnomalyEventSumAggregateOutputType | null
    _min: AnomalyEventMinAggregateOutputType | null
    _max: AnomalyEventMaxAggregateOutputType | null
  }

  export type AnomalyEventAvgAggregateOutputType = {
    value: number | null
  }

  export type AnomalyEventSumAggregateOutputType = {
    value: number | null
  }

  export type AnomalyEventMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    drivingRecordId: string | null
    type: string | null
    severity: $Enums.EventSeverity | null
    occurredAt: Date | null
    description: string | null
    value: number | null
  }

  export type AnomalyEventMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    drivingRecordId: string | null
    type: string | null
    severity: $Enums.EventSeverity | null
    occurredAt: Date | null
    description: string | null
    value: number | null
  }

  export type AnomalyEventCountAggregateOutputType = {
    id: number
    vehicleId: number
    drivingRecordId: number
    type: number
    severity: number
    occurredAt: number
    description: number
    value: number
    _all: number
  }


  export type AnomalyEventAvgAggregateInputType = {
    value?: true
  }

  export type AnomalyEventSumAggregateInputType = {
    value?: true
  }

  export type AnomalyEventMinAggregateInputType = {
    id?: true
    vehicleId?: true
    drivingRecordId?: true
    type?: true
    severity?: true
    occurredAt?: true
    description?: true
    value?: true
  }

  export type AnomalyEventMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    drivingRecordId?: true
    type?: true
    severity?: true
    occurredAt?: true
    description?: true
    value?: true
  }

  export type AnomalyEventCountAggregateInputType = {
    id?: true
    vehicleId?: true
    drivingRecordId?: true
    type?: true
    severity?: true
    occurredAt?: true
    description?: true
    value?: true
    _all?: true
  }

  export type AnomalyEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyEvent to aggregate.
     */
    where?: AnomalyEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyEvents to fetch.
     */
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnomalyEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnomalyEvents
    **/
    _count?: true | AnomalyEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnomalyEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnomalyEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnomalyEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnomalyEventMaxAggregateInputType
  }

  export type GetAnomalyEventAggregateType<T extends AnomalyEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAnomalyEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnomalyEvent[P]>
      : GetScalarType<T[P], AggregateAnomalyEvent[P]>
  }




  export type AnomalyEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyEventWhereInput
    orderBy?: AnomalyEventOrderByWithAggregationInput | AnomalyEventOrderByWithAggregationInput[]
    by: AnomalyEventScalarFieldEnum[] | AnomalyEventScalarFieldEnum
    having?: AnomalyEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnomalyEventCountAggregateInputType | true
    _avg?: AnomalyEventAvgAggregateInputType
    _sum?: AnomalyEventSumAggregateInputType
    _min?: AnomalyEventMinAggregateInputType
    _max?: AnomalyEventMaxAggregateInputType
  }

  export type AnomalyEventGroupByOutputType = {
    id: string
    vehicleId: string
    drivingRecordId: string | null
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date
    description: string | null
    value: number | null
    _count: AnomalyEventCountAggregateOutputType | null
    _avg: AnomalyEventAvgAggregateOutputType | null
    _sum: AnomalyEventSumAggregateOutputType | null
    _min: AnomalyEventMinAggregateOutputType | null
    _max: AnomalyEventMaxAggregateOutputType | null
  }

  type GetAnomalyEventGroupByPayload<T extends AnomalyEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnomalyEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnomalyEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnomalyEventGroupByOutputType[P]>
            : GetScalarType<T[P], AnomalyEventGroupByOutputType[P]>
        }
      >
    >


  export type AnomalyEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    drivingRecordId?: boolean
    type?: boolean
    severity?: boolean
    occurredAt?: boolean
    description?: boolean
    value?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    drivingRecord?: boolean | AnomalyEvent$drivingRecordArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyEvent"]>



  export type AnomalyEventSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    drivingRecordId?: boolean
    type?: boolean
    severity?: boolean
    occurredAt?: boolean
    description?: boolean
    value?: boolean
  }

  export type AnomalyEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "drivingRecordId" | "type" | "severity" | "occurredAt" | "description" | "value", ExtArgs["result"]["anomalyEvent"]>
  export type AnomalyEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    drivingRecord?: boolean | AnomalyEvent$drivingRecordArgs<ExtArgs>
  }

  export type $AnomalyEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnomalyEvent"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      drivingRecord: Prisma.$DrivingRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      drivingRecordId: string | null
      type: string
      severity: $Enums.EventSeverity
      occurredAt: Date
      description: string | null
      value: number | null
    }, ExtArgs["result"]["anomalyEvent"]>
    composites: {}
  }

  type AnomalyEventGetPayload<S extends boolean | null | undefined | AnomalyEventDefaultArgs> = $Result.GetResult<Prisma.$AnomalyEventPayload, S>

  type AnomalyEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnomalyEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnomalyEventCountAggregateInputType | true
    }

  export interface AnomalyEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnomalyEvent'], meta: { name: 'AnomalyEvent' } }
    /**
     * Find zero or one AnomalyEvent that matches the filter.
     * @param {AnomalyEventFindUniqueArgs} args - Arguments to find a AnomalyEvent
     * @example
     * // Get one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnomalyEventFindUniqueArgs>(args: SelectSubset<T, AnomalyEventFindUniqueArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnomalyEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnomalyEventFindUniqueOrThrowArgs} args - Arguments to find a AnomalyEvent
     * @example
     * // Get one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnomalyEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AnomalyEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventFindFirstArgs} args - Arguments to find a AnomalyEvent
     * @example
     * // Get one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnomalyEventFindFirstArgs>(args?: SelectSubset<T, AnomalyEventFindFirstArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventFindFirstOrThrowArgs} args - Arguments to find a AnomalyEvent
     * @example
     * // Get one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnomalyEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AnomalyEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnomalyEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnomalyEvents
     * const anomalyEvents = await prisma.anomalyEvent.findMany()
     * 
     * // Get first 10 AnomalyEvents
     * const anomalyEvents = await prisma.anomalyEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anomalyEventWithIdOnly = await prisma.anomalyEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnomalyEventFindManyArgs>(args?: SelectSubset<T, AnomalyEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnomalyEvent.
     * @param {AnomalyEventCreateArgs} args - Arguments to create a AnomalyEvent.
     * @example
     * // Create one AnomalyEvent
     * const AnomalyEvent = await prisma.anomalyEvent.create({
     *   data: {
     *     // ... data to create a AnomalyEvent
     *   }
     * })
     * 
     */
    create<T extends AnomalyEventCreateArgs>(args: SelectSubset<T, AnomalyEventCreateArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnomalyEvents.
     * @param {AnomalyEventCreateManyArgs} args - Arguments to create many AnomalyEvents.
     * @example
     * // Create many AnomalyEvents
     * const anomalyEvent = await prisma.anomalyEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnomalyEventCreateManyArgs>(args?: SelectSubset<T, AnomalyEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AnomalyEvent.
     * @param {AnomalyEventDeleteArgs} args - Arguments to delete one AnomalyEvent.
     * @example
     * // Delete one AnomalyEvent
     * const AnomalyEvent = await prisma.anomalyEvent.delete({
     *   where: {
     *     // ... filter to delete one AnomalyEvent
     *   }
     * })
     * 
     */
    delete<T extends AnomalyEventDeleteArgs>(args: SelectSubset<T, AnomalyEventDeleteArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnomalyEvent.
     * @param {AnomalyEventUpdateArgs} args - Arguments to update one AnomalyEvent.
     * @example
     * // Update one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnomalyEventUpdateArgs>(args: SelectSubset<T, AnomalyEventUpdateArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnomalyEvents.
     * @param {AnomalyEventDeleteManyArgs} args - Arguments to filter AnomalyEvents to delete.
     * @example
     * // Delete a few AnomalyEvents
     * const { count } = await prisma.anomalyEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnomalyEventDeleteManyArgs>(args?: SelectSubset<T, AnomalyEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnomalyEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnomalyEvents
     * const anomalyEvent = await prisma.anomalyEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnomalyEventUpdateManyArgs>(args: SelectSubset<T, AnomalyEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnomalyEvent.
     * @param {AnomalyEventUpsertArgs} args - Arguments to update or create a AnomalyEvent.
     * @example
     * // Update or create a AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.upsert({
     *   create: {
     *     // ... data to create a AnomalyEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnomalyEvent we want to update
     *   }
     * })
     */
    upsert<T extends AnomalyEventUpsertArgs>(args: SelectSubset<T, AnomalyEventUpsertArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnomalyEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventCountArgs} args - Arguments to filter AnomalyEvents to count.
     * @example
     * // Count the number of AnomalyEvents
     * const count = await prisma.anomalyEvent.count({
     *   where: {
     *     // ... the filter for the AnomalyEvents we want to count
     *   }
     * })
    **/
    count<T extends AnomalyEventCountArgs>(
      args?: Subset<T, AnomalyEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnomalyEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnomalyEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnomalyEventAggregateArgs>(args: Subset<T, AnomalyEventAggregateArgs>): Prisma.PrismaPromise<GetAnomalyEventAggregateType<T>>

    /**
     * Group by AnomalyEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventGroupByArgs} args - Group by arguments.
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
      T extends AnomalyEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnomalyEventGroupByArgs['orderBy'] }
        : { orderBy?: AnomalyEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnomalyEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnomalyEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnomalyEvent model
   */
  readonly fields: AnomalyEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnomalyEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnomalyEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drivingRecord<T extends AnomalyEvent$drivingRecordArgs<ExtArgs> = {}>(args?: Subset<T, AnomalyEvent$drivingRecordArgs<ExtArgs>>): Prisma__DrivingRecordClient<$Result.GetResult<Prisma.$DrivingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnomalyEvent model
   */
  interface AnomalyEventFieldRefs {
    readonly id: FieldRef<"AnomalyEvent", 'String'>
    readonly vehicleId: FieldRef<"AnomalyEvent", 'String'>
    readonly drivingRecordId: FieldRef<"AnomalyEvent", 'String'>
    readonly type: FieldRef<"AnomalyEvent", 'String'>
    readonly severity: FieldRef<"AnomalyEvent", 'EventSeverity'>
    readonly occurredAt: FieldRef<"AnomalyEvent", 'DateTime'>
    readonly description: FieldRef<"AnomalyEvent", 'String'>
    readonly value: FieldRef<"AnomalyEvent", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * AnomalyEvent findUnique
   */
  export type AnomalyEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvent to fetch.
     */
    where: AnomalyEventWhereUniqueInput
  }

  /**
   * AnomalyEvent findUniqueOrThrow
   */
  export type AnomalyEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvent to fetch.
     */
    where: AnomalyEventWhereUniqueInput
  }

  /**
   * AnomalyEvent findFirst
   */
  export type AnomalyEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvent to fetch.
     */
    where?: AnomalyEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyEvents to fetch.
     */
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyEvents.
     */
    cursor?: AnomalyEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyEvents.
     */
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * AnomalyEvent findFirstOrThrow
   */
  export type AnomalyEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvent to fetch.
     */
    where?: AnomalyEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyEvents to fetch.
     */
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyEvents.
     */
    cursor?: AnomalyEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyEvents.
     */
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * AnomalyEvent findMany
   */
  export type AnomalyEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvents to fetch.
     */
    where?: AnomalyEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyEvents to fetch.
     */
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnomalyEvents.
     */
    cursor?: AnomalyEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyEvents.
     */
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * AnomalyEvent create
   */
  export type AnomalyEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AnomalyEvent.
     */
    data: XOR<AnomalyEventCreateInput, AnomalyEventUncheckedCreateInput>
  }

  /**
   * AnomalyEvent createMany
   */
  export type AnomalyEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnomalyEvents.
     */
    data: AnomalyEventCreateManyInput | AnomalyEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnomalyEvent update
   */
  export type AnomalyEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AnomalyEvent.
     */
    data: XOR<AnomalyEventUpdateInput, AnomalyEventUncheckedUpdateInput>
    /**
     * Choose, which AnomalyEvent to update.
     */
    where: AnomalyEventWhereUniqueInput
  }

  /**
   * AnomalyEvent updateMany
   */
  export type AnomalyEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnomalyEvents.
     */
    data: XOR<AnomalyEventUpdateManyMutationInput, AnomalyEventUncheckedUpdateManyInput>
    /**
     * Filter which AnomalyEvents to update
     */
    where?: AnomalyEventWhereInput
    /**
     * Limit how many AnomalyEvents to update.
     */
    limit?: number
  }

  /**
   * AnomalyEvent upsert
   */
  export type AnomalyEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AnomalyEvent to update in case it exists.
     */
    where: AnomalyEventWhereUniqueInput
    /**
     * In case the AnomalyEvent found by the `where` argument doesn't exist, create a new AnomalyEvent with this data.
     */
    create: XOR<AnomalyEventCreateInput, AnomalyEventUncheckedCreateInput>
    /**
     * In case the AnomalyEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnomalyEventUpdateInput, AnomalyEventUncheckedUpdateInput>
  }

  /**
   * AnomalyEvent delete
   */
  export type AnomalyEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter which AnomalyEvent to delete.
     */
    where: AnomalyEventWhereUniqueInput
  }

  /**
   * AnomalyEvent deleteMany
   */
  export type AnomalyEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyEvents to delete
     */
    where?: AnomalyEventWhereInput
    /**
     * Limit how many AnomalyEvents to delete.
     */
    limit?: number
  }

  /**
   * AnomalyEvent.drivingRecord
   */
  export type AnomalyEvent$drivingRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingRecord
     */
    select?: DrivingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingRecord
     */
    omit?: DrivingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingRecordInclude<ExtArgs> | null
    where?: DrivingRecordWhereInput
  }

  /**
   * AnomalyEvent without action
   */
  export type AnomalyEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
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


  export const DriverScalarFieldEnum: {
    id: 'id',
    name: 'name',
    licenseNo: 'licenseNo',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    vehicleNo: 'vehicleNo',
    manufacturer: 'manufacturer',
    model: 'model',
    year: 'year',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const DrivingRecordScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    driverId: 'driverId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    distance: 'distance',
    duration: 'duration'
  };

  export type DrivingRecordScalarFieldEnum = (typeof DrivingRecordScalarFieldEnum)[keyof typeof DrivingRecordScalarFieldEnum]


  export const VehicleDriverScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    driverId: 'driverId',
    assignedAt: 'assignedAt',
    unassignedAt: 'unassignedAt'
  };

  export type VehicleDriverScalarFieldEnum = (typeof VehicleDriverScalarFieldEnum)[keyof typeof VehicleDriverScalarFieldEnum]


  export const AnomalyEventScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    drivingRecordId: 'drivingRecordId',
    type: 'type',
    severity: 'severity',
    occurredAt: 'occurredAt',
    description: 'description',
    value: 'value'
  };

  export type AnomalyEventScalarFieldEnum = (typeof AnomalyEventScalarFieldEnum)[keyof typeof AnomalyEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DriverOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    licenseNo: 'licenseNo',
    phone: 'phone'
  };

  export type DriverOrderByRelevanceFieldEnum = (typeof DriverOrderByRelevanceFieldEnum)[keyof typeof DriverOrderByRelevanceFieldEnum]


  export const VehicleOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleNo: 'vehicleNo',
    manufacturer: 'manufacturer',
    model: 'model'
  };

  export type VehicleOrderByRelevanceFieldEnum = (typeof VehicleOrderByRelevanceFieldEnum)[keyof typeof VehicleOrderByRelevanceFieldEnum]


  export const DrivingRecordOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    driverId: 'driverId'
  };

  export type DrivingRecordOrderByRelevanceFieldEnum = (typeof DrivingRecordOrderByRelevanceFieldEnum)[keyof typeof DrivingRecordOrderByRelevanceFieldEnum]


  export const VehicleDriverOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    driverId: 'driverId'
  };

  export type VehicleDriverOrderByRelevanceFieldEnum = (typeof VehicleDriverOrderByRelevanceFieldEnum)[keyof typeof VehicleDriverOrderByRelevanceFieldEnum]


  export const AnomalyEventOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    drivingRecordId: 'drivingRecordId',
    type: 'type',
    description: 'description'
  };

  export type AnomalyEventOrderByRelevanceFieldEnum = (typeof AnomalyEventOrderByRelevanceFieldEnum)[keyof typeof AnomalyEventOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'EventSeverity'
   */
  export type EnumEventSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventSeverity'>
    
  /**
   * Deep Input Types
   */


  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: StringFilter<"Driver"> | string
    name?: StringFilter<"Driver"> | string
    licenseNo?: StringNullableFilter<"Driver"> | string | null
    phone?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    drivingRecords?: DrivingRecordListRelationFilter
    vehicleDrivers?: VehicleDriverListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drivingRecords?: DrivingRecordOrderByRelationAggregateInput
    vehicleDrivers?: VehicleDriverOrderByRelationAggregateInput
    _relevance?: DriverOrderByRelevanceInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseNo?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    name?: StringFilter<"Driver"> | string
    phone?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    drivingRecords?: DrivingRecordListRelationFilter
    vehicleDrivers?: VehicleDriverListRelationFilter
  }, "id" | "licenseNo">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Driver"> | string
    name?: StringWithAggregatesFilter<"Driver"> | string
    licenseNo?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    vehicleNo?: StringFilter<"Vehicle"> | string
    manufacturer?: StringNullableFilter<"Vehicle"> | string | null
    model?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntNullableFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusNullableFilter<"Vehicle"> | $Enums.VehicleStatus | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    drivingRecords?: DrivingRecordListRelationFilter
    vehicleDrivers?: VehicleDriverListRelationFilter
    anomalyEvents?: AnomalyEventListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    vehicleNo?: SortOrder
    manufacturer?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drivingRecords?: DrivingRecordOrderByRelationAggregateInput
    vehicleDrivers?: VehicleDriverOrderByRelationAggregateInput
    anomalyEvents?: AnomalyEventOrderByRelationAggregateInput
    _relevance?: VehicleOrderByRelevanceInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vehicleNo?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    manufacturer?: StringNullableFilter<"Vehicle"> | string | null
    model?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntNullableFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusNullableFilter<"Vehicle"> | $Enums.VehicleStatus | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    drivingRecords?: DrivingRecordListRelationFilter
    vehicleDrivers?: VehicleDriverListRelationFilter
    anomalyEvents?: AnomalyEventListRelationFilter
  }, "id" | "vehicleNo">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleNo?: SortOrder
    manufacturer?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleNo?: StringWithAggregatesFilter<"Vehicle"> | string
    manufacturer?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    model?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    year?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusNullableWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type DrivingRecordWhereInput = {
    AND?: DrivingRecordWhereInput | DrivingRecordWhereInput[]
    OR?: DrivingRecordWhereInput[]
    NOT?: DrivingRecordWhereInput | DrivingRecordWhereInput[]
    id?: StringFilter<"DrivingRecord"> | string
    vehicleId?: StringFilter<"DrivingRecord"> | string
    driverId?: StringNullableFilter<"DrivingRecord"> | string | null
    startedAt?: DateTimeFilter<"DrivingRecord"> | Date | string
    endedAt?: DateTimeNullableFilter<"DrivingRecord"> | Date | string | null
    distance?: FloatNullableFilter<"DrivingRecord"> | number | null
    duration?: IntNullableFilter<"DrivingRecord"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    anomalyEvents?: AnomalyEventListRelationFilter
  }

  export type DrivingRecordOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
    anomalyEvents?: AnomalyEventOrderByRelationAggregateInput
    _relevance?: DrivingRecordOrderByRelevanceInput
  }

  export type DrivingRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrivingRecordWhereInput | DrivingRecordWhereInput[]
    OR?: DrivingRecordWhereInput[]
    NOT?: DrivingRecordWhereInput | DrivingRecordWhereInput[]
    vehicleId?: StringFilter<"DrivingRecord"> | string
    driverId?: StringNullableFilter<"DrivingRecord"> | string | null
    startedAt?: DateTimeFilter<"DrivingRecord"> | Date | string
    endedAt?: DateTimeNullableFilter<"DrivingRecord"> | Date | string | null
    distance?: FloatNullableFilter<"DrivingRecord"> | number | null
    duration?: IntNullableFilter<"DrivingRecord"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    anomalyEvents?: AnomalyEventListRelationFilter
  }, "id">

  export type DrivingRecordOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    _count?: DrivingRecordCountOrderByAggregateInput
    _avg?: DrivingRecordAvgOrderByAggregateInput
    _max?: DrivingRecordMaxOrderByAggregateInput
    _min?: DrivingRecordMinOrderByAggregateInput
    _sum?: DrivingRecordSumOrderByAggregateInput
  }

  export type DrivingRecordScalarWhereWithAggregatesInput = {
    AND?: DrivingRecordScalarWhereWithAggregatesInput | DrivingRecordScalarWhereWithAggregatesInput[]
    OR?: DrivingRecordScalarWhereWithAggregatesInput[]
    NOT?: DrivingRecordScalarWhereWithAggregatesInput | DrivingRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DrivingRecord"> | string
    vehicleId?: StringWithAggregatesFilter<"DrivingRecord"> | string
    driverId?: StringNullableWithAggregatesFilter<"DrivingRecord"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"DrivingRecord"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"DrivingRecord"> | Date | string | null
    distance?: FloatNullableWithAggregatesFilter<"DrivingRecord"> | number | null
    duration?: IntNullableWithAggregatesFilter<"DrivingRecord"> | number | null
  }

  export type VehicleDriverWhereInput = {
    AND?: VehicleDriverWhereInput | VehicleDriverWhereInput[]
    OR?: VehicleDriverWhereInput[]
    NOT?: VehicleDriverWhereInput | VehicleDriverWhereInput[]
    id?: StringFilter<"VehicleDriver"> | string
    vehicleId?: StringFilter<"VehicleDriver"> | string
    driverId?: StringFilter<"VehicleDriver"> | string
    assignedAt?: DateTimeNullableFilter<"VehicleDriver"> | Date | string | null
    unassignedAt?: DateTimeNullableFilter<"VehicleDriver"> | Date | string | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type VehicleDriverOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    unassignedAt?: SortOrderInput | SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
    _relevance?: VehicleDriverOrderByRelevanceInput
  }

  export type VehicleDriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleDriverWhereInput | VehicleDriverWhereInput[]
    OR?: VehicleDriverWhereInput[]
    NOT?: VehicleDriverWhereInput | VehicleDriverWhereInput[]
    vehicleId?: StringFilter<"VehicleDriver"> | string
    driverId?: StringFilter<"VehicleDriver"> | string
    assignedAt?: DateTimeNullableFilter<"VehicleDriver"> | Date | string | null
    unassignedAt?: DateTimeNullableFilter<"VehicleDriver"> | Date | string | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type VehicleDriverOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    unassignedAt?: SortOrderInput | SortOrder
    _count?: VehicleDriverCountOrderByAggregateInput
    _max?: VehicleDriverMaxOrderByAggregateInput
    _min?: VehicleDriverMinOrderByAggregateInput
  }

  export type VehicleDriverScalarWhereWithAggregatesInput = {
    AND?: VehicleDriverScalarWhereWithAggregatesInput | VehicleDriverScalarWhereWithAggregatesInput[]
    OR?: VehicleDriverScalarWhereWithAggregatesInput[]
    NOT?: VehicleDriverScalarWhereWithAggregatesInput | VehicleDriverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleDriver"> | string
    vehicleId?: StringWithAggregatesFilter<"VehicleDriver"> | string
    driverId?: StringWithAggregatesFilter<"VehicleDriver"> | string
    assignedAt?: DateTimeNullableWithAggregatesFilter<"VehicleDriver"> | Date | string | null
    unassignedAt?: DateTimeNullableWithAggregatesFilter<"VehicleDriver"> | Date | string | null
  }

  export type AnomalyEventWhereInput = {
    AND?: AnomalyEventWhereInput | AnomalyEventWhereInput[]
    OR?: AnomalyEventWhereInput[]
    NOT?: AnomalyEventWhereInput | AnomalyEventWhereInput[]
    id?: StringFilter<"AnomalyEvent"> | string
    vehicleId?: StringFilter<"AnomalyEvent"> | string
    drivingRecordId?: StringNullableFilter<"AnomalyEvent"> | string | null
    type?: StringFilter<"AnomalyEvent"> | string
    severity?: EnumEventSeverityFilter<"AnomalyEvent"> | $Enums.EventSeverity
    occurredAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    description?: StringNullableFilter<"AnomalyEvent"> | string | null
    value?: FloatNullableFilter<"AnomalyEvent"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    drivingRecord?: XOR<DrivingRecordNullableScalarRelationFilter, DrivingRecordWhereInput> | null
  }

  export type AnomalyEventOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    drivingRecordId?: SortOrderInput | SortOrder
    type?: SortOrder
    severity?: SortOrder
    occurredAt?: SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    drivingRecord?: DrivingRecordOrderByWithRelationInput
    _relevance?: AnomalyEventOrderByRelevanceInput
  }

  export type AnomalyEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnomalyEventWhereInput | AnomalyEventWhereInput[]
    OR?: AnomalyEventWhereInput[]
    NOT?: AnomalyEventWhereInput | AnomalyEventWhereInput[]
    vehicleId?: StringFilter<"AnomalyEvent"> | string
    drivingRecordId?: StringNullableFilter<"AnomalyEvent"> | string | null
    type?: StringFilter<"AnomalyEvent"> | string
    severity?: EnumEventSeverityFilter<"AnomalyEvent"> | $Enums.EventSeverity
    occurredAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    description?: StringNullableFilter<"AnomalyEvent"> | string | null
    value?: FloatNullableFilter<"AnomalyEvent"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    drivingRecord?: XOR<DrivingRecordNullableScalarRelationFilter, DrivingRecordWhereInput> | null
  }, "id">

  export type AnomalyEventOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    drivingRecordId?: SortOrderInput | SortOrder
    type?: SortOrder
    severity?: SortOrder
    occurredAt?: SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    _count?: AnomalyEventCountOrderByAggregateInput
    _avg?: AnomalyEventAvgOrderByAggregateInput
    _max?: AnomalyEventMaxOrderByAggregateInput
    _min?: AnomalyEventMinOrderByAggregateInput
    _sum?: AnomalyEventSumOrderByAggregateInput
  }

  export type AnomalyEventScalarWhereWithAggregatesInput = {
    AND?: AnomalyEventScalarWhereWithAggregatesInput | AnomalyEventScalarWhereWithAggregatesInput[]
    OR?: AnomalyEventScalarWhereWithAggregatesInput[]
    NOT?: AnomalyEventScalarWhereWithAggregatesInput | AnomalyEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnomalyEvent"> | string
    vehicleId?: StringWithAggregatesFilter<"AnomalyEvent"> | string
    drivingRecordId?: StringNullableWithAggregatesFilter<"AnomalyEvent"> | string | null
    type?: StringWithAggregatesFilter<"AnomalyEvent"> | string
    severity?: EnumEventSeverityWithAggregatesFilter<"AnomalyEvent"> | $Enums.EventSeverity
    occurredAt?: DateTimeWithAggregatesFilter<"AnomalyEvent"> | Date | string
    description?: StringNullableWithAggregatesFilter<"AnomalyEvent"> | string | null
    value?: FloatNullableWithAggregatesFilter<"AnomalyEvent"> | number | null
  }

  export type DriverCreateInput = {
    id: string
    name: string
    licenseNo?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordCreateNestedManyWithoutDriverInput
    vehicleDrivers?: VehicleDriverCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id: string
    name: string
    licenseNo?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordUncheckedCreateNestedManyWithoutDriverInput
    vehicleDrivers?: VehicleDriverUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUpdateManyWithoutDriverNestedInput
    vehicleDrivers?: VehicleDriverUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUncheckedUpdateManyWithoutDriverNestedInput
    vehicleDrivers?: VehicleDriverUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id: string
    name: string
    licenseNo?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id: string
    vehicleNo: string
    manufacturer?: string | null
    model?: string | null
    year?: number | null
    status?: $Enums.VehicleStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordCreateNestedManyWithoutVehicleInput
    vehicleDrivers?: VehicleDriverCreateNestedManyWithoutVehicleInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id: string
    vehicleNo: string
    manufacturer?: string | null
    model?: string | null
    year?: number | null
    status?: $Enums.VehicleStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordUncheckedCreateNestedManyWithoutVehicleInput
    vehicleDrivers?: VehicleDriverUncheckedCreateNestedManyWithoutVehicleInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUpdateManyWithoutVehicleNestedInput
    vehicleDrivers?: VehicleDriverUpdateManyWithoutVehicleNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUncheckedUpdateManyWithoutVehicleNestedInput
    vehicleDrivers?: VehicleDriverUncheckedUpdateManyWithoutVehicleNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id: string
    vehicleNo: string
    manufacturer?: string | null
    model?: string | null
    year?: number | null
    status?: $Enums.VehicleStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrivingRecordCreateInput = {
    id: string
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
    vehicle: VehicleCreateNestedOneWithoutDrivingRecordsInput
    driver?: DriverCreateNestedOneWithoutDrivingRecordsInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutDrivingRecordInput
  }

  export type DrivingRecordUncheckedCreateInput = {
    id: string
    vehicleId: string
    driverId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutDrivingRecordInput
  }

  export type DrivingRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    vehicle?: VehicleUpdateOneRequiredWithoutDrivingRecordsNestedInput
    driver?: DriverUpdateOneWithoutDrivingRecordsNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutDrivingRecordNestedInput
  }

  export type DrivingRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutDrivingRecordNestedInput
  }

  export type DrivingRecordCreateManyInput = {
    id: string
    vehicleId: string
    driverId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
  }

  export type DrivingRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DrivingRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VehicleDriverCreateInput = {
    id: string
    assignedAt?: Date | string | null
    unassignedAt?: Date | string | null
    vehicle: VehicleCreateNestedOneWithoutVehicleDriversInput
    driver: DriverCreateNestedOneWithoutVehicleDriversInput
  }

  export type VehicleDriverUncheckedCreateInput = {
    id: string
    vehicleId: string
    driverId: string
    assignedAt?: Date | string | null
    unassignedAt?: Date | string | null
  }

  export type VehicleDriverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutVehicleDriversNestedInput
    driver?: DriverUpdateOneRequiredWithoutVehicleDriversNestedInput
  }

  export type VehicleDriverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleDriverCreateManyInput = {
    id: string
    vehicleId: string
    driverId: string
    assignedAt?: Date | string | null
    unassignedAt?: Date | string | null
  }

  export type VehicleDriverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleDriverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnomalyEventCreateInput = {
    id: string
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date | string
    description?: string | null
    value?: number | null
    vehicle: VehicleCreateNestedOneWithoutAnomalyEventsInput
    drivingRecord?: DrivingRecordCreateNestedOneWithoutAnomalyEventsInput
  }

  export type AnomalyEventUncheckedCreateInput = {
    id: string
    vehicleId: string
    drivingRecordId?: string | null
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date | string
    description?: string | null
    value?: number | null
  }

  export type AnomalyEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicle?: VehicleUpdateOneRequiredWithoutAnomalyEventsNestedInput
    drivingRecord?: DrivingRecordUpdateOneWithoutAnomalyEventsNestedInput
  }

  export type AnomalyEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    drivingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnomalyEventCreateManyInput = {
    id: string
    vehicleId: string
    drivingRecordId?: string | null
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date | string
    description?: string | null
    value?: number | null
  }

  export type AnomalyEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnomalyEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    drivingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DrivingRecordListRelationFilter = {
    every?: DrivingRecordWhereInput
    some?: DrivingRecordWhereInput
    none?: DrivingRecordWhereInput
  }

  export type VehicleDriverListRelationFilter = {
    every?: VehicleDriverWhereInput
    some?: VehicleDriverWhereInput
    none?: VehicleDriverWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DrivingRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleDriverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverOrderByRelevanceInput = {
    fields: DriverOrderByRelevanceFieldEnum | DriverOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNo?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNo?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNo?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumVehicleStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.VehicleStatus[] | null
    notIn?: $Enums.VehicleStatus[] | null
    not?: NestedEnumVehicleStatusNullableFilter<$PrismaModel> | $Enums.VehicleStatus | null
  }

  export type AnomalyEventListRelationFilter = {
    every?: AnomalyEventWhereInput
    some?: AnomalyEventWhereInput
    none?: AnomalyEventWhereInput
  }

  export type AnomalyEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleOrderByRelevanceInput = {
    fields: VehicleOrderByRelevanceFieldEnum | VehicleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleNo?: SortOrder
    manufacturer?: SortOrder
    model?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleNo?: SortOrder
    manufacturer?: SortOrder
    model?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleNo?: SortOrder
    manufacturer?: SortOrder
    model?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumVehicleStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.VehicleStatus[] | null
    notIn?: $Enums.VehicleStatus[] | null
    not?: NestedEnumVehicleStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type DrivingRecordOrderByRelevanceInput = {
    fields: DrivingRecordOrderByRelevanceFieldEnum | DrivingRecordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DrivingRecordCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
  }

  export type DrivingRecordAvgOrderByAggregateInput = {
    distance?: SortOrder
    duration?: SortOrder
  }

  export type DrivingRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
  }

  export type DrivingRecordMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
  }

  export type DrivingRecordSumOrderByAggregateInput = {
    distance?: SortOrder
    duration?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DriverScalarRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type VehicleDriverOrderByRelevanceInput = {
    fields: VehicleDriverOrderByRelevanceFieldEnum | VehicleDriverOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehicleDriverCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    assignedAt?: SortOrder
    unassignedAt?: SortOrder
  }

  export type VehicleDriverMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    assignedAt?: SortOrder
    unassignedAt?: SortOrder
  }

  export type VehicleDriverMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    assignedAt?: SortOrder
    unassignedAt?: SortOrder
  }

  export type EnumEventSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.EventSeverity | EnumEventSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.EventSeverity[]
    notIn?: $Enums.EventSeverity[]
    not?: NestedEnumEventSeverityFilter<$PrismaModel> | $Enums.EventSeverity
  }

  export type DrivingRecordNullableScalarRelationFilter = {
    is?: DrivingRecordWhereInput | null
    isNot?: DrivingRecordWhereInput | null
  }

  export type AnomalyEventOrderByRelevanceInput = {
    fields: AnomalyEventOrderByRelevanceFieldEnum | AnomalyEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnomalyEventCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    drivingRecordId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    occurredAt?: SortOrder
    description?: SortOrder
    value?: SortOrder
  }

  export type AnomalyEventAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type AnomalyEventMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    drivingRecordId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    occurredAt?: SortOrder
    description?: SortOrder
    value?: SortOrder
  }

  export type AnomalyEventMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    drivingRecordId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    occurredAt?: SortOrder
    description?: SortOrder
    value?: SortOrder
  }

  export type AnomalyEventSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumEventSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventSeverity | EnumEventSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.EventSeverity[]
    notIn?: $Enums.EventSeverity[]
    not?: NestedEnumEventSeverityWithAggregatesFilter<$PrismaModel> | $Enums.EventSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventSeverityFilter<$PrismaModel>
    _max?: NestedEnumEventSeverityFilter<$PrismaModel>
  }

  export type DrivingRecordCreateNestedManyWithoutDriverInput = {
    create?: XOR<DrivingRecordCreateWithoutDriverInput, DrivingRecordUncheckedCreateWithoutDriverInput> | DrivingRecordCreateWithoutDriverInput[] | DrivingRecordUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutDriverInput | DrivingRecordCreateOrConnectWithoutDriverInput[]
    createMany?: DrivingRecordCreateManyDriverInputEnvelope
    connect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
  }

  export type VehicleDriverCreateNestedManyWithoutDriverInput = {
    create?: XOR<VehicleDriverCreateWithoutDriverInput, VehicleDriverUncheckedCreateWithoutDriverInput> | VehicleDriverCreateWithoutDriverInput[] | VehicleDriverUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: VehicleDriverCreateOrConnectWithoutDriverInput | VehicleDriverCreateOrConnectWithoutDriverInput[]
    createMany?: VehicleDriverCreateManyDriverInputEnvelope
    connect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
  }

  export type DrivingRecordUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DrivingRecordCreateWithoutDriverInput, DrivingRecordUncheckedCreateWithoutDriverInput> | DrivingRecordCreateWithoutDriverInput[] | DrivingRecordUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutDriverInput | DrivingRecordCreateOrConnectWithoutDriverInput[]
    createMany?: DrivingRecordCreateManyDriverInputEnvelope
    connect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
  }

  export type VehicleDriverUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<VehicleDriverCreateWithoutDriverInput, VehicleDriverUncheckedCreateWithoutDriverInput> | VehicleDriverCreateWithoutDriverInput[] | VehicleDriverUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: VehicleDriverCreateOrConnectWithoutDriverInput | VehicleDriverCreateOrConnectWithoutDriverInput[]
    createMany?: VehicleDriverCreateManyDriverInputEnvelope
    connect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
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

  export type DrivingRecordUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DrivingRecordCreateWithoutDriverInput, DrivingRecordUncheckedCreateWithoutDriverInput> | DrivingRecordCreateWithoutDriverInput[] | DrivingRecordUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutDriverInput | DrivingRecordCreateOrConnectWithoutDriverInput[]
    upsert?: DrivingRecordUpsertWithWhereUniqueWithoutDriverInput | DrivingRecordUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DrivingRecordCreateManyDriverInputEnvelope
    set?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    disconnect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    delete?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    connect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    update?: DrivingRecordUpdateWithWhereUniqueWithoutDriverInput | DrivingRecordUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DrivingRecordUpdateManyWithWhereWithoutDriverInput | DrivingRecordUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DrivingRecordScalarWhereInput | DrivingRecordScalarWhereInput[]
  }

  export type VehicleDriverUpdateManyWithoutDriverNestedInput = {
    create?: XOR<VehicleDriverCreateWithoutDriverInput, VehicleDriverUncheckedCreateWithoutDriverInput> | VehicleDriverCreateWithoutDriverInput[] | VehicleDriverUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: VehicleDriverCreateOrConnectWithoutDriverInput | VehicleDriverCreateOrConnectWithoutDriverInput[]
    upsert?: VehicleDriverUpsertWithWhereUniqueWithoutDriverInput | VehicleDriverUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: VehicleDriverCreateManyDriverInputEnvelope
    set?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    disconnect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    delete?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    connect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    update?: VehicleDriverUpdateWithWhereUniqueWithoutDriverInput | VehicleDriverUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: VehicleDriverUpdateManyWithWhereWithoutDriverInput | VehicleDriverUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: VehicleDriverScalarWhereInput | VehicleDriverScalarWhereInput[]
  }

  export type DrivingRecordUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DrivingRecordCreateWithoutDriverInput, DrivingRecordUncheckedCreateWithoutDriverInput> | DrivingRecordCreateWithoutDriverInput[] | DrivingRecordUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutDriverInput | DrivingRecordCreateOrConnectWithoutDriverInput[]
    upsert?: DrivingRecordUpsertWithWhereUniqueWithoutDriverInput | DrivingRecordUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DrivingRecordCreateManyDriverInputEnvelope
    set?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    disconnect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    delete?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    connect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    update?: DrivingRecordUpdateWithWhereUniqueWithoutDriverInput | DrivingRecordUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DrivingRecordUpdateManyWithWhereWithoutDriverInput | DrivingRecordUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DrivingRecordScalarWhereInput | DrivingRecordScalarWhereInput[]
  }

  export type VehicleDriverUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<VehicleDriverCreateWithoutDriverInput, VehicleDriverUncheckedCreateWithoutDriverInput> | VehicleDriverCreateWithoutDriverInput[] | VehicleDriverUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: VehicleDriverCreateOrConnectWithoutDriverInput | VehicleDriverCreateOrConnectWithoutDriverInput[]
    upsert?: VehicleDriverUpsertWithWhereUniqueWithoutDriverInput | VehicleDriverUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: VehicleDriverCreateManyDriverInputEnvelope
    set?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    disconnect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    delete?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    connect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    update?: VehicleDriverUpdateWithWhereUniqueWithoutDriverInput | VehicleDriverUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: VehicleDriverUpdateManyWithWhereWithoutDriverInput | VehicleDriverUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: VehicleDriverScalarWhereInput | VehicleDriverScalarWhereInput[]
  }

  export type DrivingRecordCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DrivingRecordCreateWithoutVehicleInput, DrivingRecordUncheckedCreateWithoutVehicleInput> | DrivingRecordCreateWithoutVehicleInput[] | DrivingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutVehicleInput | DrivingRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: DrivingRecordCreateManyVehicleInputEnvelope
    connect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
  }

  export type VehicleDriverCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleDriverCreateWithoutVehicleInput, VehicleDriverUncheckedCreateWithoutVehicleInput> | VehicleDriverCreateWithoutVehicleInput[] | VehicleDriverUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDriverCreateOrConnectWithoutVehicleInput | VehicleDriverCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleDriverCreateManyVehicleInputEnvelope
    connect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
  }

  export type AnomalyEventCreateNestedManyWithoutVehicleInput = {
    create?: XOR<AnomalyEventCreateWithoutVehicleInput, AnomalyEventUncheckedCreateWithoutVehicleInput> | AnomalyEventCreateWithoutVehicleInput[] | AnomalyEventUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutVehicleInput | AnomalyEventCreateOrConnectWithoutVehicleInput[]
    createMany?: AnomalyEventCreateManyVehicleInputEnvelope
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
  }

  export type DrivingRecordUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DrivingRecordCreateWithoutVehicleInput, DrivingRecordUncheckedCreateWithoutVehicleInput> | DrivingRecordCreateWithoutVehicleInput[] | DrivingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutVehicleInput | DrivingRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: DrivingRecordCreateManyVehicleInputEnvelope
    connect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
  }

  export type VehicleDriverUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleDriverCreateWithoutVehicleInput, VehicleDriverUncheckedCreateWithoutVehicleInput> | VehicleDriverCreateWithoutVehicleInput[] | VehicleDriverUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDriverCreateOrConnectWithoutVehicleInput | VehicleDriverCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleDriverCreateManyVehicleInputEnvelope
    connect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
  }

  export type AnomalyEventUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<AnomalyEventCreateWithoutVehicleInput, AnomalyEventUncheckedCreateWithoutVehicleInput> | AnomalyEventCreateWithoutVehicleInput[] | AnomalyEventUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutVehicleInput | AnomalyEventCreateOrConnectWithoutVehicleInput[]
    createMany?: AnomalyEventCreateManyVehicleInputEnvelope
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus | null
  }

  export type DrivingRecordUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DrivingRecordCreateWithoutVehicleInput, DrivingRecordUncheckedCreateWithoutVehicleInput> | DrivingRecordCreateWithoutVehicleInput[] | DrivingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutVehicleInput | DrivingRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: DrivingRecordUpsertWithWhereUniqueWithoutVehicleInput | DrivingRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DrivingRecordCreateManyVehicleInputEnvelope
    set?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    disconnect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    delete?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    connect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    update?: DrivingRecordUpdateWithWhereUniqueWithoutVehicleInput | DrivingRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DrivingRecordUpdateManyWithWhereWithoutVehicleInput | DrivingRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DrivingRecordScalarWhereInput | DrivingRecordScalarWhereInput[]
  }

  export type VehicleDriverUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleDriverCreateWithoutVehicleInput, VehicleDriverUncheckedCreateWithoutVehicleInput> | VehicleDriverCreateWithoutVehicleInput[] | VehicleDriverUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDriverCreateOrConnectWithoutVehicleInput | VehicleDriverCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleDriverUpsertWithWhereUniqueWithoutVehicleInput | VehicleDriverUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleDriverCreateManyVehicleInputEnvelope
    set?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    disconnect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    delete?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    connect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    update?: VehicleDriverUpdateWithWhereUniqueWithoutVehicleInput | VehicleDriverUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleDriverUpdateManyWithWhereWithoutVehicleInput | VehicleDriverUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleDriverScalarWhereInput | VehicleDriverScalarWhereInput[]
  }

  export type AnomalyEventUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<AnomalyEventCreateWithoutVehicleInput, AnomalyEventUncheckedCreateWithoutVehicleInput> | AnomalyEventCreateWithoutVehicleInput[] | AnomalyEventUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutVehicleInput | AnomalyEventCreateOrConnectWithoutVehicleInput[]
    upsert?: AnomalyEventUpsertWithWhereUniqueWithoutVehicleInput | AnomalyEventUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: AnomalyEventCreateManyVehicleInputEnvelope
    set?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    disconnect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    delete?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    update?: AnomalyEventUpdateWithWhereUniqueWithoutVehicleInput | AnomalyEventUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: AnomalyEventUpdateManyWithWhereWithoutVehicleInput | AnomalyEventUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
  }

  export type DrivingRecordUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DrivingRecordCreateWithoutVehicleInput, DrivingRecordUncheckedCreateWithoutVehicleInput> | DrivingRecordCreateWithoutVehicleInput[] | DrivingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutVehicleInput | DrivingRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: DrivingRecordUpsertWithWhereUniqueWithoutVehicleInput | DrivingRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DrivingRecordCreateManyVehicleInputEnvelope
    set?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    disconnect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    delete?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    connect?: DrivingRecordWhereUniqueInput | DrivingRecordWhereUniqueInput[]
    update?: DrivingRecordUpdateWithWhereUniqueWithoutVehicleInput | DrivingRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DrivingRecordUpdateManyWithWhereWithoutVehicleInput | DrivingRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DrivingRecordScalarWhereInput | DrivingRecordScalarWhereInput[]
  }

  export type VehicleDriverUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleDriverCreateWithoutVehicleInput, VehicleDriverUncheckedCreateWithoutVehicleInput> | VehicleDriverCreateWithoutVehicleInput[] | VehicleDriverUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDriverCreateOrConnectWithoutVehicleInput | VehicleDriverCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleDriverUpsertWithWhereUniqueWithoutVehicleInput | VehicleDriverUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleDriverCreateManyVehicleInputEnvelope
    set?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    disconnect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    delete?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    connect?: VehicleDriverWhereUniqueInput | VehicleDriverWhereUniqueInput[]
    update?: VehicleDriverUpdateWithWhereUniqueWithoutVehicleInput | VehicleDriverUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleDriverUpdateManyWithWhereWithoutVehicleInput | VehicleDriverUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleDriverScalarWhereInput | VehicleDriverScalarWhereInput[]
  }

  export type AnomalyEventUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<AnomalyEventCreateWithoutVehicleInput, AnomalyEventUncheckedCreateWithoutVehicleInput> | AnomalyEventCreateWithoutVehicleInput[] | AnomalyEventUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutVehicleInput | AnomalyEventCreateOrConnectWithoutVehicleInput[]
    upsert?: AnomalyEventUpsertWithWhereUniqueWithoutVehicleInput | AnomalyEventUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: AnomalyEventCreateManyVehicleInputEnvelope
    set?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    disconnect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    delete?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    update?: AnomalyEventUpdateWithWhereUniqueWithoutVehicleInput | AnomalyEventUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: AnomalyEventUpdateManyWithWhereWithoutVehicleInput | AnomalyEventUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutDrivingRecordsInput = {
    create?: XOR<VehicleCreateWithoutDrivingRecordsInput, VehicleUncheckedCreateWithoutDrivingRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDrivingRecordsInput
    connect?: VehicleWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutDrivingRecordsInput = {
    create?: XOR<DriverCreateWithoutDrivingRecordsInput, DriverUncheckedCreateWithoutDrivingRecordsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDrivingRecordsInput
    connect?: DriverWhereUniqueInput
  }

  export type AnomalyEventCreateNestedManyWithoutDrivingRecordInput = {
    create?: XOR<AnomalyEventCreateWithoutDrivingRecordInput, AnomalyEventUncheckedCreateWithoutDrivingRecordInput> | AnomalyEventCreateWithoutDrivingRecordInput[] | AnomalyEventUncheckedCreateWithoutDrivingRecordInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutDrivingRecordInput | AnomalyEventCreateOrConnectWithoutDrivingRecordInput[]
    createMany?: AnomalyEventCreateManyDrivingRecordInputEnvelope
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
  }

  export type AnomalyEventUncheckedCreateNestedManyWithoutDrivingRecordInput = {
    create?: XOR<AnomalyEventCreateWithoutDrivingRecordInput, AnomalyEventUncheckedCreateWithoutDrivingRecordInput> | AnomalyEventCreateWithoutDrivingRecordInput[] | AnomalyEventUncheckedCreateWithoutDrivingRecordInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutDrivingRecordInput | AnomalyEventCreateOrConnectWithoutDrivingRecordInput[]
    createMany?: AnomalyEventCreateManyDrivingRecordInputEnvelope
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUpdateOneRequiredWithoutDrivingRecordsNestedInput = {
    create?: XOR<VehicleCreateWithoutDrivingRecordsInput, VehicleUncheckedCreateWithoutDrivingRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDrivingRecordsInput
    upsert?: VehicleUpsertWithoutDrivingRecordsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDrivingRecordsInput, VehicleUpdateWithoutDrivingRecordsInput>, VehicleUncheckedUpdateWithoutDrivingRecordsInput>
  }

  export type DriverUpdateOneWithoutDrivingRecordsNestedInput = {
    create?: XOR<DriverCreateWithoutDrivingRecordsInput, DriverUncheckedCreateWithoutDrivingRecordsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDrivingRecordsInput
    upsert?: DriverUpsertWithoutDrivingRecordsInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutDrivingRecordsInput, DriverUpdateWithoutDrivingRecordsInput>, DriverUncheckedUpdateWithoutDrivingRecordsInput>
  }

  export type AnomalyEventUpdateManyWithoutDrivingRecordNestedInput = {
    create?: XOR<AnomalyEventCreateWithoutDrivingRecordInput, AnomalyEventUncheckedCreateWithoutDrivingRecordInput> | AnomalyEventCreateWithoutDrivingRecordInput[] | AnomalyEventUncheckedCreateWithoutDrivingRecordInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutDrivingRecordInput | AnomalyEventCreateOrConnectWithoutDrivingRecordInput[]
    upsert?: AnomalyEventUpsertWithWhereUniqueWithoutDrivingRecordInput | AnomalyEventUpsertWithWhereUniqueWithoutDrivingRecordInput[]
    createMany?: AnomalyEventCreateManyDrivingRecordInputEnvelope
    set?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    disconnect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    delete?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    update?: AnomalyEventUpdateWithWhereUniqueWithoutDrivingRecordInput | AnomalyEventUpdateWithWhereUniqueWithoutDrivingRecordInput[]
    updateMany?: AnomalyEventUpdateManyWithWhereWithoutDrivingRecordInput | AnomalyEventUpdateManyWithWhereWithoutDrivingRecordInput[]
    deleteMany?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
  }

  export type AnomalyEventUncheckedUpdateManyWithoutDrivingRecordNestedInput = {
    create?: XOR<AnomalyEventCreateWithoutDrivingRecordInput, AnomalyEventUncheckedCreateWithoutDrivingRecordInput> | AnomalyEventCreateWithoutDrivingRecordInput[] | AnomalyEventUncheckedCreateWithoutDrivingRecordInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutDrivingRecordInput | AnomalyEventCreateOrConnectWithoutDrivingRecordInput[]
    upsert?: AnomalyEventUpsertWithWhereUniqueWithoutDrivingRecordInput | AnomalyEventUpsertWithWhereUniqueWithoutDrivingRecordInput[]
    createMany?: AnomalyEventCreateManyDrivingRecordInputEnvelope
    set?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    disconnect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    delete?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    update?: AnomalyEventUpdateWithWhereUniqueWithoutDrivingRecordInput | AnomalyEventUpdateWithWhereUniqueWithoutDrivingRecordInput[]
    updateMany?: AnomalyEventUpdateManyWithWhereWithoutDrivingRecordInput | AnomalyEventUpdateManyWithWhereWithoutDrivingRecordInput[]
    deleteMany?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutVehicleDriversInput = {
    create?: XOR<VehicleCreateWithoutVehicleDriversInput, VehicleUncheckedCreateWithoutVehicleDriversInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleDriversInput
    connect?: VehicleWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutVehicleDriversInput = {
    create?: XOR<DriverCreateWithoutVehicleDriversInput, DriverUncheckedCreateWithoutVehicleDriversInput>
    connectOrCreate?: DriverCreateOrConnectWithoutVehicleDriversInput
    connect?: DriverWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutVehicleDriversNestedInput = {
    create?: XOR<VehicleCreateWithoutVehicleDriversInput, VehicleUncheckedCreateWithoutVehicleDriversInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleDriversInput
    upsert?: VehicleUpsertWithoutVehicleDriversInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutVehicleDriversInput, VehicleUpdateWithoutVehicleDriversInput>, VehicleUncheckedUpdateWithoutVehicleDriversInput>
  }

  export type DriverUpdateOneRequiredWithoutVehicleDriversNestedInput = {
    create?: XOR<DriverCreateWithoutVehicleDriversInput, DriverUncheckedCreateWithoutVehicleDriversInput>
    connectOrCreate?: DriverCreateOrConnectWithoutVehicleDriversInput
    upsert?: DriverUpsertWithoutVehicleDriversInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutVehicleDriversInput, DriverUpdateWithoutVehicleDriversInput>, DriverUncheckedUpdateWithoutVehicleDriversInput>
  }

  export type VehicleCreateNestedOneWithoutAnomalyEventsInput = {
    create?: XOR<VehicleCreateWithoutAnomalyEventsInput, VehicleUncheckedCreateWithoutAnomalyEventsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAnomalyEventsInput
    connect?: VehicleWhereUniqueInput
  }

  export type DrivingRecordCreateNestedOneWithoutAnomalyEventsInput = {
    create?: XOR<DrivingRecordCreateWithoutAnomalyEventsInput, DrivingRecordUncheckedCreateWithoutAnomalyEventsInput>
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutAnomalyEventsInput
    connect?: DrivingRecordWhereUniqueInput
  }

  export type EnumEventSeverityFieldUpdateOperationsInput = {
    set?: $Enums.EventSeverity
  }

  export type VehicleUpdateOneRequiredWithoutAnomalyEventsNestedInput = {
    create?: XOR<VehicleCreateWithoutAnomalyEventsInput, VehicleUncheckedCreateWithoutAnomalyEventsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAnomalyEventsInput
    upsert?: VehicleUpsertWithoutAnomalyEventsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutAnomalyEventsInput, VehicleUpdateWithoutAnomalyEventsInput>, VehicleUncheckedUpdateWithoutAnomalyEventsInput>
  }

  export type DrivingRecordUpdateOneWithoutAnomalyEventsNestedInput = {
    create?: XOR<DrivingRecordCreateWithoutAnomalyEventsInput, DrivingRecordUncheckedCreateWithoutAnomalyEventsInput>
    connectOrCreate?: DrivingRecordCreateOrConnectWithoutAnomalyEventsInput
    upsert?: DrivingRecordUpsertWithoutAnomalyEventsInput
    disconnect?: DrivingRecordWhereInput | boolean
    delete?: DrivingRecordWhereInput | boolean
    connect?: DrivingRecordWhereUniqueInput
    update?: XOR<XOR<DrivingRecordUpdateToOneWithWhereWithoutAnomalyEventsInput, DrivingRecordUpdateWithoutAnomalyEventsInput>, DrivingRecordUncheckedUpdateWithoutAnomalyEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.VehicleStatus[] | null
    notIn?: $Enums.VehicleStatus[] | null
    not?: NestedEnumVehicleStatusNullableFilter<$PrismaModel> | $Enums.VehicleStatus | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVehicleStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.VehicleStatus[] | null
    notIn?: $Enums.VehicleStatus[] | null
    not?: NestedEnumVehicleStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedEnumEventSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.EventSeverity | EnumEventSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.EventSeverity[]
    notIn?: $Enums.EventSeverity[]
    not?: NestedEnumEventSeverityFilter<$PrismaModel> | $Enums.EventSeverity
  }

  export type NestedEnumEventSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventSeverity | EnumEventSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.EventSeverity[]
    notIn?: $Enums.EventSeverity[]
    not?: NestedEnumEventSeverityWithAggregatesFilter<$PrismaModel> | $Enums.EventSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventSeverityFilter<$PrismaModel>
    _max?: NestedEnumEventSeverityFilter<$PrismaModel>
  }

  export type DrivingRecordCreateWithoutDriverInput = {
    id: string
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
    vehicle: VehicleCreateNestedOneWithoutDrivingRecordsInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutDrivingRecordInput
  }

  export type DrivingRecordUncheckedCreateWithoutDriverInput = {
    id: string
    vehicleId: string
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutDrivingRecordInput
  }

  export type DrivingRecordCreateOrConnectWithoutDriverInput = {
    where: DrivingRecordWhereUniqueInput
    create: XOR<DrivingRecordCreateWithoutDriverInput, DrivingRecordUncheckedCreateWithoutDriverInput>
  }

  export type DrivingRecordCreateManyDriverInputEnvelope = {
    data: DrivingRecordCreateManyDriverInput | DrivingRecordCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type VehicleDriverCreateWithoutDriverInput = {
    id: string
    assignedAt?: Date | string | null
    unassignedAt?: Date | string | null
    vehicle: VehicleCreateNestedOneWithoutVehicleDriversInput
  }

  export type VehicleDriverUncheckedCreateWithoutDriverInput = {
    id: string
    vehicleId: string
    assignedAt?: Date | string | null
    unassignedAt?: Date | string | null
  }

  export type VehicleDriverCreateOrConnectWithoutDriverInput = {
    where: VehicleDriverWhereUniqueInput
    create: XOR<VehicleDriverCreateWithoutDriverInput, VehicleDriverUncheckedCreateWithoutDriverInput>
  }

  export type VehicleDriverCreateManyDriverInputEnvelope = {
    data: VehicleDriverCreateManyDriverInput | VehicleDriverCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type DrivingRecordUpsertWithWhereUniqueWithoutDriverInput = {
    where: DrivingRecordWhereUniqueInput
    update: XOR<DrivingRecordUpdateWithoutDriverInput, DrivingRecordUncheckedUpdateWithoutDriverInput>
    create: XOR<DrivingRecordCreateWithoutDriverInput, DrivingRecordUncheckedCreateWithoutDriverInput>
  }

  export type DrivingRecordUpdateWithWhereUniqueWithoutDriverInput = {
    where: DrivingRecordWhereUniqueInput
    data: XOR<DrivingRecordUpdateWithoutDriverInput, DrivingRecordUncheckedUpdateWithoutDriverInput>
  }

  export type DrivingRecordUpdateManyWithWhereWithoutDriverInput = {
    where: DrivingRecordScalarWhereInput
    data: XOR<DrivingRecordUpdateManyMutationInput, DrivingRecordUncheckedUpdateManyWithoutDriverInput>
  }

  export type DrivingRecordScalarWhereInput = {
    AND?: DrivingRecordScalarWhereInput | DrivingRecordScalarWhereInput[]
    OR?: DrivingRecordScalarWhereInput[]
    NOT?: DrivingRecordScalarWhereInput | DrivingRecordScalarWhereInput[]
    id?: StringFilter<"DrivingRecord"> | string
    vehicleId?: StringFilter<"DrivingRecord"> | string
    driverId?: StringNullableFilter<"DrivingRecord"> | string | null
    startedAt?: DateTimeFilter<"DrivingRecord"> | Date | string
    endedAt?: DateTimeNullableFilter<"DrivingRecord"> | Date | string | null
    distance?: FloatNullableFilter<"DrivingRecord"> | number | null
    duration?: IntNullableFilter<"DrivingRecord"> | number | null
  }

  export type VehicleDriverUpsertWithWhereUniqueWithoutDriverInput = {
    where: VehicleDriverWhereUniqueInput
    update: XOR<VehicleDriverUpdateWithoutDriverInput, VehicleDriverUncheckedUpdateWithoutDriverInput>
    create: XOR<VehicleDriverCreateWithoutDriverInput, VehicleDriverUncheckedCreateWithoutDriverInput>
  }

  export type VehicleDriverUpdateWithWhereUniqueWithoutDriverInput = {
    where: VehicleDriverWhereUniqueInput
    data: XOR<VehicleDriverUpdateWithoutDriverInput, VehicleDriverUncheckedUpdateWithoutDriverInput>
  }

  export type VehicleDriverUpdateManyWithWhereWithoutDriverInput = {
    where: VehicleDriverScalarWhereInput
    data: XOR<VehicleDriverUpdateManyMutationInput, VehicleDriverUncheckedUpdateManyWithoutDriverInput>
  }

  export type VehicleDriverScalarWhereInput = {
    AND?: VehicleDriverScalarWhereInput | VehicleDriverScalarWhereInput[]
    OR?: VehicleDriverScalarWhereInput[]
    NOT?: VehicleDriverScalarWhereInput | VehicleDriverScalarWhereInput[]
    id?: StringFilter<"VehicleDriver"> | string
    vehicleId?: StringFilter<"VehicleDriver"> | string
    driverId?: StringFilter<"VehicleDriver"> | string
    assignedAt?: DateTimeNullableFilter<"VehicleDriver"> | Date | string | null
    unassignedAt?: DateTimeNullableFilter<"VehicleDriver"> | Date | string | null
  }

  export type DrivingRecordCreateWithoutVehicleInput = {
    id: string
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
    driver?: DriverCreateNestedOneWithoutDrivingRecordsInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutDrivingRecordInput
  }

  export type DrivingRecordUncheckedCreateWithoutVehicleInput = {
    id: string
    driverId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutDrivingRecordInput
  }

  export type DrivingRecordCreateOrConnectWithoutVehicleInput = {
    where: DrivingRecordWhereUniqueInput
    create: XOR<DrivingRecordCreateWithoutVehicleInput, DrivingRecordUncheckedCreateWithoutVehicleInput>
  }

  export type DrivingRecordCreateManyVehicleInputEnvelope = {
    data: DrivingRecordCreateManyVehicleInput | DrivingRecordCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VehicleDriverCreateWithoutVehicleInput = {
    id: string
    assignedAt?: Date | string | null
    unassignedAt?: Date | string | null
    driver: DriverCreateNestedOneWithoutVehicleDriversInput
  }

  export type VehicleDriverUncheckedCreateWithoutVehicleInput = {
    id: string
    driverId: string
    assignedAt?: Date | string | null
    unassignedAt?: Date | string | null
  }

  export type VehicleDriverCreateOrConnectWithoutVehicleInput = {
    where: VehicleDriverWhereUniqueInput
    create: XOR<VehicleDriverCreateWithoutVehicleInput, VehicleDriverUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleDriverCreateManyVehicleInputEnvelope = {
    data: VehicleDriverCreateManyVehicleInput | VehicleDriverCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type AnomalyEventCreateWithoutVehicleInput = {
    id: string
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date | string
    description?: string | null
    value?: number | null
    drivingRecord?: DrivingRecordCreateNestedOneWithoutAnomalyEventsInput
  }

  export type AnomalyEventUncheckedCreateWithoutVehicleInput = {
    id: string
    drivingRecordId?: string | null
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date | string
    description?: string | null
    value?: number | null
  }

  export type AnomalyEventCreateOrConnectWithoutVehicleInput = {
    where: AnomalyEventWhereUniqueInput
    create: XOR<AnomalyEventCreateWithoutVehicleInput, AnomalyEventUncheckedCreateWithoutVehicleInput>
  }

  export type AnomalyEventCreateManyVehicleInputEnvelope = {
    data: AnomalyEventCreateManyVehicleInput | AnomalyEventCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type DrivingRecordUpsertWithWhereUniqueWithoutVehicleInput = {
    where: DrivingRecordWhereUniqueInput
    update: XOR<DrivingRecordUpdateWithoutVehicleInput, DrivingRecordUncheckedUpdateWithoutVehicleInput>
    create: XOR<DrivingRecordCreateWithoutVehicleInput, DrivingRecordUncheckedCreateWithoutVehicleInput>
  }

  export type DrivingRecordUpdateWithWhereUniqueWithoutVehicleInput = {
    where: DrivingRecordWhereUniqueInput
    data: XOR<DrivingRecordUpdateWithoutVehicleInput, DrivingRecordUncheckedUpdateWithoutVehicleInput>
  }

  export type DrivingRecordUpdateManyWithWhereWithoutVehicleInput = {
    where: DrivingRecordScalarWhereInput
    data: XOR<DrivingRecordUpdateManyMutationInput, DrivingRecordUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleDriverUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleDriverWhereUniqueInput
    update: XOR<VehicleDriverUpdateWithoutVehicleInput, VehicleDriverUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleDriverCreateWithoutVehicleInput, VehicleDriverUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleDriverUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleDriverWhereUniqueInput
    data: XOR<VehicleDriverUpdateWithoutVehicleInput, VehicleDriverUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleDriverUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleDriverScalarWhereInput
    data: XOR<VehicleDriverUpdateManyMutationInput, VehicleDriverUncheckedUpdateManyWithoutVehicleInput>
  }

  export type AnomalyEventUpsertWithWhereUniqueWithoutVehicleInput = {
    where: AnomalyEventWhereUniqueInput
    update: XOR<AnomalyEventUpdateWithoutVehicleInput, AnomalyEventUncheckedUpdateWithoutVehicleInput>
    create: XOR<AnomalyEventCreateWithoutVehicleInput, AnomalyEventUncheckedCreateWithoutVehicleInput>
  }

  export type AnomalyEventUpdateWithWhereUniqueWithoutVehicleInput = {
    where: AnomalyEventWhereUniqueInput
    data: XOR<AnomalyEventUpdateWithoutVehicleInput, AnomalyEventUncheckedUpdateWithoutVehicleInput>
  }

  export type AnomalyEventUpdateManyWithWhereWithoutVehicleInput = {
    where: AnomalyEventScalarWhereInput
    data: XOR<AnomalyEventUpdateManyMutationInput, AnomalyEventUncheckedUpdateManyWithoutVehicleInput>
  }

  export type AnomalyEventScalarWhereInput = {
    AND?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
    OR?: AnomalyEventScalarWhereInput[]
    NOT?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
    id?: StringFilter<"AnomalyEvent"> | string
    vehicleId?: StringFilter<"AnomalyEvent"> | string
    drivingRecordId?: StringNullableFilter<"AnomalyEvent"> | string | null
    type?: StringFilter<"AnomalyEvent"> | string
    severity?: EnumEventSeverityFilter<"AnomalyEvent"> | $Enums.EventSeverity
    occurredAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    description?: StringNullableFilter<"AnomalyEvent"> | string | null
    value?: FloatNullableFilter<"AnomalyEvent"> | number | null
  }

  export type VehicleCreateWithoutDrivingRecordsInput = {
    id: string
    vehicleNo: string
    manufacturer?: string | null
    model?: string | null
    year?: number | null
    status?: $Enums.VehicleStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleDrivers?: VehicleDriverCreateNestedManyWithoutVehicleInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutDrivingRecordsInput = {
    id: string
    vehicleNo: string
    manufacturer?: string | null
    model?: string | null
    year?: number | null
    status?: $Enums.VehicleStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleDrivers?: VehicleDriverUncheckedCreateNestedManyWithoutVehicleInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutDrivingRecordsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDrivingRecordsInput, VehicleUncheckedCreateWithoutDrivingRecordsInput>
  }

  export type DriverCreateWithoutDrivingRecordsInput = {
    id: string
    name: string
    licenseNo?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleDrivers?: VehicleDriverCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutDrivingRecordsInput = {
    id: string
    name: string
    licenseNo?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleDrivers?: VehicleDriverUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutDrivingRecordsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutDrivingRecordsInput, DriverUncheckedCreateWithoutDrivingRecordsInput>
  }

  export type AnomalyEventCreateWithoutDrivingRecordInput = {
    id: string
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date | string
    description?: string | null
    value?: number | null
    vehicle: VehicleCreateNestedOneWithoutAnomalyEventsInput
  }

  export type AnomalyEventUncheckedCreateWithoutDrivingRecordInput = {
    id: string
    vehicleId: string
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date | string
    description?: string | null
    value?: number | null
  }

  export type AnomalyEventCreateOrConnectWithoutDrivingRecordInput = {
    where: AnomalyEventWhereUniqueInput
    create: XOR<AnomalyEventCreateWithoutDrivingRecordInput, AnomalyEventUncheckedCreateWithoutDrivingRecordInput>
  }

  export type AnomalyEventCreateManyDrivingRecordInputEnvelope = {
    data: AnomalyEventCreateManyDrivingRecordInput | AnomalyEventCreateManyDrivingRecordInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutDrivingRecordsInput = {
    update: XOR<VehicleUpdateWithoutDrivingRecordsInput, VehicleUncheckedUpdateWithoutDrivingRecordsInput>
    create: XOR<VehicleCreateWithoutDrivingRecordsInput, VehicleUncheckedCreateWithoutDrivingRecordsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutDrivingRecordsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutDrivingRecordsInput, VehicleUncheckedUpdateWithoutDrivingRecordsInput>
  }

  export type VehicleUpdateWithoutDrivingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleDrivers?: VehicleDriverUpdateManyWithoutVehicleNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutDrivingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleDrivers?: VehicleDriverUncheckedUpdateManyWithoutVehicleNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DriverUpsertWithoutDrivingRecordsInput = {
    update: XOR<DriverUpdateWithoutDrivingRecordsInput, DriverUncheckedUpdateWithoutDrivingRecordsInput>
    create: XOR<DriverCreateWithoutDrivingRecordsInput, DriverUncheckedCreateWithoutDrivingRecordsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutDrivingRecordsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutDrivingRecordsInput, DriverUncheckedUpdateWithoutDrivingRecordsInput>
  }

  export type DriverUpdateWithoutDrivingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleDrivers?: VehicleDriverUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutDrivingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleDrivers?: VehicleDriverUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type AnomalyEventUpsertWithWhereUniqueWithoutDrivingRecordInput = {
    where: AnomalyEventWhereUniqueInput
    update: XOR<AnomalyEventUpdateWithoutDrivingRecordInput, AnomalyEventUncheckedUpdateWithoutDrivingRecordInput>
    create: XOR<AnomalyEventCreateWithoutDrivingRecordInput, AnomalyEventUncheckedCreateWithoutDrivingRecordInput>
  }

  export type AnomalyEventUpdateWithWhereUniqueWithoutDrivingRecordInput = {
    where: AnomalyEventWhereUniqueInput
    data: XOR<AnomalyEventUpdateWithoutDrivingRecordInput, AnomalyEventUncheckedUpdateWithoutDrivingRecordInput>
  }

  export type AnomalyEventUpdateManyWithWhereWithoutDrivingRecordInput = {
    where: AnomalyEventScalarWhereInput
    data: XOR<AnomalyEventUpdateManyMutationInput, AnomalyEventUncheckedUpdateManyWithoutDrivingRecordInput>
  }

  export type VehicleCreateWithoutVehicleDriversInput = {
    id: string
    vehicleNo: string
    manufacturer?: string | null
    model?: string | null
    year?: number | null
    status?: $Enums.VehicleStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordCreateNestedManyWithoutVehicleInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutVehicleDriversInput = {
    id: string
    vehicleNo: string
    manufacturer?: string | null
    model?: string | null
    year?: number | null
    status?: $Enums.VehicleStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordUncheckedCreateNestedManyWithoutVehicleInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutVehicleDriversInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutVehicleDriversInput, VehicleUncheckedCreateWithoutVehicleDriversInput>
  }

  export type DriverCreateWithoutVehicleDriversInput = {
    id: string
    name: string
    licenseNo?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutVehicleDriversInput = {
    id: string
    name: string
    licenseNo?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutVehicleDriversInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutVehicleDriversInput, DriverUncheckedCreateWithoutVehicleDriversInput>
  }

  export type VehicleUpsertWithoutVehicleDriversInput = {
    update: XOR<VehicleUpdateWithoutVehicleDriversInput, VehicleUncheckedUpdateWithoutVehicleDriversInput>
    create: XOR<VehicleCreateWithoutVehicleDriversInput, VehicleUncheckedCreateWithoutVehicleDriversInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutVehicleDriversInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutVehicleDriversInput, VehicleUncheckedUpdateWithoutVehicleDriversInput>
  }

  export type VehicleUpdateWithoutVehicleDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUpdateManyWithoutVehicleNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutVehicleDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUncheckedUpdateManyWithoutVehicleNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DriverUpsertWithoutVehicleDriversInput = {
    update: XOR<DriverUpdateWithoutVehicleDriversInput, DriverUncheckedUpdateWithoutVehicleDriversInput>
    create: XOR<DriverCreateWithoutVehicleDriversInput, DriverUncheckedCreateWithoutVehicleDriversInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutVehicleDriversInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutVehicleDriversInput, DriverUncheckedUpdateWithoutVehicleDriversInput>
  }

  export type DriverUpdateWithoutVehicleDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutVehicleDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type VehicleCreateWithoutAnomalyEventsInput = {
    id: string
    vehicleNo: string
    manufacturer?: string | null
    model?: string | null
    year?: number | null
    status?: $Enums.VehicleStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordCreateNestedManyWithoutVehicleInput
    vehicleDrivers?: VehicleDriverCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutAnomalyEventsInput = {
    id: string
    vehicleNo: string
    manufacturer?: string | null
    model?: string | null
    year?: number | null
    status?: $Enums.VehicleStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drivingRecords?: DrivingRecordUncheckedCreateNestedManyWithoutVehicleInput
    vehicleDrivers?: VehicleDriverUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutAnomalyEventsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutAnomalyEventsInput, VehicleUncheckedCreateWithoutAnomalyEventsInput>
  }

  export type DrivingRecordCreateWithoutAnomalyEventsInput = {
    id: string
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
    vehicle: VehicleCreateNestedOneWithoutDrivingRecordsInput
    driver?: DriverCreateNestedOneWithoutDrivingRecordsInput
  }

  export type DrivingRecordUncheckedCreateWithoutAnomalyEventsInput = {
    id: string
    vehicleId: string
    driverId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
  }

  export type DrivingRecordCreateOrConnectWithoutAnomalyEventsInput = {
    where: DrivingRecordWhereUniqueInput
    create: XOR<DrivingRecordCreateWithoutAnomalyEventsInput, DrivingRecordUncheckedCreateWithoutAnomalyEventsInput>
  }

  export type VehicleUpsertWithoutAnomalyEventsInput = {
    update: XOR<VehicleUpdateWithoutAnomalyEventsInput, VehicleUncheckedUpdateWithoutAnomalyEventsInput>
    create: XOR<VehicleCreateWithoutAnomalyEventsInput, VehicleUncheckedCreateWithoutAnomalyEventsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutAnomalyEventsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutAnomalyEventsInput, VehicleUncheckedUpdateWithoutAnomalyEventsInput>
  }

  export type VehicleUpdateWithoutAnomalyEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUpdateManyWithoutVehicleNestedInput
    vehicleDrivers?: VehicleDriverUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutAnomalyEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivingRecords?: DrivingRecordUncheckedUpdateManyWithoutVehicleNestedInput
    vehicleDrivers?: VehicleDriverUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DrivingRecordUpsertWithoutAnomalyEventsInput = {
    update: XOR<DrivingRecordUpdateWithoutAnomalyEventsInput, DrivingRecordUncheckedUpdateWithoutAnomalyEventsInput>
    create: XOR<DrivingRecordCreateWithoutAnomalyEventsInput, DrivingRecordUncheckedCreateWithoutAnomalyEventsInput>
    where?: DrivingRecordWhereInput
  }

  export type DrivingRecordUpdateToOneWithWhereWithoutAnomalyEventsInput = {
    where?: DrivingRecordWhereInput
    data: XOR<DrivingRecordUpdateWithoutAnomalyEventsInput, DrivingRecordUncheckedUpdateWithoutAnomalyEventsInput>
  }

  export type DrivingRecordUpdateWithoutAnomalyEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    vehicle?: VehicleUpdateOneRequiredWithoutDrivingRecordsNestedInput
    driver?: DriverUpdateOneWithoutDrivingRecordsNestedInput
  }

  export type DrivingRecordUncheckedUpdateWithoutAnomalyEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DrivingRecordCreateManyDriverInput = {
    id: string
    vehicleId: string
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
  }

  export type VehicleDriverCreateManyDriverInput = {
    id: string
    vehicleId: string
    assignedAt?: Date | string | null
    unassignedAt?: Date | string | null
  }

  export type DrivingRecordUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    vehicle?: VehicleUpdateOneRequiredWithoutDrivingRecordsNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutDrivingRecordNestedInput
  }

  export type DrivingRecordUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutDrivingRecordNestedInput
  }

  export type DrivingRecordUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VehicleDriverUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUpdateOneRequiredWithoutVehicleDriversNestedInput
  }

  export type VehicleDriverUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleDriverUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DrivingRecordCreateManyVehicleInput = {
    id: string
    driverId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    distance?: number | null
    duration?: number | null
  }

  export type VehicleDriverCreateManyVehicleInput = {
    id: string
    driverId: string
    assignedAt?: Date | string | null
    unassignedAt?: Date | string | null
  }

  export type AnomalyEventCreateManyVehicleInput = {
    id: string
    drivingRecordId?: string | null
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date | string
    description?: string | null
    value?: number | null
  }

  export type DrivingRecordUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    driver?: DriverUpdateOneWithoutDrivingRecordsNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutDrivingRecordNestedInput
  }

  export type DrivingRecordUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutDrivingRecordNestedInput
  }

  export type DrivingRecordUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VehicleDriverUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driver?: DriverUpdateOneRequiredWithoutVehicleDriversNestedInput
  }

  export type VehicleDriverUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleDriverUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unassignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnomalyEventUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    drivingRecord?: DrivingRecordUpdateOneWithoutAnomalyEventsNestedInput
  }

  export type AnomalyEventUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    drivingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnomalyEventUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    drivingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnomalyEventCreateManyDrivingRecordInput = {
    id: string
    vehicleId: string
    type: string
    severity: $Enums.EventSeverity
    occurredAt: Date | string
    description?: string | null
    value?: number | null
  }

  export type AnomalyEventUpdateWithoutDrivingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicle?: VehicleUpdateOneRequiredWithoutAnomalyEventsNestedInput
  }

  export type AnomalyEventUncheckedUpdateWithoutDrivingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AnomalyEventUncheckedUpdateManyWithoutDrivingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: EnumEventSeverityFieldUpdateOperationsInput | $Enums.EventSeverity
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
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