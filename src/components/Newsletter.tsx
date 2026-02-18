const Newsletter = () => {
  return (
    <>
      <h2 className="section-heading">N E W S L E T T E R</h2>
      <p className="paragraph my-3 text-center leading-loose">
        Get latest updates every weekend
      </p>
      <form
        className="flex items-center justify-center gap-3 select-none"
        action="/"
        method="POST"
      >
        <input
          required
          name="email"
          autoComplete="email"
          type="email"
          className="focus:ring-accent ring-foreground/60 placeholder:text-foreground/40 rounded-lg px-4 py-1 leading-relaxed opacity-90 ring-1 outline-0"
          placeholder="yourname@email.com"
        />
        <button type="submit" className="button animation">
          Subscribe
        </button>
      </form>
    </>
  );
};

export default Newsletter;
