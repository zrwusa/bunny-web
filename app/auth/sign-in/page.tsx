import {
  SignInViaBackend,
  SignInWithProvider,
} from '../../../shared/components/auth/sign-in';
import { Suspense } from 'react';

const Auth = () => {
  return (
    <section>
        <Suspense>
            <SignInViaBackend />
            <SignInWithProvider />
            <SignInWithProvider provider="github" />
        </Suspense>
    </section>
  );
};

export default Auth;
