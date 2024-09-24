import {
  SignInViaBackend,
  SignInWithProvider,
} from '../../../shared/components/auth/sign-in';

const Auth = () => {
  return (
    <section>
      <SignInViaBackend />
      <SignInWithProvider />
      <SignInWithProvider provider="github" />
    </section>
  );
};

export default Auth;
