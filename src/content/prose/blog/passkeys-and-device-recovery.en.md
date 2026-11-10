---
locale: en
episodes:
  - next-token-weekly--007
status: published
publishedAt: '2026-11-10'
title: 'How to recover your account when you no longer need to remember passwords'
description: 'Automatically generated passwords and passkeys ease the burden of everyday sign-ins. When switching phones or operating systems, or losing a device, you need to know where your credentials are stored and what recovery options are available.'
updatedAt: '2026-11-10'
---

For a newly registered account, a password manager generates and fills in the password at sign-in. After using it for years, you may never have memorized that string of characters. Then, when you get ready to switch phones, you start to worry: if the old phone is gone, will you still be able to access the account?

That concern came up in the password discussion in episode seven. Before answering it, we need to look at whether the account uses a password or a passkey, and where the credential is stored.

## Automatic password filling and passkey sign-in

A password manager stores and fills in passwords for you, while the website still verifies your identity with a password. Passkeys use a key pair for authentication; a fingerprint, face scan, or device PIN approves local use of the credential. The website does not receive your fingerprint. [FIDO's explanation](https://fidoalliance.org/passkeys-2/) describes how this works.

The same manager can store both kinds of credentials, so just seeing a face scan at sign-in is not enough to tell which one the account uses.

You also need to confirm whether credentials are synced. FIDO distinguishes between synced passkeys and passkeys bound to a single device. A device-bound passkey will not appear automatically just because you signed in to the same cloud account on a new phone.

## If you still have the old device, verify the new one first

The easiest check when switching phones is to keep access to the old device, sign in to your password manager on the new device, confirm that syncing is complete, and then actually sign in to a few important accounts. Seeing an account name in the list only means that you can see the entry; it does not prove that the sign-in process will work all the way through.

Microsoft's [guide to managing passkeys](https://support.microsoft.com/en-us/accounts-billing/security/manage-your-saved-passkeys) follows the same order: when you need to create a new credential, complete setup first, then clear out the old credential; when using a synced manager, restore access to the manager first.

Be especially sure to check each account when switching operating systems or changing managers. Both may support passkeys, but there can still be differences in migration methods, browser support, or website sign-in flows. Confirm that the new sign-in option works before dealing with the old device, and you will avoid a lot of trouble.

## If you lose all your devices

At that point, you need to check the provider's recovery requirements. Take iCloud Keychain as an example: Apple's documentation distinguishes between adding a new device and losing all devices, and lists options such as a recovery contact, along with the authentication requirements for iCloud Keychain escrow recovery. The specifics depend on the settings already configured for your account, so check the [official guidance](https://support.apple.com/guide/iphone/passwords-devices-iph82d6721b2/26/ios/26).

From time to time, check whether your trusted phone number is still in use, whether a recovery contact has been set up, and whether the recovery information you need exists only on your current phone. If the credentials on your phone are needed to recover your email, and signing in to that email is required to recover your phone account, confirm ahead of time what other usable route is available.

You do not need to test this by signing out of all your devices. Keep your current access, check your recovery settings, and complete a real sign-in on a new device; that will usually uncover many gaps.


## Related resources

- [How password managers work and generate passwords](/weekly/007/transcript#quote-53ea85195bdef30afbf9)
- [Concerns about switching phones or operating systems](/weekly/007/transcript#quote-3d7f7fc305ff23b31561)
- [FIDO Alliance: Passkeys](https://fidoalliance.org/passkeys-2/), accessed October 26, 2026.
- [Microsoft: Manage your saved passkeys](https://support.microsoft.com/en-us/accounts-billing/security/manage-your-saved-passkeys), accessed October 26, 2026.
- [Apple: Make your passwords and passkeys available across devices with iPhone and iCloud Keychain](https://support.apple.com/guide/iphone/passwords-devices-iph82d6721b2/26/ios/26), accessed October 26, 2026.
