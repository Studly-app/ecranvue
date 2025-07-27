
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Classes
 * 
 */
export type Classes = $Result.DefaultSelection<Prisma.$ClassesPayload>
/**
 * Model Matieres
 * 
 */
export type Matieres = $Result.DefaultSelection<Prisma.$MatieresPayload>
/**
 * Model Lecons
 * 
 */
export type Lecons = $Result.DefaultSelection<Prisma.$LeconsPayload>
/**
 * Model SousLecons
 * 
 */
export type SousLecons = $Result.DefaultSelection<Prisma.$SousLeconsPayload>
/**
 * Model Exercices
 * 
 */
export type Exercices = $Result.DefaultSelection<Prisma.$ExercicesPayload>
/**
 * Model OptionsQCM
 * 
 */
export type OptionsQCM = $Result.DefaultSelection<Prisma.$OptionsQCMPayload>
/**
 * Model LeconsUtilisateur
 * 
 */
export type LeconsUtilisateur = $Result.DefaultSelection<Prisma.$LeconsUtilisateurPayload>
/**
 * Model Reponses
 * 
 */
export type Reponses = $Result.DefaultSelection<Prisma.$ReponsesPayload>
/**
 * Model ReponsesUtilisateur
 * 
 */
export type ReponsesUtilisateur = $Result.DefaultSelection<Prisma.$ReponsesUtilisateurPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TypesExercice: {
  QCM: 'QCM',
  Numerique: 'Numerique'
};

export type TypesExercice = (typeof TypesExercice)[keyof typeof TypesExercice]


export const TypesUtilisateur: {
  ADMIN: 'ADMIN',
  ELEVE: 'ELEVE',
  MODERATOR: 'MODERATOR'
};

export type TypesUtilisateur = (typeof TypesUtilisateur)[keyof typeof TypesUtilisateur]

}

export type TypesExercice = $Enums.TypesExercice

export const TypesExercice: typeof $Enums.TypesExercice

export type TypesUtilisateur = $Enums.TypesUtilisateur

export const TypesUtilisateur: typeof $Enums.TypesUtilisateur

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classes`: Exposes CRUD operations for the **Classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classes.findMany()
    * ```
    */
  get classes(): Prisma.ClassesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matieres`: Exposes CRUD operations for the **Matieres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matieres
    * const matieres = await prisma.matieres.findMany()
    * ```
    */
  get matieres(): Prisma.MatieresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecons`: Exposes CRUD operations for the **Lecons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecons
    * const lecons = await prisma.lecons.findMany()
    * ```
    */
  get lecons(): Prisma.LeconsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sousLecons`: Exposes CRUD operations for the **SousLecons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SousLecons
    * const sousLecons = await prisma.sousLecons.findMany()
    * ```
    */
  get sousLecons(): Prisma.SousLeconsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercices`: Exposes CRUD operations for the **Exercices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercices
    * const exercices = await prisma.exercices.findMany()
    * ```
    */
  get exercices(): Prisma.ExercicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.optionsQCM`: Exposes CRUD operations for the **OptionsQCM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OptionsQCMS
    * const optionsQCMS = await prisma.optionsQCM.findMany()
    * ```
    */
  get optionsQCM(): Prisma.OptionsQCMDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leconsUtilisateur`: Exposes CRUD operations for the **LeconsUtilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeconsUtilisateurs
    * const leconsUtilisateurs = await prisma.leconsUtilisateur.findMany()
    * ```
    */
  get leconsUtilisateur(): Prisma.LeconsUtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reponses`: Exposes CRUD operations for the **Reponses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reponses
    * const reponses = await prisma.reponses.findMany()
    * ```
    */
  get reponses(): Prisma.ReponsesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reponsesUtilisateur`: Exposes CRUD operations for the **ReponsesUtilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReponsesUtilisateurs
    * const reponsesUtilisateurs = await prisma.reponsesUtilisateur.findMany()
    * ```
    */
  get reponsesUtilisateur(): Prisma.ReponsesUtilisateurDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    User: 'User',
    Classes: 'Classes',
    Matieres: 'Matieres',
    Lecons: 'Lecons',
    SousLecons: 'SousLecons',
    Exercices: 'Exercices',
    OptionsQCM: 'OptionsQCM',
    LeconsUtilisateur: 'LeconsUtilisateur',
    Reponses: 'Reponses',
    ReponsesUtilisateur: 'ReponsesUtilisateur'
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
      modelProps: "user" | "classes" | "matieres" | "lecons" | "sousLecons" | "exercices" | "optionsQCM" | "leconsUtilisateur" | "reponses" | "reponsesUtilisateur"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Classes: {
        payload: Prisma.$ClassesPayload<ExtArgs>
        fields: Prisma.ClassesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          findFirst: {
            args: Prisma.ClassesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          findMany: {
            args: Prisma.ClassesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>[]
          }
          create: {
            args: Prisma.ClassesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          createMany: {
            args: Prisma.ClassesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>[]
          }
          delete: {
            args: Prisma.ClassesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          update: {
            args: Prisma.ClassesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          deleteMany: {
            args: Prisma.ClassesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>[]
          }
          upsert: {
            args: Prisma.ClassesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassesPayload>
          }
          aggregate: {
            args: Prisma.ClassesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasses>
          }
          groupBy: {
            args: Prisma.ClassesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassesCountArgs<ExtArgs>
            result: $Utils.Optional<ClassesCountAggregateOutputType> | number
          }
        }
      }
      Matieres: {
        payload: Prisma.$MatieresPayload<ExtArgs>
        fields: Prisma.MatieresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatieresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatieresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload>
          }
          findFirst: {
            args: Prisma.MatieresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatieresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload>
          }
          findMany: {
            args: Prisma.MatieresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload>[]
          }
          create: {
            args: Prisma.MatieresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload>
          }
          createMany: {
            args: Prisma.MatieresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatieresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload>[]
          }
          delete: {
            args: Prisma.MatieresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload>
          }
          update: {
            args: Prisma.MatieresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload>
          }
          deleteMany: {
            args: Prisma.MatieresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatieresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatieresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload>[]
          }
          upsert: {
            args: Prisma.MatieresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatieresPayload>
          }
          aggregate: {
            args: Prisma.MatieresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatieres>
          }
          groupBy: {
            args: Prisma.MatieresGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatieresGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatieresCountArgs<ExtArgs>
            result: $Utils.Optional<MatieresCountAggregateOutputType> | number
          }
        }
      }
      Lecons: {
        payload: Prisma.$LeconsPayload<ExtArgs>
        fields: Prisma.LeconsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeconsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeconsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload>
          }
          findFirst: {
            args: Prisma.LeconsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeconsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload>
          }
          findMany: {
            args: Prisma.LeconsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload>[]
          }
          create: {
            args: Prisma.LeconsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload>
          }
          createMany: {
            args: Prisma.LeconsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeconsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload>[]
          }
          delete: {
            args: Prisma.LeconsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload>
          }
          update: {
            args: Prisma.LeconsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload>
          }
          deleteMany: {
            args: Prisma.LeconsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeconsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeconsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload>[]
          }
          upsert: {
            args: Prisma.LeconsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsPayload>
          }
          aggregate: {
            args: Prisma.LeconsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecons>
          }
          groupBy: {
            args: Prisma.LeconsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeconsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeconsCountArgs<ExtArgs>
            result: $Utils.Optional<LeconsCountAggregateOutputType> | number
          }
        }
      }
      SousLecons: {
        payload: Prisma.$SousLeconsPayload<ExtArgs>
        fields: Prisma.SousLeconsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SousLeconsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SousLeconsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload>
          }
          findFirst: {
            args: Prisma.SousLeconsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SousLeconsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload>
          }
          findMany: {
            args: Prisma.SousLeconsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload>[]
          }
          create: {
            args: Prisma.SousLeconsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload>
          }
          createMany: {
            args: Prisma.SousLeconsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SousLeconsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload>[]
          }
          delete: {
            args: Prisma.SousLeconsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload>
          }
          update: {
            args: Prisma.SousLeconsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload>
          }
          deleteMany: {
            args: Prisma.SousLeconsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SousLeconsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SousLeconsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload>[]
          }
          upsert: {
            args: Prisma.SousLeconsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SousLeconsPayload>
          }
          aggregate: {
            args: Prisma.SousLeconsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSousLecons>
          }
          groupBy: {
            args: Prisma.SousLeconsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SousLeconsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SousLeconsCountArgs<ExtArgs>
            result: $Utils.Optional<SousLeconsCountAggregateOutputType> | number
          }
        }
      }
      Exercices: {
        payload: Prisma.$ExercicesPayload<ExtArgs>
        fields: Prisma.ExercicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExercicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExercicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload>
          }
          findFirst: {
            args: Prisma.ExercicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExercicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload>
          }
          findMany: {
            args: Prisma.ExercicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload>[]
          }
          create: {
            args: Prisma.ExercicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload>
          }
          createMany: {
            args: Prisma.ExercicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExercicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload>[]
          }
          delete: {
            args: Prisma.ExercicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload>
          }
          update: {
            args: Prisma.ExercicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload>
          }
          deleteMany: {
            args: Prisma.ExercicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExercicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExercicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload>[]
          }
          upsert: {
            args: Prisma.ExercicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercicesPayload>
          }
          aggregate: {
            args: Prisma.ExercicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercices>
          }
          groupBy: {
            args: Prisma.ExercicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExercicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExercicesCountArgs<ExtArgs>
            result: $Utils.Optional<ExercicesCountAggregateOutputType> | number
          }
        }
      }
      OptionsQCM: {
        payload: Prisma.$OptionsQCMPayload<ExtArgs>
        fields: Prisma.OptionsQCMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionsQCMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionsQCMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload>
          }
          findFirst: {
            args: Prisma.OptionsQCMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionsQCMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload>
          }
          findMany: {
            args: Prisma.OptionsQCMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload>[]
          }
          create: {
            args: Prisma.OptionsQCMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload>
          }
          createMany: {
            args: Prisma.OptionsQCMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionsQCMCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload>[]
          }
          delete: {
            args: Prisma.OptionsQCMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload>
          }
          update: {
            args: Prisma.OptionsQCMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload>
          }
          deleteMany: {
            args: Prisma.OptionsQCMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionsQCMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionsQCMUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload>[]
          }
          upsert: {
            args: Prisma.OptionsQCMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionsQCMPayload>
          }
          aggregate: {
            args: Prisma.OptionsQCMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptionsQCM>
          }
          groupBy: {
            args: Prisma.OptionsQCMGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionsQCMGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionsQCMCountArgs<ExtArgs>
            result: $Utils.Optional<OptionsQCMCountAggregateOutputType> | number
          }
        }
      }
      LeconsUtilisateur: {
        payload: Prisma.$LeconsUtilisateurPayload<ExtArgs>
        fields: Prisma.LeconsUtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeconsUtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeconsUtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload>
          }
          findFirst: {
            args: Prisma.LeconsUtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeconsUtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload>
          }
          findMany: {
            args: Prisma.LeconsUtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload>[]
          }
          create: {
            args: Prisma.LeconsUtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload>
          }
          createMany: {
            args: Prisma.LeconsUtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeconsUtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload>[]
          }
          delete: {
            args: Prisma.LeconsUtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload>
          }
          update: {
            args: Prisma.LeconsUtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.LeconsUtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeconsUtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeconsUtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.LeconsUtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeconsUtilisateurPayload>
          }
          aggregate: {
            args: Prisma.LeconsUtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeconsUtilisateur>
          }
          groupBy: {
            args: Prisma.LeconsUtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeconsUtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeconsUtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<LeconsUtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Reponses: {
        payload: Prisma.$ReponsesPayload<ExtArgs>
        fields: Prisma.ReponsesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReponsesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReponsesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload>
          }
          findFirst: {
            args: Prisma.ReponsesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReponsesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload>
          }
          findMany: {
            args: Prisma.ReponsesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload>[]
          }
          create: {
            args: Prisma.ReponsesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload>
          }
          createMany: {
            args: Prisma.ReponsesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReponsesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload>[]
          }
          delete: {
            args: Prisma.ReponsesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload>
          }
          update: {
            args: Prisma.ReponsesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload>
          }
          deleteMany: {
            args: Prisma.ReponsesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReponsesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReponsesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload>[]
          }
          upsert: {
            args: Prisma.ReponsesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesPayload>
          }
          aggregate: {
            args: Prisma.ReponsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReponses>
          }
          groupBy: {
            args: Prisma.ReponsesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReponsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReponsesCountArgs<ExtArgs>
            result: $Utils.Optional<ReponsesCountAggregateOutputType> | number
          }
        }
      }
      ReponsesUtilisateur: {
        payload: Prisma.$ReponsesUtilisateurPayload<ExtArgs>
        fields: Prisma.ReponsesUtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReponsesUtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReponsesUtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload>
          }
          findFirst: {
            args: Prisma.ReponsesUtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReponsesUtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload>
          }
          findMany: {
            args: Prisma.ReponsesUtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload>[]
          }
          create: {
            args: Prisma.ReponsesUtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload>
          }
          createMany: {
            args: Prisma.ReponsesUtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReponsesUtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload>[]
          }
          delete: {
            args: Prisma.ReponsesUtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload>
          }
          update: {
            args: Prisma.ReponsesUtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.ReponsesUtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReponsesUtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReponsesUtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.ReponsesUtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReponsesUtilisateurPayload>
          }
          aggregate: {
            args: Prisma.ReponsesUtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReponsesUtilisateur>
          }
          groupBy: {
            args: Prisma.ReponsesUtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReponsesUtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReponsesUtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<ReponsesUtilisateurCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    classes?: ClassesOmit
    matieres?: MatieresOmit
    lecons?: LeconsOmit
    sousLecons?: SousLeconsOmit
    exercices?: ExercicesOmit
    optionsQCM?: OptionsQCMOmit
    leconsUtilisateur?: LeconsUtilisateurOmit
    reponses?: ReponsesOmit
    reponsesUtilisateur?: ReponsesUtilisateurOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ReponsesUtilisateur: number
    LeconsUtilisateur: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReponsesUtilisateur?: boolean | UserCountOutputTypeCountReponsesUtilisateurArgs
    LeconsUtilisateur?: boolean | UserCountOutputTypeCountLeconsUtilisateurArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReponsesUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReponsesUtilisateurWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeconsUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeconsUtilisateurWhereInput
  }


  /**
   * Count Type ClassesCountOutputType
   */

  export type ClassesCountOutputType = {
    Matieres: number
    User: number
  }

  export type ClassesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Matieres?: boolean | ClassesCountOutputTypeCountMatieresArgs
    User?: boolean | ClassesCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassesCountOutputType
     */
    select?: ClassesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeCountMatieresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatieresWhereInput
  }

  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type MatieresCountOutputType
   */

  export type MatieresCountOutputType = {
    Lecons: number
    Exercices: number
  }

  export type MatieresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lecons?: boolean | MatieresCountOutputTypeCountLeconsArgs
    Exercices?: boolean | MatieresCountOutputTypeCountExercicesArgs
  }

  // Custom InputTypes
  /**
   * MatieresCountOutputType without action
   */
  export type MatieresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatieresCountOutputType
     */
    select?: MatieresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatieresCountOutputType without action
   */
  export type MatieresCountOutputTypeCountLeconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeconsWhereInput
  }

  /**
   * MatieresCountOutputType without action
   */
  export type MatieresCountOutputTypeCountExercicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExercicesWhereInput
  }


  /**
   * Count Type LeconsCountOutputType
   */

  export type LeconsCountOutputType = {
    SousLecons: number
    LeconsUtilisateur: number
    Exercices: number
  }

  export type LeconsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SousLecons?: boolean | LeconsCountOutputTypeCountSousLeconsArgs
    LeconsUtilisateur?: boolean | LeconsCountOutputTypeCountLeconsUtilisateurArgs
    Exercices?: boolean | LeconsCountOutputTypeCountExercicesArgs
  }

  // Custom InputTypes
  /**
   * LeconsCountOutputType without action
   */
  export type LeconsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsCountOutputType
     */
    select?: LeconsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeconsCountOutputType without action
   */
  export type LeconsCountOutputTypeCountSousLeconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SousLeconsWhereInput
  }

  /**
   * LeconsCountOutputType without action
   */
  export type LeconsCountOutputTypeCountLeconsUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeconsUtilisateurWhereInput
  }

  /**
   * LeconsCountOutputType without action
   */
  export type LeconsCountOutputTypeCountExercicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExercicesWhereInput
  }


  /**
   * Count Type SousLeconsCountOutputType
   */

  export type SousLeconsCountOutputType = {
    Exercices: number
  }

  export type SousLeconsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Exercices?: boolean | SousLeconsCountOutputTypeCountExercicesArgs
  }

  // Custom InputTypes
  /**
   * SousLeconsCountOutputType without action
   */
  export type SousLeconsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLeconsCountOutputType
     */
    select?: SousLeconsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SousLeconsCountOutputType without action
   */
  export type SousLeconsCountOutputTypeCountExercicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExercicesWhereInput
  }


  /**
   * Count Type ExercicesCountOutputType
   */

  export type ExercicesCountOutputType = {
    Reponses: number
    OptionsQCM: number
  }

  export type ExercicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reponses?: boolean | ExercicesCountOutputTypeCountReponsesArgs
    OptionsQCM?: boolean | ExercicesCountOutputTypeCountOptionsQCMArgs
  }

  // Custom InputTypes
  /**
   * ExercicesCountOutputType without action
   */
  export type ExercicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExercicesCountOutputType
     */
    select?: ExercicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExercicesCountOutputType without action
   */
  export type ExercicesCountOutputTypeCountReponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReponsesWhereInput
  }

  /**
   * ExercicesCountOutputType without action
   */
  export type ExercicesCountOutputTypeCountOptionsQCMArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionsQCMWhereInput
  }


  /**
   * Count Type ReponsesCountOutputType
   */

  export type ReponsesCountOutputType = {
    ReponsesUtilisateur: number
  }

  export type ReponsesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReponsesUtilisateur?: boolean | ReponsesCountOutputTypeCountReponsesUtilisateurArgs
  }

  // Custom InputTypes
  /**
   * ReponsesCountOutputType without action
   */
  export type ReponsesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesCountOutputType
     */
    select?: ReponsesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReponsesCountOutputType without action
   */
  export type ReponsesCountOutputTypeCountReponsesUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReponsesUtilisateurWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    nom: string | null
    prenom: string | null
    password: string | null
    dataInscription: string | null
    derniereConnexion: Date | null
    typesUtilisateur: $Enums.TypesUtilisateur | null
    createdAt: Date | null
    updatedAt: Date | null
    classesId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nom: string | null
    prenom: string | null
    password: string | null
    dataInscription: string | null
    derniereConnexion: Date | null
    typesUtilisateur: $Enums.TypesUtilisateur | null
    createdAt: Date | null
    updatedAt: Date | null
    classesId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    nom: number
    prenom: number
    password: number
    dataInscription: number
    derniereConnexion: number
    typesUtilisateur: number
    createdAt: number
    updatedAt: number
    classesId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    nom?: true
    prenom?: true
    password?: true
    dataInscription?: true
    derniereConnexion?: true
    typesUtilisateur?: true
    createdAt?: true
    updatedAt?: true
    classesId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    nom?: true
    prenom?: true
    password?: true
    dataInscription?: true
    derniereConnexion?: true
    typesUtilisateur?: true
    createdAt?: true
    updatedAt?: true
    classesId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    nom?: true
    prenom?: true
    password?: true
    dataInscription?: true
    derniereConnexion?: true
    typesUtilisateur?: true
    createdAt?: true
    updatedAt?: true
    classesId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    nom: string | null
    prenom: string | null
    password: string
    dataInscription: string | null
    derniereConnexion: Date | null
    typesUtilisateur: $Enums.TypesUtilisateur
    createdAt: Date
    updatedAt: Date
    classesId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    password?: boolean
    dataInscription?: boolean
    derniereConnexion?: boolean
    typesUtilisateur?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classesId?: boolean
    ReponsesUtilisateur?: boolean | User$ReponsesUtilisateurArgs<ExtArgs>
    LeconsUtilisateur?: boolean | User$LeconsUtilisateurArgs<ExtArgs>
    classe?: boolean | User$classeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    password?: boolean
    dataInscription?: boolean
    derniereConnexion?: boolean
    typesUtilisateur?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classesId?: boolean
    classe?: boolean | User$classeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    password?: boolean
    dataInscription?: boolean
    derniereConnexion?: boolean
    typesUtilisateur?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classesId?: boolean
    classe?: boolean | User$classeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    password?: boolean
    dataInscription?: boolean
    derniereConnexion?: boolean
    typesUtilisateur?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classesId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nom" | "prenom" | "password" | "dataInscription" | "derniereConnexion" | "typesUtilisateur" | "createdAt" | "updatedAt" | "classesId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReponsesUtilisateur?: boolean | User$ReponsesUtilisateurArgs<ExtArgs>
    LeconsUtilisateur?: boolean | User$LeconsUtilisateurArgs<ExtArgs>
    classe?: boolean | User$classeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classe?: boolean | User$classeArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classe?: boolean | User$classeArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ReponsesUtilisateur: Prisma.$ReponsesUtilisateurPayload<ExtArgs>[]
      LeconsUtilisateur: Prisma.$LeconsUtilisateurPayload<ExtArgs>[]
      classe: Prisma.$ClassesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      nom: string | null
      prenom: string | null
      password: string
      dataInscription: string | null
      derniereConnexion: Date | null
      typesUtilisateur: $Enums.TypesUtilisateur
      createdAt: Date
      updatedAt: Date
      classesId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ReponsesUtilisateur<T extends User$ReponsesUtilisateurArgs<ExtArgs> = {}>(args?: Subset<T, User$ReponsesUtilisateurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LeconsUtilisateur<T extends User$LeconsUtilisateurArgs<ExtArgs> = {}>(args?: Subset<T, User$LeconsUtilisateurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classe<T extends User$classeArgs<ExtArgs> = {}>(args?: Subset<T, User$classeArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly dataInscription: FieldRef<"User", 'String'>
    readonly derniereConnexion: FieldRef<"User", 'DateTime'>
    readonly typesUtilisateur: FieldRef<"User", 'TypesUtilisateur'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly classesId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ReponsesUtilisateur
   */
  export type User$ReponsesUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    where?: ReponsesUtilisateurWhereInput
    orderBy?: ReponsesUtilisateurOrderByWithRelationInput | ReponsesUtilisateurOrderByWithRelationInput[]
    cursor?: ReponsesUtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReponsesUtilisateurScalarFieldEnum | ReponsesUtilisateurScalarFieldEnum[]
  }

  /**
   * User.LeconsUtilisateur
   */
  export type User$LeconsUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    where?: LeconsUtilisateurWhereInput
    orderBy?: LeconsUtilisateurOrderByWithRelationInput | LeconsUtilisateurOrderByWithRelationInput[]
    cursor?: LeconsUtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeconsUtilisateurScalarFieldEnum | LeconsUtilisateurScalarFieldEnum[]
  }

  /**
   * User.classe
   */
  export type User$classeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    where?: ClassesWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Classes
   */

  export type AggregateClasses = {
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  export type ClassesMinAggregateOutputType = {
    id: string | null
    nom: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassesMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassesCountAggregateOutputType = {
    id: number
    nom: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassesMinAggregateInputType = {
    id?: true
    nom?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassesMaxAggregateInputType = {
    id?: true
    nom?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassesCountAggregateInputType = {
    id?: true
    nom?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to aggregate.
     */
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassesMaxAggregateInputType
  }

  export type GetClassesAggregateType<T extends ClassesAggregateArgs> = {
        [P in keyof T & keyof AggregateClasses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasses[P]>
      : GetScalarType<T[P], AggregateClasses[P]>
  }




  export type ClassesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassesWhereInput
    orderBy?: ClassesOrderByWithAggregationInput | ClassesOrderByWithAggregationInput[]
    by: ClassesScalarFieldEnum[] | ClassesScalarFieldEnum
    having?: ClassesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassesCountAggregateInputType | true
    _min?: ClassesMinAggregateInputType
    _max?: ClassesMaxAggregateInputType
  }

  export type ClassesGroupByOutputType = {
    id: string
    nom: string
    createdAt: Date
    updatedAt: Date
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  type GetClassesGroupByPayload<T extends ClassesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassesGroupByOutputType[P]>
            : GetScalarType<T[P], ClassesGroupByOutputType[P]>
        }
      >
    >


  export type ClassesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Matieres?: boolean | Classes$MatieresArgs<ExtArgs>
    User?: boolean | Classes$UserArgs<ExtArgs>
    _count?: boolean | ClassesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classes"]>

  export type ClassesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["classes"]>

  export type ClassesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["classes"]>

  export type ClassesSelectScalar = {
    id?: boolean
    nom?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "createdAt" | "updatedAt", ExtArgs["result"]["classes"]>
  export type ClassesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Matieres?: boolean | Classes$MatieresArgs<ExtArgs>
    User?: boolean | Classes$UserArgs<ExtArgs>
    _count?: boolean | ClassesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classes"
    objects: {
      Matieres: Prisma.$MatieresPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classes"]>
    composites: {}
  }

  type ClassesGetPayload<S extends boolean | null | undefined | ClassesDefaultArgs> = $Result.GetResult<Prisma.$ClassesPayload, S>

  type ClassesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassesCountAggregateInputType | true
    }

  export interface ClassesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classes'], meta: { name: 'Classes' } }
    /**
     * Find zero or one Classes that matches the filter.
     * @param {ClassesFindUniqueArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassesFindUniqueArgs>(args: SelectSubset<T, ClassesFindUniqueArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassesFindUniqueOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesFindFirstArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassesFindFirstArgs>(args?: SelectSubset<T, ClassesFindFirstArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesFindFirstOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classes.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classesWithIdOnly = await prisma.classes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassesFindManyArgs>(args?: SelectSubset<T, ClassesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classes.
     * @param {ClassesCreateArgs} args - Arguments to create a Classes.
     * @example
     * // Create one Classes
     * const Classes = await prisma.classes.create({
     *   data: {
     *     // ... data to create a Classes
     *   }
     * })
     * 
     */
    create<T extends ClassesCreateArgs>(args: SelectSubset<T, ClassesCreateArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassesCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassesCreateManyArgs>(args?: SelectSubset<T, ClassesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassesCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classesWithIdOnly = await prisma.classes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassesCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classes.
     * @param {ClassesDeleteArgs} args - Arguments to delete one Classes.
     * @example
     * // Delete one Classes
     * const Classes = await prisma.classes.delete({
     *   where: {
     *     // ... filter to delete one Classes
     *   }
     * })
     * 
     */
    delete<T extends ClassesDeleteArgs>(args: SelectSubset<T, ClassesDeleteArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classes.
     * @param {ClassesUpdateArgs} args - Arguments to update one Classes.
     * @example
     * // Update one Classes
     * const classes = await prisma.classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassesUpdateArgs>(args: SelectSubset<T, ClassesUpdateArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassesDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassesDeleteManyArgs>(args?: SelectSubset<T, ClassesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassesUpdateManyArgs>(args: SelectSubset<T, ClassesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassesUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classesWithIdOnly = await prisma.classes.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassesUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classes.
     * @param {ClassesUpsertArgs} args - Arguments to update or create a Classes.
     * @example
     * // Update or create a Classes
     * const classes = await prisma.classes.upsert({
     *   create: {
     *     // ... data to create a Classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classes we want to update
     *   }
     * })
     */
    upsert<T extends ClassesUpsertArgs>(args: SelectSubset<T, ClassesUpsertArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classes.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassesCountArgs>(
      args?: Subset<T, ClassesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassesAggregateArgs>(args: Subset<T, ClassesAggregateArgs>): Prisma.PrismaPromise<GetClassesAggregateType<T>>

    /**
     * Group by Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesGroupByArgs} args - Group by arguments.
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
      T extends ClassesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassesGroupByArgs['orderBy'] }
        : { orderBy?: ClassesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classes model
   */
  readonly fields: ClassesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Matieres<T extends Classes$MatieresArgs<ExtArgs> = {}>(args?: Subset<T, Classes$MatieresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Classes$UserArgs<ExtArgs> = {}>(args?: Subset<T, Classes$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Classes model
   */
  interface ClassesFieldRefs {
    readonly id: FieldRef<"Classes", 'String'>
    readonly nom: FieldRef<"Classes", 'String'>
    readonly createdAt: FieldRef<"Classes", 'DateTime'>
    readonly updatedAt: FieldRef<"Classes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Classes findUnique
   */
  export type ClassesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where: ClassesWhereUniqueInput
  }

  /**
   * Classes findUniqueOrThrow
   */
  export type ClassesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where: ClassesWhereUniqueInput
  }

  /**
   * Classes findFirst
   */
  export type ClassesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Classes findFirstOrThrow
   */
  export type ClassesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Classes findMany
   */
  export type ClassesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassesOrderByWithRelationInput | ClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * Classes create
   */
  export type ClassesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * The data needed to create a Classes.
     */
    data: XOR<ClassesCreateInput, ClassesUncheckedCreateInput>
  }

  /**
   * Classes createMany
   */
  export type ClassesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassesCreateManyInput | ClassesCreateManyInput[]
  }

  /**
   * Classes createManyAndReturn
   */
  export type ClassesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassesCreateManyInput | ClassesCreateManyInput[]
  }

  /**
   * Classes update
   */
  export type ClassesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * The data needed to update a Classes.
     */
    data: XOR<ClassesUpdateInput, ClassesUncheckedUpdateInput>
    /**
     * Choose, which Classes to update.
     */
    where: ClassesWhereUniqueInput
  }

  /**
   * Classes updateMany
   */
  export type ClassesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassesWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classes updateManyAndReturn
   */
  export type ClassesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassesWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classes upsert
   */
  export type ClassesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * The filter to search for the Classes to update in case it exists.
     */
    where: ClassesWhereUniqueInput
    /**
     * In case the Classes found by the `where` argument doesn't exist, create a new Classes with this data.
     */
    create: XOR<ClassesCreateInput, ClassesUncheckedCreateInput>
    /**
     * In case the Classes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassesUpdateInput, ClassesUncheckedUpdateInput>
  }

  /**
   * Classes delete
   */
  export type ClassesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
    /**
     * Filter which Classes to delete.
     */
    where: ClassesWhereUniqueInput
  }

  /**
   * Classes deleteMany
   */
  export type ClassesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassesWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Classes.Matieres
   */
  export type Classes$MatieresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    where?: MatieresWhereInput
    orderBy?: MatieresOrderByWithRelationInput | MatieresOrderByWithRelationInput[]
    cursor?: MatieresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatieresScalarFieldEnum | MatieresScalarFieldEnum[]
  }

  /**
   * Classes.User
   */
  export type Classes$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Classes without action
   */
  export type ClassesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classes
     */
    select?: ClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classes
     */
    omit?: ClassesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassesInclude<ExtArgs> | null
  }


  /**
   * Model Matieres
   */

  export type AggregateMatieres = {
    _count: MatieresCountAggregateOutputType | null
    _avg: MatieresAvgAggregateOutputType | null
    _sum: MatieresSumAggregateOutputType | null
    _min: MatieresMinAggregateOutputType | null
    _max: MatieresMaxAggregateOutputType | null
  }

  export type MatieresAvgAggregateOutputType = {
    pointsTotalMatiere: number | null
    pointsSeuilMatiere: number | null
  }

  export type MatieresSumAggregateOutputType = {
    pointsTotalMatiere: number | null
    pointsSeuilMatiere: number | null
  }

  export type MatieresMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    classesId: string | null
    pointsTotalMatiere: number | null
    pointsSeuilMatiere: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatieresMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    classesId: string | null
    pointsTotalMatiere: number | null
    pointsSeuilMatiere: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatieresCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    classesId: number
    pointsTotalMatiere: number
    pointsSeuilMatiere: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatieresAvgAggregateInputType = {
    pointsTotalMatiere?: true
    pointsSeuilMatiere?: true
  }

  export type MatieresSumAggregateInputType = {
    pointsTotalMatiere?: true
    pointsSeuilMatiere?: true
  }

  export type MatieresMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    classesId?: true
    pointsTotalMatiere?: true
    pointsSeuilMatiere?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatieresMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    classesId?: true
    pointsTotalMatiere?: true
    pointsSeuilMatiere?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatieresCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    classesId?: true
    pointsTotalMatiere?: true
    pointsSeuilMatiere?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatieresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matieres to aggregate.
     */
    where?: MatieresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatieresOrderByWithRelationInput | MatieresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatieresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matieres
    **/
    _count?: true | MatieresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatieresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatieresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatieresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatieresMaxAggregateInputType
  }

  export type GetMatieresAggregateType<T extends MatieresAggregateArgs> = {
        [P in keyof T & keyof AggregateMatieres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatieres[P]>
      : GetScalarType<T[P], AggregateMatieres[P]>
  }




  export type MatieresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatieresWhereInput
    orderBy?: MatieresOrderByWithAggregationInput | MatieresOrderByWithAggregationInput[]
    by: MatieresScalarFieldEnum[] | MatieresScalarFieldEnum
    having?: MatieresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatieresCountAggregateInputType | true
    _avg?: MatieresAvgAggregateInputType
    _sum?: MatieresSumAggregateInputType
    _min?: MatieresMinAggregateInputType
    _max?: MatieresMaxAggregateInputType
  }

  export type MatieresGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    classesId: string
    pointsTotalMatiere: number | null
    pointsSeuilMatiere: number | null
    createdAt: Date
    updatedAt: Date
    _count: MatieresCountAggregateOutputType | null
    _avg: MatieresAvgAggregateOutputType | null
    _sum: MatieresSumAggregateOutputType | null
    _min: MatieresMinAggregateOutputType | null
    _max: MatieresMaxAggregateOutputType | null
  }

  type GetMatieresGroupByPayload<T extends MatieresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatieresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatieresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatieresGroupByOutputType[P]>
            : GetScalarType<T[P], MatieresGroupByOutputType[P]>
        }
      >
    >


  export type MatieresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    classesId?: boolean
    pointsTotalMatiere?: boolean
    pointsSeuilMatiere?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classes?: boolean | ClassesDefaultArgs<ExtArgs>
    Lecons?: boolean | Matieres$LeconsArgs<ExtArgs>
    Exercices?: boolean | Matieres$ExercicesArgs<ExtArgs>
    _count?: boolean | MatieresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matieres"]>

  export type MatieresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    classesId?: boolean
    pointsTotalMatiere?: boolean
    pointsSeuilMatiere?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classes?: boolean | ClassesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matieres"]>

  export type MatieresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    classesId?: boolean
    pointsTotalMatiere?: boolean
    pointsSeuilMatiere?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classes?: boolean | ClassesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matieres"]>

  export type MatieresSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    classesId?: boolean
    pointsTotalMatiere?: boolean
    pointsSeuilMatiere?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatieresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "classesId" | "pointsTotalMatiere" | "pointsSeuilMatiere" | "createdAt" | "updatedAt", ExtArgs["result"]["matieres"]>
  export type MatieresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | ClassesDefaultArgs<ExtArgs>
    Lecons?: boolean | Matieres$LeconsArgs<ExtArgs>
    Exercices?: boolean | Matieres$ExercicesArgs<ExtArgs>
    _count?: boolean | MatieresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatieresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | ClassesDefaultArgs<ExtArgs>
  }
  export type MatieresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | ClassesDefaultArgs<ExtArgs>
  }

  export type $MatieresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matieres"
    objects: {
      classes: Prisma.$ClassesPayload<ExtArgs>
      Lecons: Prisma.$LeconsPayload<ExtArgs>[]
      Exercices: Prisma.$ExercicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      classesId: string
      pointsTotalMatiere: number | null
      pointsSeuilMatiere: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matieres"]>
    composites: {}
  }

  type MatieresGetPayload<S extends boolean | null | undefined | MatieresDefaultArgs> = $Result.GetResult<Prisma.$MatieresPayload, S>

  type MatieresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatieresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatieresCountAggregateInputType | true
    }

  export interface MatieresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matieres'], meta: { name: 'Matieres' } }
    /**
     * Find zero or one Matieres that matches the filter.
     * @param {MatieresFindUniqueArgs} args - Arguments to find a Matieres
     * @example
     * // Get one Matieres
     * const matieres = await prisma.matieres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatieresFindUniqueArgs>(args: SelectSubset<T, MatieresFindUniqueArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matieres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatieresFindUniqueOrThrowArgs} args - Arguments to find a Matieres
     * @example
     * // Get one Matieres
     * const matieres = await prisma.matieres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatieresFindUniqueOrThrowArgs>(args: SelectSubset<T, MatieresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matieres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatieresFindFirstArgs} args - Arguments to find a Matieres
     * @example
     * // Get one Matieres
     * const matieres = await prisma.matieres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatieresFindFirstArgs>(args?: SelectSubset<T, MatieresFindFirstArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matieres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatieresFindFirstOrThrowArgs} args - Arguments to find a Matieres
     * @example
     * // Get one Matieres
     * const matieres = await prisma.matieres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatieresFindFirstOrThrowArgs>(args?: SelectSubset<T, MatieresFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matieres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatieresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matieres
     * const matieres = await prisma.matieres.findMany()
     * 
     * // Get first 10 Matieres
     * const matieres = await prisma.matieres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matieresWithIdOnly = await prisma.matieres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatieresFindManyArgs>(args?: SelectSubset<T, MatieresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matieres.
     * @param {MatieresCreateArgs} args - Arguments to create a Matieres.
     * @example
     * // Create one Matieres
     * const Matieres = await prisma.matieres.create({
     *   data: {
     *     // ... data to create a Matieres
     *   }
     * })
     * 
     */
    create<T extends MatieresCreateArgs>(args: SelectSubset<T, MatieresCreateArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matieres.
     * @param {MatieresCreateManyArgs} args - Arguments to create many Matieres.
     * @example
     * // Create many Matieres
     * const matieres = await prisma.matieres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatieresCreateManyArgs>(args?: SelectSubset<T, MatieresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matieres and returns the data saved in the database.
     * @param {MatieresCreateManyAndReturnArgs} args - Arguments to create many Matieres.
     * @example
     * // Create many Matieres
     * const matieres = await prisma.matieres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matieres and only return the `id`
     * const matieresWithIdOnly = await prisma.matieres.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatieresCreateManyAndReturnArgs>(args?: SelectSubset<T, MatieresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matieres.
     * @param {MatieresDeleteArgs} args - Arguments to delete one Matieres.
     * @example
     * // Delete one Matieres
     * const Matieres = await prisma.matieres.delete({
     *   where: {
     *     // ... filter to delete one Matieres
     *   }
     * })
     * 
     */
    delete<T extends MatieresDeleteArgs>(args: SelectSubset<T, MatieresDeleteArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matieres.
     * @param {MatieresUpdateArgs} args - Arguments to update one Matieres.
     * @example
     * // Update one Matieres
     * const matieres = await prisma.matieres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatieresUpdateArgs>(args: SelectSubset<T, MatieresUpdateArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matieres.
     * @param {MatieresDeleteManyArgs} args - Arguments to filter Matieres to delete.
     * @example
     * // Delete a few Matieres
     * const { count } = await prisma.matieres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatieresDeleteManyArgs>(args?: SelectSubset<T, MatieresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatieresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matieres
     * const matieres = await prisma.matieres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatieresUpdateManyArgs>(args: SelectSubset<T, MatieresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matieres and returns the data updated in the database.
     * @param {MatieresUpdateManyAndReturnArgs} args - Arguments to update many Matieres.
     * @example
     * // Update many Matieres
     * const matieres = await prisma.matieres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matieres and only return the `id`
     * const matieresWithIdOnly = await prisma.matieres.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatieresUpdateManyAndReturnArgs>(args: SelectSubset<T, MatieresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matieres.
     * @param {MatieresUpsertArgs} args - Arguments to update or create a Matieres.
     * @example
     * // Update or create a Matieres
     * const matieres = await prisma.matieres.upsert({
     *   create: {
     *     // ... data to create a Matieres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matieres we want to update
     *   }
     * })
     */
    upsert<T extends MatieresUpsertArgs>(args: SelectSubset<T, MatieresUpsertArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatieresCountArgs} args - Arguments to filter Matieres to count.
     * @example
     * // Count the number of Matieres
     * const count = await prisma.matieres.count({
     *   where: {
     *     // ... the filter for the Matieres we want to count
     *   }
     * })
    **/
    count<T extends MatieresCountArgs>(
      args?: Subset<T, MatieresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatieresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatieresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatieresAggregateArgs>(args: Subset<T, MatieresAggregateArgs>): Prisma.PrismaPromise<GetMatieresAggregateType<T>>

    /**
     * Group by Matieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatieresGroupByArgs} args - Group by arguments.
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
      T extends MatieresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatieresGroupByArgs['orderBy'] }
        : { orderBy?: MatieresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatieresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatieresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matieres model
   */
  readonly fields: MatieresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matieres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatieresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends ClassesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassesDefaultArgs<ExtArgs>>): Prisma__ClassesClient<$Result.GetResult<Prisma.$ClassesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Lecons<T extends Matieres$LeconsArgs<ExtArgs> = {}>(args?: Subset<T, Matieres$LeconsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Exercices<T extends Matieres$ExercicesArgs<ExtArgs> = {}>(args?: Subset<T, Matieres$ExercicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Matieres model
   */
  interface MatieresFieldRefs {
    readonly id: FieldRef<"Matieres", 'String'>
    readonly nom: FieldRef<"Matieres", 'String'>
    readonly description: FieldRef<"Matieres", 'String'>
    readonly classesId: FieldRef<"Matieres", 'String'>
    readonly pointsTotalMatiere: FieldRef<"Matieres", 'Int'>
    readonly pointsSeuilMatiere: FieldRef<"Matieres", 'Int'>
    readonly createdAt: FieldRef<"Matieres", 'DateTime'>
    readonly updatedAt: FieldRef<"Matieres", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Matieres findUnique
   */
  export type MatieresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    /**
     * Filter, which Matieres to fetch.
     */
    where: MatieresWhereUniqueInput
  }

  /**
   * Matieres findUniqueOrThrow
   */
  export type MatieresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    /**
     * Filter, which Matieres to fetch.
     */
    where: MatieresWhereUniqueInput
  }

  /**
   * Matieres findFirst
   */
  export type MatieresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    /**
     * Filter, which Matieres to fetch.
     */
    where?: MatieresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatieresOrderByWithRelationInput | MatieresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matieres.
     */
    cursor?: MatieresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matieres.
     */
    distinct?: MatieresScalarFieldEnum | MatieresScalarFieldEnum[]
  }

  /**
   * Matieres findFirstOrThrow
   */
  export type MatieresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    /**
     * Filter, which Matieres to fetch.
     */
    where?: MatieresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatieresOrderByWithRelationInput | MatieresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matieres.
     */
    cursor?: MatieresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matieres.
     */
    distinct?: MatieresScalarFieldEnum | MatieresScalarFieldEnum[]
  }

  /**
   * Matieres findMany
   */
  export type MatieresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    /**
     * Filter, which Matieres to fetch.
     */
    where?: MatieresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matieres to fetch.
     */
    orderBy?: MatieresOrderByWithRelationInput | MatieresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matieres.
     */
    cursor?: MatieresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matieres.
     */
    skip?: number
    distinct?: MatieresScalarFieldEnum | MatieresScalarFieldEnum[]
  }

  /**
   * Matieres create
   */
  export type MatieresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    /**
     * The data needed to create a Matieres.
     */
    data: XOR<MatieresCreateInput, MatieresUncheckedCreateInput>
  }

  /**
   * Matieres createMany
   */
  export type MatieresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matieres.
     */
    data: MatieresCreateManyInput | MatieresCreateManyInput[]
  }

  /**
   * Matieres createManyAndReturn
   */
  export type MatieresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * The data used to create many Matieres.
     */
    data: MatieresCreateManyInput | MatieresCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matieres update
   */
  export type MatieresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    /**
     * The data needed to update a Matieres.
     */
    data: XOR<MatieresUpdateInput, MatieresUncheckedUpdateInput>
    /**
     * Choose, which Matieres to update.
     */
    where: MatieresWhereUniqueInput
  }

  /**
   * Matieres updateMany
   */
  export type MatieresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matieres.
     */
    data: XOR<MatieresUpdateManyMutationInput, MatieresUncheckedUpdateManyInput>
    /**
     * Filter which Matieres to update
     */
    where?: MatieresWhereInput
    /**
     * Limit how many Matieres to update.
     */
    limit?: number
  }

  /**
   * Matieres updateManyAndReturn
   */
  export type MatieresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * The data used to update Matieres.
     */
    data: XOR<MatieresUpdateManyMutationInput, MatieresUncheckedUpdateManyInput>
    /**
     * Filter which Matieres to update
     */
    where?: MatieresWhereInput
    /**
     * Limit how many Matieres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matieres upsert
   */
  export type MatieresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    /**
     * The filter to search for the Matieres to update in case it exists.
     */
    where: MatieresWhereUniqueInput
    /**
     * In case the Matieres found by the `where` argument doesn't exist, create a new Matieres with this data.
     */
    create: XOR<MatieresCreateInput, MatieresUncheckedCreateInput>
    /**
     * In case the Matieres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatieresUpdateInput, MatieresUncheckedUpdateInput>
  }

  /**
   * Matieres delete
   */
  export type MatieresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
    /**
     * Filter which Matieres to delete.
     */
    where: MatieresWhereUniqueInput
  }

  /**
   * Matieres deleteMany
   */
  export type MatieresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matieres to delete
     */
    where?: MatieresWhereInput
    /**
     * Limit how many Matieres to delete.
     */
    limit?: number
  }

  /**
   * Matieres.Lecons
   */
  export type Matieres$LeconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    where?: LeconsWhereInput
    orderBy?: LeconsOrderByWithRelationInput | LeconsOrderByWithRelationInput[]
    cursor?: LeconsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeconsScalarFieldEnum | LeconsScalarFieldEnum[]
  }

  /**
   * Matieres.Exercices
   */
  export type Matieres$ExercicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    where?: ExercicesWhereInput
    orderBy?: ExercicesOrderByWithRelationInput | ExercicesOrderByWithRelationInput[]
    cursor?: ExercicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExercicesScalarFieldEnum | ExercicesScalarFieldEnum[]
  }

  /**
   * Matieres without action
   */
  export type MatieresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matieres
     */
    select?: MatieresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matieres
     */
    omit?: MatieresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatieresInclude<ExtArgs> | null
  }


  /**
   * Model Lecons
   */

  export type AggregateLecons = {
    _count: LeconsCountAggregateOutputType | null
    _min: LeconsMinAggregateOutputType | null
    _max: LeconsMaxAggregateOutputType | null
  }

  export type LeconsMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    matieresId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeconsMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    matieresId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeconsCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    matieresId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeconsMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    matieresId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeconsMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    matieresId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeconsCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    matieresId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeconsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecons to aggregate.
     */
    where?: LeconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecons to fetch.
     */
    orderBy?: LeconsOrderByWithRelationInput | LeconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lecons
    **/
    _count?: true | LeconsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeconsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeconsMaxAggregateInputType
  }

  export type GetLeconsAggregateType<T extends LeconsAggregateArgs> = {
        [P in keyof T & keyof AggregateLecons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecons[P]>
      : GetScalarType<T[P], AggregateLecons[P]>
  }




  export type LeconsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeconsWhereInput
    orderBy?: LeconsOrderByWithAggregationInput | LeconsOrderByWithAggregationInput[]
    by: LeconsScalarFieldEnum[] | LeconsScalarFieldEnum
    having?: LeconsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeconsCountAggregateInputType | true
    _min?: LeconsMinAggregateInputType
    _max?: LeconsMaxAggregateInputType
  }

  export type LeconsGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    matieresId: string
    createdAt: Date
    updatedAt: Date
    _count: LeconsCountAggregateOutputType | null
    _min: LeconsMinAggregateOutputType | null
    _max: LeconsMaxAggregateOutputType | null
  }

  type GetLeconsGroupByPayload<T extends LeconsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeconsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeconsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeconsGroupByOutputType[P]>
            : GetScalarType<T[P], LeconsGroupByOutputType[P]>
        }
      >
    >


  export type LeconsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    matieresId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
    SousLecons?: boolean | Lecons$SousLeconsArgs<ExtArgs>
    LeconsUtilisateur?: boolean | Lecons$LeconsUtilisateurArgs<ExtArgs>
    Exercices?: boolean | Lecons$ExercicesArgs<ExtArgs>
    _count?: boolean | LeconsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecons"]>

  export type LeconsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    matieresId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecons"]>

  export type LeconsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    matieresId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecons"]>

  export type LeconsSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    matieresId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeconsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "matieresId" | "createdAt" | "updatedAt", ExtArgs["result"]["lecons"]>
  export type LeconsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
    SousLecons?: boolean | Lecons$SousLeconsArgs<ExtArgs>
    LeconsUtilisateur?: boolean | Lecons$LeconsUtilisateurArgs<ExtArgs>
    Exercices?: boolean | Lecons$ExercicesArgs<ExtArgs>
    _count?: boolean | LeconsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeconsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
  }
  export type LeconsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
  }

  export type $LeconsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lecons"
    objects: {
      matieres: Prisma.$MatieresPayload<ExtArgs>
      SousLecons: Prisma.$SousLeconsPayload<ExtArgs>[]
      LeconsUtilisateur: Prisma.$LeconsUtilisateurPayload<ExtArgs>[]
      Exercices: Prisma.$ExercicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      matieresId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lecons"]>
    composites: {}
  }

  type LeconsGetPayload<S extends boolean | null | undefined | LeconsDefaultArgs> = $Result.GetResult<Prisma.$LeconsPayload, S>

  type LeconsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeconsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeconsCountAggregateInputType | true
    }

  export interface LeconsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecons'], meta: { name: 'Lecons' } }
    /**
     * Find zero or one Lecons that matches the filter.
     * @param {LeconsFindUniqueArgs} args - Arguments to find a Lecons
     * @example
     * // Get one Lecons
     * const lecons = await prisma.lecons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeconsFindUniqueArgs>(args: SelectSubset<T, LeconsFindUniqueArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeconsFindUniqueOrThrowArgs} args - Arguments to find a Lecons
     * @example
     * // Get one Lecons
     * const lecons = await prisma.lecons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeconsFindUniqueOrThrowArgs>(args: SelectSubset<T, LeconsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsFindFirstArgs} args - Arguments to find a Lecons
     * @example
     * // Get one Lecons
     * const lecons = await prisma.lecons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeconsFindFirstArgs>(args?: SelectSubset<T, LeconsFindFirstArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsFindFirstOrThrowArgs} args - Arguments to find a Lecons
     * @example
     * // Get one Lecons
     * const lecons = await prisma.lecons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeconsFindFirstOrThrowArgs>(args?: SelectSubset<T, LeconsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lecons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecons
     * const lecons = await prisma.lecons.findMany()
     * 
     * // Get first 10 Lecons
     * const lecons = await prisma.lecons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leconsWithIdOnly = await prisma.lecons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeconsFindManyArgs>(args?: SelectSubset<T, LeconsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecons.
     * @param {LeconsCreateArgs} args - Arguments to create a Lecons.
     * @example
     * // Create one Lecons
     * const Lecons = await prisma.lecons.create({
     *   data: {
     *     // ... data to create a Lecons
     *   }
     * })
     * 
     */
    create<T extends LeconsCreateArgs>(args: SelectSubset<T, LeconsCreateArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lecons.
     * @param {LeconsCreateManyArgs} args - Arguments to create many Lecons.
     * @example
     * // Create many Lecons
     * const lecons = await prisma.lecons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeconsCreateManyArgs>(args?: SelectSubset<T, LeconsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lecons and returns the data saved in the database.
     * @param {LeconsCreateManyAndReturnArgs} args - Arguments to create many Lecons.
     * @example
     * // Create many Lecons
     * const lecons = await prisma.lecons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lecons and only return the `id`
     * const leconsWithIdOnly = await prisma.lecons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeconsCreateManyAndReturnArgs>(args?: SelectSubset<T, LeconsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lecons.
     * @param {LeconsDeleteArgs} args - Arguments to delete one Lecons.
     * @example
     * // Delete one Lecons
     * const Lecons = await prisma.lecons.delete({
     *   where: {
     *     // ... filter to delete one Lecons
     *   }
     * })
     * 
     */
    delete<T extends LeconsDeleteArgs>(args: SelectSubset<T, LeconsDeleteArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecons.
     * @param {LeconsUpdateArgs} args - Arguments to update one Lecons.
     * @example
     * // Update one Lecons
     * const lecons = await prisma.lecons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeconsUpdateArgs>(args: SelectSubset<T, LeconsUpdateArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lecons.
     * @param {LeconsDeleteManyArgs} args - Arguments to filter Lecons to delete.
     * @example
     * // Delete a few Lecons
     * const { count } = await prisma.lecons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeconsDeleteManyArgs>(args?: SelectSubset<T, LeconsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecons
     * const lecons = await prisma.lecons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeconsUpdateManyArgs>(args: SelectSubset<T, LeconsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecons and returns the data updated in the database.
     * @param {LeconsUpdateManyAndReturnArgs} args - Arguments to update many Lecons.
     * @example
     * // Update many Lecons
     * const lecons = await prisma.lecons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lecons and only return the `id`
     * const leconsWithIdOnly = await prisma.lecons.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeconsUpdateManyAndReturnArgs>(args: SelectSubset<T, LeconsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lecons.
     * @param {LeconsUpsertArgs} args - Arguments to update or create a Lecons.
     * @example
     * // Update or create a Lecons
     * const lecons = await prisma.lecons.upsert({
     *   create: {
     *     // ... data to create a Lecons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecons we want to update
     *   }
     * })
     */
    upsert<T extends LeconsUpsertArgs>(args: SelectSubset<T, LeconsUpsertArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsCountArgs} args - Arguments to filter Lecons to count.
     * @example
     * // Count the number of Lecons
     * const count = await prisma.lecons.count({
     *   where: {
     *     // ... the filter for the Lecons we want to count
     *   }
     * })
    **/
    count<T extends LeconsCountArgs>(
      args?: Subset<T, LeconsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeconsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeconsAggregateArgs>(args: Subset<T, LeconsAggregateArgs>): Prisma.PrismaPromise<GetLeconsAggregateType<T>>

    /**
     * Group by Lecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsGroupByArgs} args - Group by arguments.
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
      T extends LeconsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeconsGroupByArgs['orderBy'] }
        : { orderBy?: LeconsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeconsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeconsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lecons model
   */
  readonly fields: LeconsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeconsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matieres<T extends MatieresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatieresDefaultArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SousLecons<T extends Lecons$SousLeconsArgs<ExtArgs> = {}>(args?: Subset<T, Lecons$SousLeconsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LeconsUtilisateur<T extends Lecons$LeconsUtilisateurArgs<ExtArgs> = {}>(args?: Subset<T, Lecons$LeconsUtilisateurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Exercices<T extends Lecons$ExercicesArgs<ExtArgs> = {}>(args?: Subset<T, Lecons$ExercicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lecons model
   */
  interface LeconsFieldRefs {
    readonly id: FieldRef<"Lecons", 'String'>
    readonly nom: FieldRef<"Lecons", 'String'>
    readonly description: FieldRef<"Lecons", 'String'>
    readonly matieresId: FieldRef<"Lecons", 'String'>
    readonly createdAt: FieldRef<"Lecons", 'DateTime'>
    readonly updatedAt: FieldRef<"Lecons", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lecons findUnique
   */
  export type LeconsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    /**
     * Filter, which Lecons to fetch.
     */
    where: LeconsWhereUniqueInput
  }

  /**
   * Lecons findUniqueOrThrow
   */
  export type LeconsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    /**
     * Filter, which Lecons to fetch.
     */
    where: LeconsWhereUniqueInput
  }

  /**
   * Lecons findFirst
   */
  export type LeconsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    /**
     * Filter, which Lecons to fetch.
     */
    where?: LeconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecons to fetch.
     */
    orderBy?: LeconsOrderByWithRelationInput | LeconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecons.
     */
    cursor?: LeconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecons.
     */
    distinct?: LeconsScalarFieldEnum | LeconsScalarFieldEnum[]
  }

  /**
   * Lecons findFirstOrThrow
   */
  export type LeconsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    /**
     * Filter, which Lecons to fetch.
     */
    where?: LeconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecons to fetch.
     */
    orderBy?: LeconsOrderByWithRelationInput | LeconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecons.
     */
    cursor?: LeconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecons.
     */
    distinct?: LeconsScalarFieldEnum | LeconsScalarFieldEnum[]
  }

  /**
   * Lecons findMany
   */
  export type LeconsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    /**
     * Filter, which Lecons to fetch.
     */
    where?: LeconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecons to fetch.
     */
    orderBy?: LeconsOrderByWithRelationInput | LeconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lecons.
     */
    cursor?: LeconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecons.
     */
    skip?: number
    distinct?: LeconsScalarFieldEnum | LeconsScalarFieldEnum[]
  }

  /**
   * Lecons create
   */
  export type LeconsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    /**
     * The data needed to create a Lecons.
     */
    data: XOR<LeconsCreateInput, LeconsUncheckedCreateInput>
  }

  /**
   * Lecons createMany
   */
  export type LeconsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lecons.
     */
    data: LeconsCreateManyInput | LeconsCreateManyInput[]
  }

  /**
   * Lecons createManyAndReturn
   */
  export type LeconsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * The data used to create many Lecons.
     */
    data: LeconsCreateManyInput | LeconsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lecons update
   */
  export type LeconsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    /**
     * The data needed to update a Lecons.
     */
    data: XOR<LeconsUpdateInput, LeconsUncheckedUpdateInput>
    /**
     * Choose, which Lecons to update.
     */
    where: LeconsWhereUniqueInput
  }

  /**
   * Lecons updateMany
   */
  export type LeconsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lecons.
     */
    data: XOR<LeconsUpdateManyMutationInput, LeconsUncheckedUpdateManyInput>
    /**
     * Filter which Lecons to update
     */
    where?: LeconsWhereInput
    /**
     * Limit how many Lecons to update.
     */
    limit?: number
  }

  /**
   * Lecons updateManyAndReturn
   */
  export type LeconsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * The data used to update Lecons.
     */
    data: XOR<LeconsUpdateManyMutationInput, LeconsUncheckedUpdateManyInput>
    /**
     * Filter which Lecons to update
     */
    where?: LeconsWhereInput
    /**
     * Limit how many Lecons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lecons upsert
   */
  export type LeconsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    /**
     * The filter to search for the Lecons to update in case it exists.
     */
    where: LeconsWhereUniqueInput
    /**
     * In case the Lecons found by the `where` argument doesn't exist, create a new Lecons with this data.
     */
    create: XOR<LeconsCreateInput, LeconsUncheckedCreateInput>
    /**
     * In case the Lecons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeconsUpdateInput, LeconsUncheckedUpdateInput>
  }

  /**
   * Lecons delete
   */
  export type LeconsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    /**
     * Filter which Lecons to delete.
     */
    where: LeconsWhereUniqueInput
  }

  /**
   * Lecons deleteMany
   */
  export type LeconsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecons to delete
     */
    where?: LeconsWhereInput
    /**
     * Limit how many Lecons to delete.
     */
    limit?: number
  }

  /**
   * Lecons.SousLecons
   */
  export type Lecons$SousLeconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    where?: SousLeconsWhereInput
    orderBy?: SousLeconsOrderByWithRelationInput | SousLeconsOrderByWithRelationInput[]
    cursor?: SousLeconsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SousLeconsScalarFieldEnum | SousLeconsScalarFieldEnum[]
  }

  /**
   * Lecons.LeconsUtilisateur
   */
  export type Lecons$LeconsUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    where?: LeconsUtilisateurWhereInput
    orderBy?: LeconsUtilisateurOrderByWithRelationInput | LeconsUtilisateurOrderByWithRelationInput[]
    cursor?: LeconsUtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeconsUtilisateurScalarFieldEnum | LeconsUtilisateurScalarFieldEnum[]
  }

  /**
   * Lecons.Exercices
   */
  export type Lecons$ExercicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    where?: ExercicesWhereInput
    orderBy?: ExercicesOrderByWithRelationInput | ExercicesOrderByWithRelationInput[]
    cursor?: ExercicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExercicesScalarFieldEnum | ExercicesScalarFieldEnum[]
  }

  /**
   * Lecons without action
   */
  export type LeconsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
  }


  /**
   * Model SousLecons
   */

  export type AggregateSousLecons = {
    _count: SousLeconsCountAggregateOutputType | null
    _min: SousLeconsMinAggregateOutputType | null
    _max: SousLeconsMaxAggregateOutputType | null
  }

  export type SousLeconsMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    leconsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SousLeconsMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    leconsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SousLeconsCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    leconsId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SousLeconsMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    leconsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SousLeconsMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    leconsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SousLeconsCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    leconsId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SousLeconsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SousLecons to aggregate.
     */
    where?: SousLeconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SousLecons to fetch.
     */
    orderBy?: SousLeconsOrderByWithRelationInput | SousLeconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SousLeconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SousLecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SousLecons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SousLecons
    **/
    _count?: true | SousLeconsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SousLeconsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SousLeconsMaxAggregateInputType
  }

  export type GetSousLeconsAggregateType<T extends SousLeconsAggregateArgs> = {
        [P in keyof T & keyof AggregateSousLecons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSousLecons[P]>
      : GetScalarType<T[P], AggregateSousLecons[P]>
  }




  export type SousLeconsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SousLeconsWhereInput
    orderBy?: SousLeconsOrderByWithAggregationInput | SousLeconsOrderByWithAggregationInput[]
    by: SousLeconsScalarFieldEnum[] | SousLeconsScalarFieldEnum
    having?: SousLeconsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SousLeconsCountAggregateInputType | true
    _min?: SousLeconsMinAggregateInputType
    _max?: SousLeconsMaxAggregateInputType
  }

  export type SousLeconsGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    leconsId: string
    createdAt: Date
    updatedAt: Date
    _count: SousLeconsCountAggregateOutputType | null
    _min: SousLeconsMinAggregateOutputType | null
    _max: SousLeconsMaxAggregateOutputType | null
  }

  type GetSousLeconsGroupByPayload<T extends SousLeconsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SousLeconsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SousLeconsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SousLeconsGroupByOutputType[P]>
            : GetScalarType<T[P], SousLeconsGroupByOutputType[P]>
        }
      >
    >


  export type SousLeconsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    leconsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
    Exercices?: boolean | SousLecons$ExercicesArgs<ExtArgs>
    _count?: boolean | SousLeconsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sousLecons"]>

  export type SousLeconsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    leconsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sousLecons"]>

  export type SousLeconsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    leconsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sousLecons"]>

  export type SousLeconsSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    leconsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SousLeconsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "leconsId" | "createdAt" | "updatedAt", ExtArgs["result"]["sousLecons"]>
  export type SousLeconsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
    Exercices?: boolean | SousLecons$ExercicesArgs<ExtArgs>
    _count?: boolean | SousLeconsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SousLeconsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
  }
  export type SousLeconsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
  }

  export type $SousLeconsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SousLecons"
    objects: {
      lecons: Prisma.$LeconsPayload<ExtArgs>
      Exercices: Prisma.$ExercicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      leconsId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sousLecons"]>
    composites: {}
  }

  type SousLeconsGetPayload<S extends boolean | null | undefined | SousLeconsDefaultArgs> = $Result.GetResult<Prisma.$SousLeconsPayload, S>

  type SousLeconsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SousLeconsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SousLeconsCountAggregateInputType | true
    }

  export interface SousLeconsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SousLecons'], meta: { name: 'SousLecons' } }
    /**
     * Find zero or one SousLecons that matches the filter.
     * @param {SousLeconsFindUniqueArgs} args - Arguments to find a SousLecons
     * @example
     * // Get one SousLecons
     * const sousLecons = await prisma.sousLecons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SousLeconsFindUniqueArgs>(args: SelectSubset<T, SousLeconsFindUniqueArgs<ExtArgs>>): Prisma__SousLeconsClient<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SousLecons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SousLeconsFindUniqueOrThrowArgs} args - Arguments to find a SousLecons
     * @example
     * // Get one SousLecons
     * const sousLecons = await prisma.sousLecons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SousLeconsFindUniqueOrThrowArgs>(args: SelectSubset<T, SousLeconsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SousLeconsClient<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SousLecons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SousLeconsFindFirstArgs} args - Arguments to find a SousLecons
     * @example
     * // Get one SousLecons
     * const sousLecons = await prisma.sousLecons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SousLeconsFindFirstArgs>(args?: SelectSubset<T, SousLeconsFindFirstArgs<ExtArgs>>): Prisma__SousLeconsClient<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SousLecons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SousLeconsFindFirstOrThrowArgs} args - Arguments to find a SousLecons
     * @example
     * // Get one SousLecons
     * const sousLecons = await prisma.sousLecons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SousLeconsFindFirstOrThrowArgs>(args?: SelectSubset<T, SousLeconsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SousLeconsClient<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SousLecons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SousLeconsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SousLecons
     * const sousLecons = await prisma.sousLecons.findMany()
     * 
     * // Get first 10 SousLecons
     * const sousLecons = await prisma.sousLecons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sousLeconsWithIdOnly = await prisma.sousLecons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SousLeconsFindManyArgs>(args?: SelectSubset<T, SousLeconsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SousLecons.
     * @param {SousLeconsCreateArgs} args - Arguments to create a SousLecons.
     * @example
     * // Create one SousLecons
     * const SousLecons = await prisma.sousLecons.create({
     *   data: {
     *     // ... data to create a SousLecons
     *   }
     * })
     * 
     */
    create<T extends SousLeconsCreateArgs>(args: SelectSubset<T, SousLeconsCreateArgs<ExtArgs>>): Prisma__SousLeconsClient<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SousLecons.
     * @param {SousLeconsCreateManyArgs} args - Arguments to create many SousLecons.
     * @example
     * // Create many SousLecons
     * const sousLecons = await prisma.sousLecons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SousLeconsCreateManyArgs>(args?: SelectSubset<T, SousLeconsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SousLecons and returns the data saved in the database.
     * @param {SousLeconsCreateManyAndReturnArgs} args - Arguments to create many SousLecons.
     * @example
     * // Create many SousLecons
     * const sousLecons = await prisma.sousLecons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SousLecons and only return the `id`
     * const sousLeconsWithIdOnly = await prisma.sousLecons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SousLeconsCreateManyAndReturnArgs>(args?: SelectSubset<T, SousLeconsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SousLecons.
     * @param {SousLeconsDeleteArgs} args - Arguments to delete one SousLecons.
     * @example
     * // Delete one SousLecons
     * const SousLecons = await prisma.sousLecons.delete({
     *   where: {
     *     // ... filter to delete one SousLecons
     *   }
     * })
     * 
     */
    delete<T extends SousLeconsDeleteArgs>(args: SelectSubset<T, SousLeconsDeleteArgs<ExtArgs>>): Prisma__SousLeconsClient<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SousLecons.
     * @param {SousLeconsUpdateArgs} args - Arguments to update one SousLecons.
     * @example
     * // Update one SousLecons
     * const sousLecons = await prisma.sousLecons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SousLeconsUpdateArgs>(args: SelectSubset<T, SousLeconsUpdateArgs<ExtArgs>>): Prisma__SousLeconsClient<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SousLecons.
     * @param {SousLeconsDeleteManyArgs} args - Arguments to filter SousLecons to delete.
     * @example
     * // Delete a few SousLecons
     * const { count } = await prisma.sousLecons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SousLeconsDeleteManyArgs>(args?: SelectSubset<T, SousLeconsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SousLecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SousLeconsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SousLecons
     * const sousLecons = await prisma.sousLecons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SousLeconsUpdateManyArgs>(args: SelectSubset<T, SousLeconsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SousLecons and returns the data updated in the database.
     * @param {SousLeconsUpdateManyAndReturnArgs} args - Arguments to update many SousLecons.
     * @example
     * // Update many SousLecons
     * const sousLecons = await prisma.sousLecons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SousLecons and only return the `id`
     * const sousLeconsWithIdOnly = await prisma.sousLecons.updateManyAndReturn({
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
    updateManyAndReturn<T extends SousLeconsUpdateManyAndReturnArgs>(args: SelectSubset<T, SousLeconsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SousLecons.
     * @param {SousLeconsUpsertArgs} args - Arguments to update or create a SousLecons.
     * @example
     * // Update or create a SousLecons
     * const sousLecons = await prisma.sousLecons.upsert({
     *   create: {
     *     // ... data to create a SousLecons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SousLecons we want to update
     *   }
     * })
     */
    upsert<T extends SousLeconsUpsertArgs>(args: SelectSubset<T, SousLeconsUpsertArgs<ExtArgs>>): Prisma__SousLeconsClient<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SousLecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SousLeconsCountArgs} args - Arguments to filter SousLecons to count.
     * @example
     * // Count the number of SousLecons
     * const count = await prisma.sousLecons.count({
     *   where: {
     *     // ... the filter for the SousLecons we want to count
     *   }
     * })
    **/
    count<T extends SousLeconsCountArgs>(
      args?: Subset<T, SousLeconsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SousLeconsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SousLecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SousLeconsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SousLeconsAggregateArgs>(args: Subset<T, SousLeconsAggregateArgs>): Prisma.PrismaPromise<GetSousLeconsAggregateType<T>>

    /**
     * Group by SousLecons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SousLeconsGroupByArgs} args - Group by arguments.
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
      T extends SousLeconsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SousLeconsGroupByArgs['orderBy'] }
        : { orderBy?: SousLeconsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SousLeconsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSousLeconsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SousLecons model
   */
  readonly fields: SousLeconsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SousLecons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SousLeconsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecons<T extends LeconsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeconsDefaultArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Exercices<T extends SousLecons$ExercicesArgs<ExtArgs> = {}>(args?: Subset<T, SousLecons$ExercicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SousLecons model
   */
  interface SousLeconsFieldRefs {
    readonly id: FieldRef<"SousLecons", 'String'>
    readonly nom: FieldRef<"SousLecons", 'String'>
    readonly description: FieldRef<"SousLecons", 'String'>
    readonly leconsId: FieldRef<"SousLecons", 'String'>
    readonly createdAt: FieldRef<"SousLecons", 'DateTime'>
    readonly updatedAt: FieldRef<"SousLecons", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SousLecons findUnique
   */
  export type SousLeconsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    /**
     * Filter, which SousLecons to fetch.
     */
    where: SousLeconsWhereUniqueInput
  }

  /**
   * SousLecons findUniqueOrThrow
   */
  export type SousLeconsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    /**
     * Filter, which SousLecons to fetch.
     */
    where: SousLeconsWhereUniqueInput
  }

  /**
   * SousLecons findFirst
   */
  export type SousLeconsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    /**
     * Filter, which SousLecons to fetch.
     */
    where?: SousLeconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SousLecons to fetch.
     */
    orderBy?: SousLeconsOrderByWithRelationInput | SousLeconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SousLecons.
     */
    cursor?: SousLeconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SousLecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SousLecons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SousLecons.
     */
    distinct?: SousLeconsScalarFieldEnum | SousLeconsScalarFieldEnum[]
  }

  /**
   * SousLecons findFirstOrThrow
   */
  export type SousLeconsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    /**
     * Filter, which SousLecons to fetch.
     */
    where?: SousLeconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SousLecons to fetch.
     */
    orderBy?: SousLeconsOrderByWithRelationInput | SousLeconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SousLecons.
     */
    cursor?: SousLeconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SousLecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SousLecons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SousLecons.
     */
    distinct?: SousLeconsScalarFieldEnum | SousLeconsScalarFieldEnum[]
  }

  /**
   * SousLecons findMany
   */
  export type SousLeconsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    /**
     * Filter, which SousLecons to fetch.
     */
    where?: SousLeconsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SousLecons to fetch.
     */
    orderBy?: SousLeconsOrderByWithRelationInput | SousLeconsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SousLecons.
     */
    cursor?: SousLeconsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SousLecons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SousLecons.
     */
    skip?: number
    distinct?: SousLeconsScalarFieldEnum | SousLeconsScalarFieldEnum[]
  }

  /**
   * SousLecons create
   */
  export type SousLeconsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    /**
     * The data needed to create a SousLecons.
     */
    data: XOR<SousLeconsCreateInput, SousLeconsUncheckedCreateInput>
  }

  /**
   * SousLecons createMany
   */
  export type SousLeconsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SousLecons.
     */
    data: SousLeconsCreateManyInput | SousLeconsCreateManyInput[]
  }

  /**
   * SousLecons createManyAndReturn
   */
  export type SousLeconsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * The data used to create many SousLecons.
     */
    data: SousLeconsCreateManyInput | SousLeconsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SousLecons update
   */
  export type SousLeconsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    /**
     * The data needed to update a SousLecons.
     */
    data: XOR<SousLeconsUpdateInput, SousLeconsUncheckedUpdateInput>
    /**
     * Choose, which SousLecons to update.
     */
    where: SousLeconsWhereUniqueInput
  }

  /**
   * SousLecons updateMany
   */
  export type SousLeconsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SousLecons.
     */
    data: XOR<SousLeconsUpdateManyMutationInput, SousLeconsUncheckedUpdateManyInput>
    /**
     * Filter which SousLecons to update
     */
    where?: SousLeconsWhereInput
    /**
     * Limit how many SousLecons to update.
     */
    limit?: number
  }

  /**
   * SousLecons updateManyAndReturn
   */
  export type SousLeconsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * The data used to update SousLecons.
     */
    data: XOR<SousLeconsUpdateManyMutationInput, SousLeconsUncheckedUpdateManyInput>
    /**
     * Filter which SousLecons to update
     */
    where?: SousLeconsWhereInput
    /**
     * Limit how many SousLecons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SousLecons upsert
   */
  export type SousLeconsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    /**
     * The filter to search for the SousLecons to update in case it exists.
     */
    where: SousLeconsWhereUniqueInput
    /**
     * In case the SousLecons found by the `where` argument doesn't exist, create a new SousLecons with this data.
     */
    create: XOR<SousLeconsCreateInput, SousLeconsUncheckedCreateInput>
    /**
     * In case the SousLecons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SousLeconsUpdateInput, SousLeconsUncheckedUpdateInput>
  }

  /**
   * SousLecons delete
   */
  export type SousLeconsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    /**
     * Filter which SousLecons to delete.
     */
    where: SousLeconsWhereUniqueInput
  }

  /**
   * SousLecons deleteMany
   */
  export type SousLeconsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SousLecons to delete
     */
    where?: SousLeconsWhereInput
    /**
     * Limit how many SousLecons to delete.
     */
    limit?: number
  }

  /**
   * SousLecons.Exercices
   */
  export type SousLecons$ExercicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    where?: ExercicesWhereInput
    orderBy?: ExercicesOrderByWithRelationInput | ExercicesOrderByWithRelationInput[]
    cursor?: ExercicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExercicesScalarFieldEnum | ExercicesScalarFieldEnum[]
  }

  /**
   * SousLecons without action
   */
  export type SousLeconsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
  }


  /**
   * Model Exercices
   */

  export type AggregateExercices = {
    _count: ExercicesCountAggregateOutputType | null
    _min: ExercicesMinAggregateOutputType | null
    _max: ExercicesMaxAggregateOutputType | null
  }

  export type ExercicesMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    matieresId: string | null
    sousLeconsId: string | null
    leconId: string | null
    typesExercice: $Enums.TypesExercice | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExercicesMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    matieresId: string | null
    sousLeconsId: string | null
    leconId: string | null
    typesExercice: $Enums.TypesExercice | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExercicesCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    matieresId: number
    sousLeconsId: number
    leconId: number
    typesExercice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExercicesMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    matieresId?: true
    sousLeconsId?: true
    leconId?: true
    typesExercice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExercicesMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    matieresId?: true
    sousLeconsId?: true
    leconId?: true
    typesExercice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExercicesCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    matieresId?: true
    sousLeconsId?: true
    leconId?: true
    typesExercice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExercicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercices to aggregate.
     */
    where?: ExercicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercices to fetch.
     */
    orderBy?: ExercicesOrderByWithRelationInput | ExercicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExercicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercices
    **/
    _count?: true | ExercicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExercicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExercicesMaxAggregateInputType
  }

  export type GetExercicesAggregateType<T extends ExercicesAggregateArgs> = {
        [P in keyof T & keyof AggregateExercices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercices[P]>
      : GetScalarType<T[P], AggregateExercices[P]>
  }




  export type ExercicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExercicesWhereInput
    orderBy?: ExercicesOrderByWithAggregationInput | ExercicesOrderByWithAggregationInput[]
    by: ExercicesScalarFieldEnum[] | ExercicesScalarFieldEnum
    having?: ExercicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExercicesCountAggregateInputType | true
    _min?: ExercicesMinAggregateInputType
    _max?: ExercicesMaxAggregateInputType
  }

  export type ExercicesGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    matieresId: string
    sousLeconsId: string | null
    leconId: string | null
    typesExercice: $Enums.TypesExercice
    createdAt: Date
    updatedAt: Date
    _count: ExercicesCountAggregateOutputType | null
    _min: ExercicesMinAggregateOutputType | null
    _max: ExercicesMaxAggregateOutputType | null
  }

  type GetExercicesGroupByPayload<T extends ExercicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExercicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExercicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExercicesGroupByOutputType[P]>
            : GetScalarType<T[P], ExercicesGroupByOutputType[P]>
        }
      >
    >


  export type ExercicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    matieresId?: boolean
    sousLeconsId?: boolean
    leconId?: boolean
    typesExercice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sousLecons?: boolean | Exercices$sousLeconsArgs<ExtArgs>
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
    lecons?: boolean | Exercices$leconsArgs<ExtArgs>
    Reponses?: boolean | Exercices$ReponsesArgs<ExtArgs>
    OptionsQCM?: boolean | Exercices$OptionsQCMArgs<ExtArgs>
    _count?: boolean | ExercicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercices"]>

  export type ExercicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    matieresId?: boolean
    sousLeconsId?: boolean
    leconId?: boolean
    typesExercice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sousLecons?: boolean | Exercices$sousLeconsArgs<ExtArgs>
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
    lecons?: boolean | Exercices$leconsArgs<ExtArgs>
  }, ExtArgs["result"]["exercices"]>

  export type ExercicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    matieresId?: boolean
    sousLeconsId?: boolean
    leconId?: boolean
    typesExercice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sousLecons?: boolean | Exercices$sousLeconsArgs<ExtArgs>
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
    lecons?: boolean | Exercices$leconsArgs<ExtArgs>
  }, ExtArgs["result"]["exercices"]>

  export type ExercicesSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    matieresId?: boolean
    sousLeconsId?: boolean
    leconId?: boolean
    typesExercice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExercicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "matieresId" | "sousLeconsId" | "leconId" | "typesExercice" | "createdAt" | "updatedAt", ExtArgs["result"]["exercices"]>
  export type ExercicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sousLecons?: boolean | Exercices$sousLeconsArgs<ExtArgs>
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
    lecons?: boolean | Exercices$leconsArgs<ExtArgs>
    Reponses?: boolean | Exercices$ReponsesArgs<ExtArgs>
    OptionsQCM?: boolean | Exercices$OptionsQCMArgs<ExtArgs>
    _count?: boolean | ExercicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExercicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sousLecons?: boolean | Exercices$sousLeconsArgs<ExtArgs>
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
    lecons?: boolean | Exercices$leconsArgs<ExtArgs>
  }
  export type ExercicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sousLecons?: boolean | Exercices$sousLeconsArgs<ExtArgs>
    matieres?: boolean | MatieresDefaultArgs<ExtArgs>
    lecons?: boolean | Exercices$leconsArgs<ExtArgs>
  }

  export type $ExercicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercices"
    objects: {
      sousLecons: Prisma.$SousLeconsPayload<ExtArgs> | null
      matieres: Prisma.$MatieresPayload<ExtArgs>
      lecons: Prisma.$LeconsPayload<ExtArgs> | null
      Reponses: Prisma.$ReponsesPayload<ExtArgs>[]
      OptionsQCM: Prisma.$OptionsQCMPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      matieresId: string
      sousLeconsId: string | null
      leconId: string | null
      typesExercice: $Enums.TypesExercice
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exercices"]>
    composites: {}
  }

  type ExercicesGetPayload<S extends boolean | null | undefined | ExercicesDefaultArgs> = $Result.GetResult<Prisma.$ExercicesPayload, S>

  type ExercicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExercicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExercicesCountAggregateInputType | true
    }

  export interface ExercicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercices'], meta: { name: 'Exercices' } }
    /**
     * Find zero or one Exercices that matches the filter.
     * @param {ExercicesFindUniqueArgs} args - Arguments to find a Exercices
     * @example
     * // Get one Exercices
     * const exercices = await prisma.exercices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExercicesFindUniqueArgs>(args: SelectSubset<T, ExercicesFindUniqueArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExercicesFindUniqueOrThrowArgs} args - Arguments to find a Exercices
     * @example
     * // Get one Exercices
     * const exercices = await prisma.exercices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExercicesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExercicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercicesFindFirstArgs} args - Arguments to find a Exercices
     * @example
     * // Get one Exercices
     * const exercices = await prisma.exercices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExercicesFindFirstArgs>(args?: SelectSubset<T, ExercicesFindFirstArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercicesFindFirstOrThrowArgs} args - Arguments to find a Exercices
     * @example
     * // Get one Exercices
     * const exercices = await prisma.exercices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExercicesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExercicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercices
     * const exercices = await prisma.exercices.findMany()
     * 
     * // Get first 10 Exercices
     * const exercices = await prisma.exercices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exercicesWithIdOnly = await prisma.exercices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExercicesFindManyArgs>(args?: SelectSubset<T, ExercicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercices.
     * @param {ExercicesCreateArgs} args - Arguments to create a Exercices.
     * @example
     * // Create one Exercices
     * const Exercices = await prisma.exercices.create({
     *   data: {
     *     // ... data to create a Exercices
     *   }
     * })
     * 
     */
    create<T extends ExercicesCreateArgs>(args: SelectSubset<T, ExercicesCreateArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercices.
     * @param {ExercicesCreateManyArgs} args - Arguments to create many Exercices.
     * @example
     * // Create many Exercices
     * const exercices = await prisma.exercices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExercicesCreateManyArgs>(args?: SelectSubset<T, ExercicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercices and returns the data saved in the database.
     * @param {ExercicesCreateManyAndReturnArgs} args - Arguments to create many Exercices.
     * @example
     * // Create many Exercices
     * const exercices = await prisma.exercices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercices and only return the `id`
     * const exercicesWithIdOnly = await prisma.exercices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExercicesCreateManyAndReturnArgs>(args?: SelectSubset<T, ExercicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercices.
     * @param {ExercicesDeleteArgs} args - Arguments to delete one Exercices.
     * @example
     * // Delete one Exercices
     * const Exercices = await prisma.exercices.delete({
     *   where: {
     *     // ... filter to delete one Exercices
     *   }
     * })
     * 
     */
    delete<T extends ExercicesDeleteArgs>(args: SelectSubset<T, ExercicesDeleteArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercices.
     * @param {ExercicesUpdateArgs} args - Arguments to update one Exercices.
     * @example
     * // Update one Exercices
     * const exercices = await prisma.exercices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExercicesUpdateArgs>(args: SelectSubset<T, ExercicesUpdateArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercices.
     * @param {ExercicesDeleteManyArgs} args - Arguments to filter Exercices to delete.
     * @example
     * // Delete a few Exercices
     * const { count } = await prisma.exercices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExercicesDeleteManyArgs>(args?: SelectSubset<T, ExercicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercices
     * const exercices = await prisma.exercices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExercicesUpdateManyArgs>(args: SelectSubset<T, ExercicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercices and returns the data updated in the database.
     * @param {ExercicesUpdateManyAndReturnArgs} args - Arguments to update many Exercices.
     * @example
     * // Update many Exercices
     * const exercices = await prisma.exercices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercices and only return the `id`
     * const exercicesWithIdOnly = await prisma.exercices.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExercicesUpdateManyAndReturnArgs>(args: SelectSubset<T, ExercicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercices.
     * @param {ExercicesUpsertArgs} args - Arguments to update or create a Exercices.
     * @example
     * // Update or create a Exercices
     * const exercices = await prisma.exercices.upsert({
     *   create: {
     *     // ... data to create a Exercices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercices we want to update
     *   }
     * })
     */
    upsert<T extends ExercicesUpsertArgs>(args: SelectSubset<T, ExercicesUpsertArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercicesCountArgs} args - Arguments to filter Exercices to count.
     * @example
     * // Count the number of Exercices
     * const count = await prisma.exercices.count({
     *   where: {
     *     // ... the filter for the Exercices we want to count
     *   }
     * })
    **/
    count<T extends ExercicesCountArgs>(
      args?: Subset<T, ExercicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExercicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExercicesAggregateArgs>(args: Subset<T, ExercicesAggregateArgs>): Prisma.PrismaPromise<GetExercicesAggregateType<T>>

    /**
     * Group by Exercices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercicesGroupByArgs} args - Group by arguments.
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
      T extends ExercicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExercicesGroupByArgs['orderBy'] }
        : { orderBy?: ExercicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExercicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercices model
   */
  readonly fields: ExercicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExercicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sousLecons<T extends Exercices$sousLeconsArgs<ExtArgs> = {}>(args?: Subset<T, Exercices$sousLeconsArgs<ExtArgs>>): Prisma__SousLeconsClient<$Result.GetResult<Prisma.$SousLeconsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    matieres<T extends MatieresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatieresDefaultArgs<ExtArgs>>): Prisma__MatieresClient<$Result.GetResult<Prisma.$MatieresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecons<T extends Exercices$leconsArgs<ExtArgs> = {}>(args?: Subset<T, Exercices$leconsArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Reponses<T extends Exercices$ReponsesArgs<ExtArgs> = {}>(args?: Subset<T, Exercices$ReponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OptionsQCM<T extends Exercices$OptionsQCMArgs<ExtArgs> = {}>(args?: Subset<T, Exercices$OptionsQCMArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercices model
   */
  interface ExercicesFieldRefs {
    readonly id: FieldRef<"Exercices", 'String'>
    readonly nom: FieldRef<"Exercices", 'String'>
    readonly description: FieldRef<"Exercices", 'String'>
    readonly matieresId: FieldRef<"Exercices", 'String'>
    readonly sousLeconsId: FieldRef<"Exercices", 'String'>
    readonly leconId: FieldRef<"Exercices", 'String'>
    readonly typesExercice: FieldRef<"Exercices", 'TypesExercice'>
    readonly createdAt: FieldRef<"Exercices", 'DateTime'>
    readonly updatedAt: FieldRef<"Exercices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercices findUnique
   */
  export type ExercicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    /**
     * Filter, which Exercices to fetch.
     */
    where: ExercicesWhereUniqueInput
  }

  /**
   * Exercices findUniqueOrThrow
   */
  export type ExercicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    /**
     * Filter, which Exercices to fetch.
     */
    where: ExercicesWhereUniqueInput
  }

  /**
   * Exercices findFirst
   */
  export type ExercicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    /**
     * Filter, which Exercices to fetch.
     */
    where?: ExercicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercices to fetch.
     */
    orderBy?: ExercicesOrderByWithRelationInput | ExercicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercices.
     */
    cursor?: ExercicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercices.
     */
    distinct?: ExercicesScalarFieldEnum | ExercicesScalarFieldEnum[]
  }

  /**
   * Exercices findFirstOrThrow
   */
  export type ExercicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    /**
     * Filter, which Exercices to fetch.
     */
    where?: ExercicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercices to fetch.
     */
    orderBy?: ExercicesOrderByWithRelationInput | ExercicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercices.
     */
    cursor?: ExercicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercices.
     */
    distinct?: ExercicesScalarFieldEnum | ExercicesScalarFieldEnum[]
  }

  /**
   * Exercices findMany
   */
  export type ExercicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    /**
     * Filter, which Exercices to fetch.
     */
    where?: ExercicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercices to fetch.
     */
    orderBy?: ExercicesOrderByWithRelationInput | ExercicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercices.
     */
    cursor?: ExercicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercices.
     */
    skip?: number
    distinct?: ExercicesScalarFieldEnum | ExercicesScalarFieldEnum[]
  }

  /**
   * Exercices create
   */
  export type ExercicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercices.
     */
    data: XOR<ExercicesCreateInput, ExercicesUncheckedCreateInput>
  }

  /**
   * Exercices createMany
   */
  export type ExercicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercices.
     */
    data: ExercicesCreateManyInput | ExercicesCreateManyInput[]
  }

  /**
   * Exercices createManyAndReturn
   */
  export type ExercicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * The data used to create many Exercices.
     */
    data: ExercicesCreateManyInput | ExercicesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercices update
   */
  export type ExercicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercices.
     */
    data: XOR<ExercicesUpdateInput, ExercicesUncheckedUpdateInput>
    /**
     * Choose, which Exercices to update.
     */
    where: ExercicesWhereUniqueInput
  }

  /**
   * Exercices updateMany
   */
  export type ExercicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercices.
     */
    data: XOR<ExercicesUpdateManyMutationInput, ExercicesUncheckedUpdateManyInput>
    /**
     * Filter which Exercices to update
     */
    where?: ExercicesWhereInput
    /**
     * Limit how many Exercices to update.
     */
    limit?: number
  }

  /**
   * Exercices updateManyAndReturn
   */
  export type ExercicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * The data used to update Exercices.
     */
    data: XOR<ExercicesUpdateManyMutationInput, ExercicesUncheckedUpdateManyInput>
    /**
     * Filter which Exercices to update
     */
    where?: ExercicesWhereInput
    /**
     * Limit how many Exercices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercices upsert
   */
  export type ExercicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercices to update in case it exists.
     */
    where: ExercicesWhereUniqueInput
    /**
     * In case the Exercices found by the `where` argument doesn't exist, create a new Exercices with this data.
     */
    create: XOR<ExercicesCreateInput, ExercicesUncheckedCreateInput>
    /**
     * In case the Exercices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExercicesUpdateInput, ExercicesUncheckedUpdateInput>
  }

  /**
   * Exercices delete
   */
  export type ExercicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
    /**
     * Filter which Exercices to delete.
     */
    where: ExercicesWhereUniqueInput
  }

  /**
   * Exercices deleteMany
   */
  export type ExercicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercices to delete
     */
    where?: ExercicesWhereInput
    /**
     * Limit how many Exercices to delete.
     */
    limit?: number
  }

  /**
   * Exercices.sousLecons
   */
  export type Exercices$sousLeconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SousLecons
     */
    select?: SousLeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SousLecons
     */
    omit?: SousLeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SousLeconsInclude<ExtArgs> | null
    where?: SousLeconsWhereInput
  }

  /**
   * Exercices.lecons
   */
  export type Exercices$leconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecons
     */
    select?: LeconsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecons
     */
    omit?: LeconsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsInclude<ExtArgs> | null
    where?: LeconsWhereInput
  }

  /**
   * Exercices.Reponses
   */
  export type Exercices$ReponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    where?: ReponsesWhereInput
    orderBy?: ReponsesOrderByWithRelationInput | ReponsesOrderByWithRelationInput[]
    cursor?: ReponsesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReponsesScalarFieldEnum | ReponsesScalarFieldEnum[]
  }

  /**
   * Exercices.OptionsQCM
   */
  export type Exercices$OptionsQCMArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    where?: OptionsQCMWhereInput
    orderBy?: OptionsQCMOrderByWithRelationInput | OptionsQCMOrderByWithRelationInput[]
    cursor?: OptionsQCMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionsQCMScalarFieldEnum | OptionsQCMScalarFieldEnum[]
  }

  /**
   * Exercices without action
   */
  export type ExercicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercices
     */
    select?: ExercicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercices
     */
    omit?: ExercicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercicesInclude<ExtArgs> | null
  }


  /**
   * Model OptionsQCM
   */

  export type AggregateOptionsQCM = {
    _count: OptionsQCMCountAggregateOutputType | null
    _avg: OptionsQCMAvgAggregateOutputType | null
    _sum: OptionsQCMSumAggregateOutputType | null
    _min: OptionsQCMMinAggregateOutputType | null
    _max: OptionsQCMMaxAggregateOutputType | null
  }

  export type OptionsQCMAvgAggregateOutputType = {
    points: number | null
  }

  export type OptionsQCMSumAggregateOutputType = {
    points: number | null
  }

  export type OptionsQCMMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    exercicesId: string | null
    points: number | null
    isCorrect: boolean | null
    isSelected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OptionsQCMMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    exercicesId: string | null
    points: number | null
    isCorrect: boolean | null
    isSelected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OptionsQCMCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    exercicesId: number
    points: number
    isCorrect: number
    isSelected: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OptionsQCMAvgAggregateInputType = {
    points?: true
  }

  export type OptionsQCMSumAggregateInputType = {
    points?: true
  }

  export type OptionsQCMMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    exercicesId?: true
    points?: true
    isCorrect?: true
    isSelected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OptionsQCMMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    exercicesId?: true
    points?: true
    isCorrect?: true
    isSelected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OptionsQCMCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    exercicesId?: true
    points?: true
    isCorrect?: true
    isSelected?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OptionsQCMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionsQCM to aggregate.
     */
    where?: OptionsQCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionsQCMS to fetch.
     */
    orderBy?: OptionsQCMOrderByWithRelationInput | OptionsQCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionsQCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionsQCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionsQCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OptionsQCMS
    **/
    _count?: true | OptionsQCMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionsQCMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionsQCMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionsQCMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionsQCMMaxAggregateInputType
  }

  export type GetOptionsQCMAggregateType<T extends OptionsQCMAggregateArgs> = {
        [P in keyof T & keyof AggregateOptionsQCM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptionsQCM[P]>
      : GetScalarType<T[P], AggregateOptionsQCM[P]>
  }




  export type OptionsQCMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionsQCMWhereInput
    orderBy?: OptionsQCMOrderByWithAggregationInput | OptionsQCMOrderByWithAggregationInput[]
    by: OptionsQCMScalarFieldEnum[] | OptionsQCMScalarFieldEnum
    having?: OptionsQCMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionsQCMCountAggregateInputType | true
    _avg?: OptionsQCMAvgAggregateInputType
    _sum?: OptionsQCMSumAggregateInputType
    _min?: OptionsQCMMinAggregateInputType
    _max?: OptionsQCMMaxAggregateInputType
  }

  export type OptionsQCMGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    exercicesId: string
    points: number | null
    isCorrect: boolean
    isSelected: boolean
    createdAt: Date
    updatedAt: Date
    _count: OptionsQCMCountAggregateOutputType | null
    _avg: OptionsQCMAvgAggregateOutputType | null
    _sum: OptionsQCMSumAggregateOutputType | null
    _min: OptionsQCMMinAggregateOutputType | null
    _max: OptionsQCMMaxAggregateOutputType | null
  }

  type GetOptionsQCMGroupByPayload<T extends OptionsQCMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionsQCMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionsQCMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionsQCMGroupByOutputType[P]>
            : GetScalarType<T[P], OptionsQCMGroupByOutputType[P]>
        }
      >
    >


  export type OptionsQCMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    exercicesId?: boolean
    points?: boolean
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optionsQCM"]>

  export type OptionsQCMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    exercicesId?: boolean
    points?: boolean
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optionsQCM"]>

  export type OptionsQCMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    exercicesId?: boolean
    points?: boolean
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optionsQCM"]>

  export type OptionsQCMSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    exercicesId?: boolean
    points?: boolean
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OptionsQCMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "exercicesId" | "points" | "isCorrect" | "isSelected" | "createdAt" | "updatedAt", ExtArgs["result"]["optionsQCM"]>
  export type OptionsQCMInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }
  export type OptionsQCMIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }
  export type OptionsQCMIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }

  export type $OptionsQCMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OptionsQCM"
    objects: {
      exercices: Prisma.$ExercicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      exercicesId: string
      points: number | null
      isCorrect: boolean
      isSelected: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["optionsQCM"]>
    composites: {}
  }

  type OptionsQCMGetPayload<S extends boolean | null | undefined | OptionsQCMDefaultArgs> = $Result.GetResult<Prisma.$OptionsQCMPayload, S>

  type OptionsQCMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionsQCMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionsQCMCountAggregateInputType | true
    }

  export interface OptionsQCMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OptionsQCM'], meta: { name: 'OptionsQCM' } }
    /**
     * Find zero or one OptionsQCM that matches the filter.
     * @param {OptionsQCMFindUniqueArgs} args - Arguments to find a OptionsQCM
     * @example
     * // Get one OptionsQCM
     * const optionsQCM = await prisma.optionsQCM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionsQCMFindUniqueArgs>(args: SelectSubset<T, OptionsQCMFindUniqueArgs<ExtArgs>>): Prisma__OptionsQCMClient<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OptionsQCM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionsQCMFindUniqueOrThrowArgs} args - Arguments to find a OptionsQCM
     * @example
     * // Get one OptionsQCM
     * const optionsQCM = await prisma.optionsQCM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionsQCMFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionsQCMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionsQCMClient<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptionsQCM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsQCMFindFirstArgs} args - Arguments to find a OptionsQCM
     * @example
     * // Get one OptionsQCM
     * const optionsQCM = await prisma.optionsQCM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionsQCMFindFirstArgs>(args?: SelectSubset<T, OptionsQCMFindFirstArgs<ExtArgs>>): Prisma__OptionsQCMClient<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptionsQCM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsQCMFindFirstOrThrowArgs} args - Arguments to find a OptionsQCM
     * @example
     * // Get one OptionsQCM
     * const optionsQCM = await prisma.optionsQCM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionsQCMFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionsQCMFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionsQCMClient<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OptionsQCMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsQCMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OptionsQCMS
     * const optionsQCMS = await prisma.optionsQCM.findMany()
     * 
     * // Get first 10 OptionsQCMS
     * const optionsQCMS = await prisma.optionsQCM.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionsQCMWithIdOnly = await prisma.optionsQCM.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionsQCMFindManyArgs>(args?: SelectSubset<T, OptionsQCMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OptionsQCM.
     * @param {OptionsQCMCreateArgs} args - Arguments to create a OptionsQCM.
     * @example
     * // Create one OptionsQCM
     * const OptionsQCM = await prisma.optionsQCM.create({
     *   data: {
     *     // ... data to create a OptionsQCM
     *   }
     * })
     * 
     */
    create<T extends OptionsQCMCreateArgs>(args: SelectSubset<T, OptionsQCMCreateArgs<ExtArgs>>): Prisma__OptionsQCMClient<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OptionsQCMS.
     * @param {OptionsQCMCreateManyArgs} args - Arguments to create many OptionsQCMS.
     * @example
     * // Create many OptionsQCMS
     * const optionsQCM = await prisma.optionsQCM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionsQCMCreateManyArgs>(args?: SelectSubset<T, OptionsQCMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OptionsQCMS and returns the data saved in the database.
     * @param {OptionsQCMCreateManyAndReturnArgs} args - Arguments to create many OptionsQCMS.
     * @example
     * // Create many OptionsQCMS
     * const optionsQCM = await prisma.optionsQCM.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OptionsQCMS and only return the `id`
     * const optionsQCMWithIdOnly = await prisma.optionsQCM.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionsQCMCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionsQCMCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OptionsQCM.
     * @param {OptionsQCMDeleteArgs} args - Arguments to delete one OptionsQCM.
     * @example
     * // Delete one OptionsQCM
     * const OptionsQCM = await prisma.optionsQCM.delete({
     *   where: {
     *     // ... filter to delete one OptionsQCM
     *   }
     * })
     * 
     */
    delete<T extends OptionsQCMDeleteArgs>(args: SelectSubset<T, OptionsQCMDeleteArgs<ExtArgs>>): Prisma__OptionsQCMClient<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OptionsQCM.
     * @param {OptionsQCMUpdateArgs} args - Arguments to update one OptionsQCM.
     * @example
     * // Update one OptionsQCM
     * const optionsQCM = await prisma.optionsQCM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionsQCMUpdateArgs>(args: SelectSubset<T, OptionsQCMUpdateArgs<ExtArgs>>): Prisma__OptionsQCMClient<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OptionsQCMS.
     * @param {OptionsQCMDeleteManyArgs} args - Arguments to filter OptionsQCMS to delete.
     * @example
     * // Delete a few OptionsQCMS
     * const { count } = await prisma.optionsQCM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionsQCMDeleteManyArgs>(args?: SelectSubset<T, OptionsQCMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptionsQCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsQCMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OptionsQCMS
     * const optionsQCM = await prisma.optionsQCM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionsQCMUpdateManyArgs>(args: SelectSubset<T, OptionsQCMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptionsQCMS and returns the data updated in the database.
     * @param {OptionsQCMUpdateManyAndReturnArgs} args - Arguments to update many OptionsQCMS.
     * @example
     * // Update many OptionsQCMS
     * const optionsQCM = await prisma.optionsQCM.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OptionsQCMS and only return the `id`
     * const optionsQCMWithIdOnly = await prisma.optionsQCM.updateManyAndReturn({
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
    updateManyAndReturn<T extends OptionsQCMUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionsQCMUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OptionsQCM.
     * @param {OptionsQCMUpsertArgs} args - Arguments to update or create a OptionsQCM.
     * @example
     * // Update or create a OptionsQCM
     * const optionsQCM = await prisma.optionsQCM.upsert({
     *   create: {
     *     // ... data to create a OptionsQCM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OptionsQCM we want to update
     *   }
     * })
     */
    upsert<T extends OptionsQCMUpsertArgs>(args: SelectSubset<T, OptionsQCMUpsertArgs<ExtArgs>>): Prisma__OptionsQCMClient<$Result.GetResult<Prisma.$OptionsQCMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OptionsQCMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsQCMCountArgs} args - Arguments to filter OptionsQCMS to count.
     * @example
     * // Count the number of OptionsQCMS
     * const count = await prisma.optionsQCM.count({
     *   where: {
     *     // ... the filter for the OptionsQCMS we want to count
     *   }
     * })
    **/
    count<T extends OptionsQCMCountArgs>(
      args?: Subset<T, OptionsQCMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionsQCMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OptionsQCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsQCMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionsQCMAggregateArgs>(args: Subset<T, OptionsQCMAggregateArgs>): Prisma.PrismaPromise<GetOptionsQCMAggregateType<T>>

    /**
     * Group by OptionsQCM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsQCMGroupByArgs} args - Group by arguments.
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
      T extends OptionsQCMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionsQCMGroupByArgs['orderBy'] }
        : { orderBy?: OptionsQCMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionsQCMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionsQCMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OptionsQCM model
   */
  readonly fields: OptionsQCMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OptionsQCM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionsQCMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercices<T extends ExercicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExercicesDefaultArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OptionsQCM model
   */
  interface OptionsQCMFieldRefs {
    readonly id: FieldRef<"OptionsQCM", 'String'>
    readonly nom: FieldRef<"OptionsQCM", 'String'>
    readonly description: FieldRef<"OptionsQCM", 'String'>
    readonly exercicesId: FieldRef<"OptionsQCM", 'String'>
    readonly points: FieldRef<"OptionsQCM", 'Int'>
    readonly isCorrect: FieldRef<"OptionsQCM", 'Boolean'>
    readonly isSelected: FieldRef<"OptionsQCM", 'Boolean'>
    readonly createdAt: FieldRef<"OptionsQCM", 'DateTime'>
    readonly updatedAt: FieldRef<"OptionsQCM", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OptionsQCM findUnique
   */
  export type OptionsQCMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    /**
     * Filter, which OptionsQCM to fetch.
     */
    where: OptionsQCMWhereUniqueInput
  }

  /**
   * OptionsQCM findUniqueOrThrow
   */
  export type OptionsQCMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    /**
     * Filter, which OptionsQCM to fetch.
     */
    where: OptionsQCMWhereUniqueInput
  }

  /**
   * OptionsQCM findFirst
   */
  export type OptionsQCMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    /**
     * Filter, which OptionsQCM to fetch.
     */
    where?: OptionsQCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionsQCMS to fetch.
     */
    orderBy?: OptionsQCMOrderByWithRelationInput | OptionsQCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionsQCMS.
     */
    cursor?: OptionsQCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionsQCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionsQCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionsQCMS.
     */
    distinct?: OptionsQCMScalarFieldEnum | OptionsQCMScalarFieldEnum[]
  }

  /**
   * OptionsQCM findFirstOrThrow
   */
  export type OptionsQCMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    /**
     * Filter, which OptionsQCM to fetch.
     */
    where?: OptionsQCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionsQCMS to fetch.
     */
    orderBy?: OptionsQCMOrderByWithRelationInput | OptionsQCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionsQCMS.
     */
    cursor?: OptionsQCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionsQCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionsQCMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionsQCMS.
     */
    distinct?: OptionsQCMScalarFieldEnum | OptionsQCMScalarFieldEnum[]
  }

  /**
   * OptionsQCM findMany
   */
  export type OptionsQCMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    /**
     * Filter, which OptionsQCMS to fetch.
     */
    where?: OptionsQCMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionsQCMS to fetch.
     */
    orderBy?: OptionsQCMOrderByWithRelationInput | OptionsQCMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OptionsQCMS.
     */
    cursor?: OptionsQCMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionsQCMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionsQCMS.
     */
    skip?: number
    distinct?: OptionsQCMScalarFieldEnum | OptionsQCMScalarFieldEnum[]
  }

  /**
   * OptionsQCM create
   */
  export type OptionsQCMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    /**
     * The data needed to create a OptionsQCM.
     */
    data: XOR<OptionsQCMCreateInput, OptionsQCMUncheckedCreateInput>
  }

  /**
   * OptionsQCM createMany
   */
  export type OptionsQCMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OptionsQCMS.
     */
    data: OptionsQCMCreateManyInput | OptionsQCMCreateManyInput[]
  }

  /**
   * OptionsQCM createManyAndReturn
   */
  export type OptionsQCMCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * The data used to create many OptionsQCMS.
     */
    data: OptionsQCMCreateManyInput | OptionsQCMCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OptionsQCM update
   */
  export type OptionsQCMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    /**
     * The data needed to update a OptionsQCM.
     */
    data: XOR<OptionsQCMUpdateInput, OptionsQCMUncheckedUpdateInput>
    /**
     * Choose, which OptionsQCM to update.
     */
    where: OptionsQCMWhereUniqueInput
  }

  /**
   * OptionsQCM updateMany
   */
  export type OptionsQCMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OptionsQCMS.
     */
    data: XOR<OptionsQCMUpdateManyMutationInput, OptionsQCMUncheckedUpdateManyInput>
    /**
     * Filter which OptionsQCMS to update
     */
    where?: OptionsQCMWhereInput
    /**
     * Limit how many OptionsQCMS to update.
     */
    limit?: number
  }

  /**
   * OptionsQCM updateManyAndReturn
   */
  export type OptionsQCMUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * The data used to update OptionsQCMS.
     */
    data: XOR<OptionsQCMUpdateManyMutationInput, OptionsQCMUncheckedUpdateManyInput>
    /**
     * Filter which OptionsQCMS to update
     */
    where?: OptionsQCMWhereInput
    /**
     * Limit how many OptionsQCMS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OptionsQCM upsert
   */
  export type OptionsQCMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    /**
     * The filter to search for the OptionsQCM to update in case it exists.
     */
    where: OptionsQCMWhereUniqueInput
    /**
     * In case the OptionsQCM found by the `where` argument doesn't exist, create a new OptionsQCM with this data.
     */
    create: XOR<OptionsQCMCreateInput, OptionsQCMUncheckedCreateInput>
    /**
     * In case the OptionsQCM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionsQCMUpdateInput, OptionsQCMUncheckedUpdateInput>
  }

  /**
   * OptionsQCM delete
   */
  export type OptionsQCMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
    /**
     * Filter which OptionsQCM to delete.
     */
    where: OptionsQCMWhereUniqueInput
  }

  /**
   * OptionsQCM deleteMany
   */
  export type OptionsQCMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionsQCMS to delete
     */
    where?: OptionsQCMWhereInput
    /**
     * Limit how many OptionsQCMS to delete.
     */
    limit?: number
  }

  /**
   * OptionsQCM without action
   */
  export type OptionsQCMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsQCM
     */
    select?: OptionsQCMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptionsQCM
     */
    omit?: OptionsQCMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionsQCMInclude<ExtArgs> | null
  }


  /**
   * Model LeconsUtilisateur
   */

  export type AggregateLeconsUtilisateur = {
    _count: LeconsUtilisateurCountAggregateOutputType | null
    _min: LeconsUtilisateurMinAggregateOutputType | null
    _max: LeconsUtilisateurMaxAggregateOutputType | null
  }

  export type LeconsUtilisateurMinAggregateOutputType = {
    id: string | null
    leconsId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeconsUtilisateurMaxAggregateOutputType = {
    id: string | null
    leconsId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeconsUtilisateurCountAggregateOutputType = {
    id: number
    leconsId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeconsUtilisateurMinAggregateInputType = {
    id?: true
    leconsId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeconsUtilisateurMaxAggregateInputType = {
    id?: true
    leconsId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeconsUtilisateurCountAggregateInputType = {
    id?: true
    leconsId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeconsUtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeconsUtilisateur to aggregate.
     */
    where?: LeconsUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeconsUtilisateurs to fetch.
     */
    orderBy?: LeconsUtilisateurOrderByWithRelationInput | LeconsUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeconsUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeconsUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeconsUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeconsUtilisateurs
    **/
    _count?: true | LeconsUtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeconsUtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeconsUtilisateurMaxAggregateInputType
  }

  export type GetLeconsUtilisateurAggregateType<T extends LeconsUtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateLeconsUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeconsUtilisateur[P]>
      : GetScalarType<T[P], AggregateLeconsUtilisateur[P]>
  }




  export type LeconsUtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeconsUtilisateurWhereInput
    orderBy?: LeconsUtilisateurOrderByWithAggregationInput | LeconsUtilisateurOrderByWithAggregationInput[]
    by: LeconsUtilisateurScalarFieldEnum[] | LeconsUtilisateurScalarFieldEnum
    having?: LeconsUtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeconsUtilisateurCountAggregateInputType | true
    _min?: LeconsUtilisateurMinAggregateInputType
    _max?: LeconsUtilisateurMaxAggregateInputType
  }

  export type LeconsUtilisateurGroupByOutputType = {
    id: string
    leconsId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: LeconsUtilisateurCountAggregateOutputType | null
    _min: LeconsUtilisateurMinAggregateOutputType | null
    _max: LeconsUtilisateurMaxAggregateOutputType | null
  }

  type GetLeconsUtilisateurGroupByPayload<T extends LeconsUtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeconsUtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeconsUtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeconsUtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], LeconsUtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type LeconsUtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leconsId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leconsUtilisateur"]>

  export type LeconsUtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leconsId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leconsUtilisateur"]>

  export type LeconsUtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leconsId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leconsUtilisateur"]>

  export type LeconsUtilisateurSelectScalar = {
    id?: boolean
    leconsId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeconsUtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leconsId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["leconsUtilisateur"]>
  export type LeconsUtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeconsUtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeconsUtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecons?: boolean | LeconsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeconsUtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeconsUtilisateur"
    objects: {
      lecons: Prisma.$LeconsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leconsId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leconsUtilisateur"]>
    composites: {}
  }

  type LeconsUtilisateurGetPayload<S extends boolean | null | undefined | LeconsUtilisateurDefaultArgs> = $Result.GetResult<Prisma.$LeconsUtilisateurPayload, S>

  type LeconsUtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeconsUtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeconsUtilisateurCountAggregateInputType | true
    }

  export interface LeconsUtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeconsUtilisateur'], meta: { name: 'LeconsUtilisateur' } }
    /**
     * Find zero or one LeconsUtilisateur that matches the filter.
     * @param {LeconsUtilisateurFindUniqueArgs} args - Arguments to find a LeconsUtilisateur
     * @example
     * // Get one LeconsUtilisateur
     * const leconsUtilisateur = await prisma.leconsUtilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeconsUtilisateurFindUniqueArgs>(args: SelectSubset<T, LeconsUtilisateurFindUniqueArgs<ExtArgs>>): Prisma__LeconsUtilisateurClient<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeconsUtilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeconsUtilisateurFindUniqueOrThrowArgs} args - Arguments to find a LeconsUtilisateur
     * @example
     * // Get one LeconsUtilisateur
     * const leconsUtilisateur = await prisma.leconsUtilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeconsUtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, LeconsUtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeconsUtilisateurClient<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeconsUtilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsUtilisateurFindFirstArgs} args - Arguments to find a LeconsUtilisateur
     * @example
     * // Get one LeconsUtilisateur
     * const leconsUtilisateur = await prisma.leconsUtilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeconsUtilisateurFindFirstArgs>(args?: SelectSubset<T, LeconsUtilisateurFindFirstArgs<ExtArgs>>): Prisma__LeconsUtilisateurClient<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeconsUtilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsUtilisateurFindFirstOrThrowArgs} args - Arguments to find a LeconsUtilisateur
     * @example
     * // Get one LeconsUtilisateur
     * const leconsUtilisateur = await prisma.leconsUtilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeconsUtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, LeconsUtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeconsUtilisateurClient<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeconsUtilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsUtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeconsUtilisateurs
     * const leconsUtilisateurs = await prisma.leconsUtilisateur.findMany()
     * 
     * // Get first 10 LeconsUtilisateurs
     * const leconsUtilisateurs = await prisma.leconsUtilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leconsUtilisateurWithIdOnly = await prisma.leconsUtilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeconsUtilisateurFindManyArgs>(args?: SelectSubset<T, LeconsUtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeconsUtilisateur.
     * @param {LeconsUtilisateurCreateArgs} args - Arguments to create a LeconsUtilisateur.
     * @example
     * // Create one LeconsUtilisateur
     * const LeconsUtilisateur = await prisma.leconsUtilisateur.create({
     *   data: {
     *     // ... data to create a LeconsUtilisateur
     *   }
     * })
     * 
     */
    create<T extends LeconsUtilisateurCreateArgs>(args: SelectSubset<T, LeconsUtilisateurCreateArgs<ExtArgs>>): Prisma__LeconsUtilisateurClient<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeconsUtilisateurs.
     * @param {LeconsUtilisateurCreateManyArgs} args - Arguments to create many LeconsUtilisateurs.
     * @example
     * // Create many LeconsUtilisateurs
     * const leconsUtilisateur = await prisma.leconsUtilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeconsUtilisateurCreateManyArgs>(args?: SelectSubset<T, LeconsUtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeconsUtilisateurs and returns the data saved in the database.
     * @param {LeconsUtilisateurCreateManyAndReturnArgs} args - Arguments to create many LeconsUtilisateurs.
     * @example
     * // Create many LeconsUtilisateurs
     * const leconsUtilisateur = await prisma.leconsUtilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeconsUtilisateurs and only return the `id`
     * const leconsUtilisateurWithIdOnly = await prisma.leconsUtilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeconsUtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, LeconsUtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeconsUtilisateur.
     * @param {LeconsUtilisateurDeleteArgs} args - Arguments to delete one LeconsUtilisateur.
     * @example
     * // Delete one LeconsUtilisateur
     * const LeconsUtilisateur = await prisma.leconsUtilisateur.delete({
     *   where: {
     *     // ... filter to delete one LeconsUtilisateur
     *   }
     * })
     * 
     */
    delete<T extends LeconsUtilisateurDeleteArgs>(args: SelectSubset<T, LeconsUtilisateurDeleteArgs<ExtArgs>>): Prisma__LeconsUtilisateurClient<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeconsUtilisateur.
     * @param {LeconsUtilisateurUpdateArgs} args - Arguments to update one LeconsUtilisateur.
     * @example
     * // Update one LeconsUtilisateur
     * const leconsUtilisateur = await prisma.leconsUtilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeconsUtilisateurUpdateArgs>(args: SelectSubset<T, LeconsUtilisateurUpdateArgs<ExtArgs>>): Prisma__LeconsUtilisateurClient<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeconsUtilisateurs.
     * @param {LeconsUtilisateurDeleteManyArgs} args - Arguments to filter LeconsUtilisateurs to delete.
     * @example
     * // Delete a few LeconsUtilisateurs
     * const { count } = await prisma.leconsUtilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeconsUtilisateurDeleteManyArgs>(args?: SelectSubset<T, LeconsUtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeconsUtilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsUtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeconsUtilisateurs
     * const leconsUtilisateur = await prisma.leconsUtilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeconsUtilisateurUpdateManyArgs>(args: SelectSubset<T, LeconsUtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeconsUtilisateurs and returns the data updated in the database.
     * @param {LeconsUtilisateurUpdateManyAndReturnArgs} args - Arguments to update many LeconsUtilisateurs.
     * @example
     * // Update many LeconsUtilisateurs
     * const leconsUtilisateur = await prisma.leconsUtilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeconsUtilisateurs and only return the `id`
     * const leconsUtilisateurWithIdOnly = await prisma.leconsUtilisateur.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeconsUtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, LeconsUtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeconsUtilisateur.
     * @param {LeconsUtilisateurUpsertArgs} args - Arguments to update or create a LeconsUtilisateur.
     * @example
     * // Update or create a LeconsUtilisateur
     * const leconsUtilisateur = await prisma.leconsUtilisateur.upsert({
     *   create: {
     *     // ... data to create a LeconsUtilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeconsUtilisateur we want to update
     *   }
     * })
     */
    upsert<T extends LeconsUtilisateurUpsertArgs>(args: SelectSubset<T, LeconsUtilisateurUpsertArgs<ExtArgs>>): Prisma__LeconsUtilisateurClient<$Result.GetResult<Prisma.$LeconsUtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeconsUtilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsUtilisateurCountArgs} args - Arguments to filter LeconsUtilisateurs to count.
     * @example
     * // Count the number of LeconsUtilisateurs
     * const count = await prisma.leconsUtilisateur.count({
     *   where: {
     *     // ... the filter for the LeconsUtilisateurs we want to count
     *   }
     * })
    **/
    count<T extends LeconsUtilisateurCountArgs>(
      args?: Subset<T, LeconsUtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeconsUtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeconsUtilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsUtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeconsUtilisateurAggregateArgs>(args: Subset<T, LeconsUtilisateurAggregateArgs>): Prisma.PrismaPromise<GetLeconsUtilisateurAggregateType<T>>

    /**
     * Group by LeconsUtilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeconsUtilisateurGroupByArgs} args - Group by arguments.
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
      T extends LeconsUtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeconsUtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: LeconsUtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeconsUtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeconsUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeconsUtilisateur model
   */
  readonly fields: LeconsUtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeconsUtilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeconsUtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecons<T extends LeconsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeconsDefaultArgs<ExtArgs>>): Prisma__LeconsClient<$Result.GetResult<Prisma.$LeconsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeconsUtilisateur model
   */
  interface LeconsUtilisateurFieldRefs {
    readonly id: FieldRef<"LeconsUtilisateur", 'String'>
    readonly leconsId: FieldRef<"LeconsUtilisateur", 'String'>
    readonly userId: FieldRef<"LeconsUtilisateur", 'String'>
    readonly createdAt: FieldRef<"LeconsUtilisateur", 'DateTime'>
    readonly updatedAt: FieldRef<"LeconsUtilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeconsUtilisateur findUnique
   */
  export type LeconsUtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which LeconsUtilisateur to fetch.
     */
    where: LeconsUtilisateurWhereUniqueInput
  }

  /**
   * LeconsUtilisateur findUniqueOrThrow
   */
  export type LeconsUtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which LeconsUtilisateur to fetch.
     */
    where: LeconsUtilisateurWhereUniqueInput
  }

  /**
   * LeconsUtilisateur findFirst
   */
  export type LeconsUtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which LeconsUtilisateur to fetch.
     */
    where?: LeconsUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeconsUtilisateurs to fetch.
     */
    orderBy?: LeconsUtilisateurOrderByWithRelationInput | LeconsUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeconsUtilisateurs.
     */
    cursor?: LeconsUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeconsUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeconsUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeconsUtilisateurs.
     */
    distinct?: LeconsUtilisateurScalarFieldEnum | LeconsUtilisateurScalarFieldEnum[]
  }

  /**
   * LeconsUtilisateur findFirstOrThrow
   */
  export type LeconsUtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which LeconsUtilisateur to fetch.
     */
    where?: LeconsUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeconsUtilisateurs to fetch.
     */
    orderBy?: LeconsUtilisateurOrderByWithRelationInput | LeconsUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeconsUtilisateurs.
     */
    cursor?: LeconsUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeconsUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeconsUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeconsUtilisateurs.
     */
    distinct?: LeconsUtilisateurScalarFieldEnum | LeconsUtilisateurScalarFieldEnum[]
  }

  /**
   * LeconsUtilisateur findMany
   */
  export type LeconsUtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which LeconsUtilisateurs to fetch.
     */
    where?: LeconsUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeconsUtilisateurs to fetch.
     */
    orderBy?: LeconsUtilisateurOrderByWithRelationInput | LeconsUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeconsUtilisateurs.
     */
    cursor?: LeconsUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeconsUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeconsUtilisateurs.
     */
    skip?: number
    distinct?: LeconsUtilisateurScalarFieldEnum | LeconsUtilisateurScalarFieldEnum[]
  }

  /**
   * LeconsUtilisateur create
   */
  export type LeconsUtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a LeconsUtilisateur.
     */
    data: XOR<LeconsUtilisateurCreateInput, LeconsUtilisateurUncheckedCreateInput>
  }

  /**
   * LeconsUtilisateur createMany
   */
  export type LeconsUtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeconsUtilisateurs.
     */
    data: LeconsUtilisateurCreateManyInput | LeconsUtilisateurCreateManyInput[]
  }

  /**
   * LeconsUtilisateur createManyAndReturn
   */
  export type LeconsUtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many LeconsUtilisateurs.
     */
    data: LeconsUtilisateurCreateManyInput | LeconsUtilisateurCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeconsUtilisateur update
   */
  export type LeconsUtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a LeconsUtilisateur.
     */
    data: XOR<LeconsUtilisateurUpdateInput, LeconsUtilisateurUncheckedUpdateInput>
    /**
     * Choose, which LeconsUtilisateur to update.
     */
    where: LeconsUtilisateurWhereUniqueInput
  }

  /**
   * LeconsUtilisateur updateMany
   */
  export type LeconsUtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeconsUtilisateurs.
     */
    data: XOR<LeconsUtilisateurUpdateManyMutationInput, LeconsUtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which LeconsUtilisateurs to update
     */
    where?: LeconsUtilisateurWhereInput
    /**
     * Limit how many LeconsUtilisateurs to update.
     */
    limit?: number
  }

  /**
   * LeconsUtilisateur updateManyAndReturn
   */
  export type LeconsUtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update LeconsUtilisateurs.
     */
    data: XOR<LeconsUtilisateurUpdateManyMutationInput, LeconsUtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which LeconsUtilisateurs to update
     */
    where?: LeconsUtilisateurWhereInput
    /**
     * Limit how many LeconsUtilisateurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeconsUtilisateur upsert
   */
  export type LeconsUtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the LeconsUtilisateur to update in case it exists.
     */
    where: LeconsUtilisateurWhereUniqueInput
    /**
     * In case the LeconsUtilisateur found by the `where` argument doesn't exist, create a new LeconsUtilisateur with this data.
     */
    create: XOR<LeconsUtilisateurCreateInput, LeconsUtilisateurUncheckedCreateInput>
    /**
     * In case the LeconsUtilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeconsUtilisateurUpdateInput, LeconsUtilisateurUncheckedUpdateInput>
  }

  /**
   * LeconsUtilisateur delete
   */
  export type LeconsUtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
    /**
     * Filter which LeconsUtilisateur to delete.
     */
    where: LeconsUtilisateurWhereUniqueInput
  }

  /**
   * LeconsUtilisateur deleteMany
   */
  export type LeconsUtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeconsUtilisateurs to delete
     */
    where?: LeconsUtilisateurWhereInput
    /**
     * Limit how many LeconsUtilisateurs to delete.
     */
    limit?: number
  }

  /**
   * LeconsUtilisateur without action
   */
  export type LeconsUtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeconsUtilisateur
     */
    select?: LeconsUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeconsUtilisateur
     */
    omit?: LeconsUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeconsUtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Reponses
   */

  export type AggregateReponses = {
    _count: ReponsesCountAggregateOutputType | null
    _min: ReponsesMinAggregateOutputType | null
    _max: ReponsesMaxAggregateOutputType | null
  }

  export type ReponsesMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    exercicesId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReponsesMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    exercicesId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReponsesCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    exercicesId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReponsesMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    exercicesId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReponsesMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    exercicesId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReponsesCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    exercicesId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReponsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reponses to aggregate.
     */
    where?: ReponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reponses to fetch.
     */
    orderBy?: ReponsesOrderByWithRelationInput | ReponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reponses
    **/
    _count?: true | ReponsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReponsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReponsesMaxAggregateInputType
  }

  export type GetReponsesAggregateType<T extends ReponsesAggregateArgs> = {
        [P in keyof T & keyof AggregateReponses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReponses[P]>
      : GetScalarType<T[P], AggregateReponses[P]>
  }




  export type ReponsesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReponsesWhereInput
    orderBy?: ReponsesOrderByWithAggregationInput | ReponsesOrderByWithAggregationInput[]
    by: ReponsesScalarFieldEnum[] | ReponsesScalarFieldEnum
    having?: ReponsesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReponsesCountAggregateInputType | true
    _min?: ReponsesMinAggregateInputType
    _max?: ReponsesMaxAggregateInputType
  }

  export type ReponsesGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    exercicesId: string
    createdAt: Date
    updatedAt: Date
    _count: ReponsesCountAggregateOutputType | null
    _min: ReponsesMinAggregateOutputType | null
    _max: ReponsesMaxAggregateOutputType | null
  }

  type GetReponsesGroupByPayload<T extends ReponsesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReponsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReponsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReponsesGroupByOutputType[P]>
            : GetScalarType<T[P], ReponsesGroupByOutputType[P]>
        }
      >
    >


  export type ReponsesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    exercicesId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
    ReponsesUtilisateur?: boolean | Reponses$ReponsesUtilisateurArgs<ExtArgs>
    _count?: boolean | ReponsesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reponses"]>

  export type ReponsesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    exercicesId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reponses"]>

  export type ReponsesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    exercicesId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reponses"]>

  export type ReponsesSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    exercicesId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReponsesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "exercicesId" | "createdAt" | "updatedAt", ExtArgs["result"]["reponses"]>
  export type ReponsesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
    ReponsesUtilisateur?: boolean | Reponses$ReponsesUtilisateurArgs<ExtArgs>
    _count?: boolean | ReponsesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReponsesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }
  export type ReponsesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercices?: boolean | ExercicesDefaultArgs<ExtArgs>
  }

  export type $ReponsesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reponses"
    objects: {
      exercices: Prisma.$ExercicesPayload<ExtArgs>
      ReponsesUtilisateur: Prisma.$ReponsesUtilisateurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      exercicesId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reponses"]>
    composites: {}
  }

  type ReponsesGetPayload<S extends boolean | null | undefined | ReponsesDefaultArgs> = $Result.GetResult<Prisma.$ReponsesPayload, S>

  type ReponsesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReponsesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReponsesCountAggregateInputType | true
    }

  export interface ReponsesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reponses'], meta: { name: 'Reponses' } }
    /**
     * Find zero or one Reponses that matches the filter.
     * @param {ReponsesFindUniqueArgs} args - Arguments to find a Reponses
     * @example
     * // Get one Reponses
     * const reponses = await prisma.reponses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReponsesFindUniqueArgs>(args: SelectSubset<T, ReponsesFindUniqueArgs<ExtArgs>>): Prisma__ReponsesClient<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reponses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReponsesFindUniqueOrThrowArgs} args - Arguments to find a Reponses
     * @example
     * // Get one Reponses
     * const reponses = await prisma.reponses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReponsesFindUniqueOrThrowArgs>(args: SelectSubset<T, ReponsesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReponsesClient<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesFindFirstArgs} args - Arguments to find a Reponses
     * @example
     * // Get one Reponses
     * const reponses = await prisma.reponses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReponsesFindFirstArgs>(args?: SelectSubset<T, ReponsesFindFirstArgs<ExtArgs>>): Prisma__ReponsesClient<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reponses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesFindFirstOrThrowArgs} args - Arguments to find a Reponses
     * @example
     * // Get one Reponses
     * const reponses = await prisma.reponses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReponsesFindFirstOrThrowArgs>(args?: SelectSubset<T, ReponsesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReponsesClient<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reponses
     * const reponses = await prisma.reponses.findMany()
     * 
     * // Get first 10 Reponses
     * const reponses = await prisma.reponses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reponsesWithIdOnly = await prisma.reponses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReponsesFindManyArgs>(args?: SelectSubset<T, ReponsesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reponses.
     * @param {ReponsesCreateArgs} args - Arguments to create a Reponses.
     * @example
     * // Create one Reponses
     * const Reponses = await prisma.reponses.create({
     *   data: {
     *     // ... data to create a Reponses
     *   }
     * })
     * 
     */
    create<T extends ReponsesCreateArgs>(args: SelectSubset<T, ReponsesCreateArgs<ExtArgs>>): Prisma__ReponsesClient<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reponses.
     * @param {ReponsesCreateManyArgs} args - Arguments to create many Reponses.
     * @example
     * // Create many Reponses
     * const reponses = await prisma.reponses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReponsesCreateManyArgs>(args?: SelectSubset<T, ReponsesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reponses and returns the data saved in the database.
     * @param {ReponsesCreateManyAndReturnArgs} args - Arguments to create many Reponses.
     * @example
     * // Create many Reponses
     * const reponses = await prisma.reponses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reponses and only return the `id`
     * const reponsesWithIdOnly = await prisma.reponses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReponsesCreateManyAndReturnArgs>(args?: SelectSubset<T, ReponsesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reponses.
     * @param {ReponsesDeleteArgs} args - Arguments to delete one Reponses.
     * @example
     * // Delete one Reponses
     * const Reponses = await prisma.reponses.delete({
     *   where: {
     *     // ... filter to delete one Reponses
     *   }
     * })
     * 
     */
    delete<T extends ReponsesDeleteArgs>(args: SelectSubset<T, ReponsesDeleteArgs<ExtArgs>>): Prisma__ReponsesClient<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reponses.
     * @param {ReponsesUpdateArgs} args - Arguments to update one Reponses.
     * @example
     * // Update one Reponses
     * const reponses = await prisma.reponses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReponsesUpdateArgs>(args: SelectSubset<T, ReponsesUpdateArgs<ExtArgs>>): Prisma__ReponsesClient<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reponses.
     * @param {ReponsesDeleteManyArgs} args - Arguments to filter Reponses to delete.
     * @example
     * // Delete a few Reponses
     * const { count } = await prisma.reponses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReponsesDeleteManyArgs>(args?: SelectSubset<T, ReponsesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reponses
     * const reponses = await prisma.reponses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReponsesUpdateManyArgs>(args: SelectSubset<T, ReponsesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reponses and returns the data updated in the database.
     * @param {ReponsesUpdateManyAndReturnArgs} args - Arguments to update many Reponses.
     * @example
     * // Update many Reponses
     * const reponses = await prisma.reponses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reponses and only return the `id`
     * const reponsesWithIdOnly = await prisma.reponses.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReponsesUpdateManyAndReturnArgs>(args: SelectSubset<T, ReponsesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reponses.
     * @param {ReponsesUpsertArgs} args - Arguments to update or create a Reponses.
     * @example
     * // Update or create a Reponses
     * const reponses = await prisma.reponses.upsert({
     *   create: {
     *     // ... data to create a Reponses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reponses we want to update
     *   }
     * })
     */
    upsert<T extends ReponsesUpsertArgs>(args: SelectSubset<T, ReponsesUpsertArgs<ExtArgs>>): Prisma__ReponsesClient<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesCountArgs} args - Arguments to filter Reponses to count.
     * @example
     * // Count the number of Reponses
     * const count = await prisma.reponses.count({
     *   where: {
     *     // ... the filter for the Reponses we want to count
     *   }
     * })
    **/
    count<T extends ReponsesCountArgs>(
      args?: Subset<T, ReponsesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReponsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReponsesAggregateArgs>(args: Subset<T, ReponsesAggregateArgs>): Prisma.PrismaPromise<GetReponsesAggregateType<T>>

    /**
     * Group by Reponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesGroupByArgs} args - Group by arguments.
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
      T extends ReponsesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReponsesGroupByArgs['orderBy'] }
        : { orderBy?: ReponsesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReponsesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReponsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reponses model
   */
  readonly fields: ReponsesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reponses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReponsesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercices<T extends ExercicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExercicesDefaultArgs<ExtArgs>>): Prisma__ExercicesClient<$Result.GetResult<Prisma.$ExercicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReponsesUtilisateur<T extends Reponses$ReponsesUtilisateurArgs<ExtArgs> = {}>(args?: Subset<T, Reponses$ReponsesUtilisateurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reponses model
   */
  interface ReponsesFieldRefs {
    readonly id: FieldRef<"Reponses", 'String'>
    readonly nom: FieldRef<"Reponses", 'String'>
    readonly description: FieldRef<"Reponses", 'String'>
    readonly exercicesId: FieldRef<"Reponses", 'String'>
    readonly createdAt: FieldRef<"Reponses", 'DateTime'>
    readonly updatedAt: FieldRef<"Reponses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reponses findUnique
   */
  export type ReponsesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    /**
     * Filter, which Reponses to fetch.
     */
    where: ReponsesWhereUniqueInput
  }

  /**
   * Reponses findUniqueOrThrow
   */
  export type ReponsesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    /**
     * Filter, which Reponses to fetch.
     */
    where: ReponsesWhereUniqueInput
  }

  /**
   * Reponses findFirst
   */
  export type ReponsesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    /**
     * Filter, which Reponses to fetch.
     */
    where?: ReponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reponses to fetch.
     */
    orderBy?: ReponsesOrderByWithRelationInput | ReponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reponses.
     */
    cursor?: ReponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reponses.
     */
    distinct?: ReponsesScalarFieldEnum | ReponsesScalarFieldEnum[]
  }

  /**
   * Reponses findFirstOrThrow
   */
  export type ReponsesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    /**
     * Filter, which Reponses to fetch.
     */
    where?: ReponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reponses to fetch.
     */
    orderBy?: ReponsesOrderByWithRelationInput | ReponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reponses.
     */
    cursor?: ReponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reponses.
     */
    distinct?: ReponsesScalarFieldEnum | ReponsesScalarFieldEnum[]
  }

  /**
   * Reponses findMany
   */
  export type ReponsesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    /**
     * Filter, which Reponses to fetch.
     */
    where?: ReponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reponses to fetch.
     */
    orderBy?: ReponsesOrderByWithRelationInput | ReponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reponses.
     */
    cursor?: ReponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reponses.
     */
    skip?: number
    distinct?: ReponsesScalarFieldEnum | ReponsesScalarFieldEnum[]
  }

  /**
   * Reponses create
   */
  export type ReponsesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    /**
     * The data needed to create a Reponses.
     */
    data: XOR<ReponsesCreateInput, ReponsesUncheckedCreateInput>
  }

  /**
   * Reponses createMany
   */
  export type ReponsesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reponses.
     */
    data: ReponsesCreateManyInput | ReponsesCreateManyInput[]
  }

  /**
   * Reponses createManyAndReturn
   */
  export type ReponsesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * The data used to create many Reponses.
     */
    data: ReponsesCreateManyInput | ReponsesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reponses update
   */
  export type ReponsesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    /**
     * The data needed to update a Reponses.
     */
    data: XOR<ReponsesUpdateInput, ReponsesUncheckedUpdateInput>
    /**
     * Choose, which Reponses to update.
     */
    where: ReponsesWhereUniqueInput
  }

  /**
   * Reponses updateMany
   */
  export type ReponsesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reponses.
     */
    data: XOR<ReponsesUpdateManyMutationInput, ReponsesUncheckedUpdateManyInput>
    /**
     * Filter which Reponses to update
     */
    where?: ReponsesWhereInput
    /**
     * Limit how many Reponses to update.
     */
    limit?: number
  }

  /**
   * Reponses updateManyAndReturn
   */
  export type ReponsesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * The data used to update Reponses.
     */
    data: XOR<ReponsesUpdateManyMutationInput, ReponsesUncheckedUpdateManyInput>
    /**
     * Filter which Reponses to update
     */
    where?: ReponsesWhereInput
    /**
     * Limit how many Reponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reponses upsert
   */
  export type ReponsesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    /**
     * The filter to search for the Reponses to update in case it exists.
     */
    where: ReponsesWhereUniqueInput
    /**
     * In case the Reponses found by the `where` argument doesn't exist, create a new Reponses with this data.
     */
    create: XOR<ReponsesCreateInput, ReponsesUncheckedCreateInput>
    /**
     * In case the Reponses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReponsesUpdateInput, ReponsesUncheckedUpdateInput>
  }

  /**
   * Reponses delete
   */
  export type ReponsesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
    /**
     * Filter which Reponses to delete.
     */
    where: ReponsesWhereUniqueInput
  }

  /**
   * Reponses deleteMany
   */
  export type ReponsesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reponses to delete
     */
    where?: ReponsesWhereInput
    /**
     * Limit how many Reponses to delete.
     */
    limit?: number
  }

  /**
   * Reponses.ReponsesUtilisateur
   */
  export type Reponses$ReponsesUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    where?: ReponsesUtilisateurWhereInput
    orderBy?: ReponsesUtilisateurOrderByWithRelationInput | ReponsesUtilisateurOrderByWithRelationInput[]
    cursor?: ReponsesUtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReponsesUtilisateurScalarFieldEnum | ReponsesUtilisateurScalarFieldEnum[]
  }

  /**
   * Reponses without action
   */
  export type ReponsesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reponses
     */
    select?: ReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reponses
     */
    omit?: ReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesInclude<ExtArgs> | null
  }


  /**
   * Model ReponsesUtilisateur
   */

  export type AggregateReponsesUtilisateur = {
    _count: ReponsesUtilisateurCountAggregateOutputType | null
    _min: ReponsesUtilisateurMinAggregateOutputType | null
    _max: ReponsesUtilisateurMaxAggregateOutputType | null
  }

  export type ReponsesUtilisateurMinAggregateOutputType = {
    id: string | null
    reponsesId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReponsesUtilisateurMaxAggregateOutputType = {
    id: string | null
    reponsesId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReponsesUtilisateurCountAggregateOutputType = {
    id: number
    reponsesId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReponsesUtilisateurMinAggregateInputType = {
    id?: true
    reponsesId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReponsesUtilisateurMaxAggregateInputType = {
    id?: true
    reponsesId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReponsesUtilisateurCountAggregateInputType = {
    id?: true
    reponsesId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReponsesUtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReponsesUtilisateur to aggregate.
     */
    where?: ReponsesUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReponsesUtilisateurs to fetch.
     */
    orderBy?: ReponsesUtilisateurOrderByWithRelationInput | ReponsesUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReponsesUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReponsesUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReponsesUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReponsesUtilisateurs
    **/
    _count?: true | ReponsesUtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReponsesUtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReponsesUtilisateurMaxAggregateInputType
  }

  export type GetReponsesUtilisateurAggregateType<T extends ReponsesUtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateReponsesUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReponsesUtilisateur[P]>
      : GetScalarType<T[P], AggregateReponsesUtilisateur[P]>
  }




  export type ReponsesUtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReponsesUtilisateurWhereInput
    orderBy?: ReponsesUtilisateurOrderByWithAggregationInput | ReponsesUtilisateurOrderByWithAggregationInput[]
    by: ReponsesUtilisateurScalarFieldEnum[] | ReponsesUtilisateurScalarFieldEnum
    having?: ReponsesUtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReponsesUtilisateurCountAggregateInputType | true
    _min?: ReponsesUtilisateurMinAggregateInputType
    _max?: ReponsesUtilisateurMaxAggregateInputType
  }

  export type ReponsesUtilisateurGroupByOutputType = {
    id: string
    reponsesId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ReponsesUtilisateurCountAggregateOutputType | null
    _min: ReponsesUtilisateurMinAggregateOutputType | null
    _max: ReponsesUtilisateurMaxAggregateOutputType | null
  }

  type GetReponsesUtilisateurGroupByPayload<T extends ReponsesUtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReponsesUtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReponsesUtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReponsesUtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], ReponsesUtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type ReponsesUtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reponsesId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reponses?: boolean | ReponsesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reponsesUtilisateur"]>

  export type ReponsesUtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reponsesId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reponses?: boolean | ReponsesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reponsesUtilisateur"]>

  export type ReponsesUtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reponsesId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reponses?: boolean | ReponsesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reponsesUtilisateur"]>

  export type ReponsesUtilisateurSelectScalar = {
    id?: boolean
    reponsesId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReponsesUtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reponsesId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["reponsesUtilisateur"]>
  export type ReponsesUtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reponses?: boolean | ReponsesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReponsesUtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reponses?: boolean | ReponsesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReponsesUtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reponses?: boolean | ReponsesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReponsesUtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReponsesUtilisateur"
    objects: {
      reponses: Prisma.$ReponsesPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reponsesId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reponsesUtilisateur"]>
    composites: {}
  }

  type ReponsesUtilisateurGetPayload<S extends boolean | null | undefined | ReponsesUtilisateurDefaultArgs> = $Result.GetResult<Prisma.$ReponsesUtilisateurPayload, S>

  type ReponsesUtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReponsesUtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReponsesUtilisateurCountAggregateInputType | true
    }

  export interface ReponsesUtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReponsesUtilisateur'], meta: { name: 'ReponsesUtilisateur' } }
    /**
     * Find zero or one ReponsesUtilisateur that matches the filter.
     * @param {ReponsesUtilisateurFindUniqueArgs} args - Arguments to find a ReponsesUtilisateur
     * @example
     * // Get one ReponsesUtilisateur
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReponsesUtilisateurFindUniqueArgs>(args: SelectSubset<T, ReponsesUtilisateurFindUniqueArgs<ExtArgs>>): Prisma__ReponsesUtilisateurClient<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReponsesUtilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReponsesUtilisateurFindUniqueOrThrowArgs} args - Arguments to find a ReponsesUtilisateur
     * @example
     * // Get one ReponsesUtilisateur
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReponsesUtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, ReponsesUtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReponsesUtilisateurClient<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReponsesUtilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesUtilisateurFindFirstArgs} args - Arguments to find a ReponsesUtilisateur
     * @example
     * // Get one ReponsesUtilisateur
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReponsesUtilisateurFindFirstArgs>(args?: SelectSubset<T, ReponsesUtilisateurFindFirstArgs<ExtArgs>>): Prisma__ReponsesUtilisateurClient<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReponsesUtilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesUtilisateurFindFirstOrThrowArgs} args - Arguments to find a ReponsesUtilisateur
     * @example
     * // Get one ReponsesUtilisateur
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReponsesUtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, ReponsesUtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReponsesUtilisateurClient<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReponsesUtilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesUtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReponsesUtilisateurs
     * const reponsesUtilisateurs = await prisma.reponsesUtilisateur.findMany()
     * 
     * // Get first 10 ReponsesUtilisateurs
     * const reponsesUtilisateurs = await prisma.reponsesUtilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reponsesUtilisateurWithIdOnly = await prisma.reponsesUtilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReponsesUtilisateurFindManyArgs>(args?: SelectSubset<T, ReponsesUtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReponsesUtilisateur.
     * @param {ReponsesUtilisateurCreateArgs} args - Arguments to create a ReponsesUtilisateur.
     * @example
     * // Create one ReponsesUtilisateur
     * const ReponsesUtilisateur = await prisma.reponsesUtilisateur.create({
     *   data: {
     *     // ... data to create a ReponsesUtilisateur
     *   }
     * })
     * 
     */
    create<T extends ReponsesUtilisateurCreateArgs>(args: SelectSubset<T, ReponsesUtilisateurCreateArgs<ExtArgs>>): Prisma__ReponsesUtilisateurClient<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReponsesUtilisateurs.
     * @param {ReponsesUtilisateurCreateManyArgs} args - Arguments to create many ReponsesUtilisateurs.
     * @example
     * // Create many ReponsesUtilisateurs
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReponsesUtilisateurCreateManyArgs>(args?: SelectSubset<T, ReponsesUtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReponsesUtilisateurs and returns the data saved in the database.
     * @param {ReponsesUtilisateurCreateManyAndReturnArgs} args - Arguments to create many ReponsesUtilisateurs.
     * @example
     * // Create many ReponsesUtilisateurs
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReponsesUtilisateurs and only return the `id`
     * const reponsesUtilisateurWithIdOnly = await prisma.reponsesUtilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReponsesUtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, ReponsesUtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReponsesUtilisateur.
     * @param {ReponsesUtilisateurDeleteArgs} args - Arguments to delete one ReponsesUtilisateur.
     * @example
     * // Delete one ReponsesUtilisateur
     * const ReponsesUtilisateur = await prisma.reponsesUtilisateur.delete({
     *   where: {
     *     // ... filter to delete one ReponsesUtilisateur
     *   }
     * })
     * 
     */
    delete<T extends ReponsesUtilisateurDeleteArgs>(args: SelectSubset<T, ReponsesUtilisateurDeleteArgs<ExtArgs>>): Prisma__ReponsesUtilisateurClient<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReponsesUtilisateur.
     * @param {ReponsesUtilisateurUpdateArgs} args - Arguments to update one ReponsesUtilisateur.
     * @example
     * // Update one ReponsesUtilisateur
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReponsesUtilisateurUpdateArgs>(args: SelectSubset<T, ReponsesUtilisateurUpdateArgs<ExtArgs>>): Prisma__ReponsesUtilisateurClient<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReponsesUtilisateurs.
     * @param {ReponsesUtilisateurDeleteManyArgs} args - Arguments to filter ReponsesUtilisateurs to delete.
     * @example
     * // Delete a few ReponsesUtilisateurs
     * const { count } = await prisma.reponsesUtilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReponsesUtilisateurDeleteManyArgs>(args?: SelectSubset<T, ReponsesUtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReponsesUtilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesUtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReponsesUtilisateurs
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReponsesUtilisateurUpdateManyArgs>(args: SelectSubset<T, ReponsesUtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReponsesUtilisateurs and returns the data updated in the database.
     * @param {ReponsesUtilisateurUpdateManyAndReturnArgs} args - Arguments to update many ReponsesUtilisateurs.
     * @example
     * // Update many ReponsesUtilisateurs
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReponsesUtilisateurs and only return the `id`
     * const reponsesUtilisateurWithIdOnly = await prisma.reponsesUtilisateur.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReponsesUtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, ReponsesUtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReponsesUtilisateur.
     * @param {ReponsesUtilisateurUpsertArgs} args - Arguments to update or create a ReponsesUtilisateur.
     * @example
     * // Update or create a ReponsesUtilisateur
     * const reponsesUtilisateur = await prisma.reponsesUtilisateur.upsert({
     *   create: {
     *     // ... data to create a ReponsesUtilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReponsesUtilisateur we want to update
     *   }
     * })
     */
    upsert<T extends ReponsesUtilisateurUpsertArgs>(args: SelectSubset<T, ReponsesUtilisateurUpsertArgs<ExtArgs>>): Prisma__ReponsesUtilisateurClient<$Result.GetResult<Prisma.$ReponsesUtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReponsesUtilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesUtilisateurCountArgs} args - Arguments to filter ReponsesUtilisateurs to count.
     * @example
     * // Count the number of ReponsesUtilisateurs
     * const count = await prisma.reponsesUtilisateur.count({
     *   where: {
     *     // ... the filter for the ReponsesUtilisateurs we want to count
     *   }
     * })
    **/
    count<T extends ReponsesUtilisateurCountArgs>(
      args?: Subset<T, ReponsesUtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReponsesUtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReponsesUtilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesUtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReponsesUtilisateurAggregateArgs>(args: Subset<T, ReponsesUtilisateurAggregateArgs>): Prisma.PrismaPromise<GetReponsesUtilisateurAggregateType<T>>

    /**
     * Group by ReponsesUtilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReponsesUtilisateurGroupByArgs} args - Group by arguments.
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
      T extends ReponsesUtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReponsesUtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: ReponsesUtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReponsesUtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReponsesUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReponsesUtilisateur model
   */
  readonly fields: ReponsesUtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReponsesUtilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReponsesUtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reponses<T extends ReponsesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReponsesDefaultArgs<ExtArgs>>): Prisma__ReponsesClient<$Result.GetResult<Prisma.$ReponsesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReponsesUtilisateur model
   */
  interface ReponsesUtilisateurFieldRefs {
    readonly id: FieldRef<"ReponsesUtilisateur", 'String'>
    readonly reponsesId: FieldRef<"ReponsesUtilisateur", 'String'>
    readonly userId: FieldRef<"ReponsesUtilisateur", 'String'>
    readonly createdAt: FieldRef<"ReponsesUtilisateur", 'DateTime'>
    readonly updatedAt: FieldRef<"ReponsesUtilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReponsesUtilisateur findUnique
   */
  export type ReponsesUtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which ReponsesUtilisateur to fetch.
     */
    where: ReponsesUtilisateurWhereUniqueInput
  }

  /**
   * ReponsesUtilisateur findUniqueOrThrow
   */
  export type ReponsesUtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which ReponsesUtilisateur to fetch.
     */
    where: ReponsesUtilisateurWhereUniqueInput
  }

  /**
   * ReponsesUtilisateur findFirst
   */
  export type ReponsesUtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which ReponsesUtilisateur to fetch.
     */
    where?: ReponsesUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReponsesUtilisateurs to fetch.
     */
    orderBy?: ReponsesUtilisateurOrderByWithRelationInput | ReponsesUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReponsesUtilisateurs.
     */
    cursor?: ReponsesUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReponsesUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReponsesUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReponsesUtilisateurs.
     */
    distinct?: ReponsesUtilisateurScalarFieldEnum | ReponsesUtilisateurScalarFieldEnum[]
  }

  /**
   * ReponsesUtilisateur findFirstOrThrow
   */
  export type ReponsesUtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which ReponsesUtilisateur to fetch.
     */
    where?: ReponsesUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReponsesUtilisateurs to fetch.
     */
    orderBy?: ReponsesUtilisateurOrderByWithRelationInput | ReponsesUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReponsesUtilisateurs.
     */
    cursor?: ReponsesUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReponsesUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReponsesUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReponsesUtilisateurs.
     */
    distinct?: ReponsesUtilisateurScalarFieldEnum | ReponsesUtilisateurScalarFieldEnum[]
  }

  /**
   * ReponsesUtilisateur findMany
   */
  export type ReponsesUtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which ReponsesUtilisateurs to fetch.
     */
    where?: ReponsesUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReponsesUtilisateurs to fetch.
     */
    orderBy?: ReponsesUtilisateurOrderByWithRelationInput | ReponsesUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReponsesUtilisateurs.
     */
    cursor?: ReponsesUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReponsesUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReponsesUtilisateurs.
     */
    skip?: number
    distinct?: ReponsesUtilisateurScalarFieldEnum | ReponsesUtilisateurScalarFieldEnum[]
  }

  /**
   * ReponsesUtilisateur create
   */
  export type ReponsesUtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a ReponsesUtilisateur.
     */
    data: XOR<ReponsesUtilisateurCreateInput, ReponsesUtilisateurUncheckedCreateInput>
  }

  /**
   * ReponsesUtilisateur createMany
   */
  export type ReponsesUtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReponsesUtilisateurs.
     */
    data: ReponsesUtilisateurCreateManyInput | ReponsesUtilisateurCreateManyInput[]
  }

  /**
   * ReponsesUtilisateur createManyAndReturn
   */
  export type ReponsesUtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many ReponsesUtilisateurs.
     */
    data: ReponsesUtilisateurCreateManyInput | ReponsesUtilisateurCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReponsesUtilisateur update
   */
  export type ReponsesUtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a ReponsesUtilisateur.
     */
    data: XOR<ReponsesUtilisateurUpdateInput, ReponsesUtilisateurUncheckedUpdateInput>
    /**
     * Choose, which ReponsesUtilisateur to update.
     */
    where: ReponsesUtilisateurWhereUniqueInput
  }

  /**
   * ReponsesUtilisateur updateMany
   */
  export type ReponsesUtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReponsesUtilisateurs.
     */
    data: XOR<ReponsesUtilisateurUpdateManyMutationInput, ReponsesUtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which ReponsesUtilisateurs to update
     */
    where?: ReponsesUtilisateurWhereInput
    /**
     * Limit how many ReponsesUtilisateurs to update.
     */
    limit?: number
  }

  /**
   * ReponsesUtilisateur updateManyAndReturn
   */
  export type ReponsesUtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update ReponsesUtilisateurs.
     */
    data: XOR<ReponsesUtilisateurUpdateManyMutationInput, ReponsesUtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which ReponsesUtilisateurs to update
     */
    where?: ReponsesUtilisateurWhereInput
    /**
     * Limit how many ReponsesUtilisateurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReponsesUtilisateur upsert
   */
  export type ReponsesUtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the ReponsesUtilisateur to update in case it exists.
     */
    where: ReponsesUtilisateurWhereUniqueInput
    /**
     * In case the ReponsesUtilisateur found by the `where` argument doesn't exist, create a new ReponsesUtilisateur with this data.
     */
    create: XOR<ReponsesUtilisateurCreateInput, ReponsesUtilisateurUncheckedCreateInput>
    /**
     * In case the ReponsesUtilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReponsesUtilisateurUpdateInput, ReponsesUtilisateurUncheckedUpdateInput>
  }

  /**
   * ReponsesUtilisateur delete
   */
  export type ReponsesUtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
    /**
     * Filter which ReponsesUtilisateur to delete.
     */
    where: ReponsesUtilisateurWhereUniqueInput
  }

  /**
   * ReponsesUtilisateur deleteMany
   */
  export type ReponsesUtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReponsesUtilisateurs to delete
     */
    where?: ReponsesUtilisateurWhereInput
    /**
     * Limit how many ReponsesUtilisateurs to delete.
     */
    limit?: number
  }

  /**
   * ReponsesUtilisateur without action
   */
  export type ReponsesUtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReponsesUtilisateur
     */
    select?: ReponsesUtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReponsesUtilisateur
     */
    omit?: ReponsesUtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReponsesUtilisateurInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nom: 'nom',
    prenom: 'prenom',
    password: 'password',
    dataInscription: 'dataInscription',
    derniereConnexion: 'derniereConnexion',
    typesUtilisateur: 'typesUtilisateur',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    classesId: 'classesId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClassesScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum]


  export const MatieresScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    classesId: 'classesId',
    pointsTotalMatiere: 'pointsTotalMatiere',
    pointsSeuilMatiere: 'pointsSeuilMatiere',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatieresScalarFieldEnum = (typeof MatieresScalarFieldEnum)[keyof typeof MatieresScalarFieldEnum]


  export const LeconsScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    matieresId: 'matieresId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeconsScalarFieldEnum = (typeof LeconsScalarFieldEnum)[keyof typeof LeconsScalarFieldEnum]


  export const SousLeconsScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    leconsId: 'leconsId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SousLeconsScalarFieldEnum = (typeof SousLeconsScalarFieldEnum)[keyof typeof SousLeconsScalarFieldEnum]


  export const ExercicesScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    matieresId: 'matieresId',
    sousLeconsId: 'sousLeconsId',
    leconId: 'leconId',
    typesExercice: 'typesExercice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExercicesScalarFieldEnum = (typeof ExercicesScalarFieldEnum)[keyof typeof ExercicesScalarFieldEnum]


  export const OptionsQCMScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    exercicesId: 'exercicesId',
    points: 'points',
    isCorrect: 'isCorrect',
    isSelected: 'isSelected',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OptionsQCMScalarFieldEnum = (typeof OptionsQCMScalarFieldEnum)[keyof typeof OptionsQCMScalarFieldEnum]


  export const LeconsUtilisateurScalarFieldEnum: {
    id: 'id',
    leconsId: 'leconsId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeconsUtilisateurScalarFieldEnum = (typeof LeconsUtilisateurScalarFieldEnum)[keyof typeof LeconsUtilisateurScalarFieldEnum]


  export const ReponsesScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    exercicesId: 'exercicesId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReponsesScalarFieldEnum = (typeof ReponsesScalarFieldEnum)[keyof typeof ReponsesScalarFieldEnum]


  export const ReponsesUtilisateurScalarFieldEnum: {
    id: 'id',
    reponsesId: 'reponsesId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReponsesUtilisateurScalarFieldEnum = (typeof ReponsesUtilisateurScalarFieldEnum)[keyof typeof ReponsesUtilisateurScalarFieldEnum]


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
   * Reference to a field of type 'TypesUtilisateur'
   */
  export type EnumTypesUtilisateurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypesUtilisateur'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'TypesExercice'
   */
  export type EnumTypesExerciceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypesExercice'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    nom?: StringNullableFilter<"User"> | string | null
    prenom?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    dataInscription?: StringNullableFilter<"User"> | string | null
    derniereConnexion?: DateTimeNullableFilter<"User"> | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFilter<"User"> | $Enums.TypesUtilisateur
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    classesId?: StringNullableFilter<"User"> | string | null
    ReponsesUtilisateur?: ReponsesUtilisateurListRelationFilter
    LeconsUtilisateur?: LeconsUtilisateurListRelationFilter
    classe?: XOR<ClassesNullableScalarRelationFilter, ClassesWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    password?: SortOrder
    dataInscription?: SortOrderInput | SortOrder
    derniereConnexion?: SortOrderInput | SortOrder
    typesUtilisateur?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classesId?: SortOrderInput | SortOrder
    ReponsesUtilisateur?: ReponsesUtilisateurOrderByRelationAggregateInput
    LeconsUtilisateur?: LeconsUtilisateurOrderByRelationAggregateInput
    classe?: ClassesOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringNullableFilter<"User"> | string | null
    prenom?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    dataInscription?: StringNullableFilter<"User"> | string | null
    derniereConnexion?: DateTimeNullableFilter<"User"> | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFilter<"User"> | $Enums.TypesUtilisateur
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    classesId?: StringNullableFilter<"User"> | string | null
    ReponsesUtilisateur?: ReponsesUtilisateurListRelationFilter
    LeconsUtilisateur?: LeconsUtilisateurListRelationFilter
    classe?: XOR<ClassesNullableScalarRelationFilter, ClassesWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    password?: SortOrder
    dataInscription?: SortOrderInput | SortOrder
    derniereConnexion?: SortOrderInput | SortOrder
    typesUtilisateur?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classesId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    nom?: StringNullableWithAggregatesFilter<"User"> | string | null
    prenom?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    dataInscription?: StringNullableWithAggregatesFilter<"User"> | string | null
    derniereConnexion?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurWithAggregatesFilter<"User"> | $Enums.TypesUtilisateur
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    classesId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ClassesWhereInput = {
    AND?: ClassesWhereInput | ClassesWhereInput[]
    OR?: ClassesWhereInput[]
    NOT?: ClassesWhereInput | ClassesWhereInput[]
    id?: StringFilter<"Classes"> | string
    nom?: StringFilter<"Classes"> | string
    createdAt?: DateTimeFilter<"Classes"> | Date | string
    updatedAt?: DateTimeFilter<"Classes"> | Date | string
    Matieres?: MatieresListRelationFilter
    User?: UserListRelationFilter
  }

  export type ClassesOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Matieres?: MatieresOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type ClassesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassesWhereInput | ClassesWhereInput[]
    OR?: ClassesWhereInput[]
    NOT?: ClassesWhereInput | ClassesWhereInput[]
    nom?: StringFilter<"Classes"> | string
    createdAt?: DateTimeFilter<"Classes"> | Date | string
    updatedAt?: DateTimeFilter<"Classes"> | Date | string
    Matieres?: MatieresListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type ClassesOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassesCountOrderByAggregateInput
    _max?: ClassesMaxOrderByAggregateInput
    _min?: ClassesMinOrderByAggregateInput
  }

  export type ClassesScalarWhereWithAggregatesInput = {
    AND?: ClassesScalarWhereWithAggregatesInput | ClassesScalarWhereWithAggregatesInput[]
    OR?: ClassesScalarWhereWithAggregatesInput[]
    NOT?: ClassesScalarWhereWithAggregatesInput | ClassesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Classes"> | string
    nom?: StringWithAggregatesFilter<"Classes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Classes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Classes"> | Date | string
  }

  export type MatieresWhereInput = {
    AND?: MatieresWhereInput | MatieresWhereInput[]
    OR?: MatieresWhereInput[]
    NOT?: MatieresWhereInput | MatieresWhereInput[]
    id?: StringFilter<"Matieres"> | string
    nom?: StringFilter<"Matieres"> | string
    description?: StringNullableFilter<"Matieres"> | string | null
    classesId?: StringFilter<"Matieres"> | string
    pointsTotalMatiere?: IntNullableFilter<"Matieres"> | number | null
    pointsSeuilMatiere?: IntNullableFilter<"Matieres"> | number | null
    createdAt?: DateTimeFilter<"Matieres"> | Date | string
    updatedAt?: DateTimeFilter<"Matieres"> | Date | string
    classes?: XOR<ClassesScalarRelationFilter, ClassesWhereInput>
    Lecons?: LeconsListRelationFilter
    Exercices?: ExercicesListRelationFilter
  }

  export type MatieresOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    classesId?: SortOrder
    pointsTotalMatiere?: SortOrderInput | SortOrder
    pointsSeuilMatiere?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classes?: ClassesOrderByWithRelationInput
    Lecons?: LeconsOrderByRelationAggregateInput
    Exercices?: ExercicesOrderByRelationAggregateInput
  }

  export type MatieresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatieresWhereInput | MatieresWhereInput[]
    OR?: MatieresWhereInput[]
    NOT?: MatieresWhereInput | MatieresWhereInput[]
    nom?: StringFilter<"Matieres"> | string
    description?: StringNullableFilter<"Matieres"> | string | null
    classesId?: StringFilter<"Matieres"> | string
    pointsTotalMatiere?: IntNullableFilter<"Matieres"> | number | null
    pointsSeuilMatiere?: IntNullableFilter<"Matieres"> | number | null
    createdAt?: DateTimeFilter<"Matieres"> | Date | string
    updatedAt?: DateTimeFilter<"Matieres"> | Date | string
    classes?: XOR<ClassesScalarRelationFilter, ClassesWhereInput>
    Lecons?: LeconsListRelationFilter
    Exercices?: ExercicesListRelationFilter
  }, "id">

  export type MatieresOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    classesId?: SortOrder
    pointsTotalMatiere?: SortOrderInput | SortOrder
    pointsSeuilMatiere?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatieresCountOrderByAggregateInput
    _avg?: MatieresAvgOrderByAggregateInput
    _max?: MatieresMaxOrderByAggregateInput
    _min?: MatieresMinOrderByAggregateInput
    _sum?: MatieresSumOrderByAggregateInput
  }

  export type MatieresScalarWhereWithAggregatesInput = {
    AND?: MatieresScalarWhereWithAggregatesInput | MatieresScalarWhereWithAggregatesInput[]
    OR?: MatieresScalarWhereWithAggregatesInput[]
    NOT?: MatieresScalarWhereWithAggregatesInput | MatieresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Matieres"> | string
    nom?: StringWithAggregatesFilter<"Matieres"> | string
    description?: StringNullableWithAggregatesFilter<"Matieres"> | string | null
    classesId?: StringWithAggregatesFilter<"Matieres"> | string
    pointsTotalMatiere?: IntNullableWithAggregatesFilter<"Matieres"> | number | null
    pointsSeuilMatiere?: IntNullableWithAggregatesFilter<"Matieres"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Matieres"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Matieres"> | Date | string
  }

  export type LeconsWhereInput = {
    AND?: LeconsWhereInput | LeconsWhereInput[]
    OR?: LeconsWhereInput[]
    NOT?: LeconsWhereInput | LeconsWhereInput[]
    id?: StringFilter<"Lecons"> | string
    nom?: StringFilter<"Lecons"> | string
    description?: StringNullableFilter<"Lecons"> | string | null
    matieresId?: StringFilter<"Lecons"> | string
    createdAt?: DateTimeFilter<"Lecons"> | Date | string
    updatedAt?: DateTimeFilter<"Lecons"> | Date | string
    matieres?: XOR<MatieresScalarRelationFilter, MatieresWhereInput>
    SousLecons?: SousLeconsListRelationFilter
    LeconsUtilisateur?: LeconsUtilisateurListRelationFilter
    Exercices?: ExercicesListRelationFilter
  }

  export type LeconsOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    matieresId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matieres?: MatieresOrderByWithRelationInput
    SousLecons?: SousLeconsOrderByRelationAggregateInput
    LeconsUtilisateur?: LeconsUtilisateurOrderByRelationAggregateInput
    Exercices?: ExercicesOrderByRelationAggregateInput
  }

  export type LeconsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeconsWhereInput | LeconsWhereInput[]
    OR?: LeconsWhereInput[]
    NOT?: LeconsWhereInput | LeconsWhereInput[]
    nom?: StringFilter<"Lecons"> | string
    description?: StringNullableFilter<"Lecons"> | string | null
    matieresId?: StringFilter<"Lecons"> | string
    createdAt?: DateTimeFilter<"Lecons"> | Date | string
    updatedAt?: DateTimeFilter<"Lecons"> | Date | string
    matieres?: XOR<MatieresScalarRelationFilter, MatieresWhereInput>
    SousLecons?: SousLeconsListRelationFilter
    LeconsUtilisateur?: LeconsUtilisateurListRelationFilter
    Exercices?: ExercicesListRelationFilter
  }, "id">

  export type LeconsOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    matieresId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeconsCountOrderByAggregateInput
    _max?: LeconsMaxOrderByAggregateInput
    _min?: LeconsMinOrderByAggregateInput
  }

  export type LeconsScalarWhereWithAggregatesInput = {
    AND?: LeconsScalarWhereWithAggregatesInput | LeconsScalarWhereWithAggregatesInput[]
    OR?: LeconsScalarWhereWithAggregatesInput[]
    NOT?: LeconsScalarWhereWithAggregatesInput | LeconsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lecons"> | string
    nom?: StringWithAggregatesFilter<"Lecons"> | string
    description?: StringNullableWithAggregatesFilter<"Lecons"> | string | null
    matieresId?: StringWithAggregatesFilter<"Lecons"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lecons"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lecons"> | Date | string
  }

  export type SousLeconsWhereInput = {
    AND?: SousLeconsWhereInput | SousLeconsWhereInput[]
    OR?: SousLeconsWhereInput[]
    NOT?: SousLeconsWhereInput | SousLeconsWhereInput[]
    id?: StringFilter<"SousLecons"> | string
    nom?: StringFilter<"SousLecons"> | string
    description?: StringNullableFilter<"SousLecons"> | string | null
    leconsId?: StringFilter<"SousLecons"> | string
    createdAt?: DateTimeFilter<"SousLecons"> | Date | string
    updatedAt?: DateTimeFilter<"SousLecons"> | Date | string
    lecons?: XOR<LeconsScalarRelationFilter, LeconsWhereInput>
    Exercices?: ExercicesListRelationFilter
  }

  export type SousLeconsOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    leconsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecons?: LeconsOrderByWithRelationInput
    Exercices?: ExercicesOrderByRelationAggregateInput
  }

  export type SousLeconsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SousLeconsWhereInput | SousLeconsWhereInput[]
    OR?: SousLeconsWhereInput[]
    NOT?: SousLeconsWhereInput | SousLeconsWhereInput[]
    nom?: StringFilter<"SousLecons"> | string
    description?: StringNullableFilter<"SousLecons"> | string | null
    leconsId?: StringFilter<"SousLecons"> | string
    createdAt?: DateTimeFilter<"SousLecons"> | Date | string
    updatedAt?: DateTimeFilter<"SousLecons"> | Date | string
    lecons?: XOR<LeconsScalarRelationFilter, LeconsWhereInput>
    Exercices?: ExercicesListRelationFilter
  }, "id">

  export type SousLeconsOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    leconsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SousLeconsCountOrderByAggregateInput
    _max?: SousLeconsMaxOrderByAggregateInput
    _min?: SousLeconsMinOrderByAggregateInput
  }

  export type SousLeconsScalarWhereWithAggregatesInput = {
    AND?: SousLeconsScalarWhereWithAggregatesInput | SousLeconsScalarWhereWithAggregatesInput[]
    OR?: SousLeconsScalarWhereWithAggregatesInput[]
    NOT?: SousLeconsScalarWhereWithAggregatesInput | SousLeconsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SousLecons"> | string
    nom?: StringWithAggregatesFilter<"SousLecons"> | string
    description?: StringNullableWithAggregatesFilter<"SousLecons"> | string | null
    leconsId?: StringWithAggregatesFilter<"SousLecons"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SousLecons"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SousLecons"> | Date | string
  }

  export type ExercicesWhereInput = {
    AND?: ExercicesWhereInput | ExercicesWhereInput[]
    OR?: ExercicesWhereInput[]
    NOT?: ExercicesWhereInput | ExercicesWhereInput[]
    id?: StringFilter<"Exercices"> | string
    nom?: StringFilter<"Exercices"> | string
    description?: StringNullableFilter<"Exercices"> | string | null
    matieresId?: StringFilter<"Exercices"> | string
    sousLeconsId?: StringNullableFilter<"Exercices"> | string | null
    leconId?: StringNullableFilter<"Exercices"> | string | null
    typesExercice?: EnumTypesExerciceFilter<"Exercices"> | $Enums.TypesExercice
    createdAt?: DateTimeFilter<"Exercices"> | Date | string
    updatedAt?: DateTimeFilter<"Exercices"> | Date | string
    sousLecons?: XOR<SousLeconsNullableScalarRelationFilter, SousLeconsWhereInput> | null
    matieres?: XOR<MatieresScalarRelationFilter, MatieresWhereInput>
    lecons?: XOR<LeconsNullableScalarRelationFilter, LeconsWhereInput> | null
    Reponses?: ReponsesListRelationFilter
    OptionsQCM?: OptionsQCMListRelationFilter
  }

  export type ExercicesOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    matieresId?: SortOrder
    sousLeconsId?: SortOrderInput | SortOrder
    leconId?: SortOrderInput | SortOrder
    typesExercice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sousLecons?: SousLeconsOrderByWithRelationInput
    matieres?: MatieresOrderByWithRelationInput
    lecons?: LeconsOrderByWithRelationInput
    Reponses?: ReponsesOrderByRelationAggregateInput
    OptionsQCM?: OptionsQCMOrderByRelationAggregateInput
  }

  export type ExercicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExercicesWhereInput | ExercicesWhereInput[]
    OR?: ExercicesWhereInput[]
    NOT?: ExercicesWhereInput | ExercicesWhereInput[]
    nom?: StringFilter<"Exercices"> | string
    description?: StringNullableFilter<"Exercices"> | string | null
    matieresId?: StringFilter<"Exercices"> | string
    sousLeconsId?: StringNullableFilter<"Exercices"> | string | null
    leconId?: StringNullableFilter<"Exercices"> | string | null
    typesExercice?: EnumTypesExerciceFilter<"Exercices"> | $Enums.TypesExercice
    createdAt?: DateTimeFilter<"Exercices"> | Date | string
    updatedAt?: DateTimeFilter<"Exercices"> | Date | string
    sousLecons?: XOR<SousLeconsNullableScalarRelationFilter, SousLeconsWhereInput> | null
    matieres?: XOR<MatieresScalarRelationFilter, MatieresWhereInput>
    lecons?: XOR<LeconsNullableScalarRelationFilter, LeconsWhereInput> | null
    Reponses?: ReponsesListRelationFilter
    OptionsQCM?: OptionsQCMListRelationFilter
  }, "id">

  export type ExercicesOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    matieresId?: SortOrder
    sousLeconsId?: SortOrderInput | SortOrder
    leconId?: SortOrderInput | SortOrder
    typesExercice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExercicesCountOrderByAggregateInput
    _max?: ExercicesMaxOrderByAggregateInput
    _min?: ExercicesMinOrderByAggregateInput
  }

  export type ExercicesScalarWhereWithAggregatesInput = {
    AND?: ExercicesScalarWhereWithAggregatesInput | ExercicesScalarWhereWithAggregatesInput[]
    OR?: ExercicesScalarWhereWithAggregatesInput[]
    NOT?: ExercicesScalarWhereWithAggregatesInput | ExercicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercices"> | string
    nom?: StringWithAggregatesFilter<"Exercices"> | string
    description?: StringNullableWithAggregatesFilter<"Exercices"> | string | null
    matieresId?: StringWithAggregatesFilter<"Exercices"> | string
    sousLeconsId?: StringNullableWithAggregatesFilter<"Exercices"> | string | null
    leconId?: StringNullableWithAggregatesFilter<"Exercices"> | string | null
    typesExercice?: EnumTypesExerciceWithAggregatesFilter<"Exercices"> | $Enums.TypesExercice
    createdAt?: DateTimeWithAggregatesFilter<"Exercices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exercices"> | Date | string
  }

  export type OptionsQCMWhereInput = {
    AND?: OptionsQCMWhereInput | OptionsQCMWhereInput[]
    OR?: OptionsQCMWhereInput[]
    NOT?: OptionsQCMWhereInput | OptionsQCMWhereInput[]
    id?: StringFilter<"OptionsQCM"> | string
    nom?: StringFilter<"OptionsQCM"> | string
    description?: StringNullableFilter<"OptionsQCM"> | string | null
    exercicesId?: StringFilter<"OptionsQCM"> | string
    points?: IntNullableFilter<"OptionsQCM"> | number | null
    isCorrect?: BoolFilter<"OptionsQCM"> | boolean
    isSelected?: BoolFilter<"OptionsQCM"> | boolean
    createdAt?: DateTimeFilter<"OptionsQCM"> | Date | string
    updatedAt?: DateTimeFilter<"OptionsQCM"> | Date | string
    exercices?: XOR<ExercicesScalarRelationFilter, ExercicesWhereInput>
  }

  export type OptionsQCMOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    exercicesId?: SortOrder
    points?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    isSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exercices?: ExercicesOrderByWithRelationInput
  }

  export type OptionsQCMWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OptionsQCMWhereInput | OptionsQCMWhereInput[]
    OR?: OptionsQCMWhereInput[]
    NOT?: OptionsQCMWhereInput | OptionsQCMWhereInput[]
    nom?: StringFilter<"OptionsQCM"> | string
    description?: StringNullableFilter<"OptionsQCM"> | string | null
    exercicesId?: StringFilter<"OptionsQCM"> | string
    points?: IntNullableFilter<"OptionsQCM"> | number | null
    isCorrect?: BoolFilter<"OptionsQCM"> | boolean
    isSelected?: BoolFilter<"OptionsQCM"> | boolean
    createdAt?: DateTimeFilter<"OptionsQCM"> | Date | string
    updatedAt?: DateTimeFilter<"OptionsQCM"> | Date | string
    exercices?: XOR<ExercicesScalarRelationFilter, ExercicesWhereInput>
  }, "id">

  export type OptionsQCMOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    exercicesId?: SortOrder
    points?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    isSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OptionsQCMCountOrderByAggregateInput
    _avg?: OptionsQCMAvgOrderByAggregateInput
    _max?: OptionsQCMMaxOrderByAggregateInput
    _min?: OptionsQCMMinOrderByAggregateInput
    _sum?: OptionsQCMSumOrderByAggregateInput
  }

  export type OptionsQCMScalarWhereWithAggregatesInput = {
    AND?: OptionsQCMScalarWhereWithAggregatesInput | OptionsQCMScalarWhereWithAggregatesInput[]
    OR?: OptionsQCMScalarWhereWithAggregatesInput[]
    NOT?: OptionsQCMScalarWhereWithAggregatesInput | OptionsQCMScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OptionsQCM"> | string
    nom?: StringWithAggregatesFilter<"OptionsQCM"> | string
    description?: StringNullableWithAggregatesFilter<"OptionsQCM"> | string | null
    exercicesId?: StringWithAggregatesFilter<"OptionsQCM"> | string
    points?: IntNullableWithAggregatesFilter<"OptionsQCM"> | number | null
    isCorrect?: BoolWithAggregatesFilter<"OptionsQCM"> | boolean
    isSelected?: BoolWithAggregatesFilter<"OptionsQCM"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OptionsQCM"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OptionsQCM"> | Date | string
  }

  export type LeconsUtilisateurWhereInput = {
    AND?: LeconsUtilisateurWhereInput | LeconsUtilisateurWhereInput[]
    OR?: LeconsUtilisateurWhereInput[]
    NOT?: LeconsUtilisateurWhereInput | LeconsUtilisateurWhereInput[]
    id?: StringFilter<"LeconsUtilisateur"> | string
    leconsId?: StringFilter<"LeconsUtilisateur"> | string
    userId?: StringFilter<"LeconsUtilisateur"> | string
    createdAt?: DateTimeFilter<"LeconsUtilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"LeconsUtilisateur"> | Date | string
    lecons?: XOR<LeconsScalarRelationFilter, LeconsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LeconsUtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    leconsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecons?: LeconsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LeconsUtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeconsUtilisateurWhereInput | LeconsUtilisateurWhereInput[]
    OR?: LeconsUtilisateurWhereInput[]
    NOT?: LeconsUtilisateurWhereInput | LeconsUtilisateurWhereInput[]
    leconsId?: StringFilter<"LeconsUtilisateur"> | string
    userId?: StringFilter<"LeconsUtilisateur"> | string
    createdAt?: DateTimeFilter<"LeconsUtilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"LeconsUtilisateur"> | Date | string
    lecons?: XOR<LeconsScalarRelationFilter, LeconsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LeconsUtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    leconsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeconsUtilisateurCountOrderByAggregateInput
    _max?: LeconsUtilisateurMaxOrderByAggregateInput
    _min?: LeconsUtilisateurMinOrderByAggregateInput
  }

  export type LeconsUtilisateurScalarWhereWithAggregatesInput = {
    AND?: LeconsUtilisateurScalarWhereWithAggregatesInput | LeconsUtilisateurScalarWhereWithAggregatesInput[]
    OR?: LeconsUtilisateurScalarWhereWithAggregatesInput[]
    NOT?: LeconsUtilisateurScalarWhereWithAggregatesInput | LeconsUtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeconsUtilisateur"> | string
    leconsId?: StringWithAggregatesFilter<"LeconsUtilisateur"> | string
    userId?: StringWithAggregatesFilter<"LeconsUtilisateur"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeconsUtilisateur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeconsUtilisateur"> | Date | string
  }

  export type ReponsesWhereInput = {
    AND?: ReponsesWhereInput | ReponsesWhereInput[]
    OR?: ReponsesWhereInput[]
    NOT?: ReponsesWhereInput | ReponsesWhereInput[]
    id?: StringFilter<"Reponses"> | string
    nom?: StringFilter<"Reponses"> | string
    description?: StringNullableFilter<"Reponses"> | string | null
    exercicesId?: StringFilter<"Reponses"> | string
    createdAt?: DateTimeFilter<"Reponses"> | Date | string
    updatedAt?: DateTimeFilter<"Reponses"> | Date | string
    exercices?: XOR<ExercicesScalarRelationFilter, ExercicesWhereInput>
    ReponsesUtilisateur?: ReponsesUtilisateurListRelationFilter
  }

  export type ReponsesOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    exercicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exercices?: ExercicesOrderByWithRelationInput
    ReponsesUtilisateur?: ReponsesUtilisateurOrderByRelationAggregateInput
  }

  export type ReponsesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReponsesWhereInput | ReponsesWhereInput[]
    OR?: ReponsesWhereInput[]
    NOT?: ReponsesWhereInput | ReponsesWhereInput[]
    nom?: StringFilter<"Reponses"> | string
    description?: StringNullableFilter<"Reponses"> | string | null
    exercicesId?: StringFilter<"Reponses"> | string
    createdAt?: DateTimeFilter<"Reponses"> | Date | string
    updatedAt?: DateTimeFilter<"Reponses"> | Date | string
    exercices?: XOR<ExercicesScalarRelationFilter, ExercicesWhereInput>
    ReponsesUtilisateur?: ReponsesUtilisateurListRelationFilter
  }, "id">

  export type ReponsesOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    exercicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReponsesCountOrderByAggregateInput
    _max?: ReponsesMaxOrderByAggregateInput
    _min?: ReponsesMinOrderByAggregateInput
  }

  export type ReponsesScalarWhereWithAggregatesInput = {
    AND?: ReponsesScalarWhereWithAggregatesInput | ReponsesScalarWhereWithAggregatesInput[]
    OR?: ReponsesScalarWhereWithAggregatesInput[]
    NOT?: ReponsesScalarWhereWithAggregatesInput | ReponsesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reponses"> | string
    nom?: StringWithAggregatesFilter<"Reponses"> | string
    description?: StringNullableWithAggregatesFilter<"Reponses"> | string | null
    exercicesId?: StringWithAggregatesFilter<"Reponses"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reponses"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reponses"> | Date | string
  }

  export type ReponsesUtilisateurWhereInput = {
    AND?: ReponsesUtilisateurWhereInput | ReponsesUtilisateurWhereInput[]
    OR?: ReponsesUtilisateurWhereInput[]
    NOT?: ReponsesUtilisateurWhereInput | ReponsesUtilisateurWhereInput[]
    id?: StringFilter<"ReponsesUtilisateur"> | string
    reponsesId?: StringFilter<"ReponsesUtilisateur"> | string
    userId?: StringFilter<"ReponsesUtilisateur"> | string
    createdAt?: DateTimeFilter<"ReponsesUtilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"ReponsesUtilisateur"> | Date | string
    reponses?: XOR<ReponsesScalarRelationFilter, ReponsesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReponsesUtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    reponsesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reponses?: ReponsesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReponsesUtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReponsesUtilisateurWhereInput | ReponsesUtilisateurWhereInput[]
    OR?: ReponsesUtilisateurWhereInput[]
    NOT?: ReponsesUtilisateurWhereInput | ReponsesUtilisateurWhereInput[]
    reponsesId?: StringFilter<"ReponsesUtilisateur"> | string
    userId?: StringFilter<"ReponsesUtilisateur"> | string
    createdAt?: DateTimeFilter<"ReponsesUtilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"ReponsesUtilisateur"> | Date | string
    reponses?: XOR<ReponsesScalarRelationFilter, ReponsesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReponsesUtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    reponsesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReponsesUtilisateurCountOrderByAggregateInput
    _max?: ReponsesUtilisateurMaxOrderByAggregateInput
    _min?: ReponsesUtilisateurMinOrderByAggregateInput
  }

  export type ReponsesUtilisateurScalarWhereWithAggregatesInput = {
    AND?: ReponsesUtilisateurScalarWhereWithAggregatesInput | ReponsesUtilisateurScalarWhereWithAggregatesInput[]
    OR?: ReponsesUtilisateurScalarWhereWithAggregatesInput[]
    NOT?: ReponsesUtilisateurScalarWhereWithAggregatesInput | ReponsesUtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReponsesUtilisateur"> | string
    reponsesId?: StringWithAggregatesFilter<"ReponsesUtilisateur"> | string
    userId?: StringWithAggregatesFilter<"ReponsesUtilisateur"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReponsesUtilisateur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReponsesUtilisateur"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurCreateNestedManyWithoutUserInput
    LeconsUtilisateur?: LeconsUtilisateurCreateNestedManyWithoutUserInput
    classe?: ClassesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
    classesId?: string | null
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedCreateNestedManyWithoutUserInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUpdateManyWithoutUserNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUpdateManyWithoutUserNestedInput
    classe?: ClassesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classesId?: NullableStringFieldUpdateOperationsInput | string | null
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
    classesId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassesCreateInput = {
    id?: string
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Matieres?: MatieresCreateNestedManyWithoutClassesInput
    User?: UserCreateNestedManyWithoutClasseInput
  }

  export type ClassesUncheckedCreateInput = {
    id?: string
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Matieres?: MatieresUncheckedCreateNestedManyWithoutClassesInput
    User?: UserUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClassesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Matieres?: MatieresUpdateManyWithoutClassesNestedInput
    User?: UserUpdateManyWithoutClasseNestedInput
  }

  export type ClassesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Matieres?: MatieresUncheckedUpdateManyWithoutClassesNestedInput
    User?: UserUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type ClassesCreateManyInput = {
    id?: string
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatieresCreateInput = {
    id?: string
    nom: string
    description?: string | null
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes: ClassesCreateNestedOneWithoutMatieresInput
    Lecons?: LeconsCreateNestedManyWithoutMatieresInput
    Exercices?: ExercicesCreateNestedManyWithoutMatieresInput
  }

  export type MatieresUncheckedCreateInput = {
    id?: string
    nom: string
    description?: string | null
    classesId: string
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Lecons?: LeconsUncheckedCreateNestedManyWithoutMatieresInput
    Exercices?: ExercicesUncheckedCreateNestedManyWithoutMatieresInput
  }

  export type MatieresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassesUpdateOneRequiredWithoutMatieresNestedInput
    Lecons?: LeconsUpdateManyWithoutMatieresNestedInput
    Exercices?: ExercicesUpdateManyWithoutMatieresNestedInput
  }

  export type MatieresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classesId?: StringFieldUpdateOperationsInput | string
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Lecons?: LeconsUncheckedUpdateManyWithoutMatieresNestedInput
    Exercices?: ExercicesUncheckedUpdateManyWithoutMatieresNestedInput
  }

  export type MatieresCreateManyInput = {
    id?: string
    nom: string
    description?: string | null
    classesId: string
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatieresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatieresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classesId?: StringFieldUpdateOperationsInput | string
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsCreateInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matieres: MatieresCreateNestedOneWithoutLeconsInput
    SousLecons?: SousLeconsCreateNestedManyWithoutLeconsInput
    LeconsUtilisateur?: LeconsUtilisateurCreateNestedManyWithoutLeconsInput
    Exercices?: ExercicesCreateNestedManyWithoutLeconsInput
  }

  export type LeconsUncheckedCreateInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SousLecons?: SousLeconsUncheckedCreateNestedManyWithoutLeconsInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedCreateNestedManyWithoutLeconsInput
    Exercices?: ExercicesUncheckedCreateNestedManyWithoutLeconsInput
  }

  export type LeconsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matieres?: MatieresUpdateOneRequiredWithoutLeconsNestedInput
    SousLecons?: SousLeconsUpdateManyWithoutLeconsNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUpdateManyWithoutLeconsNestedInput
    Exercices?: ExercicesUpdateManyWithoutLeconsNestedInput
  }

  export type LeconsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SousLecons?: SousLeconsUncheckedUpdateManyWithoutLeconsNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedUpdateManyWithoutLeconsNestedInput
    Exercices?: ExercicesUncheckedUpdateManyWithoutLeconsNestedInput
  }

  export type LeconsCreateManyInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeconsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SousLeconsCreateInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecons: LeconsCreateNestedOneWithoutSousLeconsInput
    Exercices?: ExercicesCreateNestedManyWithoutSousLeconsInput
  }

  export type SousLeconsUncheckedCreateInput = {
    id?: string
    nom: string
    description?: string | null
    leconsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Exercices?: ExercicesUncheckedCreateNestedManyWithoutSousLeconsInput
  }

  export type SousLeconsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecons?: LeconsUpdateOneRequiredWithoutSousLeconsNestedInput
    Exercices?: ExercicesUpdateManyWithoutSousLeconsNestedInput
  }

  export type SousLeconsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leconsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Exercices?: ExercicesUncheckedUpdateManyWithoutSousLeconsNestedInput
  }

  export type SousLeconsCreateManyInput = {
    id?: string
    nom: string
    description?: string | null
    leconsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SousLeconsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SousLeconsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leconsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExercicesCreateInput = {
    id?: string
    nom: string
    description?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    sousLecons?: SousLeconsCreateNestedOneWithoutExercicesInput
    matieres: MatieresCreateNestedOneWithoutExercicesInput
    lecons?: LeconsCreateNestedOneWithoutExercicesInput
    Reponses?: ReponsesCreateNestedManyWithoutExercicesInput
    OptionsQCM?: OptionsQCMCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesUncheckedCreateInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    sousLeconsId?: string | null
    leconId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    Reponses?: ReponsesUncheckedCreateNestedManyWithoutExercicesInput
    OptionsQCM?: OptionsQCMUncheckedCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sousLecons?: SousLeconsUpdateOneWithoutExercicesNestedInput
    matieres?: MatieresUpdateOneRequiredWithoutExercicesNestedInput
    lecons?: LeconsUpdateOneWithoutExercicesNestedInput
    Reponses?: ReponsesUpdateManyWithoutExercicesNestedInput
    OptionsQCM?: OptionsQCMUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    sousLeconsId?: NullableStringFieldUpdateOperationsInput | string | null
    leconId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reponses?: ReponsesUncheckedUpdateManyWithoutExercicesNestedInput
    OptionsQCM?: OptionsQCMUncheckedUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesCreateManyInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    sousLeconsId?: string | null
    leconId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExercicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExercicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    sousLeconsId?: NullableStringFieldUpdateOperationsInput | string | null
    leconId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionsQCMCreateInput = {
    id?: string
    nom: string
    description?: string | null
    points?: number | null
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    exercices: ExercicesCreateNestedOneWithoutOptionsQCMInput
  }

  export type OptionsQCMUncheckedCreateInput = {
    id?: string
    nom: string
    description?: string | null
    exercicesId: string
    points?: number | null
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionsQCMUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercices?: ExercicesUpdateOneRequiredWithoutOptionsQCMNestedInput
  }

  export type OptionsQCMUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    exercicesId?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionsQCMCreateManyInput = {
    id?: string
    nom: string
    description?: string | null
    exercicesId: string
    points?: number | null
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionsQCMUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionsQCMUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    exercicesId?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsUtilisateurCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecons: LeconsCreateNestedOneWithoutLeconsUtilisateurInput
    user: UserCreateNestedOneWithoutLeconsUtilisateurInput
  }

  export type LeconsUtilisateurUncheckedCreateInput = {
    id?: string
    leconsId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeconsUtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecons?: LeconsUpdateOneRequiredWithoutLeconsUtilisateurNestedInput
    user?: UserUpdateOneRequiredWithoutLeconsUtilisateurNestedInput
  }

  export type LeconsUtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leconsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsUtilisateurCreateManyInput = {
    id?: string
    leconsId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeconsUtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsUtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leconsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponsesCreateInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercices: ExercicesCreateNestedOneWithoutReponsesInput
    ReponsesUtilisateur?: ReponsesUtilisateurCreateNestedManyWithoutReponsesInput
  }

  export type ReponsesUncheckedCreateInput = {
    id?: string
    nom: string
    description?: string | null
    exercicesId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedCreateNestedManyWithoutReponsesInput
  }

  export type ReponsesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercices?: ExercicesUpdateOneRequiredWithoutReponsesNestedInput
    ReponsesUtilisateur?: ReponsesUtilisateurUpdateManyWithoutReponsesNestedInput
  }

  export type ReponsesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    exercicesId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedUpdateManyWithoutReponsesNestedInput
  }

  export type ReponsesCreateManyInput = {
    id?: string
    nom: string
    description?: string | null
    exercicesId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReponsesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponsesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    exercicesId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponsesUtilisateurCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reponses: ReponsesCreateNestedOneWithoutReponsesUtilisateurInput
    user: UserCreateNestedOneWithoutReponsesUtilisateurInput
  }

  export type ReponsesUtilisateurUncheckedCreateInput = {
    id?: string
    reponsesId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReponsesUtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reponses?: ReponsesUpdateOneRequiredWithoutReponsesUtilisateurNestedInput
    user?: UserUpdateOneRequiredWithoutReponsesUtilisateurNestedInput
  }

  export type ReponsesUtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reponsesId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponsesUtilisateurCreateManyInput = {
    id?: string
    reponsesId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReponsesUtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponsesUtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reponsesId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type EnumTypesUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.TypesUtilisateur | EnumTypesUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.TypesUtilisateur[]
    notIn?: $Enums.TypesUtilisateur[]
    not?: NestedEnumTypesUtilisateurFilter<$PrismaModel> | $Enums.TypesUtilisateur
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

  export type ReponsesUtilisateurListRelationFilter = {
    every?: ReponsesUtilisateurWhereInput
    some?: ReponsesUtilisateurWhereInput
    none?: ReponsesUtilisateurWhereInput
  }

  export type LeconsUtilisateurListRelationFilter = {
    every?: LeconsUtilisateurWhereInput
    some?: LeconsUtilisateurWhereInput
    none?: LeconsUtilisateurWhereInput
  }

  export type ClassesNullableScalarRelationFilter = {
    is?: ClassesWhereInput | null
    isNot?: ClassesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReponsesUtilisateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeconsUtilisateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    password?: SortOrder
    dataInscription?: SortOrder
    derniereConnexion?: SortOrder
    typesUtilisateur?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classesId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    password?: SortOrder
    dataInscription?: SortOrder
    derniereConnexion?: SortOrder
    typesUtilisateur?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classesId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    password?: SortOrder
    dataInscription?: SortOrder
    derniereConnexion?: SortOrder
    typesUtilisateur?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classesId?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumTypesUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypesUtilisateur | EnumTypesUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.TypesUtilisateur[]
    notIn?: $Enums.TypesUtilisateur[]
    not?: NestedEnumTypesUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.TypesUtilisateur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesUtilisateurFilter<$PrismaModel>
    _max?: NestedEnumTypesUtilisateurFilter<$PrismaModel>
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

  export type MatieresListRelationFilter = {
    every?: MatieresWhereInput
    some?: MatieresWhereInput
    none?: MatieresWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MatieresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassesCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassesMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassesMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ClassesScalarRelationFilter = {
    is?: ClassesWhereInput
    isNot?: ClassesWhereInput
  }

  export type LeconsListRelationFilter = {
    every?: LeconsWhereInput
    some?: LeconsWhereInput
    none?: LeconsWhereInput
  }

  export type ExercicesListRelationFilter = {
    every?: ExercicesWhereInput
    some?: ExercicesWhereInput
    none?: ExercicesWhereInput
  }

  export type LeconsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExercicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatieresCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    classesId?: SortOrder
    pointsTotalMatiere?: SortOrder
    pointsSeuilMatiere?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatieresAvgOrderByAggregateInput = {
    pointsTotalMatiere?: SortOrder
    pointsSeuilMatiere?: SortOrder
  }

  export type MatieresMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    classesId?: SortOrder
    pointsTotalMatiere?: SortOrder
    pointsSeuilMatiere?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatieresMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    classesId?: SortOrder
    pointsTotalMatiere?: SortOrder
    pointsSeuilMatiere?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatieresSumOrderByAggregateInput = {
    pointsTotalMatiere?: SortOrder
    pointsSeuilMatiere?: SortOrder
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

  export type MatieresScalarRelationFilter = {
    is?: MatieresWhereInput
    isNot?: MatieresWhereInput
  }

  export type SousLeconsListRelationFilter = {
    every?: SousLeconsWhereInput
    some?: SousLeconsWhereInput
    none?: SousLeconsWhereInput
  }

  export type SousLeconsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeconsCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    matieresId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeconsMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    matieresId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeconsMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    matieresId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeconsScalarRelationFilter = {
    is?: LeconsWhereInput
    isNot?: LeconsWhereInput
  }

  export type SousLeconsCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    leconsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SousLeconsMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    leconsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SousLeconsMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    leconsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTypesExerciceFilter<$PrismaModel = never> = {
    equals?: $Enums.TypesExercice | EnumTypesExerciceFieldRefInput<$PrismaModel>
    in?: $Enums.TypesExercice[]
    notIn?: $Enums.TypesExercice[]
    not?: NestedEnumTypesExerciceFilter<$PrismaModel> | $Enums.TypesExercice
  }

  export type SousLeconsNullableScalarRelationFilter = {
    is?: SousLeconsWhereInput | null
    isNot?: SousLeconsWhereInput | null
  }

  export type LeconsNullableScalarRelationFilter = {
    is?: LeconsWhereInput | null
    isNot?: LeconsWhereInput | null
  }

  export type ReponsesListRelationFilter = {
    every?: ReponsesWhereInput
    some?: ReponsesWhereInput
    none?: ReponsesWhereInput
  }

  export type OptionsQCMListRelationFilter = {
    every?: OptionsQCMWhereInput
    some?: OptionsQCMWhereInput
    none?: OptionsQCMWhereInput
  }

  export type ReponsesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OptionsQCMOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExercicesCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    matieresId?: SortOrder
    sousLeconsId?: SortOrder
    leconId?: SortOrder
    typesExercice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExercicesMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    matieresId?: SortOrder
    sousLeconsId?: SortOrder
    leconId?: SortOrder
    typesExercice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExercicesMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    matieresId?: SortOrder
    sousLeconsId?: SortOrder
    leconId?: SortOrder
    typesExercice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTypesExerciceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypesExercice | EnumTypesExerciceFieldRefInput<$PrismaModel>
    in?: $Enums.TypesExercice[]
    notIn?: $Enums.TypesExercice[]
    not?: NestedEnumTypesExerciceWithAggregatesFilter<$PrismaModel> | $Enums.TypesExercice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesExerciceFilter<$PrismaModel>
    _max?: NestedEnumTypesExerciceFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ExercicesScalarRelationFilter = {
    is?: ExercicesWhereInput
    isNot?: ExercicesWhereInput
  }

  export type OptionsQCMCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    exercicesId?: SortOrder
    points?: SortOrder
    isCorrect?: SortOrder
    isSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OptionsQCMAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type OptionsQCMMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    exercicesId?: SortOrder
    points?: SortOrder
    isCorrect?: SortOrder
    isSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OptionsQCMMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    exercicesId?: SortOrder
    points?: SortOrder
    isCorrect?: SortOrder
    isSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OptionsQCMSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LeconsUtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    leconsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeconsUtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    leconsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeconsUtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    leconsId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReponsesCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    exercicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReponsesMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    exercicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReponsesMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    exercicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReponsesScalarRelationFilter = {
    is?: ReponsesWhereInput
    isNot?: ReponsesWhereInput
  }

  export type ReponsesUtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    reponsesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReponsesUtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    reponsesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReponsesUtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    reponsesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReponsesUtilisateurCreateNestedManyWithoutUserInput = {
    create?: XOR<ReponsesUtilisateurCreateWithoutUserInput, ReponsesUtilisateurUncheckedCreateWithoutUserInput> | ReponsesUtilisateurCreateWithoutUserInput[] | ReponsesUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReponsesUtilisateurCreateOrConnectWithoutUserInput | ReponsesUtilisateurCreateOrConnectWithoutUserInput[]
    createMany?: ReponsesUtilisateurCreateManyUserInputEnvelope
    connect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
  }

  export type LeconsUtilisateurCreateNestedManyWithoutUserInput = {
    create?: XOR<LeconsUtilisateurCreateWithoutUserInput, LeconsUtilisateurUncheckedCreateWithoutUserInput> | LeconsUtilisateurCreateWithoutUserInput[] | LeconsUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeconsUtilisateurCreateOrConnectWithoutUserInput | LeconsUtilisateurCreateOrConnectWithoutUserInput[]
    createMany?: LeconsUtilisateurCreateManyUserInputEnvelope
    connect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
  }

  export type ClassesCreateNestedOneWithoutUserInput = {
    create?: XOR<ClassesCreateWithoutUserInput, ClassesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClassesCreateOrConnectWithoutUserInput
    connect?: ClassesWhereUniqueInput
  }

  export type ReponsesUtilisateurUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReponsesUtilisateurCreateWithoutUserInput, ReponsesUtilisateurUncheckedCreateWithoutUserInput> | ReponsesUtilisateurCreateWithoutUserInput[] | ReponsesUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReponsesUtilisateurCreateOrConnectWithoutUserInput | ReponsesUtilisateurCreateOrConnectWithoutUserInput[]
    createMany?: ReponsesUtilisateurCreateManyUserInputEnvelope
    connect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
  }

  export type LeconsUtilisateurUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeconsUtilisateurCreateWithoutUserInput, LeconsUtilisateurUncheckedCreateWithoutUserInput> | LeconsUtilisateurCreateWithoutUserInput[] | LeconsUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeconsUtilisateurCreateOrConnectWithoutUserInput | LeconsUtilisateurCreateOrConnectWithoutUserInput[]
    createMany?: LeconsUtilisateurCreateManyUserInputEnvelope
    connect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumTypesUtilisateurFieldUpdateOperationsInput = {
    set?: $Enums.TypesUtilisateur
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReponsesUtilisateurUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReponsesUtilisateurCreateWithoutUserInput, ReponsesUtilisateurUncheckedCreateWithoutUserInput> | ReponsesUtilisateurCreateWithoutUserInput[] | ReponsesUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReponsesUtilisateurCreateOrConnectWithoutUserInput | ReponsesUtilisateurCreateOrConnectWithoutUserInput[]
    upsert?: ReponsesUtilisateurUpsertWithWhereUniqueWithoutUserInput | ReponsesUtilisateurUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReponsesUtilisateurCreateManyUserInputEnvelope
    set?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    disconnect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    delete?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    connect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    update?: ReponsesUtilisateurUpdateWithWhereUniqueWithoutUserInput | ReponsesUtilisateurUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReponsesUtilisateurUpdateManyWithWhereWithoutUserInput | ReponsesUtilisateurUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReponsesUtilisateurScalarWhereInput | ReponsesUtilisateurScalarWhereInput[]
  }

  export type LeconsUtilisateurUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeconsUtilisateurCreateWithoutUserInput, LeconsUtilisateurUncheckedCreateWithoutUserInput> | LeconsUtilisateurCreateWithoutUserInput[] | LeconsUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeconsUtilisateurCreateOrConnectWithoutUserInput | LeconsUtilisateurCreateOrConnectWithoutUserInput[]
    upsert?: LeconsUtilisateurUpsertWithWhereUniqueWithoutUserInput | LeconsUtilisateurUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeconsUtilisateurCreateManyUserInputEnvelope
    set?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    disconnect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    delete?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    connect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    update?: LeconsUtilisateurUpdateWithWhereUniqueWithoutUserInput | LeconsUtilisateurUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeconsUtilisateurUpdateManyWithWhereWithoutUserInput | LeconsUtilisateurUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeconsUtilisateurScalarWhereInput | LeconsUtilisateurScalarWhereInput[]
  }

  export type ClassesUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClassesCreateWithoutUserInput, ClassesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClassesCreateOrConnectWithoutUserInput
    upsert?: ClassesUpsertWithoutUserInput
    disconnect?: ClassesWhereInput | boolean
    delete?: ClassesWhereInput | boolean
    connect?: ClassesWhereUniqueInput
    update?: XOR<XOR<ClassesUpdateToOneWithWhereWithoutUserInput, ClassesUpdateWithoutUserInput>, ClassesUncheckedUpdateWithoutUserInput>
  }

  export type ReponsesUtilisateurUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReponsesUtilisateurCreateWithoutUserInput, ReponsesUtilisateurUncheckedCreateWithoutUserInput> | ReponsesUtilisateurCreateWithoutUserInput[] | ReponsesUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReponsesUtilisateurCreateOrConnectWithoutUserInput | ReponsesUtilisateurCreateOrConnectWithoutUserInput[]
    upsert?: ReponsesUtilisateurUpsertWithWhereUniqueWithoutUserInput | ReponsesUtilisateurUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReponsesUtilisateurCreateManyUserInputEnvelope
    set?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    disconnect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    delete?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    connect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    update?: ReponsesUtilisateurUpdateWithWhereUniqueWithoutUserInput | ReponsesUtilisateurUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReponsesUtilisateurUpdateManyWithWhereWithoutUserInput | ReponsesUtilisateurUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReponsesUtilisateurScalarWhereInput | ReponsesUtilisateurScalarWhereInput[]
  }

  export type LeconsUtilisateurUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeconsUtilisateurCreateWithoutUserInput, LeconsUtilisateurUncheckedCreateWithoutUserInput> | LeconsUtilisateurCreateWithoutUserInput[] | LeconsUtilisateurUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeconsUtilisateurCreateOrConnectWithoutUserInput | LeconsUtilisateurCreateOrConnectWithoutUserInput[]
    upsert?: LeconsUtilisateurUpsertWithWhereUniqueWithoutUserInput | LeconsUtilisateurUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeconsUtilisateurCreateManyUserInputEnvelope
    set?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    disconnect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    delete?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    connect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    update?: LeconsUtilisateurUpdateWithWhereUniqueWithoutUserInput | LeconsUtilisateurUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeconsUtilisateurUpdateManyWithWhereWithoutUserInput | LeconsUtilisateurUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeconsUtilisateurScalarWhereInput | LeconsUtilisateurScalarWhereInput[]
  }

  export type MatieresCreateNestedManyWithoutClassesInput = {
    create?: XOR<MatieresCreateWithoutClassesInput, MatieresUncheckedCreateWithoutClassesInput> | MatieresCreateWithoutClassesInput[] | MatieresUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: MatieresCreateOrConnectWithoutClassesInput | MatieresCreateOrConnectWithoutClassesInput[]
    createMany?: MatieresCreateManyClassesInputEnvelope
    connect?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClasseInput = {
    create?: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput> | UserCreateWithoutClasseInput[] | UserUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClasseInput | UserCreateOrConnectWithoutClasseInput[]
    createMany?: UserCreateManyClasseInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MatieresUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<MatieresCreateWithoutClassesInput, MatieresUncheckedCreateWithoutClassesInput> | MatieresCreateWithoutClassesInput[] | MatieresUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: MatieresCreateOrConnectWithoutClassesInput | MatieresCreateOrConnectWithoutClassesInput[]
    createMany?: MatieresCreateManyClassesInputEnvelope
    connect?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClasseInput = {
    create?: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput> | UserCreateWithoutClasseInput[] | UserUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClasseInput | UserCreateOrConnectWithoutClasseInput[]
    createMany?: UserCreateManyClasseInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MatieresUpdateManyWithoutClassesNestedInput = {
    create?: XOR<MatieresCreateWithoutClassesInput, MatieresUncheckedCreateWithoutClassesInput> | MatieresCreateWithoutClassesInput[] | MatieresUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: MatieresCreateOrConnectWithoutClassesInput | MatieresCreateOrConnectWithoutClassesInput[]
    upsert?: MatieresUpsertWithWhereUniqueWithoutClassesInput | MatieresUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: MatieresCreateManyClassesInputEnvelope
    set?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
    disconnect?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
    delete?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
    connect?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
    update?: MatieresUpdateWithWhereUniqueWithoutClassesInput | MatieresUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: MatieresUpdateManyWithWhereWithoutClassesInput | MatieresUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: MatieresScalarWhereInput | MatieresScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClasseNestedInput = {
    create?: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput> | UserCreateWithoutClasseInput[] | UserUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClasseInput | UserCreateOrConnectWithoutClasseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClasseInput | UserUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: UserCreateManyClasseInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClasseInput | UserUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClasseInput | UserUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MatieresUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<MatieresCreateWithoutClassesInput, MatieresUncheckedCreateWithoutClassesInput> | MatieresCreateWithoutClassesInput[] | MatieresUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: MatieresCreateOrConnectWithoutClassesInput | MatieresCreateOrConnectWithoutClassesInput[]
    upsert?: MatieresUpsertWithWhereUniqueWithoutClassesInput | MatieresUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: MatieresCreateManyClassesInputEnvelope
    set?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
    disconnect?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
    delete?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
    connect?: MatieresWhereUniqueInput | MatieresWhereUniqueInput[]
    update?: MatieresUpdateWithWhereUniqueWithoutClassesInput | MatieresUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: MatieresUpdateManyWithWhereWithoutClassesInput | MatieresUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: MatieresScalarWhereInput | MatieresScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput> | UserCreateWithoutClasseInput[] | UserUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClasseInput | UserCreateOrConnectWithoutClasseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClasseInput | UserUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: UserCreateManyClasseInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClasseInput | UserUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClasseInput | UserUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClassesCreateNestedOneWithoutMatieresInput = {
    create?: XOR<ClassesCreateWithoutMatieresInput, ClassesUncheckedCreateWithoutMatieresInput>
    connectOrCreate?: ClassesCreateOrConnectWithoutMatieresInput
    connect?: ClassesWhereUniqueInput
  }

  export type LeconsCreateNestedManyWithoutMatieresInput = {
    create?: XOR<LeconsCreateWithoutMatieresInput, LeconsUncheckedCreateWithoutMatieresInput> | LeconsCreateWithoutMatieresInput[] | LeconsUncheckedCreateWithoutMatieresInput[]
    connectOrCreate?: LeconsCreateOrConnectWithoutMatieresInput | LeconsCreateOrConnectWithoutMatieresInput[]
    createMany?: LeconsCreateManyMatieresInputEnvelope
    connect?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
  }

  export type ExercicesCreateNestedManyWithoutMatieresInput = {
    create?: XOR<ExercicesCreateWithoutMatieresInput, ExercicesUncheckedCreateWithoutMatieresInput> | ExercicesCreateWithoutMatieresInput[] | ExercicesUncheckedCreateWithoutMatieresInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutMatieresInput | ExercicesCreateOrConnectWithoutMatieresInput[]
    createMany?: ExercicesCreateManyMatieresInputEnvelope
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
  }

  export type LeconsUncheckedCreateNestedManyWithoutMatieresInput = {
    create?: XOR<LeconsCreateWithoutMatieresInput, LeconsUncheckedCreateWithoutMatieresInput> | LeconsCreateWithoutMatieresInput[] | LeconsUncheckedCreateWithoutMatieresInput[]
    connectOrCreate?: LeconsCreateOrConnectWithoutMatieresInput | LeconsCreateOrConnectWithoutMatieresInput[]
    createMany?: LeconsCreateManyMatieresInputEnvelope
    connect?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
  }

  export type ExercicesUncheckedCreateNestedManyWithoutMatieresInput = {
    create?: XOR<ExercicesCreateWithoutMatieresInput, ExercicesUncheckedCreateWithoutMatieresInput> | ExercicesCreateWithoutMatieresInput[] | ExercicesUncheckedCreateWithoutMatieresInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutMatieresInput | ExercicesCreateOrConnectWithoutMatieresInput[]
    createMany?: ExercicesCreateManyMatieresInputEnvelope
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassesUpdateOneRequiredWithoutMatieresNestedInput = {
    create?: XOR<ClassesCreateWithoutMatieresInput, ClassesUncheckedCreateWithoutMatieresInput>
    connectOrCreate?: ClassesCreateOrConnectWithoutMatieresInput
    upsert?: ClassesUpsertWithoutMatieresInput
    connect?: ClassesWhereUniqueInput
    update?: XOR<XOR<ClassesUpdateToOneWithWhereWithoutMatieresInput, ClassesUpdateWithoutMatieresInput>, ClassesUncheckedUpdateWithoutMatieresInput>
  }

  export type LeconsUpdateManyWithoutMatieresNestedInput = {
    create?: XOR<LeconsCreateWithoutMatieresInput, LeconsUncheckedCreateWithoutMatieresInput> | LeconsCreateWithoutMatieresInput[] | LeconsUncheckedCreateWithoutMatieresInput[]
    connectOrCreate?: LeconsCreateOrConnectWithoutMatieresInput | LeconsCreateOrConnectWithoutMatieresInput[]
    upsert?: LeconsUpsertWithWhereUniqueWithoutMatieresInput | LeconsUpsertWithWhereUniqueWithoutMatieresInput[]
    createMany?: LeconsCreateManyMatieresInputEnvelope
    set?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
    disconnect?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
    delete?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
    connect?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
    update?: LeconsUpdateWithWhereUniqueWithoutMatieresInput | LeconsUpdateWithWhereUniqueWithoutMatieresInput[]
    updateMany?: LeconsUpdateManyWithWhereWithoutMatieresInput | LeconsUpdateManyWithWhereWithoutMatieresInput[]
    deleteMany?: LeconsScalarWhereInput | LeconsScalarWhereInput[]
  }

  export type ExercicesUpdateManyWithoutMatieresNestedInput = {
    create?: XOR<ExercicesCreateWithoutMatieresInput, ExercicesUncheckedCreateWithoutMatieresInput> | ExercicesCreateWithoutMatieresInput[] | ExercicesUncheckedCreateWithoutMatieresInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutMatieresInput | ExercicesCreateOrConnectWithoutMatieresInput[]
    upsert?: ExercicesUpsertWithWhereUniqueWithoutMatieresInput | ExercicesUpsertWithWhereUniqueWithoutMatieresInput[]
    createMany?: ExercicesCreateManyMatieresInputEnvelope
    set?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    disconnect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    delete?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    update?: ExercicesUpdateWithWhereUniqueWithoutMatieresInput | ExercicesUpdateWithWhereUniqueWithoutMatieresInput[]
    updateMany?: ExercicesUpdateManyWithWhereWithoutMatieresInput | ExercicesUpdateManyWithWhereWithoutMatieresInput[]
    deleteMany?: ExercicesScalarWhereInput | ExercicesScalarWhereInput[]
  }

  export type LeconsUncheckedUpdateManyWithoutMatieresNestedInput = {
    create?: XOR<LeconsCreateWithoutMatieresInput, LeconsUncheckedCreateWithoutMatieresInput> | LeconsCreateWithoutMatieresInput[] | LeconsUncheckedCreateWithoutMatieresInput[]
    connectOrCreate?: LeconsCreateOrConnectWithoutMatieresInput | LeconsCreateOrConnectWithoutMatieresInput[]
    upsert?: LeconsUpsertWithWhereUniqueWithoutMatieresInput | LeconsUpsertWithWhereUniqueWithoutMatieresInput[]
    createMany?: LeconsCreateManyMatieresInputEnvelope
    set?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
    disconnect?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
    delete?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
    connect?: LeconsWhereUniqueInput | LeconsWhereUniqueInput[]
    update?: LeconsUpdateWithWhereUniqueWithoutMatieresInput | LeconsUpdateWithWhereUniqueWithoutMatieresInput[]
    updateMany?: LeconsUpdateManyWithWhereWithoutMatieresInput | LeconsUpdateManyWithWhereWithoutMatieresInput[]
    deleteMany?: LeconsScalarWhereInput | LeconsScalarWhereInput[]
  }

  export type ExercicesUncheckedUpdateManyWithoutMatieresNestedInput = {
    create?: XOR<ExercicesCreateWithoutMatieresInput, ExercicesUncheckedCreateWithoutMatieresInput> | ExercicesCreateWithoutMatieresInput[] | ExercicesUncheckedCreateWithoutMatieresInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutMatieresInput | ExercicesCreateOrConnectWithoutMatieresInput[]
    upsert?: ExercicesUpsertWithWhereUniqueWithoutMatieresInput | ExercicesUpsertWithWhereUniqueWithoutMatieresInput[]
    createMany?: ExercicesCreateManyMatieresInputEnvelope
    set?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    disconnect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    delete?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    update?: ExercicesUpdateWithWhereUniqueWithoutMatieresInput | ExercicesUpdateWithWhereUniqueWithoutMatieresInput[]
    updateMany?: ExercicesUpdateManyWithWhereWithoutMatieresInput | ExercicesUpdateManyWithWhereWithoutMatieresInput[]
    deleteMany?: ExercicesScalarWhereInput | ExercicesScalarWhereInput[]
  }

  export type MatieresCreateNestedOneWithoutLeconsInput = {
    create?: XOR<MatieresCreateWithoutLeconsInput, MatieresUncheckedCreateWithoutLeconsInput>
    connectOrCreate?: MatieresCreateOrConnectWithoutLeconsInput
    connect?: MatieresWhereUniqueInput
  }

  export type SousLeconsCreateNestedManyWithoutLeconsInput = {
    create?: XOR<SousLeconsCreateWithoutLeconsInput, SousLeconsUncheckedCreateWithoutLeconsInput> | SousLeconsCreateWithoutLeconsInput[] | SousLeconsUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: SousLeconsCreateOrConnectWithoutLeconsInput | SousLeconsCreateOrConnectWithoutLeconsInput[]
    createMany?: SousLeconsCreateManyLeconsInputEnvelope
    connect?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
  }

  export type LeconsUtilisateurCreateNestedManyWithoutLeconsInput = {
    create?: XOR<LeconsUtilisateurCreateWithoutLeconsInput, LeconsUtilisateurUncheckedCreateWithoutLeconsInput> | LeconsUtilisateurCreateWithoutLeconsInput[] | LeconsUtilisateurUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: LeconsUtilisateurCreateOrConnectWithoutLeconsInput | LeconsUtilisateurCreateOrConnectWithoutLeconsInput[]
    createMany?: LeconsUtilisateurCreateManyLeconsInputEnvelope
    connect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
  }

  export type ExercicesCreateNestedManyWithoutLeconsInput = {
    create?: XOR<ExercicesCreateWithoutLeconsInput, ExercicesUncheckedCreateWithoutLeconsInput> | ExercicesCreateWithoutLeconsInput[] | ExercicesUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutLeconsInput | ExercicesCreateOrConnectWithoutLeconsInput[]
    createMany?: ExercicesCreateManyLeconsInputEnvelope
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
  }

  export type SousLeconsUncheckedCreateNestedManyWithoutLeconsInput = {
    create?: XOR<SousLeconsCreateWithoutLeconsInput, SousLeconsUncheckedCreateWithoutLeconsInput> | SousLeconsCreateWithoutLeconsInput[] | SousLeconsUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: SousLeconsCreateOrConnectWithoutLeconsInput | SousLeconsCreateOrConnectWithoutLeconsInput[]
    createMany?: SousLeconsCreateManyLeconsInputEnvelope
    connect?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
  }

  export type LeconsUtilisateurUncheckedCreateNestedManyWithoutLeconsInput = {
    create?: XOR<LeconsUtilisateurCreateWithoutLeconsInput, LeconsUtilisateurUncheckedCreateWithoutLeconsInput> | LeconsUtilisateurCreateWithoutLeconsInput[] | LeconsUtilisateurUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: LeconsUtilisateurCreateOrConnectWithoutLeconsInput | LeconsUtilisateurCreateOrConnectWithoutLeconsInput[]
    createMany?: LeconsUtilisateurCreateManyLeconsInputEnvelope
    connect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
  }

  export type ExercicesUncheckedCreateNestedManyWithoutLeconsInput = {
    create?: XOR<ExercicesCreateWithoutLeconsInput, ExercicesUncheckedCreateWithoutLeconsInput> | ExercicesCreateWithoutLeconsInput[] | ExercicesUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutLeconsInput | ExercicesCreateOrConnectWithoutLeconsInput[]
    createMany?: ExercicesCreateManyLeconsInputEnvelope
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
  }

  export type MatieresUpdateOneRequiredWithoutLeconsNestedInput = {
    create?: XOR<MatieresCreateWithoutLeconsInput, MatieresUncheckedCreateWithoutLeconsInput>
    connectOrCreate?: MatieresCreateOrConnectWithoutLeconsInput
    upsert?: MatieresUpsertWithoutLeconsInput
    connect?: MatieresWhereUniqueInput
    update?: XOR<XOR<MatieresUpdateToOneWithWhereWithoutLeconsInput, MatieresUpdateWithoutLeconsInput>, MatieresUncheckedUpdateWithoutLeconsInput>
  }

  export type SousLeconsUpdateManyWithoutLeconsNestedInput = {
    create?: XOR<SousLeconsCreateWithoutLeconsInput, SousLeconsUncheckedCreateWithoutLeconsInput> | SousLeconsCreateWithoutLeconsInput[] | SousLeconsUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: SousLeconsCreateOrConnectWithoutLeconsInput | SousLeconsCreateOrConnectWithoutLeconsInput[]
    upsert?: SousLeconsUpsertWithWhereUniqueWithoutLeconsInput | SousLeconsUpsertWithWhereUniqueWithoutLeconsInput[]
    createMany?: SousLeconsCreateManyLeconsInputEnvelope
    set?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
    disconnect?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
    delete?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
    connect?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
    update?: SousLeconsUpdateWithWhereUniqueWithoutLeconsInput | SousLeconsUpdateWithWhereUniqueWithoutLeconsInput[]
    updateMany?: SousLeconsUpdateManyWithWhereWithoutLeconsInput | SousLeconsUpdateManyWithWhereWithoutLeconsInput[]
    deleteMany?: SousLeconsScalarWhereInput | SousLeconsScalarWhereInput[]
  }

  export type LeconsUtilisateurUpdateManyWithoutLeconsNestedInput = {
    create?: XOR<LeconsUtilisateurCreateWithoutLeconsInput, LeconsUtilisateurUncheckedCreateWithoutLeconsInput> | LeconsUtilisateurCreateWithoutLeconsInput[] | LeconsUtilisateurUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: LeconsUtilisateurCreateOrConnectWithoutLeconsInput | LeconsUtilisateurCreateOrConnectWithoutLeconsInput[]
    upsert?: LeconsUtilisateurUpsertWithWhereUniqueWithoutLeconsInput | LeconsUtilisateurUpsertWithWhereUniqueWithoutLeconsInput[]
    createMany?: LeconsUtilisateurCreateManyLeconsInputEnvelope
    set?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    disconnect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    delete?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    connect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    update?: LeconsUtilisateurUpdateWithWhereUniqueWithoutLeconsInput | LeconsUtilisateurUpdateWithWhereUniqueWithoutLeconsInput[]
    updateMany?: LeconsUtilisateurUpdateManyWithWhereWithoutLeconsInput | LeconsUtilisateurUpdateManyWithWhereWithoutLeconsInput[]
    deleteMany?: LeconsUtilisateurScalarWhereInput | LeconsUtilisateurScalarWhereInput[]
  }

  export type ExercicesUpdateManyWithoutLeconsNestedInput = {
    create?: XOR<ExercicesCreateWithoutLeconsInput, ExercicesUncheckedCreateWithoutLeconsInput> | ExercicesCreateWithoutLeconsInput[] | ExercicesUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutLeconsInput | ExercicesCreateOrConnectWithoutLeconsInput[]
    upsert?: ExercicesUpsertWithWhereUniqueWithoutLeconsInput | ExercicesUpsertWithWhereUniqueWithoutLeconsInput[]
    createMany?: ExercicesCreateManyLeconsInputEnvelope
    set?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    disconnect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    delete?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    update?: ExercicesUpdateWithWhereUniqueWithoutLeconsInput | ExercicesUpdateWithWhereUniqueWithoutLeconsInput[]
    updateMany?: ExercicesUpdateManyWithWhereWithoutLeconsInput | ExercicesUpdateManyWithWhereWithoutLeconsInput[]
    deleteMany?: ExercicesScalarWhereInput | ExercicesScalarWhereInput[]
  }

  export type SousLeconsUncheckedUpdateManyWithoutLeconsNestedInput = {
    create?: XOR<SousLeconsCreateWithoutLeconsInput, SousLeconsUncheckedCreateWithoutLeconsInput> | SousLeconsCreateWithoutLeconsInput[] | SousLeconsUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: SousLeconsCreateOrConnectWithoutLeconsInput | SousLeconsCreateOrConnectWithoutLeconsInput[]
    upsert?: SousLeconsUpsertWithWhereUniqueWithoutLeconsInput | SousLeconsUpsertWithWhereUniqueWithoutLeconsInput[]
    createMany?: SousLeconsCreateManyLeconsInputEnvelope
    set?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
    disconnect?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
    delete?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
    connect?: SousLeconsWhereUniqueInput | SousLeconsWhereUniqueInput[]
    update?: SousLeconsUpdateWithWhereUniqueWithoutLeconsInput | SousLeconsUpdateWithWhereUniqueWithoutLeconsInput[]
    updateMany?: SousLeconsUpdateManyWithWhereWithoutLeconsInput | SousLeconsUpdateManyWithWhereWithoutLeconsInput[]
    deleteMany?: SousLeconsScalarWhereInput | SousLeconsScalarWhereInput[]
  }

  export type LeconsUtilisateurUncheckedUpdateManyWithoutLeconsNestedInput = {
    create?: XOR<LeconsUtilisateurCreateWithoutLeconsInput, LeconsUtilisateurUncheckedCreateWithoutLeconsInput> | LeconsUtilisateurCreateWithoutLeconsInput[] | LeconsUtilisateurUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: LeconsUtilisateurCreateOrConnectWithoutLeconsInput | LeconsUtilisateurCreateOrConnectWithoutLeconsInput[]
    upsert?: LeconsUtilisateurUpsertWithWhereUniqueWithoutLeconsInput | LeconsUtilisateurUpsertWithWhereUniqueWithoutLeconsInput[]
    createMany?: LeconsUtilisateurCreateManyLeconsInputEnvelope
    set?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    disconnect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    delete?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    connect?: LeconsUtilisateurWhereUniqueInput | LeconsUtilisateurWhereUniqueInput[]
    update?: LeconsUtilisateurUpdateWithWhereUniqueWithoutLeconsInput | LeconsUtilisateurUpdateWithWhereUniqueWithoutLeconsInput[]
    updateMany?: LeconsUtilisateurUpdateManyWithWhereWithoutLeconsInput | LeconsUtilisateurUpdateManyWithWhereWithoutLeconsInput[]
    deleteMany?: LeconsUtilisateurScalarWhereInput | LeconsUtilisateurScalarWhereInput[]
  }

  export type ExercicesUncheckedUpdateManyWithoutLeconsNestedInput = {
    create?: XOR<ExercicesCreateWithoutLeconsInput, ExercicesUncheckedCreateWithoutLeconsInput> | ExercicesCreateWithoutLeconsInput[] | ExercicesUncheckedCreateWithoutLeconsInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutLeconsInput | ExercicesCreateOrConnectWithoutLeconsInput[]
    upsert?: ExercicesUpsertWithWhereUniqueWithoutLeconsInput | ExercicesUpsertWithWhereUniqueWithoutLeconsInput[]
    createMany?: ExercicesCreateManyLeconsInputEnvelope
    set?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    disconnect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    delete?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    update?: ExercicesUpdateWithWhereUniqueWithoutLeconsInput | ExercicesUpdateWithWhereUniqueWithoutLeconsInput[]
    updateMany?: ExercicesUpdateManyWithWhereWithoutLeconsInput | ExercicesUpdateManyWithWhereWithoutLeconsInput[]
    deleteMany?: ExercicesScalarWhereInput | ExercicesScalarWhereInput[]
  }

  export type LeconsCreateNestedOneWithoutSousLeconsInput = {
    create?: XOR<LeconsCreateWithoutSousLeconsInput, LeconsUncheckedCreateWithoutSousLeconsInput>
    connectOrCreate?: LeconsCreateOrConnectWithoutSousLeconsInput
    connect?: LeconsWhereUniqueInput
  }

  export type ExercicesCreateNestedManyWithoutSousLeconsInput = {
    create?: XOR<ExercicesCreateWithoutSousLeconsInput, ExercicesUncheckedCreateWithoutSousLeconsInput> | ExercicesCreateWithoutSousLeconsInput[] | ExercicesUncheckedCreateWithoutSousLeconsInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutSousLeconsInput | ExercicesCreateOrConnectWithoutSousLeconsInput[]
    createMany?: ExercicesCreateManySousLeconsInputEnvelope
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
  }

  export type ExercicesUncheckedCreateNestedManyWithoutSousLeconsInput = {
    create?: XOR<ExercicesCreateWithoutSousLeconsInput, ExercicesUncheckedCreateWithoutSousLeconsInput> | ExercicesCreateWithoutSousLeconsInput[] | ExercicesUncheckedCreateWithoutSousLeconsInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutSousLeconsInput | ExercicesCreateOrConnectWithoutSousLeconsInput[]
    createMany?: ExercicesCreateManySousLeconsInputEnvelope
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
  }

  export type LeconsUpdateOneRequiredWithoutSousLeconsNestedInput = {
    create?: XOR<LeconsCreateWithoutSousLeconsInput, LeconsUncheckedCreateWithoutSousLeconsInput>
    connectOrCreate?: LeconsCreateOrConnectWithoutSousLeconsInput
    upsert?: LeconsUpsertWithoutSousLeconsInput
    connect?: LeconsWhereUniqueInput
    update?: XOR<XOR<LeconsUpdateToOneWithWhereWithoutSousLeconsInput, LeconsUpdateWithoutSousLeconsInput>, LeconsUncheckedUpdateWithoutSousLeconsInput>
  }

  export type ExercicesUpdateManyWithoutSousLeconsNestedInput = {
    create?: XOR<ExercicesCreateWithoutSousLeconsInput, ExercicesUncheckedCreateWithoutSousLeconsInput> | ExercicesCreateWithoutSousLeconsInput[] | ExercicesUncheckedCreateWithoutSousLeconsInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutSousLeconsInput | ExercicesCreateOrConnectWithoutSousLeconsInput[]
    upsert?: ExercicesUpsertWithWhereUniqueWithoutSousLeconsInput | ExercicesUpsertWithWhereUniqueWithoutSousLeconsInput[]
    createMany?: ExercicesCreateManySousLeconsInputEnvelope
    set?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    disconnect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    delete?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    update?: ExercicesUpdateWithWhereUniqueWithoutSousLeconsInput | ExercicesUpdateWithWhereUniqueWithoutSousLeconsInput[]
    updateMany?: ExercicesUpdateManyWithWhereWithoutSousLeconsInput | ExercicesUpdateManyWithWhereWithoutSousLeconsInput[]
    deleteMany?: ExercicesScalarWhereInput | ExercicesScalarWhereInput[]
  }

  export type ExercicesUncheckedUpdateManyWithoutSousLeconsNestedInput = {
    create?: XOR<ExercicesCreateWithoutSousLeconsInput, ExercicesUncheckedCreateWithoutSousLeconsInput> | ExercicesCreateWithoutSousLeconsInput[] | ExercicesUncheckedCreateWithoutSousLeconsInput[]
    connectOrCreate?: ExercicesCreateOrConnectWithoutSousLeconsInput | ExercicesCreateOrConnectWithoutSousLeconsInput[]
    upsert?: ExercicesUpsertWithWhereUniqueWithoutSousLeconsInput | ExercicesUpsertWithWhereUniqueWithoutSousLeconsInput[]
    createMany?: ExercicesCreateManySousLeconsInputEnvelope
    set?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    disconnect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    delete?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    connect?: ExercicesWhereUniqueInput | ExercicesWhereUniqueInput[]
    update?: ExercicesUpdateWithWhereUniqueWithoutSousLeconsInput | ExercicesUpdateWithWhereUniqueWithoutSousLeconsInput[]
    updateMany?: ExercicesUpdateManyWithWhereWithoutSousLeconsInput | ExercicesUpdateManyWithWhereWithoutSousLeconsInput[]
    deleteMany?: ExercicesScalarWhereInput | ExercicesScalarWhereInput[]
  }

  export type SousLeconsCreateNestedOneWithoutExercicesInput = {
    create?: XOR<SousLeconsCreateWithoutExercicesInput, SousLeconsUncheckedCreateWithoutExercicesInput>
    connectOrCreate?: SousLeconsCreateOrConnectWithoutExercicesInput
    connect?: SousLeconsWhereUniqueInput
  }

  export type MatieresCreateNestedOneWithoutExercicesInput = {
    create?: XOR<MatieresCreateWithoutExercicesInput, MatieresUncheckedCreateWithoutExercicesInput>
    connectOrCreate?: MatieresCreateOrConnectWithoutExercicesInput
    connect?: MatieresWhereUniqueInput
  }

  export type LeconsCreateNestedOneWithoutExercicesInput = {
    create?: XOR<LeconsCreateWithoutExercicesInput, LeconsUncheckedCreateWithoutExercicesInput>
    connectOrCreate?: LeconsCreateOrConnectWithoutExercicesInput
    connect?: LeconsWhereUniqueInput
  }

  export type ReponsesCreateNestedManyWithoutExercicesInput = {
    create?: XOR<ReponsesCreateWithoutExercicesInput, ReponsesUncheckedCreateWithoutExercicesInput> | ReponsesCreateWithoutExercicesInput[] | ReponsesUncheckedCreateWithoutExercicesInput[]
    connectOrCreate?: ReponsesCreateOrConnectWithoutExercicesInput | ReponsesCreateOrConnectWithoutExercicesInput[]
    createMany?: ReponsesCreateManyExercicesInputEnvelope
    connect?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
  }

  export type OptionsQCMCreateNestedManyWithoutExercicesInput = {
    create?: XOR<OptionsQCMCreateWithoutExercicesInput, OptionsQCMUncheckedCreateWithoutExercicesInput> | OptionsQCMCreateWithoutExercicesInput[] | OptionsQCMUncheckedCreateWithoutExercicesInput[]
    connectOrCreate?: OptionsQCMCreateOrConnectWithoutExercicesInput | OptionsQCMCreateOrConnectWithoutExercicesInput[]
    createMany?: OptionsQCMCreateManyExercicesInputEnvelope
    connect?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
  }

  export type ReponsesUncheckedCreateNestedManyWithoutExercicesInput = {
    create?: XOR<ReponsesCreateWithoutExercicesInput, ReponsesUncheckedCreateWithoutExercicesInput> | ReponsesCreateWithoutExercicesInput[] | ReponsesUncheckedCreateWithoutExercicesInput[]
    connectOrCreate?: ReponsesCreateOrConnectWithoutExercicesInput | ReponsesCreateOrConnectWithoutExercicesInput[]
    createMany?: ReponsesCreateManyExercicesInputEnvelope
    connect?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
  }

  export type OptionsQCMUncheckedCreateNestedManyWithoutExercicesInput = {
    create?: XOR<OptionsQCMCreateWithoutExercicesInput, OptionsQCMUncheckedCreateWithoutExercicesInput> | OptionsQCMCreateWithoutExercicesInput[] | OptionsQCMUncheckedCreateWithoutExercicesInput[]
    connectOrCreate?: OptionsQCMCreateOrConnectWithoutExercicesInput | OptionsQCMCreateOrConnectWithoutExercicesInput[]
    createMany?: OptionsQCMCreateManyExercicesInputEnvelope
    connect?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
  }

  export type EnumTypesExerciceFieldUpdateOperationsInput = {
    set?: $Enums.TypesExercice
  }

  export type SousLeconsUpdateOneWithoutExercicesNestedInput = {
    create?: XOR<SousLeconsCreateWithoutExercicesInput, SousLeconsUncheckedCreateWithoutExercicesInput>
    connectOrCreate?: SousLeconsCreateOrConnectWithoutExercicesInput
    upsert?: SousLeconsUpsertWithoutExercicesInput
    disconnect?: SousLeconsWhereInput | boolean
    delete?: SousLeconsWhereInput | boolean
    connect?: SousLeconsWhereUniqueInput
    update?: XOR<XOR<SousLeconsUpdateToOneWithWhereWithoutExercicesInput, SousLeconsUpdateWithoutExercicesInput>, SousLeconsUncheckedUpdateWithoutExercicesInput>
  }

  export type MatieresUpdateOneRequiredWithoutExercicesNestedInput = {
    create?: XOR<MatieresCreateWithoutExercicesInput, MatieresUncheckedCreateWithoutExercicesInput>
    connectOrCreate?: MatieresCreateOrConnectWithoutExercicesInput
    upsert?: MatieresUpsertWithoutExercicesInput
    connect?: MatieresWhereUniqueInput
    update?: XOR<XOR<MatieresUpdateToOneWithWhereWithoutExercicesInput, MatieresUpdateWithoutExercicesInput>, MatieresUncheckedUpdateWithoutExercicesInput>
  }

  export type LeconsUpdateOneWithoutExercicesNestedInput = {
    create?: XOR<LeconsCreateWithoutExercicesInput, LeconsUncheckedCreateWithoutExercicesInput>
    connectOrCreate?: LeconsCreateOrConnectWithoutExercicesInput
    upsert?: LeconsUpsertWithoutExercicesInput
    disconnect?: LeconsWhereInput | boolean
    delete?: LeconsWhereInput | boolean
    connect?: LeconsWhereUniqueInput
    update?: XOR<XOR<LeconsUpdateToOneWithWhereWithoutExercicesInput, LeconsUpdateWithoutExercicesInput>, LeconsUncheckedUpdateWithoutExercicesInput>
  }

  export type ReponsesUpdateManyWithoutExercicesNestedInput = {
    create?: XOR<ReponsesCreateWithoutExercicesInput, ReponsesUncheckedCreateWithoutExercicesInput> | ReponsesCreateWithoutExercicesInput[] | ReponsesUncheckedCreateWithoutExercicesInput[]
    connectOrCreate?: ReponsesCreateOrConnectWithoutExercicesInput | ReponsesCreateOrConnectWithoutExercicesInput[]
    upsert?: ReponsesUpsertWithWhereUniqueWithoutExercicesInput | ReponsesUpsertWithWhereUniqueWithoutExercicesInput[]
    createMany?: ReponsesCreateManyExercicesInputEnvelope
    set?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
    disconnect?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
    delete?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
    connect?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
    update?: ReponsesUpdateWithWhereUniqueWithoutExercicesInput | ReponsesUpdateWithWhereUniqueWithoutExercicesInput[]
    updateMany?: ReponsesUpdateManyWithWhereWithoutExercicesInput | ReponsesUpdateManyWithWhereWithoutExercicesInput[]
    deleteMany?: ReponsesScalarWhereInput | ReponsesScalarWhereInput[]
  }

  export type OptionsQCMUpdateManyWithoutExercicesNestedInput = {
    create?: XOR<OptionsQCMCreateWithoutExercicesInput, OptionsQCMUncheckedCreateWithoutExercicesInput> | OptionsQCMCreateWithoutExercicesInput[] | OptionsQCMUncheckedCreateWithoutExercicesInput[]
    connectOrCreate?: OptionsQCMCreateOrConnectWithoutExercicesInput | OptionsQCMCreateOrConnectWithoutExercicesInput[]
    upsert?: OptionsQCMUpsertWithWhereUniqueWithoutExercicesInput | OptionsQCMUpsertWithWhereUniqueWithoutExercicesInput[]
    createMany?: OptionsQCMCreateManyExercicesInputEnvelope
    set?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
    disconnect?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
    delete?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
    connect?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
    update?: OptionsQCMUpdateWithWhereUniqueWithoutExercicesInput | OptionsQCMUpdateWithWhereUniqueWithoutExercicesInput[]
    updateMany?: OptionsQCMUpdateManyWithWhereWithoutExercicesInput | OptionsQCMUpdateManyWithWhereWithoutExercicesInput[]
    deleteMany?: OptionsQCMScalarWhereInput | OptionsQCMScalarWhereInput[]
  }

  export type ReponsesUncheckedUpdateManyWithoutExercicesNestedInput = {
    create?: XOR<ReponsesCreateWithoutExercicesInput, ReponsesUncheckedCreateWithoutExercicesInput> | ReponsesCreateWithoutExercicesInput[] | ReponsesUncheckedCreateWithoutExercicesInput[]
    connectOrCreate?: ReponsesCreateOrConnectWithoutExercicesInput | ReponsesCreateOrConnectWithoutExercicesInput[]
    upsert?: ReponsesUpsertWithWhereUniqueWithoutExercicesInput | ReponsesUpsertWithWhereUniqueWithoutExercicesInput[]
    createMany?: ReponsesCreateManyExercicesInputEnvelope
    set?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
    disconnect?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
    delete?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
    connect?: ReponsesWhereUniqueInput | ReponsesWhereUniqueInput[]
    update?: ReponsesUpdateWithWhereUniqueWithoutExercicesInput | ReponsesUpdateWithWhereUniqueWithoutExercicesInput[]
    updateMany?: ReponsesUpdateManyWithWhereWithoutExercicesInput | ReponsesUpdateManyWithWhereWithoutExercicesInput[]
    deleteMany?: ReponsesScalarWhereInput | ReponsesScalarWhereInput[]
  }

  export type OptionsQCMUncheckedUpdateManyWithoutExercicesNestedInput = {
    create?: XOR<OptionsQCMCreateWithoutExercicesInput, OptionsQCMUncheckedCreateWithoutExercicesInput> | OptionsQCMCreateWithoutExercicesInput[] | OptionsQCMUncheckedCreateWithoutExercicesInput[]
    connectOrCreate?: OptionsQCMCreateOrConnectWithoutExercicesInput | OptionsQCMCreateOrConnectWithoutExercicesInput[]
    upsert?: OptionsQCMUpsertWithWhereUniqueWithoutExercicesInput | OptionsQCMUpsertWithWhereUniqueWithoutExercicesInput[]
    createMany?: OptionsQCMCreateManyExercicesInputEnvelope
    set?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
    disconnect?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
    delete?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
    connect?: OptionsQCMWhereUniqueInput | OptionsQCMWhereUniqueInput[]
    update?: OptionsQCMUpdateWithWhereUniqueWithoutExercicesInput | OptionsQCMUpdateWithWhereUniqueWithoutExercicesInput[]
    updateMany?: OptionsQCMUpdateManyWithWhereWithoutExercicesInput | OptionsQCMUpdateManyWithWhereWithoutExercicesInput[]
    deleteMany?: OptionsQCMScalarWhereInput | OptionsQCMScalarWhereInput[]
  }

  export type ExercicesCreateNestedOneWithoutOptionsQCMInput = {
    create?: XOR<ExercicesCreateWithoutOptionsQCMInput, ExercicesUncheckedCreateWithoutOptionsQCMInput>
    connectOrCreate?: ExercicesCreateOrConnectWithoutOptionsQCMInput
    connect?: ExercicesWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ExercicesUpdateOneRequiredWithoutOptionsQCMNestedInput = {
    create?: XOR<ExercicesCreateWithoutOptionsQCMInput, ExercicesUncheckedCreateWithoutOptionsQCMInput>
    connectOrCreate?: ExercicesCreateOrConnectWithoutOptionsQCMInput
    upsert?: ExercicesUpsertWithoutOptionsQCMInput
    connect?: ExercicesWhereUniqueInput
    update?: XOR<XOR<ExercicesUpdateToOneWithWhereWithoutOptionsQCMInput, ExercicesUpdateWithoutOptionsQCMInput>, ExercicesUncheckedUpdateWithoutOptionsQCMInput>
  }

  export type LeconsCreateNestedOneWithoutLeconsUtilisateurInput = {
    create?: XOR<LeconsCreateWithoutLeconsUtilisateurInput, LeconsUncheckedCreateWithoutLeconsUtilisateurInput>
    connectOrCreate?: LeconsCreateOrConnectWithoutLeconsUtilisateurInput
    connect?: LeconsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeconsUtilisateurInput = {
    create?: XOR<UserCreateWithoutLeconsUtilisateurInput, UserUncheckedCreateWithoutLeconsUtilisateurInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeconsUtilisateurInput
    connect?: UserWhereUniqueInput
  }

  export type LeconsUpdateOneRequiredWithoutLeconsUtilisateurNestedInput = {
    create?: XOR<LeconsCreateWithoutLeconsUtilisateurInput, LeconsUncheckedCreateWithoutLeconsUtilisateurInput>
    connectOrCreate?: LeconsCreateOrConnectWithoutLeconsUtilisateurInput
    upsert?: LeconsUpsertWithoutLeconsUtilisateurInput
    connect?: LeconsWhereUniqueInput
    update?: XOR<XOR<LeconsUpdateToOneWithWhereWithoutLeconsUtilisateurInput, LeconsUpdateWithoutLeconsUtilisateurInput>, LeconsUncheckedUpdateWithoutLeconsUtilisateurInput>
  }

  export type UserUpdateOneRequiredWithoutLeconsUtilisateurNestedInput = {
    create?: XOR<UserCreateWithoutLeconsUtilisateurInput, UserUncheckedCreateWithoutLeconsUtilisateurInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeconsUtilisateurInput
    upsert?: UserUpsertWithoutLeconsUtilisateurInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeconsUtilisateurInput, UserUpdateWithoutLeconsUtilisateurInput>, UserUncheckedUpdateWithoutLeconsUtilisateurInput>
  }

  export type ExercicesCreateNestedOneWithoutReponsesInput = {
    create?: XOR<ExercicesCreateWithoutReponsesInput, ExercicesUncheckedCreateWithoutReponsesInput>
    connectOrCreate?: ExercicesCreateOrConnectWithoutReponsesInput
    connect?: ExercicesWhereUniqueInput
  }

  export type ReponsesUtilisateurCreateNestedManyWithoutReponsesInput = {
    create?: XOR<ReponsesUtilisateurCreateWithoutReponsesInput, ReponsesUtilisateurUncheckedCreateWithoutReponsesInput> | ReponsesUtilisateurCreateWithoutReponsesInput[] | ReponsesUtilisateurUncheckedCreateWithoutReponsesInput[]
    connectOrCreate?: ReponsesUtilisateurCreateOrConnectWithoutReponsesInput | ReponsesUtilisateurCreateOrConnectWithoutReponsesInput[]
    createMany?: ReponsesUtilisateurCreateManyReponsesInputEnvelope
    connect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
  }

  export type ReponsesUtilisateurUncheckedCreateNestedManyWithoutReponsesInput = {
    create?: XOR<ReponsesUtilisateurCreateWithoutReponsesInput, ReponsesUtilisateurUncheckedCreateWithoutReponsesInput> | ReponsesUtilisateurCreateWithoutReponsesInput[] | ReponsesUtilisateurUncheckedCreateWithoutReponsesInput[]
    connectOrCreate?: ReponsesUtilisateurCreateOrConnectWithoutReponsesInput | ReponsesUtilisateurCreateOrConnectWithoutReponsesInput[]
    createMany?: ReponsesUtilisateurCreateManyReponsesInputEnvelope
    connect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
  }

  export type ExercicesUpdateOneRequiredWithoutReponsesNestedInput = {
    create?: XOR<ExercicesCreateWithoutReponsesInput, ExercicesUncheckedCreateWithoutReponsesInput>
    connectOrCreate?: ExercicesCreateOrConnectWithoutReponsesInput
    upsert?: ExercicesUpsertWithoutReponsesInput
    connect?: ExercicesWhereUniqueInput
    update?: XOR<XOR<ExercicesUpdateToOneWithWhereWithoutReponsesInput, ExercicesUpdateWithoutReponsesInput>, ExercicesUncheckedUpdateWithoutReponsesInput>
  }

  export type ReponsesUtilisateurUpdateManyWithoutReponsesNestedInput = {
    create?: XOR<ReponsesUtilisateurCreateWithoutReponsesInput, ReponsesUtilisateurUncheckedCreateWithoutReponsesInput> | ReponsesUtilisateurCreateWithoutReponsesInput[] | ReponsesUtilisateurUncheckedCreateWithoutReponsesInput[]
    connectOrCreate?: ReponsesUtilisateurCreateOrConnectWithoutReponsesInput | ReponsesUtilisateurCreateOrConnectWithoutReponsesInput[]
    upsert?: ReponsesUtilisateurUpsertWithWhereUniqueWithoutReponsesInput | ReponsesUtilisateurUpsertWithWhereUniqueWithoutReponsesInput[]
    createMany?: ReponsesUtilisateurCreateManyReponsesInputEnvelope
    set?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    disconnect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    delete?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    connect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    update?: ReponsesUtilisateurUpdateWithWhereUniqueWithoutReponsesInput | ReponsesUtilisateurUpdateWithWhereUniqueWithoutReponsesInput[]
    updateMany?: ReponsesUtilisateurUpdateManyWithWhereWithoutReponsesInput | ReponsesUtilisateurUpdateManyWithWhereWithoutReponsesInput[]
    deleteMany?: ReponsesUtilisateurScalarWhereInput | ReponsesUtilisateurScalarWhereInput[]
  }

  export type ReponsesUtilisateurUncheckedUpdateManyWithoutReponsesNestedInput = {
    create?: XOR<ReponsesUtilisateurCreateWithoutReponsesInput, ReponsesUtilisateurUncheckedCreateWithoutReponsesInput> | ReponsesUtilisateurCreateWithoutReponsesInput[] | ReponsesUtilisateurUncheckedCreateWithoutReponsesInput[]
    connectOrCreate?: ReponsesUtilisateurCreateOrConnectWithoutReponsesInput | ReponsesUtilisateurCreateOrConnectWithoutReponsesInput[]
    upsert?: ReponsesUtilisateurUpsertWithWhereUniqueWithoutReponsesInput | ReponsesUtilisateurUpsertWithWhereUniqueWithoutReponsesInput[]
    createMany?: ReponsesUtilisateurCreateManyReponsesInputEnvelope
    set?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    disconnect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    delete?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    connect?: ReponsesUtilisateurWhereUniqueInput | ReponsesUtilisateurWhereUniqueInput[]
    update?: ReponsesUtilisateurUpdateWithWhereUniqueWithoutReponsesInput | ReponsesUtilisateurUpdateWithWhereUniqueWithoutReponsesInput[]
    updateMany?: ReponsesUtilisateurUpdateManyWithWhereWithoutReponsesInput | ReponsesUtilisateurUpdateManyWithWhereWithoutReponsesInput[]
    deleteMany?: ReponsesUtilisateurScalarWhereInput | ReponsesUtilisateurScalarWhereInput[]
  }

  export type ReponsesCreateNestedOneWithoutReponsesUtilisateurInput = {
    create?: XOR<ReponsesCreateWithoutReponsesUtilisateurInput, ReponsesUncheckedCreateWithoutReponsesUtilisateurInput>
    connectOrCreate?: ReponsesCreateOrConnectWithoutReponsesUtilisateurInput
    connect?: ReponsesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReponsesUtilisateurInput = {
    create?: XOR<UserCreateWithoutReponsesUtilisateurInput, UserUncheckedCreateWithoutReponsesUtilisateurInput>
    connectOrCreate?: UserCreateOrConnectWithoutReponsesUtilisateurInput
    connect?: UserWhereUniqueInput
  }

  export type ReponsesUpdateOneRequiredWithoutReponsesUtilisateurNestedInput = {
    create?: XOR<ReponsesCreateWithoutReponsesUtilisateurInput, ReponsesUncheckedCreateWithoutReponsesUtilisateurInput>
    connectOrCreate?: ReponsesCreateOrConnectWithoutReponsesUtilisateurInput
    upsert?: ReponsesUpsertWithoutReponsesUtilisateurInput
    connect?: ReponsesWhereUniqueInput
    update?: XOR<XOR<ReponsesUpdateToOneWithWhereWithoutReponsesUtilisateurInput, ReponsesUpdateWithoutReponsesUtilisateurInput>, ReponsesUncheckedUpdateWithoutReponsesUtilisateurInput>
  }

  export type UserUpdateOneRequiredWithoutReponsesUtilisateurNestedInput = {
    create?: XOR<UserCreateWithoutReponsesUtilisateurInput, UserUncheckedCreateWithoutReponsesUtilisateurInput>
    connectOrCreate?: UserCreateOrConnectWithoutReponsesUtilisateurInput
    upsert?: UserUpsertWithoutReponsesUtilisateurInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReponsesUtilisateurInput, UserUpdateWithoutReponsesUtilisateurInput>, UserUncheckedUpdateWithoutReponsesUtilisateurInput>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumTypesUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.TypesUtilisateur | EnumTypesUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.TypesUtilisateur[]
    notIn?: $Enums.TypesUtilisateur[]
    not?: NestedEnumTypesUtilisateurFilter<$PrismaModel> | $Enums.TypesUtilisateur
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

  export type NestedEnumTypesUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypesUtilisateur | EnumTypesUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.TypesUtilisateur[]
    notIn?: $Enums.TypesUtilisateur[]
    not?: NestedEnumTypesUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.TypesUtilisateur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesUtilisateurFilter<$PrismaModel>
    _max?: NestedEnumTypesUtilisateurFilter<$PrismaModel>
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

  export type NestedEnumTypesExerciceFilter<$PrismaModel = never> = {
    equals?: $Enums.TypesExercice | EnumTypesExerciceFieldRefInput<$PrismaModel>
    in?: $Enums.TypesExercice[]
    notIn?: $Enums.TypesExercice[]
    not?: NestedEnumTypesExerciceFilter<$PrismaModel> | $Enums.TypesExercice
  }

  export type NestedEnumTypesExerciceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypesExercice | EnumTypesExerciceFieldRefInput<$PrismaModel>
    in?: $Enums.TypesExercice[]
    notIn?: $Enums.TypesExercice[]
    not?: NestedEnumTypesExerciceWithAggregatesFilter<$PrismaModel> | $Enums.TypesExercice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypesExerciceFilter<$PrismaModel>
    _max?: NestedEnumTypesExerciceFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReponsesUtilisateurCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reponses: ReponsesCreateNestedOneWithoutReponsesUtilisateurInput
  }

  export type ReponsesUtilisateurUncheckedCreateWithoutUserInput = {
    id?: string
    reponsesId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReponsesUtilisateurCreateOrConnectWithoutUserInput = {
    where: ReponsesUtilisateurWhereUniqueInput
    create: XOR<ReponsesUtilisateurCreateWithoutUserInput, ReponsesUtilisateurUncheckedCreateWithoutUserInput>
  }

  export type ReponsesUtilisateurCreateManyUserInputEnvelope = {
    data: ReponsesUtilisateurCreateManyUserInput | ReponsesUtilisateurCreateManyUserInput[]
  }

  export type LeconsUtilisateurCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lecons: LeconsCreateNestedOneWithoutLeconsUtilisateurInput
  }

  export type LeconsUtilisateurUncheckedCreateWithoutUserInput = {
    id?: string
    leconsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeconsUtilisateurCreateOrConnectWithoutUserInput = {
    where: LeconsUtilisateurWhereUniqueInput
    create: XOR<LeconsUtilisateurCreateWithoutUserInput, LeconsUtilisateurUncheckedCreateWithoutUserInput>
  }

  export type LeconsUtilisateurCreateManyUserInputEnvelope = {
    data: LeconsUtilisateurCreateManyUserInput | LeconsUtilisateurCreateManyUserInput[]
  }

  export type ClassesCreateWithoutUserInput = {
    id?: string
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Matieres?: MatieresCreateNestedManyWithoutClassesInput
  }

  export type ClassesUncheckedCreateWithoutUserInput = {
    id?: string
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Matieres?: MatieresUncheckedCreateNestedManyWithoutClassesInput
  }

  export type ClassesCreateOrConnectWithoutUserInput = {
    where: ClassesWhereUniqueInput
    create: XOR<ClassesCreateWithoutUserInput, ClassesUncheckedCreateWithoutUserInput>
  }

  export type ReponsesUtilisateurUpsertWithWhereUniqueWithoutUserInput = {
    where: ReponsesUtilisateurWhereUniqueInput
    update: XOR<ReponsesUtilisateurUpdateWithoutUserInput, ReponsesUtilisateurUncheckedUpdateWithoutUserInput>
    create: XOR<ReponsesUtilisateurCreateWithoutUserInput, ReponsesUtilisateurUncheckedCreateWithoutUserInput>
  }

  export type ReponsesUtilisateurUpdateWithWhereUniqueWithoutUserInput = {
    where: ReponsesUtilisateurWhereUniqueInput
    data: XOR<ReponsesUtilisateurUpdateWithoutUserInput, ReponsesUtilisateurUncheckedUpdateWithoutUserInput>
  }

  export type ReponsesUtilisateurUpdateManyWithWhereWithoutUserInput = {
    where: ReponsesUtilisateurScalarWhereInput
    data: XOR<ReponsesUtilisateurUpdateManyMutationInput, ReponsesUtilisateurUncheckedUpdateManyWithoutUserInput>
  }

  export type ReponsesUtilisateurScalarWhereInput = {
    AND?: ReponsesUtilisateurScalarWhereInput | ReponsesUtilisateurScalarWhereInput[]
    OR?: ReponsesUtilisateurScalarWhereInput[]
    NOT?: ReponsesUtilisateurScalarWhereInput | ReponsesUtilisateurScalarWhereInput[]
    id?: StringFilter<"ReponsesUtilisateur"> | string
    reponsesId?: StringFilter<"ReponsesUtilisateur"> | string
    userId?: StringFilter<"ReponsesUtilisateur"> | string
    createdAt?: DateTimeFilter<"ReponsesUtilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"ReponsesUtilisateur"> | Date | string
  }

  export type LeconsUtilisateurUpsertWithWhereUniqueWithoutUserInput = {
    where: LeconsUtilisateurWhereUniqueInput
    update: XOR<LeconsUtilisateurUpdateWithoutUserInput, LeconsUtilisateurUncheckedUpdateWithoutUserInput>
    create: XOR<LeconsUtilisateurCreateWithoutUserInput, LeconsUtilisateurUncheckedCreateWithoutUserInput>
  }

  export type LeconsUtilisateurUpdateWithWhereUniqueWithoutUserInput = {
    where: LeconsUtilisateurWhereUniqueInput
    data: XOR<LeconsUtilisateurUpdateWithoutUserInput, LeconsUtilisateurUncheckedUpdateWithoutUserInput>
  }

  export type LeconsUtilisateurUpdateManyWithWhereWithoutUserInput = {
    where: LeconsUtilisateurScalarWhereInput
    data: XOR<LeconsUtilisateurUpdateManyMutationInput, LeconsUtilisateurUncheckedUpdateManyWithoutUserInput>
  }

  export type LeconsUtilisateurScalarWhereInput = {
    AND?: LeconsUtilisateurScalarWhereInput | LeconsUtilisateurScalarWhereInput[]
    OR?: LeconsUtilisateurScalarWhereInput[]
    NOT?: LeconsUtilisateurScalarWhereInput | LeconsUtilisateurScalarWhereInput[]
    id?: StringFilter<"LeconsUtilisateur"> | string
    leconsId?: StringFilter<"LeconsUtilisateur"> | string
    userId?: StringFilter<"LeconsUtilisateur"> | string
    createdAt?: DateTimeFilter<"LeconsUtilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"LeconsUtilisateur"> | Date | string
  }

  export type ClassesUpsertWithoutUserInput = {
    update: XOR<ClassesUpdateWithoutUserInput, ClassesUncheckedUpdateWithoutUserInput>
    create: XOR<ClassesCreateWithoutUserInput, ClassesUncheckedCreateWithoutUserInput>
    where?: ClassesWhereInput
  }

  export type ClassesUpdateToOneWithWhereWithoutUserInput = {
    where?: ClassesWhereInput
    data: XOR<ClassesUpdateWithoutUserInput, ClassesUncheckedUpdateWithoutUserInput>
  }

  export type ClassesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Matieres?: MatieresUpdateManyWithoutClassesNestedInput
  }

  export type ClassesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Matieres?: MatieresUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type MatieresCreateWithoutClassesInput = {
    id?: string
    nom: string
    description?: string | null
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Lecons?: LeconsCreateNestedManyWithoutMatieresInput
    Exercices?: ExercicesCreateNestedManyWithoutMatieresInput
  }

  export type MatieresUncheckedCreateWithoutClassesInput = {
    id?: string
    nom: string
    description?: string | null
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Lecons?: LeconsUncheckedCreateNestedManyWithoutMatieresInput
    Exercices?: ExercicesUncheckedCreateNestedManyWithoutMatieresInput
  }

  export type MatieresCreateOrConnectWithoutClassesInput = {
    where: MatieresWhereUniqueInput
    create: XOR<MatieresCreateWithoutClassesInput, MatieresUncheckedCreateWithoutClassesInput>
  }

  export type MatieresCreateManyClassesInputEnvelope = {
    data: MatieresCreateManyClassesInput | MatieresCreateManyClassesInput[]
  }

  export type UserCreateWithoutClasseInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurCreateNestedManyWithoutUserInput
    LeconsUtilisateur?: LeconsUtilisateurCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClasseInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedCreateNestedManyWithoutUserInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClasseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput>
  }

  export type UserCreateManyClasseInputEnvelope = {
    data: UserCreateManyClasseInput | UserCreateManyClasseInput[]
  }

  export type MatieresUpsertWithWhereUniqueWithoutClassesInput = {
    where: MatieresWhereUniqueInput
    update: XOR<MatieresUpdateWithoutClassesInput, MatieresUncheckedUpdateWithoutClassesInput>
    create: XOR<MatieresCreateWithoutClassesInput, MatieresUncheckedCreateWithoutClassesInput>
  }

  export type MatieresUpdateWithWhereUniqueWithoutClassesInput = {
    where: MatieresWhereUniqueInput
    data: XOR<MatieresUpdateWithoutClassesInput, MatieresUncheckedUpdateWithoutClassesInput>
  }

  export type MatieresUpdateManyWithWhereWithoutClassesInput = {
    where: MatieresScalarWhereInput
    data: XOR<MatieresUpdateManyMutationInput, MatieresUncheckedUpdateManyWithoutClassesInput>
  }

  export type MatieresScalarWhereInput = {
    AND?: MatieresScalarWhereInput | MatieresScalarWhereInput[]
    OR?: MatieresScalarWhereInput[]
    NOT?: MatieresScalarWhereInput | MatieresScalarWhereInput[]
    id?: StringFilter<"Matieres"> | string
    nom?: StringFilter<"Matieres"> | string
    description?: StringNullableFilter<"Matieres"> | string | null
    classesId?: StringFilter<"Matieres"> | string
    pointsTotalMatiere?: IntNullableFilter<"Matieres"> | number | null
    pointsSeuilMatiere?: IntNullableFilter<"Matieres"> | number | null
    createdAt?: DateTimeFilter<"Matieres"> | Date | string
    updatedAt?: DateTimeFilter<"Matieres"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutClasseInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClasseInput, UserUncheckedUpdateWithoutClasseInput>
    create: XOR<UserCreateWithoutClasseInput, UserUncheckedCreateWithoutClasseInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClasseInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClasseInput, UserUncheckedUpdateWithoutClasseInput>
  }

  export type UserUpdateManyWithWhereWithoutClasseInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClasseInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    nom?: StringNullableFilter<"User"> | string | null
    prenom?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    dataInscription?: StringNullableFilter<"User"> | string | null
    derniereConnexion?: DateTimeNullableFilter<"User"> | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFilter<"User"> | $Enums.TypesUtilisateur
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    classesId?: StringNullableFilter<"User"> | string | null
  }

  export type ClassesCreateWithoutMatieresInput = {
    id?: string
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedManyWithoutClasseInput
  }

  export type ClassesUncheckedCreateWithoutMatieresInput = {
    id?: string
    nom: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClassesCreateOrConnectWithoutMatieresInput = {
    where: ClassesWhereUniqueInput
    create: XOR<ClassesCreateWithoutMatieresInput, ClassesUncheckedCreateWithoutMatieresInput>
  }

  export type LeconsCreateWithoutMatieresInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SousLecons?: SousLeconsCreateNestedManyWithoutLeconsInput
    LeconsUtilisateur?: LeconsUtilisateurCreateNestedManyWithoutLeconsInput
    Exercices?: ExercicesCreateNestedManyWithoutLeconsInput
  }

  export type LeconsUncheckedCreateWithoutMatieresInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SousLecons?: SousLeconsUncheckedCreateNestedManyWithoutLeconsInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedCreateNestedManyWithoutLeconsInput
    Exercices?: ExercicesUncheckedCreateNestedManyWithoutLeconsInput
  }

  export type LeconsCreateOrConnectWithoutMatieresInput = {
    where: LeconsWhereUniqueInput
    create: XOR<LeconsCreateWithoutMatieresInput, LeconsUncheckedCreateWithoutMatieresInput>
  }

  export type LeconsCreateManyMatieresInputEnvelope = {
    data: LeconsCreateManyMatieresInput | LeconsCreateManyMatieresInput[]
  }

  export type ExercicesCreateWithoutMatieresInput = {
    id?: string
    nom: string
    description?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    sousLecons?: SousLeconsCreateNestedOneWithoutExercicesInput
    lecons?: LeconsCreateNestedOneWithoutExercicesInput
    Reponses?: ReponsesCreateNestedManyWithoutExercicesInput
    OptionsQCM?: OptionsQCMCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesUncheckedCreateWithoutMatieresInput = {
    id?: string
    nom: string
    description?: string | null
    sousLeconsId?: string | null
    leconId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    Reponses?: ReponsesUncheckedCreateNestedManyWithoutExercicesInput
    OptionsQCM?: OptionsQCMUncheckedCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesCreateOrConnectWithoutMatieresInput = {
    where: ExercicesWhereUniqueInput
    create: XOR<ExercicesCreateWithoutMatieresInput, ExercicesUncheckedCreateWithoutMatieresInput>
  }

  export type ExercicesCreateManyMatieresInputEnvelope = {
    data: ExercicesCreateManyMatieresInput | ExercicesCreateManyMatieresInput[]
  }

  export type ClassesUpsertWithoutMatieresInput = {
    update: XOR<ClassesUpdateWithoutMatieresInput, ClassesUncheckedUpdateWithoutMatieresInput>
    create: XOR<ClassesCreateWithoutMatieresInput, ClassesUncheckedCreateWithoutMatieresInput>
    where?: ClassesWhereInput
  }

  export type ClassesUpdateToOneWithWhereWithoutMatieresInput = {
    where?: ClassesWhereInput
    data: XOR<ClassesUpdateWithoutMatieresInput, ClassesUncheckedUpdateWithoutMatieresInput>
  }

  export type ClassesUpdateWithoutMatieresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutClasseNestedInput
  }

  export type ClassesUncheckedUpdateWithoutMatieresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type LeconsUpsertWithWhereUniqueWithoutMatieresInput = {
    where: LeconsWhereUniqueInput
    update: XOR<LeconsUpdateWithoutMatieresInput, LeconsUncheckedUpdateWithoutMatieresInput>
    create: XOR<LeconsCreateWithoutMatieresInput, LeconsUncheckedCreateWithoutMatieresInput>
  }

  export type LeconsUpdateWithWhereUniqueWithoutMatieresInput = {
    where: LeconsWhereUniqueInput
    data: XOR<LeconsUpdateWithoutMatieresInput, LeconsUncheckedUpdateWithoutMatieresInput>
  }

  export type LeconsUpdateManyWithWhereWithoutMatieresInput = {
    where: LeconsScalarWhereInput
    data: XOR<LeconsUpdateManyMutationInput, LeconsUncheckedUpdateManyWithoutMatieresInput>
  }

  export type LeconsScalarWhereInput = {
    AND?: LeconsScalarWhereInput | LeconsScalarWhereInput[]
    OR?: LeconsScalarWhereInput[]
    NOT?: LeconsScalarWhereInput | LeconsScalarWhereInput[]
    id?: StringFilter<"Lecons"> | string
    nom?: StringFilter<"Lecons"> | string
    description?: StringNullableFilter<"Lecons"> | string | null
    matieresId?: StringFilter<"Lecons"> | string
    createdAt?: DateTimeFilter<"Lecons"> | Date | string
    updatedAt?: DateTimeFilter<"Lecons"> | Date | string
  }

  export type ExercicesUpsertWithWhereUniqueWithoutMatieresInput = {
    where: ExercicesWhereUniqueInput
    update: XOR<ExercicesUpdateWithoutMatieresInput, ExercicesUncheckedUpdateWithoutMatieresInput>
    create: XOR<ExercicesCreateWithoutMatieresInput, ExercicesUncheckedCreateWithoutMatieresInput>
  }

  export type ExercicesUpdateWithWhereUniqueWithoutMatieresInput = {
    where: ExercicesWhereUniqueInput
    data: XOR<ExercicesUpdateWithoutMatieresInput, ExercicesUncheckedUpdateWithoutMatieresInput>
  }

  export type ExercicesUpdateManyWithWhereWithoutMatieresInput = {
    where: ExercicesScalarWhereInput
    data: XOR<ExercicesUpdateManyMutationInput, ExercicesUncheckedUpdateManyWithoutMatieresInput>
  }

  export type ExercicesScalarWhereInput = {
    AND?: ExercicesScalarWhereInput | ExercicesScalarWhereInput[]
    OR?: ExercicesScalarWhereInput[]
    NOT?: ExercicesScalarWhereInput | ExercicesScalarWhereInput[]
    id?: StringFilter<"Exercices"> | string
    nom?: StringFilter<"Exercices"> | string
    description?: StringNullableFilter<"Exercices"> | string | null
    matieresId?: StringFilter<"Exercices"> | string
    sousLeconsId?: StringNullableFilter<"Exercices"> | string | null
    leconId?: StringNullableFilter<"Exercices"> | string | null
    typesExercice?: EnumTypesExerciceFilter<"Exercices"> | $Enums.TypesExercice
    createdAt?: DateTimeFilter<"Exercices"> | Date | string
    updatedAt?: DateTimeFilter<"Exercices"> | Date | string
  }

  export type MatieresCreateWithoutLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes: ClassesCreateNestedOneWithoutMatieresInput
    Exercices?: ExercicesCreateNestedManyWithoutMatieresInput
  }

  export type MatieresUncheckedCreateWithoutLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    classesId: string
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Exercices?: ExercicesUncheckedCreateNestedManyWithoutMatieresInput
  }

  export type MatieresCreateOrConnectWithoutLeconsInput = {
    where: MatieresWhereUniqueInput
    create: XOR<MatieresCreateWithoutLeconsInput, MatieresUncheckedCreateWithoutLeconsInput>
  }

  export type SousLeconsCreateWithoutLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Exercices?: ExercicesCreateNestedManyWithoutSousLeconsInput
  }

  export type SousLeconsUncheckedCreateWithoutLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Exercices?: ExercicesUncheckedCreateNestedManyWithoutSousLeconsInput
  }

  export type SousLeconsCreateOrConnectWithoutLeconsInput = {
    where: SousLeconsWhereUniqueInput
    create: XOR<SousLeconsCreateWithoutLeconsInput, SousLeconsUncheckedCreateWithoutLeconsInput>
  }

  export type SousLeconsCreateManyLeconsInputEnvelope = {
    data: SousLeconsCreateManyLeconsInput | SousLeconsCreateManyLeconsInput[]
  }

  export type LeconsUtilisateurCreateWithoutLeconsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLeconsUtilisateurInput
  }

  export type LeconsUtilisateurUncheckedCreateWithoutLeconsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeconsUtilisateurCreateOrConnectWithoutLeconsInput = {
    where: LeconsUtilisateurWhereUniqueInput
    create: XOR<LeconsUtilisateurCreateWithoutLeconsInput, LeconsUtilisateurUncheckedCreateWithoutLeconsInput>
  }

  export type LeconsUtilisateurCreateManyLeconsInputEnvelope = {
    data: LeconsUtilisateurCreateManyLeconsInput | LeconsUtilisateurCreateManyLeconsInput[]
  }

  export type ExercicesCreateWithoutLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    sousLecons?: SousLeconsCreateNestedOneWithoutExercicesInput
    matieres: MatieresCreateNestedOneWithoutExercicesInput
    Reponses?: ReponsesCreateNestedManyWithoutExercicesInput
    OptionsQCM?: OptionsQCMCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesUncheckedCreateWithoutLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    sousLeconsId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    Reponses?: ReponsesUncheckedCreateNestedManyWithoutExercicesInput
    OptionsQCM?: OptionsQCMUncheckedCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesCreateOrConnectWithoutLeconsInput = {
    where: ExercicesWhereUniqueInput
    create: XOR<ExercicesCreateWithoutLeconsInput, ExercicesUncheckedCreateWithoutLeconsInput>
  }

  export type ExercicesCreateManyLeconsInputEnvelope = {
    data: ExercicesCreateManyLeconsInput | ExercicesCreateManyLeconsInput[]
  }

  export type MatieresUpsertWithoutLeconsInput = {
    update: XOR<MatieresUpdateWithoutLeconsInput, MatieresUncheckedUpdateWithoutLeconsInput>
    create: XOR<MatieresCreateWithoutLeconsInput, MatieresUncheckedCreateWithoutLeconsInput>
    where?: MatieresWhereInput
  }

  export type MatieresUpdateToOneWithWhereWithoutLeconsInput = {
    where?: MatieresWhereInput
    data: XOR<MatieresUpdateWithoutLeconsInput, MatieresUncheckedUpdateWithoutLeconsInput>
  }

  export type MatieresUpdateWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassesUpdateOneRequiredWithoutMatieresNestedInput
    Exercices?: ExercicesUpdateManyWithoutMatieresNestedInput
  }

  export type MatieresUncheckedUpdateWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classesId?: StringFieldUpdateOperationsInput | string
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Exercices?: ExercicesUncheckedUpdateManyWithoutMatieresNestedInput
  }

  export type SousLeconsUpsertWithWhereUniqueWithoutLeconsInput = {
    where: SousLeconsWhereUniqueInput
    update: XOR<SousLeconsUpdateWithoutLeconsInput, SousLeconsUncheckedUpdateWithoutLeconsInput>
    create: XOR<SousLeconsCreateWithoutLeconsInput, SousLeconsUncheckedCreateWithoutLeconsInput>
  }

  export type SousLeconsUpdateWithWhereUniqueWithoutLeconsInput = {
    where: SousLeconsWhereUniqueInput
    data: XOR<SousLeconsUpdateWithoutLeconsInput, SousLeconsUncheckedUpdateWithoutLeconsInput>
  }

  export type SousLeconsUpdateManyWithWhereWithoutLeconsInput = {
    where: SousLeconsScalarWhereInput
    data: XOR<SousLeconsUpdateManyMutationInput, SousLeconsUncheckedUpdateManyWithoutLeconsInput>
  }

  export type SousLeconsScalarWhereInput = {
    AND?: SousLeconsScalarWhereInput | SousLeconsScalarWhereInput[]
    OR?: SousLeconsScalarWhereInput[]
    NOT?: SousLeconsScalarWhereInput | SousLeconsScalarWhereInput[]
    id?: StringFilter<"SousLecons"> | string
    nom?: StringFilter<"SousLecons"> | string
    description?: StringNullableFilter<"SousLecons"> | string | null
    leconsId?: StringFilter<"SousLecons"> | string
    createdAt?: DateTimeFilter<"SousLecons"> | Date | string
    updatedAt?: DateTimeFilter<"SousLecons"> | Date | string
  }

  export type LeconsUtilisateurUpsertWithWhereUniqueWithoutLeconsInput = {
    where: LeconsUtilisateurWhereUniqueInput
    update: XOR<LeconsUtilisateurUpdateWithoutLeconsInput, LeconsUtilisateurUncheckedUpdateWithoutLeconsInput>
    create: XOR<LeconsUtilisateurCreateWithoutLeconsInput, LeconsUtilisateurUncheckedCreateWithoutLeconsInput>
  }

  export type LeconsUtilisateurUpdateWithWhereUniqueWithoutLeconsInput = {
    where: LeconsUtilisateurWhereUniqueInput
    data: XOR<LeconsUtilisateurUpdateWithoutLeconsInput, LeconsUtilisateurUncheckedUpdateWithoutLeconsInput>
  }

  export type LeconsUtilisateurUpdateManyWithWhereWithoutLeconsInput = {
    where: LeconsUtilisateurScalarWhereInput
    data: XOR<LeconsUtilisateurUpdateManyMutationInput, LeconsUtilisateurUncheckedUpdateManyWithoutLeconsInput>
  }

  export type ExercicesUpsertWithWhereUniqueWithoutLeconsInput = {
    where: ExercicesWhereUniqueInput
    update: XOR<ExercicesUpdateWithoutLeconsInput, ExercicesUncheckedUpdateWithoutLeconsInput>
    create: XOR<ExercicesCreateWithoutLeconsInput, ExercicesUncheckedCreateWithoutLeconsInput>
  }

  export type ExercicesUpdateWithWhereUniqueWithoutLeconsInput = {
    where: ExercicesWhereUniqueInput
    data: XOR<ExercicesUpdateWithoutLeconsInput, ExercicesUncheckedUpdateWithoutLeconsInput>
  }

  export type ExercicesUpdateManyWithWhereWithoutLeconsInput = {
    where: ExercicesScalarWhereInput
    data: XOR<ExercicesUpdateManyMutationInput, ExercicesUncheckedUpdateManyWithoutLeconsInput>
  }

  export type LeconsCreateWithoutSousLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matieres: MatieresCreateNestedOneWithoutLeconsInput
    LeconsUtilisateur?: LeconsUtilisateurCreateNestedManyWithoutLeconsInput
    Exercices?: ExercicesCreateNestedManyWithoutLeconsInput
  }

  export type LeconsUncheckedCreateWithoutSousLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    LeconsUtilisateur?: LeconsUtilisateurUncheckedCreateNestedManyWithoutLeconsInput
    Exercices?: ExercicesUncheckedCreateNestedManyWithoutLeconsInput
  }

  export type LeconsCreateOrConnectWithoutSousLeconsInput = {
    where: LeconsWhereUniqueInput
    create: XOR<LeconsCreateWithoutSousLeconsInput, LeconsUncheckedCreateWithoutSousLeconsInput>
  }

  export type ExercicesCreateWithoutSousLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    matieres: MatieresCreateNestedOneWithoutExercicesInput
    lecons?: LeconsCreateNestedOneWithoutExercicesInput
    Reponses?: ReponsesCreateNestedManyWithoutExercicesInput
    OptionsQCM?: OptionsQCMCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesUncheckedCreateWithoutSousLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    leconId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    Reponses?: ReponsesUncheckedCreateNestedManyWithoutExercicesInput
    OptionsQCM?: OptionsQCMUncheckedCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesCreateOrConnectWithoutSousLeconsInput = {
    where: ExercicesWhereUniqueInput
    create: XOR<ExercicesCreateWithoutSousLeconsInput, ExercicesUncheckedCreateWithoutSousLeconsInput>
  }

  export type ExercicesCreateManySousLeconsInputEnvelope = {
    data: ExercicesCreateManySousLeconsInput | ExercicesCreateManySousLeconsInput[]
  }

  export type LeconsUpsertWithoutSousLeconsInput = {
    update: XOR<LeconsUpdateWithoutSousLeconsInput, LeconsUncheckedUpdateWithoutSousLeconsInput>
    create: XOR<LeconsCreateWithoutSousLeconsInput, LeconsUncheckedCreateWithoutSousLeconsInput>
    where?: LeconsWhereInput
  }

  export type LeconsUpdateToOneWithWhereWithoutSousLeconsInput = {
    where?: LeconsWhereInput
    data: XOR<LeconsUpdateWithoutSousLeconsInput, LeconsUncheckedUpdateWithoutSousLeconsInput>
  }

  export type LeconsUpdateWithoutSousLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matieres?: MatieresUpdateOneRequiredWithoutLeconsNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUpdateManyWithoutLeconsNestedInput
    Exercices?: ExercicesUpdateManyWithoutLeconsNestedInput
  }

  export type LeconsUncheckedUpdateWithoutSousLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LeconsUtilisateur?: LeconsUtilisateurUncheckedUpdateManyWithoutLeconsNestedInput
    Exercices?: ExercicesUncheckedUpdateManyWithoutLeconsNestedInput
  }

  export type ExercicesUpsertWithWhereUniqueWithoutSousLeconsInput = {
    where: ExercicesWhereUniqueInput
    update: XOR<ExercicesUpdateWithoutSousLeconsInput, ExercicesUncheckedUpdateWithoutSousLeconsInput>
    create: XOR<ExercicesCreateWithoutSousLeconsInput, ExercicesUncheckedCreateWithoutSousLeconsInput>
  }

  export type ExercicesUpdateWithWhereUniqueWithoutSousLeconsInput = {
    where: ExercicesWhereUniqueInput
    data: XOR<ExercicesUpdateWithoutSousLeconsInput, ExercicesUncheckedUpdateWithoutSousLeconsInput>
  }

  export type ExercicesUpdateManyWithWhereWithoutSousLeconsInput = {
    where: ExercicesScalarWhereInput
    data: XOR<ExercicesUpdateManyMutationInput, ExercicesUncheckedUpdateManyWithoutSousLeconsInput>
  }

  export type SousLeconsCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecons: LeconsCreateNestedOneWithoutSousLeconsInput
  }

  export type SousLeconsUncheckedCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    leconsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SousLeconsCreateOrConnectWithoutExercicesInput = {
    where: SousLeconsWhereUniqueInput
    create: XOR<SousLeconsCreateWithoutExercicesInput, SousLeconsUncheckedCreateWithoutExercicesInput>
  }

  export type MatieresCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes: ClassesCreateNestedOneWithoutMatieresInput
    Lecons?: LeconsCreateNestedManyWithoutMatieresInput
  }

  export type MatieresUncheckedCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    classesId: string
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Lecons?: LeconsUncheckedCreateNestedManyWithoutMatieresInput
  }

  export type MatieresCreateOrConnectWithoutExercicesInput = {
    where: MatieresWhereUniqueInput
    create: XOR<MatieresCreateWithoutExercicesInput, MatieresUncheckedCreateWithoutExercicesInput>
  }

  export type LeconsCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matieres: MatieresCreateNestedOneWithoutLeconsInput
    SousLecons?: SousLeconsCreateNestedManyWithoutLeconsInput
    LeconsUtilisateur?: LeconsUtilisateurCreateNestedManyWithoutLeconsInput
  }

  export type LeconsUncheckedCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SousLecons?: SousLeconsUncheckedCreateNestedManyWithoutLeconsInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedCreateNestedManyWithoutLeconsInput
  }

  export type LeconsCreateOrConnectWithoutExercicesInput = {
    where: LeconsWhereUniqueInput
    create: XOR<LeconsCreateWithoutExercicesInput, LeconsUncheckedCreateWithoutExercicesInput>
  }

  export type ReponsesCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurCreateNestedManyWithoutReponsesInput
  }

  export type ReponsesUncheckedCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedCreateNestedManyWithoutReponsesInput
  }

  export type ReponsesCreateOrConnectWithoutExercicesInput = {
    where: ReponsesWhereUniqueInput
    create: XOR<ReponsesCreateWithoutExercicesInput, ReponsesUncheckedCreateWithoutExercicesInput>
  }

  export type ReponsesCreateManyExercicesInputEnvelope = {
    data: ReponsesCreateManyExercicesInput | ReponsesCreateManyExercicesInput[]
  }

  export type OptionsQCMCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    points?: number | null
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionsQCMUncheckedCreateWithoutExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    points?: number | null
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionsQCMCreateOrConnectWithoutExercicesInput = {
    where: OptionsQCMWhereUniqueInput
    create: XOR<OptionsQCMCreateWithoutExercicesInput, OptionsQCMUncheckedCreateWithoutExercicesInput>
  }

  export type OptionsQCMCreateManyExercicesInputEnvelope = {
    data: OptionsQCMCreateManyExercicesInput | OptionsQCMCreateManyExercicesInput[]
  }

  export type SousLeconsUpsertWithoutExercicesInput = {
    update: XOR<SousLeconsUpdateWithoutExercicesInput, SousLeconsUncheckedUpdateWithoutExercicesInput>
    create: XOR<SousLeconsCreateWithoutExercicesInput, SousLeconsUncheckedCreateWithoutExercicesInput>
    where?: SousLeconsWhereInput
  }

  export type SousLeconsUpdateToOneWithWhereWithoutExercicesInput = {
    where?: SousLeconsWhereInput
    data: XOR<SousLeconsUpdateWithoutExercicesInput, SousLeconsUncheckedUpdateWithoutExercicesInput>
  }

  export type SousLeconsUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecons?: LeconsUpdateOneRequiredWithoutSousLeconsNestedInput
  }

  export type SousLeconsUncheckedUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    leconsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatieresUpsertWithoutExercicesInput = {
    update: XOR<MatieresUpdateWithoutExercicesInput, MatieresUncheckedUpdateWithoutExercicesInput>
    create: XOR<MatieresCreateWithoutExercicesInput, MatieresUncheckedCreateWithoutExercicesInput>
    where?: MatieresWhereInput
  }

  export type MatieresUpdateToOneWithWhereWithoutExercicesInput = {
    where?: MatieresWhereInput
    data: XOR<MatieresUpdateWithoutExercicesInput, MatieresUncheckedUpdateWithoutExercicesInput>
  }

  export type MatieresUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassesUpdateOneRequiredWithoutMatieresNestedInput
    Lecons?: LeconsUpdateManyWithoutMatieresNestedInput
  }

  export type MatieresUncheckedUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    classesId?: StringFieldUpdateOperationsInput | string
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Lecons?: LeconsUncheckedUpdateManyWithoutMatieresNestedInput
  }

  export type LeconsUpsertWithoutExercicesInput = {
    update: XOR<LeconsUpdateWithoutExercicesInput, LeconsUncheckedUpdateWithoutExercicesInput>
    create: XOR<LeconsCreateWithoutExercicesInput, LeconsUncheckedCreateWithoutExercicesInput>
    where?: LeconsWhereInput
  }

  export type LeconsUpdateToOneWithWhereWithoutExercicesInput = {
    where?: LeconsWhereInput
    data: XOR<LeconsUpdateWithoutExercicesInput, LeconsUncheckedUpdateWithoutExercicesInput>
  }

  export type LeconsUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matieres?: MatieresUpdateOneRequiredWithoutLeconsNestedInput
    SousLecons?: SousLeconsUpdateManyWithoutLeconsNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUpdateManyWithoutLeconsNestedInput
  }

  export type LeconsUncheckedUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SousLecons?: SousLeconsUncheckedUpdateManyWithoutLeconsNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedUpdateManyWithoutLeconsNestedInput
  }

  export type ReponsesUpsertWithWhereUniqueWithoutExercicesInput = {
    where: ReponsesWhereUniqueInput
    update: XOR<ReponsesUpdateWithoutExercicesInput, ReponsesUncheckedUpdateWithoutExercicesInput>
    create: XOR<ReponsesCreateWithoutExercicesInput, ReponsesUncheckedCreateWithoutExercicesInput>
  }

  export type ReponsesUpdateWithWhereUniqueWithoutExercicesInput = {
    where: ReponsesWhereUniqueInput
    data: XOR<ReponsesUpdateWithoutExercicesInput, ReponsesUncheckedUpdateWithoutExercicesInput>
  }

  export type ReponsesUpdateManyWithWhereWithoutExercicesInput = {
    where: ReponsesScalarWhereInput
    data: XOR<ReponsesUpdateManyMutationInput, ReponsesUncheckedUpdateManyWithoutExercicesInput>
  }

  export type ReponsesScalarWhereInput = {
    AND?: ReponsesScalarWhereInput | ReponsesScalarWhereInput[]
    OR?: ReponsesScalarWhereInput[]
    NOT?: ReponsesScalarWhereInput | ReponsesScalarWhereInput[]
    id?: StringFilter<"Reponses"> | string
    nom?: StringFilter<"Reponses"> | string
    description?: StringNullableFilter<"Reponses"> | string | null
    exercicesId?: StringFilter<"Reponses"> | string
    createdAt?: DateTimeFilter<"Reponses"> | Date | string
    updatedAt?: DateTimeFilter<"Reponses"> | Date | string
  }

  export type OptionsQCMUpsertWithWhereUniqueWithoutExercicesInput = {
    where: OptionsQCMWhereUniqueInput
    update: XOR<OptionsQCMUpdateWithoutExercicesInput, OptionsQCMUncheckedUpdateWithoutExercicesInput>
    create: XOR<OptionsQCMCreateWithoutExercicesInput, OptionsQCMUncheckedCreateWithoutExercicesInput>
  }

  export type OptionsQCMUpdateWithWhereUniqueWithoutExercicesInput = {
    where: OptionsQCMWhereUniqueInput
    data: XOR<OptionsQCMUpdateWithoutExercicesInput, OptionsQCMUncheckedUpdateWithoutExercicesInput>
  }

  export type OptionsQCMUpdateManyWithWhereWithoutExercicesInput = {
    where: OptionsQCMScalarWhereInput
    data: XOR<OptionsQCMUpdateManyMutationInput, OptionsQCMUncheckedUpdateManyWithoutExercicesInput>
  }

  export type OptionsQCMScalarWhereInput = {
    AND?: OptionsQCMScalarWhereInput | OptionsQCMScalarWhereInput[]
    OR?: OptionsQCMScalarWhereInput[]
    NOT?: OptionsQCMScalarWhereInput | OptionsQCMScalarWhereInput[]
    id?: StringFilter<"OptionsQCM"> | string
    nom?: StringFilter<"OptionsQCM"> | string
    description?: StringNullableFilter<"OptionsQCM"> | string | null
    exercicesId?: StringFilter<"OptionsQCM"> | string
    points?: IntNullableFilter<"OptionsQCM"> | number | null
    isCorrect?: BoolFilter<"OptionsQCM"> | boolean
    isSelected?: BoolFilter<"OptionsQCM"> | boolean
    createdAt?: DateTimeFilter<"OptionsQCM"> | Date | string
    updatedAt?: DateTimeFilter<"OptionsQCM"> | Date | string
  }

  export type ExercicesCreateWithoutOptionsQCMInput = {
    id?: string
    nom: string
    description?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    sousLecons?: SousLeconsCreateNestedOneWithoutExercicesInput
    matieres: MatieresCreateNestedOneWithoutExercicesInput
    lecons?: LeconsCreateNestedOneWithoutExercicesInput
    Reponses?: ReponsesCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesUncheckedCreateWithoutOptionsQCMInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    sousLeconsId?: string | null
    leconId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    Reponses?: ReponsesUncheckedCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesCreateOrConnectWithoutOptionsQCMInput = {
    where: ExercicesWhereUniqueInput
    create: XOR<ExercicesCreateWithoutOptionsQCMInput, ExercicesUncheckedCreateWithoutOptionsQCMInput>
  }

  export type ExercicesUpsertWithoutOptionsQCMInput = {
    update: XOR<ExercicesUpdateWithoutOptionsQCMInput, ExercicesUncheckedUpdateWithoutOptionsQCMInput>
    create: XOR<ExercicesCreateWithoutOptionsQCMInput, ExercicesUncheckedCreateWithoutOptionsQCMInput>
    where?: ExercicesWhereInput
  }

  export type ExercicesUpdateToOneWithWhereWithoutOptionsQCMInput = {
    where?: ExercicesWhereInput
    data: XOR<ExercicesUpdateWithoutOptionsQCMInput, ExercicesUncheckedUpdateWithoutOptionsQCMInput>
  }

  export type ExercicesUpdateWithoutOptionsQCMInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sousLecons?: SousLeconsUpdateOneWithoutExercicesNestedInput
    matieres?: MatieresUpdateOneRequiredWithoutExercicesNestedInput
    lecons?: LeconsUpdateOneWithoutExercicesNestedInput
    Reponses?: ReponsesUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesUncheckedUpdateWithoutOptionsQCMInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    sousLeconsId?: NullableStringFieldUpdateOperationsInput | string | null
    leconId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reponses?: ReponsesUncheckedUpdateManyWithoutExercicesNestedInput
  }

  export type LeconsCreateWithoutLeconsUtilisateurInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matieres: MatieresCreateNestedOneWithoutLeconsInput
    SousLecons?: SousLeconsCreateNestedManyWithoutLeconsInput
    Exercices?: ExercicesCreateNestedManyWithoutLeconsInput
  }

  export type LeconsUncheckedCreateWithoutLeconsUtilisateurInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SousLecons?: SousLeconsUncheckedCreateNestedManyWithoutLeconsInput
    Exercices?: ExercicesUncheckedCreateNestedManyWithoutLeconsInput
  }

  export type LeconsCreateOrConnectWithoutLeconsUtilisateurInput = {
    where: LeconsWhereUniqueInput
    create: XOR<LeconsCreateWithoutLeconsUtilisateurInput, LeconsUncheckedCreateWithoutLeconsUtilisateurInput>
  }

  export type UserCreateWithoutLeconsUtilisateurInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurCreateNestedManyWithoutUserInput
    classe?: ClassesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeconsUtilisateurInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
    classesId?: string | null
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeconsUtilisateurInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeconsUtilisateurInput, UserUncheckedCreateWithoutLeconsUtilisateurInput>
  }

  export type LeconsUpsertWithoutLeconsUtilisateurInput = {
    update: XOR<LeconsUpdateWithoutLeconsUtilisateurInput, LeconsUncheckedUpdateWithoutLeconsUtilisateurInput>
    create: XOR<LeconsCreateWithoutLeconsUtilisateurInput, LeconsUncheckedCreateWithoutLeconsUtilisateurInput>
    where?: LeconsWhereInput
  }

  export type LeconsUpdateToOneWithWhereWithoutLeconsUtilisateurInput = {
    where?: LeconsWhereInput
    data: XOR<LeconsUpdateWithoutLeconsUtilisateurInput, LeconsUncheckedUpdateWithoutLeconsUtilisateurInput>
  }

  export type LeconsUpdateWithoutLeconsUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matieres?: MatieresUpdateOneRequiredWithoutLeconsNestedInput
    SousLecons?: SousLeconsUpdateManyWithoutLeconsNestedInput
    Exercices?: ExercicesUpdateManyWithoutLeconsNestedInput
  }

  export type LeconsUncheckedUpdateWithoutLeconsUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SousLecons?: SousLeconsUncheckedUpdateManyWithoutLeconsNestedInput
    Exercices?: ExercicesUncheckedUpdateManyWithoutLeconsNestedInput
  }

  export type UserUpsertWithoutLeconsUtilisateurInput = {
    update: XOR<UserUpdateWithoutLeconsUtilisateurInput, UserUncheckedUpdateWithoutLeconsUtilisateurInput>
    create: XOR<UserCreateWithoutLeconsUtilisateurInput, UserUncheckedCreateWithoutLeconsUtilisateurInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeconsUtilisateurInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeconsUtilisateurInput, UserUncheckedUpdateWithoutLeconsUtilisateurInput>
  }

  export type UserUpdateWithoutLeconsUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUpdateManyWithoutUserNestedInput
    classe?: ClassesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeconsUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classesId?: NullableStringFieldUpdateOperationsInput | string | null
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExercicesCreateWithoutReponsesInput = {
    id?: string
    nom: string
    description?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    sousLecons?: SousLeconsCreateNestedOneWithoutExercicesInput
    matieres: MatieresCreateNestedOneWithoutExercicesInput
    lecons?: LeconsCreateNestedOneWithoutExercicesInput
    OptionsQCM?: OptionsQCMCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesUncheckedCreateWithoutReponsesInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    sousLeconsId?: string | null
    leconId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
    OptionsQCM?: OptionsQCMUncheckedCreateNestedManyWithoutExercicesInput
  }

  export type ExercicesCreateOrConnectWithoutReponsesInput = {
    where: ExercicesWhereUniqueInput
    create: XOR<ExercicesCreateWithoutReponsesInput, ExercicesUncheckedCreateWithoutReponsesInput>
  }

  export type ReponsesUtilisateurCreateWithoutReponsesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReponsesUtilisateurInput
  }

  export type ReponsesUtilisateurUncheckedCreateWithoutReponsesInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReponsesUtilisateurCreateOrConnectWithoutReponsesInput = {
    where: ReponsesUtilisateurWhereUniqueInput
    create: XOR<ReponsesUtilisateurCreateWithoutReponsesInput, ReponsesUtilisateurUncheckedCreateWithoutReponsesInput>
  }

  export type ReponsesUtilisateurCreateManyReponsesInputEnvelope = {
    data: ReponsesUtilisateurCreateManyReponsesInput | ReponsesUtilisateurCreateManyReponsesInput[]
  }

  export type ExercicesUpsertWithoutReponsesInput = {
    update: XOR<ExercicesUpdateWithoutReponsesInput, ExercicesUncheckedUpdateWithoutReponsesInput>
    create: XOR<ExercicesCreateWithoutReponsesInput, ExercicesUncheckedCreateWithoutReponsesInput>
    where?: ExercicesWhereInput
  }

  export type ExercicesUpdateToOneWithWhereWithoutReponsesInput = {
    where?: ExercicesWhereInput
    data: XOR<ExercicesUpdateWithoutReponsesInput, ExercicesUncheckedUpdateWithoutReponsesInput>
  }

  export type ExercicesUpdateWithoutReponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sousLecons?: SousLeconsUpdateOneWithoutExercicesNestedInput
    matieres?: MatieresUpdateOneRequiredWithoutExercicesNestedInput
    lecons?: LeconsUpdateOneWithoutExercicesNestedInput
    OptionsQCM?: OptionsQCMUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesUncheckedUpdateWithoutReponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    sousLeconsId?: NullableStringFieldUpdateOperationsInput | string | null
    leconId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OptionsQCM?: OptionsQCMUncheckedUpdateManyWithoutExercicesNestedInput
  }

  export type ReponsesUtilisateurUpsertWithWhereUniqueWithoutReponsesInput = {
    where: ReponsesUtilisateurWhereUniqueInput
    update: XOR<ReponsesUtilisateurUpdateWithoutReponsesInput, ReponsesUtilisateurUncheckedUpdateWithoutReponsesInput>
    create: XOR<ReponsesUtilisateurCreateWithoutReponsesInput, ReponsesUtilisateurUncheckedCreateWithoutReponsesInput>
  }

  export type ReponsesUtilisateurUpdateWithWhereUniqueWithoutReponsesInput = {
    where: ReponsesUtilisateurWhereUniqueInput
    data: XOR<ReponsesUtilisateurUpdateWithoutReponsesInput, ReponsesUtilisateurUncheckedUpdateWithoutReponsesInput>
  }

  export type ReponsesUtilisateurUpdateManyWithWhereWithoutReponsesInput = {
    where: ReponsesUtilisateurScalarWhereInput
    data: XOR<ReponsesUtilisateurUpdateManyMutationInput, ReponsesUtilisateurUncheckedUpdateManyWithoutReponsesInput>
  }

  export type ReponsesCreateWithoutReponsesUtilisateurInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercices: ExercicesCreateNestedOneWithoutReponsesInput
  }

  export type ReponsesUncheckedCreateWithoutReponsesUtilisateurInput = {
    id?: string
    nom: string
    description?: string | null
    exercicesId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReponsesCreateOrConnectWithoutReponsesUtilisateurInput = {
    where: ReponsesWhereUniqueInput
    create: XOR<ReponsesCreateWithoutReponsesUtilisateurInput, ReponsesUncheckedCreateWithoutReponsesUtilisateurInput>
  }

  export type UserCreateWithoutReponsesUtilisateurInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
    LeconsUtilisateur?: LeconsUtilisateurCreateNestedManyWithoutUserInput
    classe?: ClassesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReponsesUtilisateurInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
    classesId?: string | null
    LeconsUtilisateur?: LeconsUtilisateurUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReponsesUtilisateurInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReponsesUtilisateurInput, UserUncheckedCreateWithoutReponsesUtilisateurInput>
  }

  export type ReponsesUpsertWithoutReponsesUtilisateurInput = {
    update: XOR<ReponsesUpdateWithoutReponsesUtilisateurInput, ReponsesUncheckedUpdateWithoutReponsesUtilisateurInput>
    create: XOR<ReponsesCreateWithoutReponsesUtilisateurInput, ReponsesUncheckedCreateWithoutReponsesUtilisateurInput>
    where?: ReponsesWhereInput
  }

  export type ReponsesUpdateToOneWithWhereWithoutReponsesUtilisateurInput = {
    where?: ReponsesWhereInput
    data: XOR<ReponsesUpdateWithoutReponsesUtilisateurInput, ReponsesUncheckedUpdateWithoutReponsesUtilisateurInput>
  }

  export type ReponsesUpdateWithoutReponsesUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercices?: ExercicesUpdateOneRequiredWithoutReponsesNestedInput
  }

  export type ReponsesUncheckedUpdateWithoutReponsesUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    exercicesId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutReponsesUtilisateurInput = {
    update: XOR<UserUpdateWithoutReponsesUtilisateurInput, UserUncheckedUpdateWithoutReponsesUtilisateurInput>
    create: XOR<UserCreateWithoutReponsesUtilisateurInput, UserUncheckedCreateWithoutReponsesUtilisateurInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReponsesUtilisateurInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReponsesUtilisateurInput, UserUncheckedUpdateWithoutReponsesUtilisateurInput>
  }

  export type UserUpdateWithoutReponsesUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LeconsUtilisateur?: LeconsUtilisateurUpdateManyWithoutUserNestedInput
    classe?: ClassesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReponsesUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classesId?: NullableStringFieldUpdateOperationsInput | string | null
    LeconsUtilisateur?: LeconsUtilisateurUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReponsesUtilisateurCreateManyUserInput = {
    id?: string
    reponsesId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeconsUtilisateurCreateManyUserInput = {
    id?: string
    leconsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReponsesUtilisateurUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reponses?: ReponsesUpdateOneRequiredWithoutReponsesUtilisateurNestedInput
  }

  export type ReponsesUtilisateurUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reponsesId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponsesUtilisateurUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reponsesId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsUtilisateurUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecons?: LeconsUpdateOneRequiredWithoutLeconsUtilisateurNestedInput
  }

  export type LeconsUtilisateurUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leconsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsUtilisateurUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leconsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatieresCreateManyClassesInput = {
    id?: string
    nom: string
    description?: string | null
    pointsTotalMatiere?: number | null
    pointsSeuilMatiere?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyClasseInput = {
    id?: string
    email: string
    nom?: string | null
    prenom?: string | null
    password: string
    dataInscription?: string | null
    derniereConnexion?: Date | string | null
    typesUtilisateur?: $Enums.TypesUtilisateur
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatieresUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Lecons?: LeconsUpdateManyWithoutMatieresNestedInput
    Exercices?: ExercicesUpdateManyWithoutMatieresNestedInput
  }

  export type MatieresUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Lecons?: LeconsUncheckedUpdateManyWithoutMatieresNestedInput
    Exercices?: ExercicesUncheckedUpdateManyWithoutMatieresNestedInput
  }

  export type MatieresUncheckedUpdateManyWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pointsTotalMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    pointsSeuilMatiere?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutClasseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUpdateManyWithoutUserNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClasseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedUpdateManyWithoutUserNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClasseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dataInscription?: NullableStringFieldUpdateOperationsInput | string | null
    derniereConnexion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typesUtilisateur?: EnumTypesUtilisateurFieldUpdateOperationsInput | $Enums.TypesUtilisateur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsCreateManyMatieresInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExercicesCreateManyMatieresInput = {
    id?: string
    nom: string
    description?: string | null
    sousLeconsId?: string | null
    leconId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeconsUpdateWithoutMatieresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SousLecons?: SousLeconsUpdateManyWithoutLeconsNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUpdateManyWithoutLeconsNestedInput
    Exercices?: ExercicesUpdateManyWithoutLeconsNestedInput
  }

  export type LeconsUncheckedUpdateWithoutMatieresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SousLecons?: SousLeconsUncheckedUpdateManyWithoutLeconsNestedInput
    LeconsUtilisateur?: LeconsUtilisateurUncheckedUpdateManyWithoutLeconsNestedInput
    Exercices?: ExercicesUncheckedUpdateManyWithoutLeconsNestedInput
  }

  export type LeconsUncheckedUpdateManyWithoutMatieresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExercicesUpdateWithoutMatieresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sousLecons?: SousLeconsUpdateOneWithoutExercicesNestedInput
    lecons?: LeconsUpdateOneWithoutExercicesNestedInput
    Reponses?: ReponsesUpdateManyWithoutExercicesNestedInput
    OptionsQCM?: OptionsQCMUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesUncheckedUpdateWithoutMatieresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sousLeconsId?: NullableStringFieldUpdateOperationsInput | string | null
    leconId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reponses?: ReponsesUncheckedUpdateManyWithoutExercicesNestedInput
    OptionsQCM?: OptionsQCMUncheckedUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesUncheckedUpdateManyWithoutMatieresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sousLeconsId?: NullableStringFieldUpdateOperationsInput | string | null
    leconId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SousLeconsCreateManyLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeconsUtilisateurCreateManyLeconsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExercicesCreateManyLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    sousLeconsId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SousLeconsUpdateWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Exercices?: ExercicesUpdateManyWithoutSousLeconsNestedInput
  }

  export type SousLeconsUncheckedUpdateWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Exercices?: ExercicesUncheckedUpdateManyWithoutSousLeconsNestedInput
  }

  export type SousLeconsUncheckedUpdateManyWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsUtilisateurUpdateWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLeconsUtilisateurNestedInput
  }

  export type LeconsUtilisateurUncheckedUpdateWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeconsUtilisateurUncheckedUpdateManyWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExercicesUpdateWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sousLecons?: SousLeconsUpdateOneWithoutExercicesNestedInput
    matieres?: MatieresUpdateOneRequiredWithoutExercicesNestedInput
    Reponses?: ReponsesUpdateManyWithoutExercicesNestedInput
    OptionsQCM?: OptionsQCMUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesUncheckedUpdateWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    sousLeconsId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reponses?: ReponsesUncheckedUpdateManyWithoutExercicesNestedInput
    OptionsQCM?: OptionsQCMUncheckedUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesUncheckedUpdateManyWithoutLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    sousLeconsId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExercicesCreateManySousLeconsInput = {
    id?: string
    nom: string
    description?: string | null
    matieresId: string
    leconId?: string | null
    typesExercice?: $Enums.TypesExercice
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExercicesUpdateWithoutSousLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matieres?: MatieresUpdateOneRequiredWithoutExercicesNestedInput
    lecons?: LeconsUpdateOneWithoutExercicesNestedInput
    Reponses?: ReponsesUpdateManyWithoutExercicesNestedInput
    OptionsQCM?: OptionsQCMUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesUncheckedUpdateWithoutSousLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    leconId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reponses?: ReponsesUncheckedUpdateManyWithoutExercicesNestedInput
    OptionsQCM?: OptionsQCMUncheckedUpdateManyWithoutExercicesNestedInput
  }

  export type ExercicesUncheckedUpdateManyWithoutSousLeconsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    matieresId?: StringFieldUpdateOperationsInput | string
    leconId?: NullableStringFieldUpdateOperationsInput | string | null
    typesExercice?: EnumTypesExerciceFieldUpdateOperationsInput | $Enums.TypesExercice
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponsesCreateManyExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionsQCMCreateManyExercicesInput = {
    id?: string
    nom: string
    description?: string | null
    points?: number | null
    isCorrect?: boolean
    isSelected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReponsesUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUpdateManyWithoutReponsesNestedInput
  }

  export type ReponsesUncheckedUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReponsesUtilisateur?: ReponsesUtilisateurUncheckedUpdateManyWithoutReponsesNestedInput
  }

  export type ReponsesUncheckedUpdateManyWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionsQCMUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionsQCMUncheckedUpdateWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionsQCMUncheckedUpdateManyWithoutExercicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponsesUtilisateurCreateManyReponsesInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReponsesUtilisateurUpdateWithoutReponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReponsesUtilisateurNestedInput
  }

  export type ReponsesUtilisateurUncheckedUpdateWithoutReponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReponsesUtilisateurUncheckedUpdateManyWithoutReponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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