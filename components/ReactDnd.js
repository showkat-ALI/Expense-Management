import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDragAndDrop from './ReactDragAndDrop';

const ReactDnd = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <ReactDragAndDrop></ReactDragAndDrop>
        </DndProvider>
    );
};

export default ReactDnd;