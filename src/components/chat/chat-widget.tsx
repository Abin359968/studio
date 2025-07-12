'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import { CornerDownLeft, MessageSquare, Mic, Paperclip, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-8 w-8" />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] flex flex-col h-[80vh] max-h-[600px] p-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle>AI Assistant</DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-3 ${
                    m.role === 'user' ? 'justify-end' : ''
                  }`}
                >
                  {m.role !== 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 text-sm ${
                      m.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {m.content}
                  </div>
                  {m.role === 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="relative">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about my projects, skills, or experience..."
                className="pr-12"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute inset-y-0 right-0"
              >
                <CornerDownLeft className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
