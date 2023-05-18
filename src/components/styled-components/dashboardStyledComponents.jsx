import { Box } from '@mui/material';
import styled from 'styled-components';

export const TopBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const UpperBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 90px;
    background: #0066ff;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const LowerBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 90px;
    background: #cce0ff;
    gap: 10px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const SideNavigationBar = styled.div`
    // width: 30%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 30px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const OutLetSpace = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 67%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const LogoSpace = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;

    svg {
        color: white;
        background: #0066ff;
        border: 2px solid white;
        font-size: 200%;
    }

    span {
        color: white;
        font-weight: 700;
        font-size: 150%;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CourseDivision = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 69%;
    padding: 20px 15px;
    // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    gap: 20px;
    border-radius: 8px;
    background: white;
    border: 1px solid #c2d1f0;

    h3 {
        font-weight: 600;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        
    }
`;

export const LecturerDivision = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 29%;
    padding: 20px 15px;
    // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    gap: 20px;
    border-radius: 8px;
    background: white;
    border: 1px solid #c2d1f0;

    h3 {
        font-weight: 600;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        
    }
`;

export const LecturerList = styled.ul`
    list-style-type: none;
    font-size: 90%;
    width: 100%;

    li {
        width: 100%;
        border-bottom: 1px solid gray;
        font-weight: bold;

        &:hover {
            background: #ebf0fa;
        }

        button {
            cursor: pointer;
            width: 100%;
            text-align: left;
            background: transparent;
            border: none;
            padding: 10px;
        }
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const ModalLabel = styled.label`
    color: gray;
    font-size: 95%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const Popup = styled(Box)`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 50%;
    background-color: white;
    border: none;
    box-shadow: 24px;
    height: 100%;
    padding: 50px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 60%;
        padding: 40px;
    }

    @media (max-width: 480px) {
        width: 80%;
        padding: 20px;
    }
`;

export const TopCourseInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;    
    flex-wrap: wrap;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        
        div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            align-items: center;
            gap: 20px;
        }
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CourseManagementContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    // gap: 20px;
    border: 1px solid #c2d1f0;
    border-radius: 8px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        
    }
`;

export const CustomTableContainer = styled.div`
    borderRadius: 8px;
    width: 100%;

    h4 {
        padding: 15px 15px 0;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
     
    }

    @media (max-width: 480px) {
        
    }
`;

export const DetailsForAllocatedLecturer = styled.div`
    padding: 15px;
    width: 100%;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;            
        }
    }

    h4 {
        margin-bottom: 10px;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
     
    }

    @media (max-width: 480px) {
        
    }
`;

export const Lecturers = styled.div`
    width: 33%;
    margin-bottom: 20px;

    h4 {
        margin-bottom: 10px;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        
    }

    @media (max-width: 768px) {
     
    }

    @media (max-width: 480px) {
        
    }
`;

export const ChooseLecturers = styled.div`
    width: 33%;
    margin-bottom: 20px;

    h4 {
        margin-bottom: 10px;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 991px) {
        width: 100%;
    }

    @media (max-width: 768px) {
     
    }

    @media (max-width: 480px) {
        
    }
`;

export const SmallButton = styled.button`
    padding: 2px 10px;
    border: none;
    color: white;
    background: green;
    cursor: pointer;

    &:hover {
        color: black;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CourseListContainer = styled.div`
    margin-top: 10px;
    padding: 10px;
    background: #f0f0f1;
    width: 100%;
    font-size: 90%;
    min-height: 300px;
    height: 300px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CourseList = styled.ul`
    list-style-type: none;
    overflow-y: scroll;
    max-height: 280px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CourseListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3px 0;
    
    &:hover {
        background-color: whiteSmoke;
    }

    &:nth-child(even) {
        background-color: white;
        
        &:hover {
            background-color: whiteSmoke;
        }   
    }

    span {
        margin-left: 10px;
        width: 60%;
    }

    strong {
        width: 20%;
    }

    button {
        width: 20%;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const a = styled.div`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const b = styled.div`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const J = styled.div`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const K = styled.div`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;