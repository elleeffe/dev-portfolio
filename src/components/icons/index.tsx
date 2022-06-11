import Coding from './Coding';
import Design from './Design';
import Download from './Download';
import Email from './Email';
import Email2 from './Email2';
import Error from './Error';
import Facebook from './Facebook';
import Linkedin from './Linkedin';
import Loader from './Loader';
import Resume from './Resume';
import Send from './Send';
import Success from './Success';
import User from './User';
import Website from './Website';
import Work from './Work';

const Icons = {
  Coding,
  Design,
  Download,
  Email,
  Email2,
  Error,
  Facebook,
  Linkedin,
  Resume,
  Loader,
  Send,
  Success,
  User,
  Website,
  Work,
};

export type IconType = keyof typeof Icons;

export default Icons;
