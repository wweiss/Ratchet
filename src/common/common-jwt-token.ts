/**
 * This is meant to be an object that wraps up the standard JWT fields along with some other helpful fields
 * in a type-safe way.  This is used in my Epsilon library although it can be easily used elsewhere.
 *
 * In the case of a sudo situation, use the proxy field.  For example, if I am alice but I am running as
 * bob, bob should be in the user field and alice should be in the proxy field.  While this may seem somewhat
 * backwards, it allows the majority of code to proceed as if bob is logged in, and only code that cares that a
 * proxy is going on (e.g., audit trail code) needs to even check the proxy field.
 *
 * Note: other interfaces can extend this token to gain more functionality
 */

export interface CommonJwtToken<T> {
  exp: number; // Expiration time
  iat: number; // Issued at (time of creation)
  iss: string; // Issuer
  sub: string; // Subject
  aud: string; // Audience
  jti: string; // Unique ID for the token

  user: T; // Data for the authenticated user
  proxy: T; // Data for the proxy user (if any)

  roles: string[]; // Roles that the current customer has
}
