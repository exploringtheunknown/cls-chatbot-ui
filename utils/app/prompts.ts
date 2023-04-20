import { OpenAIModels } from '@/types/openai';
import { Prompt } from '@/types/prompt';

export const updatePrompt = (updatedPrompt: Prompt, allPrompts: Prompt[]) => {
  const updatedPrompts = allPrompts.map((c) => {
    if (c.id === updatedPrompt.id) {
      return updatedPrompt;
    }

    return c;
  });

  savePrompts(updatedPrompts);

  return {
    single: updatedPrompt,
    all: updatedPrompts,
  };
};

export const savePrompts = (prompts: Prompt[]) => {
  const promptsToSave = prompts.filter((prompt) => !prompt.id.startsWith('default-prompt'));
  localStorage.setItem('prompts', JSON.stringify(promptsToSave));
};

export const defaultPrompts: Prompt[] = [
  {
    id: 'default-prompt-2',
    name: 'Proof reading',
    description: 'Use this text to proof read any text you want.',
    content: `I want you act as a proofreader.
    I will provide you texts and I would like you to review them for any spelling, grammar, or punctuation errors.
    Once you have finished reviewing the text, provide me with any necessary corrections or suggestions for improve the text.`,
    model: OpenAIModels['gpt-3.5-turbo'],
    folderId: null,
    locked: true
  },
  {
    id: 'default-prompt-3',
    name: 'Translator',
    description: 'Translate any text',
    content: `I want you to act as an English translator, spelling corrector and improver.
    I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English.
    I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences.
    Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations.
    Start by asking me what sentence I want translated.`,
    model: OpenAIModels['gpt-3.5-turbo'],
    folderId: null,
    locked: true
  },
]
