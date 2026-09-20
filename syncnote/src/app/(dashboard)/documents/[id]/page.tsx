"use client"

import { RxCounterClockwiseClock } from "react-icons/rx";
import { RiSparklingLine } from "react-icons/ri";
import { FaArrowUp } from 'react-icons/fa';
import { useGetAllNotes } from '@/hooks/useNote';
import { use, useEffect, useRef, useState } from "react";
import NoteEditor from "@/components/editor/NoteEditor";
import { db } from "@/db/db";
import { useDispatch } from "react-redux";
import { setSaveStatus } from "@/store/slices/editorSlice";



function page({ params }: {
  params: Promise<{ id: string }>;
}) {


  const { id } = use(params);

  const { data: notes, isPending, isError } = useGetAllNotes();
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);


  const project = notes?.find((d) => d.id === Number(id));

  const dispach = useDispatch()

  useEffect(() => {
    return () => {
      if (saveTimeout.current) {
        clearTimeout(saveTimeout.current);
      }
    }
  }, []);

  if (isPending) {
    return <div>Loading note...</div>;
  }

  if (isError) {
    return <div>Failed to load note.</div>;
  }

  if (!project) {
    return <div>Note not found.</div>;
  }

  const noteId = project.id;
  const title = project.title;

  async function saveNote(newContent: string) {
    console.log("Saving:", newContent)
    await db.notes.put({
      id: noteId,
      title,
      content: newContent,
      updatedAt: new Date().toISOString(),
    })
    setSaveStatus("saved");
  }


  async function checkNote() {
    const note = await db.notes.get(noteId);
    console.log(note)
  }

  function handleEditorChange(newContent: string) {
    dispach(setSaveStatus("saving"))
    if (saveTimeout.current) {
      clearTimeout(saveTimeout.current);
    }
    saveTimeout.current = setTimeout(() => {
      saveNote(newContent);
    }, 500);
  }



  return (
    <div className='flex flex-row h-full'>
      <div className='flex flex-1 flex-col  h-[89vh] p-6 '>
        <NoteEditor content={project?.content ?? ""} onChange={handleEditorChange} />
      </div>



      <aside className='w-72 border-l-2  border bg-white flex flex-col'>

        {/* Version History */}
        <div className='rounded-lg border p-2 m-6 bg-primary/10 justify-between flex flex-row  '>
          <div className='gap-1 items-center flex flex-row text-gray-700'>
            <RxCounterClockwiseClock />
            <span className='text-sm'>Version History</span>
          </div>

          <span className='p-1 rounded bg-blue-100 text-xs'>v1.0</span>
        </div>


        {/* Comments */}
        <div className='border-t border-gray-300 flex-col flex p-6 gap-2'>

          <div className="flex flex-row items-center justify-between">
            <span className='font-bold text-gray-800'>Comments</span>
            <p className='p-1 px-2 rounded bg-blue-100 text-xs'>3 New</p>
          </div>



        </div>


        <div className='mt-auto border-t border-gray-300 flex flex-col gap-2 p-4'>

          <div className='flex flex-row gap-1'>
            <button className='bg-primary text-white rounded p-1'>
              <RiSparklingLine />
            </button>

            <span className='text-primary font-bold'>Sync AI</span>


          </div>
          <div className='relative border border-gray-100 flex w-full'>
            <textarea placeholder='Ask AI to summarize or rewrite..' className=' bg-primary/20 resize-none rounded-lg w-full  p-2 text-xs h-20 ' />

            <button className='bg-primary text-white rounded absolute bottom-1 right-1 p-1'>
              <FaArrowUp size={16} />
            </button>
          </div>


        </div>


      </aside>
    </div>
  );
}

export default page;
