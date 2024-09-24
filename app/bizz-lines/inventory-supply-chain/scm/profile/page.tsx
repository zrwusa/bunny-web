import { getServerSession } from 'next-auth';
import authConf from '../../../../../config/auth';
import Image from 'next/image';

const Profile = async () => {
  const session = await getServerSession(authConf);
  if (!session) return <></>;

  const { user } = session;
  if (!user) return <></>;
  const { image, email, name } = user;

  return (
    <>
      {image ? (
        <Image
          className="h-28"
          src={image}
          alt="User image"
          width={100}
          height={100}
        />
      ) : null}
      {email ? <h2>{email}</h2> : null}
      {name ? <h2>{name}</h2> : null}
    </>
  );
};

export default Profile;
