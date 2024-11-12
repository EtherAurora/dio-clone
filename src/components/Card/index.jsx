import React from 'react'
import { 
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo
} from './style';
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://private-user-images.githubusercontent.com/108990171/302113751-7dc7dd9f-6346-49c7-b1ac-8a2f744da966.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA5Nzg3MTEsIm5iZiI6MTczMDk3ODQxMSwicGF0aCI6Ii8xMDg5OTAxNzEvMzAyMTEzNzUxLTdkYzdkZDlmLTYzNDYtNDljNy1iMWFjLThhMmY3NDRkYTk2Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEwN1QxMTIwMTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MWQyYzRkMGVmNzEyMTFjZjFmZDdmMDgwMjM5MTM1N2UzMzMxMWI1ZGZhNjAzZTViNDNkZWUyODMxNzBmYTVjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.BWbh6SI2dCDfQHsNyyZt-wbJv4eecgLDn6nf0id6VGI'/>
      <Content>
        <UserInfo>
            <UserPicture src='https://avatars.githubusercontent.com/u/108990171?v=4' />
            <div>
                <h4> Aurora Santos </h4>
                <p> Há 8 minutos </p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4> Projeto para curso de HTML e CSS </h4>
            <p> Projeto feito para curso de html e css no bootcamp dio global da XP... <strong>Saiba Mais</strong> </p>
        </PostInfo>
        <HasInfo>
            <h4> #HTML #CSS #Javascript </h4>
            <p>
                <FiThumbsUp /> 1000
            </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card };
