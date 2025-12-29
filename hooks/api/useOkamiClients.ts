'use client'; 

import { useQuery } from "@tanstack/react-query";
import { getOkamiClients } from "@/services/clients.service";

export const useOkamiClients = () => {
  return useQuery({
    queryKey: ["clients", "okami-buyers"],
    queryFn: getOkamiClients,
    staleTime: 1000 * 60 * 5,
  });
};
