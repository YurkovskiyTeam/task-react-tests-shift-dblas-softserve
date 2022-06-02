import axios from "axios";
import getGitHubUser from "../services/DataService";

jest.mock("axios");

describe("Data Service Tests", () => {
  const baseURL = "https://api.github.com/users";

  it("should call correct url with given user as an argument", async () => {
    const user = "dblas";
    await getGitHubUser(user);

    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/${user}`);
  });

  it("should return correct response when getGitHubUser is called and no error occur", async () => {
    const response = { data: { id: 1, name: "Daria" } };
    const user = "dblas";

    axios.get.mockResolvedValueOnce(response);
    const result = await getGitHubUser(user);

    expect(result).toEqual(response);
  });
});
