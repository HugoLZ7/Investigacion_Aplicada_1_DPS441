function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} LabStock - Sistema de Préstamo de Equipos
      </p>
      <p style={styles.sub}>
        Desarrollado por Hugo | React Prototype
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
    background: "#1e3c72",
    color: "white",
  },
  text: {
    margin: 0,
    fontWeight: "bold",
  },
  sub: {
    margin: 0,
    fontSize: "13px",
    opacity: 0.8,
  },
};

export default Footer;
