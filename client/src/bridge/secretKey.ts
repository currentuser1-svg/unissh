// FORK (convenience build): there is no per-account Secret Key any more. The core
// derives the Unlock Key from the master password plus this fixed, public constant
// (see rust-core keychain `SecretKey::fixed`), so nothing is stored in an OS
// keychain, typed by the user, or lost with a phone. Kept as a module so every
// existing caller keeps working unchanged.

/** Hex of the fixed fork-wide Secret Key (ASCII "unissh-no-secret"). */
export const FIXED_SECRET_KEY_HEX = "756e697373682d6e6f2d736563726574";

/** Always the fixed key; never touches a keychain. */
export function readSecretKeyOnce(): Promise<string | null> {
  return Promise.resolve(FIXED_SECRET_KEY_HEX);
}

/** No-op: the key is a constant, there is nothing to remember. */
export function rememberSecretKey(_key: string) {}

/** No-op: the key is a constant, there is nothing to forget. */
export function clearSecretKey() {}
