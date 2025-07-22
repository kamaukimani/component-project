function Contact(props) {
  const { page } = props;

  if (page !== "contact") {
    return null;
  }

  return (
    <div>
      <h1>This is Contact us</h1>
    </div>
  );
}

export default Contact;
