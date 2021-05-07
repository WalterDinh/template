export default {
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginTop: 10,
    width: "75%",
    height: 170,
    resizeMode: "contain"
  },
  logoTypePokemon: {
    width: "90%",
    resizeMode: "contain"
  },
  boxInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "90%",
    height: 40,
    zIndex: 4,
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 3,
      height: 0
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 3
  },
  listItem: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    opacity: 0.9,
    marginVertical: 8,
    borderRadius: 20,
    flexDirection: "row",
    width: "100%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 3,
      height: 0
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 3,
    height: 95
  },
  boxType: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    width: "45%",
    height: 75
  },

  input: {
    width: "90%",
    zIndex: 6,
    fontSize: 16,
    fontWeight: "bold"
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#30B5F1"
  },
  boxList: {
    minHeight: "60%",
    alignItems: "center",
    justifyContent: "center",
    width: "90%"
  }
};
