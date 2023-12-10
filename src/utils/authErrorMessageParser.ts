function authErrorMessageParser(errorCode: string) {
  switch (errorCode) {
    case 'auth/invalid-credential':
      return 'Wrong email or password';
    case 'auth/email-already-exists':
      return 'The provided email is already in use by an existing user.';
    case 'auth/invalid-email':
      return 'Wrong email';
    case 'auth/user-not-found':
      return 'User not found';
    default:
      errorCode;
  }
}

export default authErrorMessageParser;
