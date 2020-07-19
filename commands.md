### For typescript react app

1. npx create-react-app quiz --template typescript

2. cd quiz
3. npm styled-components i @types/styledcomponents

```
type Props={
    questionNum:number,
    question : string,
    options : string[]
}

export const QuestionCard : React.FC<Props>=({questionNum, question})=>{

    return(<div>
        Question : {questionnum}
        </div>
        <p>dangerouslySetInnerHTML={{
            __html : question
        }}</p>
    );
}
```
