import styled from "@emotion/styled";

const HeaderLayout = styled.header`
  width: 100%;
  height: 3.125vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 17.7vw;
  aspect-ratio: 340/30;
  background: url("/logo.png") no-repeat center;
`;

const SearchBar = styled.div`
  width: 64.6vw;
  height: 100%;
  border-radius: 0.52vw;
  background: white;
`;

const SearchInput = styled.input`
  border: none;
`;

const SearchButton = styled.button`
  color: white;
  background-color: #6536ff;
  height: 100%;
  border-radius: 0.52vw;
  border: none;
`;

export default function Header() {
  return (
    <HeaderLayout>
      <Logo />
      <SearchBar>
        <SearchInput type="text" />
        <SearchButton>Search</SearchButton>
      </SearchBar>
    </HeaderLayout>
  );
}
