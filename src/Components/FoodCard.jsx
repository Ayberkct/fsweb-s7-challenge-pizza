import React from "react";
import styled from "styled-components";

const YemekCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin: 16px;
  max-width: 581px;
`;

const Baslik = styled.h2`
  font-size: 24px;
  color: #333;
`;

const FiyatPuanYorumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
`;

const Fiyat = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: #ce2829;
  margin: 0;
`;

const PuanYorumContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Puan = styled.p`
  font-size: 18px;
  color: #888;
  margin: 0 30px 0 0;
`;

const Yorum = styled.p`
  font-size: 18px;
  color: #888;
  margin: 0 0 0 20px;
`;

const Aciklama = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 16px;
  text-align: left;
`;
function FoodCard() {
  return (
    <>
      <YemekCard>
        <Baslik>Position Absolute Acı Pizza</Baslik>
        <FiyatPuanYorumContainer>
          <Fiyat>85.50₺</Fiyat>
          <PuanYorumContainer>
            <Puan>4.9</Puan>
            <Yorum>(200)</Yorum>
          </PuanYorumContainer>
        </FiyatPuanYorumContainer>
        <Aciklama>
          Frontend Developer olarak hala `position: absolute` kullanıyorsan bu
          çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
          çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
          odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
          yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
          kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </Aciklama>
      </YemekCard>
    </>
  );
}

export default FoodCard;
