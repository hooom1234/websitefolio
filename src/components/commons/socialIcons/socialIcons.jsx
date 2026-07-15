import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaDiscord,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">


      <a
        href="https://github.com/hooom1234"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 mx-1 text-zinc-400 hover:text-brand-cyan drop-shadow-[1px_1px_0_var(--color-brand-purple)]"
        aria-label="Github"
      >
        <FaGithub className="h-7 w-7" />
      </a>

      <a
        href="https://discordapp.com/users/739351801312313395"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 mx-1 text-zinc-400 hover:text-brand-cyan drop-shadow-[1px_1px_0_var(--color-brand-purple)]"
        aria-label="Discord"
      >
        <FaDiscord className="h-7 w-7" />
      </a>

      <a
        href="https://www.instagram.com/tawunpingma/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 mx-1 text-zinc-400 hover:text-brand-cyan drop-shadow-[1px_1px_0_var(--color-brand-purple)]"
        aria-label="Instagram"
      >
        <FaInstagram className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
