import styled from "@emotion/styled";
import { useReducer } from "react";
import "./App.css";
import { Brands } from "./components/Brands/Brands";
import CreateBrand from "./components/Brands/CreateBrand/CreateBrand";
import CreateOrder from "./components/Orders/CreateOrder/CreateOrder";
import { initialData } from "./constants";
import { BrandsContext, BrandsDispatchContext } from "./contexts";
import { brandReducer } from "./reducer";

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  & > * {
    margin: 2rem 0;
  }
`;
const ActionableContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    margin: 1rem;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
`;

export const FlatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #000;
  margin: 0.5rem;
  & h4 {
    margin: 0.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  & > * {
    margin: 0.5rem;
  }
`;

export const DescriptorText = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

function App() {
  const [state, dispatch] = useReducer(brandReducer, initialData);

  return (
    <div className="App">
      <PageWrapper>
        <BrandsContext.Provider value={state}>
          <BrandsDispatchContext.Provider value={dispatch}>
            <h1>Brand Orders</h1>
            <Brands />
            <ActionableContainer>
              <CreateBrand />
              <CreateOrder />
            </ActionableContainer>
          </BrandsDispatchContext.Provider>
        </BrandsContext.Provider>
      </PageWrapper>
    </div>
  );
}

export default App;
